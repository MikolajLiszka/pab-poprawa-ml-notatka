import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const noteSchema = new Schema ({
    title: {
        type: String
    },

    content: {
        type: String
    },

    createDate: {
        type: Date
    },

    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag",
    }]
});

export const Note = mongoose.model('Note', noteSchema);