import { useContext } from "react";
import { usersContext } from "../../templates/Root";

const ListItem = ({ id, firstName }) => {
  const { handleDeleteUser } = useContext(usersContext);

  return (
    <li>
      {firstName} <button onClick={() => handleDeleteUser(id)}>Delete</button>
    </li>
  );
};

export default ListItem;
