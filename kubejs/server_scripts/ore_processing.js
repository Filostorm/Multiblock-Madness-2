

tier1Ore = [
	{
	  'material': 'iron',
	  'fluid': 'tconstruct:molten_iron'
	},
	{
	  'material': 'gold',
	  'fluid': 'tconstruct:molten_gold'
	},
	{
	  'material': 'copper',
	  'fluid': 'tconstruct:molten_copper'
	},
	{
	  'material': 'lead',
	  'fluid': 'tconstruct:molten_lead'
	},
	{
	  'material': 'nickel',
	  'fluid': 'tconstruct:molten_nickel'
	},
	{
	  'material': 'silver',
	  'fluid': 'tconstruct:molten_silver'
	},
	{
	  'material': 'tin',
	  'fluid': 'tconstruct:molten_tin'
	},
]

onEvent('recipes', event => {


	tier1Ore.forEach((item) => {
		// Foundry Ore Melting
		global.tinkersOreMelting(item.fluid, 150, 'kubejs:molten_slag', 200, `forge:ores/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`)
  	})
});
	