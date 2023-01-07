import { set, connect } from "mongoose";
set("strictQuery", true);

const DB = process.env.DB_NAME;
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cnjvvtk.mongodb.net/${DB}?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);

const MongoDBClient = async () => {
  try {
    await connect(URI, {
      useNewUrlParser: true, //dans la doc
      useFindAndModify: false,
      useUnifiedTopology: true, // dans la doc
    })
      .then(() => console.log(`successfully connected to DB: ${DB}`))
      .catch((err) => console.log("Not connected: " + err));
  } catch (err) {
    throw Error(err);
  }
};

export default MongoDBClient;
