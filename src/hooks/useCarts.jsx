import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useQuery } from "react-query";

const useCarts = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-shop-saiful-server.vercel.app/carts/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
