import React, { Component } from "react";
// import {Route, NavLink} from "react-router-dom"

// importing Switch
import {Route, NavLink, Switch} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

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
                to="/">Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* when switching to NewPost, we can see FullPost component is alsi getting displayed below it. this is bec React Router will try to math all teh paths and displayed the content of all teh matching routes.
        hence, now we need to control it.
        1.way: changing the '/:id' => '/posts/:id' and in Posts Link component, so that both the paths are different. 
          <Route path="posts/:id" component={FullPost} />
        */}
        {/* <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/posts/:id" component={FullPost} /> */}


        {/* 2.way: import Switch from react-router-dom. 'Switch' componenet, it helps in loading only one route(1st match) even if other routes are matching. 
        */}
        {/* <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/:id" component={FullPost} /> 
        </Switch> */}


        {/* if we want any route to be checked everytime, we can put is outside of switch.  */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} /> 
        </Switch>
      </div>
    );
  }
}

export default Blog;
