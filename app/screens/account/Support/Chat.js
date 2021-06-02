import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { GiftedChat} from 'react-native-gifted-chat'
import ChatSendButton from '../../../components/sub-components/Chat/ChatSendButton';
import {authorizeRequestWithData} from '../../../services/authentication';
import {getSingleTicket} from '../../../services/api_requests';
import Loading from '../../../components/sub-components/general/Loading';
import NoContent from '../../../components/sub-components/general/NoContent';
import {t} from '../../../languages/i18Manager';
import ChatMessageBubble from '../../../components/sub-components/Chat/ChatMessageBubble';
import ChatInputToolbar from '../../../components/sub-components/Chat/ChatInputToolbar';
import ChatComposer from '../../../components/sub-components/Chat/ChatComposer';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            ticket : {},
            messages : [],
            isLoading : false,
        }
    }
     
      //------------------------------- call the ticket's api to get comments ---------------------
      componentDidMount = async () => {
        this.setState({isLoading : true});
        let data = await authorizeRequestWithData(getSingleTicket, this.props.route.params.id);
        this.setState({
            ticket : data,
            messages : data.comments
        });
        let chatMessages = this.formatMessages();
        this.setState({
            messages : chatMessages
        })
        this.setState({isLoading : false});
      }


    //----------------------------------- format messages returned from api ----------------------
    ////chatMessage.photo 
      formatMessages = () => {
        let chatMessages = this.state.messages.map((chatMessage) => {
            let gcm = {
              _id: chatMessage._id,
              text: chatMessage.comment,
              createdAt: chatMessage.createdAt,
              user: {
                _id: chatMessage.owner,
                name: this.state.ticket.owner.name.en,
                avatar: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              }
            };
            return gcm;
          });
          return chatMessages;
      }
     
      //----------------------------------- when user sends a message ----------------------
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

      //----------------------------------- render chat view --------------------------------
      render() {

        const {isLoading,ticket, messages} = this.state;

        return (
            isLoading === true ? 
                <Loading action={t(`general:loading`)}/>
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
                    renderInputToolbar={props => {return( <ChatInputToolbar {...props} />);}}
                    renderComposer={props=>{return( <ChatComposer {...props} />);}}
                    renderBubble={props => {return(<ChatMessageBubble {...props} />);}}  
                    renderSend={(props)=>{return (<ChatSendButton {...props} />);}} 
                    onSend={messages => this.onSend(messages)}
                    showUserAvatar={true}
                    showAvatarForEveryMessage={true}
                    keyboardShouldPersistTaps={'never'}
                    user={{
                        _id: 1,
                        name: 'ali',
                        avatar: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
