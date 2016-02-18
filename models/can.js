var mongoose = require('mongoose');

var CanSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Can', CanSchema);
