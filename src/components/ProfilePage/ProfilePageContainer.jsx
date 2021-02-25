import MyPostsWraper from "./MyPosts/MyPostWraper";
import style from "./ProfilePage.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { setUserProfile } from "../state/profileReducer";
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Preloader from "../common/Preloader";

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id;
    if (!userID) userID = 25;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
    console.log(this.props.location);
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
  setUserProfile,
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(ProfilePageContainer));
