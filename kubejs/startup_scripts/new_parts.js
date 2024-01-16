const nameUpper = (name) => {
  if(name.includes("_")) {
    let partOne = name.split('_')[0]
    let partTwo = name.split('_')[1]
    if(name.includes("stone")) {
      let fullName = partOne.charAt(0).toUpperCase() + partOne.slice(1)
      return fullName
    } else {
      let fullName = partOne.charAt(0).toUpperCase() + partOne.slice(1) + ' ' + partTwo.charAt(0).toUpperCase() + partTwo.slice(1)
      return fullName
    }
  } else { 
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
}
onEvent('item.registry', event => {

  let orePartCreation = global.oreParts.concat(global.oreBonusParts)

  global.newMaterialParts.forEach((item) => {
    item.itemParts.forEach((part) => {
    if (part.includes('model')) { // this does everything with a model
      event.create(`${item.material}_${part.slice(6)}`).color(0, item.color).parentModel(`kubejs:item/${part.slice(6)}`).texture(`kubejs:item/${part.slice(6)}`)
    } else { // if it doesn't have a custom model or is a tool
      if (item.type == 'gem') { //Gem parts get special textures, and always a custom base gem texture
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
      } else { //if its not a gem
        if (part.includes('custom')) { //if custom is part of the name, then it removes it and looks for the material name + part name 
          event.create(`${item.material}_${part.slice(7)}`)
        } else if (item.iconset != null && part == 'ingot') { //only ingots for now, but this gives custom colored textures
          event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/${part}_${item.iconset}`)
        } else {
          //Main Part creation line
          event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/${part}`)
        }
      }
    }
    })

    //Makes all the ore parts based on the arrays in _ore_part_list
    if (item.ore) {
      if (item.type == 'base_metal' || item.type == 'compound_ore' || item.type == 'rare_metal') {
        orePartCreation.forEach((part) => {
        //Build the part Name
        if (item.ore_name == null) { 
          global.partDisplayName = part.prefix + nameUpper(item.material) + part.suffix
        } else {
          global.partDisplayName = part.prefix + nameUpper(item.ore_name) + part.suffix
        }
        //Make the part items
        if (item.raw_ore && part.name == 'raw') {
          event.create(`${part.name}_${item.material}`).displayName(global.partDisplayName).color(0, item.color).texture(`kubejs:item/ore/${part.name}`)
        } else if (part.name != 'raw' /*&& !(part.grade == null && item.type == 'compound_ore')*/) {
          if (part.model) {
            event.create(`${part.name}_${item.material}`).displayName(global.partDisplayName).color(0, item.color).texture(`kubejs:item/ore/${part.name}`).parentModel(`kubejs:item/ore/${part.name}`)  
          } else {
            event.create(`${part.name}_${item.material}`).displayName(global.partDisplayName).color(0, item.color).texture(`kubejs:item/ore/${part.name}`)
          }
        }
      })
    }}
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
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else if (item.type == 'element') {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/stone_ore`).lightLevel(0.5).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/${type.material}_ore`).lightLevel(0.5).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else {
          if (item.ore_name != null) { 
            event.create(`poor_${item.material}_ore`).displayName('Poor ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`${item.material}_ore`).displayName(item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            //event.create(`rich_${item.material}_ore`).displayName('Rich ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          
            global.stoneTypes.forEach((type) => {
              if (type.material != 'bedrock' || type.material != 'end_stone') {
                event.create(`poor_${type.material}_${item.material}_ore`).displayName('Poor ' + nameUpper(type.material) + ' ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
              }
                event.create(`${type.material}_${item.material}_ore`).displayName(nameUpper(type.material) + ' ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            })
          } else {
          event.create(`poor_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          global.stoneTypes.forEach((type) => {
            if (type.material != 'bedrock' || type.material != 'end_stone') {
              event.create(`poor_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            }
              event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          }
        )}
      }
      event.create(`${item.material}_ore_sample`).color(0, item.color).material('stone').hardness(0.5).resistance(0.5).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/ore/ore_sample`).fullBlock(false).notSolid().box(3,0,3,13,3,13, true).item(itemForm => {itemForm.color(0, item.color)})
    }
  })
});

const newShade = (hexColor, magnitude) => {
		const decimalColor = parseInt(hexColor, 16);
		let r = (decimalColor >> 16) + magnitude;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g = (decimalColor & 0x0000ff) + magnitude;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		b > 255 && (b = 255);
		b < 0 && (b = 0);
		return (g | (b << 8) | (r << 16));
};
onEvent('fluid.registry', event => {
  global.newMaterialParts.forEach((item) => {

    if (item.fluid == 'thick') {
      event.create(`molten_${item.material}`).thickTexture(item.color).bucketColor(item.color)
    } else if (item.fluid == 'thin') {
      event.create(`molten_${item.material}`).thinTexture(item.color).bucketColor(item.color)
    }

    if (item.ore & (item.type == 'base_metal' || item.type == 'compound_ore' || item.type == 'rare_metal')) {
      let slurryColor = newShade(item.color.toString(16), -20)
      event.create(`${item.material}_slurry`).thinTexture(slurryColor).bucketColor(slurryColor)

      let cleanSlurryColor = newShade(item.color.toString(16), 25)
      event.create(`clean_${item.material}_slurry`).thinTexture(cleanSlurryColor).bucketColor(cleanSlurryColor)

      let concentratedSlurryColor = newShade(item.color.toString(16), -50)
      event.create(`concentrated_${item.material}_slurry`).thickTexture(concentratedSlurryColor).bucketColor(concentratedSlurryColor)
    }

  })
});

// TO DO ADD SLURRY FOR ORE PROCESSING
const $EventBuses = java('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = java('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = java('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = java('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

//GASES.register('example_gas', 0xA020F0)
//SLURRY.register('example_slurry', builder => builder.color(0xA020F0))
INFUSETYPE.register('chitin', 0x634f34)

GASES.register($EventBuses.getModEventBus('kubejs').get())
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

onEvent('client.generate_assets', event => {
    //event.addLang('slurry.kubejs.dirty_example_slurry', `Dirty Example Slurry`)
    event.addLang('infuse_type.kubejs.chitin', `Chitin`)
  
})
