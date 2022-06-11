import cartSliceActions from "../store/cart-slice";
import { useDispatch } from "react-redux";

const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  //Remove to redux cart store
  const removeFromCart = (foodObject) => {
    dispatch(cartSliceActions.removeFromCart(foodObject));
  };

  return removeFromCart;
};

export default useRemoveFromCart;
