import cartSliceActions from "../store/cart-slice";
import uiSliceActions from "../store/ui-slice";
import { useDispatch } from "react-redux";

const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const removeFromCart = (foodObject) => {
    dispatch(cartSliceActions.removeFromCart(foodObject));
  };

  return removeFromCart;
};

export default useRemoveFromCart;
