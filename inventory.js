class InventoryManager {
    constructor(game, x, y) {
        this.current = new Map();// using map data structure

        this.x = x;
        this.y = y;
        this.position = 0;
        this.game = game;
        this.selected;
        this.string = 0;
        this.next;
        this.numberC = 10; // 10 is used to index the animator off the spritesheet
        this.previous;
        this.first = true;
        this.asleep = false;
        //this.keysItr = this.current.entries();
        this.refresh = false;
        //console.log(this.refresh + " refresh state")
    }

    getPowerUp(string) {
        // console.log(string+ " str");
        // console.log(this.current.get(string)+ " this get");
        // console.log(this.current.keys());
        return this.current.get(string);
    }
    setPowerUp(string) {
        //if logic?
        if (this.current.size == 0) { this.game.invPos = 0; } // resets the inventory position on item pickup
        //console.log("set");
        if (this.current.has(string)) {
            //console.log(string + " set string");
            //console.log("this.current.get =  "+ this.current.get(string));
            this.current.set(string, this.current.get(string) + 1);
            this.refresh = true;
            
        }
        else {
            //console.log(string + " set string");
            this.current.set(string, 1);
            this.refresh = true;
        }

        // console.log("set powerup method call " + this.game.lastMap.size);
        // console.log(this.refresh + " refresh state");

    }
    hasPowerUp(string) {
        //console.log(string +  " string entity.type");
        //console.log(this.current.has(string));
        return this.current.has(string);
        //console.log("has powerup method call " + this.game.lastMap.size);
    }
    async usePowerUp(string) {
        // TODO
        //console.log(string);
        //console.log(this.current.has(string));
        this.game.frozen = true;
        this.removePowerUp(string);
        switch (string) {
            case "freeze0":
                this.timer = 3000; // 3 sec
                break;
            case "freeze1":
                this.timer = 4000; // 4 sec
                break;
            case "freeze2":
                this.timer = 10000; // 10 sec
                break;
            case "meat":
                this.timer = 6000; // 6 sec
                //this.game.target
                break;
        }
        await this.sleep(this.timer);
        this.game.frozen = false;
    }
    removePowerUp(string) {
        // if logic?
        if (this.current.get(string) > 1) {
            this.current.set(string, this.current.get(string) - 1);
        } else {
            this.current.delete(string);
        }
        this.refresh = true;

    }
    savePowerUpMap() {// save the state of powerup map on moving
        // through a door
        // powerup is active map
        // lastmap is backedup for reset
        this.game.lastMap = new Map(this.current); // saves map for reset
        //console.log(this.game.lastMap.entries());
    }
    resetPowerUpMap() {// revert to saved powerup on death
        this.current = new Map(this.game.lastMap);

    }
    updateItems() {
        // console.log("update items")
        // console.log(this.game.invPos + " inv pos");
        //console.log("array size " + this.current.size);
        if (this.current.size >= 1) {
            this.keysItr = this.current.keys();
            this.res = this.keysItr.next().value;
            //console.log("item name " + this.res);
            switch (this.res) {
                case "freeze0":
                    this.numberC = 0;
                    break;
                case "freeze1":
                    this.numberC = 1;
                    break;
                case "freeze2":
                    this.numberC = 2;
                    break;
                case "meat":
                    this.numberC = 3;
                    break;
            }
        } else {
            this.numberC = 10;
        }

        /*    this.keysItr = this.current.keys();
            //console.log(this.game.invPos + " invpos")
            for (this.i = -1; this.i < this.game.invPos; this.i++) {
                if (this.game.invPos == 0 && this.current.size == 1) {
                    this.res = this.keysItr.next().value;
                    console.log("i" + this.i);
                    //return;
                }
                else {
                    if(this.res != null){
                        this.prev = (""+this.res).slice(0);
                        //this.prev = Object.assign(this.res);
                    }
                    this.res = this.keysItr.next().value;
                    this.next;
                    console.log("i" + this.i);
                    //console.log("else statement");
                }
            } */


        //console.log("res" + this.res);
        /*    if (this.res != null) {
                this.next = this.keysItr.next().value;
                switch (this.next) {// might be an issue
                    case "freeze0":
                        this.numberR = 0;
                        break;
                    case "freeze1":
                        this.numberR = 1;
                        break;
                    case "freeze2":
                        this.numberR = 2;
                        break;
                    case "meat":
                        this.numberR = 3;
                        break;
                }
                switch (this.prev) {
                    case "freeze0":
                        this.numberL = 0;
                        break;
                    case "freeze1":
                        this.numberL = 1;
                        break;
                    case "freeze2":
                        this.numberL = 2;
                        break;
                    case "meat":
                        this.numberL = 3;
                        break;
                }
            } */
        //console.log(this.prev + " previous item")
        //console.log(this.res+ " current item")
        //console.log(this.next + " next item")

        // if (this.refresh) {
        //    // console.log(this.getPowerUp("freeze"));
        //     this.numberC = 2;
        // }

    }
    draw(ctx) {
        const scale = .6;
        if (this.game.alive) {
            //console.log(this.refresh + " " + this.first);
            if (this.refresh || this.first) {
                // console.log("refresh in draw");
                // console.log(this.numberC + " numberC");
                //console.log("hello");
                this.updateItems();
                //               console.log(this.numberL);
                //console.log("c value " + this.numberC);
                //               console.log(this.numberR);
                //this.animatorL = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberL * 32, 0, 32, 32, 1, 1);
                this.animatorC = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberC * 32, 0, 32, 32, 1, 1);
                //this.animatorR = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberR * 32, 0, 32, 32, 1, 1);
                this.first = false;
                this.refresh = false;
                //console.log(this.refresh + " refresh in draw state")
            }
            //left item frame
            //           this.animatorL.drawFrame(this.game.clockTick, ctx,
            //              this.x - 74.5,
            //         /*this.yPos - */this.y + 125,
            //              scale)
            //middle item frame
            this.animatorC.drawFrame(this.game.clockTick, ctx,
                /*this.xPos - */this.x - 129.5,
                /*this.yPos - */this.y + 125,
                scale)
            // right item frame
            //           this.animatorR.drawFrame(this.game.clockTick, ctx,
            //                  /*this.xPos - */this.x - 24.5,
            //                  /*this.yPos - */this.y + 125,
            //             scale)

        };
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async update() {
        /*  if (this.game.invPos == -1) {// wraps the position to prevent negative index
              // console.log("negative invPos");
              this.game.invPos = this.current.size;
          } else if (this.game.invPos > this.current.size) { this.game.invPos = 0; }// wraps the position back to zero
         if ((this.game.E || this.game.Q) || this.refresh) {
              this.updateItems();
              this.refresh = true;
          } */
        //await this.sleep(1000);
        if (this.game.use && !this.asleep) {
            this.usePowerUp(this.res);
            this.updateItems();
            this.asleep = true;
            await this.sleep(1000);
            this.asleep = false;
        }
    }
}