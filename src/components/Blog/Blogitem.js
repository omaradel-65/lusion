import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class Blogitem extends Component {
  constructor(props) {
    super(props);
    this.state = {

      blog: {},
    }
  }

  render() {

    const blog = this.props.blog;

    return (
      <Link to={"/Blog/" + blog.id} className="lllink" >

        <div className="blogitemmm wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">

          <div>
            <img src={blog.img} alt="" className="img1item" />
          </div>
          <div>

            <h3>{blog.name}</h3>

            <p>{blog.description}</p>
            <button>Read more</button>
          </div>

        </div>
      </Link>

    )
  }
}


export default Blogitem



