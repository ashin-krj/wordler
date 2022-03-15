import styles from "./Game.module.css";
import GameRow from "./GameRow";

const GUESS_ATTEMPTS = 6;
const WORD_LENGTH = 5;

function Game() {
  return (
    <div className={styles.gameStyle}>
      <div className={styles.gameBoard}>
        {Array.from({
          length: GUESS_ATTEMPTS,
        }).map((_, i) => {
          return <GameRow key={i} wordLength={WORD_LENGTH} />;
        })}
      </div>
    </div>
  );
}

export default Game;
