// src/Login.js
import { usePostSignupMutation } from "../../store/apis/userApi";
// Import yup
import * as yup from "yup";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .max(6, "Password must be 6 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", username: "", password: "" },
    resolver: yupResolver(validationSchema),
  });
  const [signup] = usePostSignupMutation();

  const onSubmit = async (data) => {
    console.log(data);
    // Make API call to login and get the token
    signup({
      username: data?.username,
      email: data?.email,
      password: data?.password,
    })
      .then((result) => {
        console.log("User Created", result);
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
            have an Account? <br />
            <span
              className="text-[#4C85BD]"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
        <p className="  text-5xl">Sign up</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-[1.35rem] above400:gap-[3.325rem]"
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
                  size="small"
                  {...field}
                  className="bg-white focus:border-blue-500"
                  label="E-mail address"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  error={Boolean(errors?.email)}
                  helperText={errors?.email?.message}
                />
              )}
            />
          </div>
          <div>
            <p className="mb-4 ml-1 font-poppins text-[1rem] font-normal leading-4">
              Enter your username
            </p>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  size="small"
                  {...field}
                  className="bg-white focus:border-blue-500"
                  label="User name"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  error={Boolean(errors?.username)}
                  helperText={errors?.username?.message}
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
                  size="small"
                  {...field}
                  className="bg-white focus:border-blue-500"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  error={Boolean(errors?.password)}
                  helperText={errors?.password?.message}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
          <div className="text-right">
            <button className="bg-[#4285F4] text-white font-poppins p-4  rounded-[0.625rem] w-[9.3125rem] ">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
