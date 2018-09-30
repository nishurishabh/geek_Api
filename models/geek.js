const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeekSchema = new Schema({
    name: {
        type:String,
        required: [true, "name is required"]
    },
    rank: {
        type: String
    },
    active: {
       type: Boolean,
       default: false
    }
});

const Geek = mongoose.model('geek', GeekSchema);
module.exports = Geek;