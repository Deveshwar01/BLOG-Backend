import { User } from "../models/users.js";
import { Blog } from "../models/blogSchema.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (users.length === 0) return res.status(404).json({ success: false, message: "No user exist" })
        return res.status(200).json({ users, })
    } catch (error) {
        next(error)
    }
}

export const createPost = async (req, res, next) => {
    try {
        const { Id, title, image, descriptionShort, descriptionLong, author } = req.body;
        if (!Id || !title || !image || !descriptionShort || !descriptionLong || !author) {
            return res.status(400).json({
                success: false,
                message: "Id,Title, description,Image and author are required fields"
            });
        }
        await Blog.create({ Id, title, image, descriptionShort, descriptionLong, author});
        res.status(201).json({
            success: true,
            message: "Post created successfully"
        });
    } catch (error) {
        next(error);
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const { Id } = req.params;

        // Validate ID format (optional)
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID",
            });
        }

        // Delete the post by Id
        const deletedPost = await Blog.findOneAndDelete({ Id });

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
export const updatePost = async (req, res, next) => {
    try {
        const { Id } = req.params;
        const { title, description, image, author } = req.body;
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID",
            });
        }
        const updatePost = await Blog.findOneAndUpdate(
            { Id },
            { title, description, image, author },
            { new: true }
        )

        if (!updatePost) {
            return res.status(404).json({
                success: false,
                message: "Post not updated",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Post Updated successfully",
            post: updatePost,
        });


    } catch (error) {
        next(error)
    }

}
export const getAllBlog = async (req, res, next) => {
    try {
        const blog = await Blog.find();
        console.log(blog);
        if (blog.length === 0) return res.status(404).json({ success: false, message: "No user exist" })
        return res.status(200).json({ blog, })
    } catch (error) {
        next(error)
    }
}