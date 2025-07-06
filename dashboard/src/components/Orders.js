// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;






import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css"; // Create this CSS file

const Orders = () => {
  const [activeTab, setActiveTab] = useState("today");

  // Sample order data
  const orderHistory = {
    today: [],
    pending: [
      {
        id: "ORD12345",
        type: "BUY",
        symbol: "RELIANCE",
        quantity: 5,
        price: 2456.75,
        status: "Pending",
        time: "10:15 AM"
      }
    ],
    completed: [
      {
        id: "ORD12344",
        type: "SELL",
        symbol: "TATASTEEL",
        quantity: 10,
        price: 112.45,
        status: "Completed",
        time: "Yesterday, 2:30 PM"
      },
      {
        id: "ORD12343",
        type: "BUY",
        symbol: "INFY",
        quantity: 3,
        price: 1550.20,
        status: "Completed",
        time: "Mar 15, 11:45 AM"
      }
    ],
    cancelled: [
      {
        id: "ORD12342",
        type: "BUY",
        symbol: "HDFCBANK",
        quantity: 2,
        price: 1520.50,
        status: "Cancelled",
        time: "Mar 14, 9:30 AM"
      }
    ]
  };

  const renderOrderCard = (order) => (
    <div className="order-card" key={order.id}>
      <div className="order-header">
        <span className={`order-type ${order.type.toLowerCase()}`}>
          {order.type}
        </span>
        <span className="order-symbol">{order.symbol}</span>
        <span className="order-status">{order.status}</span>
      </div>
      <div className="order-details">
        <div>
          <span>Quantity:</span>
          <strong>{order.quantity}</strong>
        </div>
        <div>
          <span>Price:</span>
          <strong>₹{order.price.toFixed(2)}</strong>
        </div>
        <div>
          <span>Total:</span>
          <strong>₹{(order.quantity * order.price).toFixed(2)}</strong>
        </div>
      </div>
      <div className="order-footer">
        <span className="order-id">#{order.id}</span>
        <span className="order-time">{order.time}</span>
        {order.status === "Pending" && (
          <button className="cancel-btn">Cancel Order</button>
        )}
      </div>
    </div>
  );

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Orders</h1>
        <div className="order-tabs">
          <button
            className={`tab ${activeTab === "today" ? "active" : ""}`}
            onClick={() => setActiveTab("today")}
          >
            Today's Orders
          </button>
          <button
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
          <button
            className={`tab ${activeTab === "cancelled" ? "active" : ""}`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>
      </div>

      <div className="orders-content">
        {orderHistory[activeTab].length > 0 ? (
          <div className="orders-list">
            {orderHistory[activeTab].map(renderOrderCard)}
          </div>
        ) : (
          <div className="no-orders">
            <div className="empty-state">
              <img
                src="/images/no-orders.svg"
                alt="No orders"
                className="empty-image"
              />
              <h3>No {activeTab} orders found</h3>
              <p>
                {activeTab === "today"
                  ? "You haven't placed any orders today"
                  : `You don't have any ${activeTab} orders`}
              </p>
              <Link to="/" className="btn primary-btn">
                Start Trading
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="quick-actions">
        <Link to="/buy" className="action-btn buy-btn">
          <span>+</span> New Buy Order
        </Link>
        <Link to="/sell" className="action-btn sell-btn">
          <span>-</span> New Sell Order
        </Link>
      </div>
    </div>
  );
};

export default Orders;
