const apdateNewMesageText = "APADATE-NEW-Message-TEXT";
const sendMessage = "Send-Message";

const initial = {
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

  //newMessageText: "New message here!",
};

export default function dialogReducer(state = initial, action) {
  switch (action.type) {
    case "APADATE-NEW-Message-TEXT":
      return Object.assign({}, state, {
        newMessageText: action.message,
      });

    case "Send-Message":
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            message: action.message,
          },
        ],
      });

    default:
      return state;
  }
}

export function apdateNewMessageTextActionCreator(text) {
  return {
    type: apdateNewMesageText,
    message: text,
  };
}

export function sendMessageActionCreator(message) {
  return {
    type: sendMessage,
    message,
  };
}
