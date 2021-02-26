import MyPostsWraper from "./MyPosts/MyPostWraper";
import style from "./ProfilePage.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { getUserProfile } from "../state/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Preloader from "../common/Preloader";

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id;
    if (!userID) userID = 25;
    this.props.getUserProfile(userID);
  }

  render() {
    if (!this.props.userProfile) {
      return <Preloader />;
    }
    return (
      <div className={style.profile + " content"}>
        <ProfileInfo user={this.props.userProfile} />
        <MyPostsWraper />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};
let mapDispathToProps = {
  getUserProfile,
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(ProfilePageContainer));
