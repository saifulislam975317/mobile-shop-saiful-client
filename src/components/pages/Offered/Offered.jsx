import discountBanner from "../../../assets/discount/discount.avif";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Offered = () => {
  return (
    <div className="mt-8">
      <SectionTitle
        heading={"We Offered on Realme Mobile"}
        subHeading={"-----Don't miss------"}
      ></SectionTitle>

      <div className="hero  p-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={discountBanner}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <div className="ml-12">
              <h1 className="text-4xl text-orange-600 font-bold">
                Great News!
              </h1>
              <h4 className="font-bold text-lg">
                We discount on realme mobile up to 70% off!
              </h4>
              <p className="py-6">
                Unbelievable Savings: Get ready to upgrade your mobile
                experience with a jaw-dropping 70% discount on the latest
                smartphones! Discover cutting-edge technology and sleek designs
                without breaking the bank. Do not miss this limited-time offer
                to own the phone you have been eyeing. Shop now and enjoy
                unparalleled savings while stocks last
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offered;
