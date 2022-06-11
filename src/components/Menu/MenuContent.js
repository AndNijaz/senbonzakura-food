import classes from "./MenuContent.module.css";
import MenuTop from "./MenuTop";
import MenuBottom from "./MenuBottom";
import ReactDOM from "react-dom";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuContent = () => {
  const foodList = useSelector((state) => state.foodList.food);
  const params = useParams();
  const urlFoodId = params.foodId;

  let foodObject;
  foodObject = foodList.find((foodObj) => foodObj.id === urlFoodId);

  if (!foodObject) return;

  return (
    <div className={classes["menu-content"]}>
      <MenuTop food={foodObject} />
      <div className={classes["menu-content__label"]}>
        {foodObject.foodName}
      </div>
      <MenuBottom foodObject={foodObject} />
    </div>
  );
};

export default MenuContent;
