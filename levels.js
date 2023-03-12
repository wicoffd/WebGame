var levelOne = {
    wall:
        [
            //Living room wall entities
            { x: 426, y: 308, width: 408, height: 70 }, //main room top wall
            { x: 830, y: 448, width: 10, height: 195 }, //main room right wall - long
            { x: 830, y: 334, width: 10, height: 65 }, //main room right wall - short
            { x: 422, y: 448, width: 10, height: 195 }, //main room left wall - long
            { x: 422, y: 288, width: 10, height: 112 }, //main room left wall - short
            { x: 426, y: 640, width: 430, height: 10 }, //main room bottom wall - left
            //{ x: 800, y: 640, width: 32, height: 10 }, //main room bottom wall - right

            //Kitchen wall entities
            { x: 836, y: 490, width: 354, height: 10 }, //kitchen bottom wall
            { x: 912, y: 474, width: 48, height: 18 }, //kitchen bottom wall objects
            { x: 1044, y: 474, width: 48, height: 18 }, //kitchen bottom wall objects
            { x: 1184, y: 274, width: 10, height: 50 }, //kitchen right wall
            { x: 1160, y: 440, width: 28, height: 52 }, //kitchen right wall objects
            { x: 1170, y: 314, width: 18, height: 128 }, //kitchen right wall objects
            { x: 836, y: 278, width: 244, height: 10 }, //kitchen top wall
            { x: 1078, y: 276, width: 112, height: 20 }, //kitchen top wall
            { x: 834, y: 276, width: 22, height: 68 }, //kitchen left wall

            //Bedroom wall entities - right wall is shared with living room left wall
            { x: 82, y: 458, width: 344, height: 10 }, //bedroom bottom wall
            { x: 78, y: 292, width: 10, height: 166 }, //bedroom left wall
            { x: 82, y: 290, width: 344, height: 10 }, //bedroom top wall
            { x: 374, y: 292, width: 52, height: 40 }, //right wall objects - desk + chair
            { x: 386, y: 330, width: 40, height: 24 }, //right wall objects - desk + trash
            { x: 400, y: 350, width: 20, height: 30 }, //right wall objects - plant
            { x: 84, y: 288, width: 40, height: 56 }, //left wall objects - tv table 

        ],

    door:
        [
            { x: 768, y: 639, width: 31, height: 10, direction: "north", destination: "levelTwo" }, //main room bottom wall // change to levelTwo
        ],

    //items are all the objects in the rooms that are not near walls.
    //Elevation: 1 on the ground (ex. crate), 2 just above the ground (ex. table), 3 extends into the air (ex. lamp)
    //Elevation is used to determine collision with some enemies
    item:
        [
            //Living room objects
            { x: 605, y: 458, width: 32, height: 40, elevation: 2 }, //Living room table
            { x: 524, y: 458, width: 15, height: 52, elevation: 2 }, //Living room left couch
            { x: 703, y: 458, width: 15, height: 52, elevation: 2 }, //Living room right couch
            { x: 591, y: 565, width: 62, height: 20, elevation: 2 }, //Living room center couch

            //Kitchen objects
            { x: 989, y: 346, width: 33, height: 40, elevation: 2 }, //Kitchen table
            { x: 974, y: 350, width: 13, height: 22, elevation: 2 }, //Kitchen chair left
            { x: 1025, y: 350, width: 13, height: 22, elevation: 2 }, //Kitchen chair right
            { x: 1001, y: 385, width: 11, height: 7, elevation: 2 }, //Kitchen chair bottom

            //Bedroom objects
            { x: 84, y: 416, width: 57, height: 28, elevation: 2 }, //Bedroom bed
            { x: 84, y: 400, width: 27, height: 17, elevation: 1 }, //Bedroom bed side table
            { x: 169, y: 321, width: 32, height: 41, elevation: 2 }, //Bedroom middle table

        ],

    entities:
        [
            { color: "4", type: "cat", direction: "left", xPos: 170, yPos: 360, range: 150 },

            //{ color:"4", type: "bear", direction: "left", xPos: 170, yPos: 350+48, range: 100},
            //{ color:"4", type: "chicken", direction: "left", xPos: 175, yPos: 350+48+48, range: 100},
            //{ color:"4", type: "sheep", direction: "left", xPos: 185, yPos: 350+48+48+48, range: 100},
            //{ color:"4", type: "wolf", direction: "left", xPos: 180+48*4, yPos: 350+48+48+48+48, range: 100},
            //{ color:"4", type: "pig", direction: "left", xPos: 195, yPos: 350, range: 100},
            //{ color:"4", type: "goose", direction: "left", xPos: 190, yPos: 350+48+48+48+48+48, range: 100},
            //{ color:"4", type: "raccoon", direction: "left", xPos: 200, yPos: 350+48+48+48+48+48+48, range: 100},  

            //{ color:"7", type: "dog", direction: "down", xPos: 740, yPos: 550, range: 100},
            { color: "2", type: "mouse", direction: "down", xPos: 860, yPos: 310, range: 120 }, // near trash can
            { color: "7", type: "mouse", direction: "left", xPos: 908, yPos: 275, range: 100 }, // white near counter 
            { color: "4", type: "mouse", direction: "right", xPos: 1145, yPos: 285, range: 80 }, // near fridge
        ],

    collectable:
        [
            //collectables for map completion
            { x: 1164, y: 294, width: 32, height: 32, number: 7 }, //Kitchen collectable
            { x: 94, y: 442, width: 32, height: 32, number: 4 }, //Bedroom collectable
            { x: 745, y: 580, width: 32, height: 32, number: 0 }, //Living room collectable
        ],

    powerUp:
        [
           // { x: 600, y: 404, width: 32, height: 32, type: "freeze2", number: 2 },
            { x: 600, y: 404, width: 32, height: 32, type: "freeze1", number: 1},
            { x: 620, y: 404, width: 32, height: 32, type: "freeze0", number: 0},
            { x: 660, y: 404, width: 32, height: 32, type: "freeze2", number: 2},
            { x: 600, y: 424, width: 32, height: 32, type: "meat", number: 3},
        ],

};
var levelTwo = {
    wall:
        [
            //Main borders
            { x: 112, y: 70, width: 1280, height: 138 }, //North wall
            { x: 111, y: 187, width: 49, height: 400 }, //west wall 1
            //{ x: 129, y: 343, width: 30, height: 63 }, //west wall house entrance
            //{ x: 103, y: 385, width: 56, height: 138 }, //west wall 2
            { x: 150, y: 488, width: 1242, height: 34 }, //south wall
            { x: 1223, y: 182, width: 137, height: 354 }, //east wall

        ],
    door:
        [
            { x: 1218, y: 200, width: 72, height: 320, direction: "west", destination: "levelThree" },
        ],
    item:
        [
            { x: 150, y: 286, width: 64, height: 79 }, //car 1 - black
            { x: 353, y: 453, width: 46, height: 47 }, //bench 1
            { x: 490, y: 402, width: 79, height: 44 }, //car 2 - white
            { x: 415, y: 198, width: 17, height: 40 }, //sign post
            { x: 528, y: 194, width: 32, height: 30 }, //crate 1
            { x: 608, y: 193, width: 16, height: 48 }, //light post 1
            { x: 787, y: 197, width: 27, height: 46 }, //bush 1
            { x: 880, y: 280, width: 82, height: 49 }, //car 3 - black
            { x: 945, y: 190, width: 16, height: 40 }, //stone 1
            { x: 1040, y: 194, width: 19, height: 31 }, //tree 1
            { x: 992, y: 264, width: 16, height: 24 }, //crate 2
            { x: 1008, y: 280, width: 82, height: 45 }, //car 4 - white
            { x: 992, y: 448, width: 16, height: 15 }, //blue fruit
            { x: 1022, y: 430, width: 35, height: 62 }, //food cart
            { x: 1072, y: 432, width: 16, height: 32 }, //green fruit
            { x: 1217, y: 246, width: 23, height: 26 }, //bench 2
            { x: 735, y: 306, width: 65, height: 127 }, //fountain box 1
            { x: 712, y: 314, width: 112, height: 111 }, //fountain box 2
            { x: 704, y: 336, width: 128, height: 65 }, //fountain box 3
        ],
    entities:
        [
            { color: "2", type: "raccoon", direction: "left", xPos: 508, yPos: 216, range: 120 },
            { color: "6", type: "raccoon", direction: "left", xPos: 1097, yPos: 413, range: 120 },
            { color: "2", type: "bunny", direction: "down", xPos: 762, yPos: 218, range: 120 },
            { color: "5", type: "bunny", direction: "down", xPos: 1072, yPos: 219, range: 120 },
            { color: "2", type: "goose", direction: "left", xPos: 850, yPos: 358, range: 120 },
            { color: "3", type: "goose", direction: "left", xPos: 171, yPos: 431, range: 120 },
            { color: "4", type: "goose", direction: "down", xPos: 519, yPos: 450, range: 120 },

        ],
    collectable:
        [
            { x: 167, y: 372, width: 32, height: 32, number: 2 },
            { x: 978, y: 472, width: 32, height: 32, number: 3 },
            { x: 801, y: 288, width: 32, height: 32, number: 4 },
        ],
    powerUp:
        [
            { x: 180, y: 221, width: 32, height: 32, type: "freeze2", number: 2 },
            { x: 976, y: 297, width: 32, height: 32, type: "freeze1", number: 1 },
        ],

};
var levelThree = {
    wall: [
        //Main borders
        { x: 0, y: 467, width: 670, height: 160 }, //Southern tree farm wall
        { x: 658, y: 623, width: 188, height: 30 }, //Southern bush wall
        { x: 788, y: 467, width: 492, height: 55 }, //Southern forest wall
        { x: 0, y: 258, width: 546, height: 64 }, //Wall south of orange forest
        { x: 270, y: 90, width: 324, height: 54 }, //Wall south of apple forest
        { x: 280, y: 132, width: 54, height: 132 }, //Wall west of apple forest
        { x: 520, y: 224, width: 25, height: 40 }, //Wall south corner below apple forest
        { x: 520, y: 135, width: 25, height: 40 }, //Wall north corner below apple forest

        //House borders
        { x: 584, y: 102, width: 96, height: 30 }, //Wall west of house
        { x: 656, y: 110, width: 38, height: 130 }, //Wall west of house 2
        { x: 656, y: 290, width: 624, height: 28 }, //Wall south of house 
        { x: 1106, y: 122, width: 34, height: 170 }, //Wall west of house near forest
        { x: 988, y: 132, width: 144, height: 28 }, //Wall west of house near forest - north
        { x: 680, y: 176, width: 146, height: 62 }, //Bushes by house west side
        { x: 866, y: 130, width: 30, height: 106 }, //Bushes by house east side
        { x: 884, y: 152, width: 126, height: 72 }, //House east side
        { x: 804, y: 164, width: 72, height: 48 }, //House door

        //Sheep pasture
        { x: 834, y: 639, width: 272, height: 22 }, //Southern wall
        { x: 834, y: 506, width: 272, height: 22 }, //Northern wall
        { x: 1092, y: 513, width: 15, height: 147 }, //East wall
        { x: 789, y: 513, width: 56, height: 63 }, //West wall

        //Map borders
        { x: 0, y: 284, width: 168, height: 216 }, //west path
        { x: 1120, y: 292, width: 160, height: 208 }, //east path
    ],
    door:
        [
            { x: 1098, y: 313, width: 44, height: 162, direction: "west", destination: "levelFour" }, //main room bottom wall // change to levelTwo

        ],
    item:
        [
            { x: 225, y: 315, width: 19, height: 20 }, //rocks 1 - main road (north)
            { x: 236, y: 328, width: 19, height: 14 }, //rocks 2 - main road (north)
            { x: 513, y: 340, width: 17, height: 9 }, //rocks 3 - main road (north)
            { x: 520, y: 313, width: 25, height: 28 }, //rocks 4 - main road (north)
            { x: 677, y: 314, width: 37, height: 34 }, //cart 
            { x: 708, y: 311, width: 38, height: 27 }, //fruit boxes - main road
            { x: 331, y: 137, width: 14, height: 15 }, //water 1 - pig area
            { x: 507, y: 161, width: 16, height: 13 }, //water 2 - pig area
            { x: 1002, y: 155, width: 21, height: 14 }, //toolbox by house
            { x: 1098, y: 315, width: 27, height: 37 }, //wood pile - main road
            { x: 1074, y: 315, width: 26, height: 27 }, //wood pile - main road
            { x: 866, y: 313, width: 40, height: 30 },  //rocks 5 - main road (north)
            { x: 876, y: 340, width: 19, height: 14 }, //rocks 6 - main road (north)
            { x: 600, y: 430, width: 27, height: 39 }, //rocks 7 - main road (south)
            { x: 615, y: 444, width: 19, height: 28 }, //rocks 8 - main road (south)
            { x: 757, y: 520, width: 35, height: 44 }, //food crates near sheep area
            { x: 776, y: 559, width: 16, height: 15 }, //water near sheep area
            { x: 842, y: 626, width: 18, height: 15 }, //water 1 - sheep area
            { x: 1018, y: 522, width: 11, height: 13 }, //water 2 - sheep area
            { x: 1079, y: 439, width: 33, height: 37 }, //rocks 9 - main road (south)
        ],
    entities:
        [
            //Chickens
            { color: "1", type: "chicken", direction: "down", xPos: 1010, yPos: 198, range: 00 },
            { color: "3", type: "chicken", direction: "left", xPos: 1076, yPos: 260, range: 00 },
            { color: "1", type: "chicken", direction: "down", xPos: 612, yPos: 150, range: 00 },
            { color: "8", type: "chicken", direction: "down", xPos: 755, yPos: 325, range: 00 },
            { color: "7", type: "chicken", direction: "right", xPos: 280, yPos: 445, range: 70 },
            //{ color: "1", type: "chicken", direction: "right", xPos: 280, yPos: 375, range: 100 },
            //{ color: "3", type: "chicken", direction: "right", xPos: 265, yPos: 425, range: 100 },
            { color: "2", type: "chicken", direction: "down", xPos: 1025, yPos: 442, range: 0 },

            //Sheep
            { color: "1", type: "sheep", direction: "down", xPos: 900, yPos: 550, range: 00 },
            { color: "1", type: "sheep", direction: "right", xPos: 1050, yPos: 530, range: 0 },
            { color: "3", type: "sheep", direction: "left", xPos: 850, yPos: 600, range: 0 },

            //Pigs
            { color: "5", type: "pig", direction: "left", xPos: 340, yPos: 210, range: 0 }, //far left
            { color: "8", type: "pig", direction: "down", xPos: 380, yPos: 150, range: 0 }, //middle 380x, 150y
            { color: "7", type: "pig", direction: "right", xPos: 450, yPos: 210, range: 0 }, //far right 
        ],
    collectable:
        [
            { x: 424, y: 232, width: 32, height: 32, number: 5 },
            { x: 1065, y: 190, width: 32, height: 32, number: 6 },
            { x: 1036, y: 550, width: 32, height: 32, number: 8 },
        ],
    powerUp:
        [
            { x: 480, y: 330, width: 32, height: 32, type: "freeze0", number: 0 },
            { x: 1076, y: 168, width: 32, height: 32, type: "freeze1", number: 1 },

        ],

};
var levelFour = { // forest level
    wall:
        [
            //Main borders
            { x: 0, y: 1159, width: 456, height: 34 }, //south wall
            { x: 0, y: 995, width: 279, height: 43 }, //north wall
            { x: 143, y: 877, width: 140, height: 159 }, //south west wall - below cave
            { x: 432, y: 1080, width: 37, height: 107 }, //south east wall
            { x: 457, y: 773, width: 33, height: 329 }, //south east wall
            { x: 341, y: 363, width: 97, height: 68 }, //north wall - east of doorway
            { x: 209, y: 336, width: 101, height: 79 }, //north wall - west of doorway
            { x: 406, y: 416, width: 46, height: 221 }, //north east wall
            { x: 431, y: 612, width: 45, height: 153 }, //east wall
            { x: 447, y: 762, width: 31, height: 36 }, //east wall - small
            { x: 187, y: 376, width: 49, height: 103 }, //west wall - north
            { x: 159, y: 460, width: 65, height: 286 }, //west wall - above cave
            { x: 123, y: 727, width: 53, height: 162 }, //cave west wall
            { x: 144, y: 767, width: 147, height: 64 }, //cave north wall
            { x: 177, y: 736, width: 97, height: 35 }, //wall above cave
            { x: 115, y: 996, width: 60, height: 200 }, //entrance wall
        ],
    door:
        [
            { x: 306, y: 384, width: 37, height: 16, direction: "south", destination: "levelFive" }, //at the observatory door // change to levelFive
        ],
    item:
        [
            { x: 250, y: 1006, width: 14, height: 49 }, //pillar 1
            { x: 405, y: 1067, width: 32, height: 27 }, //bush 1
            { x: 425, y: 1000, width: 50, height: 20 }, //rock 1
            { x: 269, y: 888, width: 38, height: 20 }, //rock 2
            { x: 442, y: 858, width: 30, height: 17 }, //rock 3

            { x: 270, y: 739, width: 40, height: 27 }, //pillar 2
            { x: 394, y: 574, width: 13, height: 33 }, //pillar 3
            { x: 359, y: 548, width: 14, height: 26 }, //pillar 4
            { x: 207, y: 594, width: 37, height: 60 }, //bench 1

            { x: 264, y: 500, width: 13, height: 26 }, //pillar 5
            { x: 210, y: 496, width: 28, height: 30 }, //small tree 1
            { x: 256, y: 409, width: 18, height: 22 }, //big tree 1
            { x: 392, y: 421, width: 28, height: 26 }, //small tree 2

            { x: 303, y: 361, width: 50, height: 37 }, //doorway wall
        ],
    entities:
        [
            { color:"2", type: "owl", direction: "down", xPos: 280, yPos: 1035, range: 90},
            { color:"4", type: "bear", direction: "right", xPos: 180, yPos: 825, range: 250},
            { color:"4", type: "wolf", direction: "up", xPos: 378, yPos: 605, range: 200},
        ],
    collectable:
        [

        ],
    powerUp:
        [

        ],

};
var levelFive = { // final level
    wall: [],
    door: [
        { x: 400, y: 400, width: 10, height: 31, direction: "south", destination: "credits" }, //at computer station // change to credits
    ],
    item: [],
    entities: [],
    collectable: [],
    powerUp: [],
}
var deaths = {
    death: [{ count: 0 }],
}