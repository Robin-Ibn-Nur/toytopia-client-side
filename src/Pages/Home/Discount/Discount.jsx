import React from 'react';

const Discount = () => {
    return (
        <section className="bg-pink-100 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Special Discounts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Robot Friend</h3>
                        <p className="text-gray-700 mb-4">
                            Get your own robotic friend and have fun playing together! Limited time offer.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">$29.99</span>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Colorful Blocks</h3>
                        <p className="text-gray-700 mb-4">
                            Build amazing structures with these vibrant and educational blocks. Limited stock available.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">$19.99</span>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Puzzle Adventure</h3>
                        <p className="text-gray-700 mb-4">
                            Embark on an exciting puzzle adventure and challenge your problem-solving skills. Limited offer.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">$14.99</span>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discount;