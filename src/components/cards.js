import React from 'react';
import '../App.css';
import { getData } from './header.js';

const clickedCards = [];

const Cards = props => {
  console.log('i am the array of photos in cards', props.photoArray);

  const [flipped, setFlip] = React.useState(false);
  const flipper = event => {
    setFlip(true);
    event.target.parentElement.classList.toggle('clickedCard');
    clickedCards.push(event.target.parentElement);
    console.log('I am the clicked cards', clickedCards);

    if (clickedCards.length > 2) {
      console.log('i am the first element', clickedCards[0]);
      if (clickedCards[1].dataset.id === clickedCards[2].dataset.id) {
        clickedCards[1].classList.toggle('clickedCard');
        clickedCards[2].classList.toggle('clickedCard');
        clickedCards[1].classList.add('correctCard');
        clickedCards[2].classList.add('correctCard');
      }
      clickedCards[0].classList.toggle('clickedCard');
      clickedCards.shift();
    }
  };

  return (
    <div>
      <section className='upperSection'>
        <span className='timer'></span>
        <span className='moves'></span>
      </section>
      <section className='cardGrid'>
        {props.photoArray.map(photo => (
          <div
            onClick={flipper}
            className='cardContainer'
            data-id={photo[0]}
            key={photo[0]}
          >
            <div className='cardBack'>This is back</div>
            <div className='cardFront'>
              <img
                className='image'
                key={photo[0]}
                src={photo[1]}
                alt='card image'
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cards;
