import React from 'react';

export  function Services() {
    const services = [
        { id: 1, name: "Product Listing", description: "Farmers can easily list their crops and products on our app.", icon: "📋" },
        { id: 2, name: "Price Negotiation", description: "Consumers and retailers can directly negotiate prices with farmers, ensuring transparency.", icon: "💬" },
        { id: 3, name: "Transaction Management", description: "Multiple payment options for secure and seamless transactions.", icon: "💳" },
        { id: 4, name: "Market Trends & Analytics", description: "Farmers get insights on market trends to make informed decisions.", icon: "📊" },
        { id: 5, name: "Support & Helpdesk", description: "24/7 support for any issues or queries.", icon: "🛠️" },
        { id: 6, name: "Exclusive Offers", description: "Special discounts for regular buyers and retailers.", icon: "🎁" },
        { id: 7, name: "Sharing & Reviews", description: "Users can share experiences and write reviews to help others.", icon: "✍️" },
        { id: 8, name: "Promotional Campaigns", description: "Promotional campaigns to help farmers market their products.", icon: "📢" },
        { id: 9, name: "Social Media Integration", description: "Connect with buyers via social media.", icon: "🌐" }
    ];

    return (
        <div id='services'>
            <h2 className="text-2xl font-bold mb-4 p-4 visible sm:hidden">Services</h2>
            <div className='h-72 overflow-y-auto overflow-x-hidden sm:hidden auto-scroll'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                        <div key={service.id} className="border border-gray-300 p-4 rounded-lg bg-opacity-90 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:translate-y-1 h-[10rem]">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">{service.icon}</span>
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            </div>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:block services p-4">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => (
                        <div key={service.id} className="border border-gray-300 bg-transparent p-4 rounded-lg bg-opacity-90 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:translate-y-1 h-[10rem]">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">{service.icon}</span>
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                            </div>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
