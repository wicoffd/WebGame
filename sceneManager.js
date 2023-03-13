class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        this.level = null;
        this.playerOffsetX = 0;
        this.playerOffsetY = 0;
        this.deaths = 0;
        this.mapOffsetX = 0
        this.mapOffsetY = 0;
        //this.level = levelOne;
        // /*old*/this.game.ctx.transform(2, 0, 0, 2, -512, -384);
        this.game.ctx.transform(3, 0, 0, 3, -1024 - 72, -768 - 96);
        this.flag = false;
        this.startMenu = true;
        this.startTextFlag = true;
        //this.controlMenu = false;
        this.storyTextFlag = false;
        this.controlTextFlag = false;
        this.asleep = false;
        this.titleAnimator = new Animator(ASSET_MANAGER.getAsset("./text.png"), 0 , 0, 522, 160, 1, 1);
        // spawn player in middle
        // this.midpoint_x = this.game.ctx.canvas.width / 2;
        //this.midpoint_y = this.game.ctx.canvas.height / 2;
        //this.player = new Player(this.game,"1","down",this.midpoint_x, this.midpoint_y);
        //this.inventory = new InventoryManager(gameEngine);
        //console.log("scenemanager constructed")
        this.midpoint_x = this.game.ctx.canvas.width / 2;// moved from load level
        this.midpoint_y = this.game.ctx.canvas.height / 2;// moved from load level
        this.loadLevel(levelOne, 0, 0);

    };

    loadLevel(levelname, x, y) { // add varaible for level name
        if (this.inventory == null) { // if this is the first time running
            this.clearEntities();
            this.inventory = new InventoryManager(gameEngine, this.midpoint_x, this.midpoint_y);
        } else { // player died or moved maps
            this.inventory = new InventoryManager(gameEngine, this.midpoint_x, this.midpoint_y); // needed  to allow for an inventory to be made on death and map transition
            this.clearEntities();
            this.inventory.resetPowerUpMap();
        }

        this.playerOffsetX = x;
        this.playerOffsetY = y;
        this.level = eval(levelname);
        if (this.level.music && !this.title) {
            ASSET_MANAGER.pauseBackgroundMusic();
            // switch(this.level.music){
            //     case "./BGM1_the_morning_moon.mp3":
            //         ASSET_MANAGER.adjustVolume(0.2);
            //         break;
            //     case "./BGM2_smooth_jazz_festival.mp3":
            //         console.log("level 2")
            //         ASSET_MANAGER.adjustVolume(0.3);
            //         break;
            //     case "./BMG5_theme_of_confrontation_steady_version.mp3":
            //         ASSET_MANAGER.adjustVolume(0.3);
            //         break;
            //     default: 
            //         //ASSET_MANAGER.adjustVolume(1);
            //         break;
            // }
            console.log("play");
            ASSET_MANAGER.playAsset(this.level.music);
        }
        this.player = new Player(this.game, this.inventory, "1", "down", this.midpoint_x + this.playerOffsetX, this.midpoint_y + this.playerOffsetY);
        //console.log(this.level);
        if (this.level.wall) {
            for (var i = 0; i < this.level.wall.length; i++) {
                let wall = this.level.wall[i];
                this.game.addEntity(new Wall(gameEngine, wall.x, wall.y, wall.width, wall.height));
            }
        }

        if (this.level.door) {
            for (var i = 0; i < this.level.door.length; i++) {
                let door = this.level.door[i];
                this.game.addEntity(new Door(gameEngine, door.x, door.y, door.width, door.height, door.direction, door.destination));
            }
        }

        if (this.level.item) {
            for (var i = 0; i < this.level.item.length; i++) {
                let item = this.level.item[i];
                this.game.addEntity(new Item(gameEngine, item.x, item.y, item.width, item.height, item.elevation));
            }
        }

        if (this.level.entities) {
            for (var i = 0; i < this.level.entities.length; i++) {
                let entities = this.level.entities[i];
                this.game.addEntity(new Entity(gameEngine, this.player, entities.type, entities.color,
                    entities.direction, entities.xPos, entities.yPos, entities.range));
            }
        }

        if (this.level.collectable) {
            for (var i = 0; i < this.level.collectable.length; i++) {
                let collectable = this.level.collectable[i];
                this.game.addEntity(new Collectable(gameEngine, collectable.x, collectable.y, collectable.width, collectable.height, collectable.number));
            }
        }

        if (this.level.powerUp) {
            for (var i = 0; i < this.level.powerUp.length; i++) {
                let powerUp = this.level.powerUp[i];
                this.game.addEntity(new PowerUp(gameEngine, powerUp.x, powerUp.y, powerUp.width, powerUp.height, powerUp.type, powerUp.number));
            }
        }
        this.game.addEntity(this.inventory);
        this.game.addEntity(this.player);
        this.game.addEntity(new Stuff(this.game, this.level));
    };
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };



    async update() {
        // always follow player
        this.x = this.player.xPos - this.midpoint_x;
        this.y = this.player.yPos - this.midpoint_y;
        if (this.game.alive == false && this.game.enter) {
            this.deaths += 1;
            this.inventory.resetPowerUpMap();
            ////this.inventory.savePowerUpMap();
            this.clearEntities();
            this.game.alive = true;
            this.loadLevel(this.level, this.playerOffsetX, this.playerOffsetY);
        }
        if (this.game.credits) {// logic for credits 
            //if(!this.entities[0] instanceof Player){
            if (!this.flag) {
                //console.log("entities cleared")
                this.clearEntities();
                this.flag = true;
                this.player = new Player(this.game, this.inventory, "1", "down", this.midpoint_x, this.midpoint_y);
                this.game.addEntity(new Entity(gameEngine, this.player, "mouse", "0",
                    "down", -3600000, -36000000, 0));
                this.game.addEntity(this.player);
                this.credits();

            }
        }

        if (this.startMenu) {// logic for credits 
            //if(!this.entities[0] instanceof Player){
            if (this.startTextFlag) {
                this.clearEntities();
            }
            if (this.game.enter && this.startTextFlag && !this.asleep) {
                this.startTextFlag = false;
                this.clearEntities();
                this.storyTextFlag = true;
                this.asleep = true;
                await this.sleep(500);
                this.asleep = false;
            }
            if (this.game.enter && this.storyTextFlag && !this.asleep) {
                this.storyTextFlag = false;
                this.controlTextFlag= true;
                this.asleep = true;
                await this.sleep(500);
                this.asleep = false;
            }
            //console.log(this.asleep);
            if (this.game.enter && this.controlTextFlag && !this.asleep) {
                this.startMenu = false;
                this.controlTextFlag = false;
                this.loadLevel(this.level, this.playerOffsetX, this.playerOffsetY);
            }
        }

    };
    credits() {
        //console.log("created by credits")
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //TODO setLevel(levelname
    // call loadlevel
    draw() {
        if (this.game.alive == false) {
            //console.log("death message");
            this.game.ctx.fillStyle = "red";
            //this.game.audio = new Audio('you_died.mp3');    
            //this.game.audio.play();
            //this.game.ctx.color = "red"
            this.game.ctx.font = "48px Russo-Regular"
            this.game.ctx.fillText("You Died", (this.midpoint_x - 48), (this.midpoint_y));
            this.game.ctx.color = "red"
            this.game.ctx.font = "28px Russo-Regular"
            this.game.ctx.fillText("Press Enter to Restart", (this.midpoint_x - 48 * 1.5), (this.midpoint_y + 48));

        }
        if (this.startTextFlag) {
            this.titleAnimator.drawTitle(this.game.clockTick, this.game.ctx,
                /*this.xPos - */ this.midpoint_x - 93,
                /*this.yPos - */ this.midpoint_y - 25,
                .45)
            this.game.ctx.font = "24px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            //this.game.ctx.fillText("Pandemic Pandemonium", (this.midpoint_x - 105), (this.midpoint_y));

            this.game.ctx.font = "14px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("Press Enter To Continue", (this.midpoint_x - 50), (this.midpoint_y + 100));

        } else if (this.storyTextFlag) {
            
            this.game.ctx.font = "8px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("A peaceful town has descended into chaos. The bond between animals", (this.midpoint_x - 100), (this.midpoint_y - 30));
            this.game.ctx.fillText("and humans has been shattered. An evil mastermind has turned friendly", (this.midpoint_x - 100), (this.midpoint_y - 15));
            this.game.ctx.fillText("beasts into something more sinister. Your mission is to disrupt the", (this.midpoint_x - 100), (this.midpoint_y + 0));
            this.game.ctx.fillText("mastermind's plan and save the town from the menacing creatures. ", (this.midpoint_x - 100), (this.midpoint_y + 15));

            this.game.ctx.font = "8px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("On your journey you will collect items that will help disrupt the evil ", (this.midpoint_x - 100), (this.midpoint_y + 45));
            this.game.ctx.fillText("mastermind’s plan. Keep an eye out for powerups that will stop beasts ", (this.midpoint_x - 100), (this.midpoint_y + 60));
            this.game.ctx.fillText("in their tracks and allow you to gain an advantage.", (this.midpoint_x - 100), (this.midpoint_y + 75));

            this.game.ctx.font = "14px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("Press Enter To Continue", (this.midpoint_x - 50), (this.midpoint_y + 125));

        } else if (this.controlTextFlag) {
            this.game.ctx.font = "18px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("Controls", (this.midpoint_x-10), (this.midpoint_y - 50));
            this.game.ctx.font = "14px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("Movement: W,A,S,D", (this.midpoint_x - 100), (this.midpoint_y - 20));
            this.game.ctx.fillText("Use Item: R", (this.midpoint_x - 100), (this.midpoint_y - 0));
            this.game.ctx.fillText("Respawn After Death: Enter", (this.midpoint_x - 100), (this.midpoint_y + 20));
            this.game.ctx.fillText("Press P for Easy Mode", (this.midpoint_x - 100), (this.midpoint_y + 40));
            this.game.ctx.fillText("Find all the collectables on each map", (this.midpoint_x - 100), (this.midpoint_y + 70));
            this.game.ctx.fillText("and then proceed to the next area.", (this.midpoint_x - 100), (this.midpoint_y + 90));
            this.game.ctx.font = "14px Trebuchet MS"
            this.game.ctx.fillStyle = "white";
            this.game.ctx.fillText("Press Enter To Begin", (this.midpoint_x - 40), (this.midpoint_y + 125));
        } else if (this.flag) {
            // this.game.ctx.fillStyle = rgb(11, 218, 81);
            //this.game.ctx.color = "red"
            this.game.ctx.font = "18px Russo-Regular"
            this.game.ctx.fillStyle = rgb(15, 255, 80)

            this.game.ctx.fillText("Congratulations You Win!", (this.midpoint_x - 48 * 1.5), (this.midpoint_y - 48));
            this.game.ctx.fillStyle = "white";

            this.game.ctx.font = "48px Russo-Regular"
            this.game.ctx.fillText("Credits", (this.midpoint_x - 48), (this.midpoint_y));
            this.game.ctx.font = "18px Russo-Regular"
            //this.game.ctx.fillStyle = rgb(80, 200, 120)
            this.game.ctx.fillText("Derek White", (this.midpoint_x - 12), (this.midpoint_y + 48 * 2.5));
            this.game.ctx.fillText("Derek Wicoff", (this.midpoint_x - 48 * 2), (this.midpoint_y + 48 * 2));
            this.game.ctx.fillText("Hussein Abdinur", (this.midpoint_x + 48), (this.midpoint_y + 48 * 2));

        } else if (this.game.alive) {
            // Collectibles Counter
            this.game.ctx.font = "14px Russo-Regular";
            this.game.ctx.fillText('Collectibles: ' + this.player.collectableCounter + "/" + this.level.collectable.length, (this.midpoint_x - 140), (this.midpoint_y - 80));
            this.game.ctx.strokeStyle = 'black';
            this.game.ctx.lineWidth = .3;
            this.game.ctx.strokeText('Collectibles: ' + this.player.collectableCounter + "/" + this.level.collectable.length, (this.midpoint_x - 140), (this.midpoint_y - 80));
            this.game.ctx.strokeStyle = 'white';


            // Death Counter
            this.game.ctx.fillStyle = "white";
            this.game.ctx.font = "10px Russo-Regular";
            this.game.ctx.fillText('Deaths:' + this.deaths, (this.midpoint_x + 145), (this.midpoint_y - 82));
            this.game.ctx.strokeStyle = 'black';
            this.game.ctx.lineWidth = .23;
            this.game.ctx.strokeText('Deaths:' + this.deaths, (this.midpoint_x + 145), (this.midpoint_y - 82));
            this.game.ctx.strokeStyle = 'white';

            // Item Frames
            // this.game.ctx.strokeRect(this.midpoint_x - 75, this.midpoint_y + 125, 20, 20);
            // this.game.ctx.strokeStyle = 'white';
            this.game.ctx.lineWidth = 1;
            this.game.ctx.strokeRect(this.midpoint_x - 130, this.midpoint_y + 125, 20, 20);
            // this.game.ctx.strokeStyle = 'white';
            // this.game.ctx.lineWidth = .23;
            // this.game.ctx.strokeRect(this.midpoint_x - 25, this.midpoint_y + 125, 20, 20);
        }

    };
}
