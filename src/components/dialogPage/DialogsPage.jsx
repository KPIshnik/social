import styles from "./dialogsPage.module.css";
import DialogsWraper from "./dialogs/dialogsWraper";
import MessagesWraper from "./messages/MessagesWraper";

export default function DialogsPage(props) {
  return (
    <div className={`${styles.messages} + "content"`}>
      <DialogsWraper />
      <MessagesWraper />
    </div>
  );
}
