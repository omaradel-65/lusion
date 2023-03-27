import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc"
import Footer from "./Footer"
export class ContactUs extends Component {
    render() {
        return (
            <div>

                    <Row className="align-items-center">



                        <Col lg="5" md="5" sm="5"  className="sec1contact">
                            <h3>Contact Info</h3>
                            <div className="d-flex m-2">
                                <div className="iconcontact"><FiPhoneCall /></div>
                                <div>
                                    <h5>Phone:</h5>
                                    <p>+98 0 9876 0954 / +98 0 9876 0955</p>
                                </div>

                            </div>
                            <div className="d-flex m-2">
                                <div className="iconcontact"><AiOutlineMail /></div>
                                <div>
                                    <h5>Email:</h5>
                                    <p>omarsilva@gmail.com / Fax@arrowhitech.com</p>

                                </div>

                            </div>
                            <div className="d-flex m-2">
                                <div className="iconcontact"><VscLocation /></div>
                                <div>
                                    <h5>Address:</h5>
                                    <p>Box 565, Charlestown, Nevis, West Indies, Caribbean</p>

                                </div>

                            </div>


                        </Col>
                        <Col lg="7" md="7" sm="7" className="paddd">
                            <img className="imgycontact" src="images/contact-us-v4.jpg" alt="" />
                        </Col>
                    </Row>
                
       <section className="formcontacttt">
                    <Row className="align-items-center">
                        <Col lg="9" md="9" sm="9" className="paddd">
                            <form action="" method="post" className="formmcontact ">
                               <h3>Send us a message</h3>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone" />
                            <input type="text" placeholder="Content" />
                            <input type="submit" value="SEND MESSAGE" />
                            </form>
                      
                        </Col>
                        <Col lg="3" md="3" sm="3" className="paddd">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1633651827679!5m2!1sen!2seg"  allowFullScreen="" loading="lazy"></iframe>
                        </Col>
                    </Row>
                    </section>
                <Footer />
            </div>
        )
    }
}

export default ContactUs
