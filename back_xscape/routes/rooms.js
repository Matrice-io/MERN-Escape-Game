import Room from "../models/rooms.js";

const roomRoutes = (app) => {
  app.get("http://http://localhost:5000/rooms", async (request, response) => {
    const rooms = await Room.find({});
    response.json({ status: 200, users: users });

    try {
      request.setEncoding(rooms);
    } catch (error) {
      response.statusMessage(500).send(error);
    }
  });
};

// export default roomRoutes
export default roomRoutes;