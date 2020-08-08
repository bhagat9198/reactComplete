import React, { Component } from "react";
import {Route} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
// 
import NewPost from './NewPost/NewPost';

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
        {/* component: it is same like render method. just like img, we have to pass the refference to the component. */}
        <Route path="/" exact component={Posts} />
        {/* similary, adding teh route for 'new-post' route */}
        <Route path="/new-post" component={NewPost} />
      </div>

      // our both the routes are working.
      // but one problem, can u guess?
        // our page is reloading every time we change the route. whicj means that our state is getting reseted as we are reloading the page/JS. thus, we should re-render the page not reload so that our JS code doesnt get refresh.
    );
  }
}

export default Blog;
