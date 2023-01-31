import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { get } from 'firebase/database';
import { ref, child } from 'firebase/database';
import { db } from '../Firebase';
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext();

const AppProvider = ({ children }) => {

    // const [arr, setArr] = useState([]);
    const arr = [];

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featuredproducts: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    const dbRef = ref(db);
    function getproducts() {
        dispatch({type: "SET_LOADING"});
        get(child(dbRef, `Products/`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                let temp = Object.keys(snapshot.val()).map(key => { return [key, snapshot.val()[key]]; })
                // console.log(temp);
                Array.prototype.push.apply(arr, temp);
                console.log(arr);
                dispatch({type: "MY_API_FETCH", payload: arr })
                // console.log("Ye Product wala array hai"+ state.products);
                
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            dispatch({type: "API_ERROR"});
        });
    }
    console.log(state.featuredproducts);

    useEffect(() => {
        getproducts();
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

//custom Hooks

const useProductContext = () => {
    return useContext(AppProvider);
}

export { AppContext, AppProvider, useProductContext };