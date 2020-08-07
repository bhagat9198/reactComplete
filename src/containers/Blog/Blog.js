import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
  state = {
    post: [],
    // 
    selectedPostId: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ post: updatedPosts });
    });
  }


  // adding click listner for post
  postSelectedHandler = (id) => {
    // updating the id in the state
    this.setState({selectedPostId: id}); 
  }


  render() {
    const posts = this.state.post.map((el) => {
      // console.log(el);
      return (
        <Post 
          key={el.id} 
          title={el.title} 
          author={el.author}
          // click handler
          // clicked={this.postSelectedHandler} />);
          // passing the id arg, so that we can get to know which post is to select
          clicked={() => this.postSelectedHandler(el.id)} />);
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          {/* and selected post id should be passed here, so that full post can be seen.hence, one propperty should be created in a state */}
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
