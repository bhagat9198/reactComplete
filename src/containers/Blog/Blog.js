// import React, { Component } from "react";

import React, { Component, Suspense } from "react";

import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import "./Blog.css";
import Posts from './Posts/Posts';

// no more using HOC to do lazy loading
// import AsyncComponent from './../../hoc/AsyncComponent';
// const AynsNewPost = AsyncComponent(() => {
//   return import('./NewPost/NewPost');
// });

// react 16.6 hads a new methods on react object, the lazy method which helps to load componants asynchronously. 
// lazy method can be used with routing, till the time user doesnt visits the route, that componenent code will not be loaded.
// it can be also used with conditions like if else 

// again using dynamically importing our NewPost route with lazy method
// lazy(): it accepts a function
// dynamic import doesnt take named import. thus, default export is imporatnt here ie, export default something.
const AynsNewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {

  // 1.way
  // state = {
  //   auth: true
  // };

  // render() {
  //   return (
      
  //       <div className="Blog">
  //         <header>
  //           <nav>
  //             <ul>
  //               <li><NavLink 
  //                 activeClassName= "my-active"
  //                 activeStyle = {{
  //                   color: '#fa923f',
  //                   textDecoration: 'underline'
  //                 }}
  //                 exact 
  //                 to="/posts">Posts</NavLink></li>
  //               <li><NavLink to={{
  //                 pathname: '/new-post',
  //                 hash: '#submit',
  //                 search: '?quick-submit=true'
  //               }}>New Post</NavLink></li>
  //             </ul>
  //           </nav>
  //         </header>
  //         <Switch>
  //           {/* {this.state.auth ? <Route path="/new-post" component={AynsNewPost} /> : null} */}

  //           {this.state.auth ? 
  //             <Route path="/new-post" 
  //               render={() => 
  //                 // passing fallback prop, which is nessary. it will contain JSX code
  //                 // it will be displayed when react postpond the reandering of this 'AynsNewPost' warpped componend. inplace of Loading, there can be spinner or something like that
  //                 <Suspense fallback={<div>Loading...</div>}>
  //                   <AynsNewPost />
  //                 </Suspense>} /> 
  //             : null}
  //           <Route path="/posts" component={Posts} />
  //           <Route render = {() => <h1 style={{textAlign: 'center'}}>Page Not Found</h1>} />
  //         </Switch>
  //       </div>
      
  //   );
  // }


  // 2.way
  // react.lazy can be also be used without the help of Route.
  
  // creating a toggle button which will display Posts and NewPost alternately
  state = {
    posts: true
  };

  modeHandler = () => {
    this.setState(prevState => {
      return { posts: !prevState.posts}
    })
  }

  render() {
    return(
      // it same like aux component, just like a wrapper. doesnt render some element to real dom and hence, doesnt distort our html
      <React.Fragment >
        <button onClick={this.modeHandler} >Toggle Posts</button>
        {this.state.posts ? 
          <h1>Post Page</h1> : 
          <Suspense fallback={<div>Loading...</div>}>
            <AynsNewPost />
          </Suspense>
        }
      </React.Fragment>
    );
  }
}

// note: its is not supported for server side rendering. its only helpful for client side rendering.

export default Blog;
