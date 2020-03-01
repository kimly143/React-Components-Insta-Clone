// You will add code to this file
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';
// Kim Buck import dummy data
import data from '../../dummy-data';

const CommentSection = props => {
  // Add state for the comments

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(cmData => <Comment comment={cmData} />)}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
