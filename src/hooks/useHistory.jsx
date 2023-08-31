import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../ContextProvider/AuthProvider";

const useHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: items = [] } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payment-history/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return [items];
};

export default useHistory;
