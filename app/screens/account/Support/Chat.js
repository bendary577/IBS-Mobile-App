import React, {Component} from 'react';
import {SafeAreaView,View, Text, StyleSheet, ScrollView, Image , TouchableOpacity} from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import ChatSendButton from '../../../components/sub-components/buttons/ChatSendButton';
import getFlipForRTLStyle from '../../../utils/utilFunctions';
import {authorizeRequestWithId} from '../../../services/authentication';
import {getSingleTicket} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';


let sendIcon = '../../../assets/icons/Support/send.png';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            ticket : {},
            messages : [],
            isLoading : false,
        }
    }
     
      //this.props.route.params.paymentId
      componentDidMount = async () => {
        this.setState({isLoading : true});
        let data = await authorizeRequestWithId(getSingleTicket, this.props.route.params.id);
        this.setState({
            ticket : data,
            messages : data.comments
        });
        this.setState({isLoading : false});

        /*
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ]
        })
        */
      }
     
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

      render() {

        const {isLoading,ticket, messages} = this.state;

        return (
            isLoading === true ? 
                <Loading />
            :

            messages.length !== 0 && isLoading === false ?
                <>
                <View style={styles.chatHeader}>
                    <View style={styles.top}>
                        <Text style={styles.titleText}>{ticket.issue}</Text>
                        <Text>#{ticket.uid}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.dateText}>opened in {ticket.createdAt.slice(0,4)}</Text>
                    </View>
                </View>
                <GiftedChat
                    messages={messages}
                    textInputStyle={styles.composer}
                    minComposerHeight={40}
                    minInputToolbarHeight={70}
                    onSend={messages => this.onSend(messages)}
                    renderSend={(props)=>{
                        const {text,messageIdGenerator,user, onSend} = props
                        return(
                        <TouchableOpacity onPress= {
                            ()=>{
                            if (text && onSend) {
                                onSend({ text: text.trim(), user:user,_id:messageIdGenerator()}, true);
                                }
                            }
                            } style={styles.sendButton}>
                            <Image style={[styles.icon, getFlipForRTLStyle()]} source={require(sendIcon)} />
                        </TouchableOpacity>
                        )}} 
                    user={{
                    _id: 1,
                    }}
                />
                </>
            :
            <NoContent />    
        )
      }
}

const styles = StyleSheet.create({
    conatiner: {
        flex : 1,
        flexDirection : 'column',
    },
    composer:{
        borderRadius: 25, 
        borderWidth: 0.5,
        borderColor: '#dddddd',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        fontSize: 16,
      },
      icon : {
        width : 45,
        height : 45,
      },
      chatHeader : {
          height : 80,
          flexDirection : 'column',
          borderBottomWidth : 2,
          borderBottomColor : "#D8D8D8",
          padding : 10
      },
      top : {
          flex : 3,
          flexDirection : 'row',
          justifyContent : 'space-between',
      },
      bottom : {
          flex : 3,
          flexDirection : 'row-reverse',
          justifyContent : 'flex-end',
      },
      titleText : {
          color : 'red',
          fontSize : 16
      },
      dateText : {
          color : "gray"
      }
})

export default Chat;
