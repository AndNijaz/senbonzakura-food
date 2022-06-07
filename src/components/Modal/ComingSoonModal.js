import classes from "./ComingSoonModal.module.css";
import oops from "../../Assets/oops.svg";
import sadFace from "../../Assets/sad.svg";

const ComingSoonModal = () => {
  return (
    <div className={classes["coming-soon-modal"]}>
      <div className={classes["coming-soon-modal__navbar"]}></div>
      <div className={classes["coming-soon-modal__body"]}>
        <div className={classes["body__left-side"]}>
          <img src={oops} />
        </div>
        <div className={classes["right-side"]}>
          <h1>Sorry, this feature is coming soon.</h1>
          <div>
            <img src={sadFace} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
