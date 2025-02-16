import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
