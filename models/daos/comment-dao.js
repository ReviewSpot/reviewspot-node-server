import { Review } from "../review.js";
import { Comment } from "../comment.js";

const getAllCommentsWithReviewId = async (reviewId) => {
    try {
        const review = await Review.findById(reviewId, { comments: 1 });
        const comments = review.comments;
        return [comments, null];
    } catch (error) {
        return [null, error];
    }
};

const createCommentOnReview = async (reviewId, author, content) => {
    try {
        const newComment = new Comment({
            author,
            content,
        });
        await Review.findByIdAndUpdate(reviewId, {
            comments: [...comments, newComment],
        });
        await newComment.save();
        return [newComment, null];
    } catch (error) {
        return [null, error];
    }
};

const editComment = async (commentId, newContent) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId, {
            content: newContent,
            updatedAt: Date.now(),
        });
        return [updatedComment, null];
    } catch (error) {
        return [null, error];
    }
};

// TODO: Do we need to manually delete a comment from a review?
const deleteComment = async (commentId) => {
    try {
        await Comment.findByIdAndDelete(commentId);
        return [true, null];
    } catch (error) {
        return [null, error];
    }
};

const userOwnsComment = async (userId, commentId) => {
    try {
        const comment = await Comment.findById(commentId);
        return [comment.author === userId, null];
    } catch (error) {
        return [null, error];
    }
};

export default {
    getAllCommentsWithReviewId,
    createCommentOnReview,
    deleteComment,
    editComment,
    userOwnsComment,
};
