const initialData = {
    users : [],
    owners : [],
};

export const userReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        case 'GET_ALL_USERS' : {
            return{
                ...state,
                users : action.payload
            }
        }
        case 'GET_ALL_OWNERS' : {
            return{
                ...state,
                owners : action.payload
            }
        }
        
        default:return state
         
         
         
     }

}