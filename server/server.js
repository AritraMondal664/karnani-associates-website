// const path = require('path');
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');
// const authRoutes = require('./routes/authRoutes');
// const appointmentRoutes = require('./routes/appointmentRoutes');
// const updateRoutes = require('./routes/updateRoutes');
// const teamRoutes = require('./routes/teamRoutes');
// const testimonialRoutes = require('./routes/testimonialRoutes');
// const cors = require("cors");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(
//   "/uploads",
//   express.static(
//     path.join(__dirname, "uploads")
//   )
// );
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// app.use('/api/auth', authRoutes);
// app.use('/api/appointments', appointmentRoutes);
// app.use('/api/updates', updateRoutes);
// app.use('/api/team', teamRoutes);
// app.use('/api/testimonials', testimonialRoutes);

// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = app;









const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

// IMPORTANT: Load environment variables BEFORE importing routes
dotenv.config();

const connectDB = require("./config/db");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const updateRoutes = require("./routes/updateRoutes");
const teamRoutes = require("./routes/teamRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const cors = require("cors");

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static uploaded files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// API Routes
app.use("/api/auth", authRoutes);

app.use(
  "/api/appointments",
  appointmentRoutes
);

app.use("/api/updates", updateRoutes);

app.use("/api/team", teamRoutes);

app.use(
  "/api/testimonials",
  testimonialRoutes
);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});

module.exports = app;