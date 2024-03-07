/* eslint-disable react/no-unescaped-entities */
import communication from "../../assets/about/communication.svg";
import empathy from "../../assets/about/empathy.svg";
import innovation from "../../assets/about/Innovation.svg";
import teamImage from "../../assets/about/about.webp";

const MissionAndGoals = () => {
  return (
    <div className="w-full h-fit">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-start gap-6 px-[clamp(10px,5%,100px)] pt-0">
          <div>
            <div className="flex justify-between gap-y-10 items-start flex-wrap min-[827px]:mt-20 bg-[#F9F9F9] px-6 rounded-2xl py-20">
              <div className="flex flex-col grow justify-around items-between min-[827px]:px-4 w-full min-[900px]:w-[clamp(200px,50%,584px)] overflow-hidden rounded-lg">
                <div className="max-w-full min-[900px]:max-w-[494px] pt-0">
                  <p className="text-lightdark text-5xl font-segoeUI font-bold">
                    Our Values
                  </p>
                  <p className="font-montserrat text-lg leading-8 text-[#444B56] mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <p className="mt-4 font-montserrat text-lg leading-8 text-[#444B56]">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non.
                  </p>
                </div>
              </div>
              <div className="min-[900px]:flex w-[100%] min-[900px]:w-[clamp(200px,50%,562px)] rounded-lg relative flex-col gap-y-10">
                <div className="relative p-6 pl-4 h-fit flex bg-white rounded-r-xl">
                  <div className="w-[6px] h-full absolute left-0 top-0 bg-gradient-to-b from-[#0062FF] to-[#65D1FF]" />
                  <div className="flex-[0.2] flex justify-center items-center w-full h-auto">
                    <img src={communication} className="" />
                  </div>
                  <div className="flex-1">
                    <p className="font-segoeUI font-semibold text-[030F24] text-lg">
                      Communication
                    </p>
                    <p className="font-montserrat mt-3 text-[#444B56]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut e
                    </p>
                  </div>
                </div>
                <div className="relative p-6 pl-4 h-fit flex mt-6 bg-white rounded-r-xl">
                  <div className="w-[6px] h-full absolute left-0 top-0 bg-gradient-to-b from-[#0062FF] to-[#65D1FF]" />
                  <div className="flex-[0.2] flex justify-center items-center w-full h-auto">
                    <img src={empathy} className="" />
                  </div>
                  <div className="flex-1">
                    <p className="font-segoeUI font-semibold text-[030F24] text-lg">
                      Empathy
                    </p>
                    <p className="font-montserrat mt-3 text-[#444B56]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut e
                    </p>
                  </div>
                </div>
                <div className="relative p-6 pl-4 h-fit flex mt-6 bg-white rounded-r-xl">
                  <div className="w-[6px] h-full absolute left-0 top-0 bg-gradient-to-b from-[#0062FF] to-[#65D1FF]" />
                  <div className="flex-[0.2] flex justify-center items-center w-full h-auto">
                    <img src={innovation} className="" />
                  </div>
                  <div className="flex-1">
                    <p className="font-segoeUI font-semibold text-[030F24] text-lg">
                      Innovation
                    </p>
                    <p className="font-montserrat mt-3 text-[#444B56]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut e
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] relative">
          <div className="flex justify-between items-start flex-wrap min-[827px]:mt-20 px-6 rounded-2xl pb-6 pt-0">
            <div className="flex flex-col grow justify-around items-between min-[827px]:px-4 w-[clamp(200px,40%,400px)] rounded-lg">
              <div className="max-w-full min-[720px]:max-w-[494px] pt-0">
                <div className="flex justify-start text-sm">
                  <div className="w-fit py-2 rounded-full mt-10">
                    <p className="font-inter tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0062FF] to-[#00B2FF]">
                      SHORT STORY ABOUT US
                    </p>
                  </div>
                </div>
                <p className="text-[#030F24] text-5xl font-segoeUI font-bold mt-2 h-fit">
                  Our Company
                </p>
              </div>
            </div>
            <div className="min-[720px]:flex w-full mt-16 sm:w-[clamp(200px,60%,682px)] rounded-lg relative grow flex-col gap-y-6">
              <div className="max-w-full pt-0">
                <p className="font-montserrat text-lg leading-8 text-[#444B56]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="font-montserrat text-lg leading-8 text-[#444B56]">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non.
                </p>
                <p className="font-montserrat text-lg leading-8 text-[#444B56] mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="mt-4 font-montserrat text-lg leading-8 text-[#444B56]">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden h-[431px] flex justify-center">
            <img
              src={teamImage}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndGoals;
