import React from "react";
import { connect } from "react-redux";
import WishlistItem from "./WishlistItem";
import { clearWishlist } from "./action/Action";
import { Link } from 'react-router-dom';
import { Container ,Row , Col} from "reactstrap";


import Footer from "../../Footer"
function Wishlist({ wishList, total1, totalQuantity1 }) {

  return (
    <div >
    <div className="carttt">
          <h3 className="h3cart">WishList</h3>
    
          {totalQuantity1 ? (
    
            <Container>
            
              <div className="fff">
              <div className="tblewidth">

                <table className="tbleee ">
                  <thead>
                    <tr>
    
                      <th><p>PRODUCT DETAILS</p></th>
                      <th><p>UNIT PRICE	</p></th>
                      <th><p>Add To Cart</p></th>
                      <th><p>Delete</p></th>

                    </tr>
                  </thead>
                  <tbody>
                    {wishList.map((item1) => (
    
                      <WishlistItem key={item1.id} item1={item1} />
    
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
              <div className="cartbuttons mt-5">
    
              <Link to="/Productss" > <button className="btn2cart">UPDATE WishList</button></Link>
              </div>

    
    
            </Container>
          ) :
           <div className="cartxy">
             <p>Your WishList is currently empty.</p>
              <Link to="/Productss" >
               <button className="bttncarttt">Back to Shop</button></Link>
           </div>
             
             
          }
    
    </div>
    
          <footer>
            <Footer />
          </footer>
    
        </div>

  )
}
const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
    total1: state.wishList.reduce((total1, item1) => total1 + item1.quantity1 * item1.product1.CurrentPrice, 0),
    totalQuantity1: state.wishList.reduce((total1, item1) => total1 + parseInt(item1.quantity1), 0),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearWishlist: () => dispatch(clearWishlist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);