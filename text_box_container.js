class text_box_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, title_text, message_text, box_width, box_height) 
	{
		super(scene);
		this.scene = scene;


		var back_box_border = this.scene.add.rectangle(-1, -1, box_width+2, box_height+2, 0x000000);
		back_box_border.setOrigin(0,0);
		this.add(back_box_border);


		var top_button = this.scene.add.rectangle(0, 0, box_width, box_height, 0xFFFF00);
		top_button.setOrigin(0,0);
		this.add(top_button);
		
		if(message_text != '')
		{
			var detail_box = this.scene.add.rectangle(10, 40, box_width-20, box_height-50, 0xcccccc);
			detail_box.setOrigin(0,0);
			this.add(detail_box);
		}
		
		var title_text_box = this.scene.add.text(10, 10, title_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: box_width-20, useAdvancedWrap: true}});
		title_text_box.setOrigin(0,0);
		//title_text_box.x = 850 - 137 - 5 + (button_width - title_text.width)/2;
		//title_text_box.y = 850 - 20+5;
		this.add(title_text_box);				

		if(message_text != '')
		{
			var body_text_box = this.scene.add.text(20, 50, message_text, { fontSize: 'bold 18px', color: '#000000', wordWrap: { width: box_width-30, useAdvancedWrap: true}});
			body_text_box.setOrigin(0,0);
			//title_text_box.x = 850 - 137 - 5 + (button_width - title_text.width)/2;
			//title_text_box.y = 850 - 20+5;
			this.add(body_text_box);				
		}
		
		
		//var down_arrow = this.scene.add.triangle(25+152*(location_no%5),180+250,0,0,100,0,50,200,0xFFFF00,1);
		//down_arrow.setOrigin(0,0);
		
		
		//down_arrow.scale = 0.40;//*Math.floor(location_no/5);
		
		//if(Math.floor(location_no/5) == 1)
		//{
		//	down_arrow.scale = 1.0;	
		//}
		//else if(Math.floor(location_no/5) == 2)
		//{
		//	down_arrow.scale = 1.61;
		//}
		
		//this.add(down_arrow);
		//var down_arrow = this.scene.add.image(25+152*location_no, 180+250, card_graphics_array[38]);
		//down_arrow.setOrigin(0,0);
		//down_arrow.scale = 0.55;
		//this.add(down_arrow);	
		
		
	

		
		

		this.scene.add.existing(this);
		
    }

	clickMe(scene, b_no)
    {
    	
    }
	
	unclickMe(scene, b_no, loc_no)
	{
		
		//console.log("button no: "+b_no+" location number: "+loc_no);
		//var click_x = input.x;
		//var click_y = input.y;

		
		//unit_selection=Math.floor((click_x-5)/109);//Math.floor(Math.random()*8);//unit_position;
		//console.log('Picked a ship: '+unit_selection);
		//update_units(scene);
	
	}
}	
