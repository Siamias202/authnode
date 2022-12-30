import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const dbconnect = async () => {
  try {
        const connect = mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnect;
