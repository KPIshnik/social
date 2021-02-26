import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f29f15d9-daef-4e4c-bf61-557a9a73c91e",
  },
});

export const usersAPI = {
  getUsers(pageNumber = 1, usersOnPage = 4) {
    return instance
      .get(`users?page=${pageNumber}&count=${usersOnPage}`)
      .then((response) => {
        return response.data;
      });
  },

  unFopllow(userID) {
    return instance.delete("follow/" + userID).then((res) => {
      return res.data;
    });
  },

  follow(userID) {
    return instance.post("follow/" + userID).then((res) => {
      return res.data;
    });
  },

  loadUserProfile(userID) {
    return instance.get(`profile/${userID}`).then((response) => {
      return response.data;
    });
  },
};
