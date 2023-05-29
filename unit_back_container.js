class unit_back_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, unit_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		
		//var backer = this.scene.add.image(0, 0, card_graphics_array[1]).setInteractive();
		//backer.setOrigin(0,0);
		//this.add(backer);	

		//var border_box = this.scene.add.rectangle(-2, -2, 64, 36, 0xFF0000);
		
		
		var border_box = this.scene.add.rectangle(-2, -2, 53-24+unit_no, 29, 0xFF0000);
		border_box.setOrigin(0,0);
		this.add(border_box);

		
		//var back_box = this.scene.add.rectangle(0, 0, 60, 32, 0xEFE4B0);
		var back_box = this.scene.add.rectangle(0, 0, 49-24+unit_no, 25, 0xEFE4B0);
		back_box.setOrigin(0,0);
		this.add(back_box);
		

		
		//backer.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, button_no, location_no);});
		//backer.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, button_no, location_no);});

		this.scene.add.existing(this);
		
    }

	clickMe(scene, b_no)
    {
    	
    }
	
	unclickMe(scene, b_no, loc_no)
	{
		
		if(b_no == 0)
		{
		  //console.log("Menu");	
		}
		else if(b_no == 1)
		{
		  //console.log("Key");	
		}
		
	}
}	
