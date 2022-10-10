import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    createdOn: {
        type: String,
        required: true,
    },
    updatedOn: {
        type: String,
        required: true,
    }
});

export const User = mongoose.model("User", UserSchema);
