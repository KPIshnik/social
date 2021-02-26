import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { authMe } from "../state/authReducer";

class HeaderWraper extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return (
      <Header
        userName={this.props.userName}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userName: state.auth.login,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

let mapDispatchToProps = {
  authMe,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWraper);
