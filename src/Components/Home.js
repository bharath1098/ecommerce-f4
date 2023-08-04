import React ,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {fetchProduct} from "../redux/action/actionCreater";


const Home=()=>{
    const {loading,products,error}=useSelector(state=>state.product);
    const dispatch=useDispatch();  
    
    useEffect(()=>{
            dispatch(fetchProduct())
        },[])
         
        
     
    return (
        <div style={
            {
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                flexWrap:"wrap",
                gap:"10px",
                border:"1px solid yellow",
                padding:"10px",
                margin:"10px",
                width:"100%",
                height:"500px",
                backgroundColor:"white",
            }
        }>
            {
                products.length > 0 &&  (products.map(product=>(
                    <div key={product.id} style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        flexWrap:"wrap",
                        gap:"5px",
                        width:"32%",
                        border:"1px solid red",
                        height:"300px"

                    }}>
                        <img src={product.images[3]} alt={product.name}  style={{width:"100%",height:"35%"}}/>
                        <h3>{product.brand}</h3>
                        <p>{product.description}</p>
                        <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>Add to Cart</button>
                        
                    </div>
                )))
            }


        </div>
    )
}

export default Home;