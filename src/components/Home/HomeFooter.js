import classes from "./HomeFooter.module.css";

const HomeFooter = () => {
  return (
    <footer>
      <div className={classes["footer-block"]}>
        <h2>20k+</h2>
        <span>Orders completed</span>
      </div>
      <div className={classes["footer-block"]}>
        <h2>40k+</h2>
        <span>Regular visitor</span>
      </div>
      <div className={classes["footer-block"]}>
        <h2>15k+</h2>
        <span>Happy customers</span>
      </div>
    </footer>
  );
};

export default HomeFooter;
