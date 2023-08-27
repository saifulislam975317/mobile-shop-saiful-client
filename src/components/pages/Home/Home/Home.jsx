import Offered from "../../Offered/Offered";
import Order from "../../Order/Order";
import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order></Order>
      <Offered></Offered>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
