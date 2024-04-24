import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Id: {
        type: Number,
    },
    title: {
        type: String,
        trim: true, // Remove leading and trailing whitespace
    },
    image: {
        type: String,
        trim: true,
    },
    descriptionShort: {
        type: String,
        trim: true,
    },
    descriptionLong: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // Index the createdAt field
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save hook to update the updatedAt field
// schema.pre('save', function(next) {
//     this.updatedAt = new Date();
//     next();
// });

export const Blog = mongoose.model('Blog', schema);
