
const CardReducer = (state, action) => {

    if (action.type ==="ADD_TO_CART") {
        let {Id, title, productdetail,amount,size,price, values } = action.payload;

        let existingProduct = state.cart.find((currElem, i) => currElem.id === Id+size );
        if(existingProduct){
            let updatedCart = state.cart.map((currElem)=>{
                if(currElem.id === Id+size){
                    let newamount = currElem.amount+amount;
                    if(newamount >= currElem.quantity){
                        newamount = currElem.quantity;
                    }
                    return{
                        ...currElem,
                        amount: newamount,
                    }
                }
                else{
                    return currElem
                }
            })
            return{
                ...state,
                cart: updatedCart,
            }
        }
        else{
            let cartproduct;
            cartproduct={
                id :Id+size,
                title: title,
                amount: amount,
                image: productdetail.imageUrl[0],
                size:size,
                price: price,
                quantity: productdetail.quantity,
                chest: values.chest,
                waist: values.waist,
                arm: values.arm,
                neckline: values.neckline,
            }
            return{
                ...state,
                cart:[...state.cart, cartproduct],
            }
        }


    }

    if(action.type === "REMOVE_ITEM"){

        let updatedCart = state.cart.filter((currElem)=> currElem.id !== action.payload);

        return {
            ...state,
            cart: updatedCart,
        }
    }

    if(action.type === "CLEAR_CART"){

        return{
            ...state,
            cart:[],
        }
    }

    if(action.type === "DECREMENT"){
        let updatedProduct = state.cart.map((currElem)=> {
            if (currElem.id === action.payload) {
                let decrement = currElem.amount -1;
                if(decrement<=1){
                    decrement = 1;
                }
                return{
                    ...currElem,
                    amount: decrement,
                }
            }
            else{
                return currElem
            }
        })
        return{
            ...state,
            cart: updatedProduct,
        }
    }

    if(action.type === "INCREMENT"){
        let updatedProduct = state.cart.map((currElem)=> {
            if (currElem.id === action.payload) {
                let increment = currElem.amount +1;
                if(increment > currElem.quantity){
                    increment =  Number(currElem.quantity) ;
                }
                return{
                    ...currElem,
                    amount: increment,
                }
            }
            else{
                return currElem
            }
        })
        return{
            ...state,
            cart: updatedProduct,
        }
    }

    if(action.type === "CART_ITEM"){
        let updateditem = state.cart.reduce((initialValue, currElem)=>{
            let {amount} = currElem;
            initialValue = initialValue+ amount;
            return initialValue;
        }, 0)
        return {
            ...state,
            total_item:updateditem,
        }
    }
  
    if(action.type === "CART_TOTAL"){
        let updatedPrice = state.cart.reduce((initialValue, currElem)=>{
            let {price, amount} = currElem;
            initialValue = initialValue+ (price*amount);
            return initialValue;
        },0)
        
        return{
            ...state,
            total_price: updatedPrice,
        }
    }
    return state;
}

export default CardReducer
