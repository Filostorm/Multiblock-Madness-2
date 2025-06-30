onEvent('morejs.villager.trades', event =>{

    event.removeModdedTrades(['pneumaticcraft:mechanic'], 1)
    event.addTrade('pneumaticcraft:mechanic', 1, [Item.of('minecraft:emerald', 9), Item.of('#forge:ingots/steel', 3)], Item.of('pneumaticcraft:compressed_iron_block', 1))
    event.addTrade('pneumaticcraft:mechanic', 1, [Item.of('minecraft:emerald', 8)], Item.of('pneumaticcraft:pcb_blueprint', 1))
    event.addTrade('pneumaticcraft:mechanic', 1, [Item.of('minecraft:emerald', 4)], Item.of('pneumaticcraft:air_canister', 1))
    event.addTrade('pneumaticcraft:mechanic', 1, [Item.of('minecraft:emerald', 2)], Item.of('pneumaticcraft:pressure_tube', 8))
    event.removeModdedTrades(['pneumaticcraft:mechanic'], 5)
    event.addTrade('pneumaticcraft:mechanic', 5, [Item.of('minecraft:emerald', 10)], Item.of('pneumaticcraft:stop_worm', 1))
    event.addTrade('pneumaticcraft:mechanic', 5, [Item.of('minecraft:emerald', 10)], Item.of('pneumaticcraft:nuke_virus', 1))
    event.addTrade('pneumaticcraft:mechanic', 5, [Item.of('minecraft:emerald', 20), Item.of('pneumaticcraft:empty_pcb')], Item.of('pneumaticcraft:printed_circuit_board', 1))
    event.addTrade('pneumaticcraft:mechanic', 5, [Item.of('minecraft:emerald', 15)], Item.of('pneumaticcraft:micromissiles', 1))
    event.addTrade('pneumaticcraft:mechanic', 5, [Item.of('minecraft:emerald', 25)], Item.of('pneumaticcraft:drone', 1))


})