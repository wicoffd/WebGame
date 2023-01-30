class LittleDog {
    constructor(game){

        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./doggy.png"), 0,  0, 48, 48, 3, 0.1);

        this.x = 670;
        this.y = 600;
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
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y,1);
    };
}
