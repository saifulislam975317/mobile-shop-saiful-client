import { useQuery } from "react-query";

const useProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("mobile.json");
      const data = await res.json();
      return data;
    },
  });
  return [products];
};

export default useProducts;
