import { Podcast } from "../models/podcastSchema.js";

export const createPodcast = async (req, res, next) => {
    try {
        const { Id, title, youtubeLink, image, author } = req.body;
        if (!Id || !title || !youtubeLink || !image) {
            return res.status(400).json({
                success: false,
                message: "Id,Title, youtubeLink, Image are required fields"
            });
        }
        await Podcast.create({ Id, title, youtubeLink, image, author });
        res.status(201).json({
            success: true,
            message: "Postcast uploaded successfully"
        });
    } catch (error) {
        next(error);
    }
}
export const deletePodcast = async (req, res, next) => {
    try {
        const { Id } = req.params;

        // Validate ID format (optional)
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid postcast ID",
            });
        }

        // Delete the post by Id
        const deletedPost = await Podcast.findOneAndDelete({ Id });

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
export const getAllPodcast = async (req, res, next) => {
    try {
        const podcast = await Podcast.find();
        if (podcast.length === 0) return res.status(404).json({ success: false, message: "No podcast exist" })
        return res.status(200).json({ podcast, })
    } catch (error) {
        next(error)
    }
}