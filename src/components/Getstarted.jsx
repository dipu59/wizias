import React from "react";
import Buttons from "../Reuseable component/Button";
import { SquareArrowOutUpRight } from "lucide-react";

function Getstarted() {
  return (
    <div className="text-center h-[400px] flex flex-col items-center justify-center md:gap-4 gap-3">
      <h3 className="text-primary textsm md:text-lg ">GET STARTED</h3>
      <h2 className="w-[327px] md:w-full text-3xl text-white font-semibold font-heading">
        <span className=" italic font-medium">Embrace</span> the new era of{" "}
        <span className="font-medium italic">outbound</span>.
      </h2>
      <h1 className="w-[327px] md:w-full text-gray-400 ">
        <p>Wizia lets you train, activate, and optimize aiDRs.</p>
        <p> Take your outbound to new levels of performance and efficiency.</p>
      </h1>
      <Buttons
        className="text-base font-semibold md:px-6 md:py-5 px-14 active:scale-95 py-6 rounded-3xl"
        variant="primary"
      >
        Sign Up for the Beta
        <SquareArrowOutUpRight className=" size-4 bg-black/10" />
      </Buttons>
    </div>
  );
}

export default Getstarted;
