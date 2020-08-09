import React, {Component} from 'react';

// import {Link} from 'react-router-dom'

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';


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
    // this.setState({selectedPostId: id}); 
    
    // in props info, we have history object.we can make use of that and can use differnt functions such as 'goBack' or 'goForward'.
    // console.log(this.props);

    // we will push method of history object
    // this.props.history.push('/' + id);
    // we can evenpass the object to it as we have done in NavLink
    this.props.history.push({
      pathname: '/' + id
    });

  }

  render() {
    let posts = this.state.post.map((post) => {
      return (
        // 1.way
        // <Link to={'/posts/' + post.id} key={post.id} > 
        // <Link to={'/' + post.id} key={post.id} > 
        //   <Post 
        //     title={post.title} 
        //     author={post.author}
        //     clicked={() => this.postSelectedHandler(post.id)} />
        // </Link>



        // 11.20
        // here we are using Link to to render the differnt component. now we will do programtically. removing Link and puting key back to post as it will be top most component
        // <Link to={'/' + post.id} key={post.id} > 
          <Post 
            // adding key
            key={post.id}
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        // </Link>
      );
    });
    return (<section className="Posts">{posts}</section>);
  }
}

export default Posts;