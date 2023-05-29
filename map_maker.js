function map_maker(scene)
{
	//map_colors_array.splice(0);


	for(var d =0; d<7; d++)
	{
		jager = new map_container(scene,6,7*75+5,2);
		jager.x = 320;
		jager.y = 86+95+95*d;
		jager.visible = true;	


	}
	
	for(var n = 0; n < 56; n++)
	{
		if(demo_completed==0) {map_colors_array[n] = demo_map_colors_array[n]}
		else{map_colors_array[n] = Math.floor(Math.random() * 6);}	
		
		if(map_boxes[n] != null){destroySprite(map_boxes[n]); map_boxes[n]=null;}	
	
		map_colors_array[0] = 13;//12;
		
		map_colors_array[1] = 0;
		map_colors_array[2] = 1;
		map_colors_array[3] = 2;
		map_colors_array[4] = 3;
		map_colors_array[5] = 4;
		map_colors_array[6] = 5;
		
		map_colors_array[7] = 13;
		
		map_colors_array[8] = 0;
		map_colors_array[9] = 1;
		map_colors_array[10] = 2;
		map_colors_array[11] = 3;
		map_colors_array[12] = 4;
		map_colors_array[13] = 5;
		
		map_colors_array[14] = 13;
		
		map_colors_array[15] = 0;
		map_colors_array[16] = 1;
		map_colors_array[17] = 2;
		map_colors_array[18] = 3;
		map_colors_array[19] = 4;
		map_colors_array[20] = 5;
		
		map_colors_array[21] = 13;
		
		map_colors_array[22] = 0;
		map_colors_array[23] = 1;
		map_colors_array[24] = 2;
		map_colors_array[25] = 3;
		map_colors_array[26] = 4;
		map_colors_array[27] = 5;

		map_colors_array[28] = 13;
		
		map_colors_array[29] = 0;
		map_colors_array[30] = 1;
		map_colors_array[31] = 2;
		map_colors_array[32] = 3;
		map_colors_array[33] = 4;
		map_colors_array[34] = 5;

		map_colors_array[35] = 13;
		
		map_colors_array[36] = 0;
		map_colors_array[37] = 1;
		map_colors_array[38] = 2;
		map_colors_array[39] = 3;
		map_colors_array[40] = 4;
		map_colors_array[41] = 5;
	
		map_colors_array[42] = 13;
		
		map_colors_array[43] = 0;
		map_colors_array[44] = 1;
		map_colors_array[45] = 2;
		map_colors_array[46] = 3;
		map_colors_array[47] = 4;
		map_colors_array[48] = 5;

		map_colors_array[49] = 13;
		
		map_colors_array[50] = 0;
		map_colors_array[51] = 1;
		map_colors_array[52] = 2;
		map_colors_array[53] = 3;
		map_colors_array[54] = 4;
		map_colors_array[55] = 5;

	
		map_boxes[n] = new map_container(scene,map_colors_array[n],70,90);
		map_boxes[n].x = 325+(n%7)*75;
		map_boxes[n].y = 90+95*Math.floor(n/7);
		map_boxes[n].visible = true;
		
		if(red_map_border_array[n] != null){destroySprite(red_map_border_array[n]); red_map_border_array[n]=null;}

		red_map_border_array[n] = new red_border_container(scene,n);
		red_map_border_array[n].x = 325+(n%7)*75-1;
		red_map_border_array[n].y = 89+95*Math.floor(n/7);
		red_map_border_array[n].visible = false;
		red_map_border_array[n].depth = 91;

		if(map_big_police_array[n] != null){destroySprite(map_big_police_array[n]); map_big_police_array[n]=null;}	

		map_big_police_array[n] = new big_police_container(scene,n);
		map_big_police_array[n].x = 325+(n%7)*75-1;
		map_big_police_array[n].y = 90+95*Math.floor(n/7);
		map_big_police_array[n].visible = false;
		map_big_police_array[n].depth = 92;

		if(map_small_police_array[n] != null){destroySprite(map_small_police_array[n]); map_small_police_array[n]=null;}	

		map_small_police_array[n] = new small_police_container(scene,n);
		map_small_police_array[n].x = 325+(n%7)*75-1;
		map_small_police_array[n].y = 90+95*Math.floor(n/7);
		map_small_police_array[n].visible = false;
		map_small_police_array[n].depth = 92;

		if(map_small_yellow_police[n] != null){destroySprite(map_small_yellow_police[n]); map_small_yellow_police[n]=null;}	

		map_small_yellow_police[n] = new small_police_yellow_container(scene,n);
		map_small_yellow_police[n].x = 325+(n%7)*75-1;
		map_small_yellow_police[n].y = 90+95*Math.floor(n/7);
		map_small_yellow_police[n].visible = false;
		map_small_yellow_police[n].depth = 92;
		
		
		
		if(black_border_array[n] != null){destroySprite(black_border_array[n]); black_border_array[n]=null;}
		
		black_border_array[n] = new orange_border_container(scene,n);
		black_border_array[n].x = 325+(n%7)*75-1;
		black_border_array[n].y = 90+95*Math.floor(n/7);
		black_border_array[n].visible = false;
		black_border_array[n].depth = 91;
		
		
	}
	


}