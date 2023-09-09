import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://mobile-shop-saiful-server.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      const data = await res.json();

      return data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
