import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formControls";
import { maxLength15, required } from "../common/validation";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        email:
        <Field
          component={Input}
          type="text"
          name="login"
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        Password:
        <Field
          component={Input}
          type="text"
          name="password"
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" /> remember
        me
      </div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login",
})(LoginForm);

export default function LoginPage() {
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
