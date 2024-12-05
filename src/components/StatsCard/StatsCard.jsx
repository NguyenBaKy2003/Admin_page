// import React from "react";

const StatsCard = ({ label, value, icon, growth }) => {
  const growthColor = growth.startsWith("-")
    ? "text-red-500"
    : "text-green-500";

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <p className={`text-sm mt-1 ${growthColor}`}>{growth}</p>
      </div>
      <div className="text-3xl text-indigo-600">{icon}</div>
    </div>
  );
};

export default StatsCard;
