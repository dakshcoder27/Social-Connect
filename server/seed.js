import mongoose from "mongoose";
import dotenv from "dotenv";
import { users, posts } from "./data/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://daksh:daksh@cluster0.fkosm3c.mongodb.net/socialMedia?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    try {
      // Clear existing data
      await User.deleteMany({});
      await Post.deleteMany({});

      // Insert new data
      const insertedUsers = await User.insertMany(users);
      const insertedPosts = await Post.insertMany(posts);

      console.log("Data seeded successfully!");
      console.log("Users inserted:", insertedUsers.length);
      console.log("Posts inserted:", insertedPosts.length);
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      mongoose.disconnect();
    }
  })
  .catch((error) => console.log(`${error} did not connect`));
