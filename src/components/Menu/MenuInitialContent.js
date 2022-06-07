import classes from "./MenuInitialContent.module.css";
import smile from "../../Assets/Smile.svg";

const MenuInitialContent = () => {
  return (
    <div className={classes["menu-initial-content"]}>
      <h1>Start by searching food you might like.</h1>
      <h2> Have fun</h2>
      <div>
        <img src={smile} />
      </div>
    </div>
  );
};

export default MenuInitialContent;
