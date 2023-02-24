onEvent('tags.items', event => {

    global.newMaterialParts.forEach((item) => {
      
        if (item.type == 'base_metal' && item.tier == 1) {
          event.add(`mbm2:base_metals/tier_one`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_one`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_one`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 2) {
          event.add(`mbm2:base_metals/tier_two`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_two`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_two`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 3) {
          event.add(`mbm2:base_metals/tier_three`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_three`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_three`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 4) {
          event.add(`mbm2:base_metals/tier_four`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_four`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_four`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 5) {
          event.add(`mbm2:base_metals/tier_five`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_five`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_five`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 6) {
          event.add(`mbm2:base_metals/tier_six`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_six`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_six`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 7) {
          event.add(`mbm2:base_metals/tier_seven`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_seven`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_seven`, `#forge:plates/${item.material}`)
        } else if (item.type == 'base_metal' && item.tier == 8) {
          event.add(`mbm2:base_metals/tier_eight`, `#forge:ingots/${item.material}`)
          event.add(`mbm2:base_metals/dusts/tier_eight`, `#forge:dusts/${item.material}`)
          event.add(`mbm2:base_metals/plates/tier_eight`, `#forge:plates/${item.material}`)
        }



      item.itemParts.forEach((part) => {

      if (part.includes('custom')) { //custom tag needs a texture 
        event.add(`forge:${part.slice(7)}s`, `kubejs:${item.material}_${part.slice(7)}`)
        event.add(`forge:${part.slice(7)}s/${item.material}`, `kubejs:${item.material}_${part.slice(7)}`)
      } else if (part.includes('model')) { //model tag needs a model 
        event.add(`forge:${part.slice(6)}s`, `kubejs:${item.material}_${part.slice(6)}`)
        event.add(`forge:${part.slice(6)}s/${item.material}`, `kubejs:${item.material}_${part.slice(6)}`)
      } else if (part == 'gem') {
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


      if (item.ore) {
        if (item.type == 'base_metal' || item.type == 'compound_ore' || item.type == 'rare_metal') {

          if (item.raw_ore) {
            event.add(`forge:raw_materials`, `kubejs:raw_${item.material}`)
            event.add(`forge:raw_materials/${item.material}`, `kubejs:raw_${item.material}`)
        
            event.add(`forge:storage_blocks`, `kubejs:raw_${item.material}_block`)
            event.add(`forge:storage_blocks/raw_${item.material}`, `kubejs:raw_${item.material}_block`)
          }
          //Processing Parts
          event.add(`forge:crushed_ores`, `kubejs:crushed_${item.material}`)
          event.add(`forge:crushed_ores/${item.material}`, `kubejs:crushed_${item.material}`)
          event.add(`forge:chunks`, `kubejs:${item.material}_chunk`)
          event.add(`forge:chunks/${item.material}`, `kubejs:${item.material}_chunk`)
          //event.add(`forge:clumps`, `kubejs:${item.material}_clump`)
          //event.add(`forge:clumps/${item.material}`, `kubejs:${item.material}_clump`)
          event.add(`forge:leached_ores`, `kubejs:leached_${item.material}`)
          event.add(`forge:leached_ores/${item.material}`, `kubejs:leached_${item.material}`)
          event.add(`forge:deposits`, `kubejs:${item.material}_deposit`)
          event.add(`forge:deposits/${item.material}`, `kubejs:${item.material}_deposit`)
          event.add('forge:crystals', `kubejs:${item.material}_crystal`)
          event.add(`forge:crystals/${item.material}`, `kubejs:${item.material}_crystal`)
          
          //Refining Parts
          event.add(`forge:shards`, `kubejs:${item.material}_shard`)
          event.add(`forge:shards/${item.material}`, `kubejs:${item.material}_shard`)
          event.add('forge:clusters', `kubejs:${item.material}_cluster`)
          event.add(`forge:clusters/${item.material}`, `kubejs:${item.material}_cluster`)
          event.add('forge:bricks', `kubejs:${item.material}_brick`)
          event.add(`forge:bricks/${item.material}`, `kubejs:${item.material}_brick`)
          event.add(`forge:washed_ores`, `kubejs:washed_${item.material}`)
          event.add(`forge:washed_ores/${item.material}`, `kubejs:washed_${item.material}`)
          event.add(`forge:infused_ores`, `kubejs:infused_${item.material}`)
          event.add(`forge:infused_ores/${item.material}`, `kubejs:infused_${item.material}`)
          event.add(`forge:wet_dusts`, `kubejs:wet_${item.material}_dust`)
          event.add(`forge:wet_dusts/${item.material}`, `kubejs:wet_${item.material}_dust`)
          
          //Dusts???
          event.add(`forge:grits`, `kubejs:${item.material}_grit`)
          event.add(`forge:grits/${item.material}`, `kubejs:${item.material}_grit`)
          event.add(`forge:fine_dusts`, `kubejs:fine_${item.material}_dust`)
          event.add(`forge:fine_dusts/${item.material}`, `kubejs:fine_${item.material}_dust`)

        } 
        if (item.type != 'gem' && item.type != 'element') {
          event.add(`forge:poor_ores`, `kubejs:poor_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${item.material}_ore`)

          //event.add(`forge:rich_ores`, `kubejs:rich_${item.material}_ore`)
          //event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${item.material}_ore`)

      global.stoneTypes.forEach((type) => {
          event.add(`forge:poor_ores`, `kubejs:poor_${type.material}_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
      
          //event.add(`forge:rich_ores`, `kubejs:rich_${type.material}_${item.material}_ore`)
          //event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${type.material}_${item.material}_ore`)
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
      if (item.type == "gem" || item.type == "element") {
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

          //event.add(`forge:rich_ores`, `kubejs:rich_${item.material}_ore`)
          //event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${item.material}_ore`)

      global.stoneTypes.forEach((type) => {
          event.add(`forge:ores`, `kubejs:${type.material}_${item.material}_ore`)
          event.add(`forge:ores/${item.material}`, `kubejs:${type.material}_${item.material}_ore`)
      
          event.add(`forge:poor_ores`, `kubejs:poor_${type.material}_${item.material}_ore`)
          event.add(`forge:poor_ores/${item.material}`, `kubejs:poor_${type.material}_${item.material}_ore`)
      
          //event.add(`forge:rich_ores`, `kubejs:rich_${type.material}_${item.material}_ore`)
          //event.add(`forge:rich_ores/${item.material}`, `kubejs:rich_${type.material}_${item.material}_ore`)
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