import classes from "./MessageModal.module.css";
import ModalNavbar from "./ModalNavbar";
import { useSelector } from "react-redux";
import sad from "../../Assets/sad.svg";
import smile from "../../Assets/Smile.svg";

const MessageModal = () => {
  const type = useSelector((state) => state.ui.messageType);
  const message = useSelector((state) => state.ui.messageMessage);

  const img = type === "sad" ? sad : smile;

  return (
    <div className={classes["message-modal"]}>
      <ModalNavbar />
      <div className={classes["message-modal__body"]}>
        <h1>{message}</h1>
        <img src={img} alt={`${type} smile`} />
      </div>
    </div>
  );
};

export default MessageModal;
