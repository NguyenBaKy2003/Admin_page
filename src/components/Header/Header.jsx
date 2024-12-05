// import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <div>
        <h1 className="text-gray-800 font-bold text-xl">Trang chủ</h1>
        <p className="text-sm text-gray-500">Nhà tuyển dụng / Trang chủ</p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
        />
        <button className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Nâng cấp gói
        </button>
      </div>
    </div>
  );
};

export default Header;
