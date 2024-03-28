// import React from "react";
// import AboutUs from "../components/About/AboutUs";
// import Foods from "../components/Foods Showcase/Foods";
// import Footer from "../components/Footer/Footer";
// import Banner from "../components/Header/Banner";
// import useFetch from '../../hooks/useFetch';
import FoodItem2 from "../components/Foods Showcase/FoodItem2";
// import Skeleton from './Skeleton';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import DefaultLayout from '../components/DefaultLayout'
import { getAllHotels } from "../pages/redux/action/hotelActions";
const OwnerHomePage = () => {
    const { hotels } = useSelector((state) => state.hotelsReducer);
    const dispatch = useDispatch();
    const id = localStorage.getItem("userid");
    useEffect(() => {
        dispatch(getAllHotels());
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                {/* .filter((item) => menuTab === item.foodType) paste this */}
                {hotels
                    .filter((hotel) => JSON.stringify(hotel.own_id) === id)
                    .map((item) => (
                        <FoodItem2 key={item._id} {...item} />
                    ))}

                    <button onClick={(e)=>window.location="/addhotel"}>Add Hotel</button>
            </div>
        </>
    );
};

export default OwnerHomePage;
