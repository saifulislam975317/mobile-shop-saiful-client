import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: items = [] } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-shop-saiful-server.vercel.app/payment-history/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return [items];
};

export default useHistory;
