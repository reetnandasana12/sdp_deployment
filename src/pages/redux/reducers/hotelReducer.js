const initialData = {
    hotels : [],

};

export const hotelsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        case 'GET_ALL_HOTELS' : {
            return{
                ...state,
                hotels : action.payload
            }
        }
        default:return state
         
         
         
     }

}