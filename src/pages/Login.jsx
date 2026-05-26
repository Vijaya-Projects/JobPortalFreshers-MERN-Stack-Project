import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate(); // ✅ HERE (inside component)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      if (res.data.success) {

   localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
   );

   alert("Login Successful");

   // ADMIN
   if (res.data.user.role === "admin") {

      navigate("/add-job");

   }

   // USER
   else {

      navigate("/jobs");

   }

}
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="container mt-5">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;