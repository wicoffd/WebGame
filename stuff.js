class Stuff {
    constructor(game) {
        Object.assign(this, {game});

        this.xPos = 0;
        this.yPos = 0;
        this.width = 1280;
        this.height = 768;

        this.map = ASSET_MANAGER.getAsset("./MapHouse_debug.png");
    };

    update(){
    };

    draw(ctx) {
        // ctx.drawImage(this.map, 0, 0);
        // ctx.drawImage(this.map, 0, 0, 1024, 768, this.x - this.game.camera.x, this.y - this.game.camera.y);
        ctx.drawImage(this.map, this.xPos, this.yPos, this.width, this.height,
            this.xPos - this.game.camera.x, this.yPos - this.game.camera.y, this.width, this.height);
        
        // console.log("background's x = ", this.xPos);
        // console.log("background's y = ", this.yPos);
    };

}