// src/components/AccordionItem.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItemProps = {
  question: string;
  answer: string;
};

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-lavender/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <h3 className="text-lg font-bodoni font-medium text-gray-800">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 font-bodoni text-lavender-dark transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="whitespace-pre-line p-4 font-bodoni text-gray-600 bg-lavender-light/30 rounded-b-lg">
          {answer}
          {(() => {
          if (question.includes("Dresscode")) {
            return (
              <div className="flex gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#c8a2c9] shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-[#d7bfd7] shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-[#e6daf0] shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-[#f6e27f] shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-[#fbe8a6] shadow-md"></div>
                <div className="w-8 h-8 rounded-full bg-[#fff4b2] shadow-md"></div>
              </div>
            )
          }
        })()}
        </p>
      </div>
    </div>
  );
}