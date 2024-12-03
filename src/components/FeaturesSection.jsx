import React from 'react';

function FeaturesSection() {
    const features = [
        {
            id: 1,
            title: "Бесплатная доставка бассейна",
            description: "Мы ценим наших клиентов, можете быть уверены в качестве нашего сервиса!",
        },
        {
            id: 2,
            title: "Специальная химия в подарок",
            description: "Специальная очищающая химия для бассейна - бесплатно",
        },
        {
            id: 3,
            title: "Гарантия качества",
            description: "Все продукции INTEX являются оригинальными",
        },
    ];

    return (
        <div>
            <div className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-[#009398] text-white p-6 rounded-lg shadow-lg flex flex-col items-start"
                            style={{
                                borderRadius: '0px 40px 0px 40px',
                            }}
                        >
                            <div className='flex gap-4' ><h2 className="text-7xl font-bold mb-4">{feature.id}</h2>
                                <div><h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                                    <p className="text-[16px]">{feature.description}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
