import React, { Component } from "react";
import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

// we want to load NewPost dynamically ie, only loading the code when user goes on NewPost route.
// whenever we import lik this..import something from somewhere. 
// import NewPost from './NewPost/NewPost';
// we inform webpack, the build tool which gets usd behined the sceans about this dependency . eg './NewPost/NewPost'.
// then it will be included in teh global bundle

// but for lazy loading, it will be opposite, we dont want to include the code on global bundle. it should be loaded when needed.
// for that webpack should able to dynamically prepare some extra bundle for the new component which will be loaded.
// hence commenting out old way of importing

// importing AsyncComponent
import AsyncComponent from './../../hoc/AsyncComponent';

// executing AsyncComponent function component. it will require soem arg which should be a function so that it can executed within AsyncComponent component.
// thus, passing anomous arrow function
const AynsNewPost = AsyncComponent(() => {
  // using import as function
  // return import();
  // this is a special syntax, teh dynamic import syntax which means whatever comes between the parenthese wll be only imported when warpping function is execued. 
    // in our case, warppig function will be this anomous function. and this function will only be executed when we render AynsNewPost to dom.
  
  // hence, importing my NewPost component
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    // making auth 'false' to 'true' so that we van navigate to NewPost
    auth: true
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
          {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
          {/* instaed of NewPost component, we will be using AynsNewPost component */}
          {this.state.auth ? <Route path="/new-post" component={AynsNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render = {() => <h1 style={{textAlign: 'center'}}>Page Not Found</h1>} />
        </Switch>
      </div>
    );
    // thus, when we load NewPOst route, '1.chunk.js' will be created dynamically. this will be extra bundle which webpack is creating fro NewPost. but its not getting added to bundle.js as it prepared to laod when needed 
  }
}

export default Blog;
