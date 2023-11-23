import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Contexts/isAuth";

export default function FooterTop(props) {
  const { isLogin, setLogin } = useContext(authContext);

  return (
    <div className="w-full bg-white py-6">
      {isLogin ? null:(
        <div className="w-full border-t-[1px] border-b-[1px] py-8">
          <div className="w-64 mx-auto text-center font-titleFont">
            <p className="text-sm">See personalized recommendations</p>
            <Link to="/signin">
              <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
                Sign In
              </button>
            </Link>
            <p className="text-xs mt-1">
              New Customber?{" "}
              <Link to="/register">
                <span className="text-blue-600 ml-1 cursor-pointer">
                  Start here.
                </span>
              </Link>
            </p>
          </div>
        </div>
      ) }
    </div>
  );
}
