import React, { useState } from 'react';

// API call

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();

};

 export const getData = querystring => {
  return fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${querystring}&page=10&orientation=portrait&client_id=${process.env.REACT_APP_UNSPLASH_TOKEN}`
  )
    .then (checkResponse)
    .then (data => {
      const arrObj = data.results;
      // console.log('our objects array', arrObj);
      const imageURLs = arrObj.map(obj => {
        return [obj.id, obj.urls.thumb];
      });
      const final = imageURLs.concat(imageURLs).sort(() => Math.random() - 0.5);
      return final;
    })
    .catch(err => {
      throw new Error(`fetch getData failed ${err}`);
    });
};

// Extract data from form using react

// Header

const Header = props => {
  const [theme, setTheme] = useState('');

  console.log('i am the new theme', theme);

  const handleSubmit = e => {
    console.log('I am the submitted theme', theme);
    console.log(`submitting theme ${theme}`);
    getData(theme).then(
      data => {
        props.setPhotoArray(data);
      }

    );
    // const parsedResponse = JSON.parse(response);
    // console.log(typeof response);
    // console.log('our response ', response );
    // const imagesUrls = [];
    // const picNumber = 9;
    
    // console.log(' our api response', response);
    e.preventDefault();
  };

  console.log("i am the theme inside handlesubmit", props.photoArray)

  return (
    <div>
      <h1 className='title'> Test your RAM!</h1>;
      <p className='description'>
        A fun game to test your memory....pick a theme to get started!
      </p>
      <form onSubmit={handleSubmit} className='form'>
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
          // value={theme}
          onChange={e => setTheme(e.target.value)}
          placeholder='Pick your theme!'
        ></input>
        <select className='dropdown'>
          <option value='easy'> Easy</option>
          <option value='medium'> Medium</option>
          <option value='hard'> Hard</option>
        </select>
        <button className='submit' type='submit'>
          PLAY 
        </button>
      </form>
    </div>
  );
};

export default Header;
