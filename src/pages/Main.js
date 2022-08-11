import React from "react";
import axios from "axios";

export const Main = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/server_users")
      .then((res) => res.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            {user.name} {user.surname}
          </div>
        );
      })}
    </div>
  );
};
