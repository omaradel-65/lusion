import React, { Component } from 'react'
import { getById } from "./products";
import { addToCart, addToWishlist } from "./Cartfolder/action/Action";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import Footer from "../Footer";
import Lists from "./Lists";
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination, EffectFlip, Navigation

} from 'swiper';
import { AiOutlineHeart } from "react-icons/ai"

import { Link } from "react-router-dom";

// install Swiper modules

SwiperCore.use([EffectFlip, Pagination, Navigation]);
class Productdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {

      quantity: 1, 
      product: {},
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

  };



  componentDidMount() {
    const id = this.props.match.params.id;
    getById(parseInt(id))
      .then(product => {
        this.setState({
          product
        });
      })
  }

  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  }
  addToWishlist = (product1) => {
    this.props.addToWishlist(product1, 1);
  }
  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 1)
      return;
    this.setState({
      quantity: value
    })
  }
  zoom = (e) => {
    var image = document.getElementById("zoom_image")

    var x = e.nativeEvent.offsetX / image.offsetWidth * 100
    var y = e.nativeEvent.offsetY / image.offsetHeight * 100

    image.style.backgroundPosition = x + '% ' + y + '%';
  }
  zoom1 = (e) => {

    var image1 = document.getElementById("zoom_image1")

    var x1 = e.nativeEvent.offsetX / image1.offsetWidth * 100
    var y1 = e.nativeEvent.offsetY / image1.offsetHeight * 100

    image1.style.backgroundPosition = x1 + '% ' + y1 + '%';
  }
  zoom2 = (e) => {

    var image2 = document.getElementById("zoom_image2")

    var x2 = e.nativeEvent.offsetX / image2.offsetWidth * 100
    var y2 = e.nativeEvent.offsetY / image2.offsetHeight * 100

    image2.style.backgroundPosition = x2 + '% ' + y2 + '%';
  }
  zoom3 = (e) => {

    var image3 = document.getElementById("zoom_image3")

    var x3 = e.nativeEvent.offsetX / image3.offsetWidth * 100
    var y3 = e.nativeEvent.offsetY / image3.offsetHeight * 100

    image3.style.backgroundPosition = x3 + '% ' + y3 + '%';



  }
  zoom4 = (e) => {

    var image4 = document.getElementById("zoom_image4")

    var x4 = e.nativeEvent.offsetX / image4.offsetWidth * 100
    var y4 = e.nativeEvent.offsetY / image4.offsetHeight * 100

    image4.style.backgroundPosition = x4 + '% ' + y4 + '%';



  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()

      }

    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''

        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }


  render() {
    const product = this.state.product;
    const quantity = this.state.quantity;


    const runcallback = (cb) => {
      return cb();
    }
    return (
      <div className="slidessdetail pt-5">
        <div className="detailfixed d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={product.img} alt="" />
            <div className="mx-2">
              <p>Short straight coat</p>
              <h3>${product.CurrentPrice}</h3>
            </div>


          </div>
          <div>
            <button className="cartbutn mx-3" onClick={() => this.addToCart(product)} >Add to Cart</button>
            <button className="wishbutn" onClick={() => this.addToWishlist(product)}><AiOutlineHeart /></button>

          </div>
        </div>
        {product.img5 ?
          (
            <div className="divswiper">
              <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} pagination={{
                "clickable": true
              }} className="mySwiper">
                <SwiperSlide >
                  <div>
                    <div id="zoom_image" style={{ backgroundImage: `url(${product.img})` }} onMouseMove={this.zoom} ><img src={product.img} /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div>
                    <div id="zoom_image1" style={{ backgroundImage: `url(${product.img2})` }} onMouseMove={this.zoom1} ><img src={product.img2} /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div>
                    <div id="zoom_image2" style={{ backgroundImage: `url(${product.img3})` }} onMouseMove={this.zoom2} ><img src={product.img3} /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div>
                    <div id="zoom_image3" style={{ backgroundImage: `url(${product.img4})` }} onMouseMove={this.zoom3} ><img src={product.img4} /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div>
                    <div id="zoom_image4" style={{ backgroundImage: `url(${product.img5})` }} onMouseMove={this.zoom4} ><img src={product.img5} /></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : product.img2 ? (
            <div className="d-flex justify-content-around py-5" >
              <div>
                <div id="zoom_image" style={{ backgroundImage: `url(${product.img})` }} onMouseMove={this.zoom} ><img src={product.img} /></div>
              </div>

              <div>
                <div id="zoom_image1" style={{ backgroundImage: `url(${product.img2})` }} onMouseMove={this.zoom1} ><img src={product.img2} /></div>
              </div>
            </div>
          ) :
            null}

        <Container className="secprodetail">
          <section>
            <div className="d-flex mt-5">

              <div >
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: product.img
                  },
                  largeImage: {
                    src: product.img,
                    width: 1200,
                    height: 1800
                  }
                }} />

              </div>

              <div className="detaildiv">
                <p><Link to="/Productss">Shop</Link> / {product.name}</p>

                <h3>{product.name}</h3>
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

                <h5>${product.CurrentPrice}</h5>


                <div className="detailyyy">


                  <div className="d-flex my-3">
                    <input className="inputdetail" type="number" value={quantity} onChange={this.handleQuantity} />
                    <button className="cartbutn" onClick={() => this.addToCart(product)} >Add to Cart</button>
                    <button className="wishbutn" onClick={() => this.addToWishlist(product)}><AiOutlineHeart /></button>

                  </div>
                  <h5 >Total Price:<span> ${quantity * product.CurrentPrice}</span></h5>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <ul>
                    <li>Availability:<span>In stock</span> </li>
                    <li>Type:<span>{product.type}</span> </li>
                    <li>Vendor:<span>Fashion</span> </li>

                  </ul>



                </div>
              </div>


            </div>

          </section>







          <section className="sec3detail py-5">
            <h3>Additional Information</h3>
            <hr />
            <div>
              <h3>Weight</h3>
              <p>{product.Weight}</p>
            </div>
            <div>
              <h3>Dimensions</h3>
              <p>{product.Dimensions}</p>
            </div>           <div>
              <h3>Color</h3>
              <p>{product.Color}</p>
            </div>           <div>
              <h3>Sizing</h3>
              <p>{product.Sizing}</p>
            </div>           <div>
              <h3>Model</h3>
              <p>{product.Model}</p>
            </div>
          </section>






        </Container>


        <section className="sec4detail">

          <h3>Reviews</h3>
          <Lists items={this.state.items} deleteItem={this.deleteItem} />


          <form id="to-do-form" onSubmit={this.addItem}>
            <div className="d-flex">
              <input type="text" placeholder="Your Name*" />
              <input type="email" className="mx-3" placeholder="Your Email*" />
            </div>
            <textarea rows="5" value={this.state.currentItem.text} onChange={this.handleInput} placeholder="Your Review*"></textarea>

            <br />

            <button type="submit">Submit</button>
          </form>

        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    addToWishlist: (productInfo1, quantity1) => dispatch(addToWishlist(productInfo1, quantity1))
  }
}
export default connect(null, mapDispatchToProps)(Productdetail)


