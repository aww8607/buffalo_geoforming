class action_card_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, card_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		var button_width = 137+137+5;
		var action_button_width = 130;//(137-10)/2;//137;

		var button_1_text = 'PLAY';

		var main_text = '';
		var discard_text = '. ONE TIME USE: this card will discard after one use';

		var action_description = '';
	
		var cost_a_text = '';
		var cost_b_text = '';
		var cost_c_text = '';
		
		var y_offset = 30;

		var code_box_color_array = [];
		
		code_box_color_array[0] = 0xFFCC00; 
		code_box_color_array[1] = 0xFFCC99; 
		code_box_color_array[2] = 0x99FF99; 
		code_box_color_array[3] = 0xCCCCFF; 
		code_box_color_array[4]	= 0x00CCFF;	
		code_box_color_array[5]	= 0xFFFF00; 
		code_box_color_array[6]	= 0xFFCC00;
		code_box_color_array[7]	= 0x99CC66;
		code_box_color_array[8]	= 0x999900;
		code_box_color_array[9]	= 0xFFCC99;
		code_box_color_array[10] = 0xFFFF00;
		code_box_color_array[11] = 0xFFFF99;
		code_box_color_array[12] = 0xFFCCFF;
		
			
		var back_box_border = this.scene.add.rectangle(-1, -1, button_width+2, 775-490+2, 0xFF0000);
		back_box_border.setOrigin(0,0);
		this.add(back_box_border);
		
		
		var top_button = this.scene.add.rectangle(0, 0, button_width, 775-490, code_box_color_array[card_type[card_no]]);
		top_button.setOrigin(0,0);
		this.add(top_button);
		
		//var title_text = this.scene.add.text(0, 5, card_name[card_no], { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
		//title_text.setOrigin(0,0);
		//title_text.x = (button_width - title_text.width)/2;
		
		//this.add(title_text);				
		
		var flavor_text_holder = this.scene.add.text(0, 5+35-y_offset, flavor_text[card_no], { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
		flavor_text_holder.setOrigin(0,0);
		flavor_text_holder.x = (button_width - flavor_text_holder.width)/2;
		
		this.add(flavor_text_holder);				
		
		if(card_type[card_no] == 0)
		{
			var agent_back_box = new unit_back_container(scene,0);

			agent_back_box.x = 110+5;
			agent_back_box.y = 200-5-y_offset+4;
 			this.add(agent_back_box);
			
			var action_card_info_level = scene.add.text(15, 15, '?', {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
			action_card_info_level.setOrigin(0,0);
			action_card_info_level.x = 110+10;
			action_card_info_level.y = 200-y_offset;
			this.add(action_card_info_level);
			
			var stelath_back_box = new code_box_container(scene,-1);
			stelath_back_box.x=110+5+25;
			stelath_back_box.y=200-1-y_offset;
			this.add(stelath_back_box);
			
			var action_card_stealth_level = scene.add.text(15, 15, stealth_level[game_agent_array[card_no]], {fontSize: 'bold 24px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
			action_card_stealth_level.x = 110+10+25;
			action_card_stealth_level.y = 200-y_offset;
			this.add(action_card_stealth_level);
			
			//console.log("card no: "+card_no+" game_agent_array: "+game_agent_array[card_no]+" char_1 "+char_1[game_agent_array[card_no]]+" char_2 "+char_2[game_agent_array[card_no]]); 
			
			//var l_char_box = new code_box_container(scene,char_1[game_agent_array[card_no]]);
			//l_char_box.x=110+5;
			//l_char_box.y=200+25+2-y_offset;
			//this.add(l_char_box);
			
			//var char_box_2= new code_box_container(scene,char_2[game_agent_array[card_no]]);
			//char_box_2.x=110+5+25;
			//char_box_2.y=200+25+2-y_offset;
			//this.add(char_box_2);
			
			action_description = 'To place this agent in a box on the board, press the PLAY button.  Discard after use.';	
			
		
		}
		else if(card_type[card_no] == 1)
		{
			if(action_type[card_no] == 1)
			{
				action_description = 'Add '+action_var_1[card_no]+" VP(s) per agent in a "+map_box_names[action_var_3[card_no]]+" box with an info level greater or equal to "+action_var_4[card_no]+" to your victory point total.  The agent must not be in a box under surveillance.";				
			
				var action_graphic_icon_text = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 850, useAdvancedWrap: true}});
				action_graphic_icon_text.x = 25+25;
				action_graphic_icon_text.y = 70-y_offset;
				this.add(action_graphic_icon_text);

				var action_graphic_icon_b = scene.add.text(15, 15, 'VP(s) Per', {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 250, useAdvancedWrap: true}});
				action_graphic_icon_b.x = 60+25;
				action_graphic_icon_b.y = 70-y_offset;
				this.add(action_graphic_icon_b);
		
				var map_type_box_a = new map_container(scene,action_var_3[card_no],38,38);
				map_type_box_a.x=177+25;
				map_type_box_a.y=67-6-y_offset;
				this.add(map_type_box_a);
					
				var map_type_box_b = new map_container(scene,7,24,24);
				map_type_box_b.x=183+25;
				map_type_box_b.y=67-y_offset;
				this.add(map_type_box_b);
				
				var info_cost_threshold_2 = scene.add.text(15, 15, action_var_4[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				info_cost_threshold_2.x = 188+25;
				info_cost_threshold_2.y = 67-y_offset; 
				this.add(info_cost_threshold_2);

			
			}
			else if(action_type[card_no] == 2)
			{
				action_description = 'Add '+action_var_1[card_no]+" to your operations point total";								

				var action_graphic_icon_text = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 850, useAdvancedWrap: true}});
				action_graphic_icon_text.x = 19;
				action_graphic_icon_text.y = 70-y_offset;
				this.add(action_graphic_icon_text);

				var action_graphic_icon_b = scene.add.text(15, 15, 'Operations Point(s)', {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 250, useAdvancedWrap: true}});
				action_graphic_icon_b.x = 54;
				action_graphic_icon_b.y = 70-y_offset;
				this.add(action_graphic_icon_b);
			
			
			}
			
		}
		else if(card_type[card_no] == 2)
		{
			if(action_var_1[card_no] == 0)
			{
				if(action_type[card_no] == 0)
				{
					action_description = 'All capability boxes with the '+code_name[action_var_2[card_no]]+' charactaristic will lose '+action_var_3[card_no]+' activist(s)';				

					var cost_a_map_graphic_back = new unit_back_container(scene,5);//new map_container(scene,7,32,25);
					cost_a_map_graphic_back.x=10+69;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70-3;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);


				}
				else if(action_type[card_no] == 1)
				{
					action_description = 'All capability boxes with the '+code_name[action_var_2[card_no]]+' characteristic will lose '+action_var_3[card_no]+' stealth point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

				}
				else if(action_type[card_no] == 2)
				{
					action_description = 'Any country with a '+code_name[action_var_2[card_no]]+' characteristic marker in a country capability box will add '+action_var_3[card_no]+' Carbon Emissions point per characteristic marker to the country Carbon Emissions total';				
				
					var cost_a_map_graphic_back = new map_container(scene,13,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

				}
				else if(action_type[card_no] == 3)
				{
					action_description = 'Any country with a '+code_name[action_var_2[card_no]]+' characteristic marker in a country capability box will add '+action_var_3[card_no]+' CO2 point per characteristic marker to the CO2 total';				
				
					//var cost_a_map_graphic_back = new map_container(scene,13,32,25);
					//cost_a_map_graphic_back.x=10+70;
					//cost_a_map_graphic_back.y=70-3-y_offset;
					//this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 85+25-40+20-20;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var point_type = scene.add.image(0, 0, card_graphics_array[24]);
					point_type.x=110+20-20;
					point_type.y=79-y_offset;
					point_type.scale = 0.75
					this.add(point_type);		
					
					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 110+20+20-20;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+86+20-20;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

				}


			}
			else if(action_var_1[card_no] == 1)
			{
				if(action_type[card_no] == 0)
				{
					action_description = 'All agent cards in '+map_box_names[action_var_2[card_no]]+' boxes will lose '+action_var_3[card_no]+' information level point(s)';				
			
					var cost_a_map_graphic_back = new map_container(scene,7,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
					
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+76;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);
			
				
				}
				else if(action_type[card_no] == 1)
				{
					action_description = 'All agent cards in '+map_box_names[action_var_2[card_no]]+' boxes  will lose '+action_var_3[card_no]+' stealth point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
					
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+76;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);
				
				}
				

			}

		}
		else if(card_type[card_no] == 3)
		{
			if(action_type[card_no] == 0)
			{
				action_description = 'The yellow INVESTIGATOR markers will move to a new randomly selected map box type.';				

				
				var yellow_shield_left = this.scene.add.image(100, 67-y_offset, card_graphics_array[10]);
				yellow_shield_left.setOrigin(0,0);
				yellow_shield_left.scale = 0.75
				this.add(yellow_shield_left);	
	
				var right_arrow_icon = this.scene.add.image(130, 67-y_offset, card_graphics_array[12]);
				right_arrow_icon.setOrigin(0,0);
				
				this.add(right_arrow_icon);	
	
	
				var yellow_shield_right = this.scene.add.image(100+60, 67-y_offset, card_graphics_array[10]);
				yellow_shield_right.setOrigin(0,0);
				yellow_shield_right.scale = 0.75
				this.add(yellow_shield_right);	
	
	
			}
			else if(action_type[card_no] == 1)
			{
				action_description = 'A red storm marker will be placed on a randomly selected box without a mitigation marker.';				
								
				//var red_shield_left = this.scene.add.image(100, 67-y_offset, card_graphics_array[11]);
				//red_shield_left.setOrigin(0,0);
				//red_shield_left.scale = 0.75
				//this.add(red_shield_left);	

				var right_arrow_icon = this.scene.add.image(130, 65-y_offset, card_graphics_array[28]);
				right_arrow_icon.setOrigin(0,0);
				this.add(right_arrow_icon);	


				//var red_shield_right = this.scene.add.image(100+60, 67-y_offset, card_graphics_array[11]);
				//red_shield_right.setOrigin(0,0);
				//red_shield_right.scale = 0.75
				//this.add(red_shield_right);	
				
			}
			
		}
		else if(card_type[card_no] == 4)
		{
			if(action_var_1[card_no] == 0)
			{
				if(action_type[card_no] == 0)
				{
					action_description = 'All agents with the '+code_name[action_var_2[card_no]]+' charactaristic will gain '+action_var_3[card_no]+' information level point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,7,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);
				
				
				}
				else if(action_type[card_no] == 1)
				{
					action_description = 'All agents with the '+code_name[action_var_2[card_no]]+' charactaristic will gain '+action_var_3[card_no]+' stealth point(s)';				

					var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

				
				}
				else if(action_type[card_no] == 2)
				{
					action_description = 'All boxes with VP points and an agent with the '+code_name[action_var_2[card_no]]+' charactaristic will gain '+action_var_3[card_no]+' VP(s)';				

					//var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					//cost_a_map_graphic_back.x=10+70;
					//cost_a_map_graphic_back.y=70-3-y_offset;
					//this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no]+' VP', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+40;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

				
				}
				
			}
			else if(action_var_1[card_no] == 1)
			{
				if(action_type[card_no] == 0)
				{
					action_description = 'All agents in '+map_box_names[action_var_2[card_no]]+' boxes will gain '+action_var_3[card_no]+' information level point(s)';				

					var cost_a_map_graphic_back = new map_container(scene,7,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
					
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+76;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);

				
				}
				else if(action_type[card_no] == 1)
				{
					action_description = 'All agents in '+map_box_names[action_var_2[card_no]]+' boxes  will gain '+action_var_3[card_no]+' stealth point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					cost_a_map_graphic_back.x=10+70;
					cost_a_map_graphic_back.y=70-3-y_offset;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+70;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
					
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+76;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);
				
				
				}
				else if(action_type[card_no] == 2)
				{
					action_description = 'All agents in '+map_box_names[action_var_2[card_no]]+' boxes  will gain '+action_var_3[card_no]+' stealth point(s)';				
				
					//var cost_a_map_graphic_back = new map_container(scene,6,32,25);
					//cost_a_map_graphic_back.x=10+70;
					//cost_a_map_graphic_back.y=70-3-y_offset;
					//this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_3[card_no]+' VP', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+40;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 45+71;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+70;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
					
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+76;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);
				
				
				}
				
				
			}			
		}
		else if(card_type[card_no] == 5)
		{
			action_description = "Remove any agent from the board.  The agent must not be in a box under surveillance.  When an agent's stealth level reaches 0, its information value is subtracted from your victory point total";				
		}
		else if(card_type[card_no] == 6)
		{
			if(action_type[card_no]==1)
			{
				action_description = "Add "+action_var_1[card_no]+" to your victory point total";
			
				var action_graphic_icon_text = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 850, useAdvancedWrap: true}});
				action_graphic_icon_text.x = 25;
				action_graphic_icon_text.y = 70-y_offset;
				this.add(action_graphic_icon_text);

				var action_graphic_icon_b = scene.add.text(15, 15, 'Victory Point(s)', {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 250, useAdvancedWrap: true}});
				action_graphic_icon_b.x = 60;
				action_graphic_icon_b.y = 70-y_offset;
				this.add(action_graphic_icon_b);

			
			}
			else if(action_type[card_no]==2)
			{
				action_description = "Add "+action_var_1[card_no]+" to your activist point total";

				var action_graphic_icon_text = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 850, useAdvancedWrap: true}});
				action_graphic_icon_text.x = 13;
				action_graphic_icon_text.y = 70-y_offset;
				this.add(action_graphic_icon_text);

				var action_graphic_icon_b = scene.add.text(15, 15, 'Activists Point(s)', {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 250, useAdvancedWrap: true}});
				action_graphic_icon_b.x = 43;
				action_graphic_icon_b.y = 70-y_offset;
				this.add(action_graphic_icon_b);

			}
		}
		else if(card_type[card_no] == 8)
		{
			if(action_type[card_no]==0)
			{
			
				main_text = "Add "+action_var_1[card_no]+" to your geoengineering point total if you control two countries with space programs";
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;
				var point_type = scene.add.image(0, 0, card_graphics_array[25]);
				point_type.x=55+10;
				point_type.y=79-y_offset;
				point_type.scale = 0.75
				this.add(point_type);		
					
				var point_text = scene.add.text(0, 0, '+'+action_var_1[card_no], {fontSize: 'bold 25px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				point_text.x = 45+28+10;
				point_text.y = 68-y_offset;
				this.add(point_text);
					
			
				if(action_var_2[card_no]> -1)	
				{
					var resource_type_1 = scene.add.image(0, 0, card_graphics_array[19+action_var_2[card_no]]);
					resource_type_1.x=43+120;
					resource_type_1.y=79-y_offset;
					this.add(resource_type_1);		
				}
				
					
				if(action_var_3[card_no]> -1)
				{
					var resource_type_2 = scene.add.image(0, 0, card_graphics_array[19+action_var_3[card_no]]);
					resource_type_2.x=43+120+35;
					resource_type_2.y=79-y_offset;
					this.add(resource_type_2);		
				}
				
				if(action_var_4[card_no]> -1)
				{
					var resource_type_3 = scene.add.image(0, 0, card_graphics_array[19+action_var_4[card_no]]);
					resource_type_3.x=43+120+35;
					resource_type_3.y=79-y_offset;
					this.add(resource_type_3);		
				}				
				
				//var action_graphic_icon_text = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 850, useAdvancedWrap: true}});
				//action_graphic_icon_text.x = 25;
				//action_graphic_icon_text.y = 70-y_offset;
				//this.add(action_graphic_icon_text);

				//var action_graphic_icon_b = scene.add.text(15, 15, 'Victory Point(s)', {fontSize: 'bold 20px', color: '#0000FF', wordWrap: { width: 250, useAdvancedWrap: true}});
				//action_graphic_icon_b.x = 60;
				//action_graphic_icon_b.y = 70-y_offset;
				//this.add(action_graphic_icon_b);

			
			}			
		}	
		else if(card_type[card_no] == 9)
		{
			if(action_type[card_no]==0)
			{
				if(action_var_1[card_no] == 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" carbon emmisions point from every country with "+map_box_modifier[action_var_2[card_no]]+" "+map_box_names[action_var_2[card_no]]+" box with a tech level of "+action_var_3[card_no]+" or more";
				}
				else if(action_var_1[card_no] > 1)
				{
					main_text = "Subtract "+action_var_2[card_no]+" carbon emmisions points from every country with "+map_box_modifier[action_var_2[card_no]]+" "+map_box_names[action_var_2[card_no]]+" box with a tech level of "+action_var_3[card_no]+" or more support points";					
				}
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;

				var cost_a_map_graphic_back = new map_container(scene,13,32,25);
				cost_a_map_graphic_back.x=10+70;
				cost_a_map_graphic_back.y=70-3-y_offset;
				this.add(cost_a_map_graphic_back);


				var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_1[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 15+70;
				cost_a_graphic_number.y = 73-2-y_offset;
				this.add(cost_a_graphic_number);

				var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_per_text.x = 45+71;
				cost_a_per_text.y = 73-2-y_offset;
				this.add(cost_a_per_text);

				var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
				cost_a_char_var.x=85+70;
				cost_a_char_var.y=70-6-y_offset;
				this.add(cost_a_char_var);
					
				var cost_a_back_border = new map_container(scene,7,19,19);
				cost_a_back_border.x=85+76;
				cost_a_back_border.y=70-y_offset;
				this.add(cost_a_back_border);
			
				var info_cost_threshold_2 = scene.add.text(15, 15, action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				info_cost_threshold_2.x = 89+76;
				info_cost_threshold_2.y = 71-y_offset; 
				this.add(info_cost_threshold_2);
			
			}
			else if(action_type[card_no]==1)
			{
				if(action_var_1[card_no] == 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" carbon emmisions point from every country with "+map_box_modifier[action_var_2[card_no]]+" "+map_box_names[action_var_2[card_no]]+" box with a support level of "+action_var_3[card_no]+" or more";
				}
				else if(action_var_1[card_no] > 1)
				{
					main_text = "Subtract "+action_var_2[card_no]+" carbon emmisions points from every country with "+map_box_modifier[action_var_2[card_no]]+" "+map_box_names[action_var_2[card_no]]+" box with a support level of "+action_var_3[card_no]+" or more support points";					
				}
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;

				var cost_a_map_graphic_back = new map_container(scene,13,32,25);
				cost_a_map_graphic_back.x=10+70;
				cost_a_map_graphic_back.y=70-3-y_offset;
				this.add(cost_a_map_graphic_back);


				var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_1[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 15+70;
				cost_a_graphic_number.y = 73-2-y_offset;
				this.add(cost_a_graphic_number);

				var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_per_text.x = 45+71;
				cost_a_per_text.y = 73-2-y_offset;
				this.add(cost_a_per_text);

				var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
				cost_a_char_var.x=85+70;
				cost_a_char_var.y=70-6-y_offset;
				this.add(cost_a_char_var);
					
				var cost_a_back_border = new map_container(scene,6,19,19);
				cost_a_back_border.x=85+76;
				cost_a_back_border.y=70-y_offset;
				this.add(cost_a_back_border);
			
				var info_cost_threshold_2 = scene.add.text(15, 15, action_var_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
				info_cost_threshold_2.x = 89+76;
				info_cost_threshold_2.y = 71-y_offset; 
				this.add(info_cost_threshold_2);
			
			}	
		}
		else if(card_type[card_no] == 10)
		{
			if(action_type[card_no]==0)
			{
				if(action_var_1[card_no] == 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" CO2 point from the CO2 point total for every "+map_box_names[action_var_2[card_no]]+" box with a tech level of "+action_var_3[card_no]+" or more";;
				}
				else if(action_var_1[card_no] > 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" CO2 points from the CO2 point total for every "+map_box_names[action_var_2[card_no]]+" box with a tech level of "+action_var_3[card_no]+" or more";;					
				}
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;
			
				var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_1[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 15+70-35;
				cost_a_graphic_number.y = 73-2-y_offset;
				this.add(cost_a_graphic_number);

				var point_type = scene.add.image(0, 0, card_graphics_array[24]);
				point_type.x=15+70+20;
				point_type.y=79-y_offset;
				point_type.scale = 0.75
				this.add(point_type);		
				
				var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_per_text.x = 45+71+15;
				cost_a_per_text.y = 73-2-y_offset;
				this.add(cost_a_per_text);

				var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
				cost_a_char_var.x=85+70+20;
				cost_a_char_var.y=70-6-y_offset;
				this.add(cost_a_char_var);
					
				var cost_a_back_border = new map_container(scene,7,19,19);
				cost_a_back_border.x=85+76+20;
				cost_a_back_border.y=70-y_offset;
				this.add(cost_a_back_border);
			
				var info_cost_threshold_2 = scene.add.text(15, 15, action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				info_cost_threshold_2.x = 89+76+20;
				info_cost_threshold_2.y = 71-y_offset; 
				this.add(info_cost_threshold_2);
				
			
			}
			if(action_type[card_no]==1)
			{
				if(action_var_1[card_no] == 1)
				{
					main_text = "Add "+action_var_1[card_no]+" Activists to the Activist total for every "+map_box_names[action_var_2[card_no]]+" box with "+action_var_3[card_no]+" or more Activists";
				}
				else if(action_var_1[card_no] > 1)
				{
					main_text = "Add "+action_var_1[card_no]+" Activists to the Activist total for every "+map_box_names[action_var_2[card_no]]+" box with "+action_var_3[card_no]+" or more Activists";
				}
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;
			
				var cost_a_graphic_number = scene.add.text(15, 15, '+'+action_var_1[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 15+70-20;
				cost_a_graphic_number.y = 73-2-y_offset;
				this.add(cost_a_graphic_number);

				var point_type = scene.add.image(0, 0, card_graphics_array[5]);
				point_type.x=15+70+20;
				point_type.y=79-y_offset;
				point_type.scale = 1.00
				this.add(point_type);		
				
				var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_per_text.x = 45+71+15;
				cost_a_per_text.y = 73-2-y_offset;
				this.add(cost_a_per_text);

				var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
				cost_a_char_var.x=85+70+20;
				cost_a_char_var.y=70-6-y_offset;
				this.add(cost_a_char_var);
					
				var cost_a_back_border = new map_container(scene,7,19,19);
				cost_a_back_border.x=85+76+20;
				cost_a_back_border.y=70-y_offset;
				this.add(cost_a_back_border);
			
				var info_cost_threshold_2 = scene.add.text(15, 15, action_var_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				info_cost_threshold_2.x = 89+76+20;
				info_cost_threshold_2.y = 71-y_offset; 
				this.add(info_cost_threshold_2);
				
			
			}
			if(action_type[card_no]==2)
			{
				if(action_var_1[card_no] == 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" CO2 point from the CO2 point total for every "+code_name[action_var_2[card_no]]+" characteristic marker";
				}
				else if(action_var_1[card_no] > 1)
				{
					main_text = "Subtract "+action_var_1[card_no]+" CO2 points from the CO2 point total for every "+code_name[action_var_2[card_no]]+" characteristic marker";
				}
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;
			

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+action_var_1[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 85+25-40+20-30;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var point_type = scene.add.image(0, 0, card_graphics_array[24]);
					point_type.x=110+20-20;
					point_type.y=79-y_offset;
					point_type.scale = 0.75
					this.add(point_type);		
					
					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 110+20+20-20;
					cost_a_per_text.y = 73-2-y_offset;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,action_var_2[card_no]);
					cost_a_char_var.x=85+86+20-20;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);
				
			
			}
			
			
		}	
		else if(card_type[card_no] == 11)
		{
			if(action_type[card_no]==0)
			{
				
				main_text = "Change a "+code_name[action_var_1[card_no]]+" charactaristic to a "+code_name[action_var_2[card_no]]+" charactaristic if you control two countries with intelligence agencies";
				
				if(play_once[card_no]==0){discard_text = '';}	
					
				action_description = main_text+discard_text;

				var old_char_box = new code_box_container(scene,action_var_1[card_no]);
				old_char_box.x=90-50;
				old_char_box.y=68-y_offset;
				this.add(old_char_box);

				var cost_a_per_text = scene.add.text(15, 15, '>>>', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_per_text.x = 45+71+10-50;
				cost_a_per_text.y = 73-2-y_offset;
				this.add(cost_a_per_text);

				var new_char_box = new code_box_container(scene,action_var_2[card_no]);
				new_char_box.x=90+80-50;
				new_char_box.y=68-y_offset;
				this.add(new_char_box);

				if(action_var_3[card_no]> -1)
				{
					var resource_type_2 = scene.add.image(0, 0, card_graphics_array[19+action_var_3[card_no]]);
					resource_type_2.x=43+120+30;
					resource_type_2.y=79-y_offset;
					this.add(resource_type_2);		
				}
				
				if(action_var_4[card_no]> -1)
				{
					var resource_type_3 = scene.add.image(0, 0, card_graphics_array[19+action_var_4[card_no]]);
					resource_type_3.x=43+120+30+35;
					resource_type_3.y=79-y_offset;
					this.add(resource_type_3);		
				}				
				

			}
		}
		else if(card_type[card_no] == 12)
		{
			
			if(action_type[card_no] == 0)
			{
					action_description = 'Add one '+code_name[action_var_1[card_no]]+' charactaristic marker to a randomly selected '+map_box_names[action_var_2[card_no]]+' capability box with no activists or storm markers';				


					var cost_a_graphic_number = scene.add.text(15, 15, '+1', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 15+65-40+20;
					cost_a_graphic_number.y = 73-2-y_offset;
					this.add(cost_a_graphic_number);

					var cost_a_char_var = new code_box_container(scene,action_var_1[card_no]);
					cost_a_char_var.x=85+25-40+20;
					cost_a_char_var.y=70-3-y_offset;
					this.add(cost_a_char_var);

					var cost_a_graphic_linking_text = scene.add.text(15, 15, 'in a', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_linking_text.x = 110+20;
					cost_a_graphic_linking_text.y = 73-2-y_offset;
					this.add(cost_a_graphic_linking_text);

					var cost_a_char_var = new map_container(scene,action_var_2[card_no],32,32);
					cost_a_char_var.x=85+80+20;
					cost_a_char_var.y=70-6-y_offset;
					this.add(cost_a_char_var);
						
					var cost_a_back_border = new map_container(scene,7,19,19);
					cost_a_back_border.x=85+86+20;
					cost_a_back_border.y=70-y_offset;
					this.add(cost_a_back_border);

			}
		}
			
		var action_description_holder = this.scene.add.text(0, 5+35+60-y_offset, action_description, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
		action_description_holder.setOrigin(0,0);
		action_description_holder.x = (button_width - action_description_holder.width)/2;
		
		this.add(action_description_holder);				
		
		/*
		if(cost_type_a[card_no]>0)
		{
			if(cost_type_a[card_no]==1)
			{
				cost_a_text = 'To play or block this card, you need to have an agent with info level '+cost_var_a_1[card_no]+' or higher in a '+map_box_names[cost_var_a_2[card_no]]+' map box';
				
				var cost_a_map_graphic_back = new map_container(scene,cost_var_a_2[card_no],80,80);
				cost_a_map_graphic_back.x=120-5-15;
				cost_a_map_graphic_back.y=5+35+60+175-5-5;
				cost_a_map_graphic_back.scale = 0.45;
				this.add(cost_a_map_graphic_back);


				var cost_a_graphic_back = new code_box_container(scene,-2);
				cost_a_graphic_back.x=120-15;
				cost_a_graphic_back.y=5+35+60+175-5;
				this.add(cost_a_graphic_back);

				
				var cost_a_graphic_number = scene.add.text(15, 15, cost_var_a_1[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 125-15;
				cost_a_graphic_number.y = 5+35+60+175-5+1;
				this.add(cost_a_graphic_number);
				
				
			
			}
			else if(cost_type_a[card_no]==2)
			{
				if(cost_var_a_1[card_no] == 1)
				{
					cost_a_text = 'If you play or block  this card, any agent on the board with the '+code_name[cost_var_a_2[card_no]]+' charactaristic will lose '+cost_var_a_3[card_no]+' stealth point(s)';				

					var cost_a_map_graphic_back = new map_container(scene,6,30,25);
					cost_a_map_graphic_back.x=120-5-15-1;
					cost_a_map_graphic_back.y=5+35+60+175-5;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25+2;
					cost_a_graphic_number.y = 5+35+60+175-5+4;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 125-25+2+35;
					cost_a_per_text.y = 5+35+60+175-5+4;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,cost_var_a_2[card_no]);
					cost_a_char_var.x=125-25+2+35+40;
					cost_a_char_var.y=5+35+60+175-5;
					this.add(cost_a_char_var);
				
				
				}	
				else if(cost_var_a_1[card_no] == 2)
				{
					cost_a_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_a_2[card_no]]+' map box will lose '+cost_var_a_3[card_no]+' stealth point(s)';				

					var cost_a_map_graphic_back = new map_container(scene,6,30,25);
					cost_a_map_graphic_back.x=120-5-15-1;
					cost_a_map_graphic_back.y=5+35+60+175-5;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25+2;
					cost_a_graphic_number.y = 5+35+60+175-5+4;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 125-25+2+35;
					cost_a_per_text.y = 5+35+60+175-5+4;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,cost_var_a_2[card_no],32,31);
					cost_a_char_var.x=125-25+2+35+40+3;
					cost_a_char_var.y=5+35+60+175-5-3;
					this.add(cost_a_char_var);
					
					var cost_a_unit_var = new map_container(scene,7,19,19);
					cost_a_unit_var.x=125-25+2+35+40+9;
					cost_a_unit_var.y=5+35+60+175-5+3;
					this.add(cost_a_unit_var);


					//var cost_a_char_var = new code_box_container(scene,cost_var_a_2[card_no]);
					//cost_a_char_var.x=125-25+2+35+40;
					//cost_a_char_var.y=5+35+60+175-5;
					//this.add(cost_a_char_var);

				
				}

			}
			else if(cost_type_a[card_no]==3)
			{
				if(cost_var_a_1[card_no] == 1)
				{
					cost_a_text = 'If you play or block this card, any agent on the board with the '+code_name[cost_var_a_2[card_no]]+' charactaristic will lose '+cost_var_a_3[card_no]+' information point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,7,30,25);
					cost_a_map_graphic_back.x=120-5-15-1;
					cost_a_map_graphic_back.y=5+35+60+175-5;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25+2;
					cost_a_graphic_number.y = 5+35+60+175-5+4;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 125-25+2+35;
					cost_a_per_text.y = 5+35+60+175-5+4;
					this.add(cost_a_per_text);

					var cost_a_char_var = new code_box_container(scene,cost_var_a_2[card_no]);
					cost_a_char_var.x=125-25+2+35+40;
					cost_a_char_var.y=5+35+60+175-5;
					this.add(cost_a_char_var);
				
				
				}	
				else if(cost_var_a_1[card_no] == 2)
				{
					cost_a_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_a_2[card_no]]+' map box will lose '+cost_var_a_3[card_no]+' information point(s)';				
				
					var cost_a_map_graphic_back = new map_container(scene,7,30,25);
					cost_a_map_graphic_back.x=120-5-15-1;
					cost_a_map_graphic_back.y=5+35+60+175-5;
					this.add(cost_a_map_graphic_back);

					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25+2;
					cost_a_graphic_number.y = 5+35+60+175-5+4;
					this.add(cost_a_graphic_number);

					var cost_a_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_per_text.x = 125-25+2+35;
					cost_a_per_text.y = 5+35+60+175-5+4;
					this.add(cost_a_per_text);

					var cost_a_char_var = new map_container(scene,cost_var_a_2[card_no],32,31);
					cost_a_char_var.x=125-25+2+35+40+3;
					cost_a_char_var.y=5+35+60+175-5-3;
					this.add(cost_a_char_var);
					
					var cost_a_unit_var = new map_container(scene,7,19,19);
					cost_a_unit_var.x=125-25+2+35+40+9;
					cost_a_unit_var.y=5+35+60+175-5+3;
					this.add(cost_a_unit_var);
				
				
				}

			}
			else if(cost_type_a[card_no]==4)
			{
				if(cost_var_a_1[card_no] == 0)
				{
					cost_a_text = 'If you play or block this card, you will lose '+cost_var_a_2[card_no]+' operations point(s)';				
					
					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25;
					cost_a_graphic_number.y = 5+35+60+175-5+1;
					this.add(cost_a_graphic_number);

					var vp_graphic_a = scene.add.image(15, 15, card_graphics_array[5]);
					vp_graphic_a.scale = 1.0;
					vp_graphic_a.setOrigin(0,0);
					vp_graphic_a.x = 135;
					vp_graphic_a.y = 5+35+60+175-5+2+2;
					this.add(vp_graphic_a);


					//var cost_a_graphic_type = scene.add.text(15, 15, 'Diplomacy Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_a_graphic_type.x = 135;
					//cost_a_graphic_type.y = 5+35+60+175-5;
					//this.add(cost_a_graphic_type);
					

				
				}	
				else if(cost_var_a_1[card_no] == 1)
				{
					cost_a_text = 'If you play or block this card, you will lose '+cost_var_a_2[card_no]+' victory point(s)';;				
				
					var cost_a_graphic_number = scene.add.text(15, 15, '-'+cost_var_a_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_a_graphic_number.x = 125-25;
					cost_a_graphic_number.y = 5+35+60+175-5+1;
					this.add(cost_a_graphic_number);

					var vp_graphic_a = scene.add.image(15, 15, card_graphics_array[6]);
					vp_graphic_a.scale = 0.75;
					vp_graphic_a.setOrigin(0,0);
					vp_graphic_a.x = 135;
					vp_graphic_a.y = 5+35+60+175-5+1;
					this.add(vp_graphic_a);
					
					//var cost_a_graphic_type = scene.add.text(15, 15, 'Victory Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_a_graphic_type.x = 135;
					//cost_a_graphic_type.y = 5+35+60+175-5;
					//this.add(cost_a_graphic_type);

								
				}				
			}


			var cost_text_holder_a = this.scene.add.text(0, 5+35+60+200+5, cost_a_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_text_holder_a.setOrigin(0,0);
			cost_text_holder_a.x = (button_width - cost_text_holder_a.width)/2;
			this.add(cost_text_holder_a);		
	
			var cost_a_header = this.scene.add.text(0, 5+35+60+175, 'COST 1:', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_a_header.setOrigin(0,0);
			cost_a_header.x = 20;//(button_width - cost_a_header.width)/2;
			this.add(cost_a_header);		
		}
		*/
		
		/*
		if(cost_type_b[card_no]>0)
		{
			if(cost_type_b[card_no]==1)
			{
				cost_b_text = 'To play or block this card, you need to have an agent with info level '+cost_var_b_1[card_no]+' or higher in a '+map_box_names[cost_var_b_2[card_no]]+' map box';
			
				var cost_b_map_graphic_back = new map_container(scene,cost_var_b_2[card_no],80,80);
				cost_b_map_graphic_back.x=120-5-15;
				cost_b_map_graphic_back.y=5+35+60+175-5-5+150;
				cost_b_map_graphic_back.scale = 0.45;
				this.add(cost_b_map_graphic_back);


				var cost_b_graphic_back = new code_box_container(scene,-2);
				cost_b_graphic_back.x=120-15;
				cost_b_graphic_back.y=5+35+60+175-5+150;
				this.add(cost_b_graphic_back);

				
				var cost_b_graphic_number = scene.add.text(15, 15, cost_var_b_1[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_b_graphic_number.x = 125-15;
				cost_b_graphic_number.y = 5+35+60+175-5+1+150;
				this.add(cost_b_graphic_number);
				
		
			
			}
			else if(cost_type_b[card_no]==2)
			{
				if(cost_var_b_1[card_no] == 1)
				{
					cost_b_text = 'If you play or block this card, any agent on the board with the '+code_name[cost_var_b_2[card_no]]+' charactaristic will lose '+cost_var_b_3[card_no]+' stealth point(s)';				

					var cost_b_map_graphic_back = new map_container(scene,6,30,25);
					cost_b_map_graphic_back.x=120-5-15-1;
					cost_b_map_graphic_back.y=5+35+60+175-5+150;
					this.add(cost_b_map_graphic_back);

					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25+2;
					cost_b_graphic_number.y = 5+35+60+175-5+4+150;
					this.add(cost_b_graphic_number);

					var cost_b_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_per_text.x = 125-25+2+35;
					cost_b_per_text.y = 5+35+60+175-5+4+150;
					this.add(cost_b_per_text);

					var cost_b_char_var = new code_box_container(scene,cost_var_b_2[card_no]);
					cost_b_char_var.x=125-25+2+35+40;
					cost_b_char_var.y=5+35+60+175-5+150;
					this.add(cost_b_char_var);
				
				
				}	
				else if(cost_var_b_1[card_no] == 2)
				{
					cost_b_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_b_2[card_no]]+' map box will lose '+cost_var_b_3[card_no]+' stealth point(s)';				
				
					var cost_b_map_graphic_back = new map_container(scene,6,30,25);
					cost_b_map_graphic_back.x=120-5-15-1;
					cost_b_map_graphic_back.y=5+35+60+175-5+150;
					this.add(cost_b_map_graphic_back);

					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25+2;
					cost_b_graphic_number.y = 5+35+60+175-5+4+150;
					this.add(cost_b_graphic_number);

					var cost_b_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_per_text.x = 125-25+2+35;
					cost_b_per_text.y = 5+35+60+175-5+4+150;
					this.add(cost_b_per_text);

					var cost_b_char_var = new map_container(scene,cost_var_b_2[card_no],32,31);
					cost_b_char_var.x=125-25+2+35+40+3;
					cost_b_char_var.y=5+35+60+175-5-3+150;
					this.add(cost_b_char_var);
					
					var cost_b_unit_var = new map_container(scene,7,19,19);
					cost_b_unit_var.x=125-25+2+35+40+9;
					cost_b_unit_var.y=5+35+60+175-5+3+150;
					this.add(cost_b_unit_var);
				
				}

			}
			else if(cost_type_b[card_no]==3)
			{
				if(cost_var_b_1[card_no] == 1)
				{
					cost_b_text = 'If you play or block this card, any agent on the board with the '+code_name[cost_var_b_2[card_no]]+' charactaristic will lose '+cost_var_b_3[card_no]+' information point(s)';				
				
					var cost_b_map_graphic_back = new map_container(scene,7,30,25);
					cost_b_map_graphic_back.x=120-5-15-1;
					cost_b_map_graphic_back.y=5+35+60+175-5+150;
					this.add(cost_b_map_graphic_back);

					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25+2;
					cost_b_graphic_number.y = 5+35+60+175-5+4+150;
					this.add(cost_b_graphic_number);

					var cost_b_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_per_text.x = 125-25+2+35;
					cost_b_per_text.y = 5+35+60+175-5+4+150;
					this.add(cost_b_per_text);

					var cost_b_char_var = new code_box_container(scene,cost_var_b_2[card_no]);
					cost_b_char_var.x=125-25+2+35+40;
					cost_b_char_var.y=5+35+60+175-5+150;
					this.add(cost_b_char_var);
				
				}	
				else if(cost_var_b_1[card_no] == 2)
				{
					cost_b_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_b_2[card_no]]+' map box will lose '+cost_var_b_3[card_no]+' information point(s)';				
				
					var cost_b_map_graphic_back = new map_container(scene,7,30,25);
					cost_b_map_graphic_back.x=120-5-15-1;
					cost_b_map_graphic_back.y=5+35+60+175-5+150;
					this.add(cost_b_map_graphic_back);

					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25+2;
					cost_b_graphic_number.y = 5+35+60+175-5+4+150;
					this.add(cost_b_graphic_number);

					var cost_b_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_per_text.x = 125-25+2+35;
					cost_b_per_text.y = 5+35+60+175-5+4+150;
					this.add(cost_b_per_text);

					var cost_b_char_var = new map_container(scene,cost_var_b_2[card_no],32,31);
					cost_b_char_var.x=125-25+2+35+40+3;
					cost_b_char_var.y=5+35+60+175-5-3+150;
					this.add(cost_b_char_var);
					
					var cost_b_unit_var = new map_container(scene,7,19,19);
					cost_b_unit_var.x=125-25+2+35+40+9;
					cost_b_unit_var.y=5+35+60+175-5+3+150;
					this.add(cost_b_unit_var);				
				
				}

			}
			else if(cost_type_b[card_no]==4)
			{
				if(cost_var_b_1[card_no] == 0)
				{
					cost_b_text = 'If you play or block this card, you will lose '+cost_var_b_2[card_no]+' operations point(s)';				
				
					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25;
					cost_b_graphic_number.y = 5+35+60+175-5+150;
					this.add(cost_b_graphic_number);

					//var cost_b_graphic_type = scene.add.text(15, 15, 'Diplomacy Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_b_graphic_type.x = 135;
					//cost_b_graphic_type.y = 5+35+60+175-5+150;
					//this.add(cost_b_graphic_type);
					
					var vp_graphic_b = scene.add.image(15, 15, card_graphics_array[5]);
					vp_graphic_b.scale = 1.0;
					vp_graphic_b.setOrigin(0,0);
					vp_graphic_b.x = 135;
					vp_graphic_b.y = 5+35+60+175-5+150+2+2;
					this.add(vp_graphic_b);


				
				}	
				else if(cost_var_b_1[card_no] == 1)
				{
					cost_b_text = 'If you play or block this card, you will lose '+cost_var_b_2[card_no]+' victory point(s)';;				
				
					var cost_b_graphic_number = scene.add.text(15, 15, '-'+cost_var_b_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_b_graphic_number.x = 125-25;
					cost_b_graphic_number.y = 5+35+60+175-5+1+150;
					this.add(cost_b_graphic_number);

					var vp_graphic_b = scene.add.image(15, 15, card_graphics_array[6]);
					vp_graphic_b.scale = 0.75;
					vp_graphic_b.setOrigin(0,0);
					vp_graphic_b.x = 135;
					vp_graphic_b.y = 5+35+60+175-5+150;
					this.add(vp_graphic_b);


					//var cost_b_graphic_type = scene.add.text(15, 15, 'Victory Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_b_graphic_type.x = 135;
					//cost_b_graphic_type.y = 5+35+60+175-5+150;
					//this.add(cost_b_graphic_type);
				
				
				}				
			}


			var cost_text_holder_b = this.scene.add.text(0, 5+35+60+200+150+5, cost_b_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_text_holder_b.setOrigin(0,0);
			cost_text_holder_b.x = (button_width - cost_text_holder_b.width)/2;
			this.add(cost_text_holder_b);		
	
			var cost_b_header = this.scene.add.text(0, 5+35+60+175+150, 'COST 2:', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_b_header.setOrigin(0,0);
			cost_b_header.x = 20;//(button_width - cost_b_header.width)/2;
			this.add(cost_b_header);		
		}
		*/


		/*
		if(cost_type_c[card_no]>0)
		{
			if(cost_type_c[card_no]==1)
			{
				cost_c_text = 'To play or block this card, you need to have an agent with info level '+cost_var_c_1[card_no]+' or higher in a '+map_box_names[cost_var_c_2[card_no]]+' map box';
		
				var cost_c_map_graphic_back = new map_container(scene,cost_var_c_2[card_no],80,80);
				cost_c_map_graphic_back.x=120-5-15;
				cost_c_map_graphic_back.y=5+35+60+175-5-5+300;
				cost_c_map_graphic_back.scale = 0.45;
				this.add(cost_c_map_graphic_back);


				var cost_c_graphic_back = new code_box_container(scene,-2);
				cost_c_graphic_back.x=120-15;
				cost_c_graphic_back.y=5+35+60+175-5+300;
				this.add(cost_c_graphic_back);

				
				var cost_c_graphic_number = scene.add.text(15, 15, cost_var_c_1[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_c_graphic_number.x = 125-15;
				cost_c_graphic_number.y = 5+35+60+175-5+1+300;
				this.add(cost_c_graphic_number);
		
			
			}
			else if(cost_type_c[card_no]==2)
			{
				if(cost_var_c_1[card_no] == 1)
				{
					cost_c_text = 'If you play or block this card, any agent on the board with the '+code_name[cost_var_c_2[card_no]]+' charactaristic will lose '+cost_var_c_3[card_no]+' stealth point(s)';				

					var cost_c_map_graphic_back = new map_container(scene,6,30,25);
					cost_c_map_graphic_back.x=120-5-15-1;
					cost_c_map_graphic_back.y=5+35+60+175-5+300;
					this.add(cost_c_map_graphic_back);

					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25+2;
					cost_c_graphic_number.y = 5+35+60+175-5+4+300;
					this.add(cost_c_graphic_number);

					var cost_c_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_per_text.x = 125-25+2+35;
					cost_c_per_text.y = 5+35+60+175-5+4+300;
					this.add(cost_c_per_text);

					var cost_c_char_var = new code_box_container(scene,cost_var_c_2[card_no]);
					cost_c_char_var.x=125-25+2+35+40;
					cost_c_char_var.y=5+35+60+175-5+300;
					this.add(cost_c_char_var);


				}	
				else if(cost_var_c_1[card_no] == 2)
				{
					cost_c_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_c_2[card_no]]+' map box will lose '+cost_var_c_3[card_no]+' stealth point(s)';				
				
					var cost_c_map_graphic_back = new map_container(scene,6,30,25);
					cost_c_map_graphic_back.x=120-5-15-1;
					cost_c_map_graphic_back.y=5+35+60+175-5+300;
					this.add(cost_c_map_graphic_back);

					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_3[card_no], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25+2;
					cost_c_graphic_number.y = 5+35+60+175-5+4+300;
					this.add(cost_c_graphic_number);

					var cost_c_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_per_text.x = 125-25+2+35;
					cost_c_per_text.y = 5+35+60+175-5+4+300;
					this.add(cost_c_per_text);

					var cost_c_char_var = new map_container(scene,cost_var_c_2[card_no],32,31);
					cost_c_char_var.x=125-25+2+35+40+3;
					cost_c_char_var.y=5+35+60+175-5-3+300;
					this.add(cost_c_char_var);
					
					var cost_c_unit_var = new map_container(scene,7,19,19);
					cost_c_unit_var.x=125-25+2+35+40+9;
					cost_c_unit_var.y=5+35+60+175-5+3+300;
					this.add(cost_c_unit_var);
				
				}

			}
			else if(cost_type_c[card_no]==3)
			{
				if(cost_var_c_1[card_no] == 1)
				{
					cost_c_text = 'If you play or block this card, any agent on the board with the '+code_name[cost_var_c_2[card_no]]+' charactaristic will lose '+cost_var_c_3[card_no]+' information point(s)';				

					var cost_c_map_graphic_back = new map_container(scene,7,30,25);
					cost_c_map_graphic_back.x=120-5-15-1;
					cost_c_map_graphic_back.y=5+35+60+175-5+300;
					this.add(cost_c_map_graphic_back);

					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25+2;
					cost_c_graphic_number.y = 5+35+60+175-5+4+300;
					this.add(cost_c_graphic_number);

					var cost_c_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_per_text.x = 125-25+2+35;
					cost_c_per_text.y = 5+35+60+175-5+4+300;
					this.add(cost_c_per_text);

					var cost_c_char_var = new code_box_container(scene,cost_var_c_2[card_no]);
					cost_c_char_var.x=125-25+2+35+40;
					cost_c_char_var.y=5+35+60+175-5+300;
					this.add(cost_c_char_var);


				}	
				else if(cost_var_c_1[card_no] == 2)
				{
					cost_c_text = 'If you play or block this card, any agent in a(n) '+map_box_names[cost_var_c_2[card_no]]+' map box will lose '+cost_var_c_3[card_no]+' information point(s)';				

					var cost_c_map_graphic_back = new map_container(scene,7,30,25);
					cost_c_map_graphic_back.x=120-5-15-1;
					cost_c_map_graphic_back.y=5+35+60+175-5+300;
					this.add(cost_c_map_graphic_back);

					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_3[card_no], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25+2;
					cost_c_graphic_number.y = 5+35+60+175-5+4+300;
					this.add(cost_c_graphic_number);

					var cost_c_per_text = scene.add.text(15, 15, 'PER', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_per_text.x = 125-25+2+35;
					cost_c_per_text.y = 5+35+60+175-5+4+300;
					this.add(cost_c_per_text);

					var cost_c_char_var = new map_container(scene,cost_var_c_2[card_no],32,31);
					cost_c_char_var.x=125-25+2+35+40+3;
					cost_c_char_var.y=5+35+60+175-5-3+300;
					this.add(cost_c_char_var);
					
					var cost_c_unit_var = new map_container(scene,7,19,19);
					cost_c_unit_var.x=125-25+2+35+40+9;
					cost_c_unit_var.y=5+35+60+175-5+3+300;
					this.add(cost_c_unit_var);				

				}

			}
			else if(cost_type_c[card_no]==4)
			{
				if(cost_var_c_1[card_no] == 0)
				{
					cost_c_text = 'If you play or block this card, you will lose '+cost_var_c_2[card_no]+' operations point(s)';				
				
					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25;
					cost_c_graphic_number.y = 5+35+60+175-5+300;
					this.add(cost_c_graphic_number);

					//var cost_c_graphic_type = scene.add.text(15, 15, 'Diplomacy Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_c_graphic_type.x = 135;
					//cost_c_graphic_type.y = 5+35+60+175-5+300;
					//this.add(cost_c_graphic_type);
				
					var vp_graphic_c = scene.add.image(15, 15, card_graphics_array[5]);
					vp_graphic_c.scale = 1.0;
					vp_graphic_c.setOrigin(0,0);
					vp_graphic_c.x = 135;
					vp_graphic_c.y = 5+35+60+175-5+300+2+2;
					this.add(vp_graphic_c);
				
				
				}	
				else if(cost_var_c_1[card_no] == 1)
				{
					cost_c_text = 'If you play or block this card, you will lose '+cost_var_c_2[card_no]+' victory point(s)';;				
				
					var cost_c_graphic_number = scene.add.text(15, 15, '-'+cost_var_c_2[card_no], {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
					cost_c_graphic_number.x = 125-25;
					cost_c_graphic_number.y = 5+35+60+175-5+1+300;
					this.add(cost_c_graphic_number);

					var vp_graphic_c = scene.add.image(15, 15, card_graphics_array[6]);
					vp_graphic_c.scale = 0.75;
					vp_graphic_c.setOrigin(0,0);
					vp_graphic_c.x = 135;
					vp_graphic_c.y = 5+35+60+175-5+300;
					this.add(vp_graphic_c);

					//var cost_c_graphic_type = scene.add.text(15, 15, 'Victory Point(s)', {fontSize: 'bold 12px', color: '#000000', wordWrap: { width: 100, useAdvancedWrap: true}});
					//cost_c_graphic_type.x = 135;
					//cost_c_graphic_type.y = 5+35+60+175-5+300;
					//this.add(cost_c_graphic_type);
				
				}				
			}


			var cost_text_holder_c = this.scene.add.text(0, 5+35+60+200+150+150+5, cost_c_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_text_holder_c.setOrigin(0,0);
			cost_text_holder_c.x = (button_width - cost_text_holder_c.width)/2;
			this.add(cost_text_holder_c);		
	
			var cost_c_header = this.scene.add.text(0, 5+35+60+175+150+150, 'COST 3:', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 270, useAdvancedWrap: true}});
			cost_c_header.setOrigin(0,0);
			cost_c_header.x = 20;//(button_width - cost_c_header.width)/2;
			this.add(cost_c_header);		
		}
		*/
	
	
	
	
		//if(button_no == 0){button_width = (137-10)/2;}
		//if(button_no == 1){button_width = (137-10)/2;}
		
		
		/*

		var play_button = this.scene.add.rectangle(5, 743, action_button_width, 25, 0xFFFFFF).setInteractive();
		play_button.setOrigin(0,0);
		this.add(play_button);
		
		var play_text = this.scene.add.text(0, 743+5, button_1_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
		play_text.setOrigin(0,0);
		play_text.x = (action_button_width - play_text.width)/2;
		
		this.add(play_text);				
		
		
		play_button.on('pointerdown', () => {play_button.alpha = 0.3; this.clickMe(scene, 0, card_no);});
		play_button.on('pointerup', () => {play_button.alpha = 1.0; this.unclickMe(scene, 0, card_no);});

		var pass_button = this.scene.add.rectangle(5+135, 743, action_button_width, 25, 0xFFFFFF).setInteractive();
		pass_button.setOrigin(0,0);
		this.add(pass_button);
		
		var pass_text = this.scene.add.text(5+135, 743+5, 'PASS', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
		pass_text.setOrigin(0,0);
		pass_text.x = 5+135+(action_button_width - pass_text.width)/2;
		
		this.add(pass_text);				
		
		
		pass_button.on('pointerdown', () => {pass_button.alpha = 0.3; this.clickMe(scene, 1, card_no);});
		pass_button.on('pointerup', () => {pass_button.alpha = 1.0; this.unclickMe(scene, 1, card_no);});

		*/

		this.scene.add.existing(this);
		
		
		
    }

	clickMe(scene, button_no, card_no)
    {
    	
    }
	
	unclickMe(scene, button_no, card_no)
	{
		
		if(button_no == 0)
		{
		  console.log("Play: "+card_no);	
		}
		else if(button_no == 1)
		{
		  console.log("Pass: "+card_no);	
		}
		
	}
}	
