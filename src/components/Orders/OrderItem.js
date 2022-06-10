import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const order = props.order;
  const cart = order.cart;
  const orderedFood = cart.map((food) => food.foodName).join(", ");

  return (
    <div className={classes["order__item"]}>
      <div>
        <div>{order.orderID}</div>
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
