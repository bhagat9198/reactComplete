import React, { Component } from "react";
import axios from 'axios';
// 
import { Redirect } from 'react-router-dom'

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    // 
    submitted: false
  };

  componentDidMount() {
    // console.log(this.props);
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };

    axios.post('/posts', data)
    .then(response => {
      console.log(response);

      // 11.25
      // this.setState({submitted: true});

      // 11.26
      // instaed of setting up state and then redirecting, we can make use of React Routes props
      // 1.way
      // this.props.history.push('/posts');
      // 2.way
      this.props.history.replace('/posts');

      // whats the difference between Redirect/push and replace
        // can u find it out? try going back and forth using Redirect/push/replace

      // push: its pushes the page on to teh stack of pages. so if we click on back button, we will land on 'NewPost' page 
      // Redirect: it replaces the current page. so if we click the back button we will not able to go back to 'NewPost' page ie last page
      // replace: it is same as Redirect
    });
  }

  render() {
    // 
    let redirect = null;
    if(this.state.submitted) {
      redirect = <Redirect to="/posts" />
    } 

    return (
      <div className="NewPost">
        {/* using Redirect. as we are not within Switch componenet, we vant use 'from' property */}
        {/* <Redirect to="/posts" /> */}
        {/* now, even before submitting the post, we are redirect to /posts. thus, we have to conditionally check and pass the Rediect componenet.
        for that, creating a state property, changing it value when submit button is pressed and conditionally passing Redirect component which will redirect us as soon as it is passed. 
         */}
        
        { redirect }

        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
