const mongoose = require('../../database/index');

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        require: false
    },
    content: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const IdeaModel = mongoose.model('Idea', IdeaSchema);

module.exports = IdeaModel;