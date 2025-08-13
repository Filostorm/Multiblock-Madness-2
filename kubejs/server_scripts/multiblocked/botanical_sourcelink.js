onEvent('recipes', event =>{
    //Botanical Sourcelink
    event.shaped('mbm2:botanical_sourcelink', ['ABA','CDE','FFF'], {A: 'kubejs:tier_2_magical_alloy_sprocket',B: 'kubejs:source_pearl',C: 'kubejs:bottled_magic',D: 'engineersdecor:sign_magichazard',E: 'botania:blacker_lotus',F: '#botania:glimmering_livingwood_logs'})

    //source to mana
    event.recipes.multiblocked.multiblock('botanical_sourcelink')
    .setChance(0.0)
    .inputItem('#forge:ingots/manasteel')
    .setChance(1)
    .setPerTick(true)
    .inputANSource(10)
    .outputMana(4)
    .duration(1)
    .id('mbm2:botanical_sourcelink/source_to_mana')

    //Mana to Source
    event.recipes.multiblocked.multiblock('botanical_sourcelink')
    .setChance(0.0)
    .inputItem('ars_nouveau:source_gem')
    .setChance(1)
    .setPerTick(true)
    .inputMana(4)
    .outputANSource(10)
    .duration(1)
    .id('mbm2:botanical_sourcelink/mana_to_source')
})