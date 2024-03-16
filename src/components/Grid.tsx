import { Box } from '@mui/material';
import React from 'react';

interface GridProps {
  dimensions: number;
}

// pass in dimension
// output a box*dimensions

const Grid = ({ dimensions }: GridProps) => {
  return (
    <div>
      <Box
        display='grid'
        gridTemplateColumns={dimensions}
        gridTemplateRows={dimensions}
        border='1px solid red'
        width={32}
        height={32}
      ></Box>
    </div>
  );
};

export default Grid;
