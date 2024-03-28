import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllHotels, addHotel, editHotel } from "./redux/action/hotelActions";
import Brand from "../components/Form/Brand";
import { useParams } from "react-router-dom";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
function EditHotel() {
    const dispatch = useDispatch();
    const { hotelid } = useParams();
    const { hotels } = useSelector((state) => state.hotelsReducer);
    const { loading } = useSelector((state) => state.alertsReducer);

    useEffect(() => {
        if (hotels.length === 0) {
            console.log("Fetching hotels");
            dispatch(getAllHotels());
        }
    }, [dispatch, hotels.length]);

    const selectedHotel = hotels.find((hotel) => hotel._id === hotelid);

    const [objectUrl, setObjectUrl] = useState("");
    const [singleObjectUrl, setSingleObjectUrl] = useState("");
    const [multipleObjectUrls, setMultipleObjectUrls] = useState([]);
    const [file, setFile] = useState(null); // Initialize with null
    const [files, setFiles] = useState([]); // Initialize with empty array

    useEffect(() => {
        console.log(files);
    }, [files]);

    const handleSingleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    const handleMultipleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };




    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        catagory: "",
        opening: "",
        closing: "",
        image: "",
        images: [],
    });

    useEffect(() => {
        if (selectedHotel) {
            setData({
                name: selectedHotel.name,
                email: selectedHotel.email,
                phone: selectedHotel.phone,
                location: selectedHotel.location,
                description: selectedHotel.description,
                catagory: selectedHotel.catagory,
                opening: selectedHotel.opening,
                closing: selectedHotel.closing,
                image: selectedHotel.image,
                images: selectedHotel.images,
            });
        }
    }, [selectedHotel]);

    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
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
    const onFileChange = (event) => {
        console.log("file select");
        const file = event.target.files[0];
        setFile(file);
    };

    const onFinish = async (values) => {
        values.preventDefault();
        if (files.length < 4 && files.length!==0) {
            alert(
                "you selected less images then 4 image file,please select exact 4 images"
            );
            return;
        }

        if (files.length > 4) {
            alert(
                "you selected more than 4 image file,please select exact 4 images and first 4 will be consider."
            );
            return;
        }
        if (file) {
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
                data.image = responseData.objectUrl;
                console.log(data);
                console.log("Image uploaded successfully:", uploadResponse);
            } catch (error) {
                console.error("Error parsing server response:", error);
            }
        }
        if (files.length > 0) {
            console.log("Files are present. Uploading multiple images...");

            // Multiple image upload
            const filesArray = files.map((file) => ({
                filename: file.name,
                contentType: file.type,
            }));
            console.log(filesArray);

            const responseMultiple = await fetch("/api/uploadMultiple", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ files: filesArray }),
            });

            const responseDataMultiple = await responseMultiple.json();
            console.log(
                "Server Response for multiple images:",
                responseDataMultiple
            );

            const urls = responseDataMultiple.urls;
            // Assuming responseDataMultiple.urls and files have the same length
            for (let i = 0; i < urls.length; i++) {
                const { url } = urls[i];
                const file = files[i];

                // Perform a PUT request for each URL and file
                const uploadResponse = await fetch(url, {
                    method: "PUT",
                    body: file,
                    headers: {
                        "Content-Type": file.type,
                    },
                });
                // Handle response as needed
            }

            //console.log("444444444",file,files);

            // Update objectUrls after successful image uploads
            setMultipleObjectUrls(
                responseDataMultiple.urls.map((url) => url.objectUrl)
            );

            // Assign the correct value to values.images
            data.images = responseDataMultiple.urls.map(
                (url) => url.objectUrl
            );
        }

        const id = JSON.parse(localStorage.getItem("userid"));
        console.log(id);
        dispatch(editHotel({ ...data, _id: selectedHotel._id }));

        // Update objectUrl after successful image upload
        //   setObjectUrl(responseData.objectUrl);

        // Assign the correct value to values.image
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
                            value={data.email}
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

                        <TextField
                            key="4"
                            type="text"
                            placeholder="Location"
                            value={data.location}
                            name="location"
                            onChange={onChange}
                        />
                        <TextField
                            key="5"
                            type="text"
                            placeholder="Description"
                            value={data.description}
                            name="description"
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
                            <label className="px-4">opning time</label>
                            <input
                                onChange={onChange}
                                className="mx-12 px-2 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                                type="time"
                                name="opening"
                                value={data.opening}
                            ></input>
                        </div>
                        <div>
                            <label className="px-4">closing time</label>
                            <input
                                onChange={onChange}
                                className="mx-12 px-2 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                                type="time"
                                name="closing"
                                value={data.closing}
                            ></input>
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

                    <Button type="submit" text="EDIT HOTEL" />
                </form>
            </div>
        </main>
    );
}

export default EditHotel;
