import Room from "../models/rooms.js";

const roomRoutes = (app) => {
  app.get("/rooms", async (request, response) => {
    const rooms = await Room.find({});
    response.json({ status: 200, rooms: rooms });

    try {
      request.setEncoding(rooms);
    } catch (error) {
      response.statusMessage(500).send(error);
    }
  });
};

// export default roomRoutes
export default roomRoutes;