import React,{Component} from 'react';
import {SafeAreaView,View, Modal, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TransactionMessage from '../../../components/sub-components/Messages/TransactionMessage';
import SupportMessageModal from '../../../components/sub-components/Messages/SupportMessageModal';
import { t } from '../../../languages/i18Manager';
import {authorizeRequest} from '../../../services/authentication';
import {getUserTickets} from '../../../services/api_requests';
import NoContent from '../../../components/sub-components/general/NoContent';
import Loading from '../../../components/sub-components/general/Loading';

let newTicketIcon = '../../../assets/icons/Support/newTicket.png';

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            modalVisible : false,
            tickets : [],
            isLoading : false
        }
    }

    componentDidMount = async () =>{
        this.setState({isLoading : true});
        let data = await authorizeRequest(getUserTickets);
        this.setState({
            tickets : data
        });
        this.setState({isLoading : false});
    }


    setModalVisible = (bool) => {
        this.setState({
            modalVisible : bool
        })
    }
    
    navigateToChat = (id, number, status) => {
        let bool = false;
        if (status === "closed") bool = true;
      this.props.navigation.navigate("Chat", {id, roomNumber : number, closed : bool});
    }

    render () {
        return (

            this.state.isLoading === true ? 
                <Loading action={t(`general:loading`)}/>
            : 

            this.state.tickets.length === 0 ? 
                <NoContent />
            : 

                <SafeAreaView style={styles.conatiner}>
                    {/* -------------------------------- upper secion --------------------------------------- */}
                    <View style={styles.upperView}>
                        <View style={styles.titleView}>
                            <TitleText value={t(`support:myTickets`)}/>
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
                                <SupportMessageModal onClose={this.setModalVisible}/>
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
                                    placeholder={t(`general:filter`)}
                                />
                        </View>
                    </View>

                    {/* -------------------------------- support tickets secion --------------------------------------- */}
                    <View style={styles.supportTicketsView}>
                        <FlatList
                            data={this.state.tickets}
                            renderItem={({item})=>(<TransactionMessage item={item} onHandlePress={this.navigateToChat} transaction={true}/>)}
                            keyExtractor={(item) => item._id}
                        />
                    </View>
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

export default Support;
