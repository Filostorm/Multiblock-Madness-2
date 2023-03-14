onEvent('recipes', event => {
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
]
let basicMachines = [
	'mekanism:precision_sawmill',
	'mekanism:enrichment_chamber',
	'mekanism:crusher',
	'mekanism:energized_smelter',
	'mekanism:purification_chamber',
	'mekanism:osmium_compressor',
	'mekanism:chemical_injection_chamber',
]

tiers.forEach((tier, index) => {
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



});