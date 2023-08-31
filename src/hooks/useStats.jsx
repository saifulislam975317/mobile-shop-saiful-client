import { useQuery } from "react-query";
const useStats = () => {
  const { data: stats = {} } = useQuery({
    queryKey: ["products-stats"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products-stats");
      const data = await res.json();
      return data;
    },
  });
  return [stats];
};

export default useStats;
