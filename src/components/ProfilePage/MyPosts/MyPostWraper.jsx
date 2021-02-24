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

let mapDispatchToProps = {
  apdateNewPostText: apdateNewPostTextActionCreator,
  addPost: addPostActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
