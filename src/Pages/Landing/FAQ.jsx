import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqData = [
  {
    question: "What is YOLO CODE and what do we do?",
    answer:
      "YOLO CODE is a development studio focused on creating innovative websites, applications and discord bots. We provide high quality digital solutions tailored to our users' needs.",
  },
  {
    question: "What projects are currently in development?",
    answer:
      "Currently, we are working on Sitezy, a website and store builder, and YOLO BOT, a public Discord bot with advanced moderation and economy features.",
  },
  {
    question: "Is YOLO CODE open to collaborations?",
    answer:
      "Yes! We are open to partnerships and collaborations. If you're interested, feel free to contact us via Discord or our website.",
  },
  {
    question: "How can I stay updated with the latest news?",
    answer:
      "Join our Discord server or follow our website to get the latest updates about our projects and new releases.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 bg-neutral-900 rounded-3xl border-2 border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-medium text-xl flex items-center justify-center md:justify-between w-full"
      >
        {question}
        <span
          className={`hidden md:flex transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <KeyboardArrowDownIcon />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-40 border-t-2 border-neutral-800 pt-3 mt-4"
            : "max-h-0"
        }`}
      >
        <p className="text-neutral-300 text-md">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="faq"
    >
      <div className="flex flex-col gap-10 items-center" data-aos="fade-up">
        <div className="bg-neutral-900 p-2 px-4 text-sm rounded-full w-max">
          FAQ
        </div>
        <div className="text-5xl sm:text-6xl text-white text-center">
          <span className="text-red-400">Most</span> asked questions.
        </div>
      </div>
      <div
        className="w-full flex flex-col gap-5 items-center"
        data-aos="fade-up"
      >
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
