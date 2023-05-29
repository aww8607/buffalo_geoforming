function build_action_card_deck(scene)
{
	for(var n = 0; n < 24; n++)
	{
		if(action_card_array[n] != null){destroySprite(action_card_array[n]); action_card_array[n]=null;}	
		
		action_card_array[n] = new action_card_container(scene,n);
		action_card_array[n].x = 17;
		action_card_array[n].y = 55+35+35;
		action_card_array[n].visible = false;

		if(display_action_card_array[n] != null){destroySprite(display_action_card_array[n]); display_action_card_array[n]=null;}	
		
		display_action_card_array[n] = new action_card_container(scene,n);
		display_action_card_array[n].x = 17;
		display_action_card_array[n].y = 55+35+35;
		display_action_card_array[n].visible = false;

		
		
	}


}