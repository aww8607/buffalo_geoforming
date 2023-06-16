function int_permanent_actions(scene)
{

	

	//add agent
	permanent_cost_used_1[0] = 0;
	permanent_cost_meta_type_1[0] = 1; //box type
	permanent_cost_type_1[0] = 1; //criminal underworld
	permanent_cost_value_1[0] = 1; //no info level
		
	permanent_cost_used_2[0] = 0;
	permanent_cost_meta_type_2[0] = 0; //box type
	permanent_cost_type_2[0] = 3; //tech
	permanent_cost_value_2[0] = 0; //no info level
		
	permanent_cost_used_3[0] = 0;
	permanent_cost_meta_type_3[0] = 0; //box type
	permanent_cost_type_3[0] = 3; //criminal underworld
	permanent_cost_value_3[0] = 0; //no info level
	
	//remove agent
	permanent_cost_used_1[1] = 0;
	permanent_cost_meta_type_1[1] = 1; //box type
	permanent_cost_type_1[1] = 1; //Politics
	permanent_cost_value_1[1] = 1; //no info level
		
	permanent_cost_used_2[1] = 0;
	permanent_cost_meta_type_2[1] = 0; //box type
	permanent_cost_type_2[1] = 1; //Media
	permanent_cost_value_2[1] = 0; //no info level
	
	permanent_cost_used_3[1] = 0;
	permanent_cost_meta_type_3[1] = 0; //box type
	permanent_cost_type_3[1] = 3; //criminal underworld
	permanent_cost_value_3[1] = 0; //no info level
	
	//add card to desk
	permanent_cost_used_1[2] = 1;
	permanent_cost_meta_type_1[2] = 1; //agents
	permanent_cost_type_1[2] = 1; //Industry
	permanent_cost_value_1[2] = 4; //no info level
	
	permanent_cost_used_2[2] = 0;
	permanent_cost_meta_type_2[2] = 3; //country resource
	permanent_cost_type_2[2] = 0; //alliance
	permanent_cost_value_2[2] = 0; //no info level
	
	permanent_cost_used_3[2] = 0;
	permanent_cost_meta_type_3[2] = 3; //country resource
	permanent_cost_type_3[2] = 1; //intel agency
	permanent_cost_value_3[2] = 0; //number of points

	//remove card from deck
	permanent_cost_used_1[3] = 1;
	permanent_cost_meta_type_1[3] = 3; //country resource
	permanent_cost_type_1[3] = 2; //military
	permanent_cost_value_1[3] = 0; //no info level
	
	permanent_cost_used_2[3] = 1;
	permanent_cost_meta_type_2[3] = 3; //country resource
	permanent_cost_type_2[3] = 3; //Opps point
	permanent_cost_value_2[3] = 0; //no of opps points
	
	permanent_cost_used_3[3] = 1;
	permanent_cost_meta_type_3[3] = 3; //country resource
	permanent_cost_type_3[3] = 0; //criminal underworld
	permanent_cost_value_3[3] = 0; //no info level

	//Pick Next Card
	permanent_cost_used_1[4] = 1;
	permanent_cost_meta_type_1[4] = 0; //box type
	permanent_cost_type_1[4] = 2; //Technology	
	permanent_cost_value_1[4] = 3; //no info level
	
	permanent_cost_used_2[4] = 1;
	permanent_cost_meta_type_2[4] = 0; //box type
	permanent_cost_type_2[4] = 5; //Opps point
	permanent_cost_value_2[4] = 3; //no of opps points
	
	permanent_cost_used_3[4] = 1;
	permanent_cost_meta_type_3[4] = 3; //Opps points
	permanent_cost_type_3[4] = 1; //criminal underworld
	permanent_cost_value_3[4] = 0; //no info level
	

	//Mitigation
	permanent_cost_used_1[5] = 1;
	permanent_cost_meta_type_1[5] = 2; //Carbon increase
	permanent_cost_type_1[5] = 0; //Increase
	permanent_cost_value_1[5] = 40; //Number of carbon points
	
	permanent_cost_used_2[5] = 0;
	permanent_cost_meta_type_2[5] = 0; //box type
	permanent_cost_type_2[5] = 0; //Opps point
	permanent_cost_value_2[5] = 6; //no of opps points
	
	permanent_cost_used_3[5] = 0;
	permanent_cost_meta_type_3[5] = 1; //Opps points
	permanent_cost_type_3[5] = 1; //criminal underworld
	permanent_cost_value_3[5] = 0; //no info level


	for(var k=0; k<permanent_cost_used_1.length; k++)
	{
		if(perm_cost_graphic_1[k] != null){destroySprite(perm_cost_graphic_1[k]); perm_cost_graphic_1[k]=null;}	
		if(perm_cost_graphic_2[k] != null){destroySprite(perm_cost_graphic_2[k]); perm_cost_graphic_2[k]=null;}	
		if(perm_cost_graphic_3[k] != null){destroySprite(perm_cost_graphic_3[k]); perm_cost_graphic_3[k]=null;}	
		
		
		
		perm_cost_graphic_1[k] = new perm_action_cost_icons(scene, permanent_cost_used_1[k], permanent_cost_meta_type_1[k], permanent_cost_type_1[k], permanent_cost_value_1[k]);
		perm_cost_graphic_1[k].x = 170;
		perm_cost_graphic_1[k].y = 825+5-490+90+65*k+15+5;
 		perm_cost_graphic_1[k].depth = 91;
		
		perm_cost_graphic_2[k] = new perm_action_cost_icons(scene, permanent_cost_used_2[k], permanent_cost_meta_type_2[k], permanent_cost_type_2[k], permanent_cost_value_2[k]);
		perm_cost_graphic_2[k].x = 215;
		perm_cost_graphic_2[k].y = 825+5-490+90+65*k+15+5;
		perm_cost_graphic_2[k].depth = 91;
		
		perm_cost_graphic_3[k] = new perm_action_cost_icons(scene, permanent_cost_used_3[k], permanent_cost_meta_type_3[k], permanent_cost_type_3[k], permanent_cost_value_3[k]);
		perm_cost_graphic_3[k].x = 260;
		perm_cost_graphic_3[k].y = 825+5-490+90+65*k+15+5;
		perm_cost_graphic_3[k].depth = 91;
		
		
	}

	
}