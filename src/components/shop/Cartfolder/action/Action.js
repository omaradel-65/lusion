import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "./Types";
import {ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,CLEAR_WISHLIST} from "./Types";

export function addToCart(productInfo,quantity) {
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity,
       
    }
    
}
export function removefromcart(index) {
    return {
        type: REMOVE_FROM_CART,
         index
    }
    
}
export function clearcart() {
    return {
        type: CLEAR_CART
    
    }
    
}
export function addToWishlist(productInfo1,quantity1) {
    return {
        type: ADD_TO_WISHLIST,
        productInfo1,
        quantity1,
       
    }
    
}
export function removefromWishlist(index1) {
    return {
        type: REMOVE_FROM_WISHLIST,
         index1
    }
    
}
export function clearWishlist() {
    return {
        type: CLEAR_WISHLIST
    
    }
    
}