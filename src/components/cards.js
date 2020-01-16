import React from 'react';
import '../App.css';
import {getData} from './header.js';

const Cards = props => {
const [image, setImage] = React.useState([]);
React.useEffect(() => {
    setImage(image);
}, [image])

const {
    thumb, id
} = image; 

    return( 
        <div>
            <section className="upperSection">
                <span className="timer"></span>
                <span className="moves"></span>
            </section>
            <section className="cardGrid">

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardOne"><img className="image" src={thumb} alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTwo"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardThree"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardFour"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardFive"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer clickedCard">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardSix"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardSeven"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardEight"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront " id="cardNine"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTen"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardEleven"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTwelve"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTen"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardEleven"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTwelve"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTen"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardEleven"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>

                <div className="cardContainer">
                    <div className="cardBack" >This is back</div>
                    <div className="cardFront" id="cardTwelve"><img className="image" src="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg" alt="card image"/></div>
                </div>
    

            </section>
        </div>
    );
}

export default Cards;
