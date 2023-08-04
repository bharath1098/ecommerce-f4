import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from "./actionType";
import axios from "axios";

    export const fetchProductRequest=()=>{
         return {
              type:FETCH_PRODUCT_REQUEST
           }
      }

      export const fetchProductSuccess=(products)=>{
        return {
             type:FETCH_PRODUCT_SUCCESS,
             payload:products
          }
     }

     export const fetchProductFailure=(error)=>{
        return {
             type:FETCH_PRODUCT_FAILURE,
             payload:error
          }
     }


     export const fetchProduct=()=>{
          return (dispatch)=>{
              dispatch(fetchProductRequest())
              axios.get('https://dummyjson.com/products')
            .then(res=>{
                dispatch(fetchProductSuccess(res.data.products))
              })
            .catch(err=>{
                dispatch(fetchProductFailure(err))
              })
          }

     }