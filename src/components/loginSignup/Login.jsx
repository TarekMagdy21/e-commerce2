// src/Login.js
import Cookies from "js-cookie";
import { usePostLoginMutation } from "../../store/apis/userApi";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/Apple.svg";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { useForm, Controller } from "react-hook-form";
const Login = () => {
  const { control, handleSubmit } = useForm();

  const [login] = usePostLoginMutation();

  const onSubmit = async (data) => {
    console.log(data);
    // Make API call to login and get the token
    // login({ email: "tarek@test.com", password: "24400590Asd@" }).then(
    //   (result) => {
    //     Cookies.set("authToken", result.data.token);
    //   }
    // );
  };

  return (
    <section className="w-full h-screen bg-cover bg-chair bg-left xl:bg-center flex justify-center items-center">
      <div className="bg-white bg-opacity-75 border rounded-[2.5rem] w-4/5 h-4/5 p-[6%]">
        <div className="grid grid-cols-3 gap-y-7">
          <p className="col-span-2 font-poppins font-medium">
            Welcome to <span className="text-[#4F89C1] uppercase">Matgary</span>
          </p>
          <p className="text-lg text-[#8D8D8D] text-[1rem] font-poppins">
            No Account? <br />
            <span
              className="text-[#4F89C1] font-normal cursor-pointer"
              onClick={() => {
                console.log("Nice");
              }}
            >
              Sign up
            </span>
          </p>
          <p className="text-5xl col-span-3 text-end font-poppins">Sign in</p>
          <div className="flex col-span-3">
            <img
              className="cursor-pointer ml-4"
              src={google}
              onClick={() => {
                console.log("Google");
              }}
            />
            <img
              className="cursor-pointer ml-5"
              src={facebook}
              onClick={() => {
                console.log("Facebook");
              }}
            />
            <img
              className="cursor-pointer ml-4"
              src={apple}
              onClick={() => {
                console.log("apple");
              }}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="col-span-3">
            <p className="mb-3 ml-1 font-poppins text-[1rem] font-medium">
              Enter your email address
            </p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className="bg-white"
                  label="E-mail address"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <p className="mt-10 mb-3 ml-1 font-poppins text-[1rem] font-medium">
              Enter your Password
            </p>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className="bg-white"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
            <p className="my-5 text-end mr-2 text-[#4285F4]">
              Forgot Password?
            </p>
            <div className="text-right">
              <button className="bg-[#4285F4] text-white font-poppins p-5 rounded-[0.625rem] w-[9.3125rem]">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
