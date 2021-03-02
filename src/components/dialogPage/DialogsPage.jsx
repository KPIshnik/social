import styles from "./dialogsPage.module.css";
import DialogsWraper from "./dialogs/dialogsWraper";
import MessagesWraper from "./messages/MessagesWraper";

import { connect } from "react-redux";
import { withAuthRedirect } from "../HOCs/redirectWraper";

function DialogsPage(props) {
  return (
    <div className={`${styles.messages} + "content"`}>
      <DialogsWraper />
      <MessagesWraper />
    </div>
  );
}

let withRedirect = withAuthRedirect(DialogsPage);

export default withRedirect;
