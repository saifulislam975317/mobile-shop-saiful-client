import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imgbb_api = import.meta.env.VITE_imageBB_api;
const UpdateItem = () => {
  const mobileData = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbb_api}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgUrl = imgData.data.display_url;
          const { name, price, category, description } = data;

          const newItem = {
            name,
            price: parseInt(price),
            category,
            description,
            image: imgUrl,
          };

          fetch(
            `https://mobile-shop-saiful-server.vercel.app/mobile-data/${mobileData._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newItem),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `${newItem.name} has been updated successfully`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/dashboard/manageItems");
              }
            });
        }
      });
  };
  return (
    <div className="w-full px-12">
      <SectionTitle
        heading={"Update an item"}
        subHeading={"Hurry up!"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Mobile Name*</span>
          </label>
          <input
            type="text"
            defaultValue={mobileData.name}
            {...register("name", { required: true })}
            placeholder="Type your mobile name"
            className="input input-bordered w-full "
          />
          {errors.name && <span>Mobile Name is required</span>}
        </div>

        <div className="flex ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name*</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick One"
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>iPhone</option>
              <option>samsung</option>
              <option>realme</option>
              <option>vivo</option>
              <option>oppo</option>
            </select>
            {errors.category && <span>category name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs ml-2">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              defaultValue={mobileData.price}
              {...register("price", { required: true })}
              placeholder="Type product price here..."
              className="input input-bordered w-full max-w-xs"
            />
            {errors.price && <span>Price is required</span>}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered resize-none h-24"
            {...register("description")}
            defaultValue={mobileData.description}
            placeholder="type mobile details here..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose a file*</span>
          </label>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors.image && <span>Mobile Image is required</span>}
        </div>
        <input
          className="btn btn-accent mt-2"
          type="submit"
          value="Update Item"
        />
        <Link to="/dashboard/manageItems">
          <button className="btn btn-warning ml-2">Back To Manage Items</button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateItem;
