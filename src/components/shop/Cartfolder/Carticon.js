import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { FaShoppingBasket } from 'react-icons/fa';

function Carticon(props) {
    return (
        <div>
          <Link to="/Cart" className="cartLink">
          <span>{props.totalQuantity}</span>
         
          <FaShoppingBasket className="iconnm"/>
          </Link>
        </div>
    )
}
const mapStateToProps =(state) =>{
    return {
        totalQuantity:state.cart.reduce((total,item)=> total + parseInt(item.quantity),0)
    }
}
export default connect(mapStateToProps)(Carticon)
