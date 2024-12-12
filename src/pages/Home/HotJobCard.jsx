import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  console.log(job);
  const {
    company,
    company_logo,
    location,
    tittle,
    description,
    requirements,
    salaryRange,
    _id,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-14" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4>{company}</h4>
          <p className="flex items-center gap-1">
            <FaLocationDot /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{tittle}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill, i) => (
            <p
              className="border border-red-400 px-2 py-1 rounded-md hover:bg-blue-400 hover:text-black"
              key={i}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center gap-1">
            <FaDollarSign /> {salaryRange.min} - {salaryRange.max}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
