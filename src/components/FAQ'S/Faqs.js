import React, { useState } from 'react'
import ContactUs from "./ContactUs"
import HelpCenter from "./HelpCenter"
import ReturnPolicy from "./ReturnPolicy"
import ShippingInformation from "./ShippingInformation"
import Terms from "./Terms"
import Footer from "../Footer"

import { Col, Container, Row } from "reactstrap";

function Faqs() {
    const [active, setActive] = useState("First");

    return (
        <div>
            <Container className="faqsss">
                <h3 className="fff">Frequently Asked Questions</h3>
                <Row>
                    <Col lg="3" md="3" sm="3" className="faqs" >
                        <div className="faqsname">
                        <h5 onClick={() => setActive("First")}>Help Center</h5>
                        <h5 onClick={() => setActive("Second")}>Shipping Information</h5>
                        <h5 onClick={() => setActive("Third")}>Return Policy</h5>
                        <h5 onClick={() => setActive("fourth")}>Terms And Conditions</h5>
                        <h5 onClick={() => setActive("fifth")}>Contact Us</h5>
                        </div>
                    </Col>
                    <Col lg="9" md="9" sm="9" >
                        <div>{active === "First" && <HelpCenter />}</div>
                        <div>{active === "Second" && <ShippingInformation />}</div>
                        <div>{active === "Third" && <ReturnPolicy />}</div>
                        <div>{active === "fourth" && <Terms />}</div>
                        <div>{active === "fifth" && <ContactUs />}</div>
                    </Col>
                </Row>
            </Container>


            <Footer />
        </div>
    )
}

export default Faqs
