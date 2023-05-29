function political_control_check()
{
	for(var y=0; y<8; y++)
	{
		political_control_check[y]=0;
		control_level[y]=0;	
	}
	
	for(var b=0; b<56; b++)
	{
		if(agent_present[b]==1 && info_value[b]>0)
		{
			control_level[Math.floor(b/7,0)]=control_level[Math.floor(b/7,0)]+1;
		}
				
	}

	for(var h=0; h<8; h++)
	{
		if(control_level[h] >= control_threshold[h])
		{
			political_control_check[h]=1;	
		}
	}
}