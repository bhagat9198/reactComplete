import React, { Component } from "react";
import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />

          {/* commenting out redirect, as it will catch all the routes which are unkown from '/'. if redirect was from '/post' or anyother route other than root route, no need to comment */}
          {/* <Redirect from="/" to="/posts" /> */}

          {/* if we dont mention any route, then it will execute all the routes witch will come to it. */}
          {/* <Route component={Posts} /> */}

          {/* or, we can simply render jsx */}
          <Route render = {() => <h1 style={{textAlign: 'center'}}>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
