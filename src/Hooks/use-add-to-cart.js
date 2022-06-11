import cartSliceActions from "../store/cart-slice";
import uiSliceActions from "../store/ui-slice";
import { useDispatch } from "react-redux";

const useAddToCart = () => {
  
  const dispatch = useDispatch();
  
  const addToCart = (foodObject) => {
    //Add to redux cart store
    dispatch(cartSliceActions.addToCart(foodObject));
    //Scale cart
    dispatch(uiSliceActions.updateCartIconScale());
    //After 500ms rescale cart
    setTimeout(() => {
      dispatch(uiSliceActions.updateCartIconScale());
    }, 500);
  };

  return addToCart;
};

export default useAddToCart;
