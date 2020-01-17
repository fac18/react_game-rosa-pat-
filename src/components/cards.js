import React from 'react';
import '../App.css';
import { getData } from './header.js';
// import Timer from './timer';

// const clickedCards = [];

const Cards = props => {
  const [clickedCards, setClickedCards] = React.useState([]);
  const [flipped, setFlip] = React.useState(false);

  console.log('i am the array of photos in cards', props.photoArray);

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
      {/* <Timer/> */}
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
            <div className='cardBack'></div>
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
