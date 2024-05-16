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
// export const Quantity = (id) => {
// export const QUANTITY = (item) => {
//     return {
//         type:"ADD_TO_QUANTITY",
//         payload:item
//     }
// }