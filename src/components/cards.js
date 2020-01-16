import React from 'react';
import '../App.css';
import { getData } from './header.js';

const Cards = props => {
  console.log('i am the array of photos in cards', props.photoArray);

  return (
    <div>
      <section className='upperSection'>
        <span className='timer'></span>
        <span className='moves'></span>
      </section>
      <section className='cardGrid'>
        <div className='cardContainer'>
          {props.photoArray.map(photo => (
            <div>
              <div className='cardBack'>This is back</div>
              <div className='cardFront' id='cardOne'>
                <img className='image' src={photo.thumb} alt='card image' />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
