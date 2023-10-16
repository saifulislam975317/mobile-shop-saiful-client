import mobileImg from "../../../assets/images/mobile.jpg";
import processor from "../../../assets/MobileQualities/processor.png";
import audio from "../../../assets/MobileQualities/audio.png";
import edges from "../../../assets/MobileQualities/edges.png";
import wifi from "../../../assets/MobileQualities/wifi.png";
import threating from "../../../assets/MobileQualities/threating.png";
import storage from "../../../assets/MobileQualities/storage.png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const MobileQualities = () => {
  return (
    <div className="my-24">
      <SectionTitle
        heading={"INNOVATIVE QUALITIES & FEATURES"}
        subHeading={"SHOW YOURS TO THE WORLD"}
      ></SectionTitle>
      <div className="lg:flex justify-center items-center ">
        <div className="div1 mb-10">
          <div className="flex justify-center items-center gap-8">
            <div className="">
              <h1 className="text-2xl font-bold">INTELLIGENT PROCESSOR</h1>
              <h2>
                Tellus in hac habitasse platea dictumst <br /> vestibulum
                rhoncus srd mana erti qeueri
              </h2>
            </div>
            <div>
              <img src={processor} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center my-12 gap-8">
            <div>
              <h1 className="text-2xl font-bold">HD SURROUND AUDIO</h1>
              <h2>
                Sagittis eu volutpat odio ante ut diam <br /> quam metus
                dictfacilisis mauris sit am.
              </h2>
            </div>
            <div>
              <img src={audio} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div>
              <h1 className="text-2xl font-bold">STYLISH BEVEL EDGES</h1>
              <p>
                Dolor sit amet, consectetur adipiscing <br /> elit, sed do
                eiusmod tempor incidid
              </p>
            </div>
            <div>
              <img src={edges} alt="" />
            </div>
          </div>
        </div>
        <div className="div2 mx-8">
          <img src={mobileImg} alt="" />
        </div>
        <div className="div3 mt-10">
          <div className="flex justify-center items-center gap-8">
            <div>
              <img src={wifi} alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold">4.0 WIFI SPECS</h1>
              <h2>
                Tellus in hac habitasse platea dictumst <br /> vestibulum
                rhoncus srd mana erti qeueri
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center my-12 gap-8">
            <div>
              <img src={threating} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                MULIT TASKING & <br /> THREADING
              </h1>
              <h2>
                Sagittis eu volutpat odio ante ut diam <br /> quam metus
                dictfacilisis mauris sit am.
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div>
              <img src={storage} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CLOUD STORAGE</h1>
              <p>
                Dolor sit amet, consectetur adipiscing <br /> elit, sed do
                eiusmod tempor incidid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileQualities;
