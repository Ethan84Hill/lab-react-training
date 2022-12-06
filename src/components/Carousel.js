import { useState } from 'react';

function Carousel(props) {
    
const [displayCarousel, setDisplayCarousel] = useState(0);

  return (
    <div>
      <img src={props.images[displayCarousel]} alt="img" />
      <button onClick={() => {
          if (displayCarousel === 0) {
            setDisplayCarousel(3);
          } else {
            setDisplayCarousel(displayCarousel - 1);
          }
        }} > Left </button>
      <button onClick={() => {
          if (displayCarousel === 3) {
            setDisplayCarousel(0);
          } else {
            setDisplayCarousel(displayCarousel + 1);
          }
        }} > Right </button>
    </div>
  );
}

export default Carousel;