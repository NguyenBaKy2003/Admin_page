// import React from "react";

import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:w-1/3 p-6">
          <img
            src="https://via.placeholder.com/150" // Replace with an avatar image
            alt="User Avatar"
            className="w-40 h-40 rounded-full mb-4 shadow-lg"
          />
          <h2 className="text-xl font-bold mb-2">Phạm Đức Nam</h2>
          <p className="text-gray-600 mb-1">Email: namuser@gmail.com</p>
          <p className="text-gray-600">Số điện thoại: 0123456789</p>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 p-6">
          {/* Experience */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Kinh nghiệm</h3>
            <p className="p-3 bg-white rounded border border-gray-200">
              2 years in website development, English good
            </p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Kỹ năng</h3>
            <div className="p-3 bg-white rounded border border-gray-200">
              <span className="inline-block bg-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                Spring Boot
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Học vấn</h3>
            <p className="p-3 bg-white rounded border border-gray-200">
              Đại học Đông Á
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">More Actions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Chọn tác vụ
                </label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Chặn người dùng</option>
                </select>
              </div>

              {/* Reason Input */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Lý do chặn
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Nhập lý do..."
                />
              </div>
            </div>

            {/* Checkbox & Button */}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="confirmation"
                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="confirmation" className="ml-2 text-sm">
                Tôi xác nhận chặn người dùng này
              </label>
            </div>

            <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">
              Chặn người dùng
            </button>
          </div>
        </div>
      </div>
      <Link to="/applicants">
        <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
          Quay Lại
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
