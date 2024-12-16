import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  const { company, title: title, deadline, jobType, _id } = job;
  return (
    <div>
      <h1>Details</h1>
      <p>{company}</p>
      <p>{title}</p>
      <Link to={`/jobApply/${_id}`} className="btn btn-primary">
        Apply
      </Link>
    </div>
  );
};

export default JobDetails;
