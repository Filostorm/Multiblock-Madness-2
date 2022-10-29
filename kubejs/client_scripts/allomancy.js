onEvent('item.tooltip', tooltip => {
var allomanticMetals = {	
		iron:'Iron allows you to Pull on metals. For items and other small entities, this means pulling them toward you. For blocks and large metallic entities, this means you move toward them.',
		steel:'Steel allows you to Push on metals. This means moving metal items away from you, or pushing yourself off of metal blocks. This can be used as a sort of rudimentary flight, though it is more falling with style than anything else. Steel also allows you to use the Coin Bag item. If you have gold nuggets in your inventory and are burning steel, you can use this as a ranged weapon similar to the old Beta-edition Bow. Iron nuggets can also be used, causing more damage but far less accurately.',
		tin:'Tin gives you Night Vision, and allows you to see which direction sounds come from using an indicator particle. This particle is also colored according to the hostility of the sound source. Friendly mobs are green, hostile mobs are red.',
		pewter:'Pewter grants increased speed, jump height, damage, and damage resistance to the player. Be careful, though - Any damage incurred while burning pewter is remembered, and if you stop burning it at the wrong time you could end up being killed by all the built up damage.',
		zinc:'Zinc allows you to Riot the emotions of mobs, making them hostile. This means they will attack anything nearby. Even farm animals can be a threat.',
		brass:'Brass allows you to Soothe the emotions of mobs, making them passive, even fearful. Creepers are your buddies!',
		copper:'Copper hides your Allomancy from detection. When you are burning copper, yourself and other allomancers nearby are cloaked from the senses of a Bronze burner. However, your own ability to use Bronze is nullified when burning Copper',
		bronze:'Bronze allows you to detect the Allomancy of other players, in much the same way Iron or Steel detects metal or Tin indicates sounds.',
		aluminum:'Aluminum is a purifying metal - it removes all metals from your current stock. This may seem useless, but it also removes all potion effects - not a bad trade to remove some Wither or Poison before it kills you.',
		duralumin:'Duralumin enhances whatever other metal you are using. This may mean pushing harder with steel, speeding things up even more with Bendalloy, or even teleporting to special locations with Gold and Electrum. If this metal burns out (which it does quickly!) or is extinguished, it empties all other burning metals of their stock.',
		chromium:'Chromium removes all metals from the stock of players you click on, while also removing all potion effects from them.',
		nicrosil:'Nicrosil enhances whatever metal the player you left click on is burning. When you stop enhancing them, they will lose their stock of the currently burning metal.',
		gold:'Gold lets you see into your "past" by showing you the location you most recently died in this dimension.',
		electrum:'Electrum lets you see your "future", showing you the location of your current spawn point.',
		cadmium:'Cadmium slows down the mobs in the area around you.',
		bendalloy:'Bendalloy speeds up everything in a bubble around you. Furnaces, crops, and mobs all go faster!',
		//'allomancy:lead_flakes':
		//'allomancy:silver_flakes':
	}
	

	// Add tooltip to all of these itemsonEvent('item.registry', event => {
for (var metal in allomanticMetals) {
	console.log(`${metal} is allomantic`);
	console.log(allomanticMetals[metal]);
		tooltip.add(`allomancy:${metal}_flakes`, allomanticMetals[metal])
		
	}
});