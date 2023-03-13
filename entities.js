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
        this.maxSpeed = 70;
        this.xBB = 5;
        this.yBB = 10;
        this.scale = 1;
        this.yHeight = 48;
        this.xWidth = 48;
        this.direction = direction; // 0 = down, 1 = left, 2 = right, 3 = up
        this.yDirectionPadding = 0;
        this.frameNumber = 3;
        this.inRange = false;
        this.radius = detectRange;
        this.state = 0;
        this.animationSpeed = .2;
        if(this.type == "owl"){this.xWidth = 77;}
        this.setColor();
        this.setType();
        this.updateBB();
		this.animations = [];
        this.loadAnimations();

    };

    updateBB() {
        this.lastBB = this.BB;

        this.BB = new BoundingBox((this.xPos)+(this.xBB*this.scale/2), (this.yPos)+(this.yBB*this.scale), 
        this.xWidth*this.scale-(this.xBB*this.scale), this.yHeight*this.scale-(this.yBB*this.scale));
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
		this.animations[0][0] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,0 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,1,this.animationSpeed);
		// facing left (directionInt = 1, yDirectionPadding = 48, frameNumber = 1)
		this.animations[0][1] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,1,this.animationSpeed);
		// facing right (directionInt = 1, yDirectionPadding = 48*2, frameNumber = 1)
		this.animations[0][2] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*2 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,1,this.animationSpeed);
		// facing up (directionInt = 1, yDirectionPadding = 48*3, frameNumber = 1)
		this.animations[0][3] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*3+ this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,1,this.animationSpeed);
		
		// moves (state = 1)
		// facing down (directionInt = 0, yDirectionPadding = 0, frameNumber = 3)
		this.animations[1][0] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,0 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,this.frameNumber,this.animationSpeed);
		// facing left (directionInt = 1, yDirectionPadding = 48, frameNumber = 3)
		this.animations[1][1] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,this.frameNumber,this.animationSpeed);
		// facing right (directionInt = 1, yDirectionPadding = 48*2, frameNumber = 3)
		this.animations[1][2] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*2 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,this.frameNumber,this.animationSpeed);
		// facing up (directionInt = 1, yDirectionPadding = 48*3, frameNumber = 3)
		this.animations[1][3] = this.animator = new Animator(ASSET_MANAGER.getAsset(this.asset),0+this.xColorPadding,48*3 + this.yColorPadding + this.yDirectionPadding,this.xWidth,this.yHeight,this.frameNumber,this.animationSpeed);
	}
	
    setType() { // use type to assign variables
        switch(this.type){
            case "owl":
                this.asset = "./Owl.png";
            break;

            case "dog":
                this.asset = "./doggy.png";
                this.scale = .6;
                this.maxSpeed = (Math.random() * (75 - 65) + 65);
                this.xBB = 15;
                this.yBB = 20;
                
            break;

            case "mouse":
                this.asset = "./Mouse.png";
                this.scale = .6;
                this.animationSpeed = .06;
                this.maxSpeed = (Math.random() * (70 - 60) + 60);
                this.xBB = 20;
                this.yBB = 33;
            break;

            case "bear":
                this.asset = "./Bear.png";
            break;

            case "bunny":
                this.asset = "./Bunny.png";
            break;

            case "cat":
                this.asset = "./Cat.png";
                this.scale = .5;
                this.maxSpeed = (Math.random() * (75 - 65) + 65);
                this.xBB = 15;
                this.yBB = 20;
            break;

            case "chicken":
                this.asset = "./Chicken.png";
                this.scale = .4;
            break;

            case "goose":
                this.asset = "./Geese.png";
                this.scale = .5;
            break;

            case "pig":
                this.asset = "./Pig.png";
                this.scale = .8;
            break;

            case "raccoon":
                this.asset = "./Raccoon.png";
                this.scale = .5;
            break;

            case "sheep":
                this.asset = "./Sheep.png";
                this.scale = .80;
            break;

            case "wolf":
                this.asset = "./Wolf.png";
                this.scale = .6;
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
        this.updateBB();

		
        var dist = this.distance(this.target, this);
        /*this.velocity = { right: (this.target.xPos - this.xPos) / dist * this.maxSpeed,
                            left: (this.target.xPos - this.xPos) / dist * this.maxSpeed, 
                            up: (this.target.yPos - this.yPos) / dist * this.maxSpeed,
                            down: (this.target.yPos - this.yPos) / dist * this.maxSpeed };*/

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB) && (that.game.powerUpUsed=="null")) {
                if ((entity instanceof Wall || entity instanceof Item) && dist < 250){  
                    //Vertical Collision
                    if (Math.round(that.BB.top) == entity.BB.bottom || Math.round(that.BB.top) == (entity.BB.bottom+1) || Math.round(that.BB.top) == (entity.BB.bottom-1)) { 
                        that.yPos -= that.velocity.up * that.game.clockTick;
                        that.yPos = that.yPos + .05;
                        //console.log("Wall Above");
                        that.updateBB();   
                    } else
                    if (Math.round(that.BB.bottom) == entity.BB.top || Math.round(that.BB.bottom) == (entity.BB.top+1) || Math.round(that.BB.bottom) == (entity.BB.top-1)) 
                    { 
                        that.yPos -= that.velocity.down * that.game.clockTick;
                        that.yPos = that.yPos - .05;
                        //console.log("Wall Below");
                        that.updateBB();   
                    } 

                    //Horizontal Collision
                    if (Math.round(that.BB.right) == entity.BB.left || Math.round(that.BB.right) == (entity.BB.left + 1) || Math.round(that.BB.right) == (entity.BB.left - 1) ) { 
                        that.xPos -= that.velocity.right * that.game.clockTick;
                        that.xPos = that.xPos - .05;
                        //console.log("Wall to right");
                        that.updateBB();   
                    } else 
                    if (Math.round(that.BB.left) == entity.BB.right || Math.round(that.BB.left) == (entity.BB.right - 1) || Math.round(that.BB.left) == (entity.BB.right + 1)) 
                    { 
                        that.xPos -= that.velocity.left * that.game.clockTick;
                        that.xPos = that.xPos + .05;
                        //console.log("Wall to left");
                        that.updateBB();   
                    }                                        
                }           
            } 
        });
		
		if(this.direction == "left"){
			// hussein's new code
            if(this.inRange){
			this.state = 1;
            }
            this.directionInt = 1;
		}

        if(this.direction == "right"){
			// hussein's new code
            if(this.inRange){
			this.state = 1;
            }
            this.yDirectionPadding = 48*2; // needs work
        }

        if(this.direction == "up"){
			// hussein's new code
            if(this.inRange){
			this.state = 1;
            }
            this.yDirectionPadding = 48*3
        }
		
        if(this.direction == "down"){
            // hussein's new code
            if(this.inRange){
			this.state = 1;
            }
        }

       
        if(this.game.alive){this.transform();} else {this.state = 0;} // allows for movement while alive and stops on death
    };
	
    transform() {
        this.playerPos  = {xPos: this.target.xPos +14, yPos: this.target.yPos +28 }
        //var dist = this.distance(this.playerPos, this);
        var dist = this.distance(this.playerPos, this);
        //console.log(this.playerPos.xPos + " " + this.playerPos.yPos);
       // console.log(dist);
        if(this.inRange==false){
            if(dist<this.radius){
                this.inRange=true;
            }
        }
        if(this.inRange == true){
            
            this.velocity = { right: (this.playerPos.xPos - this.xPos) / dist * this.maxSpeed,
                            left: (this.playerPos.xPos - this.xPos) / dist * this.maxSpeed, 
                            up: (this.playerPos.yPos - this.yPos) / dist * this.maxSpeed,
                            down: (this.playerPos.yPos - this.yPos) / dist * this.maxSpeed };
            this.setDirection(this.velocity.right,this.velocity.up);
            
            
            this.xPos += this.velocity.right * this.game.clockTick;
            this.yPos += this.velocity.up * this.game.clockTick;
        } 
        this.updateBB();
    }

    draw(ctx) {
		
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
            default:
            break;
        }
		
		this.animations[this.state][directionInt].drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            this.scale)
        
        // ctx.strokeStyle = 'Red';
        // ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);

    };
    setDirection(xVel,yVel){ // remove commented debug code once complete.
        if(xVel>0 && yVel>0){ //if xVel is positive // player is right and down from entitiy
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "right";
            }else{
                this.direction = "down";
            }
        }
        else if(xVel<0 && yVel>0){ // if xVel is negative // player is left and down from entitiy
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "left";
            }else{
                this.direction = "down";
            }
        }
        else if(xVel>0 && yVel<0){ // if yVel is positive // player is right and up from entitiy
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "right";
            }else{
                this.direction = "up";
            }
        }
        else if(xVel<0 && yVel<0){ // if yVel is negative // player is left and down from entitiy
            
            if(Math.pow(xVel,2)>Math.pow(yVel,2)){
                this.direction = "left";
            }else{
                this.direction = "up";
            }
        }

    };
    distance(var1, var2){//Var 1 = player, var 2 = enemy
        // console.log("player x "+ var1.xPos + "enemy x "+ var2.xPos);
        // console.log("player y "+ var1.yPos + "enemy y "+ var2.yPos);
        return Math.sqrt(Math.pow(var2.xPos - var1.xPos,2) + Math.pow(var2.yPos - var1.yPos,2));
    };
}