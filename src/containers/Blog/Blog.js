import React, { Component } from "react";
import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  // state
  state = {
    auth: false
  };

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
          {/* <Route path="/new-post" component={NewPost} /> */}
          {/* if we want only authenticated user should able go throught NewPost. if we pass this route conditioanlly. */}
          {/* hence, craeting a state for user and  and according to state passing teh route. */}
          {/* using one line solution ie ternary operator or proper if block . using ternary */}
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}

          {/* when auth is false. after clicking on NewPost route. we will be redirected to the starting page.
          why?
          redirecting operation is taking place by Redirect comp. from="/" is taking everything which is not caught by anyother route above it and redircys to post. Hece, it is gaurd now */}

          {/* 2nd way: NewPost */}

          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    );
  }
}

export default Blog;
