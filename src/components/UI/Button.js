import classes from "./Button.module.css";

const Button = (props) => {
  const classNames = `${props.className} ${classes["button"]}`;

  return (
    <button className={classNames} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
