import React from "react";
import { removeUser } from "./../redux/users_reducer";
import { useDispatch, useSelector } from "react-redux";

export const User = (user) => {
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(removeUser(user.id));
  };

  return (
    <div>
      <span>
        {edit ? (
          <div>
            <input onChange={(e) => console.log(e.target.value)} />
            <button>addEdit</button>
          </div>
        ) : (
          user.name
        )}
      </span>
      <button onClick={() => setEdit(true)}>edit</button>
      <button onClick={deleteUser}>delete</button>
    </div>
  );
};
