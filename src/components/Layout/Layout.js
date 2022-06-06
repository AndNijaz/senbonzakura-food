import classes from "./Layout.module.css";
import MainNavbar from "../MainNavbar/MainNavbar";

const Layout = (props) => {
  return (
    <div className={classes["layout"]}>
      <MainNavbar />
      {props.children}
    </div>
  );
};

export default Layout;
