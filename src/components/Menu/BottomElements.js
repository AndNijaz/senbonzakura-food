import classes from "./BottomElements.module.css";
import delivery from "../../Assets/DeliveryMan.svg";
import cash from "../../Assets/Cash.svg";
import cart from "../../Assets/CartYellow.svg";

const ButtonElements = (props) => {
  const foodObject = props.foodObject;

  /* When I was adding data to an api by fetch post, I forgot to add deliver time, so for right now, I am using random values hence this doesn't break bussines logic*/
  const deliveryTime =
    Math.round((Math.floor(Math.random() * 200) + 50) / 10) * 10;

  return (
    <div className={classes["bottom__elements"]}>
      <div>
        <img src={delivery} />
        <div>
          <h2>{deliveryTime} min</h2>
          <h2>Delivery</h2>
          <span>time</span>
        </div>
      </div>
      <div>
        <img src={cash} />
        <div>
          <h2>{foodObject.initialPrice}$</h2>
          <h2>Total</h2>
          <span>Price</span>
        </div>
      </div>
      <div>
        <img src={cart} />
        <div>
          <h2>x{foodObject.foodAmount}</h2>
          <h2>Total</h2>
          <span>Amount</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonElements;
