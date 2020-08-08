import React, { Component } from "react";
import {Route, Link} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                // whenever we write '/pathName', it means absolute path. ie, if our website is www.example.com, then our full path will be 'www.example.com/pathName' or according to our project 'localhost:3000/new-post'. 
                // pathname: '/new-post',

                // pathname: 'new-post',
                // even if we write our url without '/', still it will be treated as 'www.example.com/new-post' and not 'www.example.com/posts/new-post' even if we were on 'www.example.com/posts'.
                // hence, it will be always treated as absolute path

                // relative path
                // if we are on ''www.example.com/posts'(current path) and want to go on ''www.example.com/posts/new-post'.
                // for that, we need to build the path dynamically and for that we can take helps of props
                // we know ".props.match.url" will gives the current path.
                // pathname: this.props.match.url + '/new-path',
                // thus, its a realtive path as it takes the page we are currently on and build the futher path on that. 

                // we will use absolute path here, as we dont have props
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
