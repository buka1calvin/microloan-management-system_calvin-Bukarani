import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center w-screen h-screen text-gray-300">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#585858] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-[#3e3e3e] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <h1 className="text-3xl font-bold">
        Please Register In Order For You To Request Any Service From Us
      </h1>
      <form action="" className="flex flex-col md:w-1/2 gap-4">
        <input
          type="text"
          name="fistname"
          className="px-3 bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder="Enter Your First Name"
        />
        <input
          type="text"
          name="lastname"
          className="px-3 bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder="Enter Your Last Name"
        />
        <input
          type="text"
          name="telephone"
          className="px-3 bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder="e.g +250 786 837 324"
        />
        <input
          type="email"
          className="px-3 bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder="example@Email.com"
        />
        <input
          type="password"
          name="password"
          className="px-3 bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder="Enter Your Password"
        />
        <h1 className="text-center">AllReady Have an Acount ? <Link to="/auth/login" className="text-green-400">Log in</Link></h1>
        <button className="bg-white text-black self-center py-2 px-3">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
