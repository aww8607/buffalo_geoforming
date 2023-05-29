function perm_action_playability_check()
{
	var cost_1_check = 0;
	var cost_2_check = 0;
	var cost_3_check = 0;	
	var deck_card_count = 0;
	
	
	menu_buttons[5].visible = false;
	menu_buttons[6].visible = false;
	menu_buttons[7].visible = false;
	menu_buttons[8].visible = false;
	menu_buttons[9].visible = false;
	menu_buttons[10].visible = false;
	
	political_control_check();
	
	for(var k=0; k<permanent_cost_used_1.length; k++)
	{
			
		
		perm_cost_graphic_1[k].alpha = 0.5;
		perm_cost_graphic_2[k].alpha = 0.5;
		perm_cost_graphic_3[k].alpha = 0.5;	
			
		
		cost_1_check = 0;
		cost_2_check = 0;
		cost_3_check = 0;
		
		if(permanent_cost_used_1[k]==0){cost_1_check=1;}
		else if(permanent_cost_used_1[k]==1)
		{
			if(permanent_cost_meta_type_1[k]==0) // box
			{
				for(var d=0; d<56; d++)
				{
					//console.log("storm marker: "+yellow_police_array[d]);
					
					if(map_colors_array[d] == permanent_cost_type_1[k] && agent_present[d]==1 && info_value[d] >= permanent_cost_value_1[k] && red_police_array[d] == 0)
					{
						cost_1_check=1;		
						perm_cost_graphic_1[k].alpha = 1.0;
						
						
						
					}
				}	
			}
			else if(permanent_cost_meta_type_1[k]==1) //points
			{
				if(permanent_cost_type_1[k]==0) //victory points
				{
					if(permanent_cost_value_1[k]<=military_points)
					{
						cost_1_check=1;
						perm_cost_graphic_1[k].alpha = 1.0;
					}
				}	
				else if(permanent_cost_type_1[k]==1)
				{
					if(permanent_cost_value_1[k]<=diplomacy_points)
					{
						cost_1_check=1;
						perm_cost_graphic_1[k].alpha = 1.0;
					}					
				}
			}
			else if(permanent_cost_meta_type_1[k]==2)
			{
				cost_1_check=1;
				perm_cost_graphic_1[k].alpha = 1.0;	
			}
			else if(permanent_cost_meta_type_1[k]==3)
			{
				for(var j=0; j<8; j++)
				{
					if(political_control_check[j] == 1 && (resource_1[j]==permanent_cost_type_1[k] || resource_2[j]==permanent_cost_type_1[k]))
					{
						//console.log("check: "+j+" resource 1: "+resource_1[j]+" cost_type 1: "+);
						
						cost_1_check=1;
						perm_cost_graphic_1[k].alpha = 1.0;	
						
					}
				}
				
			}
			
		}
		
		if(permanent_cost_used_2[k]==0){cost_2_check=1;}
		else if(permanent_cost_used_2[k]==1)
		{
			if(permanent_cost_meta_type_2[k]==0) // box
			{
				for(var d=0; d<56; d++)
				{
					if(map_colors_array[d] == permanent_cost_type_2[k] && agent_present[d]==1 && info_value[d] >= permanent_cost_value_2[k] && red_police_array[d] == 0)
					{
						cost_2_check=1;		
						perm_cost_graphic_2[k].alpha = 1.0;
					}
				}	
			}
			else if(permanent_cost_meta_type_2[k]==1) //points
			{
				if(permanent_cost_type_2[k]==0) //victory points
				{
					if(permanent_cost_value_2[k]<=military_points)
					{
						cost_2_check=1;
						perm_cost_graphic_2[k].alpha = 1.0;
					}
				}	
				else if(permanent_cost_type_2[k]==1)
				{
					if(permanent_cost_value_2[k]<=diplomacy_points)
					{
						cost_2_check=1;
						perm_cost_graphic_2[k].alpha = 1.0;
					}					
				}

			}
			else if(permanent_cost_meta_type_2[k]==2)
			{
				cost_2_check=1;
				perm_cost_graphic_2[k].alpha = 1.0;	
			}
			else if(permanent_cost_meta_type_2[k]==3)
			{
				for(var j=0; j<8; j++)
				{
					if(political_control_check[j] == 1 && (resource_1[j]==permanent_cost_type_2[k] || resource_2[j]==permanent_cost_type_2[k]))
					{
						cost_2_check=1;
						perm_cost_graphic_2[k].alpha = 1.0;	
						
					}
				}
				
			}

		}
		
		if(permanent_cost_used_3[k]==0){cost_3_check=1;}
		else if(permanent_cost_used_3[k]==1)
		{
			if(permanent_cost_meta_type_3[k]==0) // box
			{
				for(var d=0; d<56; d++)
				{
					if(map_colors_array[d] == permanent_cost_type_3[k] && agent_present[d]==1 && info_value[d] >= permanent_cost_value_3[k] && red_police_array[d] == 0)
					{
						cost_3_check=1;		
						perm_cost_graphic_3[k].alpha = 1.0;
					}
				}	
			}
			else if(permanent_cost_meta_type_3[k]==1) //points
			{
				if(permanent_cost_type_3[k]==0) //victory points
				{
					if(permanent_cost_value_3[k]<=military_points)
					{
						cost_3_check=1;
						perm_cost_graphic_3[k].alpha = 1.0;
					}
				}	
				else if(permanent_cost_type_3[k]==1)
				{
					if(permanent_cost_value_3[k]<=diplomacy_points)
					{
						cost_3_check=1;
						perm_cost_graphic_3[k].alpha = 1.0;
					}					
				}
			}
			else if(permanent_cost_meta_type_3[k]==2)
			{
				cost_3_check=1;
				perm_cost_graphic_3[k].alpha = 1.0;	
			}
			else if(permanent_cost_meta_type_3[k]==3)
			{
				for(var j=0; j<8; j++)
				{
					if(political_control_check[j] == 1 && (resource_1[j]==permanent_cost_type_3[k] || resource_2[j]==permanent_cost_type_3[k]))
					{
						cost_3_check=1;
						perm_cost_graphic_3[k].alpha = 1.0;	
						
					}
				}
				
			}
			
			
		}
		
		if((cost_1_check+cost_2_check+cost_3_check)==3)
		{
			if(k == 0)
			{
				for(var d=0; d<56; d++)
				{
					if(agent_present[d]==1 && info_value[d] < 9)
					{
						menu_buttons[5+k].visible = true;	
					}
				}						
			}
			else if(k == 1)
			{
				for(var d=0; d<56; d++)
				{
					if(agent_present[d]==1 && info_value[d] > 0)
					{
						menu_buttons[5+k].visible = true;	
					}
				}									
			}		
			else if(k == 2)
			{
				for(var d=0; d<add_deck.length; d++)	
				{	
					if(add_deck[d]>-1 && add_deck[d] != null)
					{
						//console.log("add_deck: "+d+" val: "+add_deck[d])
						
						menu_buttons[5+k].visible = true;		
					}
				}
			}		
			else if(k == 3)
			{
				deck_card_count=0;
				
				for(var d=0; d<in_deck.length; d++)	
				{	
					if(in_deck[d]>-1 && in_deck[d] != null && played[in_deck[d]]==0 && card_type[in_deck[d]] != 3 && card_type[in_deck[d]] != 7)
					{
						//console.log("remove_deck: "+d+" val: "+in_deck[d])
						deck_card_count=deck_card_count+1;	
						//menu_buttons[5+k].visible = true;			
					}
					
					if(deck_card_count > 0){menu_buttons[5+k].visible = true;}
				}
			}
			else if(k == 4)
			{
				for(var d=0; d<in_deck.length; d++)	
				{	
					if(in_deck[d]>-1 && in_deck[d] != null && played[in_deck[d]]==0)
					{
						//console.log("remove_deck: "+d+" val: "+in_deck[d])
						deck_card_count=deck_card_count+1;	
						//menu_buttons[5+k].visible = true;			
					}
					
					if(deck_card_count > 0){menu_buttons[5+k].visible = true;}
				}			
			}
			else if(k == 5)
			{
				
				for(var d=0; d<56; d++)
				{
					if(vp_map_boxes[d]==0 && red_police_array[d]==0 && d%7 > 0)
					{
						menu_buttons[5+k].visible = true;
					}
				}
			}	
			else
			{
				menu_buttons[5+k].visible = true;
			}
		
		}
	}	

}