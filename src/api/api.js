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
    console.warn("old method, pls use profileAPI obj");
    return profileAPI.loadUserProfile(userID);
    // return instance.get(`profile/${userID}`).then((response) => {
    //   return response.data;
    // });
  },
};

export const profileAPI = {
  loadUserProfile(userID) {
    return instance.get(`profile/${userID}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userID) {
    return instance.get("profile/status/" + userID).then((response) => {
      return response;
    });
  },

  updateStatus(newStatus) {
    return instance
      .put("profile/status/", { status: newStatus })
      .then((res) => {
        return res;
      });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  login(loginData) {
    return instance
      .post("auth/login", {
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      })
      .then((res) => {
        return res;
      });
  },

  logout() {
    return instance.delete("auth/login").then((res) => {
      return res;
    });
  },
};
