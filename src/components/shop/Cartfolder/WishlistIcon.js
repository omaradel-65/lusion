import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AiOutlineHeart} from "react-icons/ai"

function WishlistIcon(props) {
    return (
        <div>
          <Link to="/Wishlist" className="cartLink">
          <span>{props.totalQuantity1}</span>
         
          <AiOutlineHeart className="iconnm"/>
          </Link>
        </div>
    )
}
const mapStateToProps =(state) =>{
    return {
        totalQuantity1:state.wishList.reduce((total1,item1)=> total1 + parseInt(item1.quantity1),0)
    }
}
export default connect(mapStateToProps)(WishlistIcon)
