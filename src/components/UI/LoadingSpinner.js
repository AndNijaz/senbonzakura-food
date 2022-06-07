import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  const classNames = `${classes["spinner"]} ${classes["spinner-slow"]}} ${classes["spinner-large"]}`;

  return <span className={classNames}></span>;
};

export default LoadingSpinner;
