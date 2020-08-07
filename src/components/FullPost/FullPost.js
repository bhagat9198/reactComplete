import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  render() {
    // when no post is selected at that time "Please select a Post!" should be visible else post details should be visible
    
    
    let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
    // if post is selecetd, reassigning the post variable
    if(this.props.id) {
      post = (
        <div className="FullPost">
          <h1>Title</h1>
          <p>Content</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    
    return post;
  }
}

export default FullPost;
