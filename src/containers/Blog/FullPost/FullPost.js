import React, { Component } from "react";
import axios from 'axios';

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  }
  // so, rn we are always getting "Please select a Post!", which means props are not getting the id. and thats correct because "this.props.id" is null as we are doing multipage application and no props are passed to FullPost.
  // hence, we will extract the id from url. As this route is directly called by Router, hence we will get get extra info in porps.

  // changing "componentDidUpdate" to "componentDidMount()" as now  no longer component is getting updated but is getting removed or added to dom. hence componentDidMount() 
  // componentDidUpdate() {
  componentDidMount() {
    console.log(this.props);
    // here we can see teh extra info. in props => match => params => id: value
    // and 'id' is present in pramas object because thats what we are passing in url.hence
    // if(this.props.id) {
    // console.log(this.props.match.params.id);
    if(this.props.match.params.id) {
      if(!this.state.loadedPost ||
      // changing
      (this.props.match.params.id !== this.state.loadedPost.id)) {
        // changing
        axios.get('/posts/'+ this.props.match.params.id)
        .then(response => {
          console.log(response.data);
          this.setState({loadedPost: response.data})
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/'+ this.props.id)
    .then(response => {
      console.log(response);
    });
  }
  
  
  render() {
    let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;

    // changing
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
