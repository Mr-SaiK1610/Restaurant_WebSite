import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, date, time, phone } = req.body;

    console.log("BODY:", req.body); // Debug

    // Validation
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
    }

    // Save to DB
    await Reservation.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });

  } catch (error) {
    console.log("ERROR:", error); // Debug

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export default send_reservation;
