const initial_state = {
    carts: [],
    Wishlistitem: []
}

export const Creatreduser = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            break;


        case "REMOVE_TO_CART": {
            const data = state.carts.filter((el) => el.id !== action.payload);
            console.log(data, "====>")
            // state.cartList = state.cartList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                carts: data,
            }
        }

        default: return state;
    }
}

export const Wishlist = (state = initial_state, action) => {
    switch (action.type) {

        case "ADD_TO_WISHLIST":
            return {
                ...state,
                Wishlistitem: [...state.Wishlistitem, action.payload]
            }
        case "REMOVE_TO_WISHLIST": {
            const data = state.Wishlistitem.filter((el) => el.id !== action.payload);
            console.log(data, "====>")
            // state.cartList = state.cartList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                Wishlistitem: data,
            }
        }
            break;
        default: return state;
    }
}
