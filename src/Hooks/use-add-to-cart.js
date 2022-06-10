import cartSliceActions from "../store/cart-slice";
import uiSliceActions from "../store/ui-slice";
import { useDispatch } from "react-redux";

const useAddToCart = () => {
  const dispatch = useDispatch();
  const addToCart = (foodObject) => {
    dispatch(cartSliceActions.addToCart(foodObject));
    dispatch(uiSliceActions.updateCartIconScale());
    setTimeout(() => {
      dispatch(uiSliceActions.updateCartIconScale());
    }, 500);
  };

  return addToCart;
};

export default useAddToCart;
