class InventoryManager{
    constructor(){
        this.powerUp = new Map();// using map data structure
    }
    getPowerUp(number){
        this.powerUp.get(number);
    }
    setPowerUp(number){
        //if logic?
        this.powerUp.set(number, this.powerUp.get(number)+1);
    }
    usePowerup(number){
        // TODO
    }
    removePowerUp(number){
        // if logic?
        this.powerUp.set(number, this.powerUp.get(number)-=1);
    }
}