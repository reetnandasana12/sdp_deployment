import React from 'react';
// import { useHistory } from 'react-router-dom';

import {Link} from 'react-router-dom'
const FoodItem = (props) => {
    // const history = useHistory()

    const handleRoute = () => {
        localStorage.setItem("hotelemail", props.email);
        window.location=`/booking/${props._id}`;
        // history.push(`/foods/${title}`);
    }
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{props.catagory}</span>
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={props.image} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{props.name}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{props.description.slice(0,50)}</p>
                {/* <h2 className="text-gray-900 poppins text-2xl font-bold">$price</h2> */}
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Book Table</button>
            </div>
        </div>
    )
}

export default FoodItem
