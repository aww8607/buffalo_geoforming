class message_back_box extends Phaser.GameObjects.Container{
	
	constructor(scene, message_number) 
	{
		super(scene);
		this.scene = scene;

		var button_width = 137;
		var x_offset = (880-650)/2;
		var y_offset = 80;
		
		const menu_box = this.scene.add.rectangle(0, 0, 650, 350, 0xFFCC99);
		menu_box.setOrigin(0,0);	
		menu_box.x = x_offset;
		menu_box.y = y_offset+15;
		this.add(menu_box);        		

		var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
		top_button.setOrigin(0,0);
		top_button.x = x_offset+650 - 137 - 10;
		top_button.y = y_offset+300 - 20+50;
		this.add(top_button);
			
		var title_text = this.scene.add.text(0, 5, 'OK', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
		title_text.setOrigin(0,0);
		title_text.x = x_offset+650 - 137 - 10 + (button_width - title_text.width)/2;
		title_text.y = y_offset+300 - 20+5+50;
		this.add(title_text);		

		if(message_number == 0)
		{
			var message_text = this.scene.add.text(0, 5, "One of your agent's stealth values reached 0, and has been arrested.  This agent's informmation value has been subtracted from your vitory points total.", { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 240, useAdvancedWrap: true}});
			message_text.setOrigin(0,0);
			message_text.x = x_offset+350 + (button_width - title_text.width)/2;
			message_text.y = y_offset+30;
			this.add(message_text);		

			var photo_holder = this.scene.add.image(0, 0, card_graphics_array[13]);
			photo_holder.setOrigin(0,0);
			photo_holder.scale = 1.5;
			photo_holder.x = x_offset+20;
			photo_holder.y = y_offset+30;
			this.add(photo_holder);	
			
			
		}
			
		var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
		backer.setOrigin(0,0);
		backer.x = x_offset+650 - 137 - 10;
		backer.y = y_offset+300 - 20+50;
		this.add(backer);	

		backer.on('pointerdown', () => {top_button.alpha = 0.3; this.clickMe(scene, message_number);});
		backer.on('pointerup', () => {top_button.alpha = 1.0; this.unclickMeLeft(scene, message_number);});			

		this.depth = 95;
		this.scene.add.existing(this);


	}
	
	clickMe(scene, message_number)
    {
    	
		
	}
	
	unclickMeLeft(scene, message_number)
    {
    	if(message_number == 0 || message_number == 1 || message_number == 2)
		{
		
			this.destroy();

			if(message_number == 0)
			{
				phase = 0;
				new_card(-1, scene);	
			}

		}
		
	}


}
