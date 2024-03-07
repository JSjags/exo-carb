import {
  GetInvolvedAction,
  Hero,
  HowWeWork,
  MeetTheTeam,
  Research,
  ResearchWorks,
} from "../components/Home";
import PressMentions from "../components/Home/PressMentions";
import Form from "../components/contact/Form";

const Home = () => {
  return (
    <div className="pt-20 w-full min-h-screen overflow-hidden">
      <Hero />
      <Research />
      <HowWeWork />
      <MeetTheTeam centerTitle={false} showSubtitle={true} />
      {/* <ResearchWorks /> */}
      {/* <PressMentions /> */}
      {/* <GetInvolvedAction /> */}
      <Form />
    </div>
  );
};

export default Home;
