class PowerUp {
    constructor(game, xPos, yPos, width, height, type) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.game = game;
        this.type = type;
        this.updateBB();
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Collectable_Flashdrive.png"), 0, 0, 32, 32, 1, 1);
    };

    updateBB() {
        this.BB = new BoundingBox((this.xPos), (this.yPos), this.width, this.height);
    };

    update() {
    };

    draw(ctx) {
        const scale = 0.2;
        this.animator.drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            scale)

        ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width * scale, this.BB.height * scale);
    };
}
