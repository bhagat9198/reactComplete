import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response);

      // now we are geeting soo many posts which we dont want.
      // 1. we can pass to some query paramerters to backend to limit the data
      // 2. or we can transform the data here

      // only extracting the first 4 posts out of all the posts
      const posts = response.data.slice(0, 4);
      // these fetched posts, doesnt have author field attached. hence hardcoding it
      const updatedPosts = posts.map((post) => {
        return {
          // spraeding
          ...post,
          // adding extra field
          author: "Max",
        };
      });
      // this.setState({ post: response.data });
      this.setState({ post: updatedPosts });
    });
  }

  render() {
    const posts = this.state.post.map((el) => {
      // console.log(el);
      return (
        <Post 
          key={el.id} 
          title={el.title} 
          // 
          author={el.author} />);
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
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
