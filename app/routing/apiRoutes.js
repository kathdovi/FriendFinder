var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var input = req.body
        var scores = input.scores;
        
        var matchIndex = 0;
        var lowestDiff = 400;

        friends.forEach(function(friend, idx) {
            var diff = 0;
            scores.forEach(function(score, i) {
                diff += Math.abs(friend.scores[i] -score)
            })
            if (diff < lowestDiff) {
                lowestDiff = diff;
                matchIndex = idx;
            }
        })
        var homie = friends[matchIndex]
        
        // push to array after so you don't compare
        // with yourself
        friends.push(input);
        // return it
        res.json(homie);
    })
}