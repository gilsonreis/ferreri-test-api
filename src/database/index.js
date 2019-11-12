const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gilson:qwe123@cluster0-fmuz4.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;