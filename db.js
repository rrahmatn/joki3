import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    minPoolSize: 10,
    maxPoolSize: 400,
  });
};

export const db = mongoose.connection.useDb("flutter", {
  useCache: true,
});

export let product = new mongoose.Schema({
  pname: {
      type: String,
      required: true,
  },
  pprice: {
      type: String,
      required: true,
  },
  pdesc: {
      type: String,
      required: true,
  }
  
});

