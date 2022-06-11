import classes from "./Orders.module.css";
import OrderItem from "./OrderItem";
import { useState, useEffect } from "react";

const Orders = () => {
  const [localStorageOrders, setLocalStorageOrders] = useState([]);

  useEffect(() => {
    let orders = JSON.parse(localStorage.getItem("orders"));
    setLocalStorageOrders(orders);
  }, []);

  return (
    <div className={classes["orders-container"]}>
      <nav>
        <h1> My Activity</h1>
      </nav>
      <div className={classes["orders"]}>
        <nav>
          <div>
            <div>ID</div>
            <div>Ordered Food</div>
          </div>
          <div>
            <div>Total Amount</div>
            <div>Total Price</div>
          </div>
        </nav>

        {localStorageOrders &&
          localStorageOrders.map((order) => (
            <OrderItem
              order={order}
              key={+String(new Date().getTime()).slice(-2) + Math.random()}
            />
          ))}
      </div>
    </div>
  );
};

export default Orders;
