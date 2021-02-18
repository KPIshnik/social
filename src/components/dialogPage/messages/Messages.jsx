import styles from "./messages.module.css";
import react from "react";

const newMessageField = react.createRef();

export default function Messages(props) {
  const messagesItems = props.messages.map((message) => (
    <li key={message.message}>{message.message}</li>
  ));
  return (
    <div className={styles.messages}>
      <ul className={styles.list}>{messagesItems}</ul>
      <textarea
        name="new_message"
        cols="30"
        rows="5"
        ref={newMessageField}
        value={props.newMessageText}
        onChange={() =>
          props.apdateNewMessageText(newMessageField.current.value)
        }
        onFocus={() => (newMessageField.current.value = "")}
      />
      <br />
      <button
        className={styles.sendMessageButton}
        onClick={
          props.sendMessage /*props.dispatch(sendMessageActionCreator())*/
        }
      >
        send
      </button>
    </div>
  );
}
