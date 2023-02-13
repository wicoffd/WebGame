class Player {
    constructor(game,type,direction,xPos,yPos){
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.yColorPadding = 0;
        this.xColorPadding = 0;
        
        this.yHeight = 48;

        this.state = 0; // 0 = idle, 1 = walking
        this.direction = direction; // 0 = down, 1 = left, 2 = right, 3 = up 

        this.yDirectionPadding = 48*4;
        this.frameNumber = 1;
        
        this.setColor();
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./Owl.png"),0 + this.xColorPadding ,this.yColorPadding + yDirectionPadding,xWidth,yHeight,frameNumber,.2)
        this.animator = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, this.yDirectionPadding, 48, this.yHeight, 1, .2)

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 2; i++) { // two states
            this.animations.push([]);
            for (var j = 0; j < 4; j++) { // four directions
                this.animations[i].push([]);
            }
        }

        // idle animation (state = 0) (NOTE: is it necessary to make a new animation every time?)
        // facing down
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, this.yDirectionPadding, 48, this.yHeight, 1, .2);
        // facing left
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 0, 48, this.yHeight, 1, 0.2);
        // facing right
        this.animations[0][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 48, 48, this.yHeight, 1, 0.2);
        // facing up
        this.animations[0][3] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 48*5, 48, this.yHeight, 1, 0.2);

        // run animation (state = 1)
        // facing down
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, this.yDirectionPadding, 48, this.yHeight, 3, .2);
        // facing left
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 0, 48, this.yHeight, 3, 0.2);
        // facing right
        this.animations[1][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 48, 48, this.yHeight, 3, 0.2);
        // facing up
        this.animations[1][3] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0+this.xColorPadding, 48*5, 48, this.yHeight, 3, 0.2);
    }

    setColor(){
        switch(this.type){
            case "1":
                this.yColorPadding = 0;
            break;
            
            case "2":
                this.yColorPadding = 0;
                this.xColorPadding = 48*3;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 48*3*2;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 48*6;
            break;

            case "4":
                this.xColorPadding = 77*9;
            break;

            case "5":
                this.yColorPadding = 48*4;
            break;

            case "6":
                this.yColorPadding = 48*4;
                this.xColorPadding = 77*3;
            break;

            case "7":
                this.yColorPadding = 48*4;
                this.xColorPadding = 77*3*2
            break;

            case "8":
                this.yColorPadding = 48*4;
                this.xColorPadding = 77*3*3;
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
                    // this.frameNumber = 3;
                    // this.yDirectionPadding = 0;
                    // //console.log(this.yDirectionPadding);
                    // this.animator.setFrameCount(3);
                    // this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    // this.animator.setXStart(this.xColorPadding);
                }

                this.state = 1;
                this.velocity.x -= MIN_WALK;
                this.xPos += this.velocity.x;
                // if(this.game.leftUp){
                //     this.frameNumber = 1;
                //     this.animator.setFrameCount(1);
                // }
            } 
            if (this.game.right) {
                if(this.direction != "right"){
                    this.direction = "right";
                    // this.frameNumber = 3;
                    // this.yDirectionPadding = 48;
                    // //console.log(this.yDirectionPadding);
                    // this.animator.setFrameCount(3);
                    // this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    // this.animator.setXStart(this.xColorPadding);
                }
                this.state = 1;
                this.velocity.x += MIN_WALK;
                this.xPos += this.velocity.x;
                
            } 
            if (this.game.up) {
                if(this.direction != "up"){
                    this.direction = "up";
                    
                //     this.frameNumber = 3;
                //     this.yDirectionPadding = 48*5;
                //     this.animator.setFrameCount(3);
                //     console.log(this.yDirectionPadding);
                //     this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                //     this.animator.setXStart(this.xColorPadding);
                //     this.animator.update();
                //     this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
                }
                this.state = 1;
                this.velocity.y += MIN_WALK;
                this.yPos -= this.velocity.y;
                
            }
            if (this.game.down) {
                if(this.direction != "down"){
                    this.direction = "down";
                    // this.frameNumber = 3;
                    // this.yDirectionPadding = 48*4;
                    // //console.log(this.frameNumber +" " + this.animator.frameCount);
                    // this.animator.setFrameCount(3);
                    // // console.log(this.yDirectionPadding);
                    // this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    // this.animator.setXStart(this.xColorPadding);
                    // this.animator.update();
                    // this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
                }
                
                this.state = 1;
                this.velocity.y += MIN_WALK;
                this.yPos += this.velocity.y;
            }
        }
    };

    draw(ctx) {
        // this.animator.drawFrame(this.game.clockTick, ctx,
        //     this.xPos - this.game.camera.x,
        //     this.yPos - this.game.camera.y,
        //     1)

        // console.log("player's x = ", this.xPos);
        // console.log("player's y = ", this.yPos);
        
        //ctx.drawImage(ASSET_MANAGER.getAsset("../Assets/Mouse.png"),0,0);

        var directionInt;

        switch (this.direction) {
            case "down":
                directionInt = 0;
            break;
            case "left":
                directionInt = 1;
            break;
            case "right":
                directionInt = 2;
            break;
            case "up":
                directionInt = 3;
            break;
        }
        // console.log("direction int is ", directionInt);
        this.animations[this.state][directionInt].drawFrame(this.game.clockTick, ctx,
                   this.xPos - this.game.camera.x, this.yPos - this.game.camera.y, 1);
    }
}