import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApplicantsTable = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/applicant/applicants"
        );
        setApplicants(response.data); // Set the applicants' data
      } catch (err) {
        setError("Failed to fetch applicants. Please try again later.");
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false); // Set loading to false once the request completes
      }
    };

    fetchApplicants();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <div>Loading applicants...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
                Skills
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
                  {applicant.User.firstName} {applicant.User.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.User.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.User.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {applicant.User.address || "N/A"}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {applicant.Skills && applicant.Skills.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {applicant.Skills.map((skill, idx) => (
                        <li key={idx}>{skill.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No skills available</p>
                  )}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    applicant.User.status === "Access"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}>
                  {applicant.User.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/userprofile/${applicant.user_id}`}>
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
