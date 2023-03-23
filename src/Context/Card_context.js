import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CardReducer";

const CardContext = createContext();

const getLocalCart = ()=>{
    let newcartdata = localStorage.getItem("DressnalityCart");
    // if (newcartdata === []) {
    //     return []
    // }
    // else{
    //     return JSON.parse(newcartdata);
    // }

    const parsedData = JSON.parse(newcartdata);
    if(!Array.isArray(parsedData)){
        return []
    }
    return parsedData
}

const initialState = {
    cart: getLocalCart(),
    total_item: "",
    total_price: "",
    shipping_fee: 50,

}

const CardProvider = ({children})=>{
    

    const [state, dispatch] = useReducer(reducer, initialState);

    const addtocart = (Id, title, productdetail,amount,size,price, values={chest:"",waist:"", arm:"",neckline:""} )=>{
        dispatch({type:"ADD_TO_CART", payload:{Id, title, productdetail,amount,size,price, values  }});
    }

    const removeItem = (id)=>{
        dispatch({type: "REMOVE_ITEM", payload: id});
    }
    const setDecrease = (id) => {
        dispatch({type:"DECREMENT", payload: id});
      };
      const setIncrease = (id) => {
        dispatch({type:"INCREMENT", payload: id});
      };

    //To clear the whole cart by one click
    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"})
    }

    // cart ko localstorage me add karenge getvs set ka use karke
    useEffect(()=>{
        dispatch({type: "CART_ITEM"});
        dispatch({type: "CART_TOTAL"});
        localStorage.setItem("DressnalityCart", JSON.stringify(state.cart))
    },[state.cart])

return <CardContext.Provider value={{...state, addtocart, removeItem,clearCart,setDecrease,setIncrease}}>
    {children}
</CardContext.Provider>
}

export {CardProvider, CardContext};