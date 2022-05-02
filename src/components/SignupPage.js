import React from "react";
import { useAuth } from "./AuthProvider";
import { startCreateUser } from "../actions/auth";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {

  const navigate = useNavigate()
  const {token, onCreateUser} = useAuth()


  const handleSubmit = async (e) => {

    e.preventDefault();
    const { name, email, password } = document.forms[0];


    startCreateUser(
      { email: email.value, password: password.value, name: name.value },
      onCreateUser,
      ()=>{
        navigate('/dashboard');
      }
    )
  };

  return (

    token ? <><h1>Error!</h1><p>Sorry, partner, but you're already logged in!</p></> : 

    <div className="box-layout">
      <div className="box-layout__box">
        <form onSubmit={handleSubmit}>
          <h1 className="box-layout__title">Create your account!</h1>
          <input type="text" name="name" placeholder="name" />

          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />

          <button className="button" type="submit">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;