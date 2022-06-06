import classes from "./CartModalFoodList.module.css";
import ModalMenuItem from "./ModalMenuItem";
import { useSelector } from "react-redux";

// const DUMMY_FOOD = [
//   {
//     id: "f1",
//     foodName: "SENBON PIZZA",
//     foodDescription:
//       "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
//     foodPrice: 20,
//   },
//   {
//     id: "f2",
//     foodName: "SENBON PASTA",
//     foodDescription:
//       "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
//     foodPrice: 10,
//   },
// ];

const CartModalFoodList = () => {
  const cartState = useSelector((state) => state.cart);
  const { cart: foodList } = cartState;

  return (
    <div className={classes["menu-list"]}>
      {foodList.map((foodObj) => (
        <ModalMenuItem key={foodObj.id} foodObj={foodObj} />
      ))}
    </div>
  );
};

export default CartModalFoodList;
