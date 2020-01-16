import React from 'react';
import './App.css';
import Header from './components/header.js';
import Cards from './components/cards.js';
import Footer from './components/footer.js';
// import REACT_APP_UNSPLASH_TOKEN from '../../src/.env';

function App() {
  const [photoArray, setPhotoArray] = React.useState([]);
  return (
    <div className='App'>
      <Header photoArray={photoArray} setPhotoArray= {setPhotoArray} />
      <Cards photoArray={photoArray} />
      <Footer />
    </div>
  );
}

export default App;
