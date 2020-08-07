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
    error: false
  };

  componentDidMount() {
    axios.get("/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ post: updatedPosts });
    })
    .catch(error => {
      this.setState({error: true});
    });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id}); 
  }

  render() {
    let posts = <p style={{textAlign:'center', color:'red'}}>Something went wrong! </p>

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
