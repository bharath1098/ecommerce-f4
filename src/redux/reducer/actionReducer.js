import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from "../action/actionType";

const InitialState={
    loading:false,
    products:[],
    error:''
}

export const productReducer=(state=InitialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return {...state,loading:true};

        case FETCH_PRODUCT_SUCCESS:
            return {...state,loading:false,products:action.payload,error:""};
            
        case FETCH_PRODUCT_FAILURE :
            return {...state,loading:false,error:action.payload,products:[]};
        default : return state;        
    }

}

export default productReducer;