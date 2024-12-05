// import React from "react";

const employers = [
  {
    name: "Huỳnh Hoài Nam",
    email: "hoainam@gmail.com",
    company: "FPT Software",
    role: "Giám đốc",
    location: "Đà Nẵng",
    service: "Tiêu Chuẩn",
    contact: "Gửi Email",
  },
  {
    name: "Trần Ngọc Trọng",
    email: "trongtestuser@gmail.com",
    company: "Axon",
    role: "HR",
    location: "Hà Nội",
    service: "Chưa Đăng Ký",
    contact: "Gửi Email",
  },
  {
    name: "Nguyễn Ngọc Nhân",
    email: "nhantestuser@gmail.com",
    company: "CÔNG TY CỔ PHẦN VN ECOFLOOR",
    role: "Giám đốc",
    location: "Đà Nẵng",
    service: "Chưa Đăng Ký",
    contact: "Gửi Email",
  },
  {
    name: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
    company: "Công ty TNHH Shera Việt Nam",
    role: "HR",
    location: "Hà Nội",
    service: "Chưa Đăng Ký",
    contact: "Gửi Email",
  },
  // Add other employers as required
];

const EmployerTable = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Employers</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Tên
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Công Ty
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Dịch Vụ
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Đại Chỉ Công Ty
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Liên Hệ
              </th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/40" // Placeholder avatar
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{employer.name}</p>
                      <p className="text-sm text-gray-600">{employer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <p>{employer.company}</p>
                  <p className="text-sm text-gray-600">{employer.role}</p>
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    employer.service === "Tiêu Chuẩn"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                  {employer.service}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {employer.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    {employer.contact}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployerTable;
