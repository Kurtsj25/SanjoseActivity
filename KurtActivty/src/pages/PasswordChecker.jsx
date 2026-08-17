import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();

    if (!password) {
      setResult("");
      setMessage("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setResult("Weak");
      setMessage("Please create a stronger password.");
    } else if (password.length <= 9) {
      setResult("Medium");
      setMessage("Consider creating a longer password.");
    } else {
      setResult("Strong");
      setMessage("You can use this password.");
    }
  };

  const handleClear = () => {
    setPassword("");
    setResult("");
    setMessage("");
    setShowPassword(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setResult("");
    setMessage("");
  };

  const getResultStyle = () => {
    if (result === "Strong") {
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    }

    if (result === "Medium") {
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
    }

    return "border-red-500/20 bg-red-500/10 text-red-400";
  };

  const getMessageStyle = () => {
    if (result === "Strong") {
      return "text-emerald-400";
    }

    if (result === "Medium") {
      return "text-amber-400";
    }

    return "text-red-400";
  };

  return (
    <main className="min-h-[calc(100vh-68px)] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520]/85">
          <div className="border-b border-white/[0.08] px-6 py-6 sm:px-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Activity 3
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
                3
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Password Strength Checker
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Check your password length and classify it as Weak, Medium, or
              Strong.
            </p>
          </div>

          <div className="px-6 py-7 sm:px-7">
            <form onSubmit={handleCheck}>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-300"
                  >
                    Password
                  </label>

                  <span className="text-xs text-slate-600">
                    {password.length} characters
                  </span>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 pr-16 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500/60 focus:bg-white/[0.06]"
                  />

                  {password && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 transition hover:text-white"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  )}
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Password strength is determined by its total character
                  length.
                </p>
              </div>

              {message && !result && (
                <div
                  role="alert"
                  className="mt-5 rounded-lg border border-red-500/20 bg-red-500/[0.07] px-4 py-3"
                >
                  <p className="text-sm text-red-300">{message}</p>
                </div>
              )}

              <div className="mt-5 flex gap-3">
                <button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Check Password
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="h-12 flex-1 rounded-lg border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-slate-300 transition hover:bg-white/[0.09] hover:text-white"
                >
                  Clear
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-7 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Password Result
                  </p>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getResultStyle()}`}
                  >
                    {result}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
                    <span className="text-sm text-slate-500">
                      Password Status
                    </span>

                    <span
                      className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${getResultStyle()}`}
                    >
                      {result}
                    </span>
                  </div>

                  <div className="border-b border-white/[0.07] py-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-600">
                      Strength Message
                    </p>

                    <p
                      className={`mt-2 text-sm font-medium ${getMessageStyle()}`}
                    >
                      {message}
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        Strength
                      </span>

                      <span className="text-xs text-slate-600">
                        {password.length} characters
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <div
                        className={`h-2 flex-1 rounded-full ${
                          result === "Weak"
                            ? "bg-red-500"
                            : result === "Medium"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />

                      <div
                        className={`h-2 flex-1 rounded-full ${
                          result === "Medium"
                            ? "bg-amber-500"
                            : result === "Strong"
                            ? "bg-emerald-500"
                            : "bg-white/[0.08]"
                        }`}
                      />

                      <div
                        className={`h-2 flex-1 rounded-full ${
                          result === "Strong"
                            ? "bg-emerald-500"
                            : "bg-white/[0.08]"
                        }`}
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-[11px] text-slate-600">
                      <span>Weak</span>
                      <span>Medium</span>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PasswordChecker;