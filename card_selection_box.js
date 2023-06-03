	class card_selection_box extends Phaser.GameObjects.Container{
	
	constructor(scene, message_number, card_choice_1, card_choice_2, card_choice_3, expanded) 
	{
		super(scene);
		this.scene = scene;

		var button_width = 137;
		var x_offset = (880-880)/2;
		var y_offset = 80;
		var action_button_text = "";
		var message_title_text="";
			
		var card_graphic_number_choice=0;
		
		
		if(expanded == 0)
		{
			const menu_box = this.scene.add.rectangle(0, 0, 160, 45, 0xFFCC99);
			menu_box.setOrigin(0,0);	
			menu_box.x = x_offset;
			menu_box.y = y_offset;
			this.add(menu_box);        		
			
			var collapse_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			collapse_button.setOrigin(0,0);
			collapse_button.x = x_offset+10;
			collapse_button.y = y_offset+10;
			this.add(collapse_button);
				
			var collapse_title_text = this.scene.add.text(0, 5, 'SHOW', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			collapse_title_text.setOrigin(0,0);
			collapse_title_text.x = x_offset+10 + (button_width - collapse_title_text.width)/2;
			collapse_title_text.y = y_offset+10+5;
			this.add(collapse_title_text);		
				
			var collapse_backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			collapse_backer.setOrigin(0,0);
			collapse_backer.x = x_offset+10;
			collapse_backer.y = y_offset+10;
			this.add(collapse_backer);	

			collapse_backer.on('pointerdown', () => {collapse_button.alpha = 0.3; this.clickMe(scene, -2,-2,expanded);});
			collapse_backer.on('pointerup', () => {collapse_button.alpha = 1.0; this.unclick_collapse(scene, message_number, card_choice_1, card_choice_2, card_choice_3, expanded);});			

			this.depth = 95;
			this.scene.add.existing(this);
			
		
		}
		if(expanded == 1)
		{
			

			
			
			if(message_number == 0)
			{
				action_button_text = "ADD";
				message_title_text = "Choose a card to add to the deck";
			}
			else if(message_number == 1)
			{
				action_button_text = "DISCARD";
				message_title_text = "Choose a card to remove from the deck";
			}
			else if(message_number == 2)
			{
				action_button_text = "PLAY NEXT";
				message_title_text = "Pick the next card to play";			
			}
			
			
			
			const menu_box = this.scene.add.rectangle(0, 0, 880, 420, 0xFFCC99);
			menu_box.setOrigin(0,0);	
			menu_box.x = x_offset;
			menu_box.y = y_offset;
			this.add(menu_box);        		


			var message_text = this.scene.add.text(0, 5, message_title_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			message_text.setOrigin(0,0);
			message_text.x = x_offset + (880 - message_text.width)/2;
			message_text.y = y_offset+15;
			this.add(message_text);					

			var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button.setOrigin(0,0);
			top_button.x = x_offset+10;
			top_button.y = y_offset+400 - 20;
			this.add(top_button);
				
			var title_text = this.scene.add.text(0, 5, 'PASS', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text.setOrigin(0,0);
			title_text.x = x_offset+10 + (button_width - title_text.width)/2;
			title_text.y = y_offset+400 - 20+5;
			this.add(title_text);		
				
			var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer.setOrigin(0,0);
			backer.x = x_offset+10;
			backer.y = y_offset+400-20;
			this.add(backer);	

			backer.on('pointerdown', () => {top_button.alpha = 0.3; this.clickMe(scene, -1,-1,expanded);});
			backer.on('pointerup', () => {top_button.alpha = 1.0; this.unclickMeLeft(scene, -1,-1,expanded);});			


			var collapse_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			collapse_button.setOrigin(0,0);
			collapse_button.x = x_offset+10;
			collapse_button.y = y_offset+10;
			this.add(collapse_button);
				
			var collapse_title_text = this.scene.add.text(0, 5, 'HIDE', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			collapse_title_text.setOrigin(0,0);
			collapse_title_text.x = x_offset+10 + (button_width - collapse_title_text.width)/2;
			collapse_title_text.y = y_offset+10+5;
			this.add(collapse_title_text);		
				
			var collapse_backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			collapse_backer.setOrigin(0,0);
			collapse_backer.x = x_offset+10;
			collapse_backer.y = y_offset+10;
			this.add(collapse_backer);	

			collapse_backer.on('pointerdown', () => {collapse_button.alpha = 0.3; this.clickMe(scene, -2,-2,expanded);});
			collapse_backer.on('pointerup', () => {collapse_button.alpha = 1.0; this.unclick_collapse(scene, message_number, card_choice_1, card_choice_2, card_choice_3, expanded);});			
			
			if(card_choice_1>-1)
			{

				if(message_number==0){card_graphic_number_choice=add_deck[card_choice_1]}
				else{card_graphic_number_choice=in_deck[card_choice_1]}
				
				var left_card_icon = new action_card_container(scene, card_graphic_number_choice);
				left_card_icon.x = 10;
				left_card_icon.y = 130;
				this.add(left_card_icon);
							
				var left_card_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
				left_card_button.setOrigin(0,0);
				left_card_button.x = x_offset+10+(279-button_width)/2;
				left_card_button.y = y_offset+365 - 20;
				this.add(left_card_button);
					
				var left_title_text = this.scene.add.text(0, 5, action_button_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
				left_title_text.setOrigin(0,0);
				left_title_text.x = x_offset+10 + (button_width - left_title_text.width)/2+(279-button_width)/2;
				left_title_text.y = y_offset+365 - 20+5;
				this.add(left_title_text);		
					
				var left_backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
				left_backer.setOrigin(0,0);
				left_backer.x = x_offset+10+(279-button_width)/2;
				left_backer.y = y_offset+365-20;
				this.add(left_backer);	

				left_backer.on('pointerdown', () => {left_card_button.alpha = 0.3; this.clickMe(scene, message_number, card_choice_1,expanded);});
				left_backer.on('pointerup', () => {left_card_button.alpha = 1.0; this.unclickMeLeft(scene, message_number, card_choice_1,expanded);});			
							
			}

			if(card_choice_2>-1)
			{

				if(message_number==0){card_graphic_number_choice=add_deck[card_choice_2]}
				else{card_graphic_number_choice=in_deck[card_choice_2]}

				var center_card_icon = new action_card_container(scene, card_graphic_number_choice);
				center_card_icon.x = 10+10+279;
				center_card_icon.y = 130;
				this.add(center_card_icon);
							
				var center_card_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
				center_card_button.setOrigin(0,0);
				center_card_button.x = x_offset+10+279+10+(279-button_width)/2;
				center_card_button.y = y_offset+365 - 20;
				this.add(center_card_button);
					
				var center_title_text = this.scene.add.text(0, 5, action_button_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
				center_title_text.setOrigin(0,0);
				center_title_text.x = x_offset+10+279+10 + (button_width - center_title_text.width)/2+(279-button_width)/2;
				center_title_text.y = y_offset+365 - 20+5;
				this.add(center_title_text);		
					
				var center_backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
				center_backer.setOrigin(0,0);
				center_backer.x = x_offset+10+279+10+(279-button_width)/2;
				center_backer.y = y_offset+365-20;
				this.add(center_backer);	

				center_backer.on('pointerdown', () => {center_card_button.alpha = 0.3; this.clickMe(scene, message_number, card_choice_2,expanded);});
				center_backer.on('pointerup', () => {center_card_button.alpha = 1.0; this.unclickMeLeft(scene, message_number, card_choice_2,expanded);});			
							
			}

			if(card_choice_3>-1)
			{

				if(message_number==0){card_graphic_number_choice=add_deck[card_choice_3]}
				else{card_graphic_number_choice=in_deck[card_choice_3]}

				var right_card_icon = new action_card_container(scene, card_graphic_number_choice);
				right_card_icon.x = 10+(10+279)*2;
				right_card_icon.y = 130;
				this.add(right_card_icon);
							
				var right_card_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
				right_card_button.setOrigin(0,0);
				right_card_button.x = x_offset+10+(279+10)*2+(279-button_width)/2;
				right_card_button.y = y_offset+365 - 20;
				this.add(right_card_button);
					
				var right_title_text = this.scene.add.text(0, 5, action_button_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
				right_title_text.setOrigin(0,0);
				right_title_text.x = x_offset+10+(279+10)*2 + (button_width - right_title_text.width)/2+(279-button_width)/2;
				right_title_text.y = y_offset+365 - 20+5;
				this.add(right_title_text);		
					
				var right_backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
				right_backer.setOrigin(0,0);
				right_backer.x = x_offset+10+(279+10)*2+(279-button_width)/2;
				right_backer.y = y_offset+365-20;
				this.add(right_backer);	

				right_backer.on('pointerdown', () => {right_card_button.alpha = 0.3; this.clickMe(scene, message_number, card_choice_3, expanded);});
				right_backer.on('pointerup', () => {right_card_button.alpha = 1.0; this.unclickMeLeft(scene, message_number, card_choice_3, expanded);});			
							
			}

			
			this.depth = 95;
			this.scene.add.existing(this);
		}

	}
	
	clickMe(scene, message_number, card_no, expanded)
    {
    	
		
	}
	
	unclickMeLeft(scene, message_number, card_no, expanded)
    {
    	if(message_number == 0 || message_number == 1 || message_number == 2)
		{
		
			this.destroy();

			if(card_no > -1)
			{
				if(message_number == 0)
				{
					phase = 0;
					
					new_deck_card_count=in_deck.length+1;
					in_deck[new_deck_card_count] = add_deck[card_no]; //0
					//new_deck_card_count=new_deck_card_count+1;

					
					add_deck[card_no]=-1;
					new_card(-1, scene);
				}
				else if(message_number==1)
				{
					phase = 0;
					
						
					remove_card(card_no);
					new_card(-1, scene);	
						
				}
				else if(message_number==2)
				{
					phase = 0;
					new_card(card_no, scene);
				}
			}

		}
		else if(card_no == -1)
		{
			this.destroy();
			phase = 0;
			new_card(-1, scene);
		}
		
	}

	unclick_collapse(scene, message_number, card_choice_1, card_choice_2, card_choice_3, expanded)
    {
		if(expanded == 1)
		{
			this.destroy();
			var tester = new card_selection_box(scene, message_number, card_choice_1, card_choice_2, card_choice_3, 0);
	
		}
		else if(expanded == 0)
		{
			this.destroy();
			var tester = new card_selection_box(scene, message_number, card_choice_1, card_choice_2, card_choice_3, 1);		
		}
	}
}
