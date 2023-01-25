const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Mouse.png")
ASSET_MANAGER.queueDownload("./Chicken.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	var xPos1 = 10;
	var yPos1 = 10;
	
	//gameEngine.addEntity(new Mouse(gameEngine,"3","left",xPos1,yPos1));
	gameEngine.addEntity(new Chicken(gameEngine,"2","left",xPos1,yPos1));
	gameEngine.init(ctx);

	gameEngine.start();
});
