import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import CountDown from 'react-native-countdown-component';

//------------------------ screen ---------------------
const CounterComponent = (props) => {

    const {t} = useTranslation();
    const [sendSms, setSendSms] = useState(false);

    const onTimerFinish = () => {
        setSendSms(true)
    }

	return (
                sendSms === true ?
                    <View style={{ flex :1, flexDirection : 'row', padding : 30}}>
                        {/* ------------------------------ if sending sms is enabled ------------------------- */}
                        <View style={{flex : 3}}>
                            <Text>{t(`recieveCode`)}</Text>
                        </View>
                        <View style={{flex : 3, alignItems : 'flex-end'}}>
                            <TouchableOpacity onPress={props.handleSend}>
                                <Text style={{color : 'red'}}>{t(`resend`)}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={{flex : 1, padding : 30, flexDirection : 'row'}}>
                        {/* -------------------- if sending sms is disabled ----------------------------------- */}
                        <View style={{flex : 3, flexDirection : 'row'}}>
                            <View style={{flex : 4}}>
                                <Text>{t(`receive_code_in`)}</Text>
                            </View>
                            <View style={{flex : 2, alignItems : 'flex-start'}}>
                                <CountDown  
                                    until={60}
                                    onFinish={onTimerFinish}
                                    digitStyle={{width:20,height:15}}
                                    digitTxtStyle={{color: 'black', fontSize:14}}
                                    separatorStyle={{color: 'black', fontSize : 14}}
                                    onPress={() => alert('hello')}
                                    timeToShow={['S']}
                                    size={25}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                    />
                            </View>
                        </View>
                        <View style={{flex : 3, alignItems : 'flex-end'}}>
                            <Text>{t(`resend`)}</Text>
                        </View>
                    </View>
	    );
}

//----------------------- screen styling ---------------------
const styles = StyleSheet.create({

});





export default CounterComponent;