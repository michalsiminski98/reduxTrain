import { connect } from "react-redux";
import ListItem from "../ListItem/ListItem";

const List = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, firstName }) => (
        <ListItem key={id} id={id} firstName={firstName} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(List);
