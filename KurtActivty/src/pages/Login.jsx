import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" && password === "") {
      setMessage("Please enter username and password.");
    } else if (username.trim() === "") {
      setMessage("Please enter your username.");
    } else if (password === "") {
      setMessage("Please enter your password.");
    } else if (username === "admin" && password === "12345") {
      setMessage("");
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
    <main className="min-h-[calc(100vh-68px)] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-md">
        {!isLoggedIn ? (
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520]/85">
            <div className="border-b border-white/[0.08] px-6 py-6 sm:px-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Activity 01
                </p>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-xs font-bold text-white">
                  01
                </span>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Login Authentication
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Enter your username and password to continue.
              </p>
            </div>

            <div className="px-6 py-7 sm:px-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (message) setMessage("");
                    }}
                    className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500/60 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (message) setMessage("");
                    }}
                    className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500/60 focus:bg-white/[0.06]"
                  />
                </div>

                {message && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-500/20 bg-red-500/[0.07] px-4 py-3"
                  >
                    <p className="text-sm text-red-300">{message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="h-12 w-full rounded-lg bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                  Sample credentials
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                    <p className="text-xs text-slate-500">Username</p>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      admin
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                    <p className="text-xs text-slate-500">Password</p>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520]/85">
            <div className="px-7 py-9 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl font-semibold text-emerald-400">
                ✓
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Activity 01
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Login successful
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                Welcome,{" "}
                <span className="font-semibold text-white">{username}</span>.
                You are now logged in.
              </p>

              <div className="mt-7 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-4 text-left">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-600">
                  Current user
                </p>

                <p className="mt-1 text-sm font-medium text-slate-300">
                  {username}
                </p>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="mt-6 h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-white transition hover:bg-white/[0.09]"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Login;