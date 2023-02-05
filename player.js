class Player {
    constructor(game,type,direction,xPos,yPos){
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.yColorPadding = 0;
        this.xColorPadding = 0;
        
        var yHeight = 48;
        this.direction  = direction;
        var yDirectionPadding = 48*4;
        this.frameNumber = 1;
        this.updateBB();
        this.setColor();
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./Owl.png"),0 + this.xColorPadding ,this.yColorPadding + yDirectionPadding,xWidth,yHeight,frameNumber,.2)
        this.animator = new Animator(ASSET_MANAGER.getAsset("./hero.png"),0+this.xColorPadding,0+yDirectionPadding,48,yHeight,this.frameNumber,.2)

    };

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox((this.xPos + 15), (this.yPos + 41), 20, 8);
    };

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

        this.velocity = { up: 0, down: 0, left: 0, right: 0 }; // movement code
        var MIN_WALK = 75;
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Wall){  
                    //Vertical Collision
                    if (that.BB.top == entity.BB.bottom || that.BB.top == entity.BB.top) { 
                        that.velocity.up -= MIN_WALK;
                        console.log("Wall Above");
                        that.updateBB();   
                    } else
                    if (that.BB.bottom == entity.BB.top || that.BB.bottom == entity.BB.bottom) 
                    { 
                        that.velocity.down -= MIN_WALK;
                        console.log("Wall Below");
                        that.updateBB();   
                    } 

                    //Horizontal Collision
                    if (that.BB.right == entity.BB.left || that.BB.right == entity.BB.right) { 
                        that.velocity.right -= MIN_WALK;
                        console.log("Wall to right");
                        that.updateBB();   
                    } else 
                    if (that.BB.left == entity.BB.right || that.BB.left == entity.BB.left) 
                    { 
                        that.velocity.left -= MIN_WALK;
                        console.log("Wall to left");
                        that.updateBB();   
                    }                                        
                }             
            } 
        });

       // that.updateBB(); 

        // movement controller
        if (Math.abs(this.velocity.left) < MIN_WALK || Math.abs(this.velocity.right) < MIN_WALK) {  // slower than a walk // starting, stopping or turning aroun
            this.state = 0;
            if (this.game.left) {
                if(this.direction != "left"){
                    this.direction = "left";
                    this.frameNumber = 3;
                    this.yDirectionPadding = 0;
                    //console.log(this.yDirectionPadding);
                    this.animator.setFrameCount(3);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    this.animator.setXStart(this.xColorPadding);
                    
                }
                this.velocity.left += MIN_WALK;
                //possible check for collision
                this.xPos -= this.velocity.left * this.game.clockTick;;
                that.updateBB();
                if(this.game.leftUp){
                    this.frameNumber = 1;
                    this.animator.setFrameCount(1);
                }
            } 
            if (this.game.right) {
                if(this.direction != "right"){
                    this.direction = "right";
                    this.frameNumber = 3;
                    this.yDirectionPadding = 48;
                    //console.log(this.yDirectionPadding);
                    this.animator.setFrameCount(3);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    this.animator.setXStart(this.xColorPadding);

                }
                this.velocity.right += MIN_WALK;
                this.xPos += this.velocity.right * this.game.clockTick;;
                that.updateBB();
                
            } 
            if (this.game.up) {
                if(this.direction != "up"){
                    this.direction = "up";
                    this.frameNumber = 3;
                    this.yDirectionPadding = 48*5;
                    this.animator.setFrameCount(3);
                   // console.log(this.yDirectionPadding);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    this.animator.setXStart(this.xColorPadding);
                    //this.animator.update();
                    //this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
                }
                this.velocity.up += MIN_WALK;
                this.yPos -= this.velocity.up * this.game.clockTick;;
                that.updateBB();
            }
            if (this.game.down) {
                if(this.direction != "down"){
                    this.direction = "down";
                    this.frameNumber = 3;
                    this.yDirectionPadding = 48*4;
                    //console.log(this.frameNumber +" " + this.animator.frameCount);
                    this.animator.setFrameCount(3);
                    // console.log(this.yDirectionPadding);
                    this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
                    this.animator.setXStart(this.xColorPadding);
                }
                this.velocity.down += MIN_WALK;
                this.yPos += this.velocity.down * this.game.clockTick;;
                that.updateBB();
            }
           
        }
    };
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            1)


        ctx.strokeStyle = 'Red';
        ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        // console.log("player's x = ", this.xPos);
        // console.log("player's y = ", this.yPos);
        
        //ctx.drawImage(ASSET_MANAGER.getAsset("../Assets/Mouse.png"),0,0);
    }
}