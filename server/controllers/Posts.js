import Post from '../models/Post.js';

export const handleGetPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch (error) {
        res.status(500).json({"message": error.message});
    }
}

export const handleCreatePost = async (req, res) => {
    const post = req.body;
    try{
        const newPost = new Post(post);
        await newPost.save();
        res.status(201).json(newPost);
    }catch (error) {
        res.status(409).json({"message": error.message});
    } 
}