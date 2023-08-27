const MobileCard = ({ item }) => {
  const { name, price, image, description } = item;

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
          <button className="btn btn-info">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
