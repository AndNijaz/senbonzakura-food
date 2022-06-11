import { useDispatch } from "react-redux";
import uiSliceActions from "../store/ui-slice";

const useCloseCart = () => {
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(uiSliceActions.closeModal());
  };

  return closeCart;
};

export default useCloseCart;
