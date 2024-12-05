import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      {/* Logo và Tiêu đề */}
      <div>
        <h1 className="text-gray-800 font-bold text-xl">Trang chủ</h1>
        <p className="text-sm max-sm:hidden text-gray-500">
          Nhà tuyển dụng / Trang chủ
        </p>
      </div>

      {/* Tìm kiếm */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
        />

        {/* Nút Nâng cấp gói */}
        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
