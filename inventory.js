class InventoryManager{
    constructor(){
        this.current = new Map();// using map data structure
        this.lastMap = new Map();
        this.selected;
        this.next;
        this.previous;
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./Powerups.png"), 0 + number*32, 0, 32, 32, 1, 1);
    }

    getPowerUp(number){
        this.current.get(number);
    }
    setPowerUp(number){
        //if logic?
        
        if(this.current.has(number)){
            this.current.set(number, this.current.get(number)+1);
        }
        else {
            this.current.set(number, 1);
        }
        console.log("set powerup method call "+ this.lastMap.size);
    }
    hasPowerUp(number){
        this.current.has(number);
        console.log("has powerup method call " + this.lastMap.size);
    }
    usePowerUp(number){
        // TODO
    }
    removePowerUp(number){
        // if logic?
        this.current.set(number, this.current.get(number)-=1);
    }
    savePowerUpMap(){// save the state of powerup map on moving
        // through a door
        // powerup is active map
        // lastmap is backup for reset
        this.lastMap = this.current; // saves map for reset
        console.log(this.lastMap.entries());
    }
    resetPowerUpMap(){// revert to saved powerup on death
        this.current = new Map(this.lastMap);

    }
    draw(ctx) {
        const scale = .5;
        this.animator.drawFrame(this.game.clockTick, ctx,
            this.xPos - this.game.camera.x,
            this.yPos - this.game.camera.y,
            scale)

    };
}