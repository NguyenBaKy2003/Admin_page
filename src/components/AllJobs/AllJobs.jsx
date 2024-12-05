import { useState } from "react";

const jobs = [
  {
    company: "FPT Software",
    recruiter: "Nguyen Van A",
    industry: "Technology",
    position: "Frontend Developer",
    jobType: "Full-time",
    location: "Đà Nẵng",
    salary: "$1,500 - $2,000",
    expirationDate: "2024-12-31",
    status: "Open",
  },
  {
    company: "Axon",
    recruiter: "Tran Ngoc Trong",
    industry: "Human Resources",
    position: "HR Specialist",
    jobType: "Part-time",
    location: "Hà Nội",
    salary: "$1,000 - $1,500",
    expirationDate: "2024-12-15",
    status: "Closed",
  },
  {
    company: "VN EcoFloor",
    recruiter: "Nguyen Ngoc Nhan",
    industry: "Manufacturing",
    position: "Backend Developer",
    jobType: "Full-time",
    location: "Đà Nẵng",
    salary: "$2,000 - $3,000",
    expirationDate: "2024-12-20",
    status: "Open",
  },
  {
    company: "Shera Việt Nam",
    recruiter: "Nguyen Van B",
    industry: "Construction",
    position: "Project Manager",
    jobType: "Contract",
    location: "Hà Nội",
    salary: "$3,000 - $4,000",
    expirationDate: "2024-12-25",
    status: "Open",
  },
];

const AllJobs = () => {
  const [jobList, setJobList] = useState(jobs);

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
                Company
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Recruiter
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Industry
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Position
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Job Type
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Location
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Salary
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Expiration Date
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
            {jobList.map((job, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="border border-gray-300 px-4 py-2">
                  {job.company}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.recruiter}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.industry}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.position}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.jobType}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.salary}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.expirationDate}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    job.status === "Open" ? "text-green-600" : "text-red-600"
                  }`}>
                  {job.status}
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
