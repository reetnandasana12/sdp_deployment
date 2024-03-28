import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
const CheckPage = () => {
    
    const [user,setUser] = useState(null);

    // const getUser = async () => {
    //     try {
    //         const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
    //         const { data } = await axios.get(url,{withCredentials:true});
    //         setUser(data.user._json);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/success`);
          console.log(data);
          setUser(data);
        };
    
        fetchData();
      }, []);

    if(user){
        localStorage.setItem("userid",JSON.stringify(user._id));
        localStorage.setItem("image",user.image);
        localStorage.setItem("name",user.name);
        localStorage.setItem("verify",true);
        window.location="/home";
      }
      // window.location="/home";
    
//   useEffect(() => {
//     getUser();
// }, []);  
     //redirects to home page after successful login or signup
    return (<>

    </>);
}
export default CheckPage;