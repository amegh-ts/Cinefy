const movieSchema = require('../Models/MovieSchema')

const addMovies = async (req, res) => {
    try {
        console.log("req.body", req.body);
    } catch (error) {
        console.error('Error adding movie:', error);
        res.status(500).json(error);
    }
}

module.exports = { addMovies };
