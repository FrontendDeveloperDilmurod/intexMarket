import React from 'react';

function Footer() {
    return (
        <div className="bg-[#009398] text-white p-6 md:p-8 mt-24">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">Бесплатная доставка</h2>
                <p className="text-lg mb-4">
                    Бесплатная доставка осуществляется в пределах города Ташкент (за пределами города <br /> доставка оплачивается отдельно)
                </p>
                <button
                    className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    );
}

export default Footer;
