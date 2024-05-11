import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin()

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    
    await login(email, password)
  };

  return (
    <>
    <form onSubmit={handleSubmitForm}>
      <h3>Login User</h3>
      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Login In</button>
      {error && <div>{error}</div>}
    </form>
    <p>Don't have an account</p>
    <button>
    <Link to='/signup'>Sign up</Link>
    </button>
    </>
  );
};

export default Login;
