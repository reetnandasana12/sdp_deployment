const initialData = {
    menus : [],

};

export const menuReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        case 'GET_ALL_MENUS' : {
            return{
                ...state,
                menus : action.payload
            }
        }
        default:return state 
     }
}