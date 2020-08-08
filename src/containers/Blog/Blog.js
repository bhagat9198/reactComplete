import React, { Component } from "react";
// react-router-dom: as it helping in rendering. importing 'Route' object or we can say Route component.
import {Route} from "react-router-dom"

import "./Blog.css";
import Posts from './Posts/Posts';

class Blog extends Component {
  

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        {/* not showing Posts anymore bydefault */}
        {/* < Posts /> */}

        {/* it take couple of parameters and props names are fixed, has to written in same way as they are reserved words. 
          path: url
          render: it defines what should be the output when that path specified is active. this method will takes a callback which should return JSX
          exact: its a keyword, which will match if path is exact or not otherwise path will get active even if prefix of path is same as some other path. eg : '/' and '/new-post' => both path will render same page.
        */}
        {/* <Route path="/" render={() => {return <h1>Home</h1>}} /> */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}

        {/* we can have more than 1 route for single path and Rote will render the as many as path are defined*/}
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" exact render={() => <h1>Home 2</h1>} />
      </div>
    );
  }
}

export default Blog;
