import { useDispatch } from "react-redux";
import uiSliceActions from "../store/ui-slice";

const useMessageModal = () => {
  const dispatch = useDispatch();

  const openMessageModal = (message) => {
    dispatch(
      uiSliceActions.updateMessageModal({
        type: message.type,
        message: message.message,
      })
    );
  };

  return openMessageModal;
};

export default useMessageModal;
