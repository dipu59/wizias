import React from "react";
import Buttons from "../Reuseable component/Button";
import { SquareArrowOutUpRight } from "lucide-react";

function HeroSection() {
  return (
    <main>
      <div className='md:bg-[url("/section1.png")] bg-[url("/Img.png")] object-cover h-[480px]  md:h-[573px] flex pt-16 md:pt-0  md:items-center justify-center md:justify-normal'>
        <div className="text-center md:text-left space-y-3 md:ml-20  ">
          <div>
            <h3 className="text-primary text-lg md:text-xl tracking-wide md:tracking-wider ">
              AI SDRs (aiDRs)
            </h3>
          </div>
          <div>
            <h1 className=" text-6xl text-white w-[391px] font-heading md:font-semibold font-semibold md:leading-[65px] ">
              More <span className=" italic">leads,</span> less{" "}
              <span className=" italic">people.</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <p className=" md:w-[450px] w-[300px]  text-lg text-white/70 font-extralightlight  ">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>
          </div>
          <div>
            <Buttons
              className="text-base font-semibold md:px-6 md:py-5 px-14 active:scale-95 py-7 rounded-3xl"
              variant="primary"
            >
              Sign Up for the Beta{" "}
              <SquareArrowOutUpRight className=" size-4 bg-black/10" />
            </Buttons>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
