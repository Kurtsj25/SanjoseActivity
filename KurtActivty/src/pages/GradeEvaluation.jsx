import { useState } from "react";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleEvaluate = (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (!studentName.trim() && score === "") {
      setError("Please enter student name and score.");
      return;
    }

    if (!studentName.trim()) {
      setError("Please enter the student's name.");
      return;
    }

    if (score === "") {
      setError("Please enter the student's score.");
      return;
    }

    const numericScore = Number(score);

    if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setError("Invalid score");
      return;
    }

    let remarks;

    if (numericScore >= 90) {
      remarks = "Excellent";
    } else if (numericScore >= 85) {
      remarks = "Very Good";
    } else if (numericScore >= 80) {
      remarks = "Good";
    } else if (numericScore >= 75) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    setResult({
      studentName: studentName.trim(),
      score: numericScore,
      remarks,
    });
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  };

  const getRemarkStyle = (remarks) => {
    if (remarks === "Excellent") {
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    }

    if (remarks === "Very Good") {
      return "border-blue-500/20 bg-blue-500/10 text-blue-400";
    }

    if (remarks === "Good") {
      return "border-cyan-500/20 bg-cyan-500/10 text-cyan-400";
    }

    if (remarks === "Passed") {
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
    }

    return "border-red-500/20 bg-red-500/10 text-red-400";
  };

  return (
    <main className="min-h-[calc(100vh-68px)] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520]/85">
          <div className="border-b border-white/[0.08] px-6 py-6 sm:px-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Activity 2
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white">
                2
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Student Grade Evaluation
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Enter a student's score to calculate the corresponding grade
              remark.
            </p>
          </div>

          <div className="px-6 py-7 sm:px-7">
            <form onSubmit={handleEvaluate} className="space-y-5">
              <div>
                <label
                  htmlFor="studentName"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Student Name
                </label>

                <input
                  id="studentName"
                  type="text"
                  placeholder="Enter student name"
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    if (error) setError("");
                  }}
                  className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/[0.06]"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="score"
                    className="text-sm font-medium text-slate-300"
                  >
                    Score
                  </label>

                  <span className="text-xs text-slate-600">0 – 100</span>
                </div>

                <input
                  id="score"
                  type="number"
                  placeholder="Enter score"
                  value={score}
                  onChange={(e) => {
                    setScore(e.target.value);
                    if (error) setError("");
                  }}
                  className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500/60 focus:bg-white/[0.06]"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/[0.07] px-4 py-3"
                >
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Evaluate
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
                <div className="border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Evaluation Result
                    </p>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${getRemarkStyle(
                        result.remarks
                      )}`}
                    >
                      {result.remarks}
                    </span>
                  </div>
                </div>

                <div className="px-5">
                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-4">
                    <span className="text-sm text-slate-500">
                      Student Name
                    </span>

                    <span className="text-right text-sm font-semibold text-white">
                      {result.studentName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-4">
                    <span className="text-sm text-slate-500">
                      Score
                    </span>

                    <span className="text-sm font-semibold text-white">
                      {result.score}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm text-slate-500">
                      Remarks
                    </span>

                    <span
                      className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${getRemarkStyle(
                        result.remarks
                      )}`}
                    >
                      {result.remarks}
                    </span>
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

export default GradeEvaluation;