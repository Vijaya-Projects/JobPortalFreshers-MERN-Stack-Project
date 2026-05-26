import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // logged-in user
  const user =
    JSON.parse(localStorage.getItem("user"));

  // GET JOBS
  useEffect(() => {

    API.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));

  }, []);

  /* =========================
      APPLY JOB
  ========================= */
  const applyJob = async (jobId) => {

    if (!user) {

      alert("Please Login First");

      return;

    }

    try {

      const res = await API.post(
        "/jobs/apply",
        {
          user_id: user.id,
          job_id: jobId
        }
      );

      alert(res.data.message);

      if (res.data.success) {

        setAppliedJobs([
          ...appliedJobs,
          jobId
        ]);

      }

    } catch (err) {

      console.log(err);

      alert("Error applying job");

    }

  };

  /* =========================
      DELETE JOB
  ========================= */
  const deleteJob = async (id) => {

    try {

      const res =
        await API.delete(`/jobs/delete/${id}`);

      alert(res.data.message);

      // remove deleted job
      setJobs(
        jobs.filter((job) => job.id !== id)
      );

    } catch (err) {

      console.log(err);

    }

  };

  /* =========================
      EDIT JOB
  ========================= */
  const editJob = async (job) => {

    const title =
      prompt("Enter Title", job.title);

    const company =
      prompt("Enter Company", job.company);

    const location =
      prompt("Enter Location", job.location);

    try {

      const res =
        await API.put(
          `/jobs/update/${job.id}`,
          {
            title,
            company,
            location
          }
        );

      alert(res.data.message);

      // refresh jobs
      window.location.reload();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="container mt-4">

      <h2>Available Jobs</h2>

      {/* ADMIN MESSAGE */}
      {user?.role === "admin" && (

        <div className="alert alert-info">
          Admin Mode: You can manage jobs
        </div>

      )}

      <div className="row">

        {jobs.map((job) => (

          <div
            className="col-md-4"
            key={job.id}
          >

            <div className="card shadow-sm p-3 mb-3">

              <h5>{job.title}</h5>

              <p>{job.company}</p>

              <p>{job.location}</p>

              {/* USER APPLY BUTTON */}
              {user?.role === "user" && (

                appliedJobs.includes(job.id) ? (

                  <button
                    className="btn btn-success"
                    disabled
                  >
                    Applied
                  </button>

                ) : (

                  <button
                    className="btn btn-primary"
                    onClick={() => applyJob(job.id)}
                  >
                    Apply
                  </button>

                )

              )}

              {/* ADMIN BUTTONS */}
              {user?.role === "admin" && (

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-warning"
                    onClick={() => editJob(job)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete
                  </button>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Jobs;