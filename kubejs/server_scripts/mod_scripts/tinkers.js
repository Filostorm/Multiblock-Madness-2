onEvent('recipes', event => {
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

	//First Steel
	event.recipes.createMixing(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).heated().id(`mbm2:carbon_covered_iron`)
  	global.tinkersMelting(event, 'kubejs:molten_slag', 50, 'tconstruct:molten_steel', 90, 'kubejs:carbon_covered_iron', 1200, 100, `mbm2:smeltery/melting/metal/first_steel`)

	//Scorched Brick
	event.remove({id: 'tconstruct:smeltery/casting/scorched/brick_composite'})
	event.remove({id: 'tconstruct:smeltery/scorched/nether_grout'})
	
	event.recipes.createMixing('4x tconstruct:scorched_brick', [Fluid.of('tconstruct:magma', 250),'2x create:cinder_flour', '2x kubejs:sturdy_brick', 'spirit:soul_powder']).superheated().id(`mbm2:mixing/scorched_brick`)
	event.recipes.createMixing('4x tconstruct:nether_grout', [Fluid.of('tconstruct:magma', 250),'2x create:cinder_flour', '2x kubejs:sturdy_brick', 'spirit:soul_powder']).heated().id(`mbm2:mixing/nether_grout`)
	
	//Foundry Controller
	event.remove({id: 'tconstruct:smeltery/casting/scorched/foundry_controller'})
	//global.naturesauraAltar(event, 'tconstruct:foundry_controller', 'tconstruct:scorched_bricks', 'naturesaura:nether', 30000, 160, 'mbm2:scorched/foundry_controller')
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
	  


});