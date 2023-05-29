class code_box_container extends Phaser.GameObjects.Container 
{
    
	constructor(scene, code_no) 
	{
		
		super(scene);
		this.scene = scene;
		
		//map_colors_array[n]
		var code_box_color_array = [];
		var code_box_text_color = [];
		
		code_box_color_array[0] = 0xffCC00; 
		code_box_color_array[1] = 0x99CCFF; //0xff9999 0xffCC00
		code_box_color_array[2] = 0xffCC00; 
		code_box_color_array[3] = 0xCC00CC; //0x0066FF 
		code_box_color_array[4]	= 0x33CC66;	
		code_box_color_array[5]	= 0x666666; 		
		code_box_color_array[6]	= 0x666666;
		code_box_color_array[7]	= 0x339900;
		code_box_color_array[8]	= 0x999900;
		code_box_color_array[9]	= 0x990000;
		code_box_color_array[10] = 0x000099;
		code_box_color_array[11] = 0xFFFF00;
		code_box_color_array[12] = 0x000000;

		code_box_text_color[0]="#000000";	
		code_box_text_color[1]="#000000";
		code_box_text_color[2]="#000000";
		code_box_text_color[3]="#FFFFFF";
		code_box_text_color[4]="#000000";
		code_box_text_color[5]="#FFFFFF";
		code_box_text_color[6]="#FFFFFF";
		code_box_text_color[7]="#FFFFFF";
		code_box_text_color[8]="#FFFFFF";
		code_box_text_color[9]="#FFFFFF";
		code_box_text_color[10]="#FFFFFF";
		code_box_text_color[11]="#000000";
		code_box_text_color[12]="#FFFFFF";

		
		var map_box_width = 25;
		var map_box_hight = 25;

		//console.log("code_no: "+code_no);

		if(code_no>-1)
		{
			var border_box = this.scene.add.rectangle(-2, -2, map_box_width+4, map_box_hight+4, code_box_color_array[12]);
			border_box.setOrigin(0,0);
			this.add(border_box);

		
			var back_box = this.scene.add.rectangle(0, 0, map_box_width, map_box_hight, code_box_color_array[code_no]);
			back_box.setOrigin(0,0);
			this.add(back_box);
			
			var title_text = this.scene.add.text(0, 5, code_letter[code_no], { fontSize: 'bold 18px', color: code_box_text_color[code_no], wordWrap: { width: 140, useAdvancedWrap: true}});
			title_text.setOrigin(0,0);
			title_text.x = (map_box_width - title_text.width)/2;
			//title_text.y = (map_box_hight - title_text.h)/2;

			this.add(title_text);				
			
			
			


		}
		else if(code_no==-1)
		{
			var back_box = this.scene.add.rectangle(0, 0, map_box_width, map_box_hight, 0x000000);
			back_box.setOrigin(0,0);
			this.add(back_box);
			
		}
		else if(code_no==-2)
		{
			var back_box = this.scene.add.rectangle(0, 0, map_box_width, map_box_hight, 0xEFE4B0);
			back_box.setOrigin(0,0);
			this.add(back_box);
			
		}
		
		
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
