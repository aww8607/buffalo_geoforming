class temp_info_box extends Phaser.GameObjects.Container 
{
    
	constructor(scene, box_state, temp_change_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		if(box_state == 0)
		{
			var back_box = this.scene.add.rectangle(0, 0, 135*2+10, 25, 0xFFFFFF);
			back_box.setOrigin(0,0);
			this.add(back_box);		
			
			//temp_change_value.toFixed(1)+temp_change_text

			var temp_value_text = scene.add.text(15, 5, temp_change_value.toFixed(1)+temp_change_text, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			temp_value_text.setOrigin(0,0);
			temp_value_text.x = (135*2+10-temp_value_text.width)/2;
			temp_value_text.y = 5;
			this.add(temp_value_text);


			var temp_icon = this.scene.add.image(10, 4, card_graphics_array[26]);
			temp_icon.scale = 0.50;
			temp_icon.setOrigin(0,0);
			this.add(temp_icon);
			//temp_icon.x=5;
			//temp_icon.y=5;

			var temp_cover = this.scene.add.image(0, 0, card_graphics_array[27]).setInteractive();
			temp_cover.setOrigin(0,0);
			this.add(temp_cover);

			temp_cover.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, box_state);});
			temp_cover.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, box_state);});


			
		}
		else if(box_state == 1)
		{
			var back_box = this.scene.add.rectangle(0, 0, 300, 600, 0xFFCC99).setInteractive();
			back_box.setOrigin(0,0);
			this.add(back_box);		

			var temp_icon = this.scene.add.image(10, 5, card_graphics_array[26]);
			temp_icon.scale = 0.75;
			temp_icon.setOrigin(0,0);
			this.add(temp_icon);
			//temp_icon.x=5;
			//temp_icon.y=5;

			
		}
		
		
		
		this.scene.add.existing(this);
		

	}
	
	clickMe(scene, box_state)
    {

	}	
	
	
	unclickMe(scene, box_state)
    {
		menu_back_box_holder = new menu_back_box(scene, 4);
	}	
}