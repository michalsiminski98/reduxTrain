import * as ActionTypes from "../actions/itemTypes";

const INITIAL_STATE = {
  users: [
    {
      id: 0,
      firstName: "John",
      lastName: "Doe",
      age: 21,
    },
    {
      id: 1,
      firstName: "Doe",
      lastName: "Smith",
      age: 11,
    },
    {
      id: 2,
      firstName: "Jackie",
      lastName: "Bill",
      age: 21,
    },
    {
      id: 3,
      firstName: "Ben",
      lastName: "Quaz",
      age: 31,
    },
    {
      id: 4,
      firstName: "Kyle",
      lastName: "Firr",
      age: 24,
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.DELETE:
      const newUsers = INITIAL_STATE.users.filter(
        (user) => user.id !== action.payload.id
      );
      return {
        ...state,
        users: newUsers,
      };
    default:
      throw new Error();
  }
};

export default userReducer;
