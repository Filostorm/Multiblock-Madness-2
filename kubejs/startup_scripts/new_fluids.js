

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
  });
  