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

    if (!studentName.trim() || score === "") {
      setError("Please enter student name and score.");
      return;
    }

    const numericScore = Number(score);

    if (numericScore < 0 || numericScore > 100) {
      setError("Invalid score");
      return;
    }

    let remarks = "";

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
      studentName,
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

  return (
    <div className="flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f3f7fb] pt-20">
      <div className="w-[490px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        {/* Header */}
        <div className="bg-[#4f3df5] px-7 py-6 text-white">
          <h1 className="text-2xl font-bold">Student Grade Evaluation</h1>
          <p className="mt-2 text-sm text-indigo-100">Activity 2</p>
        </div>

        {/* Form */}
        <div className="px-7 py-8">
          <form onSubmit={handleEvaluate}>
            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Student Name
              </label>
              <input
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Score
              </label>
              <input
                type="number"
                placeholder="Enter score (0-100)"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="h-12 flex-1 rounded-lg bg-[#4f3df5] font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Evaluate
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="h-12 flex-1 rounded-lg bg-slate-100 font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Clear
              </button>
            </div>
          </form>

          {error && (
            <p className="mt-5 text-center text-sm font-medium text-red-500">
              {error}
            </p>
          )}

          {result && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Student Name:</span>{" "}
                {result.studentName}
              </p>
              <p className="mb-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Score:</span>{" "}
                {result.score}
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Remarks:</span>{" "}
                {result.remarks}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GradeEvaluation;