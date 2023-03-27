import React, { useState } from 'react';
import blogs from "./blogs.json";
import Blogitem from "./Blogitem";
import { Col, Container, Row } from "reactstrap";
import Footer from "../Footer";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
function Blog() {
  const [search, setSearch] = useState('');


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
    <div className="bloggg">
      <Slider {...settings} >
        <div className="positionslider">
          <img src="images/blog-100.jpg" alt="" />
          <div className="positiondiv">
            <h5>lifestyle</h5>
            <p>Cruising California’s Golden Coast</p>
            <a>Read More</a>
          </div>

        </div>
        <div className="positionslider">
          <img src="images/autumn-woman-EHKK4J9-1.jpg" alt="" />

          <div className="positiondiv">
            <h5>lifestyle</h5>

            <p>Cruising New York’s Golden Coast</p>
            <a>Read More</a>

          </div>
        </div>
      </Slider>

      <Container className="SHOPALLL">
        <Row>



          <Col lg="9" md="9" sm="9" >

            <div>


              {blogs.filter((blog) => {
                if (search === "") { return blog; }
                else if (blog.name.toLowerCase().includes(search.toLowerCase())) {
                  return blog;
                }
              }).map((blog) => (
                <div key={blog.id} >
                  <Blogitem blog={blog} />
                </div>))}

            </div>

          </Col>
          <Col lg="3" md="3" sm="3" className="blogfilter wow slideInRight" data-wow-duration="2s" data-wow-delay="0.2s">
          <div className="d-flex p-4">
              <input type="text" className="searchhhh" placeholder='Search' onChange={event => { setSearch(event.target.value) }} />
            <AiOutlineSearch className="searchhhhicon" />
            </div>
            <div className="seconddivblog">
              <img src="images/azamat-zhanisov (1).jpg" alt="" />
              <div>
              <h3>MARIGOLD ROSE</h3>
              <p>Photographer & Blogger</p>
              <p>It is a long established fact that a reader will be distracted</p>
              <img src="images/logo-sidebar_480x480.png" alt="" />
              </div>
            </div>
            <div className="thirddivblog">
              <h3 className="thirddivh3">RECENT POST</h3>
              <Link to={"/Blog/" + 1} className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-1_01784b07-d7a5-4e5e-afd3-16dd94d47082.jpg" alt="" />

                </div>
                <div>

                  <h3>Embellished in sequins and lace</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>
              </Link>
              <Link to={"/Blog/" + 2} className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-3-2.jpg" alt="" />

                </div>
                <div>

                  <h3>12 Standout Trends That Ruled the Spring 2020 Run</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>
              </Link>
              <Link to={"/Blog/" + 3} className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-2_bdcd61be-cfe8-4eee-9bd3-667fa00b825a (1).jpg" alt="" />

                </div>
                <div>

                  <h3>The New Essentials to Always Have On Hand T</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>

              </Link>


            </div>
            <div className="fourthblog">
              <form>
              <h3>SUBSCRIBE TO MY NEWSLETTER</h3>

                <input type="email" placeholder="Your email address" />
                <input type="submit" value="SUBSCRIBE" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Blog
