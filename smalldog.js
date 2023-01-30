class LittleDog {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./doggy.png"), 0,  0, 47.3, 28, 3, 0.1);

        this.x = 0;
        this.y = 300;
        this.speed = 0;
    };

    update() {
       this.x += this.speed*this.game.clockTick;
        if(this.x > 1024){
            this.x = 0;
        } 
    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./doggy.png"),0,0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}
