import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (!customerName.trim() || consumption === "") {
      setError("Please enter customer name and electricity consumption.");
      return;
    }

    const kwh = Number(consumption);

    if (kwh < 0) {
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

    let status = "";

    if (totalBill >= 5000) {
      status = "High Electricity Usage";
    } else {
      status = "Normal Electricity Usage";
    }

    setResult({
      customerName,
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

  return (
    <div className="flex min-h-[calc(100vh-70px)] items-start justify-center bg-[#f3f7fb] pt-20">
      <div className="w-[490px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
        {/* Header */}
        <div className="bg-[#4f3df5] px-7 py-6 text-white">
          <h1 className="text-2xl font-bold">
            Electricity Bill Calculator
          </h1>

          <p className="mt-2 text-sm text-indigo-100">
            Activity 4
          </p>
        </div>

        {/* Body */}
        <div className="px-7 py-8">
          {/* Customer Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
                setError("");
              }}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Consumption */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Electricity Consumption (kWh)
            </label>

            <input
              type="number"
              min="0"
              placeholder="Enter consumption in kWh"
              value={consumption}
              onChange={(e) => {
                setConsumption(e.target.value);
                setError("");
              }}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCalculate}
              className="h-12 flex-1 rounded-lg bg-[#4f3df5] font-semibold text-white transition hover:bg-[#4331e8]"
            >
              Calculate Bill
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="h-12 flex-1 rounded-lg bg-slate-100 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Clear
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
                    Customer Name
                  </span>

                  <span className="font-semibold text-slate-800">
                    {result.customerName}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Consumption
                  </span>

                  <span className="font-semibold text-slate-800">
                    {result.consumption} kWh
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Rate Applied
                  </span>

                  <span className="font-semibold text-slate-800">
                    ₱{result.rate}/kWh
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-slate-700">
                      Total Bill
                    </span>

                    <span className="text-lg font-bold text-[#4f3df5]">
                      ₱{result.totalBill.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Usage Status
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      result.status === "High Electricity Usage"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElectricityBill;