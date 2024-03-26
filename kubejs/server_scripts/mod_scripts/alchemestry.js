onEvent('recipes', event => {

	//Frame
	event.shaped('kubejs:alchemistry_frame', [
		'RPR',
		'PCP',
		'RPR'
  	], {
		C: '#forge:casings/titanium',
		P: '#forge:platings/chemically_inert_alloy',
		R: '#forge:rods/osmium'
  	}).id('mbm2:alchemistry_frame')

	//Reactor Casing
	  event.shaped('alchemistry:reactor_casing', [
		' P ',
		'PCP',
		' P '
  	], {
		P: '#forge:platings/chemically_inert_alloy',
		C: 'kubejs:alchemistry_frame'
  	}).id('mbm2:reactor_casing')
	  
	//Fix Sulfur
	global.alchemistryFluidItemSwap(event, 'chemlib:sulfuric_acid', 'mekanism:sulfuric_acid', true)

  	//Fix Hydrogen
	global.alchemistryFluidItemSwap(event, 'chemlib:hydrogen', 'mekanism:hydrogen', true)
  
	//Fix Oxygen
	global.alchemistryFluidItemSwap(event, 'chemlib:oxygen', 'mekanism:oxygen', true)

	//Missing Carbon Dust?
	event.custom({
		"type": "alchemistry:compactor",
		"group": "alchemistry:compactor",
		"input": {
		  "ingredient": {
			"item": "chemlib:carbon"
		  },
		  "count": 16
		},
		"result": {
		  "item": "chemlib:carbon_dust"
		}
	  }).id('mbm2:compactor/carbon')


//Machine Recipes
event.remove({output: 'alchemistry:compactor'})
event.shaped('alchemistry:compactor', ['ABA','CDC','ABA'], {A: 'kubejs:platinum_plating',B: 'minecraft:piston',C: 'mekanism:advanced_control_circuit',D: 'kubejs:alchemistry_frame'})
event.remove({output: 'alchemistry:dissolver'})
event.shaped('alchemistry:dissolver', ['ABA','CDC','AEA'], {A: 'kubejs:tungsten_reinforced_plating',B: 'chemlib:nitric_acid',C: 'mekanism:elite_control_circuit',D: 'kubejs:alchemistry_frame',E: 'chemlib:sulfuric_acid'})
event.remove({output: 'alchemistry:atomizer'})
event.shaped('alchemistry:atomizer', ['ABA','CDC','ABA'], {A: 'kubejs:platinum_plating',B: 'mekanism:advanced_fluid_tank',C: 'mekanism:advanced_control_circuit',D: 'kubejs:alchemistry_frame'})
event.remove({output: 'alchemistry:combiner'})
event.shaped('alchemistry:combiner', ['ABA','CDC','ABA'], {A: 'kubejs:tungsten_reinforced_plating',B: 'mekanism:elite_control_circuit',C: 'kubejs:alchemistry_frame',D: 'thermal:enderium_block'})
event.remove({output: 'alchemistry:liquifier'})
event.shaped('alchemistry:liquifier', ['ABA','CDC','ABA'], {A: 'kubejs:platinum_plating',B: 'mekanism:advanced_control_circuit',C: 'mekanism:personal_barrel',D: 'kubejs:alchemistry_frame'})

//Carbon
global.mekanismInfusionConversion(event, Item.of('chemlib:carbon'), 'mekanism:carbon', 10, 'mbm2:infuse/carbon_from_carbon')
global.mekanismInfusionConversion(event, Item.of('chemlib:carbon_dust'), 'mekanism:carbon', 160, 'mbm2:infuse/carbon_from_carbon_dust')
global.mekanismInfusionConversion(event, Item.of('chemlib:graphite_dust'), 'mekanism:carbon', 320, 'mbm2:infuse/carbon_from_graphite')

});
