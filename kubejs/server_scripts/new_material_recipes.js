

onEvent('tags.items', event => {
	//debris tag for potion
	event.add(`forge:ingots`, 'extendedcrafting:black_iron_ingot')
	event.add(`forge:ingots/black_iron`, 'extendedcrafting:black_iron_ingot')
	event.add(`forge:nuggets`, 'extendedcrafting:black_iron_nugget')
	event.add(`forge:nuggets/black_iron`, 'extendedcrafting:black_iron_nugget')
	event.add(`forge:storage_blocks`, 'extendedcrafting:black_iron_block')
	event.add(`forge:storage_blocks/black_iron`, 'extendedcrafting:black_iron_block')

 });
onEvent('recipes', event => {
	
var removeByName = [
  'immersiveengineering:arcfurnace/steel',
  'immersiveengineering:arcfurnace/dust_steel'
]

removeByName.forEach((item) => {
  event.remove({id: item})
})
  

	//First Steel
	event.recipes.createMixing(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).heated().id(`mbm2:carbon_covered_iron`)
  global.tinkersMelting(event, 'kubejs:molten_slag', 50, 'tconstruct:molten_steel', 90, 'kubejs:carbon_covered_iron', 1200, 100, `mbm2:smeltery/melting/metal/first_steel`)
   
  event.recipes.thermal.smelter([`#forge:ingots/steel`,Item.of('thermal:slag').withChance(0.50)], ['#forge:ingots/iron','#minecraft:coals']).id(`mbm2:thermal/steel`)
  event.recipes.immersiveengineeringArcFurnace(Item.of('#forge:ingots/steel'), '#forge:ingots/iron', ['#minecraft:coals'], 'thermal:slag').id(`mbm2:arc_furnace/steel`)
 
  event.recipes.thermal.smelter([`2x #forge:ingots/steel`,Item.of('thermal:slag').withChance(0.50)], ['2x #forge:ingots/iron', '#forge:coal_coke']).id(`mbm2:thermal/coke_steel`)
  event.recipes.immersiveengineeringArcFurnace(Item.of('2x #forge:ingots/steel'), '2x #forge:ingots/iron', '#forge:coal_coke', 'thermal:slag').id(`mbm2:arc_furnace/coke_steel`)

	event.recipes.multiblocked.multiblock("ebf")
		.inputFluid(Fluid.of('mekanism:oxygen', 100))
		.inputItem('2x #forge:ingots/iron')
		.inputItem(['#minecraft:coals', '#forge:coal_coke'])
		.outputItem(Item.of('2x #forge:ingots/steel'))
		.setPerTick(true)
		.inputFE(2000)
		.duration(50)
	event.recipes.multiblocked.multiblock("ebf")
		.inputFluid(Fluid.of('kubejs:liquid_air', 50))
		.inputItem('2x #forge:ingots/iron')
		.inputItem(['#minecraft:coals', '#forge:coal_coke'])
		.outputItem(Item.of('2x #forge:ingots/steel'))
		.setPerTick(true)
		.inputFE(2000)
		.duration(100)



  // Damascus Steel
  event.recipes.createCutting('kubejs:steel_scraps', ['#forge:ingots/steel']).processingTime(400).id(`mbm2:cutting/steel_scraps`)

  //Swap scraps for stacked iron/steel plating
  event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:damascus_steel_ingot', // have this item be an output
  ], 'kubejs:steel_scraps', [ // input.
  event.recipes.createFilling('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel', Fluid.of('lava', 50)]),
  event.recipes.createPressing('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']),
  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', ['kubejs:partially_folded_damascus_steel']).processingTime(50),
//  event.recipes.createCutting('kubejs:partially_folded_damascus_steel', 'kubejs:partially_folded_damascus_steel').processingTime(50)
  ]).transitionalItem('kubejs:partially_folded_damascus_steel').loops(20).id(`mbm2:damascus_steel_ingot`)

/*
  //Lumium
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('3x #forge:dusts/aluminum','2x #forge:dusts/white_alloy','8x create:experience_nugget') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:glowstone', 1000))
  .outputItem(Item.of('4x #forge:dusts/lumium'))
  .setPerTick(true)
  .inputFE(2000)
  .duration(300)

  //Signalum
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('2x #forge:dusts/lumium', '3x #forge:dusts/titanium','2x #forge:dusts/energetic_alloy','4x hostilenetworks:nether_prediction') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:redstone', 1000))
  .outputItem(Item.of('4x #forge:dusts/signalum'))
  .setPerTick(true)
  .inputFE(2000)
  .duration(300)

  //Enderium
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('2x #forge:dusts/signalum', '3x #forge:dusts/rune', '#forge:dusts/molybdenum', '4x hostilenetworks:end_prediction') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:ender', 1000))
  .outputItem(Item.of('4x #forge:dusts/enderium'))
  .setPerTick(true)
  .inputFE(2000*2)
  .duration(300)
*/


// Industrial_alloy_ingot
  event.shaped('4x kubejs:industrial_alloy_ingot', [
    'AIQ',
    'IBI',
    'QIA'
    ], {
    B: 'immersiveengineering:biodiesel_bucket',
    A: 'thermal:cured_rubber', //'mna:bone_ash',
    Q: 'immersiveengineering:concrete_leaded', //'botania:quartz_dark',
    I: '#forge:ingots/steel',
    }).id(`mbm2:industrial_alloy_ingot_4x`)
  
event.shaped('2x kubejs:industrial_alloy_ingot', [
	'AIQ',
	'IBI',
	'QIA'
  ], {
	B: 'immersiveengineering:herbicide_bucket',
	A: 'thermal:cured_rubber', //'mna:bone_ash',
	Q: 'immersiveengineering:concrete_leaded', //'botania:quartz_dark',
	I: '#forge:ingots/steel',
  }).id(`mbm2:industrial_alloy_ingot_2x`)

	//Energetic Blend
	global.powahEnergizing(event, [Item.of('#forge:dusts/glowstone').toJson(), Item.of('#forge:dusts/redstone').toJson()], Item.of('kubejs:energetic_blend'), 15000, 'mbm2:powah/energetic_blend')
	
  //Energetic Alloy
	event.recipes.tconstruct.casting_table('kubejs:energetic_alloy_ingot', 'tconstruct:molten_electrum', 90).cast('kubejs:energetic_blend').consumeCast().coolingTime(100).id(`mbm2:energetic_alloy_ingot`)
  
  //Soul Steel (tinkers)
   global.tinkersAlloying(event, 'tconstruct:molten_soulsteel', 90, [{name: 'kubejs:molten_nethersteel',amount: 90}, {name: 'kubejs:liquid_smoke',amount: 100}, {name: 'tconstruct:liquid_soul',amount: 500}], 1000, `mbm2:smeltery/alloys/molten_soulsteel`)
  


  
  ///////////// Brick Chain /////////////
  //Clay Bricks
	event.recipes.createPressing('kubejs:unfired_clay_brick', 'minecraft:clay_ball').id(`mbm2:pressing/unfired_clay_brick`)
  //Brik
  	event.remove({id: 'minecraft:brick'})
  	event.smelting('minecraft:brick', 'kubejs:unfired_clay_brick').id(`kubejs:smelting/brick`)

  //Sandy Bricks
  event.recipes.createMixing([`kubejs:sandy_brick`], ['kubejs:unfired_clay_brick', 'sand']).id('mbm2:mixing/sandy_brick')

  //Sturdy Bricks
  event.recipes.createMixing([`kubejs:sturdy_brick`], ['kubejs:sandy_brick', 'gravel']).id('mbm2:mixing/sturdy_brick')
  //Seared Brick
	event.smelting('tconstruct:seared_brick', 'kubejs:sturdy_brick').id(`mbm2:smelting/seared_brick`)
  //Coke Oven Brick
  event.blasting('kubejs:coke_oven_brick', 'tconstruct:seared_brick').id(`mbm2:blasting/coke_oven_brick`)

  //Tough Bricks
	event.recipes.createMixing('kubejs:tough_brick', [Fluid.of('kubejs:molten_slag', 125), 'create:cinder_flour', 'kubejs:sturdy_brick']).id(`mbm2:mixing/tough_brick`)
	//event.recipes.createMixing('kubejs:tough_brick', ['#forge:dusts/slag', 'create:cinder_flour', 'kubejs:sturdy_brick']).heated().id(`mbm2:mixing/tough_brick`)

  //Scorched Bricks
  event.smelting('tconstruct:scorched_brick', 'kubejs:tough_brick').id(`mbm2:smelting/scorched_brick`)
  //Blast Bricks
  event.blasting('kubejs:blast_brick', 'tconstruct:scorched_brick').id(`mbm2:blasting/blast_brick`)

  //Heated Bricks
  event.recipes.createFilling('kubejs:heated_brick', [Fluid.of('tconstruct:magma', 250), 'kubejs:tough_brick']).id('mbm2:filling/heated_brick')
  
  //Spirited Bricks
	event.recipes.createCompacting('kubejs:spirited_brick', ['kubejs:heated_brick', 'spirit:soul_powder']).superheated().id(`mbm2:compacting/spirited_brick`)

  //Reactive Blend
event.shaped('kubejs:reactive_blend', [
	'RL',
  'Q '
  ], {
	R: '#forge:dusts/redstone',
	L: '#forge:dusts/lapis',
	Q: '#forge:dusts/quartz'
  }).id(`mbm2:crafting/reactive_blend`)

  event.recipes.createMixing([`2x kubejs:reactive_blend`], ['#forge:dusts/redstone', '#forge:dusts/lapis', '#forge:dusts/quartz']).id('mbm2:mixing/reactive_blend')

  event.recipes.multiblocked.multiblock('mixer')
    .inputItems('#forge:dusts/redstone', '#forge:dusts/lapis', '#forge:dusts/quartz')
    .outputItem('3x kubejs:reactive_blend')
    .setPerTick(true)
    .inputFE(1000)
    .duration(120)

    //Hardened Glass
    global.tinkersAlloying(event, 'kubejs:molten_hardened_glass', 250, [{name: 'tconstruct:molten_quartz',amount: 50}, {name: 'tconstruct:molten_glass',amount: 250}, {name: 'tconstruct:molten_obsidian',amount: 250}], 1000, `mbm2:smeltery/alloys/molten_hardened_glass`)
    event.recipes.tconstruct.casting_basin('thermal:obsidian_glass', 'kubejs:molten_hardened_glass', 1000).noCast().coolingTime(250).id(`mbm2:casting/hardened_glass`)
 

  /*
    Supported recipe methods:
    
    .noCast()
    
    .multiUseCast(castType)
    
    .singleUseCast(castType)
    
    .switchSlots()*/

  global.mekanismInfusionConversion(event, Item.of('hostilenetworks:empty_prediction'), 'kubejs:matrix', 10, 'mbm2:infuse/matrix')
    
  global.mekanismInfusionConversion(event, Item.of('chemlib:chitin'), 'kubejs:chitin', 10, 'mbm2:infuse/chitin_from_chitin')
  global.mekanismInfusionConversion(event, Item.of('chemlib:chitin_dust'), 'kubejs:chitin', 100, 'mbm2:infuse/chitin_from_chitin_dust')
  //global.mekanismMetallurgicInfusing(event, Item.of('kubejs:exoskeleton_compound_ingot'), Item.of('#forge:ingots/adamantine_alloy'), 'mbm2:chitin', 1040, `mbm2:exoskeleton_compound_ingot`)
  event.recipes.mekanismMetallurgicInfusing('kubejs:exoskeleton_composit_ingot', Item.of('#forge:ingots/ostrum'), {infuse_type: 'kubejs:chitin', amount: 100}).id(`mbm2:exoskeleton_composit_ingot`);


	//ender ingot recipe rework
  global.anyFilling(event, 'extendedcrafting:ender_ingot', '#forge:ingots/graphite', Fluid.of('thermal:ender', 125))
	//event.recipes.createMixing('extendedcrafting:ender_ingot', [Fluid.of('thermal:ender', 250), '#forge:ingots/graphite']).heated().id('mbm2:mixing/ender_ingot')

  //crystalized_alloy
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('4x #forge:dusts/illuminated_menril', '#forge:dusts/signalum') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('integrateddynamics:menril_resin', 1000))
  .outputItem(Item.of('#forge:dusts/crystalized_alloy'))
  .setPerTick(true)
  .inputFE(2000*8)
  .duration(100)
  
  //So you want to melt slag, eh?
event.recipes.thermal.crucible(Fluid.of('kubejs:molten_slag', 250), ['thermal:slag','kubejs:slag_dust'])

//Molten Slag by mixing
event.recipes.createMixing([Fluid.of('kubejs:molten_slag', 250)], ['kubejs:slag_dust']).heated().id(`mbm2:mixing/slag`)

//Luminite
event.recipes.thermal.crucible(Fluid.of('kubejs:molten_luminite', 250), ['kubejs:luminite','kubejs:luminite_dust'])

//Luminite
event.recipes.multiblocked.multiblock("chemical_reactor")
	.inputFluid(Fluid.of('mekanism:brine', 1000))
	.inputFluid(Fluid.of('tconstruct:molten_lumium', 45))
	.inputItem('16x chemlib:phosphorus')
	.inputItem('thermal:coal_coke')
	.outputItem('kubejs:luminite')
	.setPerTick(true)
	.inputFE(4000)
	.duration(100)


//Blazing Redstone
event.recipes.createMixing('kubejs:blazing_redstone', ['minecraft:blaze_powder','#forge:dusts/redstone']).id(`mbd2:create/mixing/blazing_redstone`)
event.recipes.multiblocked.multiblock('mixer')
  .inputItems('minecraft:blaze_powder','#forge:dusts/redstone')
  .outputItem(`kubejs:blazing_redstone`)
  .setPerTick(true)
  .inputFE(500)
  .duration(100)

 ///////////////////// Elemental Stuff /////////////////

 event.recipes.thermal.crucible(Fluid.of(`kubejs:blazing_pyrotheum`, 250), `kubejs:pyrotheum_dust`).id(`mbm2:crucible/pyrotheum`)
 global.tinkersMeltingPlain(event, 'kubejs:blazing_pyrotheum', 250, '#forge:dusts/pyrotheum', 900, 20, `mbm2:smeltery/melting/pyrotheum`)
 event.recipes.thermal.crucible(Fluid.of(`kubejs:gelid_cryotheum`, 250), `kubejs:cryotheum_dust`).id(`mbm2:crucible/cryotheum`)
 event.recipes.thermal.crucible(Fluid.of(`kubejs:zephyrean_aerotheum`, 250), `kubejs:aerotheum_dust`).id(`mbm2:crucible/aerotheum`)
 event.recipes.thermal.crucible(Fluid.of(`kubejs:tectonic_petrotheum`, 250), `kubejs:petrotheum_dust`).id(`mbm2:crucible/petrotheum`)

  //volatile_elemental_mixture
 event.recipes.multiblocked.multiblock('mixer')
 .inputItem('kubejs:catalyst_gem')
 .inputFluid(Fluid.of('kubejs:blazing_pyrotheum', 250))
 .inputFluid(Fluid.of('kubejs:gelid_cryotheum', 250))
 .inputFluid(Fluid.of('kubejs:zephyrean_aerotheum', 250))
 .inputFluid(Fluid.of('kubejs:tectonic_petrotheum', 250))
 .outputFluid(Fluid.of('kubejs:volatile_elemental_mixture', 500))
 .setPerTick(true)
 .inputFE(10000)
 .duration(100)

  //stable_elemental_fusion
  let gemTiers = {
    'crude':0.25,
    'fine':0.15,
    'pristine':0.05,
  }

  for (var tier in gemTiers) {
    event.recipes.multiblocked.multiblock('elemental_stabilizer')
    .setChance(gemTiers[tier])
    .inputItems(
      `elementalcraft:${tier}_fire_gem`, 
      `elementalcraft:${tier}_water_gem`, 
      `elementalcraft:${tier}_air_gem`, 
      `elementalcraft:${tier}_earth_gem`
    ) 
    .setChance(1)
    .inputFluid(Fluid.of('kubejs:volatile_elemental_mixture', 1000))
    .outputFluid(Fluid.of('kubejs:stable_elemental_fusion', 500))
    //.setPerTick(true)
    //.inputFE(2000*8)
    .duration(100)
	}

  //Elemental Core
  global.anyFilling(event, 'kubejs:elemental_core', 'botania:dragonstone_block', Fluid.of('kubejs:stable_elemental_fusion', 500))
  
  //Nether Star Shards
	event.recipes.createCrushing([
		Item.of('kubejs:nether_shard').withChance(0.40),
		Item.of('kubejs:nether_shard_west').withChance(0.20),
		Item.of('kubejs:nether_shard_east').withChance(0.10),
		Item.of('kubejs:nether_shard_south').withChance(0.05),
	  ], 'nether_star').id(`mbm2:crushing/nether_star`)


    //Get Rotated
    global.botaniaPool(event, 'kubejs:nether_shard_east', 'kubejs:nether_shard', 250, 'botania:alchemy_catalyst', `mbm2:botania/alchemy_catalyst/nether_shard_east`)
    global.botaniaPool(event, 'kubejs:nether_shard_south', 'kubejs:nether_shard_east', 250, 'botania:alchemy_catalyst', `mbm2:botania/alchemy_catalyst/nether_shard_south`)
    global.botaniaPool(event, 'kubejs:nether_shard_west', 'kubejs:nether_shard_south', 250, 'botania:alchemy_catalyst', `mbm2:botania/alchemy_catalyst/nether_shard_west`)
    global.botaniaPool(event, 'kubejs:nether_shard', 'kubejs:nether_shard_west', 250, 'botania:alchemy_catalyst', `mbm2:botania/alchemy_catalyst/nether_shard`)

  //Elemental Star
    event.recipes.createMechanicalCrafting('kubejs:elemental_star', [
      ' N ',
      'WCE',
      ' S ',
      ], {
        N: 'kubejs:nether_shard',
        W: 'kubejs:nether_shard_west',
        E: 'kubejs:nether_shard_east',
        S: 'kubejs:nether_shard_south',
        C: 'kubejs:elemental_core',
      }).id('mbm2:mechanicalcrafting/elemental_star')
  
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " A ",
      "BCD",
      " E "
    ],
    "key": {
      "A": {
        "item": "kubejs:nether_shard"
      },
      "B": {
        "item": "kubejs:nether_shard_west"
      },
      "C": {
        "item": "kubejs:elemental_core"
      },
      "D": {
        "item": "kubejs:nether_shard_east"
      },
      "E": {
        "item": "kubejs:nether_shard_south"
      }
    },
    "result": {
      "item": "kubejs:elemental_star"
    }
  }).id(`mbm2:extendedcrafting/elemental_star`)
 
//////////////////Rune Of Assembly////////////////////
event.recipes.botania.runic_altar('kubejs:assembly_rune', ['botania:crafty_crate', 'ars_nouveau:glyph_craft', 'quark:rainbow_rune', 'elementalcraft:major_rune_slate', 'naturesaura:auto_crafter'], 250000).id(`mbm2:assembly_rune`)

});
