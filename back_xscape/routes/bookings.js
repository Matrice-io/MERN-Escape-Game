import Booking from "./models/bookings.js"

const bookingRoutes = (app) => {
    app.get("/bookings", (req, res) => {
      Booking.find({})
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(400).json({ err });
          });
    });

    app.get("/booking/:roomId", (req, res) => {
        const roomId = req.params.roomId;
        Booking.find({ roomId: roomId })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    })

}