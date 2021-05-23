import React, { useState } from 'react';
import {SafeAreaView,View, Text, StyleSheet, ScrollView } from 'react-native';
import TitleText from '../../../components/primitive-components/TitleText';
import Transaction from '../../../components/sub-components/Payment/Transaction';
import { useNavigation } from '@react-navigation/native';
import IBSSearchBar from '../../../components/sub-components/inputs/IBSSearchBar';
import Message from '../../../components/sub-components/Messages/Message';
import { t } from '../../../languages/i18Manager';

const MessagesForYou = () => {

    const navigation = useNavigation();

    const navigate = () => {
      navigation.navigate("MessageDetails");
    }

    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.titleView}>
               <TitleText value={t(`messages:myMessages`)}/>
               <View style={{marginTop : 30, justifyContent : 'center', alignItems : 'center'}}>
                   <IBSSearchBar />
               </View>
            </View>
            <View style={styles.transactionsView}>
                <ScrollView>
                    <Message open={false} title="CIB" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
                    <Message open={true} title="QNB" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
                    <Message open={false} title="NBA" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
                    <Message open={true} title="CIB" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
                    <Message open={false} title="CIB" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
                    <Message open={false} title="CIB" body="Please wait while we transfer you to…" date="Dec’ 2020" navigate={navigate} transaction={false}/>
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
        flex : 1,
        padding : 20,
    },
    searchContainer : {
        backgroundColor : 'white',
        borderRadius : 0,
        },
    transactionsView : {
        flex : 4,
        marginTop : 20
    },

})

export default MessagesForYou;
