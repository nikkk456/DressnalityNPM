const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }

        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }

        case "UPDATE_FILTER_PRODUCTS":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }


        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterproducts = [...all_products];
            const {text} = state.filters;

            if (text) {
                tempFilterproducts = tempFilterproducts.filter((currElem)=>{
                    return currElem[1].title.toLowerCase().includes(text);
                })
            }
            return{
                ...state,
                filter_products: tempFilterproducts,
            }


        case "SORTING_PRODUCTS":
            let newsortData;
            let tempProducts = [...action.payload];

            if (state.sorting_value === "A-Z") {
                newsortData = tempProducts.sort((a, b) => a[1].title.localeCompare(b[1].title))
            }
            if (state.sorting_value === "Z-A") {
                newsortData = tempProducts.sort((a, b) => b[1].title.localeCompare(a[1].title))
            }
            if (state.sorting_value === "lowest") {
                const sortingProducts = (a, b) => {
                    return a[1].price - b[1].price;
                }
                newsortData = tempProducts.sort(sortingProducts);
            }
            if (state.sorting_value === "highest") {
                const sortingProducts = (a, b) => {
                    return b[1].price - a[1].price;
                }
                newsortData = tempProducts.sort(sortingProducts);
            }
            return {
                ...state,
                filter_products: newsortData,
            }

        default:
            return state;
    }
}

export default FilterReducer;