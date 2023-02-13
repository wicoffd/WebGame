var levelOne = {
    wall: 
    [
        //Living room wall entities
        { x: 426, y: 368, width: 408, height: 10}, //main room top wall
        { x: 830, y: 448, width: 10, height: 195}, //main room right wall - long
        { x: 830, y: 334, width: 10, height: 65}, //main room right wall - short
        { x: 422, y: 448, width: 10, height: 195}, //main room left wall - long
        { x: 422, y: 288, width: 10, height: 112}, //main room left wall - short
        { x: 426, y: 640, width: 408, height: 10}, //main room bottom wall
        
        //Kitchen wall entities
        { x: 836, y: 490, width: 354, height: 10}, //kitchen bottom wall
        { x: 912, y: 474, width: 48, height: 18}, //kitchen bottom wall objects
        { x: 1044, y: 474, width: 48, height: 18}, //kitchen bottom wall objects
        { x: 1184, y: 274, width: 10, height: 50}, //kitchen right wall
        { x: 1160, y: 440, width: 28, height: 52}, //kitchen right wall objects
        { x: 1170, y: 314, width: 18, height: 128}, //kitchen right wall objects
        { x: 836, y: 278, width: 244, height: 10}, //kitchen top wall
        { x: 1078, y: 276, width: 112, height: 20}, //kitchen top wall
        { x: 834, y: 276, width: 22, height: 68}, //kitchen left wall

        //Bedroom wall entities - right wall is shared with living room left wall
        { x: 82, y: 458, width: 344, height: 10}, //bedroom bottom wall
        { x: 78, y: 292, width: 10, height: 166}, //bedroom left wall
        { x: 82, y: 290, width: 344, height: 10}, //bedroom top wall
        { x: 374, y: 292, width: 52, height: 40}, //right wall objects - desk + chair
        { x: 386, y: 330, width: 40, height: 24}, //right wall objects - desk + trash
        { x: 400, y: 350, width: 20, height: 30}, //right wall objects - plant
        { x: 84, y: 288, width: 40, height: 56}, //left wall objects - tv table

    ],
    owl:
    [
        { type: "7", direction: "down", xPos: 500, yPos: 453}, 
        { type: "1", direction: "down", xPos: 300, yPos: 453}, 
    ],
    entities:
    [
        { color:"4", type: "owl", direction: "left", xPos: 500, yPos: 453, range: 50}, 
        { color:"7", type: "dog", direction: "down", xPos: 300, yPos: 453, range: 150},
        { color:"7", type: "raccoon", direction: "down", xPos: 350, yPos: 453, range: 150}, 
    ]
};