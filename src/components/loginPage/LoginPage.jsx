import { Field, reduxForm } from "redux-form";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" type="text" name={"login"} />
      </div>
      <div>
        <Field component="input" type="text" name={"password"} />
      </div>
      <div>
        <Field component="input" type="checkbox" name={"rememberMe"} /> remember
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
