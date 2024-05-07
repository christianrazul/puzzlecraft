import React from 'react';
import letters from '../letters';

interface GridProps {
  rows: number;
  columns: number;
}

const Grid: React.FC<GridProps> = ({ rows, columns }) => {
  const cells = Array(rows * columns).fill(null);

  const getRandomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)];
  };

  return (
    <div
      className='grid'
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {cells.map((_, index) => (
        <button
          key={index}
          style={{
            width: '2rem',
            height: '2rem',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            fontSize: '1rem',
          }}
        >
          {getRandomLetter()}
        </button>
      ))}
    </div>
  );
};

export default Grid;
