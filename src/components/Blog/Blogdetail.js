import React, { Component } from 'react'
import { getById } from "./blogs";
import Footer from "../Footer";
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

class Blogdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
  
      blog: {},

    };
 
  
    };



  componentDidMount() {
    const id = this.props.match.params.id;


    getById(parseInt(id))
      .then(blog => {
        this.setState({
          blog
        });
      })

  }




  render() {
    const blog = this.state.blog;

    return (
      <div >
    <Container className="SHOPALLL">
        <Row>



<Col lg="3" md="3" sm="3" className="blogfilter ">

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
              <div onClick={()=>window.location.href="/Blog/1" } className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-1_01784b07-d7a5-4e5e-afd3-16dd94d47082.jpg" alt="" />

                </div>
                <div>

                  <h3>Embellished in sequins and lace</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>
              </div>
              <div onClick={()=>window.location.href="/Blog/2" }   className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-3-2.jpg" alt="" />

                </div>
                <div>

                  <h3>12 Standout Trends That Ruled the Spring 2020 Run</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>
              </div>
              <div  onClick={()=>window.location.href="/Blog/3" }  className="lllink" >

              <div className="divforthird">

                <div >


                  <img src="/images/blog-home-2_bdcd61be-cfe8-4eee-9bd3-667fa00b825a (1).jpg" alt="" />

                </div>
                <div>

                  <h3>The New Essentials to Always Have On Hand T</h3>

                  <p>NOVEMBER 23, 2020</p>
                </div>

              </div>

              </div>


            </div>
            <div className="fourthblog">
              <form>
              <h3>SUBSCRIBE TO MY NEWSLETTER</h3>

                <input type="email" placeholder="Your email address" />
                <input type="submit" value="SUBSCRIBE" />
              </form>
            </div>
          </Col>
          <Col lg="9" md="9" sm="9" className="bllogsdetail">
          <img src={blog.img} alt="" />

            {blog.img2? ( <img src={blog.img2} alt="" />):null    }
            <p>{blog.descriptionAll}</p>

            {blog.img3? (
            <div className="d-flex">
              <div>
 <img src={blog.img3} alt="" />
 <p>Putate risus vel est porttitor</p>
</div>
<div>
 <img src={blog.img4} alt="" />
 <p>Nullam vulputate risus vel est</p>
</div>
            </div>
            
            
            ):null    }

            <img src="/images/a07c4489811283_480x480.jpg" alt="" />



            <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.<br />
Until the Digital Age, typography was a specialized occupation. Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</p>

<p>Nullam vulputate risus vel est porttitor eu malesuada neque pulvinar. Nulla sit amet ante velit, vehicula aliquam enim. Etiam eget elit est, in imperdiet massa. Nam vel sapien ac elit ultrices commodo. Duis tellus ligula, aliquam sed euismod id, rhoncus ac lectus. Cras non dui est. Fusce iaculis viverra mauris eget rhoncus. Sed leo leo, ullamcorper ac dictum eget, semper sed elit. Ut nec semper odio. Fusce in turpis lacinia dui venenatis semper. In volutpat mauris non nibh sodales ultrices. Proin semper mattis venenatis..</p>






          </Col>

          </Row>
          </Container>
          <Footer />
      </div>
    )
  }
}

export default Blogdetail


