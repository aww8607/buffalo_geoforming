function temp_change_calc(scene)
{
	var new_carbon_value = 0;
	
	for(var t = 0; t<carbon_level.length; t++)
	{
		new_carbon_value = new_carbon_value +  carbon_level[t];	
	}

	military_points = military_points + new_carbon_value;
	
	temp_change_value = military_points / (carbon_denominator_constant + geoforming_points * geoforming_multiplier);
	
	military_point_text.text = military_points+carbon_text;

	//temp_change_value = 20.2;
	
	//temperature_text.text = temp_change_value.toFixed(1)+temp_change_text;

	
	if(temp_info_holder != null){destroySprite(temp_info_holder); temp_info_holder=null;}	

	temp_info_holder = new temp_info_box(scene, 0, temp_change_value);
	temp_info_holder.x = 17;
	temp_info_holder.y = 55;
	//temp_info_holder.depth = 94;

	
	//console.log("CO2: "+military_points);
}