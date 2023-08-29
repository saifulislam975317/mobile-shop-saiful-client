import { useContext } from "react";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId || !data.insertedId) {
              navigate(from, { replace: true });
            }
          });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline w-full"
      >
        <FcGoogle className="font-bold text-3xl"></FcGoogle>Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
