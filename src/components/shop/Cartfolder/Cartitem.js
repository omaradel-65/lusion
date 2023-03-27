import React from 'react';
import { connect } from "react-redux";


import { removefromcart } from "./action/Action";


function Cartitem(props) {
  const { item, index } = props;
  const { product } = item;

  return (



    <tr className="divcarttttt">

      <td className="hhh5">
        <img src={product.img} alt=""/>
        <p>{product.name}</p>
      </td>
      <td><p>{product.CurrentPrice}$</p></td>
      <td><div >{item.quantity}</div></td>
      <td><p>{item.quantity * product.CurrentPrice}$</p></td>

      <td>
        <button className="buttonx" onClick={() => props.removefromcart(index)} >x</button>
      </td>



    </tr>








  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removefromcart: (index) => dispatch(removefromcart(index))
  }
}
export default connect(null, mapDispatchToProps)(Cartitem);