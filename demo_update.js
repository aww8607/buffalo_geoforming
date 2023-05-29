function demo_update(scene, step_no, button_no, box_no)
{
	if(demo_holder != null){destroySprite(demo_holder); demo_holder = null;}
	
	if(step_no >0 &&  demo_holder == null)
	{
		demo_holder = new demo_container(scene, step_no, button_no, box_no);		
	}
}
