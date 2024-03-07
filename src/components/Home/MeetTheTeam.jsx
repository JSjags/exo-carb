/* eslint-disable react/prop-types */
import { useState } from "react";
import { team, teams } from "../../constants/team";
import { TeamMemberCard } from "../shared";

const MeetTheTeam = ({ centerTitle, showSubtitle }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const filterTeam = (arr) => {
    let returnArr;

    if (currentTab === 0) returnArr = arr;
    if (currentTab === 1)
      returnArr = arr.filter(
        (member) => member.role.toLowerCase() === "AI SCIENTIST".toLowerCase()
      );
    if (currentTab === 2)
      returnArr = arr.filter(
        (member) => member.role.toLowerCase() === "ENGINEER".toLowerCase()
      );
    if (currentTab === 3)
      returnArr = arr.filter(
        (member) => member.role.toLowerCase() === "DOMAIN EXPERT".toLowerCase()
      );

    return returnArr;
  };

  return (
    <div className="w-full bg-[#FFFFFF] pb-28 mt-20">
      <div className="mx-auto max-w-[1440px] w-full flex flex-col items-center h-full">
        <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10">
          <div className="w-full">
            <p className="font-inter text-[#0062FF] font-semibold">OUR TEAM</p>
            <p
              className={`text-4xl min-[827px]:text-5xl leading-[3rem] min-[827px]:leading-[4rem] ${
                centerTitle ? "text-center" : "text-start"
              } ${
                showSubtitle
                  ? "font-segoeUI font-extrabold"
                  : "font-dmsans font-extrabold"
              } text-[#333333] mt-6`}
            >
              Meet the Team
            </p>
            {showSubtitle && (
              <p className="font-montserrat text-[#666666] mt-4 max-w-[835px]">
                Lorem ipsum dolor sit amet consectetur. Lorem interdum blandit
                sem semper maecenas dictumst. Quisque lectus mattis cras rutrum
                duis pharetra dignissim in.
              </p>
            )}
          </div>
          <div className="w-[calc(100vw-20px)] min-[900px]:w-[calc(100vw-185px)] overflow-x-scroll mt-4 scrollbar-hide flex items-start sm:px-[clamp(10px,5%,100px)]">
            <div className="flex justify-start space-x-10 overflow-scroll scrollbar-hide">
              {teams.map((team, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTab(i)}
                  className={`font-montserrat text-base font-semibold flex whitespace-nowrap ${
                    currentTab === i
                      ? "text-darkblue border-b-2 border-darkblue pb-3"
                      : "text-[#666666]"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-1 justify-between gap-x-4 grid-tem gap-y-20 mt-10 min-[827px]:mt-10 min-[900px]:grid-cols-3 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-4">
            {filterTeam(team).map((member, i) => (
              <TeamMemberCard key={i} data={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
