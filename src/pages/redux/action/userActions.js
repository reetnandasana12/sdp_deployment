import axios from "axios";
// import {message} from 'antd'
import swal from "sweetalert";
export const userLogin = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const type = localStorage.getItem("type");
        const response = await axios.post("/api/users/login", reqObj);

        localStorage.setItem("image", response.data.image);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("verify", true);
        localStorage.setItem("userid", JSON.stringify(response.data._id));
        swal("Wow!!!", "You are successfully sign up.", "success");

        dispatch({ type: "LOADING", payload: false });
        setTimeout(() => {
            if (type === "admin") {
                window.location.href = "/adminhome";
            } else if (type === "owner") {
                window.location.href = "/ownerhome";
            } else if (type === "user") {
                window.location.href = "/home";
            }
        }, 500);
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
    }
};

export const userRegister = (reqObj) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const type = localStorage.getItem("type");
        const response = await axios.post("/api/users/register", reqObj);
        if (response.data.exist) {
            swal("Sorry!!!", "User alread exist.", "failer");
        } else {
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("verify", true);

            // localStorage.setItem('exist' , JSON.stringify(response.exist))
            localStorage.setItem("userid", JSON.stringify(response.data._id));
            localStorage.setItem("image", response.data.image);
            localStorage.setItem("name", response.data.name);
            swal("Wow!!!", "You are successfully sign up.", "success");
            setTimeout(() => {
                if (type === "admin") {
                    window.location.href = "/adminhome";
                } else if (type === "owner") {
                    window.location.href = "/ownerhome";
                } else if (type === "user") {
                    window.location.href = "/home";
                }
            }, 500);
        }

        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.log(error);
        // message.error('Something went wrong')
        dispatch({ type: "LOADING", payload: false });
    }
};

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.get("/api/users/getallusers");
        dispatch({ type: "GET_ALL_USERS", payload: response.data });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
    }
};

export const getAllOwners = () => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        const response = await axios.get("/api/users/getallowners");
        dispatch({ type: "GET_ALL_OWNERS", payload: response.data });
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
    }
};
