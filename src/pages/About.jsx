import { MeetTheTeam } from "../components/Home";
import { Hero, MissionAndGoals } from "../components/about";
import Advisors from "../components/about/Advisors";
import Form from "../components/contact/Form";

const About = () => {
  return (
    <div className="pt-20 w-full min-h-screen ">
      <Hero />
      <MissionAndGoals />
      <MeetTheTeam centerTitle={false} showSubtitle={true} />
      <Form />
    </div>
  );
};

export default About;
