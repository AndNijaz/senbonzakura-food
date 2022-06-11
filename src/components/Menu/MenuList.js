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

//This logic will filter array. Array ites should be diveded in nested arrays. Each nested array should have 5 items.
const formatArray = (array) => {
  const pages = Math.ceil(array.length / 5);

  const arr = [];
  let helpArr = [];

  let c = 0;

  for (let i = 0; i < pages; i++) {
    for (let j = c; j < c + 5; j++) {
      if (!array[j]) break;
      helpArr.push(array[j]);
    }
    c += 5;
    arr.push(helpArr);
    helpArr = [];
  }

  return arr;
};

const MenuList = (props) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [foodList, setFoodList] = useState([]);

  const page = useSelector((state) => state.ui.page);

  const dispatch = useDispatch();

  const foodArray = props.foodList;

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const queryPrams = new URLSearchParams(location.search);

  //Determination of current page
  useEffect(() => {
    let currentPage = queryPrams.get("page");
    if (!currentPage) return;

    currentPage = [...currentPage];
    currentPage = currentPage
      .filter((pageChar) => pageChar >= 0)
      .join()
      .replace(",", "");

    setCurrentPage(currentPage);
    dispatch(uiSliceActions.updatePage(+currentPage - 1));
  }, [currentPage, dispatch]);
  // useEffect(() => {
  //   let currentPage = queryPrams.get("page");
  //   if (currentPage) {
  //     currentPage = [...currentPage];
  //     currentPage = currentPage
  //       .filter((pageChar) => pageChar >= 0)
  //       .join()
  //       .replace(",", "");
  //   }
  //   console.log(currentPage);
  //   setCurrentPage(currentPage);
  //   dispatch(uiSliceActions.updatePage(+currentPage - 1));
  // }, [currentPage]);

  const sort = queryPrams.get("sort");

  //displayPageIndex is index of nested array which should be shown, for that reason we use -1. [[arr1], [arr2], [arr3]] --> If we want to take arr2, displayPageIndex would have to be 1;
  const displayPageIndex = currentPage ? currentPage - 1 : page;

  useEffect(() => {
    setFoodList(formatArray(foodArray));
  }, [foodArray]);

  //This is pagination logic, it has some bugs as it is said in "ReadMe"
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
  //This is sorting logic, it has same problems like pagination.
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

  //This is the number of pages. With this we determine when we have to disable pagination button.
  const maxPage = Math.ceil(foodArray.length) / 5;

  const list =
    foodList[displayPageIndex - 1 < 0 ? 0 : displayPageIndex] &&
    foodList[displayPageIndex - 1 < 0 ? 0 : displayPageIndex].map((foodObj) => (
      <MenuItem key={foodObj.id} foodObj={foodObj} />
    ));

  const buttonBack = displayPageIndex >= 1 && (
    <Button type="button" onClick={onPreviousPageHandler}>
      Page {displayPageIndex}
    </Button>
  );

  return (
    <Fragment>
      <div className={classes["menu-list"]}>{list}</div>
      <div className={classes["menu-list__buttons"]}>
        {buttonBack}
        <Button
          type="button"
          onClick={onSortPageHandler}
          className={classes["sort-button"]}
        >
          {sort === "asc" ? `Descending` : `Ascending`}
        </Button>
        <Button
          type="button"
          onClick={onNextPageHandler}
          disabled={displayPageIndex === maxPage - 1 ? true : false}
        >
          Page {displayPageIndex + 2}
        </Button>
      </div>
    </Fragment>
  );
};

export default MenuList;
