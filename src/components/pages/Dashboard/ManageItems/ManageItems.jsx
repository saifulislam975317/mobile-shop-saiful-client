import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useProducts from "../../../../hooks/useProducts";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [products, refetch, isLoading] = useProducts();

  const handleDelete = (product) => {
    Swal.fire({
      title: "Are you sure? ",
      text: `Are you want to delete ${product.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://mobile-shop-saiful-server.vercel.app/mobile-data/${product._id}`,
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
                `${product.name} has been deleted`,
                "success"
              );
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  };

  if (isLoading) {
    return (
      <span className="  justify-center mt-48 mx-auto block items-center loading loading-spinner text-warning loading-lg"></span>
    );
  }
  return (
    <div className="w-full">
      <SectionTitle heading={"Manage All Items"}></SectionTitle>
      <h1 className="text-center font-bold text-lg">
        Total items: {products.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/dashboard/manageItems/${product._id}`}>
                    <button className="btn btn-ghost  bg-green-600 text-white">
                      <BiSolidEdit></BiSolidEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
