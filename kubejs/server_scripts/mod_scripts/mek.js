onEvent('recipes', event => {

	event.remove({id: 'tconstruct:compat/refined_glowstone_ingot'})
	event.remove({id: 'tconstruct:compat/refined_obsidian_ingot'})
	event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_obsidian'})

	
	


  event.remove({output: 'mekanism:steel_casing'})
  



  global.compactCrafting(event, 'mekanism:steel_casing', 1, 'pneumaticcraft:printed_circuit_board',
  3, [
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['S', 'M','S'],
			['M', 'S','M'],
			['S', 'M','S']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['M', 'S','M'],
			['S', 'C','S'],
			['M', 'S','M']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['S', 'M','S'],
			['M', 'S','M'],
			['S', 'M','S']
		]
	},
	], {
	'M': {
	  type: 'compactcrafting:block',
	  block: 'immersiveengineering:sheetmetal_steel'
	},
	'S': {
	  type: 'compactcrafting:block',
	  block: 'kubejs:invar_scaffolding'
	},
	'C': {
	  type: 'compactcrafting:block',
	  block: 'kubejs:osmium_cog_block'
	}
  },  'mbm2:steel_casing')



//Superheating Element
event.remove({id: 'mekanism:superheating_element'})
event.shaped('mekanism:superheating_element', [
	'TPT',
	'MCM',
	'TPT'
  ], {
	C: 'powah:dielectric_casing',
	P: '#forge:plates/netherite',
	M: '#forge:plates/manyullyn',
	T: 'powah:thermoelectric_plate',
  }).id('mbm2:mekanism/superheating_element')
  
//
  event.remove({output:`mekanism:metallurgic_infuser`})
  event.shaped('mekanism:metallurgic_infuser', ['ABA','ACA','DDD'], {A: 'kubejs:osmium_plate',B: 'pneumaticcraft:printed_circuit_board',C: 'mekanism:steel_casing',D: 'create:sturdy_sheet'})

  event.remove({output:`mekanism:electrolytic_separator`})
  event.shaped('mekanism:electrolytic_separator', ['ABA','ACA','DED'], {A: 'mekanism:alloy_infused',B: 'pneumaticcraft:printed_circuit_board',C: 'mekanism:steel_casing',D: 'kubejs:tier_1_electrical_alloy_wire_coil',E: 'mekanism:electrolytic_core'})

  event.remove({output:`mekanism:dynamic_tank`})
  event.shaped('4x mekanism:dynamic_tank', [' A ','ABA',' A '], {A: 'beyond_earth:compressed_steel',B: 'mekanism:basic_fluid_tank'})

  event.remove({output:`mekanism:thermal_evaporation_block`})
  event.shaped('4x mekanism:thermal_evaporation_block', ['ABA','BCB','ABA'], {A: 'kubejs:osmium_plate',B: 'create:copper_sheet',C: 'kubejs:tier_1_structural_alloy_frame_box'})

  event.remove({output:`mekanism:basic_fluid_tank`})
  event.shaped('mekanism:basic_fluid_tank', ['ABA','ACA','ABA'], {A: 'kubejs:osmium_rod',B: 'pneumaticcraft:plastic',C: 'thermal:fluid_cell'})

  /////////crafting to upgrade the machines///////////
let tiers = [
	'basic',
	'advanced',
	'elite',
	'ultimate'
]
let machines = [
	//'combining',
	'sawing',
	'enriching',
	'crushing',
	'smelting',
	'purifying',
	'compressing',
	'injecting',
	'infusing',
]
let basicMachines = [
	'mekanism:precision_sawmill',
	'mekanism:enrichment_chamber',
	'mekanism:crusher',
	'mekanism:energized_smelter',
	'mekanism:purification_chamber',
	'mekanism:osmium_compressor',
	'mekanism:chemical_injection_chamber',
	'mekanism:metallurgic_infuser'
]

tiers.forEach((tier, index) => {
	//This replaces circuit outputs
	event.replaceOutput({mod: 'mekanism'}, `mekanism:${tier}_control_circuit`, `kubejs:unfinished_${tier}_control_circuit`)
	global.AssemblyLaser(event, `mekanism:${tier}_control_circuit`, `kubejs:unfinished_${tier}_control_circuit`, `mbm2:finish_${tier}_mek_circuits`)


	//This does the upgrade recipes
	machines.forEach((machine, type) => {
		event.remove({id: `mekanism:factory/${tier}/${machine}`})
		if (tier == 'basic') {
			event.custom({'type':'mekanism:mek_data',
			'result':{'item':`mekanism:${tier}_${machine}_factory`},
			'pattern':['UM'],
			'key':{
				'M':{'item':basicMachines[type]},
				'U':{'item':`mekanism:${tier}_tier_installer`}
			}}).id(`mbm2:${tier}_${machine}_factory`)
		} else {
			event.custom({'type':'mekanism:mek_data',
			'result':{'item':`mekanism:${tier}_${machine}_factory`},
			'pattern':['UM'],
			'key':{
				'M':{'item':`mekanism:${tiers[index-1]}_${machine}_factory`},
				'U':{'item':`mekanism:${tier}_tier_installer`}
			}}).id(`mbm2:${tier}_${machine}_factory`)
		}
	});
});


//Infuser Recipe
//global.mekanismMetallurgicInfusing(event, Item.of('kubejs:carbon_mesh'), Item.of('kubejs:zinc_mesh'), 'mekanism:diamond', 20, `mbm2:carbon_mesh`)


});