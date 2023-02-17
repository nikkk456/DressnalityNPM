import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./Productcontext";
import reducer from "../Reducer/FilterReducer";

const FeatureContext = createContext();


const initialState={
    filter_products: [],
    all_products:[],
}
 const FeatureProvider = ({children})=>{

    const {products} = useContext(AppContext);

    const[state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
    },[products])
    return (<FeatureContext.Provider value={{...state}}>
        {children}
    </FeatureContext.Provider>)
}

const useFeatureContext = ()=>{
    return useContext(FeatureContext);
}

export{FeatureContext, FeatureProvider, useFeatureContext};