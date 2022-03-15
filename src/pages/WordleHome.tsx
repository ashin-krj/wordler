import Game from "../components/Game/Game";
import Keyboard from "../components/Keyboard/Keyboard";

function WordleHome() {
  return (
    <div className="gameContainer">
      <Game />
      <Keyboard keyPressHandler={() => {}} />
    </div>
  );
}

export default WordleHome;
