function new_yellow_block_category_number(current_number)
{
	var random_choice = -1;
	var iteration = 0;
	var found_choice = 0;
	
	while(found_choice == 0 || iteration < 5000)
	{
		random_choice = Math.floor(Math.random()*6);
		if(random_choice != current_number)
		{
			yellow_police_choice = 	random_choice;
			found_choice = 1;
		}
		
		iteration=iteration+1;
	}


}