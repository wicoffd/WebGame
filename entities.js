class Entity {
    constructor(game,target,type,color,direction,xPos,yPos,detectRange){
        this.asset = "./doggy.png";
        this.color = color;
        this.type = type; 
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.target = target;
        this.yColorPadding = 0;
        this.xColorPadding = 0;
        this.maxSpeed = 50;
        this.yHeight = 48;
        this.xWidth = 48;
        this.direction  = direction; // 0 = down, 1 = left, 2 = right, 3 = up
        this.yDirectionPadding = 0;
        this.frameNumber = 3;
        this.inRange = false;
        this.radius = detectRange;
        if(this.type == "owl"){this.xWidth = 77;}
        this.setColor();
        this.setType();
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./Owl.png"),0 + this.xColorPadding ,this.yColorPadding + yDirectionPadding,xWidth,yHeight,frameNumber,.2)
        // this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,0+yDirectionPadding,this.xWidth,this.yHeight,frameNumber,.2)
		
		this.animations = [];
        this.loadAnimations();

    };
	
	// initialize animations for the current entity
    loadAnimations() {
        for (var i = 0; i < 2; i++) { // two states
            this.animations.push([]);
            for (var j = 0; j < 4; j++) { // four directions
                this.animations[i].push([]);
            }
        }
		
		// idles (state = 0)
		// facing down (directionInt = 0, yDirectionPadding = 0, frameNumber = 1)
		this.animations[0][0] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,0,this.xWidth,this.yHeight,1,.2);
		// facing left (directionInt = 1, yDirectionPadding = 48, frameNumber = 1)
		this.animations[0][1] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48,this.xWidth,this.yHeight,1,.2);
		// facing right (directionInt = 1, yDirectionPadding = 48*2, frameNumber = 1)
		this.animations[0][2] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*2,this.xWidth,this.yHeight,1,.2);
		// facing up (directionInt = 1, yDirectionPadding = 48*3, frameNumber = 1)
		this.animations[0][3] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*3,this.xWidth,this.yHeight,1,.2);
		
		// moves (state = 1)
		// facing down (directionInt = 0, yDirectionPadding = 0, frameNumber = 3)
		this.animations[1][0] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,0,this.xWidth,this.yHeight,this.frameNumber,.2);
		// facing left (directionInt = 1, yDirectionPadding = 48, frameNumber = 3)
		this.animations[1][1] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48,this.xWidth,this.yHeight,this.frameNumber,.2);
		// facing right (directionInt = 1, yDirectionPadding = 48*2, frameNumber = 3)
		this.animations[1][2] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*2,this.xWidth,this.yHeight,this.frameNumber,.2);
		// facing up (directionInt = 1, yDirectionPadding = 48*3, frameNumber = 3)
		this.animations[1][3] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*3,this.xWidth,this.yHeight,this.frameNumber,.2);
	}
	
    setType() { // use type to assign variables
        switch(this.type){
            case "owl":
                this.asset = "./Owl.png";
            break;

            case "dog":
                this.asset = "./doggy.png";
            break;

            case "mouse":
                this.asset = "./Mouse.png";
            break;

            case "bear":
                this.asset = "./Bear.png";
            break;

            case "bunny":
                this.asset = "./Bunny.png";
            break;

            case "cat":
                this.asset = "./Cat.png";
            break;

            case "chicken":
                this.asset = "./Chicken.png";
            break;

            case "goose":
                this.asset = "./Geese.png";
            break;

            case "pig":
                this.asset = "./Pig.png";
            break;

            case "raccoon":
                this.asset = "./Raccoon.png";
            break;

            case "sheep":
                this.asset = "./Sheep.png";
            break;

            case "wolf":
                this.asset = "./Wolf.png";
            break;

            default:
                console.log("type is defaulting to dog");
            break;
        }
    }
    setColor(){ // use color to assign area of spritesheet to read from
        switch(this.color){
            case "1":
                this.yColorPadding = 0;
            break;
            
            case "2":
                this.yColorPadding = 0;
                this.xColorPadding = this.xWidth*3;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = this.xWidth*3*2;
            break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = this.xWidth*6;
            break;

            case "4":
                this.xColorPadding = this.xWidth*9;
            break;

            case "5":
                this.yColorPadding = this.yHeight*4;
            break;

            case "6":
                this.yColorPadding = this.yHeight*4;
                this.xColorPadding = this.xWidth*3;
            break;

            case "7":
                this.yColorPadding = this.yHeight*4;
                this.xColorPadding = this.xWidth*3*2
            break;

            case "8":
                this.yColorPadding = this.yHeight*4;
                this.xColorPadding = this.xWidth*3*3;
            break;
            
            default:
            break;
        }

    }
    update(){
		this.state = 0;
		
		if(this.direction = "left"){
			// hussein's new code
			this.state = 1;
		}

        if(this.direction = "right"){
			// hussein's new code
			this.state = 1;
        }

        if(this.direction = "up"){
			// hussein's new code
			this.state = 1;
        }
		
        if(this.direction = "down"){
            // hussein's new code
			this.state = 1;
        }
       
        this.transform();
    };
	
    transform() {
    
        var dist = this.distance(this.target, this);
    
        if(this.inRange==false){
            console.log("checking");
            if(dist<this.radius){
                console.log("true");
                this.inRange=true;}
        }
        if(this.inRange == true){
            this.velocity = { x: (this.target.xPos - this.xPos) / dist * this.maxSpeed, y: (this.target.yPos - this.yPos) / dist * this.maxSpeed };
            this.setDirection(this.velocity.x,this.velocity.y);
            this.xPos += this.velocity.x * this.game.clockTick;
            this.yPos += this.velocity.y * this.game.clockTick;
        } 
    }

    draw(ctx) {
        // this.animator.drawFrame(this.game.clockTick, ctx,
        //    this.xPos - this.game.camera.x,
        //    this.yPos - this.game.camera.y,
        //    .8)
		
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
		
		this.animations[this.state][directionInt].drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            .8)

    };
    setDirection(xVel,yVel){ // remove commented debug code once complete.
        if(xVel>0 && yVel>0){ //if xVel is positive // player is right and down from entitiy
            //this.direction = "right";
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "right";
                //console.log("xVel > yVel"+ " right");
            }else{
                this.direction = "down";
                //console.log("yVel > xVel"+" down");
            }
            //console.log(this.direction + " down");
        }
        else if(xVel<0 && yVel>0){ // if xVel is negative // player is left and down from entitiy
            //this.direction = "left";
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "left";
                //console.log("xVel > yVel"+ " left");
            }else{
                this.direction = "down";
                //console.log("yVel > xVel"+ " down");
            }
            //console.log(this.direction + " down");
        }
        else if(xVel>0 && yVel<0){ // if yVel is positive // player is right and up from entitiy
            //this.direction = "up";
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "right";
                //console.log("xVel > yVel"+ " right");
            }else{
                this.direction = "up";
                //console.log("yVel > xVel"+ " up");
            }
            //console.log(this.direction + " right");
        }
        else if(xVel<0 && yVel<0){ // if yVel is negative // player is left and down from entitiy
            
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "left";
                //console.log("xVel > yVel"+ " left");
            }else{
                this.direction = "up";
                //console.log("yVel > xVel"+ " up");
            }
                
            //console.log(this.direction + " left");
        }

    };
    distance(var1, var2){
        return Math.sqrt(Math.pow(var2.xPos - var1.xPos,2) + Math.pow(var2.yPos - var1.yPos,2));
    };
}