


onEvent('item.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.itemParts.forEach((part) => {
    if (part == 'hammer') {
      event.create(`${item.material}_${part}`, 'pickaxe').color(0, item.color).parentModel(`kubejs:item/${part}`).texture(`kubejs:item/${part}`).unstackable().tier('iron').maxDamage(item.durability)//.tooltip(`${item.durability} Base Durability`)
    } else if (part == 'rocket_nose_cone') {
      event.create(`${item.material}_${part}`).color(0, item.color).parentModel(`kubejs:item/${part}`).texture(`kubejs:item/${part}`)
    } else {
      if (item.type == 'gem') { //Gems get special Textures, and always a custom base gem texture
        if (part == 'gem') { //Gems can burn
          if(item.burnTime != null) {
            event.create(`${item.material}`).texture(`kubejs:item/${item.material}`).burnTime(item.burnTime*200)
          } else {
            event.create(`${item.material}`).texture(`kubejs:item/${item.material}`)
          }
        } else if (part == 'dust' && item.burnTime != null) { //Gem dust can burn
            event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`).burnTime(item.burnTime*200)
        } else {
            event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`)
        }
      } else { //Metal cant burn (yet)
        if (part.includes('custom')) { //custom ingot tag needs a texture 
          event.create(`${item.material}_${part.slice(7)}`)
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
/*
onEvent('item.registry.tool_tiers', event => {
  event.add('tier_id', tier => {
    tier.uses = 250
    tier.speed = 6.0
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/iron'
  })
})
onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('tier_id', tier => {
    tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 5, 6, 2]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/iron'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
})*/

onEvent('block.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.blockParts.forEach((part) => {
      if (part == 'scaffolding' || part == 'coil') {
        event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
      } else  {
        if (item.type == 'gem') {
          if (part == 'storage_block' && item.burnTime != null) { //Gem blocks can burn
              event.create(`${item.material}_${part}`)
              .color(0, item.color)
              .material('metal')
              .hardness(3)
              .resistance(3)
              .tagBlock('minecraft:mineable/pickaxe')
              .tagBlock('minecraft:needs_iron_tool')
              .model(`kubejs:block/gem/${item.iconset}/${part}`)
              .item(itemForm => {itemForm.color(0, item.color).burnTime(item.burnTime*2000)})
            } else {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/gem/${item.iconset}/${part}`).item(itemForm => {itemForm.color(0, item.color)})
          }
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
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/stone_ore`).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/${type.material}_ore`).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else if (item.type == 'element') {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/stone_ore`).lightLevel(0.5)  .item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/${type.material}_ore`).lightLevel(0.5).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else {
          if (item.ore_name != null) { 
            event.create(`poor_${item.material}_ore`).displayName('Poor ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`${item.material}_ore`).displayName(item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`rich_${item.material}_ore`).displayName('Rich ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          
          global.stoneTypes.forEach((type) => {
			      let stoneNameUpper = type.material.charAt(0).toUpperCase() + type.material.slice(1)
			      let oreName = stoneNameUpper + ' ' + item.ore_name + ' Ore'

            event.create(`poor_${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`rich_${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          })
          } else {
          event.create(`poor_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`rich_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`poor_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`rich_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })}
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

