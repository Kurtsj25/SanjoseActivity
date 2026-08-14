import { useState } from "react";
import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

const activities = [
  {
    id: "activity1",
    number: "01",
    title: "Login Authentication",
    description:
      "Validate sample credentials and manage login and logout state.",
    component: Login,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: "activity2",
    number: "02",
    title: "Student Grade Evaluation",
    description:
      "Enter a score and automatically evaluate the corresponding grade remark.",
    component: GradeEvaluation,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "activity3",
    number: "03",
    title: "Password Strength Checker",
    description:
      "Evaluate password length and classify it as weak, medium, or strong.",
    component: PasswordChecker,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "activity4",
    number: "04",
    title: "Electricity Bill Calculator",
    description:
      "Calculate an electricity bill using consumption values and tiered rates.",
    component: ElectricityBill,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "activity5",
    number: "05",
    title: "Employee Attendance Checker",
    description:
      "Evaluate an employee's time-in and classify their attendance status.",
    component: AttendanceChecker,
    gradient: "from-violet-500 to-purple-600",
  },
];

function App() {
  const [activePage, setActivePage] = useState("home");

  const activeActivity = activities.find(
    (activity) => activity.id === activePage
  );

  const ActiveActivity = activeActivity?.component;

  const renderHome = () => (
    <main className="min-h-[calc(100vh-68px)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {/* HERO */}
        <section className="mb-12 max-w-3xl md:mb-16">
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            React Activity Portal
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">
            Five interactive React activities demonstrating state, events,
            conditional logic, validation, and calculations.
          </p>
        </section>

        {/* ACTIVITY CARDS */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group flex min-h-[270px] flex-col rounded-2xl border border-white/[0.08] bg-[#0d1520]/80 p-6 transition duration-200 hover:border-white/[0.16] hover:bg-[#111b29]"
            >
              {/* CARD HEADER */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Activity {activity.number}
                </span>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${activity.gradient} text-xs font-bold text-white`}
                >
                  {activity.number}
                </div>
              </div>

              {/* CARD CONTENT */}
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {activity.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                {activity.description}
              </p>

              {/* OPEN BUTTON */}
              <button
                type="button"
                onClick={() => setActivePage(activity.id)}
                className="mt-7 flex w-full items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/[0.12] hover:bg-white/[0.09]"
              >
                <span>Open activity</span>

                <span className="text-slate-400 transition duration-200 group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </button>
            </article>
          ))}
        </section>
      </div>
    </main>
  );

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(circle at 10% 10%, #153238 0%, transparent 32%), radial-gradient(circle at 88% 12%, #2d2144 0%, transparent 30%), radial-gradient(circle at 75% 88%, #102d46 0%, transparent 35%), radial-gradient(circle at 15% 90%, #142d2c 0%, transparent 28%), linear-gradient(135deg, #05090d 0%, #08151c 32%, #101426 66%, #180d20 100%)",
      }}
    >
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#071016]/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 md:min-h-[68px] md:flex-row md:items-center md:justify-between md:py-2">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => setActivePage("home")}
              className="flex w-fit items-center gap-3 rounded-lg"
              aria-label="Go to home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 text-sm font-bold text-white">
                R
              </span>

              <div className="text-left">
                <span className="block text-sm font-semibold tracking-tight text-white sm:text-base">
                  React Activity
                </span>

                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Portal
                </span>
              </div>
            </button>

            {/* NAVIGATION */}
            <div className="flex w-full items-center gap-1 overflow-x-auto pb-1 md:w-auto md:pb-0">
              <button
                type="button"
                onClick={() => setActivePage("home")}
                aria-current={activePage === "home" ? "page" : undefined}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  activePage === "home"
                    ? "bg-white text-slate-950"
                    : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                Home
              </button>

              {activities.map((activity, index) => (
                <button
                  key={activity.id}
                  type="button"
                  onClick={() => setActivePage(activity.id)}
                  aria-current={
                    activePage === activity.id ? "page" : undefined
                  }
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    activePage === activity.id
                      ? "bg-white text-slate-950"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  Activity {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {activePage === "home" || !ActiveActivity ? (
        renderHome()
      ) : (
        <ActiveActivity />
      )}
    </div>
  );
}

export default App;