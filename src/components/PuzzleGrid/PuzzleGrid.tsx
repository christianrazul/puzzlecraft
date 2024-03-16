// Import the styles from the PuzzleGrid.css file
import './PuzzleGrid.css';
import letters from '../../letters';

// This component takes in a word list and renders a grid of buttons for each letter in the word list.

interface PuzzleGridProps {
  words: string[];
}

// How do I see the array of letters in a console.log?

const PuzzleGrid = ({ words }: PuzzleGridProps) => {
  console.log(letters);

  const getRandomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)];
  };

  return (
    <div>
      <div className='grid'>
        {words.flatMap((word, index) => [
          <div className='word' key={index}>
            {word.split('').map((letter, index) => (
              <button className='cell' key={index}>
                {letter}
              </button>
            ))}
          </div>,
          ...Array.from({ length: 10 }).map((_, index) => (
            <button className='cell' key={index}>
              {getRandomLetter()}
            </button>
          )),
        ])}
      </div>
    </div>
  );
};

export default PuzzleGrid;
