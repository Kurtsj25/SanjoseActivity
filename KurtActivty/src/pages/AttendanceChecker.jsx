import { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    setError("");
    setResult(null);

    if (!employeeName.trim() || timeIn === "") {
      setError("Please enter employee name and time in.");
      return;
    }

    const time = Number(timeIn);

    if (time < 0 || time > 24) {
      setError("Please enter a valid time.");
      return;
    }

    let status = "";
    let message = "";

    if (time <= 7) {
      status = "On Time";
      message = "Status: On Time – Good job!";
    } else if (time <= 8) {
      status = "Late";
      message = "Status: Late – Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late – Report to your supervisor.";
    }

    setResult({
      employeeName,
      timeIn: time,
      status,
      message,
    });
  };

  const handleReset = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  return (
    <div className="flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f3f7fb] pt-20">
      <div className="w-[490px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        {/* Header */}
        <div className="bg-[#4f3df5] px-7 py-6 text-white">
          <h1 className="text-2xl font-bold">
            Employee Attendance Checker
          </h1>

          <p className="mt-2 text-sm text-indigo-100">
            Activity 5
          </p>
        </div>

        {/* Body */}
        <div className="px-7 py-8">
          {/* Employee Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Employee Name
            </label>

            <input
              type="text"
              placeholder="Enter employee name"
              value={employeeName}
              onChange={(e) => {
                setEmployeeName(e.target.value);
                setError("");
              }}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Time In */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Time In
            </label>

            <input
              type="number"
              step="0.1"
              placeholder="e.g. 8.5 = 8:30 AM"
              value={timeIn}
              onChange={(e) => {
                setTimeIn(e.target.value);
                setError("");
              }}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCheck}
              className="h-12 flex-1 rounded-lg bg-[#4f3df5] font-semibold text-white transition hover:bg-[#4331e8]"
            >
              Check Attendance
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="h-12 flex-1 rounded-lg bg-slate-100 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Reset
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="mt-5 text-center text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Result */}
          {result && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="space-y-3">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Employee Name
                  </span>

                  <span className="font-semibold text-slate-800">
                    {result.employeeName}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Time In
                  </span>

                  <span className="font-semibold text-slate-800">
                    {result.timeIn}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Attendance Status
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      result.status === "On Time"
                        ? "bg-green-100 text-green-700"
                        : result.status === "Late"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <p className="text-sm leading-6 text-slate-600">
                    {result.message}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AttendanceChecker;