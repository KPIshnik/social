import styles from "./messages.module.css";
import react from "react";
import { Field, reduxForm } from "redux-form";

const newMessageField = react.createRef();

let NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessage" cols="30" rows="5" />
      <br />
      <button className={styles.sendMessageButton} type="submit">
        send
      </button>
    </form>
  );
};

NewMessageForm = reduxForm({ form: "NewMessageForm" })(NewMessageForm);

export default function Messages(props) {
  const messagesItems = props.messages.map((message) => (
    <li key={message.message}>{message.message}</li>
  ));

  function handleSubmit(data) {
    props.sendMessage(data.newMessage);
  }
  return (
    <div className={styles.messages}>
      <ul className={styles.list}>{messagesItems}</ul>
      <NewMessageForm onSubmit={handleSubmit} />
      {/* <textarea
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
          props.sendMessage 
        }
      >
        send
      </button> */}
    </div>
  );
}
