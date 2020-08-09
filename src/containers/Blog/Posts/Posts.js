import React, {Component} from 'react';
// 
import {Link} from 'react-router-dom'

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';


class Posts extends Component {
  state = {
    post: []
  };
  
  componentDidMount() {
    // console.log(this.props);

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
    this.setState({selectedPostId: id}); 
  }

  render() {
    // replacing 'el' with 'post' within map method
    let posts = this.state.post.map((post) => {
      return (
        // wrapping this Post Component into a Link component.
        // now we will get key error, as Link is outer most component and it should have key value
        <Link to={'/' + post.id} key={post.id} > 
          <Post 
            // key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        </Link>
      );
      // now url is changing dynamicalliy, although we are getting wrong output ie UI.
    });

    return (<section className="Posts">{posts}</section>);
  }
}

export default Posts;