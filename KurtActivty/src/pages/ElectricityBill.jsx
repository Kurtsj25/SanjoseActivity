import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (!customerName.trim() && consumption === "") {
      setError("Please enter customer name and electricity consumption.");
      return;
    }

    if (!customerName.trim()) {
      setError("Please enter the customer name.");
      return;
    }

    if (consumption === "") {
      setError("Please enter electricity consumption.");
      return;
    }

    const kwh = Number(consumption);

    if (Number.isNaN(kwh) || kwh < 0) {
      setError("Please enter a valid electricity consumption.");
      return;
    }

    let rate = 0;

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = kwh * rate;

    const status =
      totalBill >= 5000
        ? "High Electricity Usage"
        : "Normal Electricity Usage";

    setResult({
      customerName: customerName.trim(),
      consumption: kwh,
      rate,
      totalBill,
      status,
    });
  };

  const handleClear = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
    setError("");
  };

  const handleCustomerChange = (e) => {
    setCustomerName(e.target.value);
    setResult(null);
    setError("");
  };

  const handleConsumptionChange = (e) => {
    setConsumption(e.target.value);
    setResult(null);
    setError("");
  };

  const formatCurrency = (amount) =>
    amount.toLocaleString("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <main className="min-h-[calc(100vh-68px)] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520]/85">
          <div className="border-b border-white/[0.08] px-6 py-6 sm:px-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Activity 04
              </p>

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
                04
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Electricity Bill Calculator
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Calculate an electricity bill based on consumption and the
              corresponding rate per kWh.
            </p>
          </div>

          <div className="px-6 py-7 sm:px-7">
            <form onSubmit={handleCalculate} className="space-y-5">
              <div>
                <label
                  htmlFor="customerName"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Customer Name
                </label>

                <input
                  id="customerName"
                  type="text"
                  placeholder="Enter customer name"
                  value={customerName}
                  onChange={handleCustomerChange}
                  className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/[0.06]"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="consumption"
                    className="text-sm font-medium text-slate-300"
                  >
                    Consumption
                  </label>

                  <span className="text-xs text-slate-600">
                    kWh
                  </span>
                </div>

                <div className="relative">
                  <input
                    id="consumption"
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Enter electricity consumption"
                    value={consumption}
                    onChange={handleConsumptionChange}
                    className="h-12 w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 pr-14 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:bg-white/[0.06]"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-600">
                    kWh
                  </span>
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/20 bg-red-500/[0.07] px-4 py-3"
                >
                  <p className="text-sm text-red-300">
                    {error}
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Calculate Bill
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
                    Bill Summary
                  </p>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                      result.status === "High Electricity Usage"
                        ? "border-red-500/20 bg-red-500/10 text-red-400"
                        : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {result.status === "High Electricity Usage"
                      ? "High Usage"
                      : "Normal Usage"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Customer
                  </span>

                  <span className="text-right text-sm font-semibold text-white">
                    {result.customerName}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Consumption
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {result.consumption.toLocaleString()} kWh
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Rate Applied
                  </span>

                  <span className="text-sm font-semibold text-white">
                    ₱{result.rate.toFixed(2)} / kWh
                  </span>
                </div>

                <div className="border-b border-white/[0.07] bg-white/[0.02] px-5 py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                    Total Bill
                  </p>

                  <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                    {formatCurrency(result.totalBill)}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm text-slate-500">
                    Usage Status
                  </span>

                  <span
                    className={`text-right text-sm font-semibold ${
                      result.status === "High Electricity Usage"
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ElectricityBill;