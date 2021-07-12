import React from 'react';
import {StyleSheet} from 'react-native';
import {Composer} from 'react-native-gifted-chat';
import {useTranslation} from 'react-i18next';

const ChatComposer = (props) => {

    const {t} = useTranslation();

    return (
        <Composer
            {...props} 
            multiline={true}
            textInputStyle={{maxHeight: 100}}
            textInputStyle={styles.composer}
            placeholder={t(`sendMessage`)}
        />
    )
}


const styles = StyleSheet.create({
    composer:{
        backgroundColor:'white',
        color:'#00346D',
        borderRadius:10,
        borderColor:'#C0CCDA',
        borderWidth:1,
        marginTop:15,
        marginBottom:10,
        paddingLeft: 10,
        flexDirection : 'row',
        flex : 3,
      },
})


export default ChatComposer;
