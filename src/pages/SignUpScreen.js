import React, { useState } from 'react'
import Brand from '../components/Form/Brand'
import Button from '../components/Form/Button'
import GoogleSignIn from '../components/Form/GoogleSignIn'
import TextField from '../components/Form/TextField'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import { useSelector , useDispatch } from 'react-redux'
import { userRegister } from './redux/action/userActions'
const SignUpScreen = () => {
    
    const type = localStorage.getItem("type");
	const dispatch = useDispatch()
    const [userInput,setUserInput] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
    })
    
    //handle change 
    const handleChange = (e) => {
        const {value, name }= e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]:value
            }
        })

    }

	// const history = useNavigate();

	async function submit(e){
		e.preventDefault();
        dispatch(userRegister({...userInput,type:type}))

		// try{
		// 	await axios.post("http://localhost:6005/signup/",
		// 		userInput
		// 	).then(res=>{
		// 		if(res.data=== "exists")
		// 		{
		// 			alert("user already exist")
		// 		}
		// 		else if(res.data === "not_exists")
		// 		{
        //             swal("Wow!!!", "You are successfully sign up.", "success");
		// 				history("/home",{state:{id:userInput.email}})
		// 		}
		// 	}).catch(e=>{

		// 		alert("wrong details")
		// 		console.log(e);
		// 	})

		// }catch{
		// 		console.log(e);
		// }
	}



    //form inputs
    const Inputs = [
        { id: 1, type: "text", placeholder: "Name", value: `${userInput.name}`, name: 'name' },
        { id: 2, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 3, type: "text", placeholder: "Profile Picture Link", value: `${userInput.image}`, name: 'image' },
        { id: 4, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]

    return (
        <main className="h-screen w-full banner">
            <div className="flex flex-col justify-center items-center h-screen">
                {/* logo  */}
                <Brand />
                {/* sign up form  */}
                <form className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg" onSubmit={submit}>
                    <div className="flex flex-col space-y-6">
                        {Inputs.map(input => (
                            <TextField
                                key={input.id}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={input.value}
                                name={input.name}
                                onChange={handleChange}
                                
                            />
                        ))}
                    </div>
                    <Button text="Sign Up" />
                    <Link to="/signin">
                        <p className="text-base text-primary text-center my-6 hover:underline">Already have an account ?</p>
                    </Link>

                    <GoogleSignIn text="Sign Up With Google"/>
                </form>
            </div>
        </main>
    )
}

export default SignUpScreen
