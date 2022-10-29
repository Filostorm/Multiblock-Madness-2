


onEvent('tags.items', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.type == 'alloy' && item.tier == 1) {
		event.add(`mbm2:alloys/tier_one`, `#forge:ingots/${item.material}`)
		event.add(`mbm2:alloys/dusts/tier_one`, `#forge:dusts/${item.material}`)
		event.add(`mbm2:alloys/plates/tier_one`, `#forge:plates/${item.material}`)
		}
	})
});

onEvent('recipes', event => {


	global.newMaterialParts.forEach((item) => {
		if (item.type == 'alloy' && item.tier <= 1) {

			console.log(`${item.material} is at most a Tier 1 Alloy!`);

		//Mixing Dust
		event.recipes.createMixing([`${item.amount}x #forge:dusts/${item.material}`], item.dust_input).id(`kubejs:mixing/${item.material}_dust`)
		//Mixing Ingots
		event.recipes.createMixing(`${item.amount}x #forge:ingots/${item.material}`, item.ingot_input).heated().id(`create:mixing/${item.material}_ingot`)

		if (item.tinkers_input != null) {

			//Tinkers Alloy
			global.tinkersAlloying(event, item.fluid_id, (item.amount*90), item.tinkers_input, 1000, `tconstruct:smeltery/alloys/molten_${item.material}`)
		}
		} else {
			console.log(`${item.material} is not a valid material`);}

	})

	//Missing Ingot Smelting
		event.smelting(`#forge:ingots/red_alloy`, `#forge:dusts/red_alloy`)
		event.smelting(`#forge:ingots/brass`, `#forge:dusts/brass`)
		event.smelting(`#forge:ingots/pewter`, `#forge:dusts/pewter`)
	

});
	