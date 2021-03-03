import Messages from "./Messages";
import { connect } from "react-redux";

import { sendMessageActionCreator } from "../../state/dialogReducer";

let mapDispatchToProps = {
  sendMessage: sendMessageActionCreator,
};

let mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
  };
};

let MessagesWraper = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesWraper;
