import React from 'react';
import {Link} from 'react-router-dom';

class Post extends React.Component{
  render(){
   const {post} = this.props.location.state;
    return (
     <div className="post-element">
         <h3 className="post-title">{post.title}</h3>
         <p className="post-body">{post.body}</p>
         <Link to="/" className="link-post">Back to home</Link>
     </div>
    );
  }
}

export default Post;

