import classes from "./MainNavbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Magnifier from "../../Assets/Magnifier.svg";
import SmallCart from "../../Assets/SmallCart.svg";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import Backdrop from "../Modal/Backdrop";
import CartModal from "../Modal/CartModal";
import uiSliceActions from "../../store/ui-slice";
import { updateCartIconScaleAction } from "../../store/ui-slice";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const cartModalOpen = useSelector((state) => state.ui.cartModalOpen);
  const cartIconScale = useSelector((state) => state.ui.cartIconScale);

  const location = useLocation();
  const pathname = location.pathname;

  const isLinkActive = (linkData) => {
    return linkData.isActive ? classes["active"] : "";
  };

  const onCartClickHandler = () => {
    dispatch(uiSliceActions.updateCartModalOpen());
  };

  return (
    <Fragment>
      {cartModalOpen &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop")
        )}
      {cartModalOpen &&
        ReactDOM.createPortal(<CartModal />, document.getElementById("modal"))}
      <nav
        className={` ${
          pathname.slice(0, 5) === "/menu" ? classes["menu-active"] : ""
        } ${classes["main-navbar"]}`}
      >
        <div className={classes["main-navbar__links"]}>
          <NavLink className={(linkData) => isLinkActive(linkData)} to="/home">
            HOME
          </NavLink>
          <NavLink className={(linkData) => isLinkActive(linkData)} to="/menu">
            MENU
          </NavLink>
          <NavLink
            className={(linkData) => isLinkActive(linkData)}
            to="/orders"
          >
            ORDERS
          </NavLink>
          <NavLink className={(linkData) => isLinkActive(linkData)} to="/login">
            LOGIN
          </NavLink>
          <div>
            <img src={Magnifier} alt="search icon" />
          </div>
          <div
            onClick={onCartClickHandler}
            className={cartIconScale ? classes["cart-sacle"] : ""}
          >
            <img src={SmallCart} alt="cart icon" />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavbar;
