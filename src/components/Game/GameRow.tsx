import GameTile from "./GameTile";
import styles from "./Game.module.css";

type GameRowProps = {
  wordLength: number;
};

function GameRow({ wordLength }: GameRowProps) {
  return (
    <div className={styles.gameRowStyle}>
      {Array.from({ length: wordLength }).map((_, i) => (
        <GameTile key={i} />
      ))}
    </div>
  );
}

export default GameRow;
