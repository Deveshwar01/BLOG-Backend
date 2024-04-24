import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect("mongodb+srv://Blog:devesh40@cluster0.10ibais.mongodb.net/", {
        dbName: "BLOG-BACKEND",
    })
        .then((c) => console.log(`Data base connected`))
        .catch((e) => console.log(e))
}