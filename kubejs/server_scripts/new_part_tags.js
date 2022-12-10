onEvent('tags.items', event => {
    global.newMaterialParts.forEach((item) => {
      item.itemParts.forEach((part) => {
      if (part == 'custom_ingot') {
        event.add(`forge:ingots`, `kubejs:${item.material}_ingot`)
        event.add(`forge:ingots/${item.material}`, `kubejs:${item.material}_ingot`)

      } else if (part == 'ruby' || part == 'sapphire') {
        event.add(`forge:gems`, `kubejs:${item.material}`)
        event.add(`forge:gems/${item.material}`, `kubejs:${item.material}`)

      } else {
        event.add(`forge:${part}s`, `kubejs:${item.material}_${part}`)
        event.add(`forge:${part}s/${item.material}`, `kubejs:${item.material}_${part}`)}
      })

      item.blockParts.forEach((part) => {
        if (part == 'scaffolding') {
          event.add(`immersiveengineering:scaffoldings`, `kubejs:${item.material}_scaffolding`)
          event.add(`immersiveengineering:scaffoldings/${item.material}`, `kubejs:${item.material}_scaffolding`)
        } else {
        event.add(`forge:${part}s`, `kubejs:${item.material}_${part}`)
        event.add(`forge:${part}s/${item.material}`, `kubejs:${item.material}_${part}`)
        }
      })

	if (item.raw_ore) {
		event.add(`forge:raw_materials`, `kubejs:raw_${item.material}`)
		event.add(`forge:raw_materials/${item.material}`, `kubejs:raw_${item.material}`)

		event.add(`forge:storage_blocks`, `kubejs:raw_${item.material}_block`)
		event.add(`forge:storage_blocks/raw_${item.material}`, `kubejs:raw_${item.material}_block`)
	}

      if (item.ore) {
        if (item.type == 'base_metal' || item.type == 'compound_ore') {

          event.add(`mekanism:shards`, `kubejs:${item.material}_shard`)
          event.add(`mekanism:shards/${item.material}`, `kubejs:${item.material}_shard`)
          
          event.add('mekanism:crystals', `kubejs:${item.material}_crystal`)
          event.add(`mekanism:crystals/${item.material}`, `kubejs:${item.material}_crystal`)
          
          event.add(`forge:chunks`, `kubejs:${item.material}_chunk`)
          event.add(`forge:chunks/${item.material}`, `kubejs:${item.material}_chunk`)
          
          event.add(`forge:grits`, `kubejs:${item.material}_grit`)
          event.add(`forge:grits/${item.material}`, `kubejs:${item.material}_grit`)
          
          event.add(`forge:clumps`, `kubejs:${item.material}_clump`)
          event.add(`forge:clumps/${item.material}`, `kubejs:${item.material}_clump`)
          
          event.add(`forge:washed_ores`, `kubejs:washed_${item.material}`)
          event.add(`forge:washed_ores/${item.material}`, `kubejs:washed_${item.material}`)
          
          event.add(`create:crushed_ores`, `kubejs:crushed_${item.material}`)
          event.add(`create:crushed_ores/${item.material}`, `kubejs:crushed_${item.material}`)
          
          event.add(`forge:fine_dusts`, `kubejs:fine_${item.material}_dust`)
          event.add(`forge:fine_dusts/${item.material}`, `kubejs:fine_${item.material}_dust`)
        } 
        if (item.type != "gem") {
          event.add(`forge:poor_ores`, `kubejs:poor_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${item.material}_ore`)

          event.add(`forge:rich_ores`, `kubejs:rich_${item.material}_ore`)
          event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${item.material}_ore`)

      global.stoneTypes.forEach((type) => {
          event.add(`forge:poor_ores`, `kubejs:poor_${type.material}_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
      
          event.add(`forge:rich_ores`, `kubejs:rich_${type.material}_${item.material}_ore`)
          event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${type.material}_${item.material}_ore`)
      })
        } 
            event.add(`forge:ores`, `kubejs:${item.material}_ore`)
            event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`)
        global.stoneTypes.forEach((type) => {
            event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`)
            event.add(`forge:ores/${item.material}`, `kubejs:${type.material}_${item.material}_ore`)
        })
      }
    })
});


onEvent('tags.blocks', event => {
  global.newMaterialParts.forEach((item) => {
    if (item.ore) {
      if (item.type == "gem") {
        event.add(`forge:ores`, `kubejs:${item.material}_ore`)
        event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`)
      global.stoneTypes.forEach((type) => {
        event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`)
        event.add(`forge:ores/${item.material}`, `kubejs:${type.material}_${item.material}_ore`)
      }) 
    } else {
          event.add(`forge:ores`, `kubejs:${item.material}_ore`)
          event.add(`forge:ores/${item.material}`, `kubejs:${item.material}_ore`)

          event.add(`forge:poor_ores`, `kubejs:poor_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${item.material}_ore`)

          event.add(`forge:rich_ores`, `kubejs:rich_${item.material}_ore`)
          event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${item.material}_ore`)

      global.stoneTypes.forEach((type) => {
          event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`)
          event.add(`forge:ores/${item.material}`, `kubejs:${type.material}_${item.material}_ore`)
      
          event.add(`forge:poor_ores`, `kubejs:poor_${type.material}_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
      
          event.add(`forge:rich_ores`, `kubejs:rich_${type.material}_${item.material}_ore`)
          event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${type.material}_${item.material}_ore`)
      })
    }
  }
})
});

onEvent('fluid.tags', event => {
  global.newMaterialParts.forEach((item) => {
    if (item.fluid != null) {
      event.add(`forge:molten_${item.material}`, [`kubejs:molten_${item.material}`, `kubejs:flowing_molten_${item.material}`])
    }
  })
});