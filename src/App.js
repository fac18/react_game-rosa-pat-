import React from 'react';
import './App.css';
import Header from './components/header.js';
import Cards from './components/cards.js';
import Footer from './components/footer.js';
// import REACT_APP_UNSPLASH_TOKEN from '../../src/.env';

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
