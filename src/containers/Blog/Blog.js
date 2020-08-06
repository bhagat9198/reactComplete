import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

// importing
import axios from 'axios';


class Blog extends Component {

    // 
    componentDidMount() {
        // using axios. 
        // GET method :1arg required ie URL, 2nd arg optional to configure the request 
        // axios.get('https://jsonplaceholder.typicode.com/posts')

        // if we try to save all the data which was fetched by this url, it will not work as GET request happens asynchronously ie it doesnt finish immediatley, it needs some time but JS executes synchronously, it will not wait async request to finish.
        // this is wanted behaviour because we dont want to block the execution of our appliaction. 
        // const post = axios.get('https://jsonplaceholder.typicode.com/posts');


        // thus, we will use promises and axios uses promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
        })


    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;