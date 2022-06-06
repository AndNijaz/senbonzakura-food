import classes from "./BottomElements.module.css";
import delivery from "../../Assets/DeliveryMan.svg";
import cash from "../../Assets/Cash.svg";
import cart from "../../Assets/CartYellow.svg";

const ButtonElements = (props) => {
  const foodObject = props.foodObject;

  return (
    <div className={classes["bottom__elements"]}>
      <div>
        <img src={delivery} />
        <div>
          <h2>{foodObject.deliveryTime} min</h2>
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
