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
  
});