import express from "express";
import { db } from "../config/db.js";

const router = express.Router();

/* =========================
   REGISTER USER
========================= */
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Registration Failed"
      });
    }

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully"
    });
  });
});

/* =========================
   LOGIN USER
========================= */
router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "User Not Found"
      });
    }

    const user = result[0];

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }

    return res.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  });

});
export default router;