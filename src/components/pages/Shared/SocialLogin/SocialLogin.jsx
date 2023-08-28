// import { useContext } from "react";
// import { AuthContext } from "../../../../ContextProvider/AuthProvider";
// import { FcGoogle } from "react-icons/fc";

// const SocialLogin = () => {
//   const { googleLogIn } = useContext(AuthContext);

//   const handleGoogleLogin = () => {
//     googleLogIn()
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
//   return (
//     <div>
//       <button
//         onClick={handleGoogleLogin}
//         className="btn btn-circle btn-outline"
//       >
//         <FcGoogle></FcGoogle> Google
//       </button>
//     </div>
//   );
// };

// export default SocialLogin;
