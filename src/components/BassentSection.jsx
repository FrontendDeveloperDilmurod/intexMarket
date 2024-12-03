import React from 'react';
import bassen1 from '../assets/bassen1.png';
import bassen2 from '../assets/bassen2.png';
import bassen3 from '../assets/bassen3.png';
import bassen4 from '../assets/bassen4.png';

function BassentSection() {
    const products = [
        { id: 1, title: 'Металлический каркас', dimensions: '270 см × 60 см', price: '1,090,000 сум', image: bassen1, badge: 'Рекомендуем' },
        { id: 2, title: 'Рамка призмы', dimensions: '305 см × 76 см', price: '1,520,000 сум', image: bassen4, badge: 'Скидка' },
        { id: 3, title: 'Прямоугольная рама', dimensions: '305 см × 220 см × 84 см', price: '1,520,000 сум', image: bassen2, badge: 'Рекомендуем' },
        { id: 4, title: 'Металлический каркас', dimensions: '270 см × 60 см', price: '1,090,000 сум', image: bassen1, badge: 'Рекомендуем' },
        { id: 5, title: 'Рамка призмы', dimensions: '305 см × 76 см', price: '1,520,000 сум', image: bassen4, badge: 'Скидка' },
        { id: 6, title: 'Прямоугольная рама', dimensions: '400 см × 200 см × 100 см', price: '1,520,000 сум', image: bassen3, badge: 'Рекомендуем' },
        { id: 7, title: 'Металлический каркас', dimensions: '270 см × 60 см', price: '1,090,000 сум', image: bassen1, badge: 'Нет в наличии' },
        { id: 8, title: 'Рамка призмы', dimensions: '305 см × 76 см', price: '1,520,000 сум', image: bassen4, badge: 'Рекомендуем' },
        { id: 9, title: 'Прямоугольная рама', dimensions: '305 см × 220 см × 84 см', price: '1,520,000 сум', image: bassen2, badge: 'Нет в наличии' },
        { id: 10, title: 'Металлический каркас', dimensions: '270 см × 60 см', price: '1,090,000 сум', image: bassen1, badge: 'Рекомендуем' },
        { id: 11, title: 'Рамка призмы', dimensions: '305 см × 76 см', price: '1,520,000 сум', image: bassen4, badge: 'Рекомендуем' },
        { id: 12, title: 'Прямоугольная рама', dimensions: '400 см × 200 см × 100 см', price: '1,520,000 сум', image: bassen3, badge: 'Нет в наличии' },
    ];

    return (
        <div>
            <div className='max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="border rounded-lg shadow-lg p-4 relative">
                                {/* Badge */}
                                {product.badge && (
                                    <span
                                        className={`absolute top-2 left-2 px-3 py-1 text-white text-sm font-bold rounded ${product.badge === 'Рекомендуем'
                                            ? 'bg-green-500'
                                            : product.badge === 'Скидка'
                                                ? 'bg-yellow-500'
                                                : 'bg-red-500'
                                            }`}
                                    >
                                        {product.badge}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-40 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-gray-600">{product.dimensions}</p>
                                <p className="text-lg font-bold text-gray-800 mt-2">{product.price}</p>
                                <button
                                    className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-300"
                                >
                                    Заказать
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Надувные бассейны */}
            <div>
                <div className='mt-24 mb-24'>
                    <div className="flex justify-center items-center bg-[#009398] h-20 text-xl md:text-4xl font-bold text-white sm:m-0 ">
                        <h1>Каркасные бассейны</h1>
                    </div>
                </div>
                <div className='max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.slice(0, 3).map((product) => (
                                <div key={product.id} className="border rounded-lg shadow-lg p-4 relative">
                                    {/* Badge */}
                                    {product.badge && (
                                        <span
                                            className={`absolute top-2 left-2 px-3 py-1 text-white text-sm font-bold rounded ${product.badge === 'Рекомендуем'
                                                ? 'bg-green-500'
                                                : product.badge === 'Скидка'
                                                    ? 'bg-yellow-500'
                                                    : 'bg-red-500'
                                                }`}
                                        >
                                            {product.badge}
                                        </span>
                                    )}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-40 object-cover mb-4"
                                    />
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-gray-600">{product.dimensions}</p>
                                    <p className="text-lg font-bold text-gray-800 mt-2">{product.price}</p>
                                    <button
                                        className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-300"
                                    >
                                        Заказать
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BassentSection;
