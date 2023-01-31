const productReducer = (state, action)=>{
    // console.log(action.type);
    // if(action.type === "MY_API_FETCH"){
    //     console.log("Fetch le andr");
    //         const featureData = action.payload.filter((curElement)=>{
    //             console.log(curElement);
    //             return curElement.featured === "true";
    //         })
    //         console.log("Ye reducer ke andr wala hai"+featureData);
    //         return {
                
    //             ...state, 
    //             isLoading: "false",
    //             products: action.payload,
    //             featuredproducts: featureData,
    //         }
    // }
    // if (action.type === "SET_LOADING") {
        
    //     return { ...state , isLoading: "true"};
    // }
    // if (action.type === "API_ERROR") {
    //     return { ...state, isError:"true", isLoading:"false"};
    // }
    // else{
        
    //     return state;
    // }

    switch (action.type) {
        case "SET_LOADING":
            return { ...state , isLoading: true};

        case "MY_API_FETCH":
            // console.log("Fetch le andr");
            const featureData = action.payload.filter((curElement)=>{
                // console.log(curElement);
                return curElement[1].featured === "true";
            })
            // console.log("Ye featured wala hai"+featureData);
            return {
                
                ...state, 
                isLoading: false,
                products: action.payload,
                featuredproducts: featureData,
            }

        case "API_ERROR":
            return { ...state, isError: true, isLoading: false};
            
    
        default:
            return state;
    }

};

export default productReducer;