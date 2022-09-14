import mongoose from "mongoose";
const { Schema } = mongoose;

const tagSchema = new Schema ({
    name: {
        type: String
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note",
    }
});

export const Tag = mongoose.model('Tag', tagSchema);