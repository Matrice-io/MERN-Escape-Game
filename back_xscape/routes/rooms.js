import Room from "../models/rooms.js";

const roomRoutes = (app) => {
  app.get("/rooms", (request, response) => {
    Room.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  });
};

export default roomRoutes;