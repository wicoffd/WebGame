class InventoryManager {
    constructor(game, x, y) {
        this.current = new Map();// using map data structure
        this.lastMap = new Map();
        this.x = x;
        this.y = y;
        this.position = 0;
        this.game = game;
        this.selected;
        this.string = 0;
        this.next;
        this.numberC = 10, this.numberL = 10, this.numberR = 10; // 10 is used to index the animator off the spritesheet
        this.previous;
        this.first = true;
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
        if(this.current.size == 0){this.game.invPos =0;} // resets the inventory position on item pickup
        //console.log("set");
        if (this.current.has(string)) {
            //console.log(string + " set string");
            this.current.set(string, this.current.get(string) += 1);
            
        }
        else {
            //console.log(string + " set string");
            this.current.set(string, 1);
            this.refresh = true;
        }
        this.refresh = true;
        // console.log("set powerup method call " + this.lastMap.size);
        // console.log(this.refresh + " refresh state");

    }
    hasPowerUp(string) {
        this.current.has(string);
        //console.log("has powerup method call " + this.lastMap.size);
    }
    usePowerUp(string) {
        // TODO
    }
    removePowerUp(string) {
        // if logic?
        this.current.set(string, this.current.get(string) -= 1);
        this.refresh = true;
    }
    savePowerUpMap() {// save the state of powerup map on moving
        // through a door
        // powerup is active map
        // lastmap is backup for reset
        this.lastMap = this.current; // saves map for reset
        console.log(this.lastMap.entries());
    }
    resetPowerUpMap() {// revert to saved powerup on death
        this.current = new Map(this.lastMap);

    }
    updateItems() {
        // console.log("update items")
        // console.log(this.game.invPos + " inv pos");
        if(this.current.size > 0){this.keysItr = this.current.keys();
            console.log(this.game.invPos + " invpos")
        for(this.i = 0; this.i < this.game.invPos; this.i++){
           if(this.game.invPos == 0 && this.current.size == 1){
            this.res = this.keysItr.next().value;
                return;
           }
           else{
            this.prev= this.res;
            this.res = this.keysItr.next().value;
           }
        }
    
        switch(this.res){
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
        if(this.res !=null){
        switch(this.keysItr.next().value){// might be an issue
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
        switch(this.prev){
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
    }
    
        console.log(this.res)
    }
        // if (this.refresh) {
        //    // console.log(this.getPowerUp("freeze"));
        //     this.numberC = 2;
        // }
    }
    draw(ctx) {
        const scale = .6;
        if (this.refresh || this.first) {
            // console.log("refresh in draw");
            // console.log(this.numberC + " numberC");
            this.updateItems();
            this.animatorL = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberL * 32, 0, 32, 32, 1, 1);
            this.animatorC = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberC * 32, 0, 32, 32, 1, 1);
            this.animatorR = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberR * 32, 0, 32, 32, 1, 1);
            this.first = false;
            this.refresh = false;
            //console.log(this.refresh + " refresh in draw state")
        }
        //left item frame
        this.animatorL.drawFrame(this.game.clockTick, ctx,
            this.x - 74.5,
            /*this.yPos - */this.y + 125,
            scale)
        //middle item frame
        this.animatorC.drawFrame(this.game.clockTick, ctx,
                /*this.xPos - */this.x - 50,
                /*this.yPos - */this.y + 125,
            scale)
        // right item frame
        this.animatorR.drawFrame(this.game.clockTick, ctx,
                    /*this.xPos - */this.x - 24.5,
                    /*this.yPos - */this.y + 125,
            scale)

    };
    update() {
        if(this.game.invPos == -1){// wraps the position to prevent negative index
           // console.log("negative invPos");
            this.game.invPos = this.current.size;
        }else if(this.game.invPos >this.current.size){this.game.invPos =0;}// wraps the position back to zero
        if((this.game.E || this.game.Q)){
            this.updateItems();
            this.refresh =true;
        }
    }
}