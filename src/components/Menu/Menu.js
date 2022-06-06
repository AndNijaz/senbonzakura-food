import classes from "./Menu.module.css";
import MenuList from "./MenuList";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const page = useSelector((state) => state.ui.page);
  // const navigate = useNavigate();

  // const queryPrams = new URLSearchParams(location.search);
  // const sort = queryPrams.get("sort");

  return (
    <main className={classes["menu-main"]}>
      <section
        className={`${classes["menu__section"]} ${classes["menu__left-side"]}`}
      >
        <div className={classes["menu__label"]}>
          <h1>MENU</h1>
          <h1>{page + 1}</h1>
        </div>
        <MenuList foodList={DUMMY_FOOD} page={page} />
      </section>
      <section
        className={`${classes["menu__section"]} ${classes["menu__right-side"]}`}
      >
        <Outlet />
      </section>
    </main>
  );
};

export default Menu;
