import Messages from "./Messages";
import { connect } from "react-redux";

import {
  apdateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../state/dialogReducer";

let mapDispatchToProps = (dispatch) => {
  return {
    apdateNewMessageText: (text) =>
      dispatch(apdateNewMessageTextActionCreator(text)),

    sendMessage: () => dispatch(sendMessageActionCreator()),
  };
};

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
    messages: state.dialogPage.messages,
  };
};

let MessagesWraper = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesWraper;
