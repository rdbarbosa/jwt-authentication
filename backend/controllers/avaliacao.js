const Avaliacao = require('../models/Avaliacao');

module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        Avaliacao.findById(req.params.movieId, function(err, movieInfo){
            if (err) {
                next(err);
            } else {
                res.json({status:"success", message: "Movie found!!!", data:{movies: movieInfo}});
            }
        });
    },
    getAll: function(req, res, next) {
        let List = [];
        Avaliacao.find({}, function(err, movies){
           res.json({status:"success", message: "Movies list found!!!", data:{movies: moviesList}});
        });
    },
    updateById: function(req, res, next) {
        Avaliacao.findByIdAndUpdate(req.params.movieId,{name:req.body.name}, function(err, movieInfo){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Movie updated successfully!!!", data:null});
            }
        });
    },
    deleteById: function(req, res, next) {
        Avaliacao.findByIdAndRemove(req.params.movieId, function(err, movieInfo){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
            }
        });
    },
    create: function(req, res, next) {
        Avaliacao.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
            if (err) 
                next(err);
            else
                res.json({status: "success", message: "Movie added successfully!!!", data: null});      
        });
    },
}