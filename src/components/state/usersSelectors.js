import { createSelector } from "reselect";

export const getUsersSelector = (state) => state.usersPage.users;
export const pageCountSelector = (state) => state.usersPage.pageCount;
export const usersOnPageSelector = (state) => state.usersPage.usersOnPage;
export const currentPageSelector = (state) => state.usersPage.currentPage;
export const isFatchingselector = (state) => state.usersPage.isFatching;
export const followingInProgresSelector = (state) => {
  return state.usersPage.followingInProgres;
};

export const getUsersSelectorSuper = createSelector(
  getUsersSelector,
  (users) => {
    return users;
  }
);
