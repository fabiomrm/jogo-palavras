import './styles.css';
import { Letter } from 'components/Letter';
import { Keyboard } from 'components/Keyboard';

export const Board = () => {
  return (
    <div className="board-container">
      <div className="row">
        <Letter attempt={0} position={0} />
        <Letter attempt={0} position={1} />
        <Letter attempt={0} position={2} />
        <Letter attempt={0} position={3} />
        <Letter attempt={0} position={4} />
      </div>
      <div className="row">
        <Letter attempt={1} position={0} />
        <Letter attempt={1} position={1} />
        <Letter attempt={1} position={2} />
        <Letter attempt={1} position={3} />
        <Letter attempt={1} position={4} />
      </div>
      <div className="row">
        <Letter attempt={2} position={0} />
        <Letter attempt={2} position={1} />
        <Letter attempt={2} position={2} />
        <Letter attempt={2} position={3} />
        <Letter attempt={2} position={4} />
      </div>
      <div className="row">
        <Letter attempt={3} position={0} />
        <Letter attempt={3} position={1} />
        <Letter attempt={3} position={2} />
        <Letter attempt={3} position={3} />
        <Letter attempt={3} position={4} />
      </div>
      <div className="row">
        <Letter attempt={4} position={0} />
        <Letter attempt={4} position={1} />
        <Letter attempt={4} position={2} />
        <Letter attempt={4} position={3} />
        <Letter attempt={4} position={4} />
      </div>
      <Keyboard />
    </div>
  );
};
