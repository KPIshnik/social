//import React from "react";
//import ReactDOM from "react-dom";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

let _callSubscriber = () => {
  console.log("state changes");
};

const Store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "hallo", likes: 23 },
        { id: 2, post: "Aloha", likes: 233 },
        { id: 3, post: "Mahalo", likes: 3 },
      ],

      newPostText: "new post here",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Toha" },
        { id: 2, name: "Kos" },
        { id: 3, name: "Krava" },
        { id: 4, name: "Barash" },
        { id: 5, name: "Eyla" },
      ],

      messages: [
        { id: 1, message: "Aloha" },
        { id: 2, message: "WTA?" },
        { id: 3, message: "Go buhat!!" },
        { id: 4, message: "Go!!" },
        { id: 5, message: "Eeee" },
      ],

      newMessageText: "New message here!",
    },
  },

  getState() {
    return this._state;
  },

  clearTextArea() {
    this._state.newPostText = "";
    _callSubscriber(this);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    _callSubscriber(this);
  },
};

export const subscribe = (observer) => {
  _callSubscriber = observer;
};
export default Store;

//const window.state = Store._state
