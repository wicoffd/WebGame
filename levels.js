var levelOne = {
    wall: 
    [
        //Living room wall entities
        { x: 426, y: 308, width: 408, height: 70}, //main room top wall
        { x: 830, y: 448, width: 10, height: 195}, //main room right wall - long
        { x: 830, y: 334, width: 10, height: 65}, //main room right wall - short
        { x: 422, y: 448, width: 10, height: 195}, //main room left wall - long
        { x: 422, y: 288, width: 10, height: 112}, //main room left wall - short
        { x: 426, y: 640, width: 342, height: 10}, //main room bottom wall - left
        { x: 800, y: 640, width: 32, height: 10}, //main room bottom wall - right
        
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

    door:
    [
        { x: 768, y: 642, width: 31, height: 10, direction: "north", destination: "levelThree"}, //main room bottom wall // change to levelTwo
    ],

    //items are all the objects in the rooms that are not near walls.
    //Elevation: 1 on the ground (ex. crate), 2 just above the ground (ex. table), 3 extends into the air (ex. lamp)
    //Elevation is used to determine collision with some enemies
    item:
    [
        //Living room objects
        { x: 615, y: 460, width: 32, height: 40, elevation: 2}, //Living room table
        { x: 575, y: 468, width: 15, height: 52, elevation: 2}, //Living room left couch
        { x: 672, y: 468, width: 15, height: 52, elevation: 2}, //Living room right couch
        { x: 602, y: 536, width: 62, height: 20, elevation: 2}, //Living room center couch

        //Kitchen objects
        { x: 989, y: 346, width: 33, height: 40, elevation: 2}, //Kitchen table
        { x: 974, y: 350, width: 13, height: 22, elevation: 2}, //Kitchen chair left
        { x: 1025, y: 350, width: 13, height: 22, elevation: 2}, //Kitchen chair right
        { x: 1001, y: 385, width: 11, height: 7, elevation: 2}, //Kitchen chair bottom

        //Bedroom objects
        { x: 84, y: 416, width: 57, height: 28, elevation: 2}, //Bedroom bed
        { x: 84, y: 400, width: 27, height: 17, elevation: 1}, //Bedroom bed side table
        { x: 169, y: 321, width: 32, height: 41, elevation: 2}, //Bedroom middle table

    ],

    entities:
    [
        { color:"4", type: "cat", direction: "left", xPos: 170, yPos: 360, range: 150},

        //{ color:"4", type: "bear", direction: "left", xPos: 170, yPos: 350+48, range: 100},
        //{ color:"4", type: "chicken", direction: "left", xPos: 175, yPos: 350+48+48, range: 100},
        //{ color:"4", type: "sheep", direction: "left", xPos: 185, yPos: 350+48+48+48, range: 100},
        //{ color:"4", type: "wolf", direction: "left", xPos: 180+48*4, yPos: 350+48+48+48+48, range: 100},
        //{ color:"4", type: "pig", direction: "left", xPos: 195, yPos: 350, range: 100},
        //{ color:"4", type: "goose", direction: "left", xPos: 190, yPos: 350+48+48+48+48+48, range: 100},
        //{ color:"4", type: "raccoon", direction: "left", xPos: 200, yPos: 350+48+48+48+48+48+48, range: 100},  

        //{ color:"7", type: "dog", direction: "down", xPos: 740, yPos: 550, range: 100},
        { color:"2", type: "mouse", direction: "down", xPos: 860, yPos: 310, range: 120}, // near trash can
        { color:"7", type: "mouse", direction: "left", xPos: 908, yPos: 275, range: 100}, // white near counter 
        { color:"4", type: "mouse", direction: "right", xPos: 1145, yPos: 285, range: 80}, // near fridge
    ],

    collectable:
    [
        //collectables for map completion
        { x: 1164, y: 294, width: 32, height: 32, number: 7}, //Kitchen collectable
        { x: 94, y: 442, width: 32, height: 32, number: 4}, //Bedroom collectable
        { x: 745, y: 580, width: 32, height: 32, number: 0}, //Living room collectable
    ],
    
    powerUp:
    [
        { x: 600, y: 404, width: 32, height: 32, type: "freeze1", number: 1},
        { x: 620, y: 404, width: 32, height: 32, type: "freeze0", number: 0},
        { x: 660, y: 404, width: 32, height: 32, type: "freeze2", number: 2},
        { x: 600, y: 424, width: 32, height: 32, type: "meat", number: 3},
    ],

};
var levelThree = {
    wall:[
                //Main borders
                { x: 0, y: 467, width: 670, height: 160}, //Southern tree farm wall
                { x: 658, y:  623, width: 188, height: 30}, //Southern bush wall
                { x: 788, y:  467, width: 492, height: 55}, //Southern forest wall
                { x: 0, y:  258, width: 546, height: 64}, //Wall south of orange forest
                { x: 270, y:  90, width: 324, height: 54}, //Wall south of apple forest
                { x: 280, y:  132, width: 54, height: 132}, //Wall west of apple forest
                { x: 520, y:  224, width: 25, height: 40}, //Wall south corner below apple forest
                { x: 520, y:  135, width: 25, height: 40}, //Wall north corner below apple forest
        
                //House borders
                { x: 584, y:  102, width: 96, height: 30}, //Wall west of house
                { x: 656, y:  110, width: 38, height: 130}, //Wall west of house 2
                { x: 656, y:  290, width: 624, height: 28}, //Wall south of house 
                { x: 1106, y:  122, width: 34, height: 170}, //Wall west of house near forest
                { x: 988, y:  132, width: 144, height: 28}, //Wall west of house near forest - north
                { x: 680, y:  176, width: 146, height: 62}, //Bushes by house west side
                { x: 866, y:  130, width: 30, height: 106}, //Bushes by house east side
                { x: 884, y:  152, width: 126, height: 72}, //House east side
                { x: 804, y:  164, width: 72, height: 48}, //House door
        
                //Sheep pasture
                { x: 834, y:  639, width: 272, height: 22}, //Southern wall
                { x: 834, y:  506, width: 272, height: 22}, //Northern wall
                { x: 1092, y:  513, width: 15, height: 147}, //East wall
                { x: 789, y:  513, width: 56, height: 63}, //West wall
        
                //Map borders
                { x: 0, y:  284, width: 168, height: 216}, //west path
                { x: 1120, y:  292, width: 160, height: 208}, //east path
    ],
    door:[
        { x: 400, y: 400, width: 10, height: 31, direction: "west", destination: "levelFour"}, //main room bottom wall // change to levelTwo

    ],
    item:[],
    entities:[
        //Chickens
        { color:"1", type: "chicken", direction: "down", xPos: 1010, yPos: 198, range: 00},
        { color:"3", type: "chicken", direction: "left", xPos: 1076, yPos: 260, range: 00},
        //{ color:"1", type: "chicken", direction: "down", xPos: 612, yPos: 150, range: 00},
        { color:"8", type: "chicken", direction: "down", xPos: 755, yPos: 325, range: 00},
        { color:"7", type: "chicken", direction: "right", xPos: 270, yPos: 325, range: 100},//280x 445y
        { color:"1", type: "chicken", direction: "right", xPos: 280, yPos: 375, range: 100},
        { color:"3", type: "chicken", direction: "right", xPos: 265, yPos: 425, range: 100},
        { color:"2", type: "chicken", direction: "down", xPos: 1025, yPos: 442, range: 0},

        //Sheep
        { color:"1", type: "sheep", direction: "down", xPos: 900, yPos: 550, range: 00},
        { color:"1", type: "sheep", direction: "right", xPos: 1050, yPos: 530, range: 0},
        { color:"3", type: "sheep", direction: "left", xPos: 850, yPos: 600, range: 0},

        //Pigs
        { color:"5", type: "pig", direction: "left", xPos: 340, yPos: 210, range: 80}, //far left
        { color:"8", type: "pig", direction: "down", xPos: 380, yPos: 130, range: 80}, //middle 380x, 150y
        { color:"7", type: "pig", direction: "right", xPos: 450, yPos: 210, range: 60}, //far right
    ],
    collectable:[],
    powerUp:[
        { x: 400, y: 400, width: 32, height: 32, type: "freeze0", number: 0},

    ], 
    
};
var levelFour = { // forest level
    wall:[],
    door:[
        { x: 400, y: 400, width: 1000, height: 1100, direction: "south", destination: "levelFive"}, //at the observatory door // change to levelFive
    ],
    item:[],
    entities:[
        //{ color:"4", type: "cat", direction: "left", xPos: 300, yPos: 300, range: 150},

    ],
    collectable:[],
    powerUp:[

    ], 
    
};
var levelFive = { // final level
    wall:[],
    door:[
        { x: 400, y: 400, width: 10, height: 31, direction: "south", destination: "credits"}, //at computer station // change to credits
    ],
    item:[],
    entities:[],
    collectable:[],
    powerUp:[], 
}
var deaths = {
    death:[{count:0}],
}