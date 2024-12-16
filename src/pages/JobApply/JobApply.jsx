import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id} = useParams();
  const {user}= useAuth()



  const handleApply = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const linkedIn = form.get("linkedIn");
    const github = form.get("github");
    const resume = form.get("resume");
    const newApply = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApply),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      });

  };
  return (
    <div className="min-h-[calc(100vh-288px)] flex items-center">
      <form onSubmit={handleApply} className="card-body max-w-lg mx-auto">
        <h2 className="text-3xl font-bold">Job Apply</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn url</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github url</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume url</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
