import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../../../hooks/useCarts";

const MobileCard = ({ item }) => {
  const { name, price, image, description } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCarts();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    const { _id, name, price, image, description } = item;

    const newItem = {
      productId: _id,
      name,
      price,
      image,
      description,
      email: user?.email,
    };

    if (user && user.email) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${item.name} is added to cart successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Without login, you can't order mobile",
        text: "You have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Thank you!");
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-slate-700 absolute  mr-4 right-0 mt-4 px-4 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-info"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
