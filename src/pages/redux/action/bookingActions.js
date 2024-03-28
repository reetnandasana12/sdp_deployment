import axios from "axios";
import { message } from "antd";

export const bookHotel = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post("http://localhost:6005/api/bookings/bookhotel" , reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your hotel booked successfully");
    setTimeout(() => {
      window.location.href='/ordersuccess'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const getAllBookings=()=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await axios.get('http://localhost:6005/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}

export const AcceptBookings=(reqObj)=>async dispatch=>{

  console.log("click1");
  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await axios.post('http://localhost:6005/api/bookings/acceptbookings',reqObj)
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}
export const RejectBookings=(reqObj)=>async dispatch=>{

  console.log("click1");
  dispatch({type: 'LOADING' , payload:true})

  try {
    console.log("1");

      const response = await axios.post('http://localhost:6005/api/bookings/rejectbookings',reqObj)
      console.log("10");
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}