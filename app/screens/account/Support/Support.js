import React,{Component} from 'react';
import {SafeAreaView,View, Modal, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TransactionMessage from '../../../components/sub-components/Messages/TransactionMessage';
import SupportMessageModal from '../../../components/sub-components/Messages/SupportMessageModal';
//import { t } from '../../../languages/i18Manager';
import {authorizeRequest} from '../../../services/authentication';
import {getUserTickets} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';
import {authorizeRequestWithData} from '../../../services/authentication';
import {addTicket} from '../../../services/api_requests';
import { withTranslation } from 'react-i18next';

let newTicketIcon = '../../../assets/icons/Support/newTicket.png';

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            modalVisible : false,
            tickets : [],
            isLoading : false,
            problem : null,
            newTicketSubject : '',
            newTicketDescription : '',
        }
    }

    componentDidMount = async () =>{
        this.fetcTickets();
    }

    fetcTickets = async () => {
        this.setState({isLoading : true});
        let data = await authorizeRequest(getUserTickets);
        this.setState({
            tickets : data.tickets
        });
        this.setState({isLoading : false});
    }

    setModalVisible = (bool) => {
        this.setState({
            modalVisible : bool
        })
    }

    setNewTicketSubject = (data) => {
        this.setState({
            newTicketSubject : data
        })
    }

    setNewTicketDescription = (data) => {
        this.setState({
            newTicketDescription : data
        })
    }
    
    navigateToChat = (id, number, status) => {
        let bool = false;
        if (status === "closed") bool = true;
        this.props.navigation.navigate('Chat',  {id, roomNumber : number, closed : bool})
    }

    createNewTicket = async () => {
        console.log("create new ticket");
        data = {
            "subject" : this.state.newTicketSubject,
            "description" : this.state.newTicketSubject
        }
        let data = await authorizeRequestWithData(addTicket, data);
        this.setModalVisible(false)
        this.fetcTickets();//this.navigateToChat(data._id, data.id, data.statusFormatted);
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
                            <TitleText value={t(`myTickets`)}/>
                            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
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
                        <View style={{marginTop : 30}}>
                                <DropDownPicker
                                    items={[
                                        {label: 'Item 1', value: 'item1'},
                                        {label: 'Item 2', value: 'item2'},
                                    ]}
                                    defaultValue="item1"
                                    containerStyle={{height: 45}}
                                    style={styles.dropdown}
                                    dropDownStyle={{backgroundColor: '#fafafa'}}
                                    onChangeItem={item => console.log(item.label, item.value)}
                                    placeholder={t(`filter`)}
                                />
                        </View>
                    </View>
                        {
                        this.state.tickets.length === 0 ? 

                        <View style={styles.supportTicketsView}>
                                <NoContent />
                        </View>
                        
                        :      
                            <View style={styles.supportTicketsView}>
                                <FlatList
                                    data={this.state.tickets}
                                    renderItem={({item})=>(<TransactionMessage item={item} onHandlePress={this.navigateToChat} transaction={true}/>)}
                                    keyExtractor={(item) => item._id}
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
        flex : 2,
        padding : 20,
    },
    titleView : {
        flexDirection : 'row',
        justifyContent : 'space-between'
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
        flex : 4,
    },

})

export default withTranslation()(Support);
