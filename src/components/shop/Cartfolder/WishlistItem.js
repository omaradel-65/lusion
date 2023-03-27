import React from 'react';
import { connect } from "react-redux";


import { removefromWishlist,addToCart } from "./action/Action";
import { RiShoppingBasket2Fill } from "react-icons/ri";


function WishlistItem( props) {
  const { item1, index1 } = props;
  const { product1 } = item1;

   return (
    
 
 
 <tr className="divcarttttt">

 <td className="hhh5">
   <img src={product1.img} alt=""/>
   <p>{product1.name}</p>
 </td>
 <td><p>{product1.CurrentPrice}$</p></td>

 <td>
 <button className="buttonx" onClick={() => props.addToCart(product1,1)} ><RiShoppingBasket2Fill /></button> 
</td>
<td>
 <button className="buttonx" onClick={() => props.removefromWishlist(index1)} >x</button> 
 </td>



</tr>

 
  





  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removefromWishlist: (index1) => dispatch(removefromWishlist(index1)),
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))

  }
}
export default connect(null, mapDispatchToProps)(WishlistItem);