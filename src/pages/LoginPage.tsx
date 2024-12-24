const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center w-screen h-screen text-gray-300">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#585858] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-[#3e3e3e] to-gray-500 rounded-full blur-3xl opacity-70"></div>
      <h1 className="text-3xl font-bold">
        Please Login To Proceed
      </h1>
      <form action="" className="flex flex-col md:w-1/2 gap-4">
        <input
          type="text"
          name="telephone"
          className="bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder=""
        />
        <input
          type="password"
          name="password"
          className="bg-gray-300/20 border border-gray-500 rounded py-3"
          placeholder=""
        />
        <button className="bg-white text-black self-center py-2 px-3">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
