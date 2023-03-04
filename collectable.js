class Collectable {
    constructor(game, xPos, yPos, width, height, number) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.number = number; // number is zero indexed for spritesheet items
        this.game = game;
        this.updateBB();
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Collectables.png"), 0 + number*32, 0, 32, 32, 1, 1);
    };

    updateBB() {
        this.BB = new BoundingBox((this.xPos), (this.yPos), this.width, this.height);
    };

    update() {
    };

    draw(ctx) {
        const scale = 0.5;
        this.animator.drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            scale)

        //ctx.strokeStyle = 'Red';
        //ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width * scale, this.BB.height * scale);
    };
}
