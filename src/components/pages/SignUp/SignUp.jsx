import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../../assets/loginAndSignup/signUp.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const SignUp = () => {
  const [errorEmail, setErrorEmail] = useState("");
  const { signUp, userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        userUpdateProfile(data.name);
        reset();
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setErrorEmail(error.message);
        console.log("error", error.message);
      });
  };
  return (
    <div className="hero my-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-2 p-10">
          <img src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold my-5 text-center ">Sign up</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="exp: Saiful Islam"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="exp: saiful.islam93@gmail.com"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
                {errorEmail && (
                  <span className="text-red-600">
                    This email already used. please try another email.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "password should be at least 6 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must be Uppercase,lowercase, special characters, and numbers ",
                    },
                  })}
                  placeholder="************"
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
                  className="btn btn-secondary text-white"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p>
              Already have an account?
              <Link className="btn-link" to="/login">
                Please login
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

export default SignUp;
