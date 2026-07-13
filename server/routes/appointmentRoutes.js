const express = require("express");

const {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} = require("../controllers/appointmentController");

const router = express.Router();

// GET all appointments
// POST new appointment
router
  .route("/")
  .get(getAppointments)
  .post(createAppointment);

// UPDATE appointment status
router
  .route("/:id")
  .put(updateAppointmentStatus)

// DELETE appointment
  .delete(deleteAppointment);

module.exports = router;