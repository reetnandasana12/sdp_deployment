// import { message } from 'antd';
import axios from 'axios';
// import { message } from "antd";
export const getAllHotels=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/hotels/getallhotels')
        dispatch({type: 'GET_ALL_HOTELS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}


export const addHotel=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        
         await axios.post('http://localhost:6005/api/hotels/addhotel' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
        //  message.success('New hotel added successfully');
         setTimeout(() => {
            window.location.href='/ownerhome'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editHotel=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('http://localhost:6005/api/hotels/edithotel' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
        //  message.success('Hotel details updated successfully');
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteHotel=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        console.log("1");
         await axios.post('http://localhost:6005/api/hotels/deletehotel' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
        //  message.success('Hotel deleted successfully');
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}