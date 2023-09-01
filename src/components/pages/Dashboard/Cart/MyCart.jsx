import { Helmet } from "react-helmet-async";
import { BsFillTrashFill } from "react-icons/bs";
import useCarts from "../../../../hooks/useCarts";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [carts, refetch] = useCarts();
  const total = carts.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure? ",
      text: `want to delete the ${item.name} item?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://mobile-shop-saiful-server.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${item.name} has been deleted.`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-12">
      <Helmet>
        <title>E-Res | Cart</title>
      </Helmet>

      <div className="flex justify-evenly items-center uppercase h-[60px] font-semibold ">
        <h1>Total orders: {carts.length}</h1>
        <p>Total price: ${Math.round(total)}</p>
        {carts.length > 0 ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm">pay</button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Mobile images</th>
              <th>Mobile Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {carts.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
