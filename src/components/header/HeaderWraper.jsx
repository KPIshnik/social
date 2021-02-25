import React from "react";
import * as axios from "axios";
import Header from "./header";
import { connect } from "react-redux";
import { loginAC } from "../state/authReducer";

class HeaderWraper extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        this.props.login(response.data.data);
      });
  }

  render() {
    console.log(this.props.userName);
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
  login: loginAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWraper);
