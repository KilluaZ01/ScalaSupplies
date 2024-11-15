import React from "react";

const StockAvailability = () => {
  // Example data
  const totalStock = 2400;
  const availableStock = 1600;
  const lowStock = 500;
  const outOfStock = 300;

  const lowStockItems = [
    { name: "MacBook Pro 14-inch", quantity: 22, brand: "Apple Inc." },
    { name: "Dell Inspiron", quantity: 12, brand: "Dell Inc." },
    { name: "HP Spectre 360", quantity: 19, brand: "HP Inc." },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Stock Availability</h2>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="text-4xl font-bold mb-1">{totalStock}</div>
      <p className="text-gray-500 mb-4">Total Stock</p>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3/4 h-3 flex rounded-full overflow-hidden">
          <div
            style={{ width: `${(availableStock / totalStock) * 100}%` }}
            className="bg-blue-500"
          ></div>
          <div
            style={{ width: `${(lowStock / totalStock) * 100}%` }}
            className="bg-yellow-500"
          ></div>
          <div
            style={{ width: `${(outOfStock / totalStock) * 100}%` }}
            className="bg-red-500"
          ></div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>{" "}
          Available
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span> Low
          Stock
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> Out of
          Stock
        </div>
      </div>

      {/* Low Stock Items */}
      <h3 className="text-sm font-semibold mb-2">Low Stock</h3>
      <div>
        {lowStockItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm text-gray-700 mb-1"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>{item.name}</span>
            </div>
            <span>{item.quantity}</span>
            <span className="text-gray-500">{item.brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockAvailability;
