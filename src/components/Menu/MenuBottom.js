import classes from "./MenuBottom.module.css";
import BottonElements from "./BottomElements";
import BottomButtons from "./BottomButtons";

const MenuBottom = (props) => {
  return (
    <div className={classes["menu-content__bottom"]}>
      <BottonElements foodObject={props.foodObject} />
      <BottomButtons foodObject={props.foodObject} />
    </div>
  );
};

export default MenuBottom;
