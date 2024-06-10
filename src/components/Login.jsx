import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <section>
      <div className="w-full h-auto">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 w-full h-auto">
          <div className="w-1/2  h-1/2">
          <h2 className="p-4 block w-full rounded-md text-center text-white bg-orange-700/20 font-bold text-3xl">Log in here</h2>
            <form
              action="#"
              method="POST"
              className="mt-8"
              onSubmit={submitHandler}
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    username
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-screen w-screen fixed -z-10 top-0 left-0 overflow-hidden">
          <img
            className="mx-auto h-full w-full rounded-md object-cover object-center"
            src="https://cdn.pixabay.com/photo/2022/10/07/19/25/freedom-7505713_640.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
