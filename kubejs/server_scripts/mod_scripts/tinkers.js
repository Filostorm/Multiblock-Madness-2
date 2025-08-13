onEvent('tags.items', event => {
	//Sheetmetal Cast can go in cast chest?
	event.add(`tconstruct:casts`, 'kubejs:sheetmetal_cast')
})

onEvent('recipes', event => {

	//Puny Smelting Guide Book
	event.shapeless(Item.of('tconstruct:puny_smelting', '{mantle:{book:{current_page:""}}}'), ['minecraft:book', 'kubejs:unfired_clay_brick']).id(`mbm2:puny_smelting`)
	

	//Seared Brick
	event.remove({output: 'tconstruct:grout'})
	event.remove({output: 'tconstruct:seared_brick'})
	
  //Moved to new_material_recipes
  //event.smelting('tconstruct:seared_brick', 'kubejs:sturdy_brick').id(`mbm2:smelting/seared_brick`)
	
	//Double smelting recipe
	event.replaceInput({id: 'tconstruct:smeltery/melting/seared/grout'}, 'tconstruct:grout', 'kubejs:sturdy_brick')
	
	//Seared Tank recipes
	event.replaceInput({output: '#tconstruct:scorched_tanks'}, 'quartz', 'thermal:obsidian_glass')

	//Scorched Brick
	event.remove({id: 'tconstruct:smeltery/casting/scorched/brick_composite'})
	event.remove({id: 'tconstruct:smeltery/scorched/nether_grout'})

	//Double smelting recipe
	event.replaceInput({id: 'tconstruct:smeltery/melting/scorched/grout'}, 'tconstruct:nether_grout', 'kubejs:tough_brick')
  	//Moved to new_material_recipes
	

	//Controller
	event.remove({output: 'tconstruct:smeltery_controller'})
	event.remove({output: 'tconstruct:smeltery/melting/metal/copper/smeltery_controller'})
  	event.shaped('tconstruct:smeltery_controller', [
		'ACA',
		'CDC',
		'ACA'
  	], {
		A: 'tconstruct:seared_brick',
		C: 'powah:capacitor_hardened',
		D: 'tconstruct:seared_melter'
  	})

//Seared Faucet nerf
  event.remove({id: 'tconstruct:smeltery/seared/faucet'})
  event.shaped('tconstruct:seared_faucet', [
	'A A',
	' A '
  ], {
	A: 'tconstruct:seared_brick'
  }).id('mbm2:smeltery/seared/faucet')
  
//Scorched Faucet nerf
event.remove({id: 'tconstruct:smeltery/scorched/faucet'})
event.shaped('tconstruct:scorched_faucet', [
  'A A',
  ' A '
], {
  A: 'tconstruct:scorched_brick'
}).id('mbm2:smeltery/scorched/faucet')

	//Foundry Controller
	event.remove({id: 'tconstruct:smeltery/casting/scorched/foundry_controller'})
	event.shaped('tconstruct:foundry_controller', [
		'PCP',
		'GBF',
		'PCP'
	  ], {
		B: 'elementalcraft:pristine_fire_gem',
		P: 'tconstruct:scorched_brick',
		G: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
		C: 'create:precision_mechanism', //'powah:capacitor_hardened',
		F: 'ars_nouveau:glyph_smelt'
	  })
	  
	  //Blazing Pyrotheum
	  event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		  "name": "kubejs:blazing_pyrotheum",
		  "amount": 10
		},
		"duration": 100,
		"temperature": 2000
	  })
	  //Molten Luminite
	  event.custom({
		"type": "tconstruct:melting_fuel",
		"fluid": {
		  "name": "kubejs:molten_luminite",
		  "amount": 50
		},
		"duration": 200,
		"temperature": 1500
	  })

//soulsteel fixes
event.shapeless('tconstruct:soulsteel_block', ['tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot', 'tconstruct:soulsteel_ingot']).id('mbm2:soulsteel_ingot_to_block')
event.shapeless('tconstruct:soulsteel_ingot', ['tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget', 'tconstruct:soulsteel_nugget']).id('mbm2:soulsteel_nugget_to_ingot')
event.shapeless('9x tconstruct:soulsteel_nugget', ['tconstruct:soulsteel_ingot']).id('mbm2:soulsteel_ingot_to_nugget')
event.shapeless('9x tconstruct:soulsteel_ingot', ['tconstruct:soulsteel_block']).id('mbm2:soulsteel_block_to_ingot')
//this makes it more obvious that it is made from a liquid that refuses to show in rei
global.thermalChilling(event, 'tconstruct:molten_soulsteel', 90, 'tconstruct:soulsteel_ingot', 1, 'thermal:chiller_ingot_cast', 4000, `thermal:machines/chiller/chiller_soulsteel`)
});
