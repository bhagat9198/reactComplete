import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
  state = {
    post: [],
    selectedPostId: null,
    // 
    error: false
  };

  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    // passing the wrong url
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ post: updatedPosts });
    })
    // catch block to handle errors(any kind of error)
    .catch(error => {
      // console.log(error);
      // updating the state
      this.setState({error: true});
    });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id}); 
  }

  render() {
    // if error = true
    let posts = <p style={{textAlign:'center', color:'red'}}>Something went wrong! </p>

    // if state = flase
    if(!this.state.error) {
      posts = this.state.post.map((el) => {
        return (
          <Post 
            key={el.id} 
            title={el.title} 
            author={el.author}
            clicked={() => this.postSelectedHandler(el.id)} />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
