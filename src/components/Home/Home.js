import classes from "./Home.module.css";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";
import MenuPicture from "../../Assets/MenuPicture.svg";

const Home = () => {
  return (
    <main className={classes["home-main"]}>
      <section
        className={`${classes["home__section"]} ${classes["home__left-side"]}`}
      >
        <h1>SENBONZAKURA FOOD</h1>
        <HomeMain />
        <HomeFooter />
      </section>
      <section
        className={`${classes["home__section"]} ${classes["home__right-side"]}`}
      >
        <div className={classes["main-picture__holder"]}>
          <img src={MenuPicture} />
        </div>
      </section>
    </main>
  );
};
export default Home;
