import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useHistory from "../../../../hooks/useHistory";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [items] = useHistory();

  return (
    <div>
      <Helmet title="Mobile shop | Payment History"> </Helmet>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"---See your payment history---"}
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item._id} className="hover">
                <th>{i + 1}</th>
                <td>{user?.displayName}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
