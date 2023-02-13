class Wall {
    constructor(game,xPos,yPos, width, height){        
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.game = game;
        this.updateBB();
        this.spritesheet = ASSET_MANAGER.getAsset("./CollisionTile.png");

       // this.BB = new BoundingBox(this.xPos - this.game.camera.x,
         //   this.yPos - this.game.camera.y, 400, 16);
    };

    updateBB() {
        this.BB = new BoundingBox((this.xPos), (this.yPos), this.width, this.height);
    };

    update
() {
    };

    draw(ctx) {
        //ctx.drawImage(this.spritesheet, this.xPos - this.game.camera.x,
          //  this.yPos - this.game.camera.y, 400, 16)

        //ctx.strokeStyle = 'Red';
       // ctx.strokeRect(this.xPos - this.game.camera.x,
          //  this.yPos - this.game.camera.y, this.BB.width, this.BB.height);

        ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
    };
}
