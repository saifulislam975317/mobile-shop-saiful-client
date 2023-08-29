import { Helmet } from "react-helmet-async";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you want to delete ${user.name} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete him/her`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${user.name} has been deleted.`,
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="w-full px-12">
      <Helmet>
        <title>E-Res | Users</title>
      </Helmet>

      <div className="flex justify-evenly items-center uppercase h-[60px] font-semibold ">
        <h1>Total users: {users.length}</h1>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <FaUsers className="text-lg"></FaUsers>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
