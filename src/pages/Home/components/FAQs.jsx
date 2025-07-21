import React from 'react';

const faqs = [
    {
        question: 'How do I book a lesson?',
        answer: 'Find your preferred tutor, click on their profile, and book a lesson at your convenient time.',
    },
    {
        question: 'How do I become a tutor?',
        answer: 'Click on "Join as a Tutor" and complete the registration process with your details and experience.',
    },
    {
        question: 'Is there a cancellation policy?',
        answer: 'Yes, you can cancel a booked lesson 24 hours before the scheduled time without any charges.',
    },
];

const FAQs = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow bg-base-200 rounded-box">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;
