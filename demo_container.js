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

			const arrow_1 = this.scene.add.image(700+x_90_offset, 75+y_90_offset, card_graphics_array[14]);
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

			demo_instructions_text ="This is a worker placement and deck building game.  You win by scoring victory points, which you can see above the green arrow";

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

			const arrow_1 = this.scene.add.image(290+x_0_offset, 200+y_0_offset, card_graphics_array[14]);
			arrow_1.setOrigin(0,0);
			arrow_1.angle = 0;
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
			instruct_y = 400;//+Math.floor(Math.random()*100);

			const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
			box.setOrigin(0,0);
			box.setScale(0.5);
			this.add(box);
			box.on('pointerdown', () => {this.clickMe(scene);});
			box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

			demo_instructions_text ="You can score victory points when a card that generates victory points appears at the top of your deck.  The current card happens to do this.  Unless otherwise noted on the card, the card’s effect will happen after you chose an action to play";

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

			const arrow_1 = this.scene.add.image(demo_agent_x[33]+x_270_offset+15, demo_agent_y[33]+y_270_offset+10, card_graphics_array[14]);
			arrow_1.setOrigin(0,0);
			arrow_1.angle = 270;
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
			instruct_y = 550;//+Math.floor(Math.random()*100);

			const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
			box.setOrigin(0,0);
			box.setScale(0.5);
			this.add(box);
			box.on('pointerdown', () => {this.clickMe(scene);});
			box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

			demo_instructions_text ="To score victory points with this card, you need to have an agent in a green / intelligence box with six or more information points.  You can see that you happen to have just such an agent below the green arrow.   The number in the upper left corner of the agent marker is its information value";

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

				const arrow_1 = this.scene.add.image(700+x_90_offset, 75+y_90_offset, card_graphics_array[14]);
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

				demo_instructions_text ="You just gained a victory point!";

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

				const arrow_1 = this.scene.add.image(290+x_0_offset, 347+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(290+x_0_offset, 400+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
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
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Press the pass button on the card to let the card’s action take effect and move on to the next turn";

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

				const arrow_1 = this.scene.add.image(155+x_0_offset, 445+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
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


				/*
				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 50;
				instruct_y = 125;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Every turn, you play one action by pressing a PLAY button on the lower left-hand corner of the screen.  You can also press the PASS button if you do not want to execute any of the actions.  REMEMBER: the action of the card in the upper left-hand corner will occur automatically";

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
		else if(step == 6)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(100+x_270_offset, 785+y_270_offset, card_graphics_array[14]);
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
				
				instruct_x = 100;
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Unfortunately, you cannot play the Pick Next Card action";

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
		else if(step == 7)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(185+x_270_offset, 805+y_270_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 270;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				
				const arrow_2 = this.scene.add.image(230+x_270_offset, 805+y_270_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 270;
				arrow_2.setScale(0.5);
				this.add(arrow_2);
				
				/*
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
				
				instruct_x = 50;
				instruct_y = 450;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="You cannot play this action because you lack agents in the proper boxes with the proper information level.  In this case, you need an agent with an information level of 6 or higher in an orange law enforcement box";

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
		else if(step == 8)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(demo_agent_x[6]+x_180_offset+10, demo_agent_y[6]+y_180_offset+13, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 180;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(demo_agent_x[28]+x_180_offset+10, demo_agent_y[28]+y_180_offset+13, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 180;
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
				
				instruct_x = 50;
				instruct_y = 250;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="You actually have an agent in an orange law enforcement box with an information level of 5, so you are close to being able to play the Pick Next Card action";

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
		else if(step == 9)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(90+x_90_offset, 550+y_90_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 90;
				arrow_1.setScale(0.5);
				this.add(arrow_1);

				const arrow_2 = this.scene.add.image(demo_agent_x[33]+x_0_offset+50, demo_agent_y[33]+y_0_offset+11, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			

				const arrow_3 = this.scene.add.image(demo_agent_x[37]+x_0_offset+50, demo_agent_y[37]+y_0_offset+11, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			

				const arrow_4 = this.scene.add.image(demo_agent_x[44]+x_0_offset+50, demo_agent_y[44]+y_0_offset+11, card_graphics_array[14]);
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

				demo_instructions_text ="You can increase the information level of this agent by playing the Increase Info Level action.  When you do, the current card will also take effect.  In this case, your three agents in green intelligence boxes will each lose a stealth point";

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
			if(button_no==6)
			{
				phase = 9;

				const arrow_2 = this.scene.add.image(demo_agent_x[33]+x_0_offset+50, demo_agent_y[33]+y_0_offset+11, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			

				const arrow_3 = this.scene.add.image(demo_agent_x[37]+x_0_offset+50, demo_agent_y[37]+y_0_offset+11, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			

				const arrow_4 = this.scene.add.image(demo_agent_x[44]+x_0_offset+50, demo_agent_y[44]+y_0_offset+11, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);			
				
				/*
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

				demo_instructions_text ="Bad news first: each agent in a green intelligence box lost a stealth point";

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

				const arrow_1 = this.scene.add.image(155+x_0_offset, 540+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);
				
				/*
				const arrow_2 = this.scene.add.image(290+x_0_offset, 400+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
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
				instruct_y = 600;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Go ahead and press the PLAY button for the Increase Info Level action";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on the PLAY button to continue";
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
		else if(step == 11)
		{
			
			
			if(box_no==6)
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(100+x_270_offset, 805+y_270_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 270;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			

				/*
				const arrow_3 = this.scene.add.image(demo_agent_x[37]+x_0_offset+50, demo_agent_y[37]+y_0_offset+11, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			

				const arrow_4 = this.scene.add.image(demo_agent_x[44]+x_0_offset+50, demo_agent_y[44]+y_0_offset+11, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);			
				
				
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

				demo_instructions_text ="Now the good news: the Pick Next Card action is now playable.  You have agents with the right information levels in the right boxes";

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

				const arrow_1 = this.scene.add.image(demo_agent_x[6]+x_180_offset+10, demo_agent_y[6]+y_180_offset+13, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 180;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			
				
				/*
				const arrow_2 = this.scene.add.image(290+x_0_offset, 400+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
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

				demo_instructions_text ="Go ahead and click on the agent in the orange law enforcement box next to the green arrow.  This will increase the agent's information level by 1";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Click on the agent to continue";
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
		else if(step == 12)
		{
				phase = 9;

				const arrow_1 = this.scene.add.image(demo_agent_x[3]+x_180_offset-5, demo_agent_y[3]+y_180_offset+60, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 180;
				arrow_1.setScale(0.5);
				this.add(arrow_1);

				/*
				const arrow_2 = this.scene.add.image(demo_agent_x[33]+x_0_offset+50, demo_agent_y[33]+y_0_offset+11, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			

				const arrow_3 = this.scene.add.image(demo_agent_x[37]+x_0_offset+50, demo_agent_y[37]+y_0_offset+11, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			

				const arrow_4 = this.scene.add.image(demo_agent_x[44]+x_0_offset+50, demo_agent_y[44]+y_0_offset+11, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);			
				*/
								
				instruct_x = 200;
				instruct_y = 325;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="You can also score victory points if you have an agent in a box with a VP value at the end of the game.  The box next to the green arrow will get you 2 VP...if you can place an agent in it, and prevent the agent from being captured until the end of the game!";

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
		else if(step == 13)
		{
			
			if(button_no==3)
			{
				phase = 9;

				const arrow_1 = this.scene.add.image(700+x_90_offset, 75+y_90_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 90;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			

				const arrow_2 = this.scene.add.image(demo_agent_x[33]+x_270_offset+15, demo_agent_y[33]+y_270_offset+10, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 270;
				arrow_2.setScale(0.5);
				this.add(arrow_2);			

				/*
				const arrow_3 = this.scene.add.image(demo_agent_x[37]+x_0_offset+50, demo_agent_y[37]+y_0_offset+11, card_graphics_array[14]);
				arrow_3.setOrigin(0,0);
				arrow_3.angle = 0;
				arrow_3.setScale(0.5);
				this.add(arrow_3);			

				const arrow_4 = this.scene.add.image(demo_agent_x[44]+x_0_offset+50, demo_agent_y[44]+y_0_offset+11, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 0;
				arrow_4.setScale(0.5);
				this.add(arrow_4);			
				
				
				const arrow_4 = this.scene.add.image(0+x_270_offset, 0+y_270_offset, card_graphics_array[14]);
				arrow_4.setOrigin(0,0);
				arrow_4.angle = 270;
				arrow_4.setScale(0.5);
				this.add(arrow_4);
				
				*/
				
				instruct_x = 100;
				instruct_y = 600;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Looks like the stealth value of one of your agent's reached zero!  When this happens, the agent is removed from the board, and the agent's information value is subtracted from your VP total.  You are now ready to play the game.  Good Luck!";

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


				step=0;//step+1;
				demo_completed = 1;
				save_game();
				
				this.scene.add.existing(this);
				this.depth = 96;
				
			}
			else
			{

				phase = 9;

				const arrow_1 = this.scene.add.image(290+x_0_offset, 347+y_0_offset, card_graphics_array[14]);
				arrow_1.setOrigin(0,0);
				arrow_1.angle = 0;
				arrow_1.setScale(0.5);
				this.add(arrow_1);			

	
				
				/*
				const arrow_2 = this.scene.add.image(290+x_0_offset, 400+y_0_offset, card_graphics_array[14]);
				arrow_2.setOrigin(0,0);
				arrow_2.angle = 0;
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
				instruct_y = 400;//+Math.floor(Math.random()*100);

				const box = this.scene.add.image(instruct_x, instruct_y, card_graphics_array[15]).setInteractive();
				box.setOrigin(0,0);
				box.setScale(0.5);
				this.add(box);
				box.on('pointerdown', () => {this.clickMe(scene);});
				box.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});

				demo_instructions_text ="Go ahead and press the pass button on the new card to proceed";

				const demo_instructions = this.scene.add.text(instruct_x+20, instruct_y+20, demo_instructions_text, { fontSize: '18px', color: '#000000', wordWrap: { width: 620, useAdvancedWrap: true}}).setInteractive();
				demo_instructions.setOrigin(0,0);
				demo_instructions.on('pointerdown', () => {this.clickMe(scene);});
				demo_instructions.on('pointerup', () => {this.unclickMe(scene, step_no, button_no, box_no);});
				this.add(demo_instructions);

				demo_next_step_text = "Press the PASS button";
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

