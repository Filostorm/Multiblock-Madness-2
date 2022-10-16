

var tier1Alloys = [
	{
	  'material': 'bronze',
	  'amount': 4,
	  'dust_input': ['3x #forge:dusts/copper','#forge:dusts/tin'],
	  'ingot_input': ['3x #forge:ingots/copper','#forge:ingots/tin'],
	},
	{
	  'material': 'constantan',
	  'amount': 2,
	  'dust_input': ['#forge:dusts/copper','#forge:dusts/nickel'],
	  'ingot_input': ['#forge:ingots/copper','#forge:ingots/nickel'],
	},
	{
	  'material': 'electrum',
	  'amount': 2,
	  'dust_input': ['#forge:dusts/gold','#forge:dusts/silver'],
	  'ingot_input': ['#forge:ingots/gold','#forge:ingots/silver'],
	},
	{
	  'material': 'invar',
	  'amount': 3,
	  'dust_input': ['2x #forge:dusts/iron','#forge:dusts/nickel'],
	  'ingot_input': ['2x #forge:ingots/iron','#forge:ingots/nickel'],
	},
	{
	  'material': 'brass',
	  'amount': 3,
	  'dust_input': ['2x #forge:dusts/copper','#forge:dusts/zinc'],
	  'ingot_input': ['2x #forge:ingots/copper','#forge:ingots/zinc'],
	},
	{
	  'material': 'red_alloy',
	  'amount': 2,
	  'dust_input': ['#forge:dusts/copper','3x #forge:dusts/redstone'],
	  'ingot_input': ['#forge:ingots/copper','3x #forge:dusts/redstone'],
	},
]


onEvent('tags.items', event => {
	tier1Alloys.forEach((item) => {
		event.add(`mbm2:tier_one_alloy`, `#forge:ingots/${item.material}`)
		event.add(`mbm2:tier_one_alloy_dust`, `#forge:dusts/${item.material}`)
		event.add(`mbm2:tier_one_alloy_plate`, `#forge:plates/${item.material}`)
	})
});

onEvent('recipes', event => {

	tier1Alloys.forEach((item) => {

		//Mixing Dust
		event.recipes.createMixing([`${item.amount}x #forge:dusts/${item.material}`], item.dust_input).id(`kubejs:mixing/${item.material}_dust`)
		//Mixing Ingots
		event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`)
		

	})

	//Missing Ingot Smelting
		event.smelting(`#forge:ingots/red_alloy`, `#forge:dusts/red_alloy`)
		event.smelting(`#forge:ingots/brass`, `#forge:dusts/brass`)
	

});
	