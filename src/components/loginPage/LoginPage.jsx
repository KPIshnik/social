import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formControls";
import { maxLength50, required } from "../common/validation";
import { connect } from "react-redux";
import { login } from "../state/authReducer";
import { Redirect } from "react-router-dom";
import style from "../common/formControls.module.css";

let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        email:
        <Field
          component={Input}
          type="text"
          name="email"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        Password:
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" /> remember
        me
      </div>
      {props.error && <div className={style.formError}>{props.error}</div>}
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login",
})(LoginForm);

function LoginPage(props) {
  function onSubmit(loginData) {
    console.log(loginData);
    props.login(loginData);
  }

  if (props.isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default connect(mapStateToProps, { login })(LoginPage);
