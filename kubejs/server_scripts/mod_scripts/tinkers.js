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
		'AAA',
		'ABA',
		'AAA'
  	], {
		A: 'tconstruct:seared_brick',
		B: '#forge:gears/steel'
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
		B: 'tconstruct:scorched_bricks',
		P: '#forge:plates/tainted_gold',
		G: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
		C: 'powah:capacitor_hardened',
		F: 'elementalcraft:firecrystal'
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


});