onEvent('recipes', event => {
//RFTools Machine Frame miniaturization
event.remove({id: 'rftoolsbase:machine_frame'})
global.compactCrafting(event, 'rftoolsbase:machine_frame', 1, 'projectred_core:silicon_chip',
  3, [
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['A','B','A'],
			['B','E','B'],
			['A','B','A']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['A','D','A'],
			['D','C','D'],
			['A','D','A']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['A','B','A'],
			['B','E','B'],
			['A','B','A']
		]
	},
	], {
	'A': {
	  type: 'compactcrafting:block',
	  block: 'create:andesite_alloy_block'
	},
	'B': {
	  type: 'compactcrafting:block',
	  block: 'immersiveengineering:steel_scaffolding_standard'
	},
	'C': {
	  type: 'compactcrafting:block',
	  block: 'immersiveengineering:insulating_glass'
	},
	'D': {
	  type: 'compactcrafting:block',
	  block: 'tconstruct:gold_bars'
	},
	'E': {
	  type: 'compactcrafting:block',
	  block: 'thermal:sapphire_block'
	}
  },  'mbm2:rftools_frame')
})