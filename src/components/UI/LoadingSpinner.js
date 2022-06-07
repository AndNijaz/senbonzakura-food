import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  const classNames = `${classes["spinner"]} ${classes["spinner-slow"]}} ${
    classes["spinner-large"]
  } ${props.className === "sideSpinner" ? classes["side-spinner"] : ""}`;

  return <span className={classNames}></span>;
};

export default LoadingSpinner;
