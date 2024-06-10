const initial_state = {
    carts: [],
    Wishlistitem: [],
    qty:[]
}

export const Creatreduser = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state.carts=state.carts.filter((item)=>item.id!==action.payload.id)
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            break;


        case "REMOVE_TO_CART": {
            const data = state.carts.filter((el) => el.id !== action.payload);
            console.log(data, "====>")
            return {
                ...state,
                carts: data,
            }
        }
        case "INCREASE_CART_COUNT" : {
            let updatedCartList = state.carts.map((item) => {
                if (item.id == action.payload.id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    };
                }
                return item;
            })
            return {...state,carts: updatedCartList};
        }
        case "DECREASE_CART_COUNT" : {
            let updatedCartList = state.carts ;
            if(action.payload.qty !== 1){
                updatedCartList = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                carts: updatedCartList
            };

        
        }

        case "Update_Qty":
            return{
                ...state,
                qty:{
                    ...state.qty,
                    [action.payload.id]:action.payload.qty,
                }
            }

        default: return state;
    }
}

export const Wishlist = (state = initial_state, action) => {
    switch (action.type) {

        case "ADD_TO_WISHLIST":
            state.Wishlistitem=state.Wishlistitem.filter((item)=>item.id!==action.payload.id)

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
