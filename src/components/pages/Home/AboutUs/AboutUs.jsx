import aboutBg from "../../../../assets/aboutUs/about us.avif";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const AboutUs = () => {
  return (
    <div>
      <SectionTitle
        heading={"About Us"}
        subHeading={"---know about us---"}
      ></SectionTitle>
      <div className="hero">
        <div className="hero-content gap-12 flex-col lg:flex-row">
          <img src={aboutBg} />
          <div>
            <h1 className="font-bold text-2xl">Online Mobile Shop</h1>
            <p className="py-6">
              At our online mobile shop, we are more than just a retailer we are
              your tech-savvy companions on your mobile journey. With a passion
              for cutting-edge innovation, we handpick a curated selection of
              the latest smartphones that blend seamlessly with your lifestyle.
              Our mission is to simplify your shopping experience by providing
              expert guidance, honest advice, and a user-friendly platform.
              Whether you are a tech enthusiast or a casual user, we are here to
              cater to your mobile needs. Join us in exploring the boundless
              possibilities that mobile technology brings. Welcome to a world of
              connectivity, style, and convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
