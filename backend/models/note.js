const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const NoteSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    writtenDate: {

    },
    author: {
        type: ObjectId,
        ref: "User",
    }
})

mongoose.model("Note", NoteSchema)