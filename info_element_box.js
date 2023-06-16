class info_element_box extends Phaser.GameObjects.Container{
	
	
	constructor(scene, element_type, element_number) 
	{
		super(scene);
		this.scene = scene;
	
		//element_type
		// 0 = region
		// 1 = country
	
		
		var button_width = 137+137+5;
		var action_button_width = 130;//(137-10)/2;//137;
		var arrow_x_axis = 0;
		var arrow_y_axis = 0;
		var code_box_color_array = [];
		var political_control_text_element = '';
		var resource_left_name = '';
		var resource_right_name = '';
		var carbon_message = '';
		var carbon_mechanics = '';
		var left_arrow_lenght = -33;
		var left_arrow_BG_offset = 2;

		code_box_color_array[0] = 0xffCC00; //Law Enforcement
		code_box_color_array[1] = 0xff9999; //Politics
		code_box_color_array[2] = 0x99CCFF; //Defense
		code_box_color_array[3] = 0x0066FF; //Underworld
		code_box_color_array[4]	= 0x33CC66;	//Press
		code_box_color_array[5]	= 0xCC00CC; //Technology

		//console.log(resource_1[0]);
		//console.log(resource_1[1]);	
		//console.log(resource_1[2]);	


		if(element_type == 0 || element_type == 1)
		{
			arrow_y_axis = Math.floor(element_number/7,0)*95+100;	
		
			arrow_x_axis = (element_number % 7) * 75+25; 
			
		
		}
		else if(element_type == 2)
		{
			arrow_x_axis = 340;
			
			if(element_number == 11){arrow_y_axis = 400;}
			else if(element_number == 12){arrow_y_axis = 470;}
			else if(element_number == 13){arrow_y_axis = 535;}
			else if(element_number == 14){arrow_y_axis = 600;}
			else if(element_number == 15){arrow_y_axis = 665;}
			else if(element_number == 16){arrow_y_axis = 730;}	

			left_arrow_lenght = -33;
			
			if(element_number==11){left_arrow_lenght = -120; left_arrow_BG_offset =2;}
			else if(element_number==12){left_arrow_lenght = -105; left_arrow_BG_offset =3;}
			else if(element_number==13){left_arrow_lenght = -100; left_arrow_BG_offset =4;}
			else if(element_number==14){left_arrow_lenght = -45; left_arrow_BG_offset =2;}
			else if(element_number==15){left_arrow_lenght = -120; left_arrow_BG_offset =5;}
			else if(element_number==16){left_arrow_lenght = -72; left_arrow_BG_offset =3;}


			
		}

		
		const menu_box_red_outline = this.scene.add.rectangle(arrow_x_axis, 0, button_width, 880, 0xFF0000);
		menu_box_red_outline.setOrigin(0,0);	
		//menu_box.x = 15;
		//menu_box.y = 15;
		this.add(menu_box_red_outline); 
		
		
		const menu_box = this.scene.add.rectangle(arrow_x_axis+1, 1, button_width-2, 880-2, 0xFFCC99);
		menu_box.setOrigin(0,0);	
		//menu_box.x = 15;
		//menu_box.y = 15;
		this.add(menu_box); 
		
		if(element_type == 0)
		{
			var card_type_text = scene.add.text(15+arrow_x_axis, 15, 'Capability Box', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			card_type_text.setOrigin(0,0);
			this.add(card_type_text);
			
			var country_name_text = scene.add.text(15+arrow_x_axis, 15+30, 'Country: '+country_name_array[Math.floor(element_number/7,0)], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			country_name_text.setOrigin(0,0);
			this.add(country_name_text);
			
			//console.log(element_number % 7);
			
			var capability_type_text = scene.add.text(50+arrow_x_axis, 15+60, map_box_names[element_number%7-1], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			capability_type_text.setOrigin(0,0);
			this.add(capability_type_text);

			var capability_color_box = this.scene.add.rectangle(15+arrow_x_axis+5, 16+60, 15, 15, code_box_color_array[element_number%7-1]);
			capability_color_box.setOrigin(0,0);
			this.add(capability_color_box);

			if(code_1[element_number] > -1)
			{
				var charactaristic_left_text = scene.add.text(50+arrow_x_axis, 15+90, code_name[code_1[element_number]], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				charactaristic_left_text.setOrigin(0,0);
				this.add(charactaristic_left_text);

				var info_left_symbol = new code_box_container(scene,code_1[element_number]);
				//info_left_symbol.setOrigin(0,0);
				info_left_symbol.x = 15+arrow_x_axis;
				info_left_symbol.y = 15+90-3;
				this.add(info_left_symbol);

			}	
			
			if(code_2[element_number] > -1)
			{
				var charactaristic_right_text = scene.add.text(50+arrow_x_axis, 15+120, code_name[code_2[element_number]], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				charactaristic_right_text.setOrigin(0,0);
				this.add(charactaristic_right_text);
	
				var info_right_symbol = new code_box_container(scene,code_2[element_number]);
				//info_left_symbol.setOrigin(0,0);
				info_right_symbol.x = 15+arrow_x_axis;
				info_right_symbol.y = 15+120-3;
				this.add(info_right_symbol);
			
			}
						
			var tech_level_text = scene.add.text(50+arrow_x_axis+30, 15+180+3, 'Activists', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			tech_level_text.setOrigin(0,0);
			this.add(tech_level_text);
		
			var agent_graphic = this.scene.add.image(50+arrow_x_axis-8, 15+180-3, card_graphics_array[5]);
			agent_graphic.scale = 1;
			agent_graphic.setOrigin(0,0);
			this.add(agent_graphic)
			
			var tech_border_box = this.scene.add.rectangle(15+arrow_x_axis-3, 15+180-3, 29, 29, 0xFF0000);
			tech_border_box.setOrigin(0,0);
			this.add(tech_border_box);

			var tech_back_box = this.scene.add.rectangle(15+arrow_x_axis-1, 15+180-1, 25, 25, 0xEFE4B0);
			tech_back_box.setOrigin(0,0);
			this.add(tech_back_box);

			var tech_level_number = scene.add.text(21+arrow_x_axis, 15+180+4, info_value[element_number], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			tech_level_number.setOrigin(0,0);
			this.add(tech_level_number);
			
			//var support_level_text = scene.add.text(50+arrow_x_axis, 15+211+3, 'Support Level', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			//support_level_text.setOrigin(0,0);
			//this.add(support_level_text);
			
			//var support_border_box = this.scene.add.rectangle(15+arrow_x_axis-3, 15+211-3, 29, 29, 0xFF0000);
			//support_border_box.setOrigin(0,0);
			//this.add(support_border_box);
			
			//var support_back_box = this.scene.add.rectangle(15+arrow_x_axis-1, 15+211-1, 25, 25, 0x000000);
			//support_back_box.setOrigin(0,0);
			//this.add(support_back_box);
			
			//var support_level_number = scene.add.text(21+arrow_x_axis, 15+211+4, info_stealth[element_number], {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			//support_level_number.setOrigin(0,0);
			//this.add(support_level_number);

			if(red_police_array[element_number] == 0) //no weather problems
			{
				var climate_status_check = scene.add.text(15+arrow_x_axis, 15+275, 'Habitable Climate', {fontSize: 'bold 18px', color: '#006633', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				climate_status_check.setOrigin(0,0);
				this.add(climate_status_check);
				
				var climate_status_info = scene.add.text(15+arrow_x_axis, 15+275+25, 'This box does not have a storm marker.  That means that you can place Activists in this Capability box, and that the Activists in this box can be used for action requirements and to determine control of countries.', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				climate_status_info.setOrigin(0,0);
				this.add(climate_status_info);
				
				
			}
			else if(red_police_array[element_number] == 1) //weather problem
			{
				var climate_status_check = scene.add.text(50+arrow_x_axis, 15+275, 'Uninhabitable', {fontSize: 'bold 18px', color: '#FF0000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				climate_status_check.setOrigin(0,0);
				this.add(climate_status_check);
			
				var storm_icon = new big_police_container(scene,0);
				//storm_icon.setOrigin(0,0);
				storm_icon.scale = 0.35;
				storm_icon.x = 13+arrow_x_axis;
				storm_icon.y = 15+275-7;
				this.add(storm_icon);
			
				var climate_status_info = scene.add.text(15+arrow_x_axis, 15+275+35, 'This box has a storm marker.  That means that the region is uninhabitable due to high temperatures, storms or drought.  This means that the tech level of the box cannot be used to perform actions, and the support level of the box cannot be used to control a country.', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				climate_status_info.setOrigin(0,0);
				this.add(climate_status_info);
			
			}

			if(vp_map_boxes[element_number]==1)
			{

				//var mitigation_marker = scene.add.text(15+arrow_x_axis, 600, "VVVV", {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				//mitigation_marker.setOrigin(0,0);
				//this.add(mitigation_marker);
				
				var info_mit_graphic = this.scene.add.image(15+arrow_x_axis, 600-3, card_graphics_array[29]);
				info_mit_graphic.scale = 0.6;
				info_mit_graphic.setOrigin(0,0);
				this.add(info_mit_graphic);

				var mitigation_marker_text = scene.add.text(43+arrow_x_axis, 600, "Mitigation Marker", {fontSize: 'bold 18px', color: '#006633', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				mitigation_marker_text.setOrigin(0,0);
				this.add(mitigation_marker_text);

				var mitigation_status_info = scene.add.text(15+arrow_x_axis, 625, 'This box has a mitigation marker, which means that a storm marker cannot be placed on this box.  This box has sea walls or desalinization plants.', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				mitigation_status_info.setOrigin(0,0);
				this.add(mitigation_status_info);

				
			}
			else if(vp_map_boxes[element_number]==0)
			{
				var mitigation_marker = scene.add.text(15+arrow_x_axis, 600, "No Mitigation Marker", {fontSize: 'bold 18px', color: '#FF0000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				mitigation_marker.setOrigin(0,0);
				this.add(mitigation_marker);

				var mitigation_status_info = scene.add.text(15+arrow_x_axis, 625, 'This box has no mitigation marker, which means that a storm marker can be placed on this box.  This box has no protections from extreme weather.', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				mitigation_status_info.setOrigin(0,0);
				this.add(mitigation_status_info);

			
			}
		}
		else if(element_type == 1)
		{
			var card_type_text = scene.add.text(15+arrow_x_axis, 15, 'Country Box', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			card_type_text.setOrigin(0,0);
			this.add(card_type_text);
			
			var country_name_text = scene.add.text(15+arrow_x_axis, 15+30, 'Country: '+country_name_array[Math.floor(element_number/7,0)], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			country_name_text.setOrigin(0,0);
			this.add(country_name_text);

			political_control_check();
			
			if(political_control_check[Math.floor(element_number/7,0)]>0)
			{
				var control_message_text = scene.add.text(15+arrow_x_axis, 15+60, 'Control', {fontSize: 'bold 18px', color: '#006633', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				control_message_text.setOrigin(0,0);
				this.add(control_message_text);

				resource_left_name = resource_icon_modifier[resource_1[Math.floor(element_number/7,0)]]+' '+resource_icon_name[resource_1[Math.floor(element_number/7,0)]];
				resource_right_name = resource_icon_modifier[resource_2[Math.floor(element_number/7,0)]]+' '+resource_icon_name[resource_2[Math.floor(element_number/7,0)]];				

				political_control_text_element = 'You control this region becasue you have Activists in '+control_level[Math.floor(element_number/7,0)]+' boxes, and you need Activists in '+control_threshold[Math.floor(element_number/7,0)]+' boxes to control this country.  When you control a country, you can use its resources. This country has '+resource_left_name+' and '+resource_right_name+' resource';
				
				var control_status_text = scene.add.text(15+arrow_x_axis, 15+85, political_control_text_element, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				control_status_text.setOrigin(0,0);
				this.add(control_status_text);
			}
			else if(political_control_check[Math.floor(element_number/7,0)]==0)
			{
				var control_message_text = scene.add.text(15+arrow_x_axis, 15+60, 'No Control', {fontSize: 'bold 18px', color: '#FF0000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				control_message_text.setOrigin(0,0);
				this.add(control_message_text);
								
				resource_left_name = resource_icon_modifier[resource_1[Math.floor(element_number/7,0)]]+' '+resource_icon_name[resource_1[Math.floor(element_number/7,0)]];
				resource_right_name = resource_icon_modifier[resource_2[Math.floor(element_number/7,0)]]+' '+resource_icon_name[resource_2[Math.floor(element_number/7,0)]];				

				political_control_text_element = 'You do not control this region becasue you only have Activists in '+control_level[Math.floor(element_number/7,0)]+' boxes, and you need Activists in '+control_threshold[Math.floor(element_number/7,0)]+' boxes to control this country.  When you control a country, you can use its resources. This country has '+resource_left_name+' and '+resource_right_name+' resource';
			
				var control_status_text = scene.add.text(15+arrow_x_axis, 15+85, political_control_text_element, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				control_status_text.setOrigin(0,0);
				this.add(control_status_text);
				
			}
			
			if(carbon_level[Math.floor(element_number/7,0)]>0)
			{
				carbon_message = 'Carbon Emissions: +'+carbon_level[Math.floor(element_number/7,0)];
			
				var carbon_message_text = scene.add.text(15+arrow_x_axis, 15+400, carbon_message, {fontSize: 'bold 18px', color: '#FF0000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				carbon_message_text.setOrigin(0,0);
				this.add(carbon_message_text);
				
				carbon_mechanics = 'Each turn, this country adds '+carbon_level[Math.floor(element_number/7,0)]+' carbon dioxide points to the CO2 total'; 	

				var carbon_mechanics_text = scene.add.text(15+arrow_x_axis, 15+430, carbon_mechanics, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				carbon_mechanics_text.setOrigin(0,0);
				this.add(carbon_mechanics_text);
				
		
			}
			else
			{
				carbon_message = 'Carbon Emmisions: '+carbon_level[Math.floor(element_number/7,0)];

				var carbon_message_text = scene.add.text(15+arrow_x_axis, 15+400, carbon_message, {fontSize: 'bold 18px', color: '#006633', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				carbon_message_text.setOrigin(0,0);
				this.add(carbon_message_text);

				carbon_mechanics = 'Each turn, this country subtracts '+carbon_level[Math.floor(element_number/7,0)]*-1+' carbon dioxide points to the CO2 total'; 	

				var carbon_mechanics_text = scene.add.text(15+arrow_x_axis, 15+430, carbon_mechanics, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
				carbon_mechanics_text.setOrigin(0,0);
				this.add(carbon_mechanics_text);

			}

			var resource_title_text = scene.add.text(15+arrow_x_axis, 15+550, 'Resources', {fontSize: 'bold 18px', color: '#0000CC', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			resource_title_text.setOrigin(0,0);
			this.add(resource_title_text);
		
			var left_country_icon = new nation_resource_icon_container(scene, resource_1[Math.floor(element_number/7,0)]);
			left_country_icon.x = 15+20;
			left_country_icon.y = 590;
			this.add(left_country_icon);

			var left_country_title_text = scene.add.text(55+arrow_x_axis, 595, resource_icon_name[resource_1[Math.floor(element_number/7,0)]], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			left_country_title_text.setOrigin(0,0);
			this.add(left_country_title_text);


			var right_country_icon = new nation_resource_icon_container(scene, resource_2[Math.floor(element_number/7,0)]);
			right_country_icon.x = 15+20;
			right_country_icon.y = 590+35;
			this.add(right_country_icon);

			var right_country_title_text = scene.add.text(55+arrow_x_axis, 595+35, resource_icon_name[resource_2[Math.floor(element_number/7,0)]], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			right_country_title_text.setOrigin(0,0);
			this.add(right_country_title_text);

			
		}
		else if(element_type == 2)
		{
			var card_type_text = scene.add.text(15+arrow_x_axis, 15, 'Permanent Action', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			card_type_text.setOrigin(0,0);
			this.add(card_type_text);

			var action_name = scene.add.text(15+arrow_x_axis, 15+30, permanent_actions_long_name[element_number-11], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			action_name.setOrigin(0,0);
			this.add(action_name);

			var action_desc = scene.add.text(15+arrow_x_axis, 15+60, permanent_actions_description[element_number-11], {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			action_desc.setOrigin(0,0);
			this.add(action_desc);
			
			var resource_requirement = scene.add.text(15+arrow_x_axis, 15+240, 'Required Resources', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			resource_requirement.setOrigin(0,0);
			this.add(resource_requirement);
			
			var resource_1_icon = new perm_action_cost_icons(scene, permanent_cost_used_1[element_number-11], permanent_cost_meta_type_1[element_number-11], permanent_cost_type_1[element_number-11], permanent_cost_value_1[element_number-11]);
			resource_1_icon.x = 15+arrow_x_axis;
			resource_1_icon.y = 290;
			this.add(resource_1_icon);

			var resource_1_desc = scene.add.text(15+arrow_x_axis, 15, perm_action_element_desc_maker(permanent_cost_used_1[element_number-11], permanent_cost_meta_type_1[element_number-11], permanent_cost_type_1[element_number-11], permanent_cost_value_1[element_number-11]), {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			resource_1_desc.x = 15+arrow_x_axis;
			resource_1_desc.y = 340;
			this.add(resource_1_desc);

			var resource_2_icon = new perm_action_cost_icons(scene, permanent_cost_used_2[element_number-11], permanent_cost_meta_type_2[element_number-11], permanent_cost_type_2[element_number-11], permanent_cost_value_2[element_number-11]);
			resource_2_icon.x = 15+arrow_x_axis;
			resource_2_icon.y = 290+170;
			this.add(resource_2_icon);
			
			var resource_2_desc = scene.add.text(15+arrow_x_axis, 15, perm_action_element_desc_maker(permanent_cost_used_2[element_number-11], permanent_cost_meta_type_2[element_number-11], permanent_cost_type_2[element_number-11], permanent_cost_value_2[element_number-11]), {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			resource_2_desc.x = 15+arrow_x_axis;
			resource_2_desc.y = 340+170;
			this.add(resource_2_desc);

			var resource_3_icon = new perm_action_cost_icons(scene, permanent_cost_used_3[element_number-11], permanent_cost_meta_type_3[element_number-11], permanent_cost_type_3[element_number-11], permanent_cost_value_3[element_number-11]);
			resource_3_icon.x = 15+arrow_x_axis;
			resource_3_icon.y = 290+340;
			this.add(resource_3_icon);

			var resource_3_desc = scene.add.text(15+arrow_x_axis, 15, perm_action_element_desc_maker(permanent_cost_used_3[element_number-11], permanent_cost_meta_type_3[element_number-11], permanent_cost_type_3[element_number-11], permanent_cost_value_3[element_number-11]), {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
			resource_3_desc.x = 15+arrow_x_axis;
			resource_3_desc.y = 340+340;
			this.add(resource_3_desc);
			
		}

		if(element_type == 0 || element_type == 1) 	
		{	
			
			var r1 = this.scene.add.triangle(arrow_x_axis+button_width, arrow_y_axis, 0, 0, 0, 66, 33, 33, 0xFF0000);
			r1.setOrigin(0,0);
			this.add(r1);

			var v1 = this.scene.add.triangle(arrow_x_axis+button_width-2, arrow_y_axis, 0, 0, 0, 66, 33, 33, 0xFFCC99);
			v1.setOrigin(0,0);
			this.add(v1)
	

		}
		else if(element_type == 2)
		{
				
				
			
			//var r1 = this.scene.add.triangle(arrow_x_axis, arrow_y_axis, 0, 0, 0, 66, left_arrow_lenght, 33, 0xFFCC99);
			var r1 = this.scene.add.triangle(arrow_x_axis, arrow_y_axis, 0, 0, 0, 66, left_arrow_lenght, 33, 0xFF0000);
			r1.setOrigin(0,0);
			this.add(r1);

			var v1 = this.scene.add.triangle(arrow_x_axis+left_arrow_BG_offset, arrow_y_axis, 0, 0, 0, 66, left_arrow_lenght, 33, 0xFFCC99);
			v1.setOrigin(0,0);
			this.add(v1);

			
		}
		
		var temp_value_text = scene.add.text(15+arrow_x_axis, 830, 'Click anywhere to make this box disappear', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: button_width-30, useAdvancedWrap: true}});
		temp_value_text.setOrigin(0,0);
		//temp_value_text.x = (135*2+10-temp_value_text.width)/2;
		//temp_value_text.y = 5;
		this.add(temp_value_text);

		this.depth = 95;

		this.scene.add.existing(this);
	
	}
	
}