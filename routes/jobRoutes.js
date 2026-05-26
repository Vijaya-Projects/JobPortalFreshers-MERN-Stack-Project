import express from "express";
import { db } from "../config/db.js";

const router = express.Router();

/* =========================
   GET ALL JOBS
========================= */
router.get("/", (req, res) => {

  const sql = "SELECT * FROM jobs";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });

});


/* =========================
   ADD JOB
========================= */
router.post("/add", (req, res) => {

  const { title, company, location } = req.body;

  const sql =
    "INSERT INTO jobs(title, company, location) VALUES(?,?,?)";

  db.query(sql, [title, company, location], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Job Added Successfully"
    });

  });

});


/* =========================
   APPLY JOB
========================= */
router.post("/apply", (req, res) => {

  const { user_id, job_id } = req.body;

  // check already applied
  const checkSql =
    "SELECT * FROM job_applications WHERE user_id=? AND job_id=?";

  db.query(checkSql, [user_id, job_id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    // already applied
    if (result.length > 0) {

      return res.json({
        success: false,
        message: "Already Applied"
      });

    }

    // insert application
    const insertSql =
      "INSERT INTO job_applications(user_id, job_id) VALUES(?, ?)";

    db.query(insertSql, [user_id, job_id], (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Job Applied Successfully"
      });

    });

  });

});


/* =========================
   USER APPLIED JOBS
========================= */
router.get("/applied/:userId", (req, res) => {

  const sql = `
    SELECT jobs.*
    FROM jobs
    INNER JOIN job_applications
    ON jobs.id = job_applications.job_id
    WHERE job_applications.user_id = ?
  `;

  db.query(sql, [req.params.userId], (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json(err);

    }

    res.json(result);

  });

});


/* =========================
   UPDATE JOB
========================= */
router.put("/update/:id", (req, res) => {

  const { title, company, location } = req.body;

  const sql =
    "UPDATE jobs SET title=?, company=?, location=? WHERE id=?";

  db.query(
    sql,
    [title, company, location, req.params.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Job Updated Successfully"
      });

    }
  );

});


/* =========================
   DELETE JOB
========================= */
router.delete("/delete/:id", (req, res) => {

  const sql =
    "DELETE FROM jobs WHERE id=?";

  db.query(sql, [req.params.id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Job Deleted Successfully"
    });

  });

});

export default router;