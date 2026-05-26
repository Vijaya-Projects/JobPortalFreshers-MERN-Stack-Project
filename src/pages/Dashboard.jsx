import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [jobs, setJobs] = useState([]);

  const user =
    JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    API.get(`/jobs/applied/${user.id}`)
      .then((res) => {

        setJobs(res.data);

      })
      .catch((err) => console.log(err));

  }, [user.id]);

  return (

    <div className="container mt-4">

      <h2>
        Welcome {user.name}
      </h2>

      <h4 className="mt-4">
        Applied Jobs
      </h4>

      {jobs.length === 0 ? (

        <div className="alert alert-info">
          No Applied Jobs
        </div>

      ) : (

        <div className="row">

          {jobs.map((job) => (

            <div
              className="col-md-4"
              key={job.id}
            >

              <div className="card p-3 mb-3 shadow-sm">

                <h5>{job.title}</h5>

                <p>{job.company}</p>

                <p>{job.location}</p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Dashboard;