import mongoose from "mongoose"

const schema = new mongoose.Schema({
    Id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        trim: true,
    },
    youtubeLink: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
export const Podcast = mongoose.model('Podcast', schema)
