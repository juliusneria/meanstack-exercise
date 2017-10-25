var Hero = require("../models/hero");

module.exports = {
    find: function(){

    },

    create: function(req, res){
        var hero = new Hero({
            heroName: "Ianasdf",
            heroTeam: "Good Sidere",
            heroStats: [{
                statName:"Int",
                value: 110
            },{
                statName:"Str",
                value: 11
            },{
                statName:"Dex",
                value: 21
            }]
        });

        hero.save(function (err, result) {
            res.json(result);
        });
    },

    delete: function(){

    },

    update: function(){

    },

    all: function(req, res){
        Hero.find({}, function(err, result){
            res.json(result);
        });
    }
};