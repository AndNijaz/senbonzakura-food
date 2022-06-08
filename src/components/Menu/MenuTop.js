import classes from "./MenuTop.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import ZakuraSphag from "../../Assets/ZakuraSphag.png";
import senbonPasta from "../../Assets/senbonPasta.svg";
import senbonPizza from "../../Assets/senbonPizza.svg";
import zakuraSpaghetti from "../../Assets/zakuraSpaghetti.svg";
import narutoRamen from "../../Assets/narutoRamen.svg";
import zangetsuMeat from "../../Assets/zangetsuMeat.svg";
import dango from "../../Assets/dango.svg";
import rjujinFlame from "../../Assets/rjujinFlame.svg";
import getsugatensho from "../../Assets/getsugatensho.svg";
import benihime from "../../Assets/benihime.svg";
import kageyoshi from "../../Assets/kageyoshi.svg";

const DUMMY_IMAGES = {
  senbonpasta: senbonPasta,
  senbonpizza: senbonPizza,
  zakuraspaghetti: zakuraSpaghetti,
  narutoramen: narutoRamen,
  zangetsumeat: zangetsuMeat,
  dango: dango,
  rjujinflame: rjujinFlame,
  getsugatensho: getsugatensho,
  benihime: benihime,
  kageyoshi: kageyoshi,
};

const MenuTop = (props) => {
  const food = props.food.foodName.replaceAll(" ", "").toLowerCase();
  const img = Object.keys(DUMMY_IMAGES).find((img) => img === food);

  return (
    <div className={classes["menu-content__top"]}>
      <img src={DUMMY_IMAGES[img]} alt="food picture" />
      <div></div>
    </div>
  );
};

export default MenuTop;
