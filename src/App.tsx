import Grid from './components/Grid';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import Title from './ui/title.png'
import UpButton from './ui/buttons/up.png'
import DownButton from './ui/buttons/down.png'
import LeftButton from './ui/buttons/left.png'
import RightButton from './ui/buttons/right.png'
import CenterButton from './ui/buttons/button.png'

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <img className='title' src={Title} alt="Neko Atsume Tetris" />
      <Grid currentGrid={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <>
            <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
            <div className='mobile-only-controls'>
              <img className='upbutton' src={UpButton} alt="Up" />
              <div className="middle-row">
                <img className='leftbutton' src={LeftButton} alt="Left" />
                <img className='centerbutton' src={CenterButton} alt="Center" />
                <img className='rightbutton' src={RightButton} alt="Right" />
              </div>
              <img className='downbutton' src={DownButton} alt="Down" />
            </div>
          </>
        ) : (
          <button className='newGame' onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;