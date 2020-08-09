import React, { Component } from "react";
import {Route, NavLink} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// importing 
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    // console.log(this.props);
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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        {/* creating the route. nOTE: this route is below the new post */}
        {/* this route should be dynamic ie should able to get dynaminc routing parameter.
        As the post are different and they have differnt id's.  */}
        {/* <Route path="/:id" component={FullPost} />
        <Route path="/:id" component={FullPost} />
        <Route path="/:id" component={FullPost} /> */}
        {/* we cant hardcod ethe id like that as ids can change or something else. */}
        {/* to pass the dynamic parameter, put colon(:) followed by any varaiable name */}
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
