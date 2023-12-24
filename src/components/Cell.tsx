import { CellStates } from '../types';

interface Props {
    type: CellStates;
}

function Cell({ type }: Props) {
    return <div className={`cell ${type}`} />;
}

export default Cell;