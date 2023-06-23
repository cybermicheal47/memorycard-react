import React, { useState } from 'react';
import Counter from './Counter';
import pizza from '../images/pizza.jpg';
import burger from '../images/burger.jpg';
import fries from '../images/frying.jpg';
import fishsoup from '../images/fishsoup.jpg';
import chikenwings from '../images/bakedchickenwings.jpg';
import grilledchicken from '../images/grilledchicken.jpg';
import mexicantacos from '../images/Mexicantacos.jpg';


const Card = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Pizza', image: pizza, },
    { id: 2, title: 'Burger', image: burger },
    { id: 3, title: 'Ingredients', image: fries },
    { id: 4, title: 'Baked Chickenwings', image: chikenwings },
    { id: 5, title: 'Grilled Chicken', image: grilledchicken },
    { id: 6, title: 'Mexican tacos', image: mexicantacos }
  ]);
  const [count, setCount] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
    
  }

  function resetCount() {
    setCount(0);
    console.log('Count reset.');
  }

  function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'white',  'orange', 'purple']; // Define your desired colors here
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }



  
  const handleCardClick = (clickedCard) => {   
    setCards((prevCards) => {
        const randomNumber = generateRandomNumber();
        console.log(randomNumber)
     
        setCount(count + 1)
        
        if (count + 1 === randomNumber) {
            setLastNumber(randomNumber);
            console.log(`Last number before reset: ${lastNumber}`);
            resetCount();
          }


       

   
      const clickedIndex = prevCards.findIndex((card) => card.id === clickedCard.id);
      const randomIndex = Math.floor(Math.random() * prevCards.length);

      const updatedCards = [...prevCards];
      const temp = updatedCards[clickedIndex];
      updatedCards[clickedIndex] = updatedCards[randomIndex];
      updatedCards[randomIndex] = temp;


      return updatedCards;
     
    });
  };

  return (
    <div>

<header>
<div class="hscore">

<h2 class="h2score"> Score: {count} </h2>    <h2 class="h2hgh"> High Score: {lastNumber} </h2>
</div>
</header>
<br/>

      <div className="container">

       
        {cards.map((card) => (
          <div key={card.id} className="card"   style={{ backgroundColor: getRandomColor() }}    onClick={() => handleCardClick(card) }>
            <img src={card.image} alt="Card Image" />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
