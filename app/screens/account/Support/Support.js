import React,{Component} from 'react';
import {TouchableOpacity, SafeAreaView,View, Modal, StyleSheet, Image, FlatList, Text } from 'react-native';
import TransactionMessage from '../../../components/sub-components/Messages/TransactionMessage';
import SupportMessageModal from '../../../components/sub-components/Messages/SupportMessageModal';
import {getUserTickets} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';
import {addTicket} from '../../../services/api_requests';
import { withTranslation } from 'react-i18next';
import IBSDropDownMenu from '../../../components/sub-components/inputs/IBSDropDownMenu';

let newTicketIcon = '../../../assets/icons/Support/newTicket.png';

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            modalVisible : false,
            tickets : [],
            renderedTickets : [],
            isLoading : false,
            problem : null,
            newTicketSubject : '',
            newTicketDescription : '',
            filterDropDownOpen : false,
            filterOption : '',
            error : '',
            dropDownLabels : [
                {label: this.props.t(`all_tickets`), value:'all'},
                {label: this.props.t(`closed_tickets`), value: 'closed'},
                {label: this.props.t(`open_tickets`), value: 'opened'}
            ]
        }
    }

    componentDidMount = async () =>{
        this.fetcTickets();
    }

    //-------------- call the api endpoint to fetch user tickets -----------
    fetcTickets = async () => {
        this.setState({isLoading : true});
        let response = await getUserTickets();
        if(response.status === 200){
            this.setState({
                tickets : response.data.tickets,
                renderedTickets : response.data.tickets
            });
        }else{
            this.setState({
                error : response.data.error
            });
        }

        this.setState({isLoading : false});
    }

    //-------------- toggle the "create ticket modal" between visible and unvisible -----------
    setModalVisible = (bool) => {
        this.setState({
            modalVisible : bool
        })
    }

    //-------------- set the desired user's new ticket subject -----------
    setNewTicketSubject = (data) => {
        this.setState({
            newTicketSubject : data
        })
    }

    //-------------- set the desired user's new ticket descrpition -----------
    setNewTicketDescription = (data) => {
        this.setState({
            newTicketDescription : data
        })
    }
    
    //-------------- call the api endpoint to create new ticket -----------
    createNewTicket = async () => {
        this.setState({isLoading : false})
        let data = {
            subject : this.state.newTicketSubject,
            description : this.state.newTicketSubject
        }
        this.setModalVisible(false)
        let response = await addTicket(data);
        if(response.status == 201){
            this.fetcTickets();
        }else{
            this.setState({
                error : response.data.error
            });
        }
        this.setState({isLoading : false})
    }


    filterTickets = (value) => {
        if(value === 'all'){
            this.setState({renderedTickets : this.state.tickets})
        }else if(value === 'closed'){
            let tickets = this.state.tickets.filter((ticket)=>{
                return ticket.status === 0
            })
            this.setState({renderedTickets : tickets})
        }else{
            let tickets = this.state.tickets.filter((ticket)=>{
                return ticket.status === 1
            })
            this.setState({renderedTickets : tickets})
        }
    }

    /* ------------- navigate to certain ticket support chat -------------------------- */
    navigateToChat = (id, number, status) => {
        let bool = false;
        if (status === "closed") bool = true;
        this.props.navigation.navigate('Chat',  {id, roomNumber : number, closed : bool})
    }



    render () {

        const { t } = this.props;
        
        return (
            this.state.isLoading === true ? 
                <Loading action={t(`loading`)}/>
            : 
            <SafeAreaView style={styles.conatiner}>
                    <View style={styles.upperView}>
                        <View style={styles.titleView}>
                            <View style={styles.filter}>
                                <IBSDropDownMenu handleFilter={this.filterTickets} labels={this.state.dropDownLabels} type="tickets"/>
                            </View>
                            <TouchableOpacity style={styles.ticketView} onPress={() => this.setModalVisible(true)}>
                                <Image style={styles.ticketIcon} source={require(newTicketIcon)} />
                            </TouchableOpacity>
                        </View>
                        <Modal  
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <View  style={styles.centeredView}>
                                <SupportMessageModal onClose={this.setModalVisible} onChangeSubject={this.setNewTicketSubject} onChangeDescription={this.setNewTicketDescription} onHandlePress={this.createNewTicket}/>
                            </View>
                        </Modal>

                    </View>
                    
                    {this.state.error !='' ?  <Text style={styles.errorMessage}>{this.state.error}</Text>: <></>}
                        {
                        this.state.renderedTickets.length === 0 ? 

                        <View style={styles.supportTicketsView}>
                                <NoContent />
                        </View>
                        :      
                            <View style={styles.supportTicketsView}>
                                <FlatList
                                    data={this.state.renderedTickets}
                                    renderItem={({item})=>(<TransactionMessage item={item} onHandlePress={this.navigateToChat} transaction={true}/>)}
                                    keyExtractor={(item) => item._id.toString()}
                                />
                            </View>
                        }
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
    upperView : {
        flex : 1,
        padding : 10,
    },
    titleView : {
        flex : 1,
        flexDirection : 'row',
    },
    filter : {
        flex : 5,
        justifyContent : 'center',
        alignItems : 'center',
        minHeight :45
    },
    ticketView : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'flex-end',
    },
    ticketIcon : {
        width : 50,
        height : 50
    },
    dropdown : {
        flex : 1,
        borderRadius : 15,
        borderWidth : 1,
        borderColor : 'black'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    supportTicketsView : {
        flex : 5,
    },
    errorMessage : {
        color : 'red',
        fontWeight : 'bold',
        padding : 2,
        marginVertical : '20%',
        textAlign : 'center',
    },

})

export default withTranslation()(Support);
