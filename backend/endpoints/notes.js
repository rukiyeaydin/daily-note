const express = require("express")
const loginRequired = require("../middleware/loginRequired")
const router = express.Router()
const mongoose = require("mongoose")
const Note = mongoose.model("Note")

router.get('/allnotes', loginRequired, (req, res) => {
    Note.find()
    .populate("author", "_id name username")
    .then((notes) => {
        res.json({notes})
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/create-note', loginRequired, (req, res) => {
    const { header, content } = req.body;
    if (!header || !content) {
        return res.status(422).json({ error: "fill all the blanks" });
    }

    const note = new Note({
        header: header,
        content: content,
        writtenDate: new Date(),
        author: req.user._id,
    });

    note.save()
    .then(result => {
        // Not kaydedildikten sonra, kullanıcıya notu ekleyin
        req.user.notes.push({
            _id: result._id,
            header: result.header,
            content: result.content,
            writtenDate: result.writtenDate,
            author: result.author
        });
        req.user.save() // Kullanıcıyı güncelleyin
            .then(() => {
                res.json({ note: result });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: "Internal server error" });
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router