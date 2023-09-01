import { FaUsers, FaMobile, FaWallet } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import useStats from "../../../../hooks/useStats";
import adminHomeBg from "../../../../assets/home/adminHome.jpg";
const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [stats] = useStats();

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mt-4">
        Welcome Back, {user?.displayName}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center items-center p-4 gap-2">
        <div className="card w-48 bg-cyan-500 text-white">
          <div className="card-body flex flex-row items-center text-center">
            <div>
              <FaUsers className="text-4xl "></FaUsers>
            </div>
            <div>
              <h2 className="card-title">Customers</h2>
              <h1 className="text-lg font-bold">{stats.users}</h1>
            </div>
          </div>
        </div>
        <div className="card w-48 bg-info text-white">
          <div className="card-body flex flex-row items-center text-center">
            <div>
              <FaMobile className="text-3xl "></FaMobile>
            </div>
            <div>
              <h2 className="card-title">Products</h2>

              <h1 className="text-lg font-bold">{stats.products}</h1>
            </div>
          </div>
        </div>
        <div className="card w-48 bg-accent text-white">
          <div className="card-body flex flex-row items-center  text-center">
            <div>
              <TbTruckDelivery className="text-3xl "></TbTruckDelivery>
            </div>
            <div>
              <h2 className="card-title">Orders</h2>
              <h1 className="text-lg font-bold">{stats.orders}</h1>
            </div>
          </div>
        </div>
        <div className="card w-48 bg-violet-400 text-white">
          <div className="card-body flex flex-row items-center  text-center">
            <div>
              <FaWallet className="text-3xl "></FaWallet>
            </div>
            <div>
              <h2 className="card-title"> Revenue</h2>
              <h1 className="text-lg font-bold">${stats.revenue}</h1>
            </div>
          </div>
        </div>
      </div>
      <img className="w-[980px] ml-4 h-[530px]" src={adminHomeBg} alt="" />
    </div>
  );
};

export default AdminHome;
