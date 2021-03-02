import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../state/profileReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = {
  addPost: addPostActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
