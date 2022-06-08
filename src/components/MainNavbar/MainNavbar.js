import classes from "./MainNavbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Magnifier from "../../Assets/Magnifier.svg";
import SmallCart from "../../Assets/SmallCart.svg";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import Backdrop from "../Modal/Backdrop";
import CartModal from "../Modal/CartModal";
import uiSliceActions from "../../store/ui-slice";
import ComingSoonModal from "../Modal/ComingSoonModal";

const MainNavbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(totalAmount);
  const dispatch = useDispatch();
  const comingSoonModalOpen = useSelector(
    (state) => state.ui.comingSoonModalOpen
  );
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

  const onComingSoonHadnler = () => {
    dispatch(uiSliceActions.updateComingSoonModal());
  };

  const scaleClass = () => {
    return cartIconScale ? classes["cart-sacle"] : "";
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
      {comingSoonModalOpen &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop")
        )}
      {comingSoonModalOpen &&
        ReactDOM.createPortal(
          <ComingSoonModal />,
          document.getElementById("modal")
        )}
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
            onClick={onComingSoonHadnler}
          >
            ORDERS
          </NavLink>
          <NavLink
            className={(linkData) => isLinkActive(linkData)}
            to="/login"
            onClick={onComingSoonHadnler}
          >
            LOGIN
          </NavLink>
          <div onClick={onComingSoonHadnler}>
            <img src={Magnifier} alt="search icon" />
          </div>
          <div onClick={onCartClickHandler} className={scaleClass()}>
            <img src={SmallCart} alt="cart icon" />
          </div>
          {totalAmount === 0 ? (
            ""
          ) : (
            <div className={`${classes["cart-amount"]} ${scaleClass()}`}>
              {totalAmount}
            </div>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavbar;
