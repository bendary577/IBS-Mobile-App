import React,{useState, useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {markMessageAsRead} from '../../../services/api_requests';
import moment from 'moment';

const Message = (props) => {

    const navigation = useNavigation();
    const [error, setError] = useState('');

    useEffect(()=>{
        handleMessageUserClick();
    }, [])

    //mark message as read once screen is opened
    const handleMessageUserClick = async () => {
        const response = await markMessageAsRead(props.message._id);
        if(response.status === 200){
            
        }else{
            setError(response.data.error)
        }
    }

    //open message when user clicks on it
    const openMessage = () => {
        navigation.navigate('MessageDetails',  { id : props.message._id})
    }

    return (
        <TouchableOpacity style={ props.unread === true ? styles.conatinerOpened : styles.conatinerClosed} onPress={()=>{ openMessage() }} >
            <View style={styles.view}>
                <View style={styles.leftView}>
                    <Text style={styles.title}>{props.message.title}</Text>
                </View>
            </View>
            <View style={styles.view}>
 
                <View style={styles.leftView}>
                    <Text style={styles.date}>{moment(props.message.createdAt).format("MMM Do YY")}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatinerClosed: {
        flexDirection : 'column',
        justifyContent : 'center',
        height : 80,
        padding : 8,
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
    },
    conatinerOpened : {
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : '#EFBDC3',
        borderTopWidth : 2,
        borderTopColor : '#D8D8D8',
        height : 80,
        padding : 8,
    },
    view : {
        flexDirection : 'row',
    },
    title : {
        fontSize : 16,
        color : 'red'
    },
    number : {
        fontSize : 16,
        color : 'black'
    },
    leftView : {
        flex : 4
    },
    textContainer : {
        alignSelf: 'center'
    },
    body : {
        fontSize : 14,
        color : 'black',
    },
    rightView : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    date : {
        fontSize : 16,
        color : '#1A1A1A',
    }
})

export default Message;
