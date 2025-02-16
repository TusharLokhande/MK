import logo from "../../assets/imu.jpg";

export const LoginUI = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center mx-auto">
        <div className="max-w p-20 bg-[#2C2638] border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
                    <input type="text"  className=" text-white shadow-sm bg-[#3C364C] text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required placeholder="First Name" />
                    <input type="text"  className="text-white shadow-sm bg-[#3C364C] text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required placeholder="Last Name" />
                  </div>

                  <div className="input-fields-11 py-3">
                    <input type="email"  className="text-white shadow-sm bg-[#3C364C] text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required placeholder="Email" />
                  </div>

                  <div className="input-fields-12 py-3">
                    <input type="password"  className="text-white shadow-sm bg-[#3C364C] text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required placeholder="Enter your password" />
                  </div>

                  <div className="flex items-center py-3">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-white-600 bg-[#3C364C] border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
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

                  <button className="py-3 bg-[#6D54B5] text-white w-[100%] rounded-lg"> Create account</button>

              
<div className="py-3">
                  <p className="text-white text-center mx-auto py-3">Or register with</p>

                  <div className="flex gap-3 py-3">
                    <button className="bg-white rounded-lg py-3 w-[100%] ">Google</button>
                    <button className="bg-white rounded-lg py-3 w-[100%] ">Apple</button>
                  </div>
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
