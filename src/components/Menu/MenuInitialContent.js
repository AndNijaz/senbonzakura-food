import classes from "./MenuInitialContent.module.css";
import smile from "../../Assets/Smile.svg";
import sad from "../../Assets/sad.svg";
import { Fragment } from "react";
import Button from "../UI/Button";
import uiSliceActions from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const MenuInitialContent = (props) => {
  const dispatch = useDispatch();

  const onTryAgainHandler = () => {
    dispatch(uiSliceActions.setStatus("loading"));
    dispatch(uiSliceActions.reInicialize());
  };

  let menuContent = "";

  if (props.status === "successful") {
    menuContent = (
      <Fragment>
        <h1>Start by searching food you might like.</h1>
        <h2> Have fun</h2>
        <div>
          <img src={smile} alt="smile emoji"/>
        </div>
      </Fragment>
    );
  }
  if (props.status === "error") {
    menuContent = (
      <Fragment>
        <h1>Something went wrong!</h1>
        <Button onClick={onTryAgainHandler}> Try again. </Button>
        <div>
          <img src={sad} alt="sad emoji"/>
        </div>
      </Fragment>
    );
  }

  return <div className={classes["menu-initial-content"]}>{menuContent}</div>;
};

export default MenuInitialContent;
