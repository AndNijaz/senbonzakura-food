import classes from "./MenuList.module.css";
import MenuItem from "./MenuItem";
import Button from "../UI/Button";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uiSliceActions from "../../store/ui-slice";

const formatArray = (array) => {
  const pages = Math.ceil(array.length / 5);

  const arr = [];
  let helpArr = [];

  let c = 0;

  for (let i = 0; i < pages; i++) {
    for (let j = c; j < c + 5; j++) {
      helpArr.push(array[j]);
    }
    c += 5;
    arr.push(helpArr);
    helpArr = [];
  }

  return arr;
};

const MenuList = (props) => {
  const page = props.page;
  const dispatch = useDispatch();
  const foodArray = props.foodList;

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    setFoodList(formatArray(foodArray));
  }, [foodArray]);

  const queryPrams = new URLSearchParams(location.search);
  const sort = queryPrams.get("sort");

  const onNextPageHandler = () => {
    dispatch(uiSliceActions.updatePage("forward"));
  };
  const onPreviousPageHandler = () => {
    dispatch(uiSliceActions.updatePage("backward"));
  };
  const onSortPageHandler = () => {
    console.log(params.foodId);
    console.log(
      `/menu/${params.foodId ? params.foodId + "/" : ""}?sort=${
        sort === "asc" ? "desc" : "asc"
      }`
    );
    navigate(
      `/menu/${params.foodId ? params.foodId + "/" : ""}?sort=${
        sort === "asc" ? "desc" : "asc"
      }`
    );
    let foodListPart = foodList[page];
    let foodListSort = foodList;

    const sortFoodList = (sort) => {
      foodListPart = foodListPart.sort((a, b) =>
        sort === "asc" ? a.foodPrice - b.foodPrice : b.foodPrice - a.foodPrice
      );
      foodListSort[page] = foodListPart;
      setFoodList(foodListSort);
    };
    sort === "asc" ? sortFoodList("asc") : sortFoodList("desc");
  };

  return (
    <Fragment>
      <div className={classes["menu-list"]}>
        {foodList[page]
          ? foodList[page].map((foodObj) => (
              <MenuItem key={foodObj.id} foodObj={foodObj} />
            ))
          : ""}
      </div>
      <div className={classes["menu-list__buttons"]}>
        {page >= 1 && (
          <Button type="button" onClick={onPreviousPageHandler}>
            Page {page}
          </Button>
        )}
        <Button
          type="button"
          onClick={onSortPageHandler}
          className={classes["sort-button"]}
        >
          {sort === "asc" ? `Descending` : `Ascending`}
        </Button>
        <Button type="button" onClick={onNextPageHandler}>
          Page {page + 2}
        </Button>
      </div>
    </Fragment>
  );
};

export default MenuList;
