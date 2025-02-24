"use client";
import Image from "next/image";
import React, { useState } from "react";

const basePath = "/Apple-Clone-"; // اسم الريبو على GitHub Pages

interface Props {
  questionAnswer?: {
    question: string;
    answer: string;
  };
}

const QuestionAccordion: React.FC<Props> = ({ questionAnswer }) => {
  if (!questionAnswer) {
    return null; // ✅ Return null instead of nothing
  }

  const [showAnswer, setShowAnswer] = useState(false);
  const { question, answer } = questionAnswer;

  const arrowUp = `${basePath}/assets/images/up-arrow-svgrepo-com.svg`;
  const arrowDown = `${basePath}/assets/images/down-arrow-download-svgrepo-com.svg`;

  return (
    <div className="border-b border-gray-300 p-4 md:mx-52">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="font-semibold text-xl md:text-2xl">{question}</h2>
        <Image
          src={showAnswer ? arrowUp : arrowDown}
          width={20}
          height={20}
          alt="Toggle Answer"
          className={`transition-transform duration-300 ${
            showAnswer ? "rotate-180" : ""
          }`}
        />
      </div>

      {showAnswer && (
        <p className="text-gray-600 max-w-[800px] py-3">{answer}</p>
      )}
    </div>
  );
};

export default QuestionAccordion;

