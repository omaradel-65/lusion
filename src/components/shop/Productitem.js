import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { addToCart } from "./Cartfolder/action/Action";
import { addToWishlist } from "./Cartfolder/action/Action";

import { connect } from "react-redux";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaSearchPlus } from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai"
export class Productitem extends Component {
  constructor(props) {
    super(props);
    this.state = {

      quantity: 1,
      quantity1: 1,

      product: {},
      product1: {},

    }
  }
  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  }
  addToWishlist = (product1) => {
    this.props.addToWishlist(product1, this.state.quantity1);
  }
  render() {

    const product = this.props.product;
    const runcallback = (cb) => {
      return cb();
    }
    return (
      <div className="productitemm wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">

          <div className="productitemmimg">


            <img src={product.img} alt=""  className="img1item"/>
            
           {product.img2? <img src={product.img2} alt=""  className="img2item" />:null}
            <div className="productitemicon">
              <button onClick={() => this.addToCart(product)}><RiShoppingBasket2Fill /></button>
              <button onClick={() => this.addToWishlist(product)}><AiOutlineHeart /></button>


                      <Link to={"/Productss/" + product.id} className="lllink" >

              <button><FaSearchPlus /></button>
              </Link>

            </div>
          </div>
          <Link to={"/Productss/" + product.id} className="lllink" >

          <p>{product.name}</p>
          <h4> {runcallback(() => {
                const row = []
                for (var i = 0; i < product.stars; i++) {
                  row.push(<span className="stary" >  ★ </span>)
                }
                for (var n = 0; n < 5 - product.stars; n++) {
                  row.push(<span className="stary">   ☆</span>)
                }
                return row;
              })
              }</h4>
          <h3><span><del><small>${product.oldPrice}.00</small></del></span> ${product.CurrentPrice}.00  </h3>
</Link>
      

      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    addToWishlist: (productInfo1, quantity1) => dispatch(addToWishlist(productInfo1, quantity1)),

  }
}
export default connect(null, mapDispatchToProps)(Productitem)



