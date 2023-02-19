class Player {
    constructor(game, type, direction, xPos, yPos) {
        this.type = type;
        this.xPos = xPos;
        this.yPos = yPos;
        this.game = game;
        this.yColorPadding = 0;
        this.xColorPadding = 0;
        this.yHeight = 48;
        this.game.alive = true; // when player is constructed set game.alive to true.
        this.state = 0; // 0 = idle, 1 = walking
        this.direction = direction; // 0 = down, 1 = left, 2 = right, 3 = up 
        this.collectableCounter = 0;
        this.collectableGoal = 3;

        this.yDirectionPadding = 48 * 4;
        this.frameNumber = 1;
        this.updateBB();
        this.setColor();

        this.animations = [];
        //console.log("load animations");
        this.loadAnimations();
        //console.log("animations loaded");
    };

    loadAnimations() {
        for (var i = 0; i < 3; i++) { // two states
            this.animations.push([]);
            for (var j = 0; j < 4; j++) { // four directions
                this.animations[i].push([]);
            }
        }
        //spritesheet, xStart, yStart, width, height
        // idle animation (state = 0) (NOTE: is it necessary to make a new animation every time?)
        // facing down
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 4, 48, this.yHeight, 1, .2);
        // facing left
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48*6, 48, this.yHeight, 1, 0.2);
        // facing right
        this.animations[0][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48*7, 48, this.yHeight, 1, 0.2);
        // facing up
        this.animations[0][3] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 5, 48, this.yHeight, 1, 0.2);

        // run animation (state = 1)
        // facing down
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 4, 48, this.yHeight, 4, .15);
        // facing left
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48*6, 48, this.yHeight, 4, 0.15);
        // facing right
        this.animations[1][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48*7, 48, this.yHeight, 4, 0.15);
        // facing up
        this.animations[1][3] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 5, 48, this.yHeight, 4, 0.15);
        // 8 direction
         // facing down left
         //this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 0, 48, this.yHeight, 4, 0.2);
         // facing down right
         //this.animations[1][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48, 48, this.yHeight, 4, 0.2);
    
        //Death animation
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 8, 48, this.yHeight, 2, 1);
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 8, 48, this.yHeight, 2, 1);
        this.animations[2][2] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 8, 48, this.yHeight, 2, 1);
        this.animations[2][3] = new Animator(ASSET_MANAGER.getAsset("./hero.png"), 0 + this.xColorPadding, 48 * 8, 48, this.yHeight, 2, 1);
    }
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox((this.xPos + 15), (this.yPos + 41), 20, 8);
    };

    die() {
        this.game.alive = false;

    };

    setColor() {
        switch (this.type) {
            case "1":
                this.yColorPadding = 0;
                break;

            case "2":
                this.yColorPadding = 0;
                this.xColorPadding = 48 * 3;
                break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 48 * 3 * 2;
                break;

            case "3":
                this.yColorPadding = 0;
                this.xColorPadding = 48 * 6;
                break;

            case "4":
                this.xColorPadding = 77 * 9;
                break;

            case "5":
                this.yColorPadding = 48 * 4;
                break;

            case "6":
                this.yColorPadding = 48 * 4;
                this.xColorPadding = 77 * 3;
                break;

            case "7":
                this.yColorPadding = 48 * 4;
                this.xColorPadding = 77 * 3 * 2
                break;

            case "8":
                this.yColorPadding = 48 * 4;
                this.xColorPadding = 77 * 3 * 3;
                break;
        }

    }

    update() {
        //Character controller code from mario.js
        //Reformat / delete later

        this.velocity = { up: 0, down: 0, left: 0, right: 0 }; // movement code
        var MIN_WALK = 75;
        this.updateBB();

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Wall || entity instanceof Item || (entity instanceof Door && that.collectableCounter != that.collectableGoal)) {
                    //Vertical Collision
                    if (Math.round(that.BB.top) == entity.BB.bottom || Math.round(that.BB.top) == (entity.BB.bottom + 1) || Math.round(that.BB.top) == (entity.BB.bottom - 1)) {
                        that.velocity.up -= MIN_WALK;
                        //console.log("Wall Above");
                        that.updateBB();
                    } else
                        if (Math.round(that.BB.bottom) == entity.BB.top || Math.round(that.BB.bottom) == (entity.BB.top - 1) || Math.round(that.BB.bottom) == (entity.BB.top + 1)) {
                            that.velocity.down -= MIN_WALK;
                            //console.log("Wall Below");
                            that.updateBB();
                        }

                    //Horizontal Collision
                    if (Math.round(that.BB.right) == entity.BB.left || Math.round(that.BB.right) == (entity.BB.left + 1) || Math.round(that.BB.right) == (entity.BB.left - 1)) {
                        that.velocity.right -= MIN_WALK;
                        //console.log("Wall to right");
                        that.updateBB();
                    } else
                        if (Math.round(that.BB.left) == entity.BB.right || Math.round(that.BB.left) == (entity.BB.right - 1) || Math.round(that.BB.left) == (entity.BB.right + 1)) {
                            that.velocity.left -= MIN_WALK;
                            //console.log("Wall to left");
                            that.updateBB();
                        }
                }
                //If all the collectables are found in a map, the door is available
                if (entity instanceof Door && that.collectableCounter == that.collectableGoal) {
                    if (Math.round(that.BB.bottom) == entity.BB.top || Math.round(that.BB.bottom) == (entity.BB.top - 1) || Math.round(that.BB.bottom) == (entity.BB.top + 1)) {
                        console.log("door found");
                    }
                }
                //If any enemy is hit, the player dies
                if (entity instanceof Entity) {
                    that.state = 2;
                    that.die();
                }
                //If a collectable is hit by the player, the collectable is removed from the world and added to the players collectable count
                if (entity instanceof Collectable) {
                    console.log("item found");
                    that.collectableCounter += 1;
                    entity.removeFromWorld = true;
                    console.log(that.collectableCounter);
                }
            }
        });


        if (this.game.alive == true) {
            // movement controller

            if (Math.abs(this.velocity.left) < MIN_WALK || Math.abs(this.velocity.right) < MIN_WALK) { 
                this.state = 0;
                if (this.game.left) {
                    if (this.direction != "left") {
                        this.direction = "left";
                    }
                    this.state = 1;
                    this.velocity.left += MIN_WALK;
                    this.xPos -= this.velocity.left * this.game.clockTick;
                    that.updateBB();
                }
                if (this.game.right) {
                    if (this.direction != "right") {
                        this.direction = "right";
                    }
                    this.state = 1;
                    this.velocity.right += MIN_WALK;
                    this.xPos += this.velocity.right * this.game.clockTick;
                    that.updateBB();

                }
                if (this.game.up) {
                    if (this.direction != "up") {
                        this.direction = "up";
                    }
                    this.state = 1;
                    this.velocity.up += MIN_WALK;
                    this.yPos -= this.velocity.up * this.game.clockTick;
                    that.updateBB();
                }
                if (this.game.down) {
                    if (this.direction != "down") {
                        this.direction = "down";
                    }

                    this.state = 1;
                    this.velocity.down += MIN_WALK;
                    this.yPos += this.velocity.down * this.game.clockTick;
                    that.updateBB();
                }
            }
        } else {
            // else
        }

    };

    draw(ctx) {


        // ctx.strokeStyle = 'Red';
        // ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y - this.game.camera.y, this.BB.width, this.BB.height);
        // console.log("player's x = ", this.xPos);
        // console.log("player's y = ", this.yPos);


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
            this.xPos - this.game.camera.x, this.yPos - this.game.camera.y, 1);
    }

}
