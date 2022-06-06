import classes from "./MenuTop.module.css";
import ZakuraSphag from "../../Assets/ZakuraSphag.png";

const MenuTop = () => {
  return (
    <div className={classes["menu-content__top"]}>
      <img src={ZakuraSphag} alt="food picture" />
      <div></div>
    </div>
  );
};

export default MenuTop;
