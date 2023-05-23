import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

const FaqSection = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows you to return the product within 30 days of purchase if you are not satisfied. Please ensure the product is in its original condition and packaging for a smooth return process.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track the progress of your package on our website or the shipping carrier's website.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on the destination. Please check our international shipping policy for more details.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit cards, debit cards, PayPal, and Apple Pay. You can choose your preferred payment option during the checkout process.",
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="w-full"
            >
                {faqs.map((faq, index) => (
                    <SwiperSlide key={index} className="text-left">
                        <div className="bg-white rounded shadow-xl p-4">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FaqSection;
