import React, { Component } from "react";
import axios from 'axios';
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };

  postDataHandler = () => {
    // send post request using axios. it will automtically convert our data into JSON formante, we dont have to do it.
    // post request accept 2 main args
      // 1st arg: url, 2nd arg: data, 3rd arg: configrations if any
    // axios.post('https://jsonplaceholder.typicode.com/posts', data);

    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(response => {
      console.log(response);
      // thus, once we get the response means our data is stored successfully. 
      // similiarly, we can store in real server also. 
    })
  }

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        {/* adding the click listner */}
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
