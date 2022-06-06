import classes from "./MenuContent.module.css";
import MenuTop from "./MenuTop";
import MenuBottom from "./MenuBottom";

import { useParams } from "react-router-dom";
import { useDebugValue } from "react";

const DUMMY_FOOD = [
  {
    id: "f1",
    foodName: "SENBON PIZZA",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 20,
    foodAmount: 1,
    initialPrice: 20,
    deliveryTime: 70,
  },
  {
    id: "f2",
    foodName: "SENBON PASTA",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 10,
    foodAmount: 1,
    initialPrice: 10,
    deliveryTime: 50,
  },
  {
    id: "f3",
    foodName: "ZAKURA SPHAGETTI",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 20,
    foodAmount: 1,
    initialPrice: 20,
    deliveryTime: 60,
  },
  {
    id: "f4",
    foodName: "ZANGETSU MEAT",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 50,
    foodAmount: 1,
    initialPrice: 50,
    deliveryTime: 120,
  },
  {
    id: "f5",
    foodName: "NARUTO RAMEN",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 25,
    foodAmount: 1,
    initialPrice: 25,
    deliveryTime: 30,
  },
];

const MenuContent = () => {
  const params = useParams();
  const urlFoodId = params.foodId;

  const foodObject = DUMMY_FOOD.find((foodObj) => foodObj.id === urlFoodId);

  return (
    <div className={classes["menu-content"]}>
      <MenuTop />
      <div className={classes["menu-content__label"]}>
        {foodObject.foodName}
      </div>
      <MenuBottom foodObject={foodObject} />
    </div>
  );
};

export default MenuContent;
