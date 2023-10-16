import phoneImg from "../../../assets/images/4kmobile.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const FrontCamera = () => {
  return (
    <div className="my-12">
      <SectionTitle
        heading={"RAISE YOUR EXPECTATIONS"}
        subHeading={"REFINED VIEWING EXPERIENCE"}
      ></SectionTitle>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={phoneImg} className="lg:max-w-lg mx-w-md rounded-lg " />
          <div>
            <h1 className="text-2xl px-4  font-bold">
              42 FRONT CAMERA FOR PERFECT SHOT
            </h1>
            <p className="py-6 px-2">
              Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui official. <br />
              <span className="mt-4">
                Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet
                luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc
                aliquet. Ut consequat semper viverra nam libero. Velit ut tortor
                aremn.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCamera;
