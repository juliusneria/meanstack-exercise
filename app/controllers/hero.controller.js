var HeroService = require("../services/hero.service");
module.exports = function(app){
    app.get("/hero/all", HeroService.all);

    app.post("/hero/save", HeroService.create);

    app.put("/hero/update", HeroService.update);

    app.delete("/hero/find", HeroService.delete);

    app.get("/hero/find/:id", HeroService.find);
};