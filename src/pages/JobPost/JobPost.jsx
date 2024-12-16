const JobPost = () => {
  const handleJobPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = {
      min,
      max,
      currency,
    };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
  };
  return (
    <div>
      <form onSubmit={handleJobPost} className="card-body">
        <h1 className="text-3xl font-bold text-center">Job Post</h1>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Type */}

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue="Job Type"
            name="jobType"
            className="select select-ghost w-full  input input-bordered"
          >
            <option disabled>Job Type</option>
            <option>Full time</option>
            <option>Intern</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>
        {/* Category */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            defaultValue="Job Type"
            name="category"
            className="select select-ghost w-full  input input-bordered"
          >
            <option disabled>Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Web developer</option>
            <option>Accounts</option>
          </select>
        </div>
        {/* Salary Range */}
        <div className="grid lg:grid-cols-3 items-end gap-4">
          {/* Min Salary */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          {/* Max Salary */}
          <div className="form-control w-full">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          {/* Currency */}
          <div className="form-control w-full">
            <select
              defaultValue="currency"
              name="currency"
              className="select select-ghost w-full max-w-xs input input-bordered"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered h-40"
            required
          />
        </div>
        {/* Requirements */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Requirements</span>
          </label>
          <textarea
            type="text"
            name="requirements"
            placeholder="Requirements"
            className="input input-bordered h-40"
            required
          />
        </div>
        {/* Responsibilities */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Responsibilities</span>
          </label>
          <textarea
            type="text"
            name="responsibilities"
            placeholder="Responsibilities"
            className="input input-bordered h-40"
            required
          />
        </div>
        {/* Responsibilities */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered "
            required
          />
        </div>

        {/* Submit */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobPost;
