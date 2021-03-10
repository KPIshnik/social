import MyPostsWraper from "./MyPosts/MyPostWraper";
import style from "./ProfilePage.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
  getUserProfile,
  updateUserStatus,
  getUserStatus,
} from "../state/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Preloader from "../common/Preloader";
import { withAuthRedirect } from "../HOCs/redirectWraper";
import { compose } from "redux";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id;
    if (!userID) {
      userID = this.props.userID;
      if (!userID) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    if (!this.props.userProfile) {
      return <Preloader />;
    }

    return (
      <div className={style.profile + " content"}>
        <ProfileStatus
          status={this.props.userStatus}
          updateUserStatus={this.props.updateUserStatus}
        />
        <ProfileInfo user={this.props.userProfile} />
        <MyPostsWraper />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    userID: state.auth.id,
    inicialized: state.inicialize.inicialized,
  };
};
let mapDispathToProps = {
  getUserProfile,
  updateUserStatus,
  getUserStatus,
};

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispathToProps)
)(ProfilePageContainer);
