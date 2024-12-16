import React, { useState, useEffect } from "react";
import axios from "axios"; // If you're using axios for HTTP requests

const EmployerTable = () => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employers data from API
  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/employer/employers"
        );
        setEmployers(response.data); // Set the data to state
      } catch (err) {
        setError("Error fetching data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchEmployers();
  }, []); // Empty dependency array to ensure it runs once when component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error if the fetch fails
  }

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
                      <p className="font-semibold">
                        {employer.User.firstName} {employer.User.lastName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {employer.User.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <p>{employer.company_name}</p>
                  <p className="text-sm text-gray-600">{employer.position}</p>
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    employer.service_id === 3
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                  {employer.service_id === 3 ? "Tiêu Chuẩn" : "Chưa Đăng Ký"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {employer.company_address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    Gửi Email
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
