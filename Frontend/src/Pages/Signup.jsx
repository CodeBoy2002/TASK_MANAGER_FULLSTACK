import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignUp()

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    await signup(email, password)
    setEmail('')
    setPassword('')
  };

  return (
    <>
    <form className="signup" onSubmit={handleSubmitForm}>
      <h3>Register User</h3>
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

      <button disabled={isLoading}>Sign Up</button>
      {error && <div>{error}</div>}
    </form>
    <p>Already have an account?</p>
    <button>
        <Link to='/login'>Login up</Link>
    </button>
    </>
  );
};

export default Signup;
