import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { bookHotel } from "./redux/action/bookingActions";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
import { useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function BookingForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { loading } = useSelector((state) => state.alertsReducer);

    const [quantity, setQuantity] = useState(0);
    const user = localStorage.getItem("userid");
    // console.log(user);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        booking_date: "",
        booking_time: "",
        own_id: "",
        user_id: "",
        guest: 0,
    });
    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
        // console.log(data);
    }

    const onFinish = async (values) => {
        values.preventDefault();
        var hotelemail = localStorage.getItem("hotelemail");
        setData({ ...data, own_id: id,user_id: user, guest: quantity ,hotelemail:hotelemail });
        // console.log(data.own_id);
        // console.log(data.user_id);
        // console.log(data.name);
        // console.log(id);
        // console.log(user);
        dispatch(bookHotel(data));
    };

    return (
        <main className="h-screen w-full banner">
            <div className="flex flex-col justify-center items-center h-screen">
                {/* logo  */}
                <Brand />
                {/* sign up form  */}
                <form
                    className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
                    onSubmit={onFinish}
                >
                    <div className="flex flex-col space-y-6">
                        <TextField
                            key="1"
                            type="text"
                            placeholder="Name"
                            value={data.name}
                            name="name"
                            onChange={onChange}
                        />

                        <TextField
                            key="2"
                            type="email"
                            placeholder="Email"
                            value={data.booking_email}
                            name="email"
                            onChange={onChange}
                        />
                        <TextField
                            key="3"
                            type="number"
                            placeholder="Phone"
                            value={data.phone}
                            name="phone"
                            onChange={onChange}
                        />

                        <div>
                            <label className="px-4">Date</label>
                            <input
                                onChange={onChange}
                                className="mx-12 px-2 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                                type="date"
                                name="booking_date"
                                value={data.booking_date}
                            ></input>
                        </div>
                        <div>
                            <label className="px-4">time</label>
                            <input
                                onChange={onChange}
                                className="mx-12 px-2 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                                type="time"
                                name="booking_time"
                                value={data.booking_time}
                            ></input>
                        </div>
                        <div className="flex items-center px-4 py-2 space-x-3">
                            <span className="">Guest</span>
                            <span></span>
                            <AiOutlineMinus
                                onClick={() => {
                                    quantity === 1
                                        ? setQuantity(1)
                                        : setQuantity(quantity - 1);
                                }}
                                className="mx-4 text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                            />
                            <span className="text-lg text-gray-700 poppins select-none">
                                {quantity}
                            </span>

                            <AiOutlinePlus
                                onClick={() => {
                                    setQuantity(quantity + 1);
                                }}
                                className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                            />
                        </div>
                    </div>

                    <Button type="submit" text="BOOK TABLE" />
                </form>
            </div>
        </main>
    );
}

export default BookingForm;
