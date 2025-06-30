

onEvent('fluid.registry', event => {
    event.create(`basic_catalyst_mixture`).thinTexture(0xab6737).bucketColor(0xab6737)
    event.create(`crystal_catalyst_mixture`).thinTexture(0x5332fa).bucketColor(0x5332fa)
    event.create(`magic_catalyst_mixture`).thinTexture(0xa251c4).bucketColor(0xa251c4)

    event.create(`zephyrean_aerotheum`).stillTexture('kubejs:block/fluid/aerotheum_still').flowingTexture('kubejs:block/fluid/aerotheum_flow').bucketColor(0xaea87c)
    event.create(`gelid_cryotheum`).stillTexture('kubejs:block/fluid/cryotheum_still').flowingTexture('kubejs:block/fluid/cryotheum_flow').bucketColor(0x1fd0fa)
    event.create(`tectonic_petrotheum`).stillTexture('kubejs:block/fluid/petrotheum_still').flowingTexture('kubejs:block/fluid/petrotheum_flow').bucketColor(0x221915)
    event.create(`blazing_pyrotheum`).stillTexture('kubejs:block/fluid/pyrotheum_still').flowingTexture('kubejs:block/fluid/pyrotheum_flow').bucketColor(0xfda735)

    event.create(`purified_water`).thinTexture(0x569fd6).bucketColor(0x569fd6)
    event.create(`liquid_air`).thinTexture(0xd4fffe).bucketColor(0xd4fffe)
    event.create(`hot_air`).thinTexture(0xc9b5b5).bucketColor(0xc9b5b5)
    event.create(`noble_gasses`).thinTexture(0xd8a7d9).bucketColor(0xd8a7d9)
    event.create(`liquid_nether_air`).thinTexture(0xa32e3f).bucketColor(0xa32e3f)
    event.create(`liquid_ender_air`).thinTexture(0x291436).bucketColor(0x291436)
    
    event.create(`liquid_shadows`).thickTexture(0x350e5c).bucketColor(0x350e5c)

//    event.create(`molten_luminite`).thickTexture(0xfcec03).bucketColor(0xfcec03)

    event.create(`liquid_smoke`).thickTexture(0x46494d).bucketColor(0x46494d)

    event.create(`molten_hardened_glass`).thinTexture(0x7dabbd).bucketColor(0x7dabbd)
    //event.create(`unfinished_molten_soulsteel`).thickTexture(0x403d3b).bucketColor(0x403d3b)

    event.create(`sludge`).thickTexture(0x6e4210).bucketColor(0x6e4210)
    
    event.create(`molten_carbon`).thickTexture(0x383432).bucketColor(0x383432)

    event.create(`aqua_regia`).thinTexture(0xc98949).bucketColor(0xc98949)

    event.create(`liquid_mana`).thinTexture(0x5acbd1).bucketColor(0x5acbd1)

    event.create(`liquid_source`).thinTexture(0xbf32bf).bucketColor(0xbf32bf)

    event.create(`liquid_magic`).thinTexture(0x2d43c2).bucketColor(0x2d43c2)


    event.create(`liquid_dragon_breath`).thinTexture(0xc560f0).bucketColor(0xc560f0)

    event.create(`raw_data`).stillTexture('kubejs:block/fluid/raw_data').flowingTexture('kubejs:block/fluid/raw_data').bucketColor(0x091209)
    event.create(`refined_data`).stillTexture('kubejs:block/fluid/refined_data').flowingTexture('kubejs:block/fluid/refined_data').bucketColor(0x080b12)

    event.create(`enriched_lava`).thickTexture(0xe04216).bucketColor(0xe04216)

    event.create(`volatile_elemental_mixture`).thinTexture(0x587025).bucketColor(0x587025)

    event.create(`stable_elemental_fusion`).thickTexture(0x7814db).bucketColor(0x7814db)


    event.create(`shadow_dragon_breath`).thickTexture(0x151742).bucketColor(0x151742)

    event.create(`hot_shadow_dragon_breath`).thinTexture(0x47002e).bucketColor(0x47002e)

    event.create(`cold_shadow_dragon_breath`).thinTexture(0x002840).bucketColor(0x002840)

    event.create(`metastable_void_dragon_breath`).thickTexture(0x070b63).bucketColor(0x070b63)

    event.create(`void_dragon_breath`).thickTexture(0x090017).bucketColor(0x090017)



    
    event.create(`coolant`).thinTexture(0x3c81c9).bucketColor(0x3c81c9)
    event.create(`high_capacity_coolant`).thinTexture(0x61dfe8).bucketColor(0x61dfe8)
    event.create(`heated_coolant`).thickTexture(0xc23055).bucketColor(0xc23055)

    event.create(`concentrated_aureal`).thickTexture(0xe4dfe6).bucketColor(0xe4dfe6)
    event.create('concentrated_soul').stillTexture('kubejs:block/fluid/concentrated_soul_still').flowingTexture('kubejs:block/fluid/concentrated_soul_flowing').bucketColor(0xedeae8)
  });
  

// TO DO ADD SLURRY FOR ORE PROCESSING (maybe)
const $EventBuses = java('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = java('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = java('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = java('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')


//ADD STUFF HERE
//GASES.register('example_gas', 0xA020F0)
//SLURRY.register('example_slurry', builder => builder.color(0xA020F0))
INFUSETYPE.register('chitin', 0x634f34)
INFUSETYPE.register('matrix', 0xa091ed)
INFUSETYPE.register('data', 0x84bfc2)
INFUSETYPE.register('dimensional', 0x00fbff)





GASES.register($EventBuses.getModEventBus('kubejs').get())
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

//global.mekanismInfusionConversion(event, Item.of('chemlib:chitin_dust'), 'kubejs:chitin', 100, 'mbm2:infuse/chitin_from_chitin_dust')
//event.recipes.mekanismMetallurgicInfusing('kubejs:exoskeleton_composit_ingot', Item.of('#forge:ingots/ostrum'), {infuse_type: 'kubejs:chitin', amount: 100}).id(`mbm2:exoskeleton_composit_ingot`);



onEvent('client.generate_assets', event => {
    //event.addLang('slurry.kubejs.dirty_example_slurry', `Dirty Example Slurry`)
    event.addLang('infuse_type.kubejs.chitin', `Chitin`)
    event.addLang('infuse_type.kubejs.matrix', `Matrix`)
    event.addLang('infuse_type.kubejs.data', `Data`)
    event.addLang('infuse_type.kubejs.dimensional', `Dimensional`)
  
})