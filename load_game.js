function load_game()
{

	if(localStorage.getItem(tag_demo_completed) != null)
	{
		demo_completed=JSON.parse(localStorage.getItem(tag_demo_completed));
	}

	if(localStorage.getItem(tag_game_saved) != null)
    {
		game_saved = JSON.parse(localStorage.getItem(tag_game_saved));

		agent_present = JSON.parse(localStorage.getItem(tag_agent_present));
		info_value = JSON.parse(localStorage.getItem(tag_info_value));
		info_stealth = JSON.parse(localStorage.getItem(tag_info_stealth));
		agent_char_1 = JSON.parse(localStorage.getItem(tag_agent_char_1));
		agent_char_2 = JSON.parse(localStorage.getItem(tag_agent_char_2));
		vp_map_boxes = JSON.parse(localStorage.getItem(tag_vp_map_boxes));
		info_level = JSON.parse(localStorage.getItem(tag_info_level));
		stealth_level = JSON.parse(localStorage.getItem(tag_stealth_level));
		char_1 = JSON.parse(localStorage.getItem(tag_char_1));
		char_2 = JSON.parse(localStorage.getItem(tag_char_2));
		agent_name = JSON.parse(localStorage.getItem(tag_agent_name));
		agent_active = JSON.parse(localStorage.getItem(tag_agent_active));
		agent_flavor_text = JSON.parse(localStorage.getItem(tag_agent_flavor_text));
		game_agent_array = JSON.parse(localStorage.getItem(tag_game_agent_array));
		red_police_array = JSON.parse(localStorage.getItem(tag_red_police_array));
		map_colors_array = JSON.parse(localStorage.getItem(tag_map_colors_array));
		in_deck = JSON.parse(localStorage.getItem(tag_in_deck));
		add_deck = JSON.parse(localStorage.getItem(tag_add_deck));
		played = JSON.parse(localStorage.getItem(tag_played));
		turn = JSON.parse(localStorage.getItem(tag_turn));
		diplomacy_points = JSON.parse(localStorage.getItem(tag_diplomacy_points));
		military_points = JSON.parse(localStorage.getItem(tag_military_points));
		demo_completed = JSON.parse(localStorage.getItem(tag_demo_completed));
		red_police_choice = JSON.parse(localStorage.getItem(tag_red_police_choice));
		vp_map_box_score_array = JSON.parse(localStorage.getItem(tag_vp_map_box_score_array));
		geoforming_points = JSON.parse(localStorage.getItem(tag_geoforming_points));
		code_1 = JSON.parse(localStorage.getItem(tag_code_1));
		code_2 = JSON.parse(localStorage.getItem(tag_code_2));
		carbon_level = JSON.parse(localStorage.getItem(tag_carbon_level));
		
	}
}