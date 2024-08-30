import { useState } from "react";
import {faqs} from  "./data"
export default function Faq () {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
    return (
      <>
        <div className="pt-[120px] px-4  font-general-sans w-[90%] mx-auto">
          <p className="text-[#F6762C] text-[18px] font-semibold">FAQs</p>
          <p className="lg:text-[48px] font-semibold text-[38px]">
            Still have questions?
          </p>
          <p className=" text-[#B8CADB] font-normal  text-[16px] lg:text-[18px]  mt-2">
            We answered questions so you do not have to ask them
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#333B47] mb-4 mt-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-[20px] font-medium text-white py-4 flex justify-between items-center"
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
                <div className="text-[#B8CADB] font-normal  text-[16px] lg:text-[16px]  my-4 w-[93%]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
}