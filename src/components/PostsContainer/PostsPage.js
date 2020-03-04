//Complete the necessary code in this file
// import useState
import React from 'react';
import Post from './Post';
import './Posts.css';
// import data
import data from '../../dummy-data';

const PostsPage = (props) => {

  const queryRegExp = new RegExp(props.query,'i');
	return (
		<div className="posts-container-wrapper">
			{/* map through data here to return a Post and pass data as props to Post */}
			{/* add filter for Stretch */}
			{data
				.filter((postData) => {
					if (props.query === '') return true;
					return (
            queryRegExp.test(postData.username) ||
            postData.comments.some((comment) => 
              queryRegExp.test(comment.username) ||
              queryRegExp.test(comment.text))
						// postData.username.toLowerCase().includes(props.query.toLowerCase()) ||
            // postData.comments.some((comment) => 
            //   comment.username.toLowerCase().includes(props.query.toLowerCase()) ||
            //   comment.text.toLowerCase().includes(props.query.toLowerCase())
            //)
					);
				})
				.map((postData) => <Post post={postData} />)}
		</div>
	);
};

export default PostsPage;
