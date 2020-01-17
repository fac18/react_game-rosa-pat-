# Team Rosa and Pat
## Memory game 
![](https://media.giphy.com/media/xUA7bahIfcCqC7S4qA/giphy.gif =300x)


---

### Requirements for project

- [x] Accept some user input (e.g. a username)
- [x] Query an API (e.g. the Github API, or any other fun one)
- [x] Populate the UI with API data
- [ ] Have some form of persistent state and interactivity
- [ ] Have integration tests using React Testing Library


---


### User Stories

As a user, I want to be able to choose a picture theme to populate my card-game. 

As a user, I want to guess which cards match one another. 

As a user, I want a smooth UI which tells me when I get guesses right and wrong.

---

### UI sketch and components
![](https://i.imgur.com/enVlb9k.jpg =400x)


---

### Let's have a look! 

https://react-game-pat-and-rosa.netlify.com/

---

### Stretch goals
* adding timer
* adding points 
* actually writing more react...
* adding tests

---

```javascript=
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
```

---

### What would we change? 
* using state for the clickedCards instead of an array
* modularising components (card component) 
* Reducing manual dom manipulation so we are toggling classlist dynamically


---

![](https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif)
