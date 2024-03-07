/* eslint-disable react/no-unescaped-entities */
import heroImage from "../../assets/about/heroImage.webp";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center min-[827px]:h-full">
      <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10 relative">
        <div className="flex justify-center text-sm">
          <div className="w-fit bg-[#F8FDFF] py-2 px-8 rounded-full">
            <p className="font-inter font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0062FF] to-[#00B2FF]">
              OUR MISSION
            </p>
          </div>
        </div>
        <div>
          <p className="text-5xl max-w-[720px] min-[827px]:text-6xl leading-[4rem] text-center min-[827px]:leading-[5.5rem] min-[827px]:text-center font-segoeUI font-semibold text-lightdark">
            We are Facilitating AI Driven Solutions
          </p>
        </div>
        <p className="min-[827px]:text-center max-w-[620px] text-xl font-montserrat text-center mt-4 text-lightdark">
          Powerful, flexible and data-driven, we make it easy to build the exact
          AI Solution that your business deserves.
        </p>
        <div className="w-full rounded-2xl mt-8 overflow-hidden h-[431px] flex justify-center">
          <img
            src={heroImage}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
