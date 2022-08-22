import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateInputValue } from "../redux/users_reducer";
import { User } from "./User";

export const Main = () => {
  const [flag, setFlag] = React.useState(false);
  const [valueInp, setValueInp] = React.useState("");
  const { users } = useSelector(({ users }) => users);
  const { name } = useSelector(({ login }) => login);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addContact = () => {
    setFlag(true);
  };

  const InputValue = (event) => {
    setValueInp(event.target.value);
    dispatch(updateInputValue(valueInp));
  };

  return (
    <div className="App">
      {name}
      {flag && (
        <div>
          <input onChange={InputValue} />
          <button>add</button>
        </div>
      )}
      <button onClick={addContact}>add contact</button>
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </div>
  );
};
