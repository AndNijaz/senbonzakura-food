import classes from "./HomeMain.module.css";
import Backdrop from "../Modal/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import uiSliceActions from "../../store/ui-slice";
import ComingSoonModal from "../Modal/ComingSoonModal";

const HomeMain = () => {
  const comingSoonModalOpen = useSelector(
    (state) => state.ui.comingSoonModalOpen
  );

  const dispatch = useDispatch();

  const onSearchFocusHandler = () => {
    dispatch(uiSliceActions.updateComingSoonModal());
  };

  return (
    <div className={classes["left-side-main"]}>
      {comingSoonModalOpen && <Backdrop />}
      {comingSoonModalOpen && <ComingSoonModal />}
      <h2>
        A <span>Good Food</span> Choices are <br />
        <span>good investments.</span>
      </h2>
      <p>
        Senbonzakura food makes think of big family dinners. After a good dinner
        one can forgive anbody, even one's own relations.
      </p>
      <div className={classes["search-container"]}>
        <input
          type="text"
          placeholder="Search here"
          onFocus={onSearchFocusHandler}
        />
        <select name="food" id="food" disabled>
          <option value="food">Food</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
    </div>
  );
};

export default HomeMain;
