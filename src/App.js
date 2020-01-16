import React from 'react';
import './App.css';
import Header from './components/header.js';
import Cards from './components/cards.js';
import Footer from './components/footer.js';
// import REACT_APP_UNSPLASH_TOKEN from '../../src/.env';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getData = querystring => {
  return fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${querystring}&orientation=portrait&client_id=${process.env.REACT_APP_UNSPLASH_TOKEN}`
  )
    .then(checkResponse)
    .catch(err => {
      throw new error(`fetch getData failed ${err}`);
    });
};

function App() {
  return (
    <div className='App'>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
