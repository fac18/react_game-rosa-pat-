import React from 'react';

const Header = props => {
  return (
    <div>
      <h1 className='title'> Test your RAM!</h1>;
      <p className='description'>
        A fun game to test your memory....pick a theme to get started!
      </p>
      <form className='form'>
        <label className='label' htmlFor='name'>
          Name
        </label>
        <input
          className='input'
          id='name'
          type='text'
          name='name'
          // value=''
          placeholder='Put your name here!'
        ></input>
        <label className='label' htmlFor='theme'>
          Theme
        </label>
        <input
          className='input'
          id='theme'
          type='text'
          name='theme'
          // value=''
          placeholder='Pick your theme!'
        ></input>
        <select className='dropdown'>
          <option value='easy'> Easy</option>
          <option value='medium'> Medium</option>
          <option value='hard'> Hard</option>
        </select>
        <button onclick='' className='submit' type='submit'></button>
      </form>
    </div>
  );
};

export default Header;
