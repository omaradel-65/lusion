import React, { useState } from 'react';
import products from "./products.json";
import Productitem from "./Productitem";
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from "../Footer";
import Slider from "react-slick";
import { FaSearchPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai"
function Productss() {
  const [search, setSearch] = useState('');
  const [search2, setSearch2] = useState('');
  const [search3, setSearch3] = useState(0);
  const [search4, setSearch4] = useState("");
  const [search5, setSearch5] = useState("");

  const [quantityy, setQuantityy] = useState("");
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div>
      <div className="divteam">
        <div>
          <h3>Shop</h3>

          <Link to="/" >Home </Link><span> / Shop</span>
        </div>
      </div>
      <Container className="SHOPALLL">
        <Row>



          <Col lg="9" md="9" sm="9" >

            <div>
              <form className="formmms">
                <select className="selectttt" onChange={event => { setQuantityy(event.target.value) }}>
                  <option >Featured</option>

                  <option value="rate">Best Selling</option>
                  <option value="1-10">Price, Low to High</option>
                  <option value="10-1">Price, High to Low </option>
                  <option value="a-z">Alphabetically, A-Z </option>
                  <option value="z-a">Alphabetically, Z-A</option>



                </select>
              </form>
              <Row>

                {products.filter((product) => {
                  if (search === "" && search2 === "" && search3 === "" && search4 === "" && search5 === "") { return product; }
                  else if (product.name.toLowerCase().includes(search.toLowerCase()) && product.category.toLowerCase().includes(search4.toLowerCase()) && product.Color.toLowerCase().includes(search5.toLowerCase()) && product.type.toLowerCase().includes(search2.toLowerCase())) {
                    if (search3 == 0) { return product; }
                    else if (product.CurrentPrice == search3) {
                      return product;
                    }

                  }

                }).sort((x, y) => {
                  if (quantityy === '1-10') { return x.CurrentPrice < y.CurrentPrice ? -1 : 1 }
                  else if (quantityy === '10-1') { return x.CurrentPrice > y.CurrentPrice ? -1 : 1 }
                  else if (quantityy === 'rate') { return x.stars > y.stars ? -1 : 1 }
                  else if (quantityy === 'a-z') { return x.name < y.name ? -1 : 1 }
                  else if (quantityy === 'z-a') { return x.name > y.name ? -1 : 1 }

                }).map((product) => (
                  <Col lg="4" md="4" sm="12" key={product.id} >
                    <Productitem product={product} />
                  </Col>))}

              </Row>
            </div>

          </Col>
          <Col lg="3" md="3" sm="3" >




            <form className="formaa">
              <h3>Type</h3>
              <input type="radio" name="fav_language1" value="" onChange={event => { setSearch2(event.target.value) }} />
              <label><span></span> All</label>

              <br />
              <input type="radio" name="fav_language1" value="women" onChange={event => { setSearch2(event.target.value) }} />
              <label ><span></span> Women</label>
              <br />
              <input type="radio" name="fav_language1" value="boy" onChange={event => { setSearch2(event.target.value) }} />
              <label ><span></span> Men</label>
              <br />
              <hr />
              <h3>Categories</h3>
              <input type="radio" name="fav_language1" value="" onChange={event => { setSearch4(event.target.value) }} />
              <label><span></span> All</label>

              <br />
              <input type="radio" name="fav_language1" value="Bag" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Bag</label>
              <br />
              <input type="radio" name="fav_language1" value="Shoes" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Shoes</label>
              <br />
              <input type="radio" name="fav_language1" value="Jacket" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Jacket</label>
              <br />
              <input type="radio" name="fav_language1" value="dress" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> dress</label>
              <br />
              <input type="radio" name="fav_language1" value="skirt" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> skirt</label>
              <br />
              <input type="radio" name="fav_language1" value="blouse" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> blouse</label>
              <br />
              <input type="radio" name="fav_language1" value="trousers" onChange={event => { setSearch4(event.target.value) }} />
              <label ><span></span> Trousers</label>
              <hr />
              <h3>Price</h3>

              <input type="range" className="rangeee" id="range" name="range" max="600" min="0" onChange={event => { setSearch3(event.target.value) }} /><br />
              <div className="dflexyyy"> <output name="textrange" id="textrange" for="range" >$ {search3} </output> </div>

              <hr />
              <h3>Color</h3>
              <input type="radio" className="allwhite" name="color" value="" onChange={event => { setSearch5(event.target.value) }} />
              <label><span></span> </label>

              <input type="radio" className="blue" name="color" value="blue" onChange={event => { setSearch5(event.target.value) }} />
              <label><span></span> </label>
              <input type="radio" className="gray" name="color" value="gray" onChange={event => { setSearch5(event.target.value) }} />
              <label ><span></span> </label>
              <input type="radio" className="pink" name="color" value="pink" onChange={event => { setSearch5(event.target.value) }} />
              <label ><span></span> </label>
              <input type="radio" className="purple" name="color" value="purple" onChange={event => { setSearch5(event.target.value) }} />
              <label ><span></span> </label>
              <input type="radio" className="yellow" name="color" value="yellow" onChange={event => { setSearch5(event.target.value) }} />
              <label ><span></span> </label>
              <hr />
              <div className="d-flex">
                <input type="text" className="searchhhh" placeholder='Search' onChange={event => { setSearch(event.target.value) }} />
                <AiOutlineSearch className="searchhhhicon" />
              </div>
              <hr />
              <Slider {...settings} className="slidermainproducts">
                <div>
                  <div >
                    <Link className="d-flex" to="/Productss/1" >



                      <div className="dflexall">
                        <img src="/images/5576660812_2_4sd_3-367x497_1024x1024@2x.jpg" alt="" />
                        <button className="dflexallbutton"><FaSearchPlus /></button>
                      </div>
                      <div>
                        <p>Fitted Printed Dress</p>
                        <h3>$145.00</h3>
                      </div>


                    </Link>

                  </div>
                  <div  >
                    <Link className="d-flex" to="/Productss/8" >

                      <div className="dflexall">
                        <img src="/images/minimalist-img-10_1024x1024@2x.jpg" alt="" />
                        <button className="dflexallbutton"><FaSearchPlus /></button>
                      </div>
                      <div>
                        <p>Drop-shoulder coat</p>
                        <h3>$306.00</h3>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link className="d-flex" to="/Productss/13" >

                      <div className="dflexall">
                        <img src="/images/minimalist-img-15_1024x1024@2x.jpg" alt="" />
                        <button className="dflexallbutton"><FaSearchPlus /></button>
                      </div>
                      <div>
                        <p>zebra midi skirt</p>
                        <h3>516.00</h3>
                      </div>
                    </Link>
                  </div>

                </div>
                <div>
                  <div  >
                    <Link className="d-flex" to="/Productss/3" >

                      <div className="dflexall">
                        <img src="/images/5814619742_2_4_1-367x497_1024x1024@2x.jpg" alt="" />
                        <button className="dflexallbutton"><FaSearchPlus /></button>
                      </div>
                      <div>
                        <p>Pleated Shirt Dress</p>
                        <h3>$144.00</h3>
                      </div>
                    </Link>
                  </div>
                  <div  >
                    <Link className="d-flex" to="/Productss/10" >

                      <div className="dflexall">
                        <img src="/images/minimalist-img-8_1024x1024@2x.jpg" alt="" />
                        <button className="dflexallbutton"><FaSearchPlus /></button>
                      </div>
                      <div>
                        <p>Floral midi skirt</p>
                        <h3>$106.00</h3>
                      </div>
                    </Link>
                  </div>

                </div>

              </Slider>
            </form>
          </Col>
        </Row>











      </Container>
      <Footer />
    </div>
  )
}

export default Productss
