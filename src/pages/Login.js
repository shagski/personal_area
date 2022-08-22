import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./../redux/login_reducer";

export const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      return alert("заполните поля воода");
    }
    dispatch(login({ name, password }));
    navigate("/main");
  };

  return (
    <form className="App">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        preloader="Ваше имя..."
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        preloader="Ваш праоль..."
      />
      <button onClick={clickSubmit}>submit</button>
    </form>
  );
};
