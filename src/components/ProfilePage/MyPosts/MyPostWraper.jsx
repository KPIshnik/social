import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  apdateNewPostTextActionCreator,
} from "../../state/profileReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    apdateNewPostText: (text) => dispatch(apdateNewPostTextActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

let MyPostasWraper = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostasWraper;
