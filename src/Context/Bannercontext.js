import { createContext, useEffect, useReducer } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import reducer from "../Reducer/BannerReducer";

const Bannercontext = createContext();

const BannerProvider = ({children})=>{

    const initialValue={
        Loading: true,
        isError: false,
        banners: [],

    }
    const [state, dispatch] = useReducer(reducer, initialValue);

    function getBanners() {
        const storage = getStorage();
        const listRef = ref(storage, 'Banners/');
    
        listAll(listRef)
          .then((res) => {
            res.items.forEach((itemRef) => {
              let path = itemRef._location.path_;
              getDownloadURL(ref(storage, `${path}`))
                .then((url) => {
                    dispatch({type: "BANNER", payload: url} )
                })
            })
          }).catch((error) => {
            console.log(error);
          });
      }
    useEffect(()=>{
        getBanners();
    }, [])

    return (
        <Bannercontext.Provider value={{...state}}>
            {children}
        </Bannercontext.Provider>
    )
}


export {Bannercontext, BannerProvider};