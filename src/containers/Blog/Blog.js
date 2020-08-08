import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

// no loger importing axios, we will use the instance which we just created 
// import axios from "axios";

// name can be anything, as other places in this file uses 'axios'so name variable as axios
import axios from '../../axios';

// hence, our home page works. we know axios is working and not the default global functions as we did we get the log statements from interceptors
// but, we now try to post somepost or select soempost. we will get an error as those url are incomplete and baseURL is commented out.
  // uncommenting the baseURL globally
// now, this componenet uses axios instance whereas other components use global axios functions

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
