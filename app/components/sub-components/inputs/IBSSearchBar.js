import React from 'react';
import {StyleSheet,TextInput, KeyboardAvoidingView ,  Image, View , TouchableOpacity} from 'react-native';
import {t} from '../../../languages/i18Manager';

let searchIcon = '../../../assets/icons/Support/search.png';

const IBSSearchBar = (props) => {

    const offset = (Platform.OS === 'android') ? -500 : 0;

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={offset} >
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <TextInput  
                        placeholder={t(`messages:search`)} 
                        placeholderTextColor="#B9B9B9"
                        //onChangeText={}
                    />
                </View>
                <TouchableOpacity style={styles.searchIcon}>
                    <Image source={require(searchIcon)} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>    
    )
}

const styles = StyleSheet.create({
    container : {
        width : "95%",
        backgroundColor : 'white',
        height : 50,
        borderRadius : 20,
        marginBottom : 10,
        borderColor : '#DBDBDB',
        borderWidth : 1,
        flexDirection : 'row',
    },
    searchInput : {
        flex : 5,
        height : 60,
        justifyContent : 'center',
        alignItems : 'flex-start',
        paddingBottom : 15,
        paddingLeft : 10
    },
    searchIcon : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width : 20,
        height : 20
    }
})

export default IBSSearchBar
