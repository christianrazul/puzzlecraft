import React from 'react';

interface PuzzleFromProps {
  dimensions: number;
  wordCount: number;
  topic: string;
}

const PuzzleForm = ({ dimensions, wordCount, topic }: PuzzleFromProps) => {
  return (
    <div>
      {dimensions},{wordCount},{topic}
    </div>
  );
};

export default PuzzleForm;
