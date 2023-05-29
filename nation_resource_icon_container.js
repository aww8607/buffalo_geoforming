class nation_resource_icon_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, resource_type) 
	{
		
		super(scene);
		this.scene = scene;
		
		
		var resource_icon = this.scene.add.image(0, 0, card_graphics_array[resource_icon_number[resource_type]]); //.setInteractive();
		resource_icon.setOrigin(0,0);
		this.add(resource_icon);	

		
		//r_border.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, card_no);});
		//r_border.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, card_no);});

		this.scene.add.existing(this);
		
    }

	clickMe(scene, c_no)
    {
	
	}
	
	unclickMe(scene, c_no)
	{
		
	}
}	
