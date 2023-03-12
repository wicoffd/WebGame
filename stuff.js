class Stuff {
    constructor(game, map) {
        Object.assign(this, {game, map});

        this.xPos = 0;
        this.yPos = 0;
        this.width = 1280;
        this.height = 768;
        
        switch(this.map){
            case levelOne:
                this.map = ASSET_MANAGER.getAsset("./MapHouse.png");
            break;
            case levelThree:
                this.map = ASSET_MANAGER.getAsset("./MapFarm.png");
            break;
            case levelFour:
                this.width = 640;
                this.height = 1280;
                this.map = ASSET_MANAGER.getAsset("./MapForest.png");
            break;
            case levelFive:
                this.width = 640;
                this.height = 1280;
                this.map = ASSET_MANAGER.getAsset("./MapFinal.png");
            break;
            default:
                //console.log(this.map);
                console.log("default error");
            break;
        }
        
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