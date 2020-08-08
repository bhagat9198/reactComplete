import React from "react";
// 
import { withRouter } from 'react-router-dom';

import "./Post.css";

// passing more than 1 stm, using return keyword to return form function
const post = (props) => {
  // as we are getting extra props in Posts and NewPost.
  console.log(props);
  // we are not getting all the extra info of props from React Route as its the sub component which is called by Posts, not directly called by Link component of React Router.
    // ie, props info will not be available to components which are passes as JSX code.

  // to get all the extra info with props, will use HOC.
  // importing at the top and then wrapping the this componenet with HOc 

  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
}

// export default post;

// warpping with 'withRouter' HOC
export default withRouter(post);
