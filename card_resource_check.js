function card_resource_check(card_no)
{
	//console.log(" card number: "+card_no)
	var active_resource_count = [];
	var required_resources_count = [];
	var fail_test = 0;
	var return_value = 0;
	
	political_control_check();
	
	//political_control_check[0] = 1;	
	//political_control_check[1] = 1;
	//political_control_check[2] = 1;
	//political_control_check[3] = 1;	
	//political_control_check[4] = 1;
	//political_control_check[5] = 1;
	//political_control_check[6] = 1;
	//political_control_check[7] = 1;
	
	for(var r =0; r< 8; r++)
	{
		active_resource_count[r] =0;	
	}
	
	for(var w = 0; w<7; w++)
	{
		required_resources_count[w] = 0;
	}
	
	
	for(var y=0; y < 8; y++)
	{
		if(political_control_check[y]>0)
		{
			active_resource_count[resource_1[y]] = active_resource_count[resource_1[y]] + 1;
			active_resource_count[resource_2[y]] = active_resource_count[resource_2[y]] + 1;
		}
	}
	
	if(action_var_2[card_no] > 0 && card_type[card_no] == 8)
	{
		required_resources_count[action_var_2[card_no]] = required_resources_count[action_var_2[card_no]] + 1; 
	}
	
	if(action_var_3[card_no] > 0)
	{
		required_resources_count[action_var_3[card_no]] = required_resources_count[action_var_3[card_no]] + 1; 
	}
	
	if(action_var_4[card_no] > 0)
	{
		required_resources_count[action_var_4[card_no]] = required_resources_count[action_var_4[card_no]] + 1; 
	}
	
	fail_test=0;
	
	for(var w = 0; w<7; w++)
	{
		if(active_resource_count[w]<required_resources_count[w])
		{
			fail_test =1;		
		}
	}
		
	if(fail_test == 0)
	{
		
		return_value = 1;
		//console.log('pass');	
	}
	else
	{
		//console.log('fail');
		return_value = 0;	
	}
	
	return return_value;
}