import React, { Component } from "react";
// 
import axios from 'axios';

import "./FullPost.css";

class FullPost extends Component {
  // 
  state = {
    loadedPost: null
  }

  componentDidUpdate() {

    // should not updated if no post is selected ie 'id' is null
    // if(this.props.id) {
    //   // to send url for sepecific post "https://jsonplaceholder.typicode.com/posts/post_id"
    //   axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.id)
    //   .then(response => {
    //     // getting the data for specific post
    //     console.log(response.data);
    //     this.setState({loadedPost: response.data})
    //   });
    // }

    // thus, we have to make sure, get request should be executed only once when user clicks on new post or loadedPost is null.
    if(this.props.id) {
      // 
      if(!this.state.loadedPost || (this.props.id !== this.state.loadedPost.id)) {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.id)
        .then(response => {
          console.log(response.data);
          this.setState({loadedPost: response.data})
        });
      }
      
    }
    
  }
  
  render() {
    let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
    // if(this.props.id) {
    //   post = (
    //     <div className="FullPost">
    //       {/* making dynamic */}
    //       <h1>{this.state.loadedPost.title}</h1>
    //       <p>{this.post.loadedPost.body}</p>
    //       <div className="Edit">
    //         <button className="Delete">Delete</button>
    //       </div>
    //     </div>
    //   );
    // }
    // and we got "FullPost.js:34 Uncaught TypeError: Cannot read property 'title' of null" this is because we get the valid 'id', it not null. but "this.state.loadedPost" is null and we are trying to extract the 'title' from null. 
    // "this.state.loadedPost" is null because, axios works async and get request will take some tyme to fetch the data but the till our return statement is executed.
    // hence, to fix this . 
      // we need to check if loadedPost is null or not. 
    
    // if(this.props.id) {
    //   post = <p style={{textAlign:'center'}}>Loading...</p>;
    //   if(this.state.loadedPost) {
    //     post = (
    //       <div className="FullPost">
    //         {/* making dynamic */}
    //         <h1>{this.state.loadedPost.title}</h1>
    //         <p>{this.state.loadedPost.body}</p>
    //         <div className="Edit">
    //           <button className="Delete">Delete</button>
    //         </div>
    //       </div>
    //     );
    //   }
    // }
    // we are getting desired output, but there is one problem. in network tab we can see continously requests are being made. this is beacuse of componentDidUpdate, we are fetching the data, which causes in upadting of state and hence again and again componentDidUpdate is executing. 


    if(this.props.id) {
      post = <p style={{textAlign:'center'}}>Loading...</p>;
      if(this.state.loadedPost) {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPost.title}</h1>
            <p>{this.state.loadedPost.body}</p>
            <div className="Edit">
              <button className="Delete">Delete</button>
            </div>
          </div>
        );
      }
    } 


    return post;
  }
}

export default FullPost;
