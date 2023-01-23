class Mouse {
    constructor(game,type,direction,xPos,yPos){
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.yColorPadding = 0;
        this.direction  = direction;
        var yDirectionPadding = 0;
        var frameNumber = 2;
        
        this.setColor();
        this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("./MouseModded.png"),0,this.yColorPadding + yDirectionPadding,25,25,frameNumber,.2)

    };
    setColor(){
        switch(this.type){
            case "brown":
                this.yColorPadding = 0;
            break;
            case "gray":
                this.yColorPadding = 25*4;
            break;
        }

    }
    update(){
        //Character controller code from mario.js
        //Reformat / delete later
        this.velocity = { x: 0, y: 0 }; // movement code
        const MIN_WALK = 4.453125;
        
        // movement controller
        if (Math.abs(this.velocity.x) < MIN_WALK) {  // slower than a walk // starting, stopping or turning around
            this.velocity.x = 0;
            this.state = 0;
            if (this.game.left) {
                if(this.direction != "left"){
                    this.direction = "left";
                    this.frameNumber = 2;
                    this.yDirectionPadding = 25;
                    console.log(this.yDirectionPadding);
                    this.animator.setFrameCount(this.frameNumber);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    
                }
                this.velocity.x -= MIN_WALK;
                this.xPos += this.velocity.x;
                
            }
            if (this.game.right) {
                if(this.direction != "right"){
                    this.direction = "right";
                    this.frameNumber = 2;
                    this.yDirectionPadding = 25*2;
                    console.log(this.yDirectionPadding);
                    this.animator.setFrameCount(this.frameNumber);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);

                }
                this.velocity.x += MIN_WALK;
                this.xPos += this.velocity.x;
                
            }
            if (this.game.up) {
                if(this.direction != "up"){
                    this.direction = "up";
                    this.frameNumber = 3;
                    this.animator.setFrameCount(this.frameNumber);
                    this.yDirectionPadding = 25*3;
                    console.log(this.yDirectionPadding);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    //this.animator.update();
                    //this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
                }
                this.velocity.y += MIN_WALK;
                this.yPos -= this.velocity.y;
                
            }
            if (this.game.down) {
                if(this.direction != "down"){
                    this.direction = "down";
                    this.frameNumber = 2;
                    this.yDirectionPadding = 0;
                    console.log(this.yDirectionPadding);
                    this.animator.setFrameCount(this.frameNumber);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    //this.animator.update();
                    //this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
                }
                this.velocity.y += MIN_WALK;
                this.yPos += this.velocity.y;
                
            }
        }
       
       
    };
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick,ctx,this.xPos,this.yPos,4)
        
        //ctx.drawImage(ASSET_MANAGER.getAsset("../Assets/Mouse.png"),0,0);
    }
}