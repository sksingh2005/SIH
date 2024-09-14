import { useState } from "react";

// Seller Profile Component
export function SellerProfile() {
  const [seller, setSeller] = useState({
    name: "Raju",
    email: "raju@example.com",
    location: "Haryana",
  });

  const [listedItems, setListedItems] = useState([
    { id: 1, product: "Wheat", quantity: "200 MT",location:"Sonipat", status: "Approved" },
    { id: 2, product: "Rice", quantity: "100 MT",location:"Sonipat", status: "Pending Approval" },
  ]);

  const [newItem, setNewItem] = useState({ product: "", quantity: "" ,location:" "});

  // Function to handle adding a new item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.product && newItem.quantity) {
      setListedItems([
        ...listedItems,
        { id: listedItems.length + 1, ...newItem, status: "Pending Approval" },
      ]);
      setNewItem({ product: "", quantity: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Seller Profile</h1>

      {/* Seller Information */}
      <div className="mt-4 border  p-4 rounded-lg shadow-md">
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
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <p className="mt-2">Name: {seller.name}</p>
        <p>Email: {seller.email}</p>
        <p>Location: {seller.location}</p>
      </div>

      {/* Listed Items */}
      <div className="mt-4 border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Listed Items</h2>
        <ul className="mt-2">
          {listedItems.map((item) => (
            <li
              key={item.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.product}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-gray-500">Location: {item.location}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  item.status === "Approved"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Item */}
      <div className="mt-4 border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Add New Item</h2>
        <form className="mt-2" onSubmit={handleAddItem}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Product Name</label>
            <input
              type="text"
              value={newItem.product}
              onChange={(e) => setNewItem({ ...newItem, product: e.target.value })}
              className="border p-2 rounded"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold">Quantity (MT)</label>
            <input
              type="number"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: e.target.value })
              }
              className="border p-2 rounded"
              placeholder="Enter quantity in MT"
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex space-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-current" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 20s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10zm0-13a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
            </svg>
            <label className="mb-2 font-semibold">Location</label>
            </div>
            
            

            <input
              type="text"
              value={newItem.location}
              onChange={(e) =>
                setNewItem({ ...newItem, location: e.target.value })
              }
              className="border p-2 rounded"
              placeholder="Enter location"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
