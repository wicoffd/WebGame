// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];
        this.alive = true;
        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.left = false;
        this.leftUp = true;
        this.right = false;
        this.rightUp = true;
        this.up = false;
        this.down = false;
        this.A = false;
        this.B = false;
        this.enter = false;
        this.credits = false;
        this.E = false;
        this.Q = false;
        this.use = false;
        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        this.keyboardActive = false;
        var that = this;
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });
        function mouseListener(e) {
            that.mouse = getXandY(e);
        }
        function mouseClickListener(e) {
            that.click = getXandY(e);
            if (true) console.log(that.click);
        }
        function wheelListener(e) {
            e.preventDefault(); // Prevent Scrolling
            that.wheel = e.deltaY;
        }
        function keydownListener(e) {
            that.keyboardActive = true;
            // console.log(e);
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    that.leftUp = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    that.rightUp = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = true;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = true;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = true;
                    break;
                case "KeyX":
                case "Period":
                    that.A = true;
                    break;
                case "Enter":
                    that.enter = true;
                    break;
                case "KeyQ":
                case "Slash":
                    that.Q = true;
                    break;
                case "KeyE":
                case "ShiftRight":
                    that.E = true;
                    break;
                case "KeyR":
                case "Numpad1":
                    that.use = true;
                    break;
                    
            }
        }
        function keyUpListener(e) {
            that.keyboardActive = false;
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    that.leftUp = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    that.rightUp = true;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
                case "KeyZ":
                case "Comma":
                    that.B = false;
                    break;
                case "KeyX":
                case "Period":
                    that.A = false;
                    break;
                case "Enter":
                    that.enter = false;
                    break;
                case "KeyQ":
                case "Slash":
                    that.Q = false;
                    break;
                case "KeyE":
                case "ShiftRight":
                    that.E = false;
                    break;
                case "KeyR":
                case "Numpad1":
                    that.use = false;
                    break;
            }
        }
        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                //console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                //console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                //console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                //console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });


        that.mousemove = mouseListener;
        that.leftclick = mouseClickListener;
        that.wheelscroll = wheelListener;
        that.keydown = keydownListener;
        that.keyup = keyUpListener;
        this.ctx.canvas.addEventListener("mousemove", that.mousemove, false);

        this.ctx.canvas.addEventListener("click", that.leftclick, false);

        this.ctx.canvas.addEventListener("wheel", that.wheelscroll, false);

        this.ctx.canvas.addEventListener("keydown", that.keydown, false);

        this.ctx.canvas.addEventListener("keyup", that.keyup, false);
        //this.ctx.canvas.addEventListener("enter", that.keyup, false); // might not be needed
        
    };

    addEntity(entity) {
        this.entities.push(entity);

    };
    clearEntities() {
        this.entities = [];
    }

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        if (this.entities.length > 0) {// delete
            for (let i = this.entities.length - 1; i >= 0; i--) {
                this.entities[i].draw(this.ctx, this);
            }
        }
        //console.log("draw this.ctx");
        this.camera.draw(this.ctx);
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        this.camera.update();

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)    