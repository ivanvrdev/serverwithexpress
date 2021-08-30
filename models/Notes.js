const {model, Schema} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        //required: true
    }
});

module.exports = model('Note', NoteSchema);