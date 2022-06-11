import classes from "./MenuTop.module.css";
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

//To avoid waste of time, I put this images in one array and logic bellow will deetermine which picture shoud be shown. This could also be done with api, but there is no need for that right now
const DUMMY_IMAGES = {
  senbonpasta: senbonPasta,
  senbonpizza: senbonPizza,
  zakurasphagetti: zakuraSpaghetti,
  narutoramen: narutoRamen,
  zangetsumeat: zangetsuMeat,
  dango: dango,
  rjujinflame: rjujinFlame,
  getsugatensho: getsugatensho,
  benihime: benihime,
  kegeyosi: kageyoshi,
};

const MenuTop = (props) => {
  //This will format foodName property in a way that is the same as DUMMY_IMAGES keys
  const food = props.food.foodName.replaceAll(" ", "").toLowerCase();
  //This will look for required picture
  const img = Object.keys(DUMMY_IMAGES).find((img) => img === food);

  return (
    <div className={classes["menu-content__top"]}>
      <img src={DUMMY_IMAGES[img]} alt="food" />
      {/*This div below is an overlay*/}
      <div></div>
    </div>
  );
};

export default MenuTop;
