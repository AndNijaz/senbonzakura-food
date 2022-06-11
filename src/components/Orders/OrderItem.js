import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const order = props.order;
  const cart = order.cart;
  const orderedFood = cart.map((food) => food.foodName).join(", ");

  return (
    <div className={classes["order__item"]}>
      <div>
        {/*For right now I put random number just for design purposes. It could be done by manipulating states and localStorage.*/}
        <div>{Math.floor(Math.random() * 101)}</div>
        <div>{orderedFood}</div>
      </div>
      <div>
        <div>x{order.totalAmount}</div>
        <div>{order.totalPrice}$</div>
      </div>
    </div>
  );
};

export default OrderItem;
