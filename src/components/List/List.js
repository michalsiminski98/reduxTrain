import { useContext } from "react";
import { usersContext } from "../../templates/Root";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const { users } = useContext(usersContext);

  return (
    <ul>
      {users.map(({ id, firstName }) => (
        <ListItem key={id} id={id} firstName={firstName} />
      ))}
    </ul>
  );
};

export default List;
