import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkLogo } from "../assets/index";
import { register } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import passwordRegexp from "password-regexp";
import toast,{ Toaster } from 'react-hot-toast';
import { authContext } from "../Contexts/isAuth";

export default function Signup(props) {
  const { setDisplayName } = useContext(authContext); // Access setDisplayName function from context
  const navigate = useNavigate();
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    displayNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleForm = (evt) => {
    const { name, value } = evt.target;

    if (name === "email") {
      setUser({ ...user, email: value });
      setErrors({
        ...errors,
        emailError:
          value.length === 0
            ? "Email is required"
            : EmailValidator.validate(value)
            ? ""
            : "Please Enter a Valid Email",
      });
    } else if (name === "password") {
      setUser({ ...user, password: value });
      setErrors({
        ...errors,
        passwordError:
          value.length === 0
            ? "Password is Required"
            : passwordRegexp().test(value)
            ? ""
            : "Password must be at least 3 characters and contain letters and numbers",
      });
    } else if (name === "confirmPassword") {
      setUser({ ...user, confirmPassword: value });
      setErrors({
        ...errors,
        confirmPasswordError:
          value !== user.password ? "Passwords do not match" : "",
      });
    }  else if (name === "displayName") {
      setUser({ ...user, displayName: value });
      setErrors({
        ...errors,
        [`${name}Error`]: value.length === 0 ? `${displayName} is required` : "",
      });
    }
  };
  // async
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        errors.displayNameError||
        errors.emailError ||
        errors.passwordError ||
        errors.confirmPasswordError
      ) {
        toast.error("write a Valid Email or password");
      } else {
        const res = await register(user.email, user.password);
        console.log(res);
        setDisplayName(user.displayName);
         navigate("/signin");
      }
    } catch (err) {
      toast.error(" some thing is wrong ");
    }
  };

  // console.log(user.name)
  return (
    <>
      <div className="w-full" onSubmit={(event)=> {handleSubmit(event)}}>
        <div className="w-full bg-white pb-10">
          <form className="w-[370px] mx-auto flex flex-col items-center">
            <Link to="/">
              <img className="w-32" src={darkLogo} alt="darkLogo" />
            </Link>
            <div className="w-full border border-zinc-200 p-6">
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Create Account
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label htmlFor="clientName" className="text-sm font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    name="displayName"
                    value={user.displayName}
                    onChange={handleForm}
                  />
                  <p style={{ color: "red" }}>{errors.nameError}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="clientEmail"
                      className="text-sm font-medium"
                    >
                      Mobile number or Email
                    </label>
                    <input
                      type="text"
                      id="clientEmail"
                      name="email"
                      value={user.email}
                      onChange={handleForm}
                      className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    />
                    <p style={{ color: "red" }}>{errors.emailError}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        password
                      </label>
                      <input
                      name="password"
                      value={user.password}
                      onChange={handleForm}
                        type="password"
                        id="password"
                        className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                      />
                        <p style={{ color: "red" }}>{errors.passwordError}</p>

                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="re-enterPassword`"
                        className="text-sm font-medium"
                      >
                        Re-enter password
                      </label>
                      <input
                         name="confirmPassword"
                         value={user.confirmPassword}
                         onChange={handleForm}
                        type="password"
                        id="re-enterPassword`"
                        className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                      />
                     <p style={{ color: "red" }}>{errors.confirmPasswordError}</p>

                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-1.5 text-sm font-normal rounded-lg bg-gradient-to-t from-[#ffd814] to-[#ffd814] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                  >
                    Continue
                  </button>
                </div>
                <p className="text-xs text-black leading-4 mt-4">
                  By Creating an account, you agree to Amazon's{" "}
                  <span className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Conditions of Use{" "}
                  </span>
                  and{" "}
                  <span className="text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Privacy Notice.
                  </span>
                </p>
                <div>
                  <p className="text-sm text-black">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                        Sign in{" "}
                        <span>
                          <ArrowRightIcon />
                        </span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
          <div className="flex items-center gap-6">
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Conditions of Use
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
          </div>
          <p className="text-xs text-gray-600">
            © 1996-2023, ReactBd.com, Inc. or its affiliates
          </p>
        </div>
      </div>
      <Toaster  position ="top-center" /> 
    </>
  );
}