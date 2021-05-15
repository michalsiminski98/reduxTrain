import * as ActionTypes from "./itemTypes";

export const deleteUser = (userID) => ({
  type: ActionTypes.DELETE,
  payload: {
    id: userID,
  },
});
