import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@mui/material';

interface PuzzleGridProps {
  size: number; // Grid size (e.g., 10 for a 10x10 grid)
  words: string[]; // Array of words to place in the grid
}

interface Cell {
  letter: string;
}

const generateInitialGrid = (size: number): Cell[][] => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    const row: Cell[] = [];
    for (let j = 0; j < size; j++) {
      // Fill each cell with a random letter initially
      const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      row.push({ letter: randomLetter });
    }
    grid.push(row);
  }
  return grid;
};

const TestGrid = ({ size, words }: PuzzleGridProps) => {
  const [grid, setGrid] = useState<Cell[][]>([]);

  useEffect(() => {
    // Initialize the grid with random letters
    const initialGrid = generateInitialGrid(size);
    // TODO: Implement word placement in the grid
    setGrid(initialGrid);
  }, [size, words]);

  return (
    <Grid container spacing={1} justifyContent='center'>
      {grid.map((row, rowIndex) => (
        <Grid key={rowIndex} item container justifyContent='center'>
          {row.map((cell, cellIndex) => (
            <Button key={cellIndex} variant='outlined'>
              {cell.letter}
            </Button>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default TestGrid;
