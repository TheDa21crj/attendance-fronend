import ButtonStyle from "./Css/Button.module.css";

const TIMEOUT = 1200;

export default function ControlButton({
  errorObject,
  text,
  clickHandler,
  setErrorState,
  index,
}) {
  if (errorObject && errorObject.error && errorObject.index == index) {
    console.log("here");
    setTimeout(() => {
      setErrorState(false);
    }, TIMEOUT);
    return (
      <button className={`${ButtonStyle.btn} ${ButtonStyle.error}`}>
        {errorObject.message}
      </button>
    );
  }
  return (
    <button
      className={ButtonStyle.btn}
      onClick={(e) => clickHandler(e, false, false)}
    >
      {text}
    </button>
  );
}
