/* eslint-disable react/no-unescaped-entities */

import researchImage from "../../assets/home/shape.webp";
import researchImageTopLeft from "../../assets/home/card-top-left.png";
import researchImageBottomRight from "../../assets/home/card-bottom-right.png";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <div className="w-full bg-[#EFF3FF] mt-20">
      <div className="relative mx-auto max-w-[1440px] flex flex-wrap justify-between items-center gap-6 px-[clamp(10px,5%,100px)] pt-28 pb-20">
        <div className="flex-1 relative z-0 min-w-[400px]">
          <p className="text-4xl min-[827px]:text-[3.4rem] text-[#1E254C] leading-[4rem] min-[827px]:leading-[4rem] font-segoeUI font-semibold">
            What happens when{" "}
            <span className="text-[#0035E8]">AI-driven decision-making</span>{" "}
            meets
            <span className="text-[#0035E8]"> deep tech expertise</span>?
          </p>
          <p className="mt-10 text-[1.4rem] font-segoeUI text-[#4C4C4C] font-semibold">
            The AI for social impact revolution is here
          </p>
          <p className="mt-4 text-[1.3rem] font-montserrat text-[#666666]">
            Lorem ipsum dolor sit amet consectetur. Risus velit aliquam
            porttitor ullamcorper. Non molestie orci eu justo ac. Lorem mi
            nullam nisl pellentesque tempor adipiscing dictum fringilla.
            Ultricies laoreet mattis nisl ullamcorper elementum vestibulum.
          </p>

          <div className="mt-8">
            <Link to={"/contact"}>
              <button
                aria-label="Join Us"
                className="h-14 bg-darkblue w-44 rounded-full font-poppins font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-lg text-white">Join Us</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex mt-4 relative min-[827px]:mt-0 justify-center items-start flex-1 min-[827px]:gap-8 min-w-[400px] h-full">
          <img loading="lazy" src={researchImage} className="flex mx-auto" />
          <img
            loading="lazy"
            src={researchImageTopLeft}
            className="absolute top-3 left-0"
          />
          <img
            loading="lazy"
            src={researchImageBottomRight}
            className="absolute bottom-4 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
