const mongoose = require('mongoose')

const MovieSchema=new mongoose.Schema({
    titleImg:{type: String, },
    bgImg:{type: String, },
    previewImg:{type: String, },
    video:{type: String, },
    title:{type: String, },
    year:{type: String, },
    date:{type: String, },
    ageLimit:{type: String, },
    length:{type: String, },
    category:{type: String, },
    type:{type: String, },
    description:{type: String, },
    active:{type: String, },
},{timestamps:true})

module.exports = mongoose.model("movies", MovieSchema)