import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./Productcontext";
import reducer from "../Reducer/FilterReducer";

const FeatureContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",
    filters: {
        text: "",
    }
}


const FeatureProvider = ({ children }) => {

    const { products } = useContext(AppContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    //Sorting function
    function sorting(event) {
        let uservalue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: uservalue });
    }

    //UpdateFilter Function
    function updateFilterValue(event) {
        let name = event.target.name;
        let value = event.target.value;

        dispatch({ type: "UPDATE_FILTER_PRODUCTS", payload: { name, value } })
    }

    //To search the products
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
    },[state.filters])
    //To sort the products
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products })
        
    }, [ state.sorting_value ])

    //To load the poducts
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])


    return (
        <FeatureContext.Provider value={{ ...state, sorting, updateFilterValue }}>
            {children}
        </FeatureContext.Provider>)
}

const useFeatureContext = () => {
    return useContext(FeatureContext);
}

export { FeatureContext, FeatureProvider, useFeatureContext };