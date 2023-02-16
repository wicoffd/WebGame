class Door {
    constructor(game,xPos,yPos, width, height, direction){        
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.direction = direction;
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
