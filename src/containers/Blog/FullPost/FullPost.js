import React, { Component } from "react";
import axios from 'axios';

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  // there is one glinch that is after loding one FullPost, afterwards if we try to load another FullPost, it doesnt get loaded although url gets changed. this is beacuse for the first tym FullPOst get mounted afterwards its getting updated and for update we are not having any function.  


  componentDidMount() {
    // console.log(this.props);
    // 
    this.loadedData();
  }

  // 
  componentDidUpdate() {
    this.loadedData();
  }

  // creating common function
  loadedData() {
    if(this.props.match.params.id) {
      if(!this.state.loadedPost ||(this.props.match.params.id !== this.state.loadedPost.id)) {
        axios.get('/posts/'+ this.props.match.params.id)
        .then(response => {
          // console.log(response.data);
          this.setState({loadedPost: response.data})
        });
      }
    }
  }

  deletePostHandler = () => {
    // 
    axios.delete('/posts/'+ this.props.match.params.id)
    .then(response => {
      console.log(response);
    });
  }
  
  
  render() {
    let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;

    if(this.props.match.params.id) {
      post = <p style={{textAlign:'center'}}>Loading...</p>;
      if(this.state.loadedPost) {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button 
                onClick={this.deletePostHandler}
                className="Delete">Delete</button>
            </div>
          </div>
        );
      }
    } 
    return post;
  }
}

export default FullPost;
