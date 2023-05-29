class menu_back_box extends Phaser.GameObjects.Container{
	
	constructor(scene, menu_number) 
	{
		super(scene);
		this.scene = scene;

		var button_width = 137;
		var total_score_game_end = 0;
		var game_vp_message_text = '';
		var location_vp_message_text = '';
		var total_score_message_text = '';
		var box_control_vps = 0;
		
		var intro_text = 'This is a game about the Soviet foreign intelligence service’s effort to place spies at the highest levels of the British intelligence establishment.  You win this game by steadily increasing the level of information that your agents can access and share with you.  You must be careful, however.  The arrest of a highly placed spy could ruin your entire operation.  To be successful, you must keep your agents hidden within the corridors of power, quietly harvesting British secrets.  Good luck!'

		var temp_calculation_explanation = 'In this game, temperature change is a function of the amount of carbon in the atmosphere and the amount of sunlight reaching the surface of the earth.  Temperature change is measured in degrees Celsius from the global average temperature baseline at the beginning of the game.  The amount of temperature change impacts other elements in the game, such as the severity of weather events.  The more carbon dioxide in the atmosphere, the higher the change in temperature.  You can slow the rate of temperature change by increasing your geoengineering points.  These points represent efforts to block or reflect sunlight before these photons can increase the temperature of the atmosphere.  This is the formula: degrees of temperature change = carbon  / ('+carbon_denominator_constant+' + '+geoforming_multiplier+' * geoengineering points).';	
		var temp_change_calculation = '';

		var victory_level_text_colors = '#000000';
		var non_victory_level_text_colors = '#000000';
		var current_victory_level_text_colors = '#0000CC'
		
		const menu_box = this.scene.add.rectangle(0, 0, 850, 850, 0xFFCC99);
		menu_box.setOrigin(0,0);	
		menu_box.x = 15;
		menu_box.y = 15;
		this.add(menu_box);        		
			
		if(menu_number==0) //key menu
		{
		
			var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button.setOrigin(0,0);
			top_button.x = 850 - 137 - 5;
			top_button.y = 850 - 20;
			this.add(top_button);

			var key_image = this.scene.add.image(0, 0, card_graphics_array[18]);
			key_image.setOrigin(0,0);
			key_image.scale = 0.70;
			key_image.x = 40;
			key_image.y = 30;
			
			this.add(key_image);	

			
			var title_text = this.scene.add.text(0, 5, 'EXIT', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text.setOrigin(0,0);
			title_text.x = 850 - 137 - 5 + (button_width - title_text.width)/2;
			title_text.y = 850 - 20+5;
			this.add(title_text);				

			
			var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer.setOrigin(0,0);
			backer.x = 850 - 137 - 5;
			backer.y = 850 - 20;
			this.add(backer);	

			backer.on('pointerdown', () => {top_button.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer.on('pointerup', () => {top_button.alpha = 1.0; this.unclickMeLeft(scene, menu_number);});			
		
		}
		else if(menu_number==1) //open menu
		{
		
			var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button.setOrigin(0,0);
			top_button.x = 850 - 137 - 5;
			top_button.y = 850 - 20;
			this.add(top_button);
			
			var title_text = this.scene.add.text(0, 5, 'Play', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text.setOrigin(0,0);
			title_text.x = 850 - 137 - 5 + (button_width - title_text.width)/2;
			title_text.y = 850 - 20+5;
			this.add(title_text);				

			var game_title_text = this.scene.add.text(0, 5, 'KGB', { fontSize: 'bold 124px', color: '#000000', wordWrap: { width: 500, useAdvancedWrap: true}});
			game_title_text.setOrigin(0,0);
			game_title_text.x = 850 - 325;
			game_title_text.y = 50;
			this.add(game_title_text);				

			var game_description = this.scene.add.text(0, 5, intro_text, { fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 310, useAdvancedWrap: true}});
			game_description.setOrigin(0,0);
			game_description.x = 850 - 325;
			game_description.y = 200;
			this.add(game_description);				

			var KGB_icon = this.scene.add.image(0, 0, card_graphics_array[17]);
			KGB_icon.setOrigin(0,0);
			KGB_icon.scale = 0.50;
			KGB_icon.x = 40;
			KGB_icon.y = 45;
			
			this.add(KGB_icon);	

			var copyright_text = this.scene.add.text(0, 5, 'Copyright 2022: Africa Cross Games LCC v9.00', { fontSize: '18px', color: '#000000', wordWrap: { width: 500, useAdvancedWrap: true}});
			copyright_text.setOrigin(0,0);
			copyright_text.x = 40;
			copyright_text.y = 835;
			this.add(copyright_text);				

			
			var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer.setOrigin(0,0);
			backer.x = 850 - 137 - 5;
			backer.y = 850 - 20;
			this.add(backer);	

			backer.on('pointerdown', () => {top_button.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer.on('pointerup', () => {top_button.alpha = 1.0; this.unclickMeLeft(scene, menu_number);});			
		
		}
		else if(menu_number==2) //quit - resume screen
		{
		
			var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button.setOrigin(0,0);
			top_button.x = 850 - 137 - 5;
			top_button.y = 850 - 20;
			this.add(top_button);
			
			var title_text = this.scene.add.text(0, 5, 'RESUME', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text.setOrigin(0,0);
			title_text.x = 850 - 137 - 5 + (button_width - title_text.width)/2;
			title_text.y = 850 - 20+5;
			this.add(title_text);				

			var KGB_icon = this.scene.add.image(0, 0, card_graphics_array[17]);
			KGB_icon.setOrigin(0,0);
			KGB_icon.scale = 0.50;
			KGB_icon.x = 40;
			KGB_icon.y = 45;
			
			this.add(KGB_icon);	

			var game_title_text = this.scene.add.text(0, 5, 'KGB', { fontSize: 'bold 124px', color: '#000000', wordWrap: { width: 500, useAdvancedWrap: true}});
			game_title_text.setOrigin(0,0);
			game_title_text.x = 850 - 325;
			game_title_text.y = 50;
			this.add(game_title_text);				


			var game_description = this.scene.add.text(0, 5, intro_text, { fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 310, useAdvancedWrap: true}});
			game_description.setOrigin(0,0);
			game_description.x = 850 - 325;
			game_description.y = 200;
			this.add(game_description);				

			
			var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer.setOrigin(0,0);
			backer.x = 850 - 137 - 5;
			backer.y = 850 - 20;
			this.add(backer);	

			backer.on('pointerdown', () => {top_button.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer.on('pointerup', () => {top_button.alpha = 1.0; this.unclickMeLeft(scene, menu_number);});			
		
			var top_button_right = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button_right.setOrigin(0,0);
			top_button_right.x = 30;
			top_button_right.y = 850 - 20;
			this.add(top_button_right);
			
			var title_text_right = this.scene.add.text(0, 5, 'QUIT', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text_right.setOrigin(0,0);
			title_text_right.x = 30  + (button_width - title_text_right.width)/2;
			title_text_right.y = 850 - 20+5;
			this.add(title_text_right);				
			
			var backer_right = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer_right.setOrigin(0,0);
			backer_right.x = 30;
			backer_right.y = 850 - 20;
			this.add(backer_right);	

			backer_right.on('pointerdown', () => {top_button_right.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer_right.on('pointerup', () => {top_button_right.alpha = 1.0; this.unclickMeRight(scene, menu_number);});			
		
		
		}
		else if(menu_number==3) //Victory Screen
		{
			box_control_vps=0;
			
			for(var b=0; b<56; b++)
			{	
				if(vp_map_boxes[b]==1 && agent_present[b]==1)// && red_police_array[b] == 0 //&& yellow_police_array[b] == 0)
				{
					box_control_vps=box_control_vps+vp_map_box_score_array[b];	
				
				}			
			}
			
			
			var game_over_message = this.scene.add.text(0, 5, 'GAME OVER', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			game_over_message.setOrigin(0,0);
			game_over_message.x = (850 - game_over_message.width)/2;
			game_over_message.y = 35;
			this.add(game_over_message);				

			game_vp_message_text = military_points+" Card VPs + "+box_control_vps+" Box VPs = "+(military_points+box_control_vps)+" Total VPs";	
		
			var vp_total_message = this.scene.add.text(0, 5, game_vp_message_text, { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
			vp_total_message.setOrigin(0,0);
			vp_total_message.x = 10 + (850 - vp_total_message.width)/2;
			vp_total_message.y = 100;
			vp_total_message.alpha = 1.0;
			this.add(vp_total_message);				
		
		
			var loss_message = this.scene.add.text(0, 5, '<1 Victory Points: LOSS', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			loss_message.setOrigin(0,0);
			loss_message.x = (850 - loss_message.width)/2;
			loss_message.y = 200;
			loss_message.alpha = 0.5;
			this.add(loss_message);				
			
			var draw_message = this.scene.add.text(0, 5, '1-5 Victory Points: DRAW', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			draw_message.setOrigin(0,0);
			draw_message.x = (850 - draw_message.width)/2;
			draw_message.y = 250;
			draw_message.alpha = 0.5;
			this.add(draw_message);				

			var marginal_message = this.scene.add.text(0, 5, '6-10 Victory Points: MARGINAL VICTORY', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			marginal_message.setOrigin(0,0);
			marginal_message.x = (850 - marginal_message.width)/2;
			marginal_message.y = 300;
			marginal_message.alpha = 0.5;
			this.add(marginal_message);				

			var major_message = this.scene.add.text(0, 5, '11-20 Victory Points: MAJOR VICTORY', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			major_message.setOrigin(0,0);
			major_message.x = (850 - major_message.width)/2;
			major_message.y = 350;
			major_message.alpha = 0.5;
			this.add(major_message);				

			var total_message = this.scene.add.text(0, 5, '21+ Victory Points: TOTAL VICTORY', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			total_message.setOrigin(0,0);
			total_message.x = (850 - total_message.width)/2;
			total_message.y = 400;
			total_message.alpha = 0.5;
			this.add(total_message);				
			
			total_score_game_end = military_points+box_control_vps;
			
			if(total_score_game_end<1){loss_message.alpha = 1.0;}
			else if(total_score_game_end>0 && total_score_game_end<6){draw_message.alpha = 1.0;}
			else if(total_score_game_end>5 && total_score_game_end<11){marginal_message.alpha = 1.0;}
			else if(total_score_game_end>10 && total_score_game_end<21){major_message.alpha = 1.0;}
			else if(total_score_game_end>20){total_message.alpha = 1.0;}
			
			var top_button_right = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button_right.setOrigin(0,0);
			top_button_right.x = 30;
			top_button_right.y = 850 - 20;
			this.add(top_button_right);
			
			var title_text_right = this.scene.add.text(0, 5, 'OK', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text_right.setOrigin(0,0);
			title_text_right.x = 30  + (button_width - title_text_right.width)/2;
			title_text_right.y = 850 - 20+5;
			this.add(title_text_right);				

			var victory_icon = this.scene.add.image(0, 0, card_graphics_array[16]);
			victory_icon.setOrigin(0,0);
			victory_icon.x = 30+(850 - victory_icon.width*0.4)/2;
			victory_icon.y = 460;
			victory_icon.scale = 0.4;
			this.add(victory_icon);	
			
			var backer_right = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer_right.setOrigin(0,0);
			backer_right.x = 30;
			backer_right.y = 850 - 20;
			this.add(backer_right);	

			backer_right.on('pointerdown', () => {top_button_right.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer_right.on('pointerup', () => {top_button_right.alpha = 1.0; this.unclickMeRight(scene, menu_number);});			
		
		}
		else if(menu_number==4) //Temperature Screen
		{

			var temperature_message = this.scene.add.text(0, 5, 'TEMPERATURE CHANGE CALCULATION', { fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 800, useAdvancedWrap: true}});
			temperature_message.setOrigin(0,0);
			temperature_message.x = (850 - temperature_message.width)/2;
			temperature_message.y = 35;
			this.add(temperature_message);				

			var game_description = this.scene.add.text(0, 5, temp_calculation_explanation, { fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 775, useAdvancedWrap: true}});
			game_description.setOrigin(0,0);
			game_description.x = 50;
			game_description.y = 100;
			this.add(game_description);				

			
			var top_button_right = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
			top_button_right.setOrigin(0,0);
			top_button_right.x = 30;
			top_button_right.y = 850 - 20;
			this.add(top_button_right);
			
			var title_text_right = this.scene.add.text(0, 5, 'OK', { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text_right.setOrigin(0,0);
			title_text_right.x = 30  + (button_width - title_text_right.width)/2;
			title_text_right.y = 850 - 20+5;
			this.add(title_text_right);				
					
			var backer_right = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
			backer_right.setOrigin(0,0);
			backer_right.x = 30;
			backer_right.y = 850 - 20;
			this.add(backer_right);	

			var co2_icon = this.scene.add.image(50, 400, card_graphics_array[24]);
			co2_icon.scale = 1.50;
			co2_icon.setOrigin(0,0);
			this.add(co2_icon);	

			var co2_value_text = this.scene.add.text(130, 407, 'Hello Phaser!', {fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
			co2_value_text.text = military_points+carbon_text;
			co2_value_text.setOrigin(0,0);
			this.add(co2_value_text);	
			
			var geoengineering_icon = this.scene.add.image(380, 395, card_graphics_array[25]);
			geoengineering_icon.scale = 1.50;
			geoengineering_icon.setOrigin(0,0);
			this.add(geoengineering_icon);	

			var geoengineering_text = this.scene.add.text(460, 407, 'Hello Phaser!', {fontSize: 'bold 36px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
			geoengineering_text.text = geoforming_points+geoforming_text;
			geoengineering_text.setOrigin(0,0);
			this.add(geoengineering_text);

			temp_change_calculation = temp_change_value.toFixed(1)+' degrees temp. change = '+military_points+' / ('+carbon_denominator_constant+' + '+geoforming_multiplier+' * '+geoforming_points+')';

			var temp_change_formula_text = this.scene.add.text(0, 5, temp_change_calculation, { fontSize: 'bold 24px', color: '#0000CC', wordWrap: { width: 775, useAdvancedWrap: true}});
			temp_change_formula_text.setOrigin(0,0);
			temp_change_formula_text.x = (850 - temp_change_formula_text.width)/2;
			temp_change_formula_text.y = 475+5;
			this.add(temp_change_formula_text);				

			var victory_level_text = this.scene.add.text(50, 530+15, 'TEMPERATURE CHANGE', {fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 400, useAdvancedWrap: true}});
			victory_level_text.setOrigin(0,0);
			this.add(victory_level_text);
		
			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value < total_victory_level.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
		
			var total_victory_text = this.scene.add.text(50, 580, 'Less Than '+total_victory_level.toFixed(1), {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			total_victory_text.setOrigin(0,0);
			this.add(total_victory_text);
			
			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= major_victory_lower.toFixed(1) && temp_change_value <= major_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
						
			var major_victory_text = this.scene.add.text(50, 580+30, 'Between '+major_victory_lower.toFixed(1)+' and '+major_victory_upper.toFixed(1), {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			major_victory_text.setOrigin(0,0);
			this.add(major_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= minor_victory_lower.toFixed(1) && temp_change_value <= minor_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
			
			var minor_victory_text = this.scene.add.text(50, 580+30*2, 'Between '+minor_victory_lower.toFixed(1)+' and '+minor_victory_upper.toFixed(1), {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			minor_victory_text.setOrigin(0,0);
			this.add(minor_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= draw_lower.toFixed(1) && temp_change_value <= draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 

			var draw_victory_text = this.scene.add.text(50, 580+30*3, 'Between '+draw_lower.toFixed(1)+' and '+draw_upper.toFixed(1), {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			draw_victory_text.setOrigin(0,0);
			this.add(draw_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value > draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
		
			var defeat_text = this.scene.add.text(50, 580+30*4, 'Greater Than '+draw_upper.toFixed(1), {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			defeat_text.setOrigin(0,0);
			this.add(defeat_text);

			var victory_level_text = this.scene.add.text(50+250, 530+15, 'VICTORY LEVEL', {fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 400, useAdvancedWrap: true}});
			victory_level_text.setOrigin(0,0);
			this.add(victory_level_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value < total_victory_level.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
		
			var total_victory_level_text = this.scene.add.text(50+250, 580, 'Total', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			total_victory_level_text.setOrigin(0,0);
			this.add(total_victory_level_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= major_victory_lower.toFixed(1) && temp_change_value <= major_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 

			var major_victory_level_text = this.scene.add.text(50+250, 580+30, 'Major', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			major_victory_level_text.setOrigin(0,0);
			this.add(major_victory_level_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= minor_victory_lower.toFixed(1) && temp_change_value <= minor_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
			
			var minor_victory_text = this.scene.add.text(50+250, 580+30*2, 'Minor', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			minor_victory_text.setOrigin(0,0);
			this.add(minor_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= draw_lower.toFixed(1) && temp_change_value <= draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 

			var draw_victory_text = this.scene.add.text(50+250, 580+30*3, 'Draw', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			draw_victory_text.setOrigin(0,0);
			this.add(draw_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value > draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
		
			var defeat_text = this.scene.add.text(50+250, 580+30*4, 'Defeat', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			defeat_text.setOrigin(0,0);
			this.add(defeat_text);


			var victory_level_text = this.scene.add.text(50+450, 530+15, 'WEATHER EVENT CARDS', {fontSize: 'bold 20px', color: '#000000', wordWrap: { width: 400, useAdvancedWrap: true}});
			victory_level_text.setOrigin(0,0);
			this.add(victory_level_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value < total_victory_level.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
			
			var weather_0_text = this.scene.add.text(50+450, 580, total_victory_weather_events+' Active Cards', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			weather_0_text.setOrigin(0,0);
			this.add(weather_0_text);
			
			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= major_victory_lower.toFixed(1) && temp_change_value <= major_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
						
			var major_victory_text = this.scene.add.text(50+450, 580+30, major_victory_weather_events+' Active Card' 
			, {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			major_victory_text.setOrigin(0,0);
			this.add(major_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= minor_victory_lower.toFixed(1) && temp_change_value <= minor_victory_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
			
			var minor_victory_text = this.scene.add.text(50+450, 580+30*2, minor_victory_weather_events+' Active Cards', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			minor_victory_text.setOrigin(0,0);
			this.add(minor_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value >= draw_lower.toFixed(1) && temp_change_value <= draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 

			var draw_victory_text = this.scene.add.text(50+450, 580+30*3, draw_victory_weather_events+' Active Cards', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			draw_victory_text.setOrigin(0,0);
			this.add(draw_victory_text);

			victory_level_text_colors = non_victory_level_text_colors;
			if(temp_change_value > draw_upper.toFixed(1)){victory_level_text_colors = current_victory_level_text_colors;} 
		
			var defeat_text = this.scene.add.text(50+450, 580+30*4, loss_victory_weather_events+' Active Cards', {fontSize: 'bold 18px', color: victory_level_text_colors, wordWrap: { width: 400, useAdvancedWrap: true}});
			defeat_text.setOrigin(0,0);
			this.add(defeat_text);


			backer_right.on('pointerdown', () => {top_button_right.alpha = 0.3; this.clickMe(scene, menu_number);});
			backer_right.on('pointerup', () => {top_button_right.alpha = 1.0; this.unclickMeRight(scene, menu_number);});			
		
		}



		this.depth = 96;
		this.scene.add.existing(this);
	}
	
	clickMe(scene, menu_number)
    {
    	
		
	}
	
	unclickMeLeft(scene, menu_number)
    {
    	if(menu_number == 0 || menu_number == 1 || menu_number == 2 || menu_number == 3)
		{
			//console.log('step 1');
			
			this.destroy();

			//console.log('step 2');

			if(menu_number == 1)
			{
			
				//console.log('step 3');	
				
				diplomacy_points = diplomancy_points_starting;
				military_points = 0;
				geoforming_points = 0;	
				
				//console.log('step 4');
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;
				geoforming_point_text.text = geoforming_points+geoforming_text;
				
				//console.log('step 5');
				
				turn = 0;
				
				
				//police_graphic_update(0);
				
				
				//console.log('step 6');
				//new_red_police_map_number(red_police_choice);
				//console.log('step 7');
				//new_yellow_block_category_number(yellow_police_choice);
				//console.log('step 8');
				
				red_police_choice=-1;
				yellow_police_choice=-1;
				
				
				
				
				int_permanent_actions(scene);
				
				//console.log('step 9');
				
				//new_deck();
				//new_card(-1, scene);
				//agent_update();
				
				//console.log("play b");
				
				phase = 0;
				
				if(demo_completed == 0)
				{
					//console.log("play_no_demo");
					
					//console.log('step 10');
					
					step=1;
					new_deck();
					//console.log('step 11');
					
					new_card(-1, scene);
					//console.log('step 12');
					
					demo_update(scene, step, 0, 0);
					//console.log('step 13');
					
					
	
				}
				else
				{
					//console.log("play_demo_done");
					
					//console.log('step 14');
					
					step=0; 
					
					new_deck();
					//console.log('step 15');
					new_card(-1, scene);
					//console.log('step 16');
					phase = 0;
				}
				
				
				//if(phase == 2 || phase == 3)
				//{
				//	game_saved = 0;	
				//	save_game();
				//}
				
			}

		}
		else if(menu_number == 3)
		{
			this.destroy();
			menu_back_box_holder = new menu_back_box(scene, 1);
			game_saved = 0;
			save_game();
		}
		
	}

	unclickMeRight(scene, menu_number)
    {
    	if(menu_number == 2 || menu_number == 3)
		{
		
			this.destroy();
			menu_back_box_holder = new menu_back_box(scene, 1);
			if(menu_number == 3){turn = 0;}
			
			game_saved = 0;
			save_game();
		}
		else if(menu_number == 4)
		{
			this.destroy();
		}
		
	}
	
}	