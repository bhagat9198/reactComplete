import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
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
    // instaed of showing everything on one page, we will add a navbar so that user can switch between pages.

    // thus, rn if we click on any of the link, it will give us the same index page. this is because of the way how our production/devlopment server is set up. it always return one page.  
    return (
      <div className="Blog">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new-post">New Post</a></li>
            {/* and seprate route to display Full Post when user clicks on any post */}
          </ul>
        </nav>
      </header>
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
