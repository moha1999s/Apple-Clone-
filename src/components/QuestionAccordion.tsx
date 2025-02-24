"use client";
import arrowUp from "@/assets/images/up-arrow-svgrepo-com.svg";
import arrowDown from "@/assets/images/down-arrow-download-svgrepo-com.svg";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
    questionAnswer?: { // ✅ Made optional to fix the error
        question: string;
        answer: string;
    };
}

const QuestionAccordion: React.FC<Props> = ({ questionAnswer }) => {
    if (!questionAnswer) {
        return;
    }

    const [showAnswer, setShowAnswer] = useState(false); // ✅ Fixed useState initialization
    const { question, answer } = questionAnswer; // ✅ Destructuring after check

    return (
        <div className="border-b border-gray-300 p-4 md:mx-52">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowAnswer(!showAnswer)} // ✅ Toggle answer visibility on click
            >
                <h2 className="font-semibold text-xl  md:text-2xl">{question}</h2>
                <Image
                    src={showAnswer ? arrowUp : arrowDown} // ✅ Swap the arrow based on the state
                    width={20}
                    height={20}
                    alt="Toggle Answer"
                    className="transition-transform duration-300"
                />
            </div>

            {/* ✅ Corrected the way to show and hide the answer */}
            {showAnswer && (
                <p className="text-gray-600 max-w-[800px] py-3">{answer}</p>
            )}
        </div>
    );
};

export default QuestionAccordion;
