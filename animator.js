class Animator {
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration ){
        Object.assign(this,{spritesheet, xStart, yStart, width, height, frameCount, frameDuration} );
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };
    setYStart(yDirectionPadding){
        this.yStart = yDirectionPadding;
    }
    setXStart(xDirectionPadding){
        this.xStart = xDirectionPadding;
    }
    setFrameCount(newFrameCount){
        switch(newFrameCount){
            case 3:
                this.totalTime = this.frameDuration*3;
            break;

            case 1:
                this.totalTime = this.frameDuration*1;
            break;

            default:
                //console.log("set framecount failed");
            break;

        }
        
        //this.totalTime = this.frameCount * frameDuration;
    }
    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();
        ctx.imageSmoothingEnabled = false; // sharpens the image
        ctx.drawImage(this.spritesheet,
            this.xStart + this.width*frame,this.yStart, // start x, start y
            this.width,this.height, // source width, source height
            x,y, //destination x, destination y
            this.width*scale,this.height*scale); // destination height, destination width
    };
    
    currentFrame(){
        return Math.floor(this.elapsedTime/this.frameDuration);   
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
   
};