class button_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, card_text, button_no, location_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		var button_width = 137;//(137-10)/2;//137;
		
		
		
		if(button_no == 0){button_width = 137;}
		else if(button_no == 1){button_width = 137;}
		else if(button_no == 2){button_width = 130;}
		else if(button_no == 3){button_width = 130;}
        else if(button_no == 4){button_width = 130;}
		else if(button_no > 10 && button_no < 17){button_width = 30;}
		

		var top_button = this.scene.add.rectangle(0, 0, button_width, 25, 0xFFFFFF);
		top_button.setOrigin(0,0);
		this.add(top_button);
		
		var title_text = this.scene.add.text(0, 5, card_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 140, useAdvancedWrap: true}});
		title_text.setOrigin(0,0);
		title_text.x = (button_width - title_text.width)/2;
		
		this.add(title_text);				
		
		var backer = this.scene.add.image(0, 0, card_graphics_array[0]).setInteractive();
		backer.setOrigin(0,0);
		this.add(backer);	

		
		backer.on('pointerdown', () => {this.alpha = 0.3; this.clickMe(scene, button_no, location_no);});
		backer.on('pointerup', () => {this.alpha = 1.0; this.unclickMe(scene, button_no, location_no);});

		this.scene.add.existing(this);
		
    }

	clickMe(scene, b_no)
    {
    	
    }
	
	unclickMe(scene, b_no, loc_no)
	{

		var card_choice_1 = -1;
		var card_choice_2 = -1;
		var card_choice_3 = -1;
		
		var max_try_count = 20000;
		var try_count = -1;
		var found_card = -1;
		var deck_position = -1;
		var random_choice = -1;
		
		
		if(b_no == 0)
		{
		  //console.log("Menu");	
			
			if(phase == 0)
			{
				menu_back_box_holder = new menu_back_box(scene, 2);
			}
		}
		else if(b_no == 1)
		{
		  //console.log("Key");	

			if(phase == 0)
			{
				menu_back_box_holder = new menu_back_box(scene, 0);
			}
		  //menu_back_box_holder.depth = 95;


		}
		else if(b_no == 2)
		{
				
			if(phase == 0)
			{
				play_card(action_card_choice, scene);
				//new_card();	
			}
		}
		else if(b_no == 3)
		{
		
			if(step == 4){phase = 0;}	
			else if(step == 13){phase = 0;}

		
			if(phase == 0)
			{
				
				
				if(auto_card[action_card_choice]==1)
				{
					
					
					demo_update(scene, step, 3, 0);
					play_card(action_card_choice, scene);
					new_card(-1, scene);
					
				}
				else if(card_type[action_card_choice]==2 || card_type[action_card_choice]==3)
				{
					play_card(action_card_choice, scene);
				}
				else
				{
					new_card(-1, scene);
				}
			}
		}
		else if(b_no == 4)
		{

			
			
			if(phase == 0)
			{
				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}

				//console.log("Block");
				card_cost_effect(action_card_choice);
				new_card(-1, scene);
			}
		}
		else if(b_no == 5)
		{
			//console.log("Increase Stealth");			
			
			if(step == 6){phase = 0;}	

			
			if(phase == 0)
			{	
				dim_map(-1);
				agent_update();

				if(auto_card[action_card_choice]==1)
				{
					//demo_update(scene, step, 5, 0);
					play_card(action_card_choice, scene);
				}
				
				phase = 3;
				demo_update(scene, step, 5, 0);
				
				for(var p=0; p<56; p++)
				{
					//if(agent_present[p] == 1 && info_stealth[p]<9)
					if(agent_present[p] == 1 && info_value[p]<9 && p % 7 != 0)
					{
						red_map_border_array[p].visible = true;
						bright_map(p);						
					}
				}

				if(permanent_cost_meta_type_1[0] == 1 && permanent_cost_used_1[0] == 1)
				{
					if(permanent_cost_type_1[0]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_1[0];
					}
					else if(permanent_cost_type_1[0]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_1[0];
					}
				}
				
				if(permanent_cost_meta_type_2[0] == 1 && permanent_cost_used_2[0] == 1)
				{
					if(permanent_cost_type_2[0]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_2[0];
					}
					else if(permanent_cost_type_2[0]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_2[0];
					}
				}
				
				if(permanent_cost_meta_type_3[0] == 1 && permanent_cost_used_3[0] == 1)
				{
					if(permanent_cost_type_3[0]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_3[0];
					}
					else if(permanent_cost_type_3[0]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_3[0];
					}
				}
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;

				
				instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick an agent with a red border and increase its support level.";			
			}
		}
		else if(b_no == 6)
		{
			//console.log("Increase Info Level");			

			if(step == 10){phase = 0;}	


			if(phase == 0)
			{	

			
				
				dim_map(-1);
				agent_update();


				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}
				
				phase = 4;
				
				for(var p=0; p<56; p++)
				{
					if(agent_present[p] == 1 && info_value[p]>0)
					{
						red_map_border_array[p].visible = true;
						bright_map(p);						
					}
				}

				demo_update(scene, step, 6, 0);

				if(permanent_cost_meta_type_1[1] == 1 && permanent_cost_used_1[1] == 1)
				{
					if(permanent_cost_type_1[1]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_1[1];
					}
					else if(permanent_cost_type_1[1]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_1[1];
					}
				}
				
				if(permanent_cost_meta_type_2[1] == 1 && permanent_cost_used_2[1] == 1)
				{
					if(permanent_cost_type_2[1]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_2[1];
					}
					else if(permanent_cost_type_2[1]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_2[1];
					}
				}
				
				if(permanent_cost_meta_type_3[1] == 1 && permanent_cost_used_3[1] == 1)
				{
					if(permanent_cost_type_3[1]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_3[1];
					}
					else if(permanent_cost_type_3[1]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_3[1];
					}
				}
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;

				
				instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick an agent with a red border and increase its tech level.";
			
			}	
		
		}
		else if(b_no == 7)
		{
			if(phase == 0)
			{
				
				
				//console.log("Add Card to Deck");			
				try_count=0;
				found_card=0;
				
				card_choice_1=-1;
				card_choice_2=-1;
				card_choice_3=-1;

				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}

				phase = 5;

				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * add_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(add_deck[deck_position] > -1)
					{
						card_choice_1 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * add_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(add_deck[deck_position] > -1 && card_choice_1 != deck_position)
					{
						card_choice_2 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * add_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(add_deck[deck_position] > -1 && card_choice_1 != deck_position && card_choice_2 != deck_position)
					{
						card_choice_3 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}
				
				
				if(permanent_cost_meta_type_1[2] == 1)
				{
					if(permanent_cost_type_1[2]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_1[2];
					}
					else if(permanent_cost_type_1[2]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_1[2];
					}
				}
				
				if(permanent_cost_meta_type_2[2] == 1)
				{
					if(permanent_cost_type_2[2]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_2[2];
					}
					else if(permanent_cost_type_2[2]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_2[2];
					}
				}
				
				if(permanent_cost_meta_type_3[2] == 1)
				{
					if(permanent_cost_type_3[2]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_3[2];
					}
					else if(permanent_cost_type_3[2]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_3[2];
					}
				}
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;

				var tester = new card_selection_box(scene, 0, card_choice_1, card_choice_2, card_choice_3, 1);
			}
		}
		else if(b_no == 8)
		{
			
			if(phase == 0)
			{
				try_count=0;
				found_card=0;
				
				card_choice_1=-1;
				card_choice_2=-1;
				card_choice_3=-1;

				

				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}
				
				phase = 6;
				
				
				try_count=0;
				found_card=0;
				
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(in_deck[deck_position] > -1 && played[in_deck[deck_position]]==0)
					{
						if(card_type[in_deck[deck_position]] != 3 && card_type[in_deck[deck_position]] != 7)
						{
							card_choice_1 = deck_position;
							found_card = 1;
						}
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(in_deck[deck_position] > -1 && card_choice_1 != deck_position && played[in_deck[deck_position]]==0)
					{
						if(card_type[in_deck[deck_position]] != 3 && card_type[in_deck[deck_position]] != 7)
						{
							card_choice_2 = deck_position;
							found_card = 1;
						}
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(in_deck[deck_position] > -1 && card_choice_1 != deck_position && card_choice_2 != deck_position && played[in_deck[deck_position]]==0)
					{
						if(card_type[in_deck[deck_position]] != 3 && card_type[in_deck[deck_position]] != 7)
						{
							card_choice_3 = deck_position;
							found_card = 1;
						}
					}
					
					try_count=try_count+1;
					
				}
				
				if(permanent_cost_meta_type_1[3] == 1)
				{
					if(permanent_cost_type_1[3]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_1[3];
					}
					else if(permanent_cost_type_1[3]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_1[3];
					}
				}
				
				if(permanent_cost_meta_type_2[3] == 1)
				{
					if(permanent_cost_type_2[3]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_2[3];
					}
					else if(permanent_cost_type_2[3]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_2[3];
					}
				}
				
				if(permanent_cost_meta_type_3[3] == 1)
				{
					if(permanent_cost_type_3[3]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_3[3];
					}
					else if(permanent_cost_type_3[3]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_3[3];
					}
				}
				
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;

				var tester = new card_selection_box(scene, 1, card_choice_1, card_choice_2, card_choice_3,1);
			}
							
			//console.log("Remove Card From Deck");			
		}
		else if(b_no == 9)
		{
			if(phase == 0)
			{
				//console.log("Pick Next Card");			
				
				//console.log("In Deck: "+in_deck.length);
				
				try_count=0;
				found_card=0;
				
				
				
				card_choice_1=-1;
				card_choice_2=-1;
				card_choice_3=-1;

				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}

				phase = 7;

				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(in_deck[deck_position] > -1 && played[in_deck[deck_position]]==0)
					{
						card_choice_1 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					if(in_deck[deck_position] > -1 && card_type[in_deck[card_choice_1]] != card_type[in_deck[deck_position]] && played[in_deck[deck_position]]==0)
					{
						card_choice_2 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}
				
				try_count=0;
				found_card=0;
				
				while(try_count<max_try_count && found_card == 0)
				{
					deck_position = Math.floor(Math.random() * in_deck.length);	
				
					//random_choice = in_deck[deck_position];
					//console.log("deck_position: "+deck_position+" choice_type: "+card_type[deck_position]+" type one: "+card_type[card_choice_1]+" type two: "+card_type[card_choice_2]);
					if(in_deck[deck_position] > -1 && card_type[in_deck[card_choice_1]] != card_type[in_deck[deck_position]] && card_type[in_deck[card_choice_2]] != card_type[in_deck[deck_position]] && played[in_deck[deck_position]]==0)
					{
						card_choice_3 = deck_position;
						found_card = 1;
					}
					
					try_count=try_count+1;
					
				}


				if(permanent_cost_meta_type_1[4] == 1)
				{
					if(permanent_cost_type_1[4]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_1[4];
					}
					else if(permanent_cost_type_1[4]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_1[4];
					}
				}
				
				if(permanent_cost_meta_type_2[4] == 1)
				{
					if(permanent_cost_type_2[4]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_2[4];
					}
					else if(permanent_cost_type_2[4]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_2[4];
					}
				}
				
				if(permanent_cost_meta_type_3[4] == 1)
				{
					if(permanent_cost_type_3[4]==0) //victory points
					{
						military_points=military_points-permanent_cost_value_3[4];
					}
					else if(permanent_cost_type_3[4]==1)
					{
						diplomacy_points=diplomacy_points-permanent_cost_value_3[4];
					}
				}
				
				
							
				diplomacy_point_text.text = diplomacy_points+agent_name_text;
				military_point_text.text = military_points+carbon_text;

				var tester = new card_selection_box(scene, 2, card_choice_1, card_choice_2, card_choice_3,1);
			}
		}
		else if(b_no == 10)
		{
			if(phase == 0)
			{
				dim_map(-1);
				agent_update();

				
				if(auto_card[action_card_choice]==1)
				{
					play_card(action_card_choice, scene);
				}

				phase = 10;
				
				
				for(var p=0; p<56; p++)
				{
					if(vp_map_boxes[p] == 0 && p%7 != 0)
					{
						red_map_border_array[p].visible = true;
						bright_map(p);		
					}
				}

				if(permanent_cost_meta_type_1[5] == 2 && permanent_cost_used_1[5] == 1)
				{military_points=military_points+permanent_cost_value_1[5];}
				
				if(permanent_cost_meta_type_2[5] == 2 && permanent_cost_used_2[5] == 1)
				{military_points=military_points+permanent_cost_value_2[5];}
				
				if(permanent_cost_meta_type_3[5] == 2 && permanent_cost_used_3[5] == 1)
				{military_points=military_points+permanent_cost_value_3[5];}
				
				military_point_text.text = military_points+carbon_text;

				
				

				//demo_update(scene, step, 6, 0);

				
				instruction_box.text = "Turn "+turn+"/"+max_turn+" - Pick a box with a red border and add a mitigation marker.";
				
				
				
			}
		}
		else if(b_no >= 11 && b_no <=16 && phase == 0)
		{
			info_element_box_holder = new info_element_box(scene,2,b_no);
		}
		
		
	}
}	
