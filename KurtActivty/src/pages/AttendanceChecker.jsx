import { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    setError("");
    setResult(null);

    if (!employeeName.trim() && timeIn === "") {
      setError("Please enter employee name and time in.");
      return;
    }

    if (!employeeName.trim()) {
      setError("Please enter the employee name.");
      return;
    }

    if (timeIn === "") {
      setError("Please enter the employee's time in.");
      return;
    }

    const time = Number(timeIn);

    if (Number.isNaN(time) || time < 0 || time > 24) {
      setError("Please enter a valid time.");
      return;
    }

    let status;
    let message;

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
      employeeName: employeeName.trim(),
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

  const handleEmployeeChange = (e) => {
    setEmployeeName(e.target.value);
    setResult(null);
    setError("");
  };

  const handleTimeChange = (e) => {
    setTimeIn(e.target.value);
    setResult(null);
    setError("");
  };

  const getStatusStyle = (status) => {
    if (status === "On Time") {
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    }

    if (status === "Late") {
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
    }

    return "border-red-500/20 bg-red-500/10 text-red-400";
  };

  const getMessageStyle = (status) => {
    if (status === "On Time") {
      return "text-emerald-400";
    }

    if (status === "Late") {
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
                Activity 5
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-xs font-bold text-white">
                5
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Employee Attendance Checker
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Classify a decimal time-in value as On Time, Late, or Very Late.
            </p>
          </div>

          <div className="px-6 py-7 sm:px-7">
            <div>
              <label
                htmlFor="employeeName"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Employee Name
              </label>

              <input
                id="employeeName"
                type="text"
                placeholder="Enter employee name"
                value={employeeName}
                onChange={handleEmployeeChange}
                className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500/60 focus:bg-white/[0.06]"
              />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="timeIn"
                  className="text-sm font-medium text-slate-300"
                >
                  Time In
                </label>

                <span className="text-xs text-slate-600">
                  Decimal time
                </span>
              </div>

              <input
                id="timeIn"
                type="number"
                step="0.1"
                placeholder="e.g. 8.5"
                value={timeIn}
                onChange={handleTimeChange}
                className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500/60 focus:bg-white/[0.06]"
              />

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Example: 8.5 = 8:30 AM
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-lg border border-red-500/20 bg-red-500/[0.07] px-4 py-3"
              >
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={handleCheck}
                className="h-12 flex-1 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Check Attendance
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="h-12 flex-1 rounded-lg border border-white/[0.1] bg-white/[0.05] text-sm font-semibold text-slate-300 transition hover:bg-white/[0.09] hover:text-white"
              >
                Reset
              </button>
            </div>

            {result && (
              <div className="mt-7 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Attendance Result
                  </p>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                      result.status
                    )}`}
                  >
                    {result.status}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Employee Name
                  </span>

                  <span className="text-right text-sm font-semibold text-white">
                    {result.employeeName}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Time In
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {result.timeIn}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Attendance Status
                  </span>

                  <span
                    className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${getStatusStyle(
                      result.status
                    )}`}
                  >
                    {result.status}
                  </span>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                    Follow-up Message
                  </p>

                  <p
                    className={`mt-2 text-sm font-medium leading-6 ${getMessageStyle(
                      result.status
                    )}`}
                  >
                    {result.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AttendanceChecker;