import { FaMobile, FaShoppingCart } from "react-icons/fa";
import useStats from "../../../../hooks/useStats";
import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import useHistory from "../../../../hooks/useHistory";
const UserHome = () => {
  const [stats] = useStats();
  const [items] = useHistory();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4">
        Welcome Back, {user?.displayName}
      </h1>
      <div className="grid lg:grid-cols-2 justify-center gap-4 p-4 items-center  ">
        <div className="card w-96 bg-info text-white">
          <div className="card-body flex flex-row items-center text-center">
            <div>
              <FaMobile className="text-3xl "></FaMobile>
            </div>
            <div>
              <h2 className="card-title">Total Products</h2>

              <h1 className="text-lg font-bold">{stats.products}</h1>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-accent text-white">
          <div className="card-body flex flex-row items-center text-center">
            <div>
              <FaShoppingCart className="text-3xl "></FaShoppingCart>
            </div>
            <div>
              <h2 className="card-title">Total Orders</h2>
              <h1 className="text-lg font-bold">{items.length}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
