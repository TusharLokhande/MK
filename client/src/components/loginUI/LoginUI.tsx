import logo from "../loginUI/imu.jpg";

export const LoginUI = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center mx-auto">
        <div className="max-w p-6 bg-[#2C2638] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <img src={logo} alt="Logo" className="w-[100%] mx-auto " />
            <div className="flex justify-between px-4">
              <div className="input">
                <div className="py-5">
                <h3 className=" text-white text-4xl">Create an account</h3>
                <p className="text-white py-5">Already have an account? Log in</p>
                </div>
                <div className="input-fields">
                  <div className="input-fields-10 flex gap-3 py-3">
                    <input type="text"  className="shadow-sm bg-[#3C364C] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required placeholder="First Name" />
                    <input type="text"  className="shadow-sm bg-[#3C364C] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required placeholder="Last Name" />
                  </div>

                  <div className="input-fields-11 py-3">
                    <input type="email"  className="shadow-sm bg-[#3C364C] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required placeholder="Email" />
                  </div>

                  <div className="input-fields-12 py-3">
                    <input type="password"  className="shadow-sm bg-[#3C364C] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required placeholder="Enter your password" />
                  </div>

                  <div className="flex items-center py-3">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-[#3C364C] border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="link-checkbox"
                      className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>

                  <button className="py-3 bg-[#6D54B5] text-white w-[100%]"> Create account</button>

                  <hr></hr>

                  <span>Or register with</span>

                  <div className="flex">
                    <button>Google</button>
                    <button>Apple</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
