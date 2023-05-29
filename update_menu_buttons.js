function update_menu_buttons(scene)
{
	for(var j = 0; j<menu_button_titles.length; j++)
	{
		if(menu_buttons[j] != null){destroySprite(menu_buttons[j]); menu_buttons[j]=null;}
		
		menu_buttons[j] = new button_container(scene,menu_button_titles[j],j,0);
		//menu_buttons[j].x = 17+j*142;
		//menu_buttons[j].y = 55;
		
	}
	
	menu_buttons[0].x = 17+0*142;
	menu_buttons[0].y = 90;
	
	menu_buttons[1].x = 17+1*142;
	menu_buttons[1].y = 90;
	
	menu_buttons[2].x = 22;
	menu_buttons[2].y = 825+5-490+35;
	menu_buttons[2].visible = true;
    menu_buttons[2].depth = 91;
	
	
	menu_buttons[3].x = 22+135;
	menu_buttons[3].y = 825+5-490+35;
	menu_buttons[3].visible = true;
    menu_buttons[3].depth = 91;

	menu_buttons[4].x = 22;
	menu_buttons[4].y = 825+5-490+15;
	menu_buttons[4].visible = false;
    menu_buttons[4].depth = 91;
	
	menu_buttons[5].x = 22;
	menu_buttons[5].y = 825+5-490+95*1+15+4;
	menu_buttons[5].visible = false;
    menu_buttons[5].depth = 91;
	
	menu_buttons[6].x = 22;
	menu_buttons[6].y = 825+5-490+95+67*1+15+4;//825+5-490+95*2+15;
	menu_buttons[6].visible = false;
    menu_buttons[6].depth = 91;

	menu_buttons[7].x = 22;
	menu_buttons[7].y = 825+5-490+95+67*2+15+3;//825+5-490+95*3+15;
	menu_buttons[7].visible = false;
    menu_buttons[7].depth = 91;
	
	menu_buttons[8].x = 22;
	menu_buttons[8].y = 825+5-490+95+67*3+15-1;//825+5-490+95*4+15;
	menu_buttons[8].visible = false;
    menu_buttons[8].depth = 91;
	
	menu_buttons[9].x = 22;
	menu_buttons[9].y = 825+5-490+90+67*4+15+4;//825+5-490+95*5+15;
	menu_buttons[9].visible = false;
    menu_buttons[9].depth = 91;

	menu_buttons[10].x = 22;
	menu_buttons[10].y = 825+5-490+90+67*5+15+4;//825+5-490+95*5+15;
	menu_buttons[10].visible = false;
    menu_buttons[10].depth = 91;
	
	menu_buttons[11].x = 22;
	menu_buttons[11].y = 825+5-490+95*1+15-35+5;
	menu_buttons[11].visible = true;
    menu_buttons[11].depth = 91;
	
	menu_buttons[12].x = 22;
	menu_buttons[12].y = 825+5-490+95+67*1+15-35+5;
	menu_buttons[12].visible = true;
    menu_buttons[12].depth = 91;

	menu_buttons[13].x = 22;
	menu_buttons[13].y = 825+5-490+95+67*2+15-35+5;
	menu_buttons[13].visible = true;
    menu_buttons[13].depth = 91;

	menu_buttons[14].x = 22;
	menu_buttons[14].y = 825+5-490+95+67*3+15-37+5;
	menu_buttons[14].visible = true;
    menu_buttons[14].depth = 91;

	menu_buttons[15].x = 22;
	menu_buttons[15].y = 825+5-490+95+67*4+15-42+5;
	menu_buttons[15].visible = true;
    menu_buttons[15].depth = 91;

	menu_buttons[16].x = 22;
	menu_buttons[16].y = 825+5-490+95+67*5+15-42+5;
	menu_buttons[16].visible = true;
    menu_buttons[16].depth = 91;

}