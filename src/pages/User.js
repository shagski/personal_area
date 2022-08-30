import React from "react";
import { removeUser } from "./../redux/users_reducer";
import { useDispatch } from "react-redux";

export const User = (user) => {
  const [edit, setEdit] = React.useState(false);
  const [nameValue, setNameValue] = React.useState(user.name);
  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(removeUser(user.id));
  };

  return (
    <div>
      <span>
        {edit ? (
          <div>
            <input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <button onClick={() => setEdit(false)}>addEdit</button>
          </div>
        ) : (
          <div>
            {nameValue}
            <div>
              <button onClick={() => setEdit(true)}>edit</button>
              <button onClick={deleteUser}>delete</button>
            </div>
          </div>
        )}
      </span>
    </div>
  );
};
