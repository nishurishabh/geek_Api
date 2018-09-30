var express = require('express');
const router = express.Router();
const Geek = require('../models/geek');


router.get('/geeks', function(req, res, next) {
    Geek.find().then(function(geek){
        res.send(geek);
    })
});  













 











router.post('/geeks', function(req, res, next) {
    Geek.create(req.body)
    .then(function(geek){
        res.send(geek.name + ' has been added');
    }).catch(next);
}); 

router.put('/geeks/:id', function(req, res, next) {
    Geek.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(geek){
        Geek.findOne({_id: req.params.id})
          .then(function(geek){
            res.send(geek.name+ " Got updated");
          });
        
    })
}); 

router.delete('/geeks/:id', function(req, res, next) {
    Geek.findByIdAndRemove({
        _id: req.params.id
    }).then(function(geek) {
         res.send(geek.name+ " Got deleted from the DB");
    }).catch(next);
}); 

module.exports = router;