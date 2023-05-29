class orange_border_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, card_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		
		var o_border = this.scene.add.image(0, 0, card_graphics_array[4]).setInteractive();
		o_border.setOrigin(0,0);
		this.add(o_border);	

		
		o_border.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, card_no);});
		o_border.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, card_no);});

		this.scene.add.existing(this);
		
    }

	clickMe(scene, c_no)
    {
	
	}
	
	unclickMe(scene, c_no)
	{
		
	}
}	
