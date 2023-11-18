

onEvent("botania.brews.registry", event => {
    event.create("bargaining")
        /**
         * The cost of mana per brew.
         * For Tainted Blood Pendant, it is cost / duration / effectLevel * 2.5 per tick.
         */
        .cost(5000)
        /**
         * The effect you want to specify for the Brew,
         * can be specified for multiple times for applying
         * multiple effects at once.
         * The parameters come the same as /effect,
         * except for duration is in ticks, not seconds.
         */
        .effect("minecraft:hero_of_the_village", 360 * 20, 0, true, true)
        /**
         * Set to deny incense for this brew.
         */
        .noIncense()
        
    event.create("greater_bargaining")
        .cost(8000)
        .effect("minecraft:hero_of_the_village", 180 * 20, 1, true, true)
        .noIncense()

    let sightmaterials = [
        "coal",
        "diamond",
        "emerald",
        "gold",
        "iron",
        "lapis",
        "redstone",
        "aluminium",
        "copper",
        "tin",
        "nickel",
        "uranium",
        "lead",
        "silver",
        "zinc",
        "osmium",
        "quartz",
        "platinum",
        "netherite"
    ]

    sightmaterials.forEach(material => {
        event.create(`${material}_sight`)
        .cost(6000)
        .effect(`potionsmaster:${material}potioneffect`, 240 * 20, 0, true, true)
        .noIncense()
    })



})