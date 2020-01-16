import React from 'react';
import '../App.css';
import { getData } from './header.js';

const Cards = props => {
  console.log('i am the array of photos in cards', props.photoArray);
  
  const [flipped, setFlip] = React.useState(false);

  const flipper = (event) => {
    setFlip(true);
    event.target.parentElement.classList.toggle('clickedCard');
  }


  return (
    <div>
      <section className='upperSection'>
        <span className='timer'></span>
        <span className='moves'></span>
      </section>
      <section className='cardGrid'>
          {props.photoArray.map(photo => (
            <div onClick={flipper} className="cardContainer"  key={photo[0]}>
              <div className='cardBack'>This is back</div>
              <div className='cardFront' >
                <img className='image' key={photo[0]} src={photo[1]} alt='card image' />
              </div>
            </div>

            
            
          ))}
        
      </section>
    </div>
  );
};

export default Cards;
