

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
	

	//First Steel
	event.recipes.createMixing(`kubejs:carbon_covered_iron`, [`#forge:ingots/iron`, '#forge:dusts/coal_coke']).heated().id(`mbm2:carbon_covered_iron`)
  	global.tinkersMelting(event, 'kubejs:molten_slag', 50, 'tconstruct:molten_steel', 90, 'kubejs:carbon_covered_iron', 1200, 100, `mbm2:smeltery/melting/metal/first_steel`)


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


  //Signalum
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('3x #forge:dusts/dielectric_alloy','2x #forge:dusts/energetic_alloy','8x create:experience_nugget') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:redstone', 1000))
  .outputItem(Item.of('4x #forge:dusts/signalum'))
  .setPerTick(true)
  .inputFE(2000)
  .duration(300)

  //Lumium
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('3x #forge:dusts/aluminum','2x #forge:dusts/white_alloy','8x create:experience_nugget') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:glowstone', 1000))
  .outputItem(Item.of('4x #forge:dusts/lumium'))
  .setPerTick(true)
  .inputFE(2000)
  .duration(300)

  //Enderium
  event.recipes.multiblocked.multiblock('mixer')
  .inputItems('3x #forge:dusts/rune', '2x #forge:dusts/titanium', '4x hostilenetworks:end_prediction') //,'#forge:fine_dusts/rune'
  .inputFluid(Fluid.of('thermal:ender', 1000))
  .outputItem(Item.of('4x #forge:dusts/enderium'))
  .setPerTick(true)
  .inputFE(2000*2)
  .duration(300)



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
	global.powahEnergizing(event, [Item.of('#forge:dusts/glowstone').toJson(), Item.of('#forge:dusts/redstone').toJson()], 'kubejs:energetic_blend', 1,  15000, 'mbm2:powah/energetic_blend')
	
  //Energetic Alloy
	event.recipes.tconstruct.casting_table('kubejs:energetic_alloy_ingot', 'tconstruct:molten_electrum', 90).cast('kubejs:energetic_blend').consumeCast().coolingTime(100).id(`mbm2:energetic_alloy_ingot`)
  
  //Soul Steel (tinkers)
   global.tinkersAlloying(event, 'tconstruct:molten_soulsteel', 90, [{name: 'kubejs:molten_nethersteel',amount: 90}, {name: 'kubejs:liquid_smoke',amount: 100}, {name: 'tconstruct:liquid_soul',amount: 500}], 1000, `mbm2:smeltery/alloys/molten_soulsteel`)
  


  
  //Brick Chain
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
	event.recipes.createMixing('kubejs:tough_brick', ['#forge:dusts/slag', 'create:cinder_flour', 'kubejs:sturdy_brick']).heated().id(`mbm2:mixing/tough_brick`)
  //Scorched Bricks
  event.smelting('tconstruct:scorched_brick', 'kubejs:tough_brick').id(`mbm2:smelting/scorched_brick`)
  //Blast Bricks
  event.blasting('kubejs:blast_brick', 'tconstruct:scorched_brick').id(`mbm2:blasting/blast_brick`)

  //Tough Bricks, molten slag
	event.recipes.createMixing('kubejs:tough_brick', [Fluid.of('kubejs:molten_slag', 125), 'create:cinder_flour', 'kubejs:sturdy_brick']).heated().id(`mbm2:mixing/tough_brick`)

	//event.recipes.createMixing('2x tconstruct:scorched_brick', [Fluid.of('kubejs:molten_slag', 125), '2x create:cinder_flour', 'kubejs:sturdy_brick']).superheated().id(`mbm2:mixing/scorched_brick`)

  event.recipes.createFilling('kubejs:heated_brick', [Fluid.of('tconstruct:magma', 250), 'kubejs:tough_brick']).id('mbm2:filling/heated_brick')
  
	event.recipes.createCompacting('kubejs:spirited_brick', ['kubejs:heated_brick', 'spirit:soul_powder']).heated().id(`mbm2:compacting/spirited_brick`)

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
    .inputFE(1024)
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

    
  global.mekanismInfusionConversion(event, Item.of('chemlib:chitin'), 'kubejs:chitin', 10, 'mbm2:infuse/chitin_from_chitin')
  global.mekanismInfusionConversion(event, Item.of('chemlib:chitin_dust'), 'kubejs:chitin', 100, 'mbm2:infuse/chitin_from_chitin_dust')
  //global.mekanismMetallurgicInfusing(event, Item.of('kubejs:exoskeleton_compound_ingot'), Item.of('#forge:ingots/adamantine_alloy'), 'mbm2:chitin', 1040, `mbm2:exoskeleton_compound_ingot`)
  event.recipes.mekanismMetallurgicInfusing('kubejs:exoskeleton_composit_ingot', Item.of('#forge:ingots/adamantine_alloy'), {infuse_type: 'kubejs:chitin', amount: 100}).id(`mbm2:exoskeleton_composit_ingot`);


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
  

});
