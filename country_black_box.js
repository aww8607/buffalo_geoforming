class country_black_box extends Phaser.GameObjects.Container 
{
    
	constructor(scene, map_no, x_dim, y_dim) 
	{
		

		
		super(scene);
		this.scene = scene;
		
		//map_colors_array[n]
		var code_box_color_array = [];
		
		code_box_color_array[0] = 0xffCC00; //Law Enforcement
		code_box_color_array[1] = 0xff9999; //Politics
		code_box_color_array[2] = 0x99CCFF; //Defense
		code_box_color_array[3] = 0x0066FF; //Underworld
		code_box_color_array[4]	= 0x33CC66;	//Press
		code_box_color_array[5]	= 0xCC00CC; //Technology
		
		code_box_color_array[6]	= 0x000000; //Black back
		code_box_color_array[7]	= 0xEFE4B0; //Beige back
		code_box_color_array[8]	= 0x999900;
		code_box_color_array[9]	= 0x990000;
		code_box_color_array[10] = 0x000099;
		code_box_color_array[11] = 0xFFFF00;
		code_box_color_array[12] = 0xCCCCCC;
		code_box_color_array[13] = 0xCC9933;

		
		var map_box_width = x_dim;//70;
		var map_box_hight = y_dim;//90;
		
		var back_box = this.scene.add.rectangle(0, 0, map_box_width, map_box_hight, code_box_color_array[map_no]);
		back_box.setOrigin(0,0);
		this.add(back_box);
		
		this.scene.add.existing(this);
		
    }

	clickMe(scene, b_no)
    {
    	
    }
	
	unclickMe(scene, b_no, loc_no)
	{
		
		if(b_no == 0)
		{
		  //console.log("Menu");	
		}
		else if(b_no == 1)
		{
		  //console.log("Key");	
		}
		
	}
}	
