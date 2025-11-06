import React, { useState } from 'react';
import './book.css';

function Book({ img, title, price }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div id="book">
      <img src={img} alt={title || "Book cover"} width={200} height={150} />
      <h2>Title: {title}</h2>
      <h3>Price: ₹{price}</h3>

      <div className="counter">
        <button onClick={decrement} disabled={count === 0}>−</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Book;
