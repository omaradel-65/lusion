import React, { Component } from 'react'

export class ContactUs extends Component {

    render() {

        return (
            <div>

                <form className="formmmmnn">
                    <h3>Send us a message</h3>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                    <input type="text" placeholder="Content" />
                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </div>
        )
    }
}

export default ContactUs
