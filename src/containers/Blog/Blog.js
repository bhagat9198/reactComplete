import React, { Component } from "react";
// import {Route} from "react-router-dom"
// so that our page doesnt get reload, we will not use normal anchor tags of html, instaed we will use 'link' component from 'react-router-dom'
import {Route, Link} from "react-router-dom"

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
              {/* <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li> */}

              <li><Link to="/">Home</Link></li>
              {/* instead to just passing the address ie string, 'to' property can accept the dynmaic object also  */}
              <li><Link to={{
                // pathname: url
                pathname: '/new-post',
                // hash: it allows us to jump at particular place on the webpage. EG:in our case it will jump to element where element have id="submit". 
                hash: '#submit',
                // sending query parameters
                search: '?quick-submit=true'
              }}>New Post</Link></li>
              {/* thus, like this we can configure our route and when clicking on these links, our page will be re-rendered without reloading.*/}
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
