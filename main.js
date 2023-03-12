const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Mouse.png")
ASSET_MANAGER.queueDownload("./Chicken.png")
ASSET_MANAGER.queueDownload("./Owl.png")
ASSET_MANAGER.queueDownload("./hero.png")
ASSET_MANAGER.queueDownload("./doggy.png")
ASSET_MANAGER.queueDownload("./Cat.png")
ASSET_MANAGER.queueDownload("./Bunny.png")
ASSET_MANAGER.queueDownload("./Bear.png")
ASSET_MANAGER.queueDownload("./Geese.png")
ASSET_MANAGER.queueDownload("./Raccoon.png")
ASSET_MANAGER.queueDownload("./Sheep.png")
ASSET_MANAGER.queueDownload("./Pig.png")
ASSET_MANAGER.queueDownload("./Wolf.png")
ASSET_MANAGER.queueDownload("./MapHouse.png")
ASSET_MANAGER.queueDownload("./MapFarm.png")
ASSET_MANAGER.queueDownload("./MapFinal.png")
ASSET_MANAGER.queueDownload("./MapForest.png")
//ASSET_MANAGER.queueDownload("./testmap-exterior.png")
ASSET_MANAGER.queueDownload("./Collectables.png")
ASSET_MANAGER.queueDownload("./Powerups.png")

// audio
ASSET_MANAGER.queueDownload("./you_died.mp3")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.init(ctx);
    
	new SceneManager(gameEngine);
	gameEngine.start();
});
