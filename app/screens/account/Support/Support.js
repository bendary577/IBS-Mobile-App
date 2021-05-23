import React, { useState }  from 'react';
import {SafeAreaView,View,Text, Modal, StyleSheet, ScrollView, Image } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Message from '../../../components/sub-components/Messages/Message';
import SupportMessageModal from '../../../components/sub-components/Messages/SupportMessageModal';
import { t } from '../../../languages/i18Manager';

let newTicketIcon = '../../../assets/icons/Support/newTicket.png';

const Support = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    
    const navigate = () => {
      navigation.navigate("Chat");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            {/* -------------------------------- upper secion --------------------------------------- */}
            <View style={styles.upperView}>
                <View style={styles.titleView}>
                    <TitleText value={t(`support:myTickets`)}/>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={styles.ticketIcon} source={require(newTicketIcon)} />
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View  style={styles.centeredView}>
                        <SupportMessageModal onClose={setModalVisible}/>
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
                <ScrollView>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={true} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={true} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={false} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                    <Message open={true} title="I need help !" number="#01243433" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={true}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
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
