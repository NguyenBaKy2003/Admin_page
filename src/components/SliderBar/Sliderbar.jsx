// import React from "react";

const Sidebar = () => {
  const menuItems = [
    { label: "Trang chủ", icon: "🏠" },
    { label: "Danh sách việc làm", icon: "📄" },
    { label: "Tạo việc làm", icon: "➕" },
    { label: "Thông tin cá nhân", icon: "👤" },
    { label: "Thoát", icon: "🚪" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 text-xl font-bold text-indigo-600">Job Finder</div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center px-4 py-3 hover:bg-indigo-100 cursor-pointer">
            <span className="text-lg mr-3">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
