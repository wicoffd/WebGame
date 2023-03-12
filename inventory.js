class InventoryManager {
    constructor(game, x, y) {
        this.current = new Map();// using map data structure
        this.lastMap = new Map();
        this.x = x;
        this.y = y;
        this.position = 0;
        this.game = game;
        this.selected;
        this.number = 0;
        this.next;
        this.numberC = 0, this.numberL = 0, this.numberR = 0;
        this.previous;
        this.first = true;
        this.refresh = false;
        console.log(this.refresh + " refresh state")
    }

    getPowerUp(number) {
        this.current.get(number);
    }
    setPowerUp(number) {
        //if logic?
        if (this.current.has(number)) {
            this.current.set(number, this.current.get(number) + 1);
            
        }
        else {
            this.current.set(number, 1);
            //this.refresh = true;
        }
        this.refresh = true;
        console.log("set powerup method call " + this.lastMap.size);
        
    }
    hasPowerUp(number) {
        this.current.has(number);
        console.log("has powerup method call " + this.lastMap.size);
    }
    usePowerUp(number) {
        // TODO
    }
    removePowerUp(number) {
        // if logic?
        this.current.set(number, this.current.get(number) -= 1);
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
        console.log("update items")
        this.numberC = 2;
    }
    draw(ctx) {
        const scale = .6;
        //console.log(this.refresh);
        if (this.refresh || this.first) {
            console.log(this.refresh);
            console.log("refresh in draw");
            console.log(this.numberC + " numberC");
            this.animatorL = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberL * 32, 0, 32, 32, 1, 1);
            this.animatorC = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberC * 32, 0, 32, 32, 1, 1);
            this.animatorR = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + this.numberR * 32, 0, 32, 32, 1, 1);
            this.first = false;
            this.refresh = false;
        }
        //left item frame
        this.animatorL.drawFrame(this.game.clockTick, ctx,
            /*this.xPos - */this.x - 75,// 50 and 25
            /*this.yPos - */this.y + 125,
            scale)
        //middle item frame
        this.animatorC.drawFrame(this.game.clockTick, ctx,
                /*this.xPos - */this.x - 50,// 50 and 25
                /*this.yPos - */this.y + 125,
            scale)
        // right item frame
        this.animatorR.drawFrame(this.game.clockTick, ctx,
                    /*this.xPos - */this.x - 25,
                    /*this.yPos - */this.y + 125,
            scale)

    };
    update() {
        //console.log(this.refresh);
        if(this.refresh){
            //console.log("if state")
            this.updateItems();
        }
    }
}