const productReducer = (state, action) => {


    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true };

        case "SET_SINGLE_LOADING":
            return { ...state, isSingleLoading: true };

        case "MY_API_FETCH":
            const featureData = action.payload.filter((curElement) => {
                return curElement[1].featured === "true";
            })
            return {

                ...state,
                isLoading: false,
                products: action.payload,
                featuredproducts: featureData,
            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                productdetail: action.payload,
            }

        case "API_ERROR":
            return { ...state, isError: true, isLoading: false };


        default:
            return state;
    }

};

export default productReducer;