class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        //this.level = levelOne;
        //this.game.ctx.transform(2, 0, 0, 2, -512, -384);
        this.game.ctx.transform(3, 0, 0, 3, -1024-72, -768-96);
        this.flag = false;
        // spawn player in middle
       // this.midpoint_x = this.game.ctx.canvas.width / 2;
        //this.midpoint_y = this.game.ctx.canvas.height / 2;
        //this.player = new Player(this.game,"1","down",this.midpoint_x, this.midpoint_y);

        this.loadLevel();
    };

    loadLevel() { // add varaible for level name
        this.clearEntities();
        //this.game.entities = [];
        this.level = levelOne;
        this.midpoint_x = this.game.ctx.canvas.width / 2;
        this.midpoint_y = this.game.ctx.canvas.height / 2;
        this.player = new Player(this.game,"1","down",this.midpoint_x, this.midpoint_y);
        if (this.level.wall) {
            for (var i = 0; i < this.level.wall.length; i++) {
                let wall = this.level.wall[i];
                this.game.addEntity(new Wall(gameEngine, wall.x, wall.y, wall.width, wall.height));
            }
        }

        if (this.level.door) {
            for (var i = 0; i < this.level.door.length; i++) {
                let door = this.level.door[i];
                this.game.addEntity(new Door(gameEngine, door.x, door.y, door.width, door.height, door.direction ));
            }
        }
        
        if (this.level.item) {
            for (var i = 0; i < this.level.item.length; i++) {
                let item = this.level.item[i];
                this.game.addEntity(new Item(gameEngine, item.x, item.y, item.width, item.height, item.elevation));
            }
        }

        if (this.level.entities) {
            for (var i = 0; i < this.level.entities.length; i++) {
                let entities = this.level.entities[i];
                this.game.addEntity(new Entity(gameEngine,this.player, entities.type, entities.color,
                    entities.direction, entities.xPos, entities.yPos, entities.range));
            }
        }

        if (this.level.collectable) {
            for (var i = 0; i < this.level.collectable.length; i++) {
                let collectable = this.level.collectable[i];
                this.game.addEntity(new Collectable(gameEngine, collectable.x, collectable.y, collectable.width, collectable.height));
            }
        }

        this.game.addEntity(this.player);
        this.game.addEntity(new Stuff(this.game));
    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };
    
   

    update() {
        // always follow player
        this.x = this.player.xPos - this.midpoint_x;
        this.y = this.player.yPos - this.midpoint_y;
        if(this.game.alive == false && this.game.enter){
            this.clearEntities();
            this.loadLevel(); 
        }
        if(this.game.credits){
            //if(!this.entities[0] instanceof Player){
            if(!this.flag){
                //console.log("entities clearedK")
            this.clearEntities();
            this.flag = true;
            this.player = new Player(this.game,"1","down",this.midpoint_x, this.midpoint_y);
            this.game.addEntity(new Entity(gameEngine,this.player, "mouse", "0",
                "down", -3600000, -36000000, 0));
            this.game.addEntity(this.player);
            this.credits();
            
            }
        }
        
    };
    credits() {
        //console.log("created by credits")
    }
    //TODO setLevel(levelname
    // call loadlevel
    draw() {
        if(this.game.alive == false){
            //console.log("death message");
            this.game.ctx.fillStyle = "red";
            //this.game.audio = new Audio('you_died.mp3');    
            //this.game.audio.play();
            //this.game.ctx.color = "red"
            this.game.ctx.font = "48px Russo-Regular"
            this.game.ctx.fillText("You Died",(this.midpoint_x-48),(this.midpoint_y));
            this.game.ctx.color = "red"
            this.game.ctx.font = "28px Russo-Regular"
            this.game.ctx.fillText("Press Enter to Restart",(this.midpoint_x-48*1.5),(this.midpoint_y+48));

        }
        if(this.flag){
           // this.game.ctx.fillStyle = rgb(11, 218, 81);
            //this.game.ctx.color = "red"
            this.game.ctx.font = "18px Russo-Regular"
            this.game.ctx.fillStyle = rgb(15, 255, 80)

            this.game.ctx.fillText("Congratulations You Win!", (this.midpoint_x-48*1.5),(this.midpoint_y-48));
            this.game.ctx.fillStyle = "white";
            //this.game.ctx.color = "red"
            this.game.ctx.font = "48px Russo-Regular"
            this.game.ctx.fillText("Credits",(this.midpoint_x-48),(this.midpoint_y));
            this.game.ctx.font = "18px Russo-Regular"
            //this.game.ctx.fillStyle = rgb(80, 200, 120)
            this.game.ctx.fillText("Derek White",(this.midpoint_x-12),(this.midpoint_y+48*2.5));
            this.game.ctx.fillText("Derek Wicoff",(this.midpoint_x-48*2),(this.midpoint_y+48*2));
            this.game.ctx.fillText("Hussein Abdinur",(this.midpoint_x+48),(this.midpoint_y+48*2));
            
        }
    };
}
