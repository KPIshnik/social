import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { logout } from "../state/authReducer";

class HeaderWraper extends React.Component {
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
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWraper);
