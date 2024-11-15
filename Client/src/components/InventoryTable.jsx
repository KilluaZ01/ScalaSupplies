import React, { useState } from "react";

const InventoryTable = () => {
  const [orderAdded, setOrderAdded] = useState({});

  const products = [
    {
      product: "Nike Airforce 1",
      sku: "LK-200192",
      onHand: "1,290",
      unitsToReorder: "2,500",
      cost: "$12,200",
    },
    {
      product: "MacBook Pro 14",
      sku: "LK-119928",
      onHand: "90",
      unitsToReorder: "200",
      cost: "$122,200",
    },
    {
      product: "Kitchen Supply",
      sku: "LT-190283",
      onHand: "1,900",
      unitsToReorder: "2,500",
      cost: "$14,200",
    },
    {
      product: "Auto Parts",
      sku: "LT-229102",
      onHand: "990",
      unitsToReorder: "1,550",
      cost: "$20,000",
    },
    {
      product: "Walmart Supply",
      sku: "LT-009218",
      onHand: "880",
      unitsToReorder: "9,050",
      cost: "$12,000",
    },
    {
      product: "Shoes",
      sku: "LT-119203",
      onHand: "1,110",
      unitsToReorder: "2,250",
      cost: "$12,200",
    },
  ];

  const handleOrderClick = (index) => {
    setOrderAdded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
            Product
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            SKU
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            On-hand
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Units to Reorder
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Cost
          </th>
          <th style={{ padding: "10px", borderBottom: "1px solid #dee2e6" }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #dee2e6" }}>
            <td style={{ padding: "10px" }}>{product.product}</td>
            <td style={{ padding: "10px" }}>{product.sku}</td>
            <td style={{ padding: "10px" }}>{product.onHand}</td>
            <td style={{ padding: "10px" }}>{product.unitsToReorder}</td>
            <td style={{ padding: "10px" }}>{product.cost}</td>
            <td style={{ padding: "10px" }}>
              <button
                onClick={() => handleOrderClick(index)}
                style={{
                  backgroundColor: orderAdded[index] ? "#28a745" : "#6c757d",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {orderAdded[index] ? "Order Added" : "Add to Order"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
