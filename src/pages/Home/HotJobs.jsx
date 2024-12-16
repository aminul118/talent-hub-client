import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import axios from "axios";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs", {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">Hot Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
