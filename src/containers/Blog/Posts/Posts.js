import React, {Component} from 'react';
import axios from '../../../axios';
import {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    post: []
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
      console.log(error);
    });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({
      pathname: this.props.match.url + '/'+ id
    });
  }

  render() {
    let posts = this.state.post.map((post) => {
      return (
        <Post 
          key={post.id}
          title={post.title} 
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)} />
      );
    });
    return(
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;