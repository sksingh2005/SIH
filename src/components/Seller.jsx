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
      <div className="mt-4 border p-4 rounded-lg shadow-md">
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
            <label className="mb-2 font-semibold">Location</label>
            <input
              type="number"
              value={newItem.location}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: e.target.value })
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
