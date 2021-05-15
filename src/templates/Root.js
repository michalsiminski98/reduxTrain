import React from "react";
import { connect } from "react-redux";
import List from "../components/List/List";

export const usersContext = React.createContext({
  users: [],
});

function Root({ users }) {
  return (
    <usersContext.Provider value={{ users }}>
      <List />
    </usersContext.Provider>
  );
}
const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(Root);
