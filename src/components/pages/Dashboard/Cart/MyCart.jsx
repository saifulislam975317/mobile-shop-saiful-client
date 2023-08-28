import { Helmet } from "react-helmet-async";
import { BsFillTrashFill } from "react-icons/bs";
import useCarts from "../../../../hooks/useCarts";
const MyCart = () => {
  const [carts] = useCarts();
  const total = carts.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="w-full px-12">
      <Helmet>
        <title>E-Res | Cart</title>
      </Helmet>

      <div className="flex justify-evenly items-center uppercase h-[60px] font-semibold ">
        <h1>Total orders: {carts.length}</h1>
        <p>price: ${Math.round(total)}</p>
        <button className="btn btn-warning btn-sm">pay</button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Food image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
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
