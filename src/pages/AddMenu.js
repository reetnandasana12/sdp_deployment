import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookHotel } from "./redux/action/bookingActions";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
import { useParams } from "react-router-dom";
import { addMenu } from "./redux/action/menuAction";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function AddMenu() {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { loading } = useSelector((state) => state.alertsReducer);
    const [file, setFile] = useState(null); // Initialize with null
    const onFileChange = (event) => {
        console.log("file select");
        const file = event.target.files[0];
        setFile(file);
    };
    const [objectUrl, setObjectUrl] = useState("");

    const [quantity, setQuantity] = useState(0);
    const user = localStorage.getItem("userid");
    // console.log(user);
    const [data, setData] = useState({
        name: "",
        image: "",
        description: "",
        res_id: "",
        catagory: "",
        price: "",
    });
    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const options = [
        [0, "Selece Catagory"],
        [1, "Wine Bar"],
        [2, "Bio"],
        [3, "Bistro"],
        [4, "Waffles"],
        [5, "World Food"],
        [6, "Gourmet"],
        [7, "Pizza"],
        [8, "Tea Bar"],
        [9, "Traditional"],
        [10, "Vegetarian"],
    ];

    const onFinish = async (values) => {
        values.preventDefault();
        if (!file) {
            alert("Please select an image file.");
            return;
        }

        const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filename: file.name,
                contentType: file.type,
            }),
        });

        try {
            const responseData = await response.json();
            console.log("Server Response:", responseData);

            const uploadResponse = await fetch(responseData.url, {
                method: "PUT",
                body: file,
                headers: {
                    "Content-Type": file.type,
                },
            });

            console.log("Image uploaded successfully:", uploadResponse);

            // Update objectUrl after successful image upload
            setObjectUrl(responseData.objectUrl);

            // Assign the correct value to values.image
            data.image = responseData.objectUrl;
            const id1 = JSON.parse(localStorage.getItem("userid"));
            console.log(id1);
            dispatch(addMenu({ ...data, res_id: id }));
            console.log(data);
            window.location=`/showmenu/${id}`;
        } catch (error) {
            console.error("Error parsing server response:", error);
        }
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
                            placeholder="Menu Name"
                            value={data.name}
                            name="name"
                            onChange={onChange}
                        />

                        <TextField
                            key="2"
                            type="text"
                            placeholder="Menu Description"
                            value={data.description}
                            name="description"
                            onChange={onChange}
                        />
                        <TextField
                            key="3"
                            type="number"
                            placeholder="Price"
                            value={data.price}
                            name="price"
                            onChange={onChange}
                        />
                        <div>
                            <label className="w-full px-4 focus:outline-none transition duration-300  focus:shadow-xl">
                                Catagory
                            </label>
                            <select
                                onChange={onChange}
                                value={data.catagory}
                                name="catagory"
                                className="w-full px-4 py-3 my-2  rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                            >
                                {/* <option>abc</option> */}
                                {options.map((item) => (
                                    <option name={item[1]} key={item[0]}>
                                        {item[1]}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="px-4">select image</label>
                            {file ? (
                                <p>File selected: {file.name}</p>
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        alt="abc"
                                        className="px-4 my-2"
                                        onChange={onFileChange}
                                        name="image"
                                    ></input>

                                    {/* <button onClick={uploadImage}>Upload Image</button> */}
                                </>
                            )}
                            {/* <input type="file" alt="abc" value={data.image} className="px-4 my-2" onChange={onChange} name="image"></input> */}
                        </div>
                    </div>

                    <Button type="submit" text="ADD MENU" />
                </form>
            </div>
        </main>
    );
}

export default AddMenu;
