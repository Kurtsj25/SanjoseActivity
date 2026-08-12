import { useState } from "react";

import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    if (activePage === "activity1") {
      return <Login />;
    } else if (activePage === "activity2") {
      return <GradeEvaluation />;
    } else if (activePage === "activity3") {
      return <PasswordChecker />;
    } else if (activePage === "activity4") {
      return <ElectricityBill />;
    } else if (activePage === "activity5") {
      return <AttendanceChecker />;
    }

    return (
      <section className="min-h-[calc(100vh-70px)] bg-[#f3f7fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {/* HOME TITLE */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
              React Activity Portal
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-500 md:text-lg">
              Five interactive React activities demonstrating state, events,
              conditional logic, validation, and calculations.
            </p>
          </div>

          {/* ACTIVITY CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* ACTIVITY 1 */}
            <div className="flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                1
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Login Authentication
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                Validate a username and password against sample credentials and
                manage login/logout state.
              </p>

              <button
                type="button"
                onClick={() => setActivePage("activity1")}
                className="mt-5 w-full rounded-lg bg-[#4f3df5] px-4 py-3 font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Open Activity
              </button>
            </div>

            {/* ACTIVITY 2 */}
            <div className="flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                2
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Student Grade Evaluation
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                Enter a student's score and get an automatic remark based on
                grade ranges.
              </p>

              <button
                type="button"
                onClick={() => setActivePage("activity2")}
                className="mt-5 w-full rounded-lg bg-[#4f3df5] px-4 py-3 font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Open Activity
              </button>
            </div>

            {/* ACTIVITY 3 */}
            <div className="flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                3
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Password Strength Checker
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                Check password length and receive live feedback on how strong it
                is.
              </p>

              <button
                type="button"
                onClick={() => setActivePage("activity3")}
                className="mt-5 w-full rounded-lg bg-[#4f3df5] px-4 py-3 font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Open Activity
              </button>
            </div>

            {/* ACTIVITY 4 */}
            <div className="flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                4
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Electricity Bill Calculator
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                Calculate a customer's electricity bill based on kWh consumption
                and tiered rates.
              </p>

              <button
                type="button"
                onClick={() => setActivePage("activity4")}
                className="mt-5 w-full rounded-lg bg-[#4f3df5] px-4 py-3 font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Open Activity
              </button>
            </div>

            {/* ACTIVITY 5 */}
            <div className="flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 font-bold text-indigo-600">
                5
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                Employee Attendance Checker
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                Check an employee's time-in and determine whether they are on
                time, late, or very late.
              </p>

              <button
                type="button"
                onClick={() => setActivePage("activity5")}
                className="mt-5 w-full rounded-lg bg-[#4f3df5] px-4 py-3 font-semibold text-white transition hover:bg-[#4331e8]"
              >
                Open Activity
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#f3f7fb]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => setActivePage("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4f3df5] font-bold text-white">
              R
            </div>

            <span className="text-lg font-bold text-slate-800">
              React Activity Portal
            </span>
          </button>

          {/* NAVIGATION */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setActivePage("home")}
              className={
                activePage === "home"
                  ? "rounded-lg bg-[#4f3df5] px-5 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => setActivePage("activity1")}
              className={
                activePage === "activity1"
                  ? "rounded-lg bg-[#4f3df5] px-4 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Activity 1
            </button>

            <button
              type="button"
              onClick={() => setActivePage("activity2")}
              className={
                activePage === "activity2"
                  ? "rounded-lg bg-[#4f3df5] px-4 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Activity 2
            </button>

            <button
              type="button"
              onClick={() => setActivePage("activity3")}
              className={
                activePage === "activity3"
                  ? "rounded-lg bg-[#4f3df5] px-4 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Activity 3
            </button>

            <button
              type="button"
              onClick={() => setActivePage("activity4")}
              className={
                activePage === "activity4"
                  ? "rounded-lg bg-[#4f3df5] px-4 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Activity 4
            </button>

            <button
              type="button"
              onClick={() => setActivePage("activity5")}
              className={
                activePage === "activity5"
                  ? "rounded-lg bg-[#4f3df5] px-4 py-3 text-sm font-semibold text-white"
                  : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Activity 5
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;