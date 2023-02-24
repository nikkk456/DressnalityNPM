

const BannerReducer = (state, action) => {
  switch(action.type){

    case "BANNER":
        return{
            ...state,
            loding: false,
            banners: [...state.banners, action.payload]
        }

    default:
        return state;
  }
}

export default BannerReducer
