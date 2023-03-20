import Scores from './components/Scores';
import Card from './components/Card';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [order, setOrder] = useState([]);
  const [clickedImgs, setClickedImgs] = useState([]);

  const names = ['Jozin', 'Twój stary', 'Matka Miltona', 'Janusz Korwin-Mikke', 'JP2', 'npc1', 'npc2', 'npc3'];
  const images = ['#', '#', '#', '#','#', '#', '#', '#'];
  const cardsNumber = 8;

  useEffect(() => {
    randomOrder(cardsNumber);
  }, [score]);

  const randomOrder = n => {
    while (order.length < n) {
      const randomNumber = Math.floor(Math.random * n);
      if (order.includes(randomNumber)) {
        setOrder([...order, randomNumber]);
      }
    }
  }

  const checkCard = cardId => {
    if (!clickedImgs.includes(cardId)) return;

    if(score > bestScore) {
      setBestScore(score);
      setScore(0);
      setClickedImgs([]);
    } else {
      setScore(score +1);
      setClickedImgs([...clickedImgs, cardId]);
    }
  }

  return (
    <>
      <h1>Memory Game</h1>
      <p>Get points by clicking on images, but don't click at any more than once.</p>
      <Scores score={score} bestScore={bestScore} />
      <div className='cards'>
        {order.map(i => {
          return <Card key={i} name={names[i]} image={images[i]} clickHandler={checkCard} />
        })}
      </div>
    </>
  );
}

export default App;
