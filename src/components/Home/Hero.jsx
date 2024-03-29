import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.webp";
import heroCube from "../../assets/hero-cube.svg";

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
      <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 pt-10 relative">
        <img
          src={heroCube}
          className="absolute top-0 -left-5 -z-10 w-16 sm:w-auto sm:top-10"
        />
        <img
          src={heroCube}
          className="absolute top-/ right-5 -z-10 w-16 sm:w-auto sm:top-/"
        />
        <div className=" px-[clamp(10px,5%,100px)]">
          <p className="text-5xl min-[827px]:text-6xl leading-[4rem] text-center min-[827px]:leading-[5rem] min-[827px]:text-center font-segoeUI font-semibold text-lightdark">
            Lorem
          </p>
          <p className="text-5xl min-[827px]:text-6xl leading-[4rem] text-center min-[827px]:leading-[5rem] min-[827px]:text-center text-lightdark font-segoeUI font-semibold">
            Ipsum Ipsum.
          </p>
        </div>
        <p className="min-[827px]:text-center max-w-[827px] text-xl px-[clamp(10px,5%,100px)] font-montserrat text-center text-lightdark">
          Our vision is to revolutionize Research through cutting-edge research
          and technology development, focusing on areas critical to human
          welfare and environmental sustainability.
        </p>
        <div className="w-[40%] h-[1px] mt-4 bg-[#313131] px-[clamp(10px,5%,100px)]" />
        <div className="mt-2 w-full flex justify-center px-[clamp(10px,5%,100px)]">
          <Link to={"/contact"} className="w-full flex justify-center">
            <button
              aria-label="Join Us"
              className="block w-[180px] min-[827px]:w-40 h-14 bg-darkblue rounded-full font-poppins font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="text-lg text-white">Join Us</span>
            </button>
          </Link>
        </div>
        <div className="w-full mt-20 flex justify-center overflow-hidden sm:px-[clamp(10px,5%,100px)]">
          <img
            src={heroImage}
            className="w-[clamp(400px,100%,1120px)] mix-blend-multiply"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
