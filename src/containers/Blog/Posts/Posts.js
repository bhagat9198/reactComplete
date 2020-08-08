import React, {Component} from 'react';
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
    this.setState({selectedPostId: id}); 
  }

  render() {
    let posts = this.state.post.map((el) => {
      return (
        <Post 
          key={el.id} 
          title={el.title} 
          author={el.author}
          clicked={() => this.postSelectedHandler(el.id)} />
      );
    });

    return (<section className="Posts">{posts}</section>);
  }
}

export default Posts;