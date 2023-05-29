function remove_card(card_number)
{
	
	//if(in_deck.includes(card_number) == true)
	if(card_number < in_deck.length)
	{
		//console.log("removed: "+card_number);
		in_deck[card_number] = -1;	
	}

}