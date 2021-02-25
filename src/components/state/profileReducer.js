const ApdateNPT = "APADATE-NEW-POST-TEXT";
const addPost = "ADD-POST";
const setUserProfileData = "SET_USER_PROFILE";

const initial = {
  posts: [
    { id: 1, post: "hallo", likes: 23 },
    { id: 2, post: "Aloha", likes: 233 },
    { id: 3, post: "Mahalo", likes: 3 },
  ],

  newPostText: "new post here",
  userProfile: null,
};

export default function profileReducer(state = initial, action) {
  switch (action.type) {
    case "ADD-POST":
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            post: state.newPostText,
            likes: 0,
          },
        ],
      });

    case "APADATE-NEW-POST-TEXT":
      return Object.assign({}, state, {
        newPostText: action.message,
      });
    case setUserProfileData:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
}

export function apdateNewPostTextActionCreator(text) {
  return {
    type: ApdateNPT,
    message: text,
  };
}

export function addPostActionCreator() {
  return {
    type: addPost,
  };
}

export function setUserProfile(userProfile) {
  return {
    type: setUserProfileData,
    userProfile,
  };
}
