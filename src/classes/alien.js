class Alien extends Phaser.Physics.Arcade.Sprite {
    static preloadAssets(scene, imagePath) {
        scene.load.image("alien", `${imagePath}/spaceship4.png`);
    }

    constructor(scene, x, y, speed = 50) {
        super(scene, x, y, "alien");
    
        // Add the alien to the scene and physics system
        scene.add.existing(this);
        scene.physics.add.existing(this);
    
        // Set origin
        this.setOrigin(0.5);
    
        // Enable collision with world bounds
        this.setCollideWorldBounds(true);
    
        // Set specific collisions
        this.body.checkCollision.up = true;
        this.body.checkCollision.down = true;
        this.body.checkCollision.left = true;
        this.body.checkCollision.right = true;
    
        // Set bounce
        this.setBounce(1, 1);
    
        // Set scale
        this.setScale(0.5);
    
        // Set speed (default to 50 if not provided)
        this.speed = speed;
    
        // Add and configure invisible lines for collision
        this.createInvisibleLine(scene, 300);
        this.createInvisibleLine(scene, 90);
    
        this.moving = true;
    }
    

    createInvisibleLine(scene, y) {
        const line = scene.add.rectangle(0, y, 2000, 1, 0x000000);
        scene.physics.add.existing(line, true);
        line.visible = false;
        scene.physics.add.collider(this, line);
    }

    setMoving(moving) {
        this.moving = moving;
        if (moving) {
            this.visible = true;
            // make the sprite active
            this.body.enable = true;
            // Set the velocity only on the x-axis for horizontal movement
            this.setVelocityX(this.speed);  // Only move horizontally
        } else {
            this.visible = false;
            // make the sprite inactive
            this.body.enable = false;
            this.setVelocityX(0);  // Stop horizontal movement
        }
    }

    /**
     * Resets the alien when it is hit
     */
    reset() {
        this.scene.tweens.add({
            targets: this,
            scaleX: 0.8,
            scaleY: 0.8,
            duration: 100,
            ease: "Quad",
            repeat: 0,
            yoyo: true,
            onComplete: () => {
                this.visible = false;
                // Show the alien again after 0.5 seconds
                this.scene.time.delayedCall(
                    700,
                    () => {
                        if (this.scene.trialType != "confidence") {
                            this.visible = true;
                        }

                        // Set to random x and y
                        this.x = Math.random() * 300 + 100;
                        this.y = Math.random() * 100 + 150;

                        // Rescale
                        this.setScale(0.5);
                    },
                    [],
                    this
                );
            },
            callbackScope: this,
        });
    }
}

export default Alien;
