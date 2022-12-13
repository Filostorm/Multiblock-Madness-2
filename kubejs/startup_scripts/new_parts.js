

onEvent('item.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.itemParts.forEach((part) => {
    if (part == 'hammer') {
      event.create(`${item.material}_${part}`, 'pickaxe').color(0, item.color).parentModel(`kubejs:item/${part}`).texture(`kubejs:item/${part}`).unstackable().tier('iron').maxDamage(item.durability)//.tooltip(`${item.durability} Base Durability`)
    } else {
      if (item.type == 'gem') {
        if (part == 'gem') {
        event.create(`${item.material}`).texture(`kubejs:item/${item.material}`)
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
      if (item.raw_ore) {
      event.create(`raw_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/raw_ore`)
    }
      event.create(`${item.material}_chunk`).color(0, item.color).texture(`kubejs:item/ore/ore_chunk`).parentModel(`kubejs:item/ore/ore_chunk`)
      event.create(`${item.material}_grit`).color(0, item.color).texture(`kubejs:item/ore/ore_dust`).parentModel(`kubejs:item/ore/ore_dust`)
      event.create(`${item.material}_clump`).color(0, item.color).texture(`kubejs:item/ore/ore_clump`).parentModel(`kubejs:item/ore/ore_clump`)

      event.create(`${item.material}_crystal`).color(0, item.color).texture(`kubejs:item/ore/ore_crystal`)
      event.create(`${item.material}_shard`).color(0, item.color).texture(`kubejs:item/ore/ore_shard`)
      event.create(`washed_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_washed`)
      event.create(`crushed_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_crushed`)
      event.create(`fine_${item.material}_dust`).color(0, item.color).texture(`kubejs:item/ore/fine_dust`)
      }
  })
});

onEvent('block.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.blockParts.forEach((part) => {
      if (part == 'scaffolding') {
        event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
      } else  {
        if (item.type == 'gem') {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/gem/${part}`).item(itemForm => {itemForm.color(0, item.color)})
        } else {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
        }
      }
    })
    ////////////////////////////// ORE /////////////////////////////
        //Raw Blocks
    if (item.raw_ore) {
        event.create(`raw_${item.material}_block`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').model(`kubejs:block/ore/raw_block`).item(itemForm => {itemForm.color(0, item.color)})
      }
    if (item.ore) {
      if (item.type == 'gem') {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/stone_ore`).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${type.material}_ore`).item(itemForm => {itemForm.color(0, item.color)})
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

