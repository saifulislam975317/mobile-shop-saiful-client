import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillHome,
  AiFillCalendar,
  AiFillCreditCard,
  AiFillFileAdd,
  AiTwotoneHome,
  AiTwotoneShopping,
  AiFillContacts,
  AiFillBook,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [carts] = useCarts();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <AiFillHome></AiFillHome>Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUserPlus></FaUserPlus>Add Mobile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineMenuFold></AiOutlineMenuFold>Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/bookings">
                  <AiFillBook></AiFillBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <AiFillHome></AiFillHome>User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/reservation">
                  <AiFillCalendar></AiFillCalendar>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <AiFillCreditCard></AiFillCreditCard>Payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{carts.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <AiFillFileAdd></AiFillFileAdd>Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <AiFillCalendar></AiFillCalendar>My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiTwotoneHome></AiTwotoneHome>Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order">
              <AiTwotoneShopping></AiTwotoneShopping>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <AiFillContacts></AiFillContacts>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
