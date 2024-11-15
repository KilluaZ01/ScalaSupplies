import React from "react";

const OrderTable = () => {
  const orders = [
    {
      id: "ABC2429Z",
      category: "Electronics",
      deliveryTime: "22/09/2024",
      destination: "USA",
      fee: "$1000",
      status: "Delivered",
    },
    {
      id: "ALX0007P",
      category: "Furniture",
      deliveryTime: "22/09/2024",
      destination: "Canada",
      fee: "$1290",
      status: "Pending",
    },
    {
      id: "ACW1239L",
      category: "Clothing",
      deliveryTime: "22/09/2024",
      destination: "Nepal",
      fee: "$2500",
      status: "Shipping",
    },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case "Delivered":
        return (
          <span
            style={{
              backgroundColor: "#d4edda",
              color: "#28a745",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Delivered
          </span>
        );
      case "Pending":
        return (
          <span
            style={{
              backgroundColor: "#fff3cd",
              color: "#ffc107",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Pending
          </span>
        );
      case "Shipping":
        return (
          <span
            style={{
              backgroundColor: "#d1ecf1",
              color: "#17a2b8",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Shipping
          </span>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        fontSize: "12px",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f8f9fa", textAlign: "left" }}>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            <input type="checkbox" />
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Order Id
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Category
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Delivery Time
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Destination
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Fee
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #dee2e6" }}>
            <td style={{ padding: "10px" }}>
              <input type="checkbox" />
            </td>
            <td style={{ padding: "10px" }}>{order.id}</td>
            <td style={{ padding: "10px" }}>{order.category}</td>
            <td style={{ padding: "10px" }}>{order.deliveryTime}</td>
            <td style={{ padding: "10px" }}>{order.destination}</td>
            <td style={{ padding: "10px" }}>{order.fee}</td>
            <td style={{ padding: "10px" }}>{getStatusLabel(order.status)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
