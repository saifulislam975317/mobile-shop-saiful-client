import MobileCard from "../MobileCard/MobileCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((item) => (
        <MobileCard key={item.id} item={item}></MobileCard>
      ))}
    </div>
  );
};

export default OrderTab;
