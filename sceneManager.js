class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        
        // spawn player in middle
        this.midpoint_x = this.game.ctx.canvas.width / 2;
        this.midpoint_y = this.game.ctx.canvas.height / 2;
        this.player = new Player(this.game,"1","",this.midpoint_x, this.midpoint_y);

        this.loadLevel();
    };

    loadLevel() {
        this.level = levelOne;

        if (this.level.wall) {
            for (var i = 0; i < this.level.wall.length; i++) {
                let wall = this.level.wall[i];
                this.game.addEntity(new Wall(gameEngine, wall.x, wall.y, wall.width, wall.height));
            }
        }
        if (this.level.owl) {
            for (var i = 0; i < this.level.owl.length; i++) {
                let owl = this.level.owl[i];
                this.game.addEntity(new Owl(gameEngine,this.player, owl.type, owl.direction, owl.xPos, owl.yPos));
            }
        }
        //gameEngine.addEntity(new Owl(gameEngine,this.player,"4","left",500,453));
        //gameEngine.addEntity(new Owl(gameEngine,this.player,"6","left",430,450));
        //gameEngine.addEntity(new Owl(gameEngine,this.player,"8","left",450,450));
        //gameEngine.addEntity(new Owl(gameEngine,"1","left",460,410));
        
        this.game.addEntity(this.player);
        
        gameEngine.addEntity(new Mouse(gameEngine,"3","left",250,420));
        gameEngine.addEntity(new Mouse(gameEngine,"7","left",270,410));
        gameEngine.addEntity(new Mouse(gameEngine,"8","left",230,400));
        gameEngine.addEntity(new Chicken(gameEngine,"1","left",890,450));
        gameEngine.addEntity(new Chicken(gameEngine,"3","left",910,500));
        gameEngine.addEntity(new Chicken(gameEngine,"8","left",920,470));
        gameEngine.addEntity(new LittleDog(gameEngine));
        
        this.game.addEntity(new Stuff(this.game));
    };

    update() {
        // always follow player
        this.x = this.player.xPos - this.midpoint_x;
        this.y = this.player.yPos - this.midpoint_y;
    };

    draw() {
    };
}