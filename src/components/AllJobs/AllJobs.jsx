import { useState, useEffect } from "react";
import axios from "axios"; // You can use axios for HTTP requests

const AllJobs = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/jobs/jobsall"
        );
        setJobList(response.data); // Set the fetched job data to state
      } catch (err) {
        setError("Error fetching job listings. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetch fails
  }

  // Delete a job by index
  const handleDelete = (index) => {
    const updatedJobs = jobList.filter((_, i) => i !== index);
    setJobList(updatedJobs);
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Employer
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Location
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Salary
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Application Deadline
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobList.map((job, index) => (
              <tr
                key={job.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="border border-gray-300 px-4 py-2">
                  {job.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.employer}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.salary.toLocaleString()} VNĐ
                </td>
                <td className="border border-gray-300 px-4 py-2">{job.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.application_deadline}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline">
                    Delete
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

export default AllJobs;
