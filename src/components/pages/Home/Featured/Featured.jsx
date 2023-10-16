import featuredImg from "../../../../assets/features/features-1.avif";
import bgFeature from "../../../../assets/features/features-2.avif";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div
      className="bg-no-repeat bg-cover  bg-opacity-10 bg-fixed"
      style={{ backgroundImage: `url(${bgFeature})` }}
    >
      <SectionTitle
        heading={"Mobile Features"}
        subHeading={"---See your Mobile features---"}
      ></SectionTitle>
      <div className="flex justify-center  items-center py-16 bg-slate-500 bg-opacity-60 px-8">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-8 text-white ">
          <div className="collapse collapse-arrow  ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title  text-xl font-medium">
              About iphone 14pro max
            </div>
            <div className="collapse-content">
              <p>
                iPhone 14 Pro Max offers a stunning ProMotion display, A16
                Bionic chip for exceptional performance, advanced triple-camera
                system with ProRAW support, 5G connectivity, and enhanced
                durability with Ceramic Shield front cover.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              About Samsung Galaxy
            </div>
            <div className="collapse-content">
              <p>
                Samsung Galaxy presents a vibrant AMOLED display, powerful
                Exynos/Snapdragon processors, versatile multi-camera setups for
                impressive photography, 5G connectivity, and a sleek design. It
                also offers features like water and dust resistance, expandable
                storage, and a range of innovative software enhancements for a
                comprehensive smartphone experience.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              About Realme phone
            </div>
            <div className="collapse-content">
              <p>
                Realme smartphones offer sleek designs, powerful processors like
                MediaTek Helio or Qualcomm Snapdragon series, impressive camera
                systems for various photography needs, AI-enhanced features, and
                fast charging capabilities. They often provide a high
                value-for-money proposition, delivering a combination of
                performance and features at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
