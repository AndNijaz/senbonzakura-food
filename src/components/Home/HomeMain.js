import classes from "./HomeMain.module.css";

const HomeMain = () => {
  return (
    <div className={classes["left-side-main"]}>
      <h2>
        A <span>Good Food</span> Choices are <br />
        <span>good investments.</span>
      </h2>
      <p>
        Senbonzakura food makes think of big family dinners. After a good dinner
        one can forgive anbody, even one's own relations.
      </p>
      <div className={classes["search-container"]}>
        <input type="text" placeholder="Search here"></input>
        <select name="food" id="food">
          <option value="food">Food</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
    </div>
  );
};

export default HomeMain;
