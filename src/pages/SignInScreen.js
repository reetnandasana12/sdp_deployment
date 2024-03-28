import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import GoogleSignIn from "../components/Form/GoogleSignIn";
import TextField from "../components/Form/TextField";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { userLogin } from './redux/action/userActions'
import axios from "axios";

const SignInScreen = () => {
	const dispatch = useDispatch()

  const [email,setEmail] = useState('')
	const [password,setpassword] = useState('')
  const type = localStorage.getItem("type");

	 function submit(e) {
		e.preventDefault();
	dispatch(userLogin({email,password,type}));
}

  //form inputs
  const Inputs = [
    {
      id: 1,
      type: "textfield",
      placeholder: "Email",
      value: email,
      name: "email",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      value: password,
      name: "password",
    },
  ];
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <Brand />
        {/* sign up form  */}
        <form
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
          onSubmit={submit}
        >
          <div className="flex flex-col space-y-6">
            {Inputs.map((input) => (
              <TextField
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                name={input.name}
                onChange={(e) => {
                  input.name === "email"
                    ? setEmail(e.target.value)
                    : setpassword(e.target.value);
                }}
              />
            ))}
          </div>
          <Button text="Sign In" />
          {type!=="admin"&&
          <Link to="/signup">
            <p className="text-base text-primary text-center my-6 hover:underline">
              Need an account ?
            </p>
          </Link>
          }
          {type!=="admin"&&
          <GoogleSignIn text="Sign In With Google" />
          }
        </form>
      </div>
    </main>
  );
};

export default SignInScreen;
