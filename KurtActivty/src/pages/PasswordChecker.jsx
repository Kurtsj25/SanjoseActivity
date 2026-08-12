import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const handleCheck = () => {
    if (!password) {
      setResult("");
      setMessage("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setResult("Weak Password");
      setMessage("Status: Weak – Create a stronger password.");
    } else if (password.length <= 9) {
      setResult("Medium Password");
      setMessage("Status: Weak – Create a stronger password.");
    } else {
      setResult("Strong Password");
      setMessage("Status: Strong – You can use this password.");
    }
  };

  const handleClear = () => {
    setPassword("");
    setResult("");
    setMessage("");
  };

  return (
    <div className="flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f3f7fb] pt-20">
      <div className="w-[490px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        {/* Header */}
        <div className="bg-[#4f3df5] px-7 py-6 text-white">
          <h1 className="text-2xl font-bold">
            Password Strength Checker
          </h1>

          <p className="mt-2 text-sm text-indigo-100">
            Activity 3
          </p>
        </div>

        {/* Body */}
        <div className="px-7 py-8">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setResult("");
                setMessage("");
              }}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />

            <p className="mt-2 text-sm text-slate-400">
              Character count: {password.length}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={handleCheck}
              className="h-12 flex-1 rounded-lg bg-[#4f3df5] font-semibold text-white transition hover:bg-[#4331e8]"
            >
              Check Password
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="h-12 flex-1 rounded-lg bg-slate-100 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Clear
            </button>
          </div>

          {/* Result */}
          {message && (
            <div
              className={`mt-5 rounded-lg px-4 py-3 text-sm ${
                result === "Strong Password"
                  ? "bg-green-50 text-green-700"
                  : result === "Medium Password"
                  ? "bg-yellow-50 text-yellow-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {result && (
                <p className="mb-1 font-bold">
                  {result}
                </p>
              )}

              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordChecker;