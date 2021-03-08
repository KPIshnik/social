import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { authMe, logout } from "../state/authReducer";

class HeaderWraper extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return (
      <Header
        userName={this.props.userName}
        isLoggedIn={this.props.isLoggedIn}
        logout={this.props.logout}
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
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWraper);
