import styles from "./messages.module.css";

import { Field, reduxForm } from "redux-form";
import { maxLength } from "../../common/validation";
import { Textarea } from "../../common/formControls";

const maxLength50 = maxLength(50);

let NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessage"
        cols="30"
        rows="5"
        validate={[maxLength50]}
      />
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
    </div>
  );
}
