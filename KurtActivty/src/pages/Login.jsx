import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    if (username === "admin" && password === "12345") {
      setMessage("Login successful!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setMessage("");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-[#f3f7fb] flex items-start justify-center pt-20">

      {!isLoggedIn ? (
        <div className="w-[490px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

          {/* Purple Header */}
          <div className="bg-[#4f3df5] px-7 py-6 text-white">
            <h1 className="text-2xl font-bold">
              Login Authentication
            </h1>

            <p className="mt-2 text-sm text-indigo-100">
              Activity 1
            </p>
          </div>


          {/* Form */}
          <div className="px-7 py-8">

            <form onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
                />
              </div>


              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
                />
              </div>


              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-[#4f3df5] font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Login
              </button>

            </form>


            {message && (
              <p
                className={`mt-5 text-center text-sm font-medium ${
                  message === "Login successful!"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}


            <p className="mt-6 text-center text-sm text-slate-400">
              Sample credentials — Username: admin, Password: 12345
            </p>

          </div>

        </div>

      ) : (

        <div className="w-[490px] rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
            ✓
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            Login Successful!
          </h2>

          <p className="mt-3 text-slate-500">
            Welcome, {username}
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 rounded-lg bg-[#4f3df5] px-8 py-3 font-semibold text-white hover:bg-[#4331e8]"
          >
            Logout
          </button>

        </div>

      )}

    </div>
  );
}

export default Login;