onEvent('recipes', event => {

/// Alt Belt Recipe using Rubber
	event.shaped('2x create:belt_connector', [
		'AAA',
		'AAA'
	  ], {
		A: 'thermal:cured_rubber'
	  })

	//Basic Alloy Compat
	event.recipes.createMixing('4x thermal:bronze_ingot', ['3x #forge:ingots/copper','#forge:ingots/tin']).heated().id(`kubejs:mixing/bronze_ingot`)
	event.recipes.createMixing('2x thermal:electrum_ingot', ['#forge:ingots/gold','#forge:ingots/silver']).heated().id(`kubejs:mixing/electrum_ingot`)
	event.recipes.createMixing('3x thermal:invar_ingot', ['2x #forge:ingots/iron','#forge:ingots/nickel']).heated().id(`kubejs:mixing/invar_ingot`)
	event.recipes.createMixing('2x thermal:constantan_ingot', ['#forge:ingots/copper','#forge:ingots/nickel']).heated().id(`kubejs:mixing/constantan_ingot`)
  
});