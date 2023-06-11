/*
Phases
0 - main game
1 - pick exfiltration agent
2 - ok message box
3 - increase stealth
4 - increase info
5 - Add card to deck
6 - Remove card fromm deck
7 - Pick next card
8 - place agent card
9 - demo phase
10 - add mitigation marker
11 - change code type

*/

//Test commit
//New test commit


var game_tag="Carbon_8_03_2022";

var preloader_text;

var phase = 0;

var input;
var preloader_text;
var pointer;
var turn=0;
var no_box_codes = 2;
var playable=-1;
var max_turn=100;
var card_graphics_array = [];
var menu_buttons = [];
var diplomacy_points = 10;
var military_points = 10;
var geoforming_points = 0;

var diplomancy_points_starting = 8;
var military_points_starting = 0;
var temp_change_value = 0.0;
var instruction_box;
var diplomacy_point_text;
var military_point_text;
var geoforming_point_text;
var mission_choice = 18;
var selection_threshold=35;
var played_agent_card_count_threshold = 0;
var new_deck_card_count=0;
var starting_stealth_level = 3;
var starting_info_max= 2;
var surviellence_start_threshold = 0;
var vp_map_box_score = 2;
var vp_map_box_score_array = [];
var demo_completed = 0;
var step = -1;
var demo_holder;
var temp_info_holder;
var carbon_denominator_constant = 400;
var geoforming_multiplier = 50;
var mitigation_marker = [];

var menu_button_titles = [];
menu_button_titles[0] = 'MENU';
menu_button_titles[1] = 'KEY';
menu_button_titles[2] = 'PLAY';
menu_button_titles[3] = 'PASS';
menu_button_titles[4] = 'BLOCK';
menu_button_titles[5] = 'PLACE'; //add stealth 'ADD SUPPORT'
menu_button_titles[6] = 'REMOVE	'; //add info level 'ADD TECH'
menu_button_titles[7] = 'ADD CARD'; //add ops point
menu_button_titles[8] = 'REMOVE CARD'; //remove card from deck
menu_button_titles[9] = 'PICK CARD'; //add victory points
menu_button_titles[10] = 'MITIGATION'; //add victory points 
menu_button_titles[11] = 'i'; //increase support level info
menu_button_titles[12] = 'i'; //increase tech level info
menu_button_titles[13] = 'i'; //add card info
menu_button_titles[14] = 'i'; //remove card info
menu_button_titles[15] = 'i'; //pick next card info
menu_button_titles[16] = 'i'; //mitigation card info
 



var action_card_array = [];
var display_action_card_array = [];
var map_boxes = [];

var vp_map_boxes = [];
var red_map_border_array = [];
var black_border_array = [];


var map_colors_array = [];

var unit_back_box = [];
var info_number_box = [];
var stealth_level_text = [];
var left_box = make_mutli_dimension_array(56);
var right_box = make_mutli_dimension_array(56);
var stealth_back_box = [];
var vp_box_number = [];
var card_in_play = -1;
	
var code_name = [];
var code_letter = [];
var agent_cover_array = [];

//Agent values
var agent_present = [];
var info_value = [];
var info_stealth = [];
var agent_char_1 = [];
var agent_char_2 = [];

//Card values
var action_card_choice = -1;
var current_deck_position = -1;
var random_location_choice = -1;

var card_type = [];
var used = [];
var card_name = [];
var flavor_text = [];
var action_type = [];
var action_var_1 = [];
var action_var_2 = [];
var action_var_3 = [];
var action_var_4 = [];
var cost_type_a = [];
var cost_var_a_1 = [];
var cost_var_a_2 = [];
var cost_var_a_3 = [];
var cost_var_a_4 = [];
var cost_type_b = [];
var cost_var_b_1 = [];
var cost_var_b_2 = [];
var cost_var_b_3 = [];
var cost_var_b_4 = [];
var cost_type_c = [];
var cost_var_c_1 = [];
var cost_var_c_2 = [];
var cost_var_c_3 = [];
var cost_var_c_4 = [];
var played = [];
var auto_card = [];
var play_once = [];
var in_deck = [];
var add_deck = [];

var info_level = [];
var stealth_level = [];
var char_1 = [];
var char_2 = [];
var agent_name = [];
var agent_flavor_text = [];
var agent_active = [];
var agent_placement_holder = -1;

var game_agent_array = [];

var cost_1_met=0;
var cost_2_met=0;
var cost_3_met=0;

var map_box_names = [];
var map_box_modifier = [];

	
var menu_back_box_holder;
var message_back_box_holder;

var map_big_police_array = [];
var map_small_police_array = [];
var map_small_yellow_police = [];

var red_police_array = [];
var yellow_police_array = [];
var red_police_choice = 13;
var yellow_police_choice = 1; 

//permanent action variables
var permanent_cost_title = [];

var permanent_cost_used_1 = [];
var permanent_cost_used_2 = [];
var permanent_cost_used_3 = [];

var permanent_cost_meta_type_1 = []; //Box or Op Points
var permanent_cost_meta_type_2 = [];
var permanent_cost_meta_type_3 = [];

var permanent_cost_type_1 = []; //specific box type or point type
var permanent_cost_type_2 = [];
var permanent_cost_type_3 = [];

var permanent_cost_value_1 = []; //info level or point type
var permanent_cost_value_2 = [];
var permanent_cost_value_3 = [];

var perm_cost_graphic_1 = [];
var perm_cost_graphic_2 = [];
var perm_cost_graphic_3 = [];

//save variable loctions
var game_saved = 0;
var tag_game_saved = game_tag+"game_saved";
var tag_agent_present = game_tag+"agent_present";
var tag_info_value = game_tag+"info_value";
var tag_info_stealth = game_tag+"info_stealth";
var tag_agent_char_1 = game_tag+"agent_char_1";
var tag_agent_char_2 = game_tag+"agent_char_2";
var tag_vp_map_boxes = game_tag+"vp_map_boxes";
var tag_info_level = game_tag+"info_level";
var tag_stealth_level = game_tag+"stealth_level";
var tag_char_1 = game_tag+"char_1";
var tag_char_2 = game_tag+"char_2";
var tag_agent_name = game_tag+"agent_name";
var tag_agent_flavor_text = game_tag+"agent_flavor_text";
var tag_agent_active = game_tag+"agent_active";
var tag_game_agent_array = game_tag+"game_agent_array";
var tag_red_police_array = game_tag+"red_police_array";
var tag_map_colors_array = game_tag+"map_colors_array";
var tag_in_deck = game_tag+"in_deck";
var tag_add_deck = game_tag+"add_deck";
var tag_played = game_tag+"played";
var tag_turn = game_tag+"turn";
var tag_diplomacy_points = game_tag+"diplomacy_points";
var tag_military_points = game_tag+"military_points";
var tag_demo_completed = game_tag+"demo_completed";
var tag_red_police_choice = game_tag+"red_police_choice";
var tag_vp_map_box_score_array = game_tag+"vp_map_box_score_array";
var tag_geoforming_points = game_tag+"geoforming_points";
var tag_code_1 = game_tag+"code_1";
var tag_code_2 = game_tag+"code_2";
var tag_carbon_level = game_tag+"carbon_level";


var demo_map_colors_array = [];
var demo_agent_present = [];
var demo_info_value = [];
var demo_info_stealth = [];
var demo_agent_char_1 = [];
var demo_agent_char_2 = [];
var demo_vp_map_boxes = [];

var demo_agent_x = [];
var demo_agent_y = [];

var demo_button_x = [];
var demo_button_y = [];

var code_1 = [];
var code_2 = [];
var resource_1 = [];
var resource_2 = [];
var carbon_level = [];
var control_level = [];
var control_threshold = [];
var carbon_start_level = [];


var left_resource_array = make_mutli_dimension_array(8);
var right_resource_array = make_mutli_dimension_array(8);

var resource_icon_number = [];
resource_icon_number[0] = 19;
resource_icon_number[1] = 20;
resource_icon_number[2] = 21;
resource_icon_number[3] = 22;
resource_icon_number[4] = 23;

var resource_icon_name = [];
resource_icon_name[0] = 'Alliance';
resource_icon_name[1] = 'Inteligence Agency';
resource_icon_name[2] = 'Military';
resource_icon_name[3] = 'Industry';
resource_icon_name[4] = 'Space Program';

var resource_icon_modifier = [];
resource_icon_modifier[0] = 'an';
resource_icon_modifier[1] = 'an';
resource_icon_modifier[2] = 'an';
resource_icon_modifier[3] = 'a';
resource_icon_modifier[4] = 'a';

var control_text_array = [];
var carbon_output_text = [];

var permanent_actions_long_name = [];
permanent_actions_long_name[0] = "Place Activist";
permanent_actions_long_name[1] = "Remove Activist";
permanent_actions_long_name[2] = "Add Card To Deck";
permanent_actions_long_name[3] = "Remove Card From Deck";
permanent_actions_long_name[4] = "Pick Next Card";
permanent_actions_long_name[5] = "Mitigation Measures";

var permanent_actions_description = [];
permanent_actions_description[0] = "Place an activist on a capability box.  Capability boxes with one or more activists count towards the total number of boxes needed to control a country.";
permanent_actions_description[1] = "Remove an activist from a capability box.  This will add one activist to your activist total, so you can place the activist on another box.";
permanent_actions_description[2] = "Choose one of three randomly selected cards to add to the deck.";
permanent_actions_description[3] = "Choose one of three cards randomly selected to remove from the deck.  You cannot select light blue Weather Event or green Nothing Happened cards.";
permanent_actions_description[4] = "Choose one of three randomly selected cards to be the next card in the deck.";
permanent_actions_description[5] = "Add a mitigation marker to a capability box of your choice.  Storm markers cannot be placed on capability boxes with mitigation markers.";

var agent_name_text = ' Activists';
var carbon_text = ' CO2';
var geoforming_text = ' Geoengineering';
var temp_change_text = ' Deg. Temp. Change'

var total_victory_level = 0.0;
var major_victory_lower = 0.0;
var major_victory_upper = 1.0;
var minor_victory_lower = 1.0;
var minor_victory_upper = 2.0;
var draw_lower = 2.0;
var draw_upper = 3.0;
var loss_level = 3.0;

var total_victory_weather_events = 0;
var major_victory_weather_events = 0;
var minor_victory_weather_events = 1;
var draw_victory_weather_events = 2;
var loss_victory_weather_events = 4;

var info_element_box_holder;

var country_name_array = [];
country_name_array[0] = 'Russia';
country_name_array[1] = 'EU';
country_name_array[2] = 'USA';
country_name_array[3] = 'PRC';
country_name_array[4] = 'Japan';
country_name_array[5] = 'India';
country_name_array[6] = 'South Africa';
country_name_array[7] = 'Saudi Arabia';





