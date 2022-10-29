

onEvent('item.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.itemParts.forEach((part) => {
    if (part == 'hammer') {
      event.create(`${item.material}_${part}`, 'pickaxe').color(0, item.color).parentModel(`kubejs:item/${part}`).texture(`kubejs:item/${part}`).unstackable().tier('iron').maxDamage(item.durability)//.tooltip(`${item.durability} Base Durability`)
    } else {
      if (item.gem) {
        if (part == 'ruby' || part == 'sapphire') {
        event.create(`${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`)
        } else {
          event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`)
        }
      } else {
        if (part == 'custom_ingot') {
          event.create(`${item.material}_ingot`)
        } else {
        event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/${part}`)
        }
      }
    }
    })
    if (item.ore && (item.type == 'base_metal' || item.type == 'compound_ore')) {
      event.create(`raw_${item.material}`).color(0, item.color).texture(`kubejs:item/raw_ore`)
      event.create(`${item.material}_chunk`).color(0, item.color).texture(`kubejs:item/ore_chunk`).parentModel(`kubejs:item/ore_chunk`)
      event.create(`${item.material}_grit`).color(0, item.color).texture(`kubejs:item/ore_dust`).parentModel(`kubejs:item/ore_dust`)
      event.create(`${item.material}_clump`).color(0, item.color).texture(`kubejs:item/ore_clump`).parentModel(`kubejs:item/ore_clump`)
      }
  })
});

onEvent('block.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.blockParts.forEach((part) => {
      if (part == 'scaffolding') {
        event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
      } else {
        if (item.gem) {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/gem/${part}`).item(itemForm => {itemForm.color(0, item.color)})
        } else {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
        }
      }
    })
    
    if (item.ore) {
      if (item.gem) {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/stone_${item.material}_ore`).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${type.material}_${item.material}_ore`).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else {
          event.create(`poor_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`rich_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`poor_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`rich_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })
      }
      event.create(`${item.material}_ore_sample`).color(0, item.color).material('stone').hardness(0.5).resistance(0.5).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/ore/ore_sample`).fullBlock(false).box(3,0,3,13,3,13, true).item(itemForm => {itemForm.color(0, item.color)})
    }
  })
});
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

      if (item.ore) {
        if (item.type == 'base_metal' || item.type == 'compound_ore') {
          event.add(`forge:raw_materials`, `kubejs:raw_${item.material}`)
          event.add(`forge:raw_materials/${item.material}`, `kubejs:raw_${item.material}`)
        } 
        if (item.type != "base_gem") {
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
      if (item.type == "base_gem") {
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


onEvent('fluid.registry', event => {
  global.newMaterialParts.forEach((item) => {
    if (item.fluid == 'thick') {
      event.create(`molten_${item.material}`).thickTexture(item.color).bucketColor(item.color)
    }
    if (item.fluid == 'thin') {
      event.create(`molten_${item.material}`).thinTexture(item.color).bucketColor(item.color)
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
