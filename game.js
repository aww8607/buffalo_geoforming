
    var config = {
        //type: Phaser.AUTO,
        type: Phaser.WEBGL,
		//type: Phaser.CANVAS,
		width: 880,
        height: 880,
		fps: 10,
        physics: {
            default: 'none',
        //    arcade: {
        //        gravity: { y: 200 }
        //    }
        },
        scene: {
            preload: preload,
            create: create,
			update: update
        }
    };

	
    var game = new Phaser.Game(config);

    function preload ()
    {
		
		
		
		var graphic_count = 0;
		
		
		preloader_text = this.add.text(15, 78, 'Loading...', {fontSize: 'bold 36px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
		preloader_text.setOrigin(0,0);
		preloader_text.x = (880 - preloader_text.width)/2;
		preloader_text.y = (810 - preloader_text.height)/2;
		
		/*	
		preloader_message_1 = this.add.text(15, 78, 'This will take about a minute.  We are building powerful AI to make your naval combat experience more realistic.', {fontSize: 'bold 30px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
		preloader_message_1.setOrigin(0,0);
		preloader_message_1.x = (880 - preloader_message_1.width)/2;
		preloader_message_1.y = 550;
				
		preloader_message_2 = this.add.text(15, 78, 'You will be sinking carriers soon!', {fontSize: 'bold 30px', color: '#FFFFFF', wordWrap: { width: 850, useAdvancedWrap: true}});
		preloader_message_2.setOrigin(0,0);
		preloader_message_2.x = (880 - preloader_message_2.width)/2;
		preloader_message_2.y = 750;
		*/
		
		//button_back_color 0
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/clear_menu_button.png');
		graphic_count=graphic_count+1;

		//agent backer 1
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/agent_backer.png');
		graphic_count=graphic_count+1;
		
		//agent cover 2
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/agent_cover.png');
		graphic_count=graphic_count+1;
		
		//map red boarder 3
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/red_border.png');
		graphic_count=graphic_count+1;
		
		//map red boarder 4
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/orange_border.png');
		graphic_count=graphic_count+1;

		//diplomacy marker 5
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/fist_resource.png');
		graphic_count=graphic_count+1;
		
		//victory marker 6
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/card_resource_29.png');
		graphic_count=graphic_count+1;
		
		//big red police 7
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/storm_border.png');
		graphic_count=graphic_count+1;
		
		//small red police 8
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/storm_border.png');
		graphic_count=graphic_count+1;

		//small yellow police 9
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/yellow_police_small.png');
		graphic_count=graphic_count+1;
		
		//yellow shield police 10
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/yellow_police_shield_icon.png');
		graphic_count=graphic_count+1;
		
		//yellow shield police 11
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/red_police_shield_icon.png');
		graphic_count=graphic_count+1;
		
		//black right arrow 12
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/left_arrow.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 13
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/MI5.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 14 // arrow
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/arrow.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 15 //demo back box
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/demo_text.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 16 //kim philby
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/victory_screen_image.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 17 //KGB
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/KGB.png');
		graphic_count=graphic_count+1;

		//arrest graphic 18 //Key graphic
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/key_graphics.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 19 //alliance resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/alliance_resource.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 20 //intel resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/intel_resource.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 21 //army resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/jet_fighter.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 22 //navy resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/small_factory.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 23 //space resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/space_program_resource.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 24 //CO2 resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/CO2.png');
		graphic_count=graphic_count+1;

		//arrest graphic 25 //geoforming resource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/geoforming.png');
		graphic_count=graphic_count+1;

		//arrest graphic 26 //temp res6ource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/temp.png');
		graphic_count=graphic_count+1;

		//arrest graphic 27 //space res6ource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/temp_clear_cover.png');
		graphic_count=graphic_count+1;

		//arrest graphic 28 //space res6ource
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/small_huricane.png');
		graphic_count=graphic_count+1;
		
		//arrest graphic 29 //seawall graphic
		card_graphics_array[graphic_count]="_"+graphic_count;
		this.load.image(card_graphics_array[graphic_count],'graphics/seawall.png');
		graphic_count=graphic_count+1;
		
    }

    function create ()
    {
 		
		
		
		
		//hex_data();
		
		this.cameras.main.setBackgroundColor('#CCCCCC')

		input=this.input;
		
		
		pointer = this.input.activePointer;
	
		this.input.on('pointerdown', function(pointer)
		{
			
			if(info_element_box_holder != null){destroySprite(info_element_box_holder); info_element_box_holder=null;}
			
		});
	
						
		instruction_box = this.add.text(15, 15, 'Hello Phaser!', {fontSize: '18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		instruction_box.text = "Turn "+turn+"/"+max_turn+" - Press a PLAY or the PASS button in the lower left-hand corner of the card.";

		instruction_box.setOrigin(0,0);

		permanent_cost_title[0] =  this.add.text(22+40, 825+5-490+95*1-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[0].text = permanent_actions_long_name[0];
		permanent_cost_title[0].setOrigin(0,0);

		permanent_cost_title[1] =  this.add.text(22+40, 825+5-490+95+67*1-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[1].text = permanent_actions_long_name[1];
		permanent_cost_title[1].setOrigin(0,0);

		permanent_cost_title[2] =  this.add.text(22+40, 825+5-490+95+67*2-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[2].text = permanent_actions_long_name[2];
		permanent_cost_title[2].setOrigin(0,0);

		permanent_cost_title[3] =  this.add.text(22+40, 825+5-490+93+67*3-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[3].text = permanent_actions_long_name[3];
		permanent_cost_title[3].setOrigin(0,0);

		permanent_cost_title[4] =  this.add.text(22+40, 825+5-490+88+67*4-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[4].text = permanent_actions_long_name[4];
		permanent_cost_title[4].setOrigin(0,0);

		permanent_cost_title[5] =  this.add.text(22+40, 825+5-490+88+67*5-30+15+5, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});	
		permanent_cost_title[5].text = permanent_actions_long_name[5];
		permanent_cost_title[5].setOrigin(0,0);


		var diplomacy_graphic = this.add.image(15+315-10, 55, card_graphics_array[5]);
		diplomacy_graphic.scale = 1;
		diplomacy_graphic.setOrigin(0,0);
		
		diplomacy_point_text = this.add.text(15+35+5+315-10, 60, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		diplomacy_point_text.text = diplomacy_points+agent_name_text;
		diplomacy_point_text.setOrigin(0,0);

		var military_graphic = this.add.image(15+190+315-10, 55, card_graphics_array[24]);
		military_graphic.scale = 0.75;
		military_graphic.setOrigin(0,0);

		military_point_text = this.add.text(15+35+190+315-10, 60, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		military_point_text.text = military_points+carbon_text;
		military_point_text.setOrigin(0,0);

		var geoforming_icon = this.add.image(15+190+140+315-10, 55, card_graphics_array[25]);
		geoforming_icon.scale = 0.75;
		geoforming_icon.setOrigin(0,0);

		geoforming_point_text = this.add.text(15+190+140+35+315-10, 60, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		geoforming_point_text.text = geoforming_points+geoforming_text;
		geoforming_point_text.setOrigin(0,0);

		/*
		var temp_icon = this.add.image(15+190+140+200, 55, card_graphics_array[26]);
		temp_icon.scale = 0.75;
		temp_icon.setOrigin(0,0);
		temp_icon.depth = 90;	
		*/
		
		//temp_info_holder = new temp_info_box(this, 0, temp_change_value);
		//temp_info_holder.x = 17;
		//temp_info_holder.y = 55;
		//temp_info_holder.depth = 94;
		
		
		temperature_text = this.add.text(17+25, 60, 'Hello Phaser!', {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
		temperature_text.text = temp_change_value.toFixed(1)+temp_change_text;
		temperature_text.setOrigin(0,0);
		temperature_text.depth = 95;
		temperature_text.text = '';

		for(var u=0; u<56; u++)
		{
			agent_present[u] = 0;
			info_value[u] = 0;
			info_stealth[u] = 0;
			agent_char_1[u] = 0;
			agent_char_2[u] = 0;
	
		}

		
		update_menu_buttons(this);
	
		load_game();
		
		demo_completion_check();


		if(game_saved == 0)
		{
			pick_new_agents();	
			build_action_card_deck(this);
			map_maker(this);
			agent_init(this);
			menu_back_box_holder = new menu_back_box(this, 1);
		
		}		
		else if(game_saved == 1)
		{
			build_action_card_deck(this);
			map_maker(this);
			agent_init(this);
		
			diplomacy_point_text.text = diplomacy_points+agent_name_text;
			military_point_text.text = military_points+carbon_text;
			geoforming_point_text.text = geoforming_points+geoforming_text;

			yellow_police_choice = -1;		
				
			//if(turn < surviellence_start_threshold){police_graphic_update(0);}
			//else if(turn >= surviellence_start_threshold){police_graphic_update(1);}

			int_permanent_actions(this);


			new_card(-1,this);
			agent_update();
				
			phase = 0;
		
			
		}
		else if(demo_completed == 0 || demo_completed == 1)
		{
			pick_new_agents();	
			build_action_card_deck(this);
			map_maker(this);
			agent_init(this);
			menu_back_box_holder = new menu_back_box(this, 1);
		
		}		
		
		
		
		//new_deck();
		//new_card();
		preloader_text.text = "";

		//console.log(resource_1[0]);
		//console.log(resource_1[1]);	
		//console.log(resource_1[2]);	
		
				
	}

	
	function update()
	{
	}


//clicked
function clicked_message()
{
	//console.log('click: '+input.x+", "+input.y)
}

//destrou sprite
function destroySprite (sprite) {

    sprite.destroy();

}


//Make multi-demensial array
function make_mutli_dimension_array(rows) 
{
  var new_array = [];
    
  for (var i=0;i<rows;i++) {
     new_array[i] = [];
  }

  return new_array;    
    
}

function remove_duplicates(data)
{
	return data.filter((value,index) => data.indexOf(value) === index);	
}