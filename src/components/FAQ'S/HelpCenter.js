import React, { Component } from 'react'

export class HelpCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mount: false,
            mount1: false,
            mount2: false,
            mount3: false,
            mount4: false,
            mount5: false,
            mount6: false,
            mount7: false,
            mount8: false,


        }
    }
    mountcounter = () => this.setState({ mount: true })
    unmountcounter = () => this.setState({ mount: false })
    mountcounter1 = () => this.setState({ mount1: true })
    unmountcounter1 = () => this.setState({ mount1: false })
    mountcounter2 = () => this.setState({ mount2: true })
    unmountcounter2 = () => this.setState({ mount2: false })
    mountcounter3 = () => this.setState({ mount3: true })
    unmountcounter3 = () => this.setState({ mount3: false })
    mountcounter4 = () => this.setState({ mount4: true })
    unmountcounter4 = () => this.setState({ mount4: false })
    mountcounter5 = () => this.setState({ mount5: true })
    unmountcounter5 = () => this.setState({ mount5: false })
    mountcounter6 = () => this.setState({ mount6: true })
    unmountcounter6 = () => this.setState({ mount6: false })
    mountcounter7 = () => this.setState({ mount7: true })
    unmountcounter7 = () => this.setState({ mount7: false })
    mountcounter8 = () => this.setState({ mount8: true })
    unmountcounter8 = () => this.setState({ mount8: false })
    render() {
        return (
            <div className="helpp">
                {this.state.mount ?

                    (<div>
                        <div className="detailsoff" onClick={this.unmountcounter}>
                            <p >Has Coronavirus affected Lusion Shop's Service?</p>
                            <button >-</button>

                        </div>

                        <p>
                            We are taking orders as normal, and are no longer limiting the maximum quantity of each product to 6 in the UK as we have the majority of our core range in stock. Our courier partners’ ability to deliver remains largely unaffected, although there are surcharges to some destinations that will be shown on checkout if they apply. We are currently experiencing high demand, and are running at 1-2 working days for your order to be dispatched.. 70% of our core range is in stock and available, and we are receiving more supplies daily. We have paused our Chilled/Fresh service until further notice. You can order from our Ambient range as usual. If a product is ‘In Stock’ on the website, we have it available in our warehouse. We will keep you updated of any changes.
                        </p>
                    </div>) :
                    <div className="detailsoff" onClick={this.mountcounter}>
                        <p>Has Coronavirus affected Lusion Shop's Service?</p>
                        <button  >+</button>
                    </div>}
                {this.state.mount1 ?

                    (<div>
                        <div className="detailsoff"  onClick={this.unmountcounter1}>
                            <p>Why did I only receive part of my order?</p>
                            <button >-</button>

                        </div>

                        <p>
                            Don’t worry, it’s on its way! While we do our best to ship all orders in one package, there are times when orders will ship from multiple warehouses. If you did not receive multiple tracking numbers, please reach out to our customer service team for assistance.    </p>
                    </div>) :
                    <div className="detailsoff"  onClick={this.mountcounter1}>
                        <p>Why did I only receive part of my order?</p>
                        <button  >+</button>
                    </div>}

                {this.state.mount2 ?

                    (<div>
                        <div onClick={this.unmountcounter2}  className="detailsoff" >
                            <p>What do I do if my order is damaged?</p>
                            <button  >-</button>

                        </div>

                        <p>
                            We are so sorry to hear that your order arrived in less than pristine condition! Please let us make it right. Our customer service team will be more than happy to assist with processing a replacement order or issuing a refund. You may contact our customer service team here or through our “help” button below.    </p>
                    </div>) :
                    <div onClick={this.mountcounter2}  className="detailsoff" >
                        <p>What do I do if my order is damaged?</p>
                        <button >+</button>
                    </div>}

                {this.state.mount3 ?

                    (<div>
                        <div onClick={this.unmountcounter3}  className="detailsoff" >
                            <p>Can I exchange my order?</p>
                            <button >-</button>

                        </div>

                        <p>
                            We do not offer exchanges at this time. If you’d like to make an exchange, simply return the unused goods back to us using our returns page and make a new purchase for the item or items you want through our site.    </p>
                    </div>) :
                    <div onClick={this.mountcounter3} className="detailsoff" >
                        <p>Can I exchange my order?</p>
                        <button  >+</button>
                    </div>}

                {this.state.mount4 ?

                    (<div>
                        <div onClick={this.unmountcounter4}  className="detailsoff" >
                            <p>My discount code is not working, what do I do?</p>
                            <button >-</button>

                        </div>

                        <p>
                            We are sorry you are having trouble checking out, please note that some discount codes require users to create an account on the site and be logged in upon check out to utilize the discount code.    </p>
                    </div>) :
                    <div  onClick={this.mountcounter4}  className="detailsoff" >
                        <p>My discount code is not working, what do I do?</p>
                        <button>+</button>
                    </div>}

                {this.state.mount5 ?

                    (<div>
                        <div onClick={this.unmountcounter5} className="detailsoff" >
                            <p>Where are your products shipped from?</p>
                            <button  >-</button>

                        </div>

                        <p>
                            We ship from 7 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry.    </p>
                    </div>) :
                    <div onClick={this.mountcounter5} className="detailsoff" >
                        <p>Where are your products shipped from?</p>
                        <button  >+</button>
                    </div>}

                {this.state.mount6 ?

                    (<div>
                        <div onClick={this.unmountcounter6}  className="detailsoff" >
                            <p>Can I expedite my shipping?</p>
                            <button >-</button>

                        </div>

                        <p>
                            Yes! We offer the following expedited shipping options:
                        </p>
                        <ul>

                            Has Coronavirus affected Lusion Shop's Service?
                            Why did I only receive part of my order?
                            What do I do if my order is damaged?
                            Can I exchange my order?
                            My discount code is not working, what do I do?
                            Where are your products shipped from?
                            Can I expedite my shipping?
                            Yes! We offer the following expedited shipping options:







                            <li>Ground Shipping – UPS</li>
                            <li>3 Day Select – UPS</li>
                            <li>2nd Day Air – UPS</li>
                            <li>Next Day Air Saver – UPS</li>
                            <li>Next Day Air – UPS</li>
                            <li>Next Day Air Early AM – UPS</li>
                        </ul>
                    </div>) :
                    <div onClick={this.mountcounter6}  className="detailsoff" >
                        <p>Can I expedite my shipping?</p>
                        <button >+</button>
                    </div>}

                {this.state.mount7 ?

                    (<div>
                        <div onClick={this.unmountcounter7} className="detailsoff" >
                            <p>I received the wrong goods, what do I do?</p>
                            <button  >-</button>

                        </div>

                        <p>
                            Although we strive for perfection, we are human and sometimes the wrong items are shipped from our warehouses. We are so sorry for any inconvenience this has caused and our customer service team is here to help make things right. Please contact our customer service team via phone, email, or our contact us page, so that they can work to get you your goods as soon as possible.    </p>
                    </div>) :
                    <div onClick={this.mountcounter7}  className="detailsoff" >
                        <p>I received the wrong goods, what do I do?</p>
                        <button >+</button>
                    </div>}




            </div>
        )
    }
}

export default HelpCenter
