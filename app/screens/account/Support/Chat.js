import React, { Component } from "react";
import { View, Text, StyleSheet, I18nManager } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import ChatSendButton from "../../../components/sub-components/Chat/ChatSendButton";
import { getSingleTicket } from "../../../services/api_requests";
import Loading from "../../../components/sub-components/general/Loading";
import ChatMessageBubble from "../../../components/sub-components/Chat/ChatMessageBubble";
import ChatInputToolbar from "../../../components/sub-components/Chat/ChatInputToolbar";
import ClosedChatInputToolbar from "../../../components/sub-components/Chat/ClosedChatInputToolbar";
import ChatComposer from "../../../components/sub-components/Chat/ChatComposer";
import { withTranslation } from "react-i18next";
import ChatClosedToolbar from "../../../components/sub-components/Chat/ChatClosedToolbar";
import OpenChatButton from "../../../components/sub-components/Chat/OpenChatButton";
window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";
import { SOCKET_IO_SERVER } from "../../../services/apis";
import { addTicketMessage } from "../../../services/api_requests";

let userAvatar = "../../../assets/icons/Support/userAvatar.png";
let supportAvatar = "../../../assets/icons/Support/supportAvatar.png";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: {},
      messages: [],
      message: "",
      error: "",
      isLoading: false,
      user: {},
    };
  }

  //------------------------------- call the ticket's api to get comments ---------------------
  componentDidMount = () => {
    console.log("component did mount")
    this.connectToSocketServer();
    console.log("between join and reply 0")
    this.fetchSingleTicket();
  };

  connectToSocketServer = () => {
    //connect to socket server
    this.socket = io(SOCKET_IO_SERVER, {
      jsonp: false,
      transports: ["websocket", "polling"],
    });

    this.socket.on("connect", () => {
      console.log("socket server is done")
      console.log("connected to socket server");
    });

  };

  fetchSingleTicket = async () => {
    //reload chat messages
    this.setState({ isLoading: true });
    let response = await getSingleTicket(this.props.route.params.id);
    if (response.status === 200) {
      let user = {
        _id: response.data.ticket.createdBy._id,
        name: I18nManager.isRTL
          ? response.data.ticket.createdBy.emp.name.ar
          : response.data.ticket.createdBy.emp.name.en,
        avatar: require(userAvatar),
      };
      console.log(response.data.ticket._id)
      this.setState({
        ticket: response.data.ticket,
        messages: response.data.ticket.conversation,
        user,
      });

      this.socket.emit("join", `ticket:${this.state.ticket._id}`);
      console.log("between join and reply " + this.state.ticket._id)
      this.socket.on("ticketMessage", (message)=>{
          console.log("on reply >>> " + message.createdAt)
          let msg = this.formatMessage(message);
          this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, msg),
          })); 
      });

      let chatMessages = this.formatMessages();
      this.setState({
        messages: chatMessages.sort((a, b) =>
          b.createdAt.localeCompare(a.createdAt)
        ),
      });
    } else {
      this.setState({
        error: response.data.error,
      });
    }
    this.setState({ isLoading: false });
  };

  //----------------------------------- format messages returned from api ----------------------
  ////chatMessage.photo
  formatMessages = () => {
    let chatMessages = this.state.messages.map((chatMessage) => {
      let gcm = {
        _id: chatMessage._id,
        text: chatMessage.message,
        createdAt: chatMessage.createdAt,
        user: {
          _id: chatMessage.createdBy,
          name: this.state.ticket.createdBy.emp.name.en,
          avatar:
            chatMessage.createdBy === this.state.user._id
              ? require(userAvatar)
              : require(supportAvatar),
        },
      };
      return gcm;
    });
    return chatMessages;
  };

  formatMessage = (message) => {
    let msg = {
      _id : message._id, 
      text : message.message,
      createdAt : message.createdAt, 
      user : {
        _id : message.createdBy, 
        name : '',
        avatar : message.createdBy === this.state.user._id
        ? require(userAvatar)
        : require(supportAvatar),
      }
    }
    return msg;
  }

  //----------------------------------- when user sends a message ----------------------
  onSend = async (message) => {
    console.log("on send tttttttttttttttt")
    let data = { message: message[0].text };
    let response = await addTicketMessage(this.state.ticket._id, data);
    if (response.status === 201) {
      console.log("on send hhhhhhhhhh")
    } else {
      this.setState({
        error: response.data.error,
      });
    }
    //this.socket.emit("ticketMessage", message[0].text);
  };

  //----------------------------------- when user sends a message ----------------------
  onReply = (message) => {
    console.log("on reply >>> " + message)
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  };

  //----------------------------------- open chat ----------------------
  openChat = () => {
    this.state.ticket.statusFormatted = "opened";
  };

  //----------------------------------- render chat view --------------------------------
  render() {
    const { t } = this.props;
    const { isLoading, ticket, error, messages, user } = this.state;

    return isLoading === true ? (
      <Loading action={t(`loading`)} />
    ) : error !== "" ? (
      <Text style={styles.error}>{error}</Text>
    ) : (
      <>
        <View style={styles.chatHeader}>
          <View style={styles.top}>
            <Text style={styles.titleText}>I need help !</Text>
            <Text>#{ticket._id}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.dateText}>{ticket.subject}</Text>
          </View>
        </View>
        <GiftedChat
          messages={messages}
          textInputStyle={styles.composer}
          minComposerHeight={45}
          maxComposerHeight={100}
          minInputToolbarHeight={80}
          renderInputToolbar={(props) => {
            return ticket.statusFormatted == "closed" ? (
              <ClosedChatInputToolbar {...props} />
            ) : (
              <ChatInputToolbar {...props} />
            );
          }}
          renderComposer={(props) => {
            return ticket.statusFormatted == "closed" ? (
              <ChatClosedToolbar {...props} onHandlePress={this.openChat} />
            ) : (
              <ChatComposer {...props} />
            );
          }}
          renderBubble={(props) => {
            return <ChatMessageBubble {...props} />;
          }}
          renderSend={(props) => {
            return ticket.statusFormatted == "closed" ? (
              <OpenChatButton {...props} onHandlePress={this.openChat} />
            ) : (
              <ChatSendButton {...props} />
            );
          }}
          onSend={(message) => this.onSend(message)}
          showUserAvatar={true}
          showAvatarForEveryMessage={false}
          keyboardShouldPersistTaps={"never"}
          user={{
            _id: user._id,
            name: user.name,
            avatar: user.avatar,
          }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: "column",
  },
  composer: {
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    fontSize: 16,
  },
  icon: {
    width: 45,
    height: 45,
  },
  chatHeader: {
    height: 80,
    flexDirection: "column",
    borderBottomWidth: 2,
    borderBottomColor: "#D8D8D8",
    padding: 10,
  },
  top: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    flex: 3,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  titleText: {
    color: "red",
    fontSize: 16,
  },
  dateText: {
    color: "gray",
  },
  error: {
    flex: 1,
    flexDirection: "column",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    marginTop: "40%",
  },
});

export default withTranslation()(Chat);
