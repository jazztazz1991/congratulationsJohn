
import peonanim from './peon-anim.js'
const path = './src/students/charles/src/assets/peon-john.png'
class Peon {
    constructor(context, debugMode) {
        this.img = new Image();
        this.context = context;
        this.drawRect = undefined;
        this.debugMode = debugMode;
        this.frame = 0;
        this.active = false;
        this.direction = { x: false, y: false };
        this.loaded = false;
        this.audio = [];
        this.moving = { x: false, y: false }
        this.speed;
        this.currentFrames = peonanim.walkDown.frames;
        this.animSpeed = peonanim.walkUp.frameTime;
        this.reverseFrames = false;
        this.lastFrameTime;
        this.destination;
        this.timer = 0;
        this.img.onload = () => {

            this.lastFrameTime = performance.now();
            this.animate();
        }
        this.jobsDone;
        this.yesAudio = [];
        this.img.src = path;

        console.count('Peons Created')
    }

    loadAudio = async () => {
        try {

            const audiopath = `./src/students/charles/src/assets/sounds/`;

            this.jobsDone = new Audio(`${audiopath}WorkComplete.ogg`);
            this.jobsDone.addEventListener('ended', () => {

                this.jobsDone.pause();

            });
            const ready = new Audio(`${audiopath}PeonReady1.ogg`);
            ready.addEventListener("canplaythrough", (ev) => {
                console.count('loading audtio')
                ready.play()

            });
            for (let i = 1; i < 8; i++) {

                const audio = new Audio(`${audiopath}PeonWhat${i}.ogg`);
                audio.load();
                this.audio.push(audio);
            }

            for (let i = 1; i < 4; i++) {
                const audio = new Audio(`${audiopath}PeonYes${i}.ogg`);
                audio.load();
                this.yesAudio.push(audio);

            }

        } catch (error) {
            console.error("Error loading audio:", error);
        }
    };
    animate = () => {


        // Calculate the time elapsed since the last frame
        const now = performance.now();
        const deltaTime = (now - this.lastFrameTime) / 1000; // Convert to seconds

        // Update the frame based on the elapsed time
        if (deltaTime >= this.animSpeed) {
            this.lastFrameTime = now;

            let { sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight } = this.currentFrames[this.frame];
            if (this.drawRect) {
                dx += this.drawRect.dx;
                dy += this.drawRect.dy;
            }
            this.drawRect = { sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight };

            this.speed = sWidth * this.animSpeed;

            if (!this.reverseFrames) {
                if (this.frame === this.currentFrames.length - 1) {
                    this.frame--;
                    this.reverseFrames = true;
                } else {
                    this.frame++;
                }
            } else {
                if (this.frame === 1) {
                    this.frame++;
                    this.reverseFrames = false;
                } else {
                    this.frame--;
                }
            }

            console.log(`this.frame: ${this.frame}\nthis.reverseFrames: ${this.reverseFrames}`)
            this.loaded = true;
            //move the peon\
            if (this.moving.x || this.moving.y) {
                this.move();
            }
        }

    };

    isLoaded() {
        return this.loaded;
    }


    move = () => {
        if (this.loaded) {
            if (this.moving.x)
                if (this.direction.x) {
                    if(!this.moving.y) this.drawRect.dx -= this.speed/2
                    this.drawRect.dx -= this.speed;
                }
                else{
                    if(!this.moving.y) this.drawRect.dx += this.speed/2
                    this.drawRect.dx += this.speed;
                }

            if (this.moving.y)
                if (this.direction.y){
                    if(!this.moving.x) this.drawRect.dy -= this.speed/2
                    this.drawRect.dy -= this.speed;}
                else{
                    if(!this.moving.x) this.drawRect.dy += this.speed/2
                    this.drawRect.dy += this.speed;}

        }
    }

    update = () => {
        if (this.active) {
            if (this.audio.length === 0) {
                // const loadPeon = () => {
                this.loadAudio();
                this.animate();
                //this.timer = undefined
                this.drawRect.dx = this.context.canvas.width / 2;
                this.drawRect.dy = this.context.canvas.height - this.drawRect.sHeight * 2.5;
                this.active = false;
                // }

                //   this.timer = setTimeout(loadPeon, 2000);

                //clearTimeout(this.timer);

                /// this.timer = undefined;

            } else {
                if (this.loaded) {

                    this.animate();
                    if (!this.moving.x && !this.moving.y && this.frame !== 0) {

                        this.frame = 0; this.reverseFrames = false;
                        if (this.active) {
                            this.jobsDone.play();
                            this.active = false;
                        } //this.jobsDone.load();

                    }

                }
            }

        }

        this.draw();
        if (this.debugMode) {
            this.timer += 1;
            if (this.timer > 17.5) {
                this.debugUpdate()
                // this.timer = setTimeout(, 2000);
            }
        }
        if (this.moving.x) {
            if (this.drawRect.dx < this.destination.x && this.drawRect.dx + this.drawRect.dWidth > this.destination.x) {
                this.moving.x = false;
            }
        }
        if (this.moving.y) {
            if (this.drawRect.dy < this.destination.y && this.drawRect.dy + this.drawRect.dHeight > this.destination.y) {
                this.moving.y = false;
            }
        }

        if (this.moving.y && !this.moving.x) {
            if (this.direction.y) this.currentFrames = peonanim.walkUp.frames;
            else this.currentFrames = peonanim.walkDown.frames;
        }
        if (this.moving.x && !this.moving.y) {
            if (this.direction.x) this.currentFrames = peonanim.walkLeft.frames;
            else this.currentFrames = peonanim.walkRight.frames;
        }
        // if (this.debugMode) this.debugUpdate()
    }

    debugUpdate = () => {
        //  this.timer = setTimeout(() => {
        //clearTimeout(this.timer)
        this.timer = 0;
        // clearTimeout(this.timer);
        //  }, 1000);
    }
    getActive = () => {
        return this.active;
    }

    setActive = (boo) => {
        this.active = boo;
    }

    setDebugMode = (boo) => {
        this.debugMode = boo;
    }


    getDebugMode = () => {
        return this.debugMode;
    }
    checkClicked = (_x, _y) => {
      //  this.active = true;
        const rect = this.context.canvas.getBoundingClientRect();
        const x = _x - rect.left;
        const y = _y - rect.top;
        const { dx, dy, dWidth, dHeight } = this.drawRect;
        if (x > dx && x < (dx + dWidth) && y > dy && y < (dy + dHeight)) {
            this.active = false;
            let idx = (Math.floor(Math.random() * this.audio.length - 1))
            this.audio[idx].play();
            return false;
        } else {

            this.destination = { x: x, y: y };
            if (x < dx) {
                this.direction.x = true;
                this.moving.x = true;
            }
            if (x > dx) {
                this.direction.x = false;
                this.moving.x = true;
            }
            if (y < dy) {
                this.direction.y = true;
                this.moving.y = true;
            }
            if (y > dy) {
                this.direction.y = false;
                this.moving.y = true;
            }

            if (this.moving.x && this.moving.y) {
                if (this.direction.y && this.direction.x) this.currentFrames = peonanim.walkDiagonalUpLeft.frames;
                else if (this.direction.y) { this.currentFrames = peonanim.walkDiagonalUpRight.frames; }
                else if (this.direction.x) this.currentFrames = peonanim.walkDiagonalDownLeft.frames;
                else { this.currentFrames = peonanim.walkDiagonalDownRight.frames; }
            }
            const idx = Math.floor(Math.random() * 3)
            this.yesAudio[idx].play();

            return true;
        }
    }

    draw = () => {
        this.context.save();

        if (this.loaded)
            this.context.drawImage(this.img, ...Object.values(this.drawRect));
        if (this.debugMode) {
            this.drawBoundingRect(this.context, this.drawRect)
        }
        this.context.restore();
    }

    drawBoundingRect = () => {
        this.context.strokeStyle = "#FF02BF"
        const { dx, dy, dWidth, dHeight } = this.drawRect;
        this.context.strokeRect(dx, dy, dWidth, dHeight);
    }
}

export default Peon;
