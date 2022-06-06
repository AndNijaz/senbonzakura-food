import { NavLink } from "react-router-dom";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const { foodName, foodDescription, foodPrice, id: foodID } = props.foodObj;

  return (
    <NavLink
      className={(linkData) =>
        linkData.isActive
          ? `${classes["active"]} ${classes["menu-item"]}`
          : `${classes["menu-item"]}`
      }
      to={`/menu/${foodID}`}
    >
      <div>
        <h2>{foodName}</h2>
        <h2>{foodPrice}$</h2>
      </div>
      <p>{foodDescription}</p>
    </NavLink>
  );
};

export default MenuItem;
