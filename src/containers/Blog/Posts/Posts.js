import React, {Component} from 'react';
import axios from '../../../axios';
// 
import {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
// 
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
      // pathname: '/' + id
      // 2. changing path here also
      // pathname: '/posts/' + id
      // 3. dynamically changing
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
    // return (<section className="Posts">{posts}</section>);
    return(
      // 1.
      // wrapping both components in a div
      // <div>
      //   <section className="Posts">{posts}</section>
      //   <Route path="/:id" component={FullPost} />
      // </div>
      // now our single post ie FullPost componenet will be visible under all the posts.



      // 2
      // the route path which we are using is absolute . it will go to (localhost:3000/1) but now as our root path is changed we have to make it relavtive and it should be something like this (localhost:3000/posts/1)
      <div>
        <section className="Posts">{posts}</section>
        {/* <Route path="/:id" component={FullPost} /> */}

        {/* either we can statically change this path */}
        {/* <Route path="/posts/:id" component={FullPost} /> */}
        {/* or we setup the dynamic realtive path */}
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;