import classes from "./Menu.module.css";
import MenuList from "./MenuList";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import foodSliceActions from "../../store/food-slice";
import { useParams } from "react-router-dom";
import MenuInitialContent from "./MenuInitialContent";
import LoadingSpinner from "../UI/LoadingSpinner";
import uiSliceActions from "../../store/ui-slice";

const Menu = () => {
  //This one is used for reloading page if it comes to error (When try again is clicked);
  const reInicialize = useSelector((state) => state.ui.reload);

  //This one determines if the data is fetched or not (it is already determined it only takes that value);
  const status = useSelector((state) => state.ui.status);

  const params = useParams();

  //If this is true it will display default page / if not, it will display page of some id
  let menuContent = true;
  //Logic for above description
  Object.keys(params)[0] ? (menuContent = false) : (menuContent = true);

  //FoodList when its fetched shoud be set
  const [foodList, setFoodList] = useState([]);

  const dispatch = useDispatch();

  //Takes a page
  const page = useSelector((state) => state.ui.page);

  useEffect(() => {
    //Getting food from the server
    const getFoodList = async () => {
      const response = await fetch(
        "https://senbonzakura-food-default-rtdb.firebaseio.com/food.json"
      );
      //Guard clause
      if (!response.ok) throw new Error("Something went wrong!");
      //Data
      const data = await response.json();
      //Final foood list
      const foodList = data[Object.keys(data)[0]];
      //Updating food list in redux store
      dispatch(foodSliceActions.updateFoodList(foodList));
      //Updating foodlist state
      setFoodList(foodList);
      //Updating status
      dispatch(uiSliceActions.setStatus("successful"));
    };

    //Calling function for getting foodlist
    getFoodList().catch(() => {
      dispatch(uiSliceActions.setStatus("error"));
    });
  }, [reInicialize, dispatch]);

  let menuContentComponent = "";

  if (status === "loading") menuContentComponent = <LoadingSpinner />;
  if (status === "successful" && menuContent)
    menuContentComponent = <MenuInitialContent status="successful" />;
  if (status === "error")
    menuContentComponent = <MenuInitialContent status="error" />;

  return (
    <main className={classes["menu-main"]}>
      <section
        className={`${classes["menu__section"]} ${classes["menu__left-side"]}`}
      >
        <div className={classes["menu__label"]}>
          <h1>MENU</h1>
          <h1>{page + 1}</h1>
        </div>
        {status === "loading" ? <LoadingSpinner className="sideSpinner" /> : ""}
        {status === "successful" ? (
          <MenuList foodList={foodList} page={page} />
        ) : (
          ""
        )}
        {status === "error" ? "Error..." : ""}
      </section>
      <section
        className={`${classes["menu__section"]} ${classes["menu__right-side"]}`}
      >
        {menuContentComponent}
        <Outlet />
      </section>
    </main>
  );
};

export default Menu;
