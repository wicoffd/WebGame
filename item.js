class Item {
    constructor(game, xPos, yPos, width, height, elevation){        
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.elevation = elevation;
        this.game = game;
        this.updateBB();
    };

    updateBB() {
        this.BB = new BoundingBox((this.xPos), (this.yPos), this.width, this.height);
    };

    update() {
    };

    draw(ctx) {
        //ctx.strokeStyle = 'Red';
        //ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
    };
}
