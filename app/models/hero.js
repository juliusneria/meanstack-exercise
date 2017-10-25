var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var hero = new Schema({
    heroName: String,
    heroTeam: String,
    heroStats: [{
        statName: String,
        value: Number
    }],
    create_date: Date
});

hero.pre("save", function(next){
    if(!this.create_date){
        this.create_date = new Date();
    }
    next();
});

var Hero = mongoose.model("Hero", hero);
module.exports = Hero;