const { addMovies } = require('../Controller/MovieControler')

const router = require('express').Router()

// Add movies
router.post('/addmovies', addMovies)

module.exports = router
