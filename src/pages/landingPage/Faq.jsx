import { useState } from "react";
import {faqs} from  "./data"
export default function Faq () {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
    return (
      <>
        <div className="pt-[7.5rem] px-4  font-general-sans lg:w-[90%] w-[100%] mx-auto">
          <p className="text-secondary-2 text-[1.125rem] font-semibold">FAQs</p>
          <p className="lg:text-[3rem] font-semibold text-[2.375rem]">
            Still have questions?
          </p>
          <p className=" text-primary-2 font-normal  text-[1rem] lg:text-[1.125rem]  mt-2">
            We answered questions so you do not have to ask them
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-secondary-4 mb-4 mt-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-[1.25rem] font-medium text-white py-4 flex justify-between items-center"
              >
                {faq.question}
                <div className="flex items-center">
                  {openIndex === index ? (
                    <img
                      src="/close-icon.png"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <img
                      src="/open-icon.png"
                      width={30}
                      height={30}
                      alt="open"
                    />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="text-primary-2 font-normal  text-[1rem] lg:text-[1rem]  my-4 w-[93%]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
}