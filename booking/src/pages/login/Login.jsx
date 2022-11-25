import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user,loading, error, dispatch } = useContext(AuthContext);
  
  const handleChange =(e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]: e.target.value}))
  }

  const handleLogin =async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
        const res = await axios.post("/auth/login", credentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  }

  console.log(user)

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button className="lButon" onClick={handleLogin}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
