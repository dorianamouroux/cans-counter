var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    cans: [{
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('User', UserSchema);
