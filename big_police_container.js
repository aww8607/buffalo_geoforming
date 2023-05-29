class big_police_container extends Phaser.GameObjects.Container 
{

	constructor(scene, card_no) 
	{
		
		
		super(scene);
		this.scene = scene;
		
		
		var bp_box = this.scene.add.image(0, 0, card_graphics_array[7]).setInteractive();
		bp_box.setOrigin(0,0);
		this.add(bp_box);	

		
		bp_box.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, card_no);});
		bp_box.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, card_no);});

		this.scene.add.existing(this);
		
    }
	
	
	clickMe(scene, c_no)
    {
	
	}
	
	unclickMe(scene, c_no)
	{
		
	}



}