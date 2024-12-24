import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col gap-14 items-center text-gray-300 justify-center ">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#585858] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-[#3e3e3e] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <h1 className="text-5xl font-bold">welcome To Our MicroLoan System</h1>
      <button className="py-2 px-5 border-2 border-gray-500">
        <Link to="/auth/signup">Get Started</Link>
      </button>
    </main>
  );
};

export default Home;
