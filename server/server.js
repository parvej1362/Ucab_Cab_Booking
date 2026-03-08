const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/config");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database Connection
// connectDB(); // Uncomment when MONGO_URI is set

// Routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
    res.send("UCAB Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});