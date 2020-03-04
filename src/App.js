/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage.js';
import SearchBar from './components/SearchBar/SearchBarContainer.js';

const App = () => {
  const [query, updateQuery] = useState('');

  return (
    <div className='App'>
      {/* pass properties to SearchBar and PostsPage */}
      <SearchBar query={query} updateQuery={updateQuery} />
      <PostsPage query={query}/>
    </div>
  );
};

export default App;
