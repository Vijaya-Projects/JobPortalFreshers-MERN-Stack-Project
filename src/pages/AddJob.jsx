import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddJob() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // PROTECT PAGE
  useEffect(() => {

    if (!user || user.role !== "admin") {

      alert("Access Denied");

      navigate("/jobs");

    }

  }, [user, navigate]);

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: ""
  });

  const handleChange = (e) => {

    setJob({
      ...job,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res =
        await API.post("/jobs/add", job);

      alert(res.data.message);

      navigate("/jobs");

    } catch (err) {

      console.log(err);

      alert("Error adding job");

    }

  };

  return (

    <div className="container mt-4">

      <h2>Add Job</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Add Job
        </button>

      </form>

    </div>

  );

}

export default AddJob;