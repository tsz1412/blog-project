import React from 'react';
import Post from './Post';
import PostData from './Data/Api.json';
import {Link} from 'react-router-dom';

class Posts extends React.Component {
    render() {
        return (
            <div>
                {PostData.map((post, index) => {
                    return <div key={index} className="post-element">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                        <Link to={{
                            pathname: `/post/${index}`,
                            state: {
                                post
                            }
                        }} className="link-post">Read more...</Link>
                    </div>

                },)}
            </div>
        );
    }
}

export default Posts;

