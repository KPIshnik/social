import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  const WrappedComponent = (props) => {
    if (!props.isLoggedIn) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  };

  return connect(mapStateToProps)(WrappedComponent);
};
