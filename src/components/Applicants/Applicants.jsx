// import React from "react";

import { Link } from "react-router-dom";

const applicants = [
  {
    name: "Phạm Đức Nam",
    email: "namuser@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Đà Nẵng",
    status: "Access",
  },
  {
    name: "Nguyễn Văn A",
    email: "testuser1@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Hà Nội",
    status: "Access",
  },
  {
    name: "Nguyễn Văn B",
    email: "testuser2@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Hồ Chí Minh",
    status: "Access",
  },
  {
    name: "Nguyễn Văn K",
    email: "testuser3@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Đà Nẵng",
    status: "Access",
  },
  {
    name: "Nguyễn Văn L",
    email: "testuser4@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Hà Nội",
    status: "Access",
  },
  {
    name: "Nguyễn Văn M",
    email: "testuser5@gmail.com",
    phone: "0123456789",
    address: "Thành Phố Hồ Chí Minh",
    status: "Access",
  },
  {
    name: "Nguyen Ba Ky",
    email: "nbk1936@donga.edu.vn",
    phone: "0974538378",
    address: "Thành Phố Hồ Chí Minh",
    status: "Access",
  },
];

const ApplicantsTable = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Applicant List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Address
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.address}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    applicant.status === "Access"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                  {applicant.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to="/userprofile">
                    {" "}
                    <button className="text-blue-500 hover:underline">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
