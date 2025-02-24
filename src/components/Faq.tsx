"use client";
import React, { useState } from 'react';
import QuestionAccordion from './QuestionAccordion'; // ✅ Corrected component name

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null); // ✅ Variable to track open question

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question); // ✅ Toggle open question
    };

    const questionAnswer = [
        {
            question: "What is Apple Books?",
            answer:
                "Apple Books is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Apple Books in the App Store."
        },
        {
            question: "How much does Apple Books cost?",
            answer: "The Apple Books app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse."
        },
        {
            question: "Can I play audiobooks on my devices?",
            answer: "Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone."
        },
        {
            question: "Can I pre-order an audiobook or ebook?",
            answer: "Yes. Apple Books makes it easy to find the most anticipated audiobooks and ebooks. Search for the title and select the Pre-Order button to confirm the purchase. The title will be added to your library automatically once it is available. To preview upcoming releases, look for the Coming Soon section in the app."
        },
        {
            question: "Can I gift an audiobook or ebook?",
            answer: "Yes. You can use Apple Books to gift an audiobook or ebook to anyone. Search for the title and select the gift box symbol  to complete the purchase."
        },
        {
            question: "Can I share Apple Books purchases with my family?",
            answer: "You can share your Apple Books purchases with up to five other family members."
        },
        {
            question: "What happened to iBooks?",
            answer: "iBooks is now Apple Books. But don’t worry — any books you purchased on iBooks are in your Apple Books library."
        },
    ];

    return (
        <section className='mt-32 bg-gray-200'>
            <div className="container">
                <div className='flex items-center justify-center'>
                    <div>
                        <h1 className='text-3xl max-w-[540px] mx-1 my-12 md:mt-32 md:max-w-[615px] md:mx-auto md:text-6xl text-center tracking-tighter font-bold md:pb-6'>
                            Questions? Answers.
                        </h1>
                    </div>
                </div>

                <div>
                    {questionAnswer.map((qA) => (
                        <QuestionAccordion questionAnswer={qA} key={qA.question} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
