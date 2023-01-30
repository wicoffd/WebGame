const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Mouse.png")
ASSET_MANAGER.queueDownload("./Chicken.png")
ASSET_MANAGER.queueDownload("./Owl.png")
ASSET_MANAGER.queueDownload("./hero.png")
ASSET_MANAGER.queueDownload("./MapHouse.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	
	const ctx = canvas.getContext("2d");
	var xPos1 = 10;
	var yPos1 = 10;
	var background = new Image();
	background.src = "./MapHouse.png";
	
	gameEngine.addEntity(new Mouse(gameEngine,"3","left",250,420));
	gameEngine.addEntity(new Chicken(gameEngine,"1","left",910,500));
	gameEngine.addEntity(new Owl(gameEngine,"4","left",500,450));
	gameEngine.addEntity(new Player(gameEngine,"1","",700,600));
	gameEngine.init(ctx);

	gameEngine.start();
});
