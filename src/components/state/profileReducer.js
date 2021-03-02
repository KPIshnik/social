import { usersAPI, profileAPI } from "../../api/api";

const ApdateNPT = "APADATE-NEW-POST-TEXT";
const addPost = "ADD-POST";
const setUserProfileData = "SET_USER_PROFILE";
const setUserStatus = "SET_USER_STATUS";

const initial = {
  posts: [
    { id: 1, post: "hallo", likes: 23 },
    { id: 2, post: "Aloha", likes: 233 },
    { id: 3, post: "Mahalo", likes: 3 },
  ],

  userProfile: null,
  userStatus: "",
};

export default function profileReducer(state = initial, action) {
  switch (action.type) {
    case "ADD-POST":
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            post: action.post,
            likes: 0,
          },
        ],
      });

    case setUserProfileData:
      return { ...state, userProfile: action.userProfile };
    case setUserStatus:
      return { ...state, userStatus: action.status };
    default:
      return state;
  }
}

export function addPostActionCreator(post) {
  return {
    type: addPost,
    post,
  };
}

export function setUserProfile(userProfile) {
  return {
    type: setUserProfileData,
    userProfile,
  };
}

const setUserStatusAC = (status) => {
  return {
    type: setUserStatus,
    status,
  };
};

export const getUserProfile = (userID) => (dispatch) => {
  usersAPI.loadUserProfile(userID).then((res) => {
    dispatch(setUserProfile(res));
  });
};

export const getUserStatus = (userID) => (dispatch) => {
  profileAPI
    .getStatus(userID)
    .then((res) => dispatch(setUserStatusAC(res.data)));
};

export const updateUserStatus = (newStatus) => (dispath) => {
  profileAPI
    .updateStatus(newStatus)
    .then((res) => dispath(setUserStatusAC(newStatus)));
};
