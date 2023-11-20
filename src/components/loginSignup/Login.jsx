// src/Login.js
import Cookies from "js-cookie";
import { usePostLoginMutation } from "../../store/apis/userApi";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/Apple.svg";
import { TextField } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [login] = usePostLoginMutation();

  const onSubmit = async (data) => {
    console.log(data);
    // Make API call to login and get the token
    login({ email: data?.email, password: data?.password })
      .then((result) => {
        Cookies.set("authToken", result.data.token);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <section className="w-screen h-screen bg-cover bg-chair bg-left xl:bg-center flex justify-center items-center">
      <div className="bg-white bg-opacity-75 border rounded-[6%] w-[90%] h-[90%] p-[7%]">
        <div className="flex whitespace-nowrap text-[0.8rem] font-poppins above400:text-[1rem]">
          <p>
            Welcome to <span className="text-[#4C85BD]">MATGARY</span>
          </p>
          <p className="ml-auto">
            {" "}
            No Account? <br />
            <span
              className="text-[#4C85BD]"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
        <p className=" my-5 text-5xl">Sign in</p>
        <div className="flex items-center justify-between">
          <img
            alt="google"
            className="cursor-pointer  "
            src={google}
            onClick={() => {
              console.log("Google");
            }}
          />
          <img
            alt="facebook"
            className="cursor-pointer ml-[1%]"
            src={facebook}
            onClick={() => {
              console.log("Facebook");
            }}
          />
          <img
            alt="apple"
            className="cursor-pointer ml-[1%]"
            src={apple}
            onClick={() => {
              console.log("apple");
            }}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-6 above400:gap-[3.325rem]"
        >
          <div>
            <p className="mb-4 ml-1 font-poppins text-[1rem] font-normal leading-4">
              Enter your email address
            </p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className="bg-white focus:border-blue-500"
                  label="E-mail address"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              )}
            />
          </div>
          <div>
            <p className="mb-4 ml-1 font-poppins text-[1rem] font-normal leading-4">
              Enter your Password
            </p>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className="bg-white focus:border-blue-500"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>
          <div className="text-right">
            <p className=" mb-4 text-end mr-2 text-[#4285F4]">
              Forgot Password?
            </p>{" "}
            <button className="bg-[#4285F4] text-white font-poppins p-5 rounded-[0.625rem] w-[9.3125rem] ">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
