// import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Trang chủ", icon: "🏠", path: "/" },
    { label: "Danh sách việc làm", icon: "📄", path: "/jobs" },
    { label: "Tạo việc làm", icon: "➕", path: "/createjob" },
    { label: "Thông tin cá nhân", icon: "👤", path: "/profile" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 text-xl font-bold text-indigo-600">Job Finder</div>
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg ${
                isActive
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-700"
              } hover:bg-indigo-100 transition`
            }>
            <span className="text-lg mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
