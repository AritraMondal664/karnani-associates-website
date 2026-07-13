const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");


// Create Appointment
exports.createAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.create(req.body);

    await sendEmail(
      process.env.ADMIN_EMAIL,
      "New Consultation Request",
      `
      <h2>New Consultation Request</h2>

      <p><strong>Name:</strong> ${appointment.name}</p>

      <p><strong>Organisation:</strong>
      ${appointment.organization || "N/A"}</p>

      <p><strong>Email:</strong>
      ${appointment.email}</p>

      <p><strong>Phone:</strong>
      ${appointment.phone}</p>

      <p><strong>Service:</strong>
      ${appointment.service}</p>

      <p><strong>Message:</strong></p>

      <p>${appointment.message}</p>

      <hr />

      <p>
      Submitted from Karnani & Associates Website
      </p>
      `
    );

    res.status(201).json({
      success: true,
      data: appointment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Appointment Status
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const appointment = await Appointment.findById(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    appointment.status = req.body.status;

    const updatedAppointment =
      await appointment.save();

    res.status(200).json({
      success: true,
      data: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.deleteOne();

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};