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
        productdetail: {},
        isSingleLoading: false,

    }
    const [state, dispatch] = useReducer(reducer, initialState);


    const getSingleProduct = (id) => {
        try {
            dispatch({ type: "SET_SINGLE_LOADING" });
            get(child(dbRef, `Products/${id}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    dispatch({ type: "SET_SINGLE_PRODUCT", payload: snapshot.val() })

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
                dispatch({ type: "API_ERROR" });
            });
        } catch (error) {

        }
    }

    const dbRef = ref(db);
    function getproducts() {
        dispatch({ type: "SET_LOADING" });
        get(child(dbRef, `Products/`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                let temp = Object.keys(snapshot.val()).map(key => { return [key, snapshot.val()[key]]; })
                Array.prototype.push.apply(arr, temp);
                // console.log(arr);
                dispatch({ type: "MY_API_FETCH", payload: arr })

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            dispatch({ type: "API_ERROR" });
        });
    }

    useEffect(() => {
        getproducts();
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct  }}>
            {children}
        </AppContext.Provider>
    )
}

//custom Hooks

const useProductContext = () => {
    return useContext(AppProvider);
}

export { AppContext, AppProvider, useProductContext };