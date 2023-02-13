class Owl {
    constructor(game,target,type,direction,xPos,yPos){
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.target = target;
        this.yColorPadding = 0;
        this.xColorPadding = 0;
        this.maxSpeed = 50;
        var yHeight = 48;
        this.direction  = direction;
        var yDirectionPadding = 0;
        var frameNumber = 3;
        this.inRange = false;
        this.setColor();
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./Owl.png"),0 + this.xColorPadding ,this.yColorPadding + yDirectionPadding,xWidth,yHeight,frameNumber,.2)
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Owl.png"),0+this.xColorPadding,0+yDirectionPadding,77,yHeight,frameNumber,.2)

    };
    setColor(){
        switch(this.type){
            case "1":
                this.yColorPadding = 0;
            break;
            
            case "2":
                this.yColorPadding = 0;
                this.xColorPadding = 77*3;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 77*3*2;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 77*6;
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
        // this.velocity = { x: 0, y: 0 }; // movement code
        // const MIN_WALK = 4.453125;
        
        // // movement controller
        // if (Math.abs(this.velocity.x) < MIN_WALK) {  // slower than a walk // starting, stopping or turning around
        //     this.velocity.x = 0;
        //     this.state = 0;
        //     if (this.game.left) {
        //         if(this.direction != "left"){
        //             this.direction = "left";
        //             this.frameNumber = 3;
        //             this.yDirectionPadding = 48;
        //             console.log(this.yDirectionPadding);
        //             this.animator.setFrameCount(this.frameNumber);
        //             this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
        //             this.animator.setXStart(this.xColorPadding);
                    
        //         }
        //         this.velocity.x -= MIN_WALK;
        //         this.xPos += this.velocity.x;
                
        //     }
        //     if (this.game.right) {
        //         if(this.direction != "right"){
        //             this.direction = "right";
        //             this.frameNumber = 3;
        //             this.yDirectionPadding = 48*2;
        //             console.log(this.yDirectionPadding);
        //             this.animator.setFrameCount(this.frameNumber);
        //             this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
        //             this.animator.setXStart(this.xColorPadding);

        //         }
        //         this.velocity.x += MIN_WALK;
        //         this.xPos += this.velocity.x;
                
        //     }
        //     if (this.game.up) {
        //         if(this.direction != "up"){
        //             this.direction = "up";
        //             this.frameNumber = 3;
        //             this.animator.setFrameCount(this.frameNumber);
        //             this.yDirectionPadding = 48*3;
        //             console.log(this.yDirectionPadding);
        //             this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
        //             this.animator.setXStart(this.xColorPadding);
        //             //this.animator.update();
        //             //this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
        //         }
        //         this.velocity.y += MIN_WALK;
        //         this.yPos -= this.velocity.y;
                
        //     }
        //     if (this.game.down) {
        //         if(this.direction != "down"){
        //             this.direction = "down";
        //             this.frameNumber = 3;
        //             this.yDirectionPadding = 0;
        //             console.log(this.yDirectionPadding);
        //             this.animator.setFrameCount(this.frameNumber);
        //             this.animator.setYStart(this.yDirectionPadding+this.yColorPadding);
        //             this.animator.setXStart(this.xColorPadding);
        //             //this.animator.update();
        //             //this.animator = new SimpleAnimator(ASSET_MANAGER.getAsset("../Assets/MouseModded.png"),0,0 + this.yDirectionPadding,25,25,this.frameNumber,.2)
        //         }
        //         this.velocity.y += MIN_WALK;
        //         this.yPos += this.velocity.y;
                
        //     }
        // }
       //console.log(this.xPos + " "+ this.yPos);
       //console.log(this.target.xPos + " " +this.target.yPos);
        // var a = this.target.xPos - this.xPos;
        // var b = this.target.yPos - this.yPos;
        // var c = Math.sqrt(a*a+b*b);
        // console.log(c);
        this.transform();
    };
    transform() {
        const radius = 100;
    
        var dist = this.distance(this.target, this);
        console.log(Math.round(dist));
       
        if(this.inRange==false){
            console.log("checking");
            if(Math.round(dist)<radius){
                console.log("true");
                this.inRange=true;}
        }
        if(this.inRange == true){
            this.velocity = { x: (this.target.xPos - this.xPos) / dist * this.maxSpeed, y: (this.target.yPos - this.yPos) / dist * this.maxSpeed };
            this.xPos += this.velocity.x * this.game.clockTick;
            this.yPos += this.velocity.y * this.game.clockTick;
        } 
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            .8)
        
        //ctx.drawImage(ASSET_MANAGER.getAsset("../Assets/Mouse.png"),0,0);
    };
    distance(var1, var2){
        return Math.sqrt(Math.pow(var2.xPos - var1.xPos,2) + Math.pow(var2.yPos - var1.yPos,2));
    };
}