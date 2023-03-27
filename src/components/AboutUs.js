import React, { Component } from 'react'
import { GiPartyPopper } from "react-icons/gi";
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import Slider from "react-slick";
import Footer from "./Footer"
export class AboutUs extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <section className="aboutsec1">
                    <Container>
                        <Row >
                            <Col lg="6" md="6" sm="12">
                                <img src="images/bg-about05.png" alt="" />


                            </Col>
                            <Col lg="6" md="6" sm="12">
                                <div className="div1about">
                                    <h3>09</h3>
                                    <div>
                                        <GiPartyPopper />
                                        <p>
                                            YEARS <br /> EXPERIENCE WORKING
                                        </p>
                                    </div>


                                </div>
                                <h3>
                                    Lusion providing rare & beautiful items sourced both locally & globally

                                </h3>
                                <p>
                                    We have worked hand-in-hand with a large scale of customers all over the world accomplishing a wide range of industries and services for 10+ years. Each of our work represents our dedication to the quality.

                                </p>
                                <p>
                                    Please browse through our case studies to see the difference we can bring to your business.


                                </p>
                                <p>
                                    Our comprehensive experience is the key to give our Clients best services.


                                </p>
                                <button>
                                    Contact Us
                                </button>

                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className="aboutsec2">
                    <Container>
                        <h3>
                            Responsible and sustainable development
                        </h3>
                        <Row className="justify-content-between">
                            <Col lg="4" md="4" sm="12" className="divmainsec2">
                                <div>
                                    <div className="divsec2222">
                                        <img src="images/noun_Vision_995437.png" alt="" />
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>- Good Service</p>
                                    <p>- For Community</p>
                                    <p>- Long Term Development</p>
                                    <p>- Save Our Planet</p>
                                    <p>- Help People</p>
                                </div>


                            </Col>
                            <Col lg="4" md="4" sm="12" className="divmainsec2">
                                <div>
                                    <div className="divsec2222">
                                        <img src="images/noun_goal_2805632.png" alt="" />
                                    </div>
                                    <h3>Our Mision</h3>
                                    <p>-  Change The Habits</p>
                                    <p>- Best Quality</p>
                                    <p>- Think Big Do Bigger</p>
                                    <p>- Stability & competence</p>
                                    <p>- Safer & Better Life</p>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12" className="divmainsec2">
                                <div>
                                    <div className="divsec2222">
                                        <img src="images/noun_Pinky Promise_4103302.png" alt="" />
                                    </div>
                                    <h3>Our Promise</h3>
                                    <p>- Sustainable Relationship</p>
                                    <p>- Renew Commitment</p>
                                    <p>- Provide The Best Solution</p>
                                    <p>- Profitable Relationship</p>
                                    <p>- Adapt With People's Needs</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="aboutsec3">
                    <Container>
                        <Row >
                            <Col lg="2" md="2" sm="12">
                                <img src="images/noun_Art_2035634.png" alt="" />
                                <p>Design</p>
                            </Col>
                            <Col lg="2" md="2" sm="12">
                                <img src="images/noun_Sewing Machine_4266660.png" alt="" />
                                <p>Technology</p>
                            </Col>
                            <Col lg="2" md="2" sm="12">
                                <img src="images/noun_Delivery Bike_1367906.png" alt="" />

                                <p>Shipping</p>

                            </Col>
                            <Col lg="2" md="2" sm="12">
                                <img src="images/noun_Problem Solving_3239817.png" alt="" />

                                <p>Problem solving</p>

                            </Col>
                            <Col lg="2" md="2" sm="12">
                                <img src="images/noun_Policies_3146996.png" alt="" />

                                <p>Policy</p>

                            </Col>
                            <Col lg="2" md="2" sm="12" className="mmmm">
                                <img src="images/noun_User_292100.png" alt="" />

                                <p>Integration</p>

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="aboutsec4">
                    <Container>
                        <Row >
                            <Col lg="3" md="3" sm="12">
                                <div className="sec4divabout">
                                    <img src="images/team1-1.jpg" alt="" />

                                </div>
                                <div className="sec4div2about">
                                    <div>
                                        <h3>Christina</h3>
                                        <p>Head of design</p>
                                    </div>
                                    <div className="parenticon">
                                        <div className="ppppp"><p>+</p></div>
                                        <div className="piconsss">

                                            <FaFacebookF />
                                            <AiOutlineTwitter />
                                            <GrPinterest />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="12">
                                <div className="sec4divabout">
                                    <img src="images/team1.jpg" alt="" />

                                </div>
                                <div className="sec4div2about">
                                    <div>
                                        <h3>Christina</h3>
                                        <p>Head of design</p>
                                    </div>
                                    <div className="parenticon">
                                        <div className="ppppp"><p>+</p></div>
                                        <div className="piconsss">

                                            <FaFacebookF />
                                            <AiOutlineTwitter />
                                            <GrPinterest />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="12">
                                <div className="sec4divabout">
                                    <img src="images/team2.jpg" alt="" />

                                </div>
                                <div className="sec4div2about">
                                    <div>
                                        <h3>Christina</h3>
                                        <p>Head of design</p>
                                    </div>
                                    <div className="parenticon">
                                        <div className="ppppp"><p>+</p></div>
                                        <div className="piconsss">

                                            <FaFacebookF />
                                            <AiOutlineTwitter />
                                            <GrPinterest />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="12">
                                <div className="sec4divabout">
                                    <img src="images/team3.jpg" alt="" />

                                </div>
                                <div className="sec4div2about">
                                    <div>
                                        <h3>Christina</h3>
                                        <p>Head of design</p>
                                    </div>
                                    <div className="parenticon">
                                        <div className="ppppp"><p>+</p></div>
                                        <div className="piconsss">

                                            <FaFacebookF />
                                            <AiOutlineTwitter />
                                            <GrPinterest />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                </section>
                <section className="aboutsec5">
                    <Slider {...settings} className="sliderabout">
                        <div>
                            <div className="divsliderr">
                            <img src="images/avatar-tes2.jpg" alt="" />
                            <p>
                                "Thank you again for your hospitality! The philosophy you shared led to a great clothing decision."
                            </p>
                            <h5><span>Christina</span> / Head of design</h5>
                            </div>

                        </div>
                        <div>
                        <div className="divsliderr">
                            <img src="images/avatar-tes3.jpg" alt="" />

                            <p>
                                “We love our new duds and continue to be grateful for your efforts on behalf of our planet.”
                            </p>
                            <h5><span>Mary Jane</span> / Head of design</h5>
                            </div>
                        </div>
                        <div>
                        <div className="divsliderr">
                            <img src="images/avatar-tes.jpg" alt="" />

                            <p>
                                "Thank you for your gracious hospitality hosting the W.H.A.T. Group!  The tops I bought are beautiful!"
                            </p>
                            <h5><span>Bonnie</span> / Head of design</h5>
                            </div>

                        </div>
                        <div>
                        <div className="divsliderr">
                            <img src="images/azamat-zhanisov.jpg" alt="" />
                            <p>
                                "Thank you again for your hospitality! The philosophy you shared led to a great clothing decision."
                            </p>
                            <h5><span>Christina</span> / Head of design</h5>
                            </div>
                        </div>

                    </Slider>
                </section>
                <Footer />
            </div>
        )
    }
}

export default AboutUs
