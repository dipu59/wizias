import React, { useState } from "react";
import quation from "/quation.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Slider = () => {
  const sliders = [
    {
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      names: "John Doe",
      company: "Chief Strategy Officer @ Company",
    },
    {
      text: "Quantam physics ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      names: "Bappy Biswas",
      company: "Chief Strategy Officer @ Company",
    },
    {
      text: "Avishake ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      names: "Pranto Biswas",
      company: "Chief Strategy Officer @ Company",
    },
  ];

  const [current, setCurrent] = useState(0);

  const Nextbutton = () => {
    setCurrent((preData) => (preData + 1) % sliders.length);
  };

  const PreButton = () => {
    setCurrent((preData) => (preData - 1 + sliders.length) % sliders.length);
  };

  return (
    <main className="py-10">
      <div className=" space-y-8 ">
        <div className="flex justify-center items-center">
          <img src={quation} alt="Quation" className="size-16" />
        </div>
        <div className="max-w-[920px] min-w-[200px] mx-auto space-y-1">
          <p className="max-w-[870px] px-4 min-w-[227px] text-white md:text-3xl text-2xl  font-sans font-extralight text-center mb-5">
            {sliders[current].text}
          </p>

          <h3 className="text-primary font-semibold text-center text-xl">
            {sliders[current].names}
          </h3>

          <h4 className="text-gray-400 font-semibold text-center">
            {sliders[current].company}
          </h4>
        </div>
        <div className="flex justify-between px-10 md:-translate-y-32 min-w-[400px] max-w-[1300px] mx-auto">
          <button
            onClick={PreButton}
            className="text-white bg-[#96ACAF33] px-3 py-2 rounded-lg active:scale-95 transition-all hover:bg-[#96acaf1e]"
          >
            <ArrowLeft className="text-[#96ACAF]" />
          </button>
          <button
            onClick={Nextbutton}
            className="text-white bg-[#96ACAF33] px-3 py-2 rounded-lg active:scale-95 transition-all hover:bg-[#96acaf1e]"
          >
            <ArrowRight className="text-primary" />
          </button>
        </div>
        
        {/* pagination indicator  */}
        
        <div className="flex justify-center space-x-2 -translate-y-12">
          {sliders.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                current === index ? "bg-cyan-400" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;
