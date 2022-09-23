onEvent('recipes', event => {
  event.remove({output: 'mekanism:steel_casing'})
  
  global.compactCrafting(event, 'mekanism:steel_casing', 1, 'immersiveengineering:component_electronic_adv',
  3, [
	{
	type: 'compactcrafting:hollow',
	wall: 'A'
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['I', '-','I'],
			['-', '-','-'],
			['I', '-','I']
		]
	},
	{
	type: 'compactcrafting:hollow',
	wall: 'S'
	}
	], {
	'S': {
	  type: 'compactcrafting:block',
	  block: 'immersiveengineering:sheetmetal_steel'
	},
	'I': {
	  type: 'compactcrafting:block',
	  block: 'kubejs:invar_scaffolding'
	},
	'A': {
	  type: 'compactcrafting:block',
	  block: 'immersiveengineering:steel_scaffolding_standard'
	}
  },  'kubejs:steel_casing')

});