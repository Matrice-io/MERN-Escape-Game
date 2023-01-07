import { Schema, model } from "mongoose";

// we don't need the rooms model cause we don't need to create any new model yet

const roomSchema = new Schema(
    {
        name: {type: String, required: true},
        creationDate: {type: Date, required: true}
    },
    { collection: "Room" }
)

const Room = model("Room", roomSchema);

export default Room;
