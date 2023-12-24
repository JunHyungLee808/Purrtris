import { Block, SHAPES } from '../types'
import Queue from '../ui/queue.png'

interface Props {
  upcomingBlocks: Block[];
}

function UpcomingBlocks({ upcomingBlocks }: Props) {
  return (
    <div className="upcoming">
      {upcomingBlocks.map((block, blockIndex) => {
        const shape = SHAPES[block].shape.filter((row) =>
          row.some((cell) => cell)
        );
        return (
          <>
            <div className='preview'>
              <div key={blockIndex}>
                {shape.map((row, rowIndex) => {
                  return (
                    <div key={rowIndex} className="row">
                      {row.map((isSet, cellIndex) => {
                        const cellClass = isSet ? block : 'hidden';
                        return (
                          <div
                            key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                            className={`cell ${cellClass}`}
                          ></div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
      <div className='spacer' /> 
    </div>
  );
}

export default UpcomingBlocks;