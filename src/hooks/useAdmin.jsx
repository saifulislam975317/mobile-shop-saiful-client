import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin = [], isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`,
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
