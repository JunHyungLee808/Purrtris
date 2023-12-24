import Grid from './components/Grid';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import Title from './ui/title.png'

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <img className='title' src={Title} alt="Neko Atsume Tetris" />
      <Grid currentGrid={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button className='newGame' onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;