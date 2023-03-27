import CartReducer from "./Reducer/CartReducer"
import WishlistReducer from "./Reducer/WishlistReducer"

import { createStore , combineReducers} from "redux";
function loadState() {
    try{
        const state = localStorage.getItem('cart')
        
        if (state !== null) {
            return JSON.parse(state);
        }

    }catch(e){

    }
    return {
        cart: []
    }
}

function saveState(state){
    localStorage.setItem('cart' , JSON.stringify(state));
}
const appReducers= combineReducers({
    cart:CartReducer,
    wishList:WishlistReducer,
})

const store = createStore(appReducers, loadState());
store.subscribe(()=>{
    saveState(store.getState())
})
export default store;

