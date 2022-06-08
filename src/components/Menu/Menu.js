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

let DUMMY_FOOD = [
  {
    id: "f1",
    foodName: "SENBON PIZZA",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 20,
    foodAmount: 1,
    initialPrice: 20,
  },
  {
    id: "f2",
    foodName: "SENBON PASTA",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 10,
    foodAmount: 1,
    initialPrice: 10,
  },
  {
    id: "f3",
    foodName: "ZAKURA SPHAGETTI",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 20,
    foodAmount: 1,
    initialPrice: 20,
  },
  {
    id: "f4",
    foodName: "ZANGETSU MEAT",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 50,
    foodAmount: 1,
    initialPrice: 50,
  },
  {
    id: "f5",
    foodName: "NARUTO RAMEN",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 25,
    foodAmount: 1,
    initialPrice: 25,
  },
  {
    id: "f6",
    foodName: "RJUJIN FLAME",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 90,
    foodAmount: 1,
    initialPrice: 90,
  },
  {
    id: "f7",
    foodName: "KEGEYOSI",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 150,
    foodAmount: 1,
    initialPrice: 150,
  },
  {
    id: "f8",
    foodName: "GETSUGATENSHO",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 130,
    foodAmount: 1,
    initialPrice: 130,
  },
  {
    id: "f9",
    foodName: "BENIHIME",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 140,
    foodAmount: 1,
    initialPrice: 140,
  },
  {
    id: "f10",
    foodName: "DANGO",
    foodDescription:
      "Lorem ipsum dolor sit ament, consectetur adipiscing elit. Quisque eu euismod odio.",
    foodPrice: 25,
    foodAmount: 1,
    initialPrice: 25,
  },
];

const Menu = () => {
  //This one is used for reloading page when it comes to error
  const reInicialize = useSelector((state) => state.ui.reload);
  //

  //This one determines if the data is fetched or not
  const status = useSelector((state) => state.ui.status);

  //
  const params = useParams();

  //If this is true it will display default page / if not, it will display page of some id
  let menuContent = true;
  //Logic for above description
  Object.keys(params)[0] ? (menuContent = false) : (menuContent = true);

  //FoodList when its fetched shoud be set
  const [foodList, setFoodList] = useState([]);
  //
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
      //updating status
      dispatch(uiSliceActions.setStatus("successful"));
    };

    //Calling function for getting foodlist
    getFoodList().catch((err) => {
      dispatch(uiSliceActions.setStatus("error"));
    });
  }, [reInicialize]);

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
