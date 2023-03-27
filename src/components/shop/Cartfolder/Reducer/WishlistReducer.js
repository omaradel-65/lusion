import {ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,CLEAR_WISHLIST} from "../action/Types"
export default function WishlistReducer(state, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return [
    
          ...state,
          {
            product1: action.productInfo1,
         
            quantity1: action.quantity1,
          
          }
        
      ]
    }

    case REMOVE_FROM_WISHLIST: {
      const item_index1 = action.index1;
      const new_state1 = [ ...state ];
      new_state1.splice(item_index1, 1)
      return new_state1;


    }

    case CLEAR_WISHLIST: {
      const new_state1 = { ...state };
      new_state1 = [];
      return new_state1;
    }

    default:{
      if(state === undefined)
        return []
        return state;

      
    }
  }

}