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
ASSET_MANAGER.queueDownload("./Wolf.png")
ASSET_MANAGER.queueDownload("./MapHouse.png")


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	
	const ctx = canvas.getContext("2d");

	var xPos1 = 10;
	var yPos1 = 10;
	// var background = new Image();
	// background.src = "./MapHouse.png";
	

	// gameEngine.addEntity(new Player(gameEngine,"1","",700,600));
	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
