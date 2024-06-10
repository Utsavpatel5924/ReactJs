export const ADD=(item)=>{
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}
export const WISHLIST=(item)=>{
    return{
        type:"ADD_TO_WISHLIST",
        payload:item
    }
}

export const REMOVELIST = (id) => {
    return {
        type:"REMOVE_TO_WISHLIST",
        payload:id
    }
}
export const REMOVE = (id) => {
    return {
        type:"REMOVE_TO_CART",
        payload:id
    }
}
export const CART_QUT_INCREASE = (item) => {
    return{
        type:"INCREASE_CART_COUNT",
        payload:item
    }
}

export const CART_QUT_DECREASE  = (item) => {
    return{
        type:"DECREASE_CART_COUNT",
        payload:item
    }
}


export const Update_Qty=(id,qty)=>{
    return{
        type:"Update_Qty",
        payload:{id,qty}
    }
}