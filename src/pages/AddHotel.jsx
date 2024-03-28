import React, { useState, useEffect } from "react";
import { Col, Row, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addHotel } from "./redux/action/hotelActions";
import Brand from "../components/Form/Brand";
import Button from "../components/Form/Button";
import TextField from "../components/Form/TextField";
function AddHotel() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.alertsReducer);
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

    //-----------------------------------------------Start------------------------------------------------

    const onFinish = async (values) => {
      values.preventDefault();
        if (!file) {
            alert("Please select an image file.");
            return;
        }
        if (files.length < 4) {
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

        try {
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

            console.log("Before dispatching addCar:", data);

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
            console.log("444444444", file, files);
            const id = JSON.parse(localStorage.getItem("userid"));
            console.log(id);
            dispatch(addHotel({ ...data, own_id: id }));
            console.log("After dispatching addCar:", values);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    //---------------------------------------------------End-----------------------------------------------------------

    // const [file, setFile] = useState(null); // Initialize with null

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        catagory: "",
        opening: "",
        closing: "",
        foodType: "",
        image: "",
        images: [],
    });
    function onChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    const Inputs = [
        {
            id: 1,
            type: "name",
        },
        {
            id: 2,
            type: "phone",
        },
        {
            id: 3,
            type: "email",
        },
        {
            id: 4,
            type: "location",
        },
        {
            id: 5,
            type: "catagory",
        },
        {
            id: 6,
            type: "opening",
        },
        {
            id: 7,
            type: "closing",
        },
        {
            id: 8,
            type: "foodType",
        },
        {
            id: 9,
            type: "image",
        },
    ];
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

    // const onFinish = async (values) => {
    //   values.preventDefault();
    //   if (!file) {
    //     alert("Please select an image file.");
    //     return;
    //   }

    //   const response = await fetch("/api/upload", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       filename: file.name,
    //       contentType: file.type,
    //     }),
    //   });

    //   try {
    //     const responseData = await response.json();
    //     console.log("Server Response:", responseData);

    //     const uploadResponse = await fetch(responseData.url, {
    //       method: "PUT",
    //       body: file,
    //       headers: {
    //         "Content-Type": file.type,
    //       },
    //     });

    //     console.log("Image uploaded successfully:", uploadResponse);

    //     // Update objectUrl after successful image upload
    //     setObjectUrl(responseData.objectUrl);

    //     // Assign the correct value to values.image
    //     data.image = responseData.objectUrl;
    //     const id = JSON.parse(localStorage.getItem("userid"));
    //     console.log(id);
    //     dispatch(addHotel({...data,own_id:id}));
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error parsing server response:", error);
    //   }
    // };

    return (
        <main className="h-screen w-full banner">
            <div className="flex flex-col justify-center items-center h-screen">
                {/* logo  */}
                <Brand />
                {/* sign up form  */}
                <form
                    className="bg-white w-96 mt-48 p-4 rounded-lg shadow-lg"
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
                    <div>
                    <label className="px-4">select image</label>
                            
                    <input type="file" onChange={handleMultipleFileChange} accept="image/*" multiple />
              {multipleObjectUrls.length > 0 && (
                <ul>
                  {multipleObjectUrls.map((url, index) => (
                    <li key={index}>Uploaded: {url}</li>
                  ))}
                </ul>
              )}
                    </div>

                    <Button type="submit" text="ADD HOTEL" />
                </form>
            </div>
        </main>
    );
}

export default AddHotel;
