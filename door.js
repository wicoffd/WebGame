class Door {
    constructor(game,xPos,yPos, width, height, direction, destination){        
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.direction = direction;
        this.game = game;
        this.destination = destination;
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
