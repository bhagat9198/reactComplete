import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
  // creating the state
  state = {
    post: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response);

      // updating the state once the fetching the data from server is done
      this.setState({post: response.data})
    });
  }

  render() {
    // creating post array which will have dynamic post and it will be passed dynamically
    const posts = this.state.post.map(el => {
      console.log(el);
      return (
        <Post 
          key={el.id}
          title={el.title} />
      ) 
    });
    
    
    return (
      <div>
        <section className="Posts">

          {/* <Post />
          <Post />
          <Post /> */}
          {/* passing post array */}
          {posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
