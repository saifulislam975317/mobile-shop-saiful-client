import dualCamera from "../../../assets/essential/dualCamera.jpg";
import intelligent from "../../../assets/essential/intelligent.jpg";
import ram from "../../../assets/essential/ram.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const MobileEssential = () => {
  return (
    <div>
      <SectionTitle
        heading={"WHAT MAKES THE ESSENTIAL DIFFERENT?"}
        subHeading={"EXPERIENCE HIGH PERFORMANCE AND SECURE"}
      ></SectionTitle>
      <div className="lg:flex justify-evenly mx-24 items-center gap-8">
        <div>
          <img className="mb-12" src={dualCamera} alt="" />
          <h2 className="text-[16px]  font-bold">PERFECT CUT</h2>
          <h1 className="text-2xl font-bold">DUAL CAMERA</h1>
          <p>
            Tristique senectus et netus et malesuada <br /> ant reiet fames.
          </p>
        </div>
        <div>
          <img className="my-12" src={intelligent} alt="" />
          <h2 className="text-[16px]  font-bold">PRETTY</h2>
          <h1 className="text-2xl font-bold">INTELLIGENT PROCESSING</h1>
          <p>
            Consequat ac habit amet asse felis donec <br /> et odio pellentesque
            diam.
          </p>
        </div>
        <div>
          <img className="my-12" src={ram} alt="" />
          <h2 className="text-[16px] font-bold">MOST POPULAR</h2>
          <h1 className="text-2xl font-bold">8GB DDR5 RAM</h1>
          <p>
            Dictum varius duis at consectetur <br /> lorem donec massa sap
            faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileEssential;
