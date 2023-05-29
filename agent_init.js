function agent_init(scene)
{
	//unit_back_box
	
	
	for(var n = 0; n < 56; n++)
	{
		
		if(unit_back_box[n] != null){destroySprite(unit_back_box[n]); unit_back_box[n]=null;}	
		
		
		unit_back_box[n] = new unit_back_container(scene,0);
		unit_back_box[n].x = 325+5+(n%7)*75+5;
		unit_back_box[n].y = 90+45+95*Math.floor(n/7)+4-6;
		unit_back_box[n].alpha = 10;
		unit_back_box[n].visible = false;
	
		demo_agent_x[n] = 325+5+(n%7)*75+5;
		demo_agent_y[n] = 90+45+95*Math.floor(n/7)+4-6;
	
	
		info_number_box[n] = scene.add.text(15, 15, 'Hello Phaser!', {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		info_number_box[n].setOrigin(0,0);
		info_number_box[n].x = 325+15+(n%7)*75;
		info_number_box[n].y = 90+15+35+95*Math.floor(n/7)-6;
		info_number_box[n].text = "4";
		info_number_box[n].visible = false;


		if(stealth_back_box[n] != null){destroySprite(stealth_back_box[n]); stealth_back_box[n]=null;}
		stealth_back_box[n] = new code_box_container(scene,-1);
		stealth_back_box[n].x = 325+35+(n%7)*75;
		stealth_back_box[n].y = 90+15+35+95*Math.floor(n/7)-1-6;
		stealth_back_box[n].visible = false;		


		stealth_level_text[n] = scene.add.text(15, 15, 'Hello Phaser!', {fontSize: 'bold 24px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
		stealth_level_text[n].setOrigin(0,0);
		stealth_level_text[n].x = 325+40+(n%7)*75;
		stealth_level_text[n].y = 90+15+35+95*Math.floor(n/7)-6;
		stealth_level_text[n].text = "4";
		stealth_level_text[n].visible = false;

		vp_box_number[n] = scene.add.text(15, 15, vp_map_box_score+"VVVV", {fontSize: 'bold 15px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});	
		vp_box_number[n].setOrigin(0,0);
		vp_box_number[n].x = 325+8+(n%7)*75+9;
		vp_box_number[n].y = 90+70+95*Math.floor(n/7);
		vp_box_number[n].text = "VVVV";
		vp_box_number[n].visible = false;
		
		
		//code_box_container
		for(var k = 0; k<no_box_codes; k++)
		{
			
			if(left_box[n][k] != null){destroySprite(left_box[n][k]); left_box[n][k]=null;}
			left_box[n][k] = new code_box_container(scene,k);
			//left_box[n][k].setOrigin(0,0);
			left_box[n][k].x = 325+10+(n%7)*75;
			left_box[n][k].y = 95+5+95*Math.floor(n/7)+2-2;
			left_box[n][k].visible = false;
			
			if(right_box[n][k] != null){destroySprite(right_box[n][k]); right_box[n][k]=null;}
			right_box[n][k] = new code_box_container(scene,k);
			//left_box[n][k].setOrigin(0,0);
			right_box[n][k].x = 325+35+(n%7)*75;
			right_box[n][k].y = 95+5+95*Math.floor(n/7)+2-2;
			right_box[n][k].visible = false;
			
		}
		
		
		//agent_cover
		if(agent_cover_array[n] != null){destroySprite(agent_cover_array[n]); agent_cover_array[n]=null;}

		agent_cover_array[n] = new agent_cover(scene,n);
		agent_cover_array[n].x = 325+(n%7)*75;
		agent_cover_array[n].y = 90+95*Math.floor(n/7);
		agent_cover_array[n].depth = 93;
		agent_cover_array[n].visible = true;
		
		
	}
	
	for(var x=0; x<8; x++)
	{
		for(var e=0; e<5; e++)
		{
			if(left_resource_array[x][e] != null){destroySprite(left_resource_array[x][e]); left_resource_array[x][e]=null;}	
			if(right_resource_array[x][e] != null){destroySprite(right_resource_array[x][e]); right_resource_array[x][e]=null;}	


			left_resource_array[x][e]=new nation_resource_icon_container(scene, e);
			left_resource_array[x][e].x = 325+3;
			left_resource_array[x][e].y = 90+5+95*x;
			left_resource_array[x][e].visible = false;
			left_resource_array[x][e].alpha = 0.3;
			
			right_resource_array[x][e]=new nation_resource_icon_container(scene, e);
			right_resource_array[x][e].x = 325+9+25;
			right_resource_array[x][e].y = 90+5+95*x;
			right_resource_array[x][e].visible = false;
			right_resource_array[x][e].alpha = 0.3;
					
		}

		control_text_array[x] = scene.add.text(15, 15,"VPs", {fontSize: 'bold 24px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});	
		control_text_array[x].setOrigin(0,0);
		control_text_array[x].text = "4/6";
		control_text_array[x].x = 325+2+(64-control_text_array[x].width)/2;
		control_text_array[x].y = 90+40+95*x;
		control_text_array[x].visible = true;

		
		carbon_output_text[x] = scene.add.text(15, 15,"VPs", {fontSize: 'bold 18px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
		carbon_output_text[x].setOrigin(0,0);
		carbon_output_text[x].y = 90+67+95*x;
		carbon_output_text[x].text = "+10";
		carbon_output_text[x].x = 325+2+(64-carbon_output_text[x].width)/2;
		carbon_output_text[x].visible = true;
		
	}
}