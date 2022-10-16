

var tier1Ore = [
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
		//global.tinkersOreMelting(event, item.fluid, 150, 'kubejs:molten_slag', 200, `forge:ores/${item.material}`, 700, 142, `tconstruct:smeltery/melting/metal/${item.material}/ore_singular`)

		//Making Dust
    if (Item.of(`#forge:dusts/${item.material}`) != null) {
		//event.recipes.createMilling([`#forge:dusts/${item.material}`], [`#forge:raw_materials/${item.material}`])
	}
  	})
});


onEvent('block.loot_tables', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.ore) {
		  if (item.type == 'base_gem') {
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:gems/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:gems/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:gems/${item.material}`)
			})
		  } else if (item.type == 'base_dust') {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `5x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:dusts/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `2x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `5x #forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `10x #forge:dusts/${item.material}`)
			})
		  } else {
			event.addSimpleBlock(`kubejs:poor_${item.material}_ore`, `#forge:dusts/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore`, `#forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:rich_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			event.addSimpleBlock(`kubejs:${item.material}_ore_sample`, `#forge:raw_materials/${item.material}`)

			global.stoneTypes.forEach((type) => {
				event.addSimpleBlock(`kubejs:poor_${type.material}_${item.material}_ore`, `#forge:dusts/${item.material}`)
				event.addSimpleBlock(`kubejs:${type.material}_${item.material}_ore`, `#forge:raw_materials/${item.material}`)
				event.addSimpleBlock(`kubejs:rich_${type.material}_${item.material}_ore`, `2x #forge:raw_materials/${item.material}`)
			})
		  }
		}
	})
  });