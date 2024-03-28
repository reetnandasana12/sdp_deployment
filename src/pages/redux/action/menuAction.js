// import { message } from 'antd';
import axios from 'axios';
// import { message } from "antd";
export const getAllMenus=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/menus/getallmenus')
        dispatch({type: 'GET_ALL_MENUS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}


export const addMenu=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        
         await axios.post('http://localhost:6005/api/menus/addmenu' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
        //  message.success('New hotel added successfully');
         setTimeout(() => {
            // window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editMenu=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('http://localhost:6005/api/menus/editmenu' , reqObj)
       
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

export const deleteMenu=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        console.log("1");
         await axios.post('http://localhost:6005/api/menus/deletemenu' , reqObj)
       
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