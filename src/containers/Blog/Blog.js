import React, { Component } from "react";
import Post from "../../components/Post/Post";

// no more using of these routes
// import FullPost from "../FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

import "./Blog.css";
import axios from '../../axios';

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
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        {/* as we want to only post should be visible on the home page ie '/', thus commenting out other sections. */}

        {/* we are routing now and each route will be having its own component. and those component will have there own state and its own sub components. thus, bring FullPost, NewPost into container/Blog folder. 'Post' is just representational componenet, hence not needed to shift  */}
        {/* creting new component 'Posts' within 'Blog' */}
        {/* now we are ready for routing */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
