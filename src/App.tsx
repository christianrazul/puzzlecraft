import './App.css';
import Grid from './components/Grid.tsx';
import PuzzleGrid from './components/PuzzleGrid/PuzzleGrid.tsx';
import TestGrid from './components/TestGrid.tsx';

function App() {
  return (
    <>
      <PuzzleGrid words={['test', 'dog', 'frog']} />
      <Grid rows={8} columns={8} />
      <TestGrid size={8} words={['chan']} />
    </>
  );
}

export default App;
