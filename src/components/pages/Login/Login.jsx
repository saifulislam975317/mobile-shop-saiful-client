import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/loginAndSignup/login.jpg";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [logInError, setLogInError] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (data) => {
    setLogInError("");
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "user login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogInError(error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("please input your email in email field.");
    }
    forgotPassword(email)
      .then(() => {
        alert(
          "password reset email has been sent your email. please check your email"
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero my-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10 p-10">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-5 text-center ">Login</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  onBlur={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-accent text-white"
                  type="submit"
                  value="Login"
                />
                {logInError && (
                  <p className="text-red-600">Invalid email or password</p>
                )}
              </div>
            </form>
            <button
              onClick={handleForgotPassword}
              className=" text-orange-600 link w-2/5"
            >
              Forgot password?
            </button>
            <p>
              Don not have an account?
              <Link className="btn-link text-secondary ml-2" to="/signUp">
                Create a new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
