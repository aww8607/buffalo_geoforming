class demo_container extends Phaser.GameObjects.Container
{
	constructor(scene, step_no, button_no, box_no) 
	{
		super(scene);
		this.scene = scene;


		var instruct_x = 0;
		var instruct_y = 0;
		var demo_instructions_text = "";
		var demo_next_step_text = "";

		var x_0_offset=0;
		var y_0_offset=-15;
		
		var x_90_offset = 15;
		var y_90_offset = 0;
		
		var x_180_offset = 0;
		var y_180_offset = 20;
		
		var x_270_offset = -15;
		var y_270_offset = 0;

		if(step == 1)
		{
			phase = 9;

			const arrow_1 = this.scene.add.image(165+x_90_offset, 75+y_90_offset, card_graphics_array[14]);
			arrow_1.setOrigin(0,0);
			arrow_1.angle = 90;
			arrow_1.setScale(0.5);
			this.add(arrow_1);			
			
			/*
			const arrow_2 = this.scene.add.image(0+x_90_offset, 0+y_90_offset, card_graphics_array[14]);
			arrow_2.setOrigin(0,0);
			arrow_2.angle = 90;
			arrow_2.setScale(0.5);
			this.add(arrow_2);

			const arrow_3 = this.scene.add.image(0+x_180_offset, 0+y_180_offset, card_graphics_array[14]);
			arrow_3.setOrigin(0,0);
			arrow_3.angle = 180;
			arrow_3.setScale(0.5);
			this.add(arrow_3);

			const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
			arrow_4.setOrigin(0,0);
			arrow_4.angle = 270;
			arrow_4.setScale(0.5);
			this.add(arrow_4);
			
			*/
			
			instruct_x = 50;
			instruct_y = 250;//+Math.floor(Math.random()*100);

			const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
			box.setOrigin(0,0);
			box.setScale(0.5);
			this.add(box);
			box.on('pointerdown', () => {this.clickMe(scene);});
			box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

			demo_instructions_text ="This is a worker placement and deck building game.  You win by keeping Earth's temperature change below one degree. You can see the current amount of temperature change on the button above the green arrow.  Press the button later to learn more about temperature change mechanics.";

			const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_instructions.setOrigin(0,0);
			demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
			demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
			this.add(demo_instructions);

			demo_next_step_text = "Click on this box to continue";
			const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_next_step.setOrigin(0,0);
			demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
			demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
			this.add(demo_next_step);


			step=step+1;
			
			this.scene.add.existing(this);
			this.depth = 95;
		
		
		}
		else if(step == 2)
		{
			phase = 9;

			const arrow_1 = this.scene.add.image(525+x_90_offset, 75+y_90_offset, card_graphics_array[14]);
			arrow_1.setOrigin(0,0);
			arrow_1.angle = 90;
			arrow_1.setScale(0.5);
			this.add(arrow_1);			
			
			/*
			const arrow_2 = this.scene.add.image(0+x_90_offset, 0+y_90_offset, card_graphics_array[14]);
			arrow_2.setOrigin(0,0);
			arrow_2.angle = 90;
			arrow_2.setScale(0.5);
			this.add(arrow_2);

			const arrow_3 = this.scene.add.image(0+x_180_offset, 0+y_180_offset, card_graphics_array[14]);
			arrow_3.setOrigin(0,0);
			arrow_3.angle = 180;
			arrow_3.setScale(0.5);
			this.add(arrow_3);

			const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
			arrow_4.setOrigin(0,0);
			arrow_4.angle = 270;
			arrow_4.setScale(0.5);
			this.add(arrow_4);
			
			*/
			
			instruct_x = 100;
			instruct_y = 165;//+Math.floor(Math.random()*100);

			const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
			box.setOrigin(0,0);
			box.setScale(0.5);
			this.add(box);
			box.on('pointerdown', () => {this.clickMe(scene);});
			box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

			demo_instructions_text ="Earth's temperature rises as more carbon dioxide is emmitted into the atmosphere.  Total atmospheric CO2 is tracked at the top of the screen next to the CO2 molecule icon, right above the green arrow.";

			const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_instructions.setOrigin(0,0);
			demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
			demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
			this.add(demo_instructions);

			demo_next_step_text = "Click on this box to continue";
			const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_next_step.setOrigin(0,0);
			demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
			demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
			this.add(demo_next_step);


			step=step+1;
			
			this.scene.add.existing(this);
			this.depth = 95;
		
		
		}
		else if(step == 3)
		{
			phase = 9;

			//const arrow_1 = this.scene.add.image(demo_agent_x[33]+x_270_offset+15, demo_agent_y[33]+y_270_offset+10, card_graphics_array[14]);
			const arrow_1 = this.scene.add.image(370+x_0_offset, 447+y_0_offset, card_graphics_array[14]);
			arrow_1.setOrigin(0,0);
			arrow_1.angle = 0;
			arrow_1.setScale(0.5);
			this.add(arrow_1);			
			
			
			const arrow_2 = this.scene.add.image(370+x_0_offset, 351+y_0_offset, card_graphics_array[14]);
			arrow_2.setOrigin(0,0);
			arrow_2.angle = 0;
			arrow_2.setScale(0.5);
			this.add(arrow_2);
			
			
			const arrow_3 = this.scene.add.image(370+x_0_offset, 255+y_0_offset, card_graphics_array[14]);
			arrow_3.setOrigin(0,0);
			arrow_3.angle = 0;
			arrow_3.setScale(0.5);
			this.add(arrow_3);

			

			const arrow_4 = this.scene.add.image(370+x_0_offset, 160+y_0_offset, card_graphics_array[14]);
			arrow_4.setOrigin(0,0);
			arrow_4.angle = 0;
			arrow_4.setScale(0.5);
			this.add(arrow_4);
			
			instruct_x = 100;
			instruct_y = 500;//+Math.floor(Math.random()*100);

			const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
			box.setOrigin(0,0);
			box.setScale(0.5);
			this.add(box);
			box.on('pointerdown', () => {this.clickMe(scene);});
			box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

			demo_instructions_text ="Each country, the brown boxes on the left, emmits a certain amount of CO2 each turn.  The number at the bottom of each brown box represents the amount of CO2 added to the CO2 total at the top of the screen each turn.";

			const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_instructions.setOrigin(0,0);
			demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
			demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
			this.add(demo_instructions);

			demo_next_step_text = "Click on this box to continue";
			const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
			demo_next_step.setOrigin(0,0);
			demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
			demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
			this.add(demo_next_step);


			step=step+1;
			
			this.scene.add.existing(this);
			this.depth = 95;
		
		
		}
		else if(step == 4)
		{

			if(button_no==3)
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(370+x_90_offset, 80+y_90_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 90;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(0+x_90_offset, 0+y_90_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 90;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				const arrow_3 = this.scene.add.image(0+x_180_offset, 0+y_180_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 180;
				arrow_3.setScale(0.5);
				this.add(arrow_3);

				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 50;
				instruct_y = 300;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Good job!  You just added another Activist to your Activist point total.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;
				
			}
			else
			{

				phase = 9;

				const arrow_1 = this.scene.add.image(285+x_0_offset, 385+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				const arrow_2 = this.scene.add.image(730+x_0_offset, 143+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				/*
				const arrow_3 = this.scene.add.image(0+x_180_offset, 0+y_180_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 180;
				arrow_3.setScale(0.5);
				this.add(arrow_3);

				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 100;
				instruct_y = 430;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Every turn a new action card is drawn, and its action takes effect at the end of the turn.  This card will add one Activist to your Activist total for green Capability Boxes with two Activistes.  You have one box that meets this criteria.  Press the PASS button to continue.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on the PASS button to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				//step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;
				
				
			}
		
		
		}
		else if(step == 5)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(155+x_0_offset, 460+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				const arrow_2 = this.scene.add.image(155+x_0_offset, 530+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				const arrow_3 = this.scene.add.image(155+x_0_offset, 595+y_0_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			


				
				const arrow_4 = this.scene.add.image(285+x_0_offset, 385+y_0_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				
				
				instruct_x = 50;
				instruct_y = 130;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Each turn, you can choose to play one of the actions in the bottom right corner of the screen.  You can also press PASS if none of the actions work.  You move on to the next turn, and the action card’s action takes effect.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 610, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
		}
		else if(step == 6)
		{
			if(button_no==5)
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(360+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 270;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				const arrow_2 = this.scene.add.image(505+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 270;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				
				const arrow_3 = this.scene.add.image(580+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 270;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				
				const arrow_4 = this.scene.add.image(655+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				
				
				instruct_x = 200;
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Placing Activists in the boxes next to a brown Country box allows you to take control of that country, and gain access to the Country's two resources. Right now, you have Activists in three of the Country's boxes.  You need Activists in four boxes to take control.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		

			}
			else
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(155+x_0_offset, 460+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(155+x_0_offset, 540+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				const arrow_3 = this.scene.add.image(290+x_0_offset, 347+y_0_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 100;
				instruct_y = 200;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Let's place an Activist in a Capability box.  Go ahead and press the PLACE button.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click the PLACE button to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				//step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
			}
		}
		else if(step == 7)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(430+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 270;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(155+x_0_offset, 540+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				const arrow_3 = this.scene.add.image(290+x_0_offset, 347+y_0_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 200;
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Let's place an agent in the Yellow Political Party Capability box by clicking on the box.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click the yellow box below the arrow";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;			
		}
		else if(step == 8)
		{
			if(box_no == 15)
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(330+x_180_offset, 300+y_180_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 180;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				
				const arrow_2 = this.scene.add.image(390+x_0_offset, 300+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				/*
				const arrow_3 = this.scene.add.image(580+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 270;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				
				const arrow_4 = this.scene.add.image(655+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 100;
				instruct_y = 420;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Good Job!  You now control the USA country box, and you can use its Alliance and Space Program resources.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
				
			}
			else
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(430+x_270_offset, 300+y_270_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 270;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(155+x_0_offset, 540+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);

				const arrow_3 = this.scene.add.image(290+x_0_offset, 347+y_0_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 200;
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Let's place an agent in the Yellow Political Party Capability box by clicking on the box.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click the yellow box below the arrow";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				//step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
			}
		}
		else if(step == 9)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(100+x_90_offset+10, 643+y_90_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 90;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				const arrow_2 = this.scene.add.image(186+x_90_offset+10, 683+y_90_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 90;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			
				
				
				const arrow_3 = this.scene.add.image(240+x_90_offset, 683+y_90_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 90;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				
				const arrow_4 = this.scene.add.image(286+x_90_offset, 683+y_90_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 90;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				
				instruct_x = 50;
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Some actions, such as Remove Card From Deck, require Country box resources.  You currently cannot use this action because you only have one of the three required resources.";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to continue";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
		}
		else if(step == 10)
		{
				phase = 9;
				
				

				const arrow_1 = this.scene.add.image(90+x_90_offset, 35+y_90_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 90;
				arrow_1.setScale(0.5);
				this.add(arrow_1);

				const arrow_2 = this.scene.add.image(240+x_90_offset, 85+y_90_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			

				
				const arrow_3 = this.scene.add.image(45+x_0_offset, 563+y_0_offset, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			
				
				
				const arrow_4 = this.scene.add.image(45+x_0_offset, 630+y_0_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);			
				
								
				instruct_x = 225;
				instruct_y = 275;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="That is how you play the game.  If you get stuck, there are always instructions at the top of the screen.  You can also click on the KEY button or the i buttons for help and explanation.  Good luck!";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on this box to end the demo";
				const demo_next_step = this.scene.add.text(instruct_x+20, instruct_y+145, demo_next_step_text, { fontSize: 'bold 24px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_next_step.setOrigin(0,0);
				demo_next_step.on('pointerdown', () => {this.clickMe(scene);});
				demo_next_step.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});		
				this.add(demo_next_step);


				step=step+1;
				
				this.scene.add.existing(this);
				this.depth = 95;		
		}
		else if(step == 11)
		{
			step = -1;
			phase = 0;
			demo_completed = 1;
			
		}	


	}
	
	clickMe(scene)
	{
		this.alpha = 0.3;	
	}
	
	unclickMe(scene, step_no, button_no, box_no)
	{
		this.alpha = 1;
		demo_update(scene, step_no, button_no, box_no);
	}
	
	
}

