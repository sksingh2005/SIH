import React, { useState } from "react";

// Mock data for purchased stocks
const purchasedStocks = [
  {
    id: 1,
    product: "Manjushree Brand Sona Masuri Raw Rice",
    price: "₹2750/QTL",
    quantity: "134.75 MT",
    deliveryLocation: "Sonipat Haryana",
    deliveryStatus: "In Transit",
    deliveryDate: "Expected by: 12th Sep 2024",
  },
  {
    id: 2,
    product: "Non-Basmati Long Grain White Rice-5% Broken",
    price: "₹4000/QTL",
    quantity: "2160 MT",
    deliveryLocation: "Jalandhar Punjab",
    deliveryStatus: "Dispatched",
    deliveryDate: "Expected by: 15th Sep 2024",
  },
  {
    id: 3,
    product: "Taj Ponni Rice",
    price: "₹3100/QTL",
    quantity: "48 MT",
    deliveryLocation: "Delhi",
    deliveryStatus: "Delivered",
    deliveryDate: "Delivered on: 5th Sep 2024",
  },
];

export function Profile() {
  const [user, setUser] = useState({
    id: 101,
    name: "Shashank",
    email: "shank@example.com",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Section */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a8.25 8.25 0 0115 0"
        />
            </svg>
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {/* Purchased Stocks Section */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Purchased Stocks</h2>
        {purchasedStocks.length > 0 ? (
          <div className="space-y-4">
            {purchasedStocks.map((stock) => (
              <div key={stock.id} className="border p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{stock.product}</h3>
                    <p className="text-gray-500">Quantity: {stock.quantity}</p>
                    <p className="text-gray-400">Price: {stock.price}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400">
                      Location: {stock.deliveryLocation}
                    </p>
                    <p className=" font-bold text-sm text-gray-600 sm:text-2xl">
                      Status: {stock.deliveryStatus}
                    </p>
                    <p className="text-sm text-gray-600">{stock.deliveryDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No stocks purchased yet.</p>
        )}
      </div>
    </div>
  );
}
