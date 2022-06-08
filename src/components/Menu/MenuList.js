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

  // arr.unshift([]);
  // console.log(arr);
  return arr;
};

const MenuList = (props) => {
  //Current page
  // const page = props.page;
  const page = useSelector((state) => state.ui.page);
  //
  const [currentPage, setCurrentPage] = useState(null);
  const dispatch = useDispatch();
  //food list from food state
  const foodArray = props.foodList;

  //
  const navigate = useNavigate();
  //
  const location = useLocation();
  //
  const params = useParams();

  const [foodList, setFoodList] = useState([]);

  const queryPrams = new URLSearchParams(location.search);

  useEffect(() => {
    let currentPage = queryPrams.get("page");
    if (currentPage) {
      currentPage = [...currentPage];
      currentPage = currentPage
        .filter((pageChar) => pageChar >= 0)
        .join()
        .replace(",", "");
    }
    console.log(currentPage);
    setCurrentPage(currentPage);
    dispatch(uiSliceActions.updatePage(+currentPage - 1));
  }, [currentPage]);

  const sort = queryPrams.get("sort");

  const displayPage = currentPage ? currentPage - 1 : page;

  console.log("Current page " + currentPage);
  console.log("Display page " + displayPage);
  // dispatch(uiSliceActions.updatePage(displayPage));
  // console.log(displayPage);
  // console.log(foodList[displayPage]);

  useEffect(() => {
    setFoodList(formatArray(foodArray));
  }, [foodArray]);

  const onNextPageHandler = () => {
    let navigateString = "";
    if (sort) {
      navigateString = `/menu/${
        params.foodId ? params.foodId + "/" : ""
      }?page=${page + 2}/?sort=${sort === "asc" ? "desc" : "asc"}`;
    } else
      navigateString = navigateString = `/menu/${
        params.foodId ? params.foodId + "/" : ""
      }?page=${page + 2}`;

    dispatch(uiSliceActions.updatePage("forward"));
    navigate(navigateString);
  };
  const onPreviousPageHandler = () => {
    let navigateString = "";
    if (sort) {
      navigateString = `/menu/${
        params.foodId ? params.foodId + "/" : ""
      }?page=${page}/?sort=${sort === "asc" ? "desc" : "asc"}`;
    } else
      navigateString = navigateString = `/menu/${
        params.foodId ? params.foodId + "/" : ""
      }?page=${page}`;
    dispatch(uiSliceActions.updatePage("backward"));
    navigate(navigateString);
  };
  const onSortPageHandler = () => {
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

  // foodList[displayPage - 1 < 0 ? 0 : displayPage - 1]
  // console.log(displayPage);
  // console.log(displayPage - 1 < 0 ? 0 : displayPage);
  // console.log("experiment " + displayPage - 1 < 0 ? 0 : displayPage - 1);
  console.log(foodList[displayPage - 1 < 0 ? 0 : displayPage]);
  return (
    <Fragment>
      <div className={classes["menu-list"]}>
        {foodList[displayPage - 1 < 0 ? 0 : displayPage]
          ? foodList[displayPage - 1 < 0 ? 0 : displayPage].map((foodObj) => (
              <MenuItem key={foodObj.id} foodObj={foodObj} />
            ))
          : ""}
        {/* {foodList[page]
          ? foodList[page].map((foodObj) => (
              <MenuItem key={foodObj.id} foodObj={foodObj} />
            ))
          : ""} */}
      </div>
      <div className={classes["menu-list__buttons"]}>
        {displayPage >= 1 && (
          <Button type="button" onClick={onPreviousPageHandler}>
            Page {displayPage}
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
          Page {displayPage + 2}
        </Button>
      </div>
    </Fragment>
  );
};

export default MenuList;
