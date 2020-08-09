import React, { Component } from "react";
// import {Route, NavLink, Switch} from "react-router-dom"
// 
import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                activeClassName= "my-active"
                activeStyle = {{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
                exact 
                to="/posts">Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" component={NewPost} />
          {/* rn, if we go to '/' except the navbar, we cant see anything. But we want all the posts should be visible */}
          {/* 1.way */}
          {/* <Route path="/" component={Posts} /> */}

          {/* 2.using Redirect component : its has 2 fields
            from: url of user
            to: where we want user to go
            if we are using redirct in Switch componenent, we can use 'from' property. but if Redirect called outside of Switch component, then only 'to' property will be used.
           */}
          <Redirect from="/" to="/posts" />
          {/* and automatically, '/' path will be converted into '/posts' */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
