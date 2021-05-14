import React, { useState } from "react";
import List from "../components/List/List";
import { users as usersData } from "../data/users";

export const usersContext = React.createContext({
  users: [],
  handleDeleteUser: () => {},
});

function Root() {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <usersContext.Provider value={{ users, handleDeleteUser }}>
      <List />
    </usersContext.Provider>
  );
}

export default Root;
