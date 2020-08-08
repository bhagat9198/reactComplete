import React, { Component } from "react";
// import {Route, Link} from "react-router-dom";

// as we inspect, we see that no class has been added on the active link. to do that, we need to import differt component which adds the class to active link and few extra porps and do exact same work as 'Link'
import {Route, NavLink} from "react-router-dom"

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
              {/* replacing Link with NavLink */}
              {/* now we can see, when we are on 'new-post' route at that time both the links are active ie colored with orange color. this is because '/new-post' use the prefix of '/' also. hence, both links are colored. this can be rectified by using 'exact' keyword so that it doesnt get used by '/new-post' */}
              {/* <li><NavLink to="/">Home</NavLink></li> */}
              {/* <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li> */}



              {/* bydefault active link will get the class name 'active'. but if we want to change the, we can change it by  */}
              <li><NavLink 
                // giving own classname
                activeClassName= "my-active"
                // now styling will go off as our class anme has been changed and in css there is no styling for 'my-active'

                // we can even style the active link here itself by:
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
      </div>
    );
  }
}

export default Blog;
