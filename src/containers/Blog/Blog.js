import React, { Component } from "react";
import {Route, NavLink, Switch} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

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
                // to="/">Home</NavLink></li>
                // here if we want 'Posts' lik should be highligted when all the posts are visible and when FullPost is visible. for that we need to remove 'excat' keyword and if we remove the 'exact' keyword than it will highlighted when we are on NewPost.
                // so, this some problem which can be faced while dealing with common route like home(/) route.
                // to="/">Posts</NavLink></li>



                // 11.22
                to="/posts">Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact component={Posts} /> */}
        <Switch>
          {/*1. we can remove the Switch if we want, not matter much */}
          {/* <Route path="/" exact component={Posts} /> */}


          {/*2. as we have nested route within this route. so when we go on '/1' or '/2' etc, its never gets rendered as we are using the 'exact'. only url changes but componenet doesnt get rendered. */}
          {/* <Route path="/" component={Posts} /> */}

          
          {/* 3.our app is working but now if we change the root path from '/' to '/posts.  */}
          <Route path="/posts" component={Posts} />


          <Route path="/new-post" component={NewPost} />
          {/* <Route path="/:id" component={FullPost} />  */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
