class perm_action_cost_icons extends Phaser.GameObjects.Container{
	
	constructor(scene, used, meta_type, cost_type, cost_value) 
	{
		super(scene);
		this.scene = scene;

		var carbon_increase_modifier_text = '+'

		if(used==1)
		{

			if(meta_type == 0)
			{
				var cost_a_map_graphic_back = new map_container(scene, cost_type, 80, 80);
				cost_a_map_graphic_back.x=0;//120-5-15;
				cost_a_map_graphic_back.y=0;//5+35+60+175-5-5;
				cost_a_map_graphic_back.scale = 0.45;
				this.add(cost_a_map_graphic_back);


				var cost_a_graphic_back = new code_box_container(scene,-2);
				cost_a_graphic_back.x=5;//120-15;
				cost_a_graphic_back.y=5; //5+35+60+175-5;
				this.add(cost_a_graphic_back);

					
				var cost_a_graphic_number = scene.add.text(15, 15, cost_value, {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 10;//125-15;
				cost_a_graphic_number.y = 5; //5+35+60+175-5+1;
				this.add(cost_a_graphic_number);
			}
			else if(meta_type == 1)
			{
				
				var cost_a_map_graphic_back = scene.add.image(330, 60, card_graphics_array[5]);
				cost_a_map_graphic_back.x=22;//120-5-15;
				cost_a_map_graphic_back.y=22;//5+35+60+175-5-5;
				//cost_a_map_graphic_back.scale = 0.45;
				
				this.add(cost_a_map_graphic_back);
				
				
				var cost_a_graphic_number = scene.add.text(15, 15, cost_value, {fontSize: 'bold 18px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 0;//125-15;
				cost_a_graphic_number.y = 2; //5+35+60+175-5+1;
				this.add(cost_a_graphic_number);
				
			}
			else if(meta_type == 2)
			{
				var cost_a_graphic_number = scene.add.text(0, 0, carbon_increase_modifier_text+cost_value, {fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 850, useAdvancedWrap: true}});
				cost_a_graphic_number.x = 0;//125-15;
				cost_a_graphic_number.y = 12; //5+35+60+175-5+1;
				this.add(cost_a_graphic_number);
					
				var cost_a_map_graphic_back = scene.add.image(330, 60, card_graphics_array[24]);
				cost_a_map_graphic_back.scale = 0.75;
				cost_a_map_graphic_back.x=19+45;//120-5-15;
				cost_a_map_graphic_back.y=22;//5+35+60+175-5-5;
				//cost_a_map_graphic_back.scale = 0.45;
				
				this.add(cost_a_map_graphic_back);
				
			}
			else if(meta_type == 3)
			{
				var cost_a_map_graphic_back = scene.add.image(330, 60, card_graphics_array[19+cost_type]);
				cost_a_map_graphic_back.x=22;//120-5-15;
				cost_a_map_graphic_back.y=22;//5+35+60+175-5-5;
				//cost_a_map_graphic_back.scale = 0.45;
				
				this.add(cost_a_map_graphic_back);
				
			}
			
		}
		else
		{
			
		}

		this.depth = 95;
		this.scene.add.existing(this);

		
	}
	
}