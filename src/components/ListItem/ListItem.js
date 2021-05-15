import { connect } from "react-redux";
import { deleteUser } from "../../actions/itemActions";

const ListItem = ({ id, firstName, deleteUser }) => {
  return (
    <li>
      {firstName} <button onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
