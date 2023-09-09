import { useQuery } from "react-query";

const useProducts = () => {
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://mobile-shop-saiful-server.vercel.app/mobile-data"
      );
      const data = await res.json();
      return data;
    },
  });
  return [products, refetch, isLoading];
};

export default useProducts;
