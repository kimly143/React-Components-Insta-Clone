// You do not need to change any code in this file
import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className='search-bar-wrapper'>
      <div className='image-wrapper'>
        <i className='fab fa-instagram'/>
        <img className='instText' src='/inst.png'/>
      </div>
      <form className='search-form' onSubmit={(event)=>{
        event.preventDefault();
      }}>
        {/* search ----- onChange => save new value */}
        <input value={props.query} onChange={(event)=>{
          props.setQuery(event.target.value)
        }}
          type='text'
          placeholder='Search'
        />
      </form>
      <div className='social-wrapper'>
        <div className='social'>
          <i className='far fa-compass' />
        </div>
        <div className='social'>
          <i className='far fa-heart' />
        </div>
        <div className='social'>
          <i className='far fa-user-circle' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
