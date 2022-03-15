import { useMemo } from "react";
import styles from "./Keyboard.module.css";

type KeyPressHandlerType = (key: string) => void;

type KeyboardProps = {
  keyPressHandler: KeyPressHandlerType;
};

function Keyboard({ keyPressHandler }: KeyboardProps) {
  const top = useMemo(() => {
    return "qwertyuiop".split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
  }, [keyPressHandler]);

  const middle = useMemo(() => {
    return "asdfghjkl".split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
  }, [keyPressHandler]);

  const bottom = useMemo(() => {
    const letters = "zxcvbnm".split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
    const enterKey = (
      <Key
        longKey
        keyPressHandler={keyPressHandler}
        key="Enter"
        keyName="Enter"
      />
    );
    const backspaceKey = (
      <Key
        longKey
        keyPressHandler={keyPressHandler}
        key="Backspace"
        keyName="Back"
      />
    );
    return [enterKey, ...letters, backspaceKey];
  }, [keyPressHandler]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>{top}</div>
      <div className={styles.row}>{middle}</div>
      <div className={styles.row}>{bottom}</div>
    </div>
  );
}

type KeyProps = {
  keyName: string;
  keyPressHandler: KeyPressHandlerType;
  longKey?: boolean;
};

function Key({ keyName, keyPressHandler, longKey }: KeyProps) {
  return (
    <span
      className={`${styles.key} ${longKey ? styles.longKey : ""}`}
      onClick={() => {
        keyPressHandler(keyName);
      }}
    >
      {keyName}
    </span>
  );
}

export default Keyboard;
