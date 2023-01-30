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
        
        this.loadPlayer();
        this.loadLevel();
    };

    loadPlayer() {
        this.game.addEntity(this.player);
    };

    loadLevel() {
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