import { useNavigate } from "react-router-dom";
import CountdownTimer from "./Countdown";

export function Buyer() {
    const navigate=useNavigate();
    let date=new Date();
    const products = [
        {
            id: 1,
            product: "Manjushree Brand Sona Masuri Raw Rice",
            index:2750/2,
            price: "₹2750/QTL",
            quantity: "134.75 MT",
            date:`${date.toDateString()+","+date.toLocaleTimeString()}`,
            market: "Sonipat Haryana",
        },
        {
            id: 2,
            product: "Non-Basmati Long Grain White Rice-5% Broken",
            index:4000/2,
            price: "₹4000/QTL",
            quantity: "2160 MT",
            date:`${date.toDateString()+","+date.toLocaleTimeString()}`,
            market: "Jalandhar Punjab",
        },
        {
            id: 3,
            product: "Taj Ponni Rice",
            index:2750/2,
            price: "₹2750/QTL",
            quantity: "48 MT",
            date: `${date.toDateString()+","+date.toLocaleTimeString()}`,
            market: "Delhi",
        },
    ];

    return (
    <div>
         <div className="p-2 flex justify-around border-b">
            <div>
                <p className="font-semibold text-2xl">Buyer</p>

            </div>
            <div className="flex flex-col space-1">
                <div className="bg-gray-500 cursor-pointer h-[1.5rem] w-[1.5rem] border rounded-full size-2 text-center" onClick={()=>{
                    navigate('/_myprofile');
                }}>
                    H
                </div>
                Hi Buyer
            </div>
        </div>
        <div className="flex">
            {/* Sidebar for filtering auctions */}
            <div className="w-[25%] p-4 border-r">
                <h2 className="font-semibold text-lg mb-4">Filter Auctions</h2>
                <div className="mb-4">
                    <h3 className="font-semibold">Select Commodity</h3>
                    <div className="flex flex-col">
                        <label><input type="checkbox" /> MUSTARD SEED</label>
                        <label><input type="checkbox" /> Taj Ponni Rice</label>
                        <label><input type="checkbox" /> Fairprice Sona Masuri Ponni Rice Steamed</label>
                        <label><input type="checkbox" /> Manjushree Brand Sona Masuri Raw Rice</label>
                        <label><input type="checkbox" /> Non-Basmati Long Grain White Rice-5% Broken</label>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Select Market</h3>
                    <div className="flex flex-col">
                        <label><input type="checkbox" /> HSWC</label>
                        <label><input type="checkbox" /> KRIBHCO AGRI BUSINESS LIMITED</label>
                    </div>
                </div>
            </div>

            {/* Product auction list */}
            <div className="w-[75%] ">
                <div className="flex justify-evenly">
                <h2 className="font-semibold text-2xl mb-4 mt-10">Upcoming Auctions</h2>
                <h2><CountdownTimer/></h2>
                </div>
                
                <div className="space-y-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-semibold text-xl">{product.product}</h3>
                                    <p className="text-gray-500">{product.quantity}</p>
                                    <p className="text-gray-400">{product.market}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{product.date}</p>
                                    <p className="font-bold">Base Index-{product.index} </p>
                                    <p className="text-sm text-gray-400"> Min Quantity- 50kg </p>
                                    <p className="text-lg text-gray-400">Min Price- {product.price} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
