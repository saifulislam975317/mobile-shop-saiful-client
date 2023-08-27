import Offered from "../../Offered/Offered";
import Order from "../../Order/Order";
import Reviews from "../../Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order></Order>
      <Offered></Offered>
      <Featured></Featured>
      <Reviews></Reviews>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
