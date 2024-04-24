import express from "express"
import cors from "cors"
import userRouter from "./routes/user.js"
import adminRouter from './routes/admin.js'
import podcastRouter from './routes/podcast.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser"
export const app = express();


config({
    path: "./dataBase/config.env"
})

// using middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Router calls
app.use('/api/v1/users', userRouter)
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/admin', podcastRouter);
