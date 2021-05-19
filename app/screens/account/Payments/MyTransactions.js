import React from 'react';
import {SafeAreaView,View, Text, StyleSheet, ScrollView } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import DropDownPicker from 'react-native-dropdown-picker';
import Transaction from '../../../components/sub-components/Payment/Transaction';
import { useNavigation } from '@react-navigation/native';


const MyTransactions = () => {

    const navigation = useNavigation();

    const navigate = () => {
      navigation.navigate("PaymentDetails");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.titleView}>
               <TitleText value="My Transactions"/>
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
                        placeholder="Filter"
                    />
               </View>
            </View>
            <View style={styles.transactionsView}>
                <ScrollView>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={false} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={true} onHandlePress={navigate}/>
                    <Transaction price="14351.48 LE" date="Jul’ 2019" middle={false} onHandlePress={navigate}/>
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
    titleView : {
        flex : 2,
        padding : 20,
    },
    dropdown : {
        flex : 1,
        borderRadius : 15,
        //marginTop : 10,
        borderWidth : 1,
        borderColor : 'black'
    },
    transactionsView : {
        flex : 4,
        //backgroundColor : 'red'
    },

})

export default MyTransactions;
