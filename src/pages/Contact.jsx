import Form from "../components/contact/Form";
import heroImage from "../assets/contact/heroImage.webp";
import heroCube from "../assets/hero-cube.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-20 w-full min-h-fit">
      <div className="min-h-full w-full flex flex-col justify-center items-center gap-6 px-[clamp(10px,5%,100px)] pt-10 relative">
        <div>
          <p className="text-5xl max-w-[720px] min-[827px]:text-6xl leading-[4rem] text-center min-[827px]:leading-[5rem] min-[827px]:text-center font-segoeUI font-semibold text-lightdark">
            Got any questions or enquiry?
          </p>
        </div>
        <p className="min-[827px]:text-center max-w-[620px] text-xl font-montserrat text-center text-lightdark">
          Powerful, flexible and data-driven, we make it easy to build the exact
          AI Solution that your business deserves.
        </p>
        <div className="w-full flex justify-center pt-10">
          <img src={heroImage} className="max-w-[680px]" />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
