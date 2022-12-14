global.newMaterialParts = [
    /////////////// Tier 0 Metals /////////////////////////////
    
    {
      'material': 'iron',
      'color': 0xd9d7d7,
      'type': 'base_metal',
      'tier': 0,
      'itemParts': ['hammer', 'mechanical_component'],
      'blockParts': ['cog_block'],
      'fluid_id': 'tconstruct:molten_iron',
      'durability': 128,
      'ore': true,
      'byproducts': ['gold', 'nickel', 'chromium'],
      'allomancy': 'Iron allows you to Pull on metals. For items and other small entities, this means pulling them toward you. For blocks and large metallic entities, this means you move toward them',
      'feruchemy': 'Weight--Slow + Resist or Feather Fall'
    },
    {
      'material': 'tin',
      'color': 0x9dbdc2,
      'type': 'base_metal',
      'tier': 0,
      'itemParts': ['rod', 'wire', 'hammer'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_tin',
      'durability': 128,
      'ore': true,
      'byproducts': ['flourite'],
      'allomancy': 'Tin gives you Night Vision, and allows you to see which direction sounds come from using an indicator particle. This particle is also colored according to the hostility of the sound source. Friendly mobs are green, hostile mobs are red',
      'feruchemy': 'Sight--Night Vision or Blindness'
    },
    {
      'material': 'gold',
      'color': 0xffe870,
      'type': 'base_metal',
      'tier': 0,
      'itemParts': ['mechanical_component'],
      'blockParts': ['cog_block'],
      'fluid_id': 'tconstruct:molten_gold',
      'ore': true,
      'byproducts': ['iron'],
      'allomancy': 'Gold lets you see into your "past" by showing you the location you most recently died in this dimension',
      'feruchemy': 'Health--Regeneration/Instant Health or Health Drains/s'
    },
    {
      'material': 'copper',
      'color': 0xf7ad63,
      'type': 'base_metal',
      'tier': 0,
      'itemParts': ['hammer', 'mechanical_component'],
      'blockParts': ['cog_block'],
      'fluid_id': 'tconstruct:molten_copper',
      'durability': 128,
      'ore': true,
      'byproducts': ['gold', 'sulfur'],
      'allomancy': 'Copper hides your Allomancy from detection. When you are burning copper, yourself and other allomancers nearby are cloaked from the senses of a Bronze burner. However, your own ability to use Bronze is nullified when burning Copper',
      'feruchemy': 'Memories--Stores Experience or Retrieved Stored Experience'
    },
    
    /////////////// Tier 1 Metals /////////////////////////////
    {
      'material': 'lead',
      'color': 0x4f5a6e,
      'type': 'base_metal',
      'tier': 1,
      'itemParts': ['rod', 'hammer'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_lead',
      'durability': 128,
      'ore': true,
      'byproducts': ['silver'],
    },
    {
      'material': 'nickel',
      'color': 0xc2b17a,
      'type': 'base_metal',
      'tier': 1,
      'itemParts': ['rod', 'wire', 'hammer'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_nickel',
      'durability': 128,
      'ore': true,
      'byproducts': ['iron', 'platinum'],
    },
    {
      'material': 'silver',
      'color': 0xc7d3d6,
      'type': 'base_metal',
      'tier': 1,
      'itemParts': ['rod', 'wire', 'hammer'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_silver',
      'durability': 128,
      'ore': true,
      'byproducts': ['lead'],
    },
    {
      'material': 'zinc',
      'color': 0x97c7b3,
      'type': 'base_metal',
      'tier': 1,
      'itemParts': ['plate', 'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_zinc',
      'ore': true,
      'byproducts': ['sulfur'],
      'allomancy': 'Zinc allows you to Riot the emotions of mobs, making them hostile. This means they will attack anything nearby. Even farm animals can be a threat',
      'feruchemy': 'Mental Speed--Earn More/Less Experience orbs when Tapping/Storing respectively'
    },
    
    /////////////// Tier 2 Metals /////////////////////////////
    {
      'material': 'cobalt',
      'color': 0x2452c7,
      'type': 'base_metal',
      'tier': 2,
      'itemParts': ['plate', 'gear', 'rod', 'wire', 'hammer', 'mechanical_component'],
      'blockParts': ['cog_block', 'casing'],
      'durability': 256,
      'ore': true,
      'byproducts': ['gold'],
    },
    {
      'material': 'aluminum',
      'color': 0xb6c2c2,
      'type': 'base_metal',
      'tier': 2,
      'itemParts': ['plate', 'gear', 'rod'],
      'blockParts': [],
      'ore': true,
      'raw_ore': true,
      'byproducts': ['titanium'],
      'allomancy': 'Aluminum is a purifying metal - it removes all metals from your current stock. This may seem useless, but it also removes all potion effects - not a bad trade to remove some Wither or Poison before it kills you',
      'feruchemy': 'Aluminum and FID: Storing in a metalmind "Keys" it to you, so that only you can tap the power stored within. But if you Store Aluminum first, the metalmind remains "unkeyed", allowing any Feruchemist to Tap is Resouces (good for Co-ops!) (Note this makes the metalmind unable to be keyed, even if all charges are removed)'
    },
    
    
    /////////////// Tier 3 Metals /////////////////////////////
    
    {
      'material': 'titanium',
      'color': 0x4668cf,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['plate', 'gear', 'rod', 'wire', 'hammer'],
      'blockParts': [],
      'fluid': 'thick',
      'durability': 1024,
      'ore': true,
      'raw_ore': true,
      'byproducts': ['aluminum'],
    },
    {
      'material': 'tungsten',
      'color': 0x282c33,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['plate', 'gear', 'rod', 'wire', 'hammer'],
      'blockParts': [],
      'durability': 1024,
      'ore': true,
      'raw_ore': true,
      'byproducts': ['thorium'],
    },
    {
      'material': 'platinum',
      'color': 0x6be6ff,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['ingot', 'nugget', 'dust', 'plate', 'gear', 'rod', 'wire', 'hammer'],
      'blockParts': ['storage_block'],
      'durability': 1024,
      'ore': true,
      'raw_ore': true,
      'byproducts': ['nickel', 'osmium'],
    },
    {
      'material': 'osmium',
      'color': 0xe6f7ff,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['plate', 'gear', 'rod', 'wire'],
      'blockParts': [],
      'ore': true,
      'byproducts': ['platinum'],
    },
    {
      'material': 'uranium',
      'color': 0x8be8b0,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['plate', 'gear', 'rod', 'wire'],
      'blockParts': [],
      'ore': true,
      'byproducts': ['lead', 'thorium'],
    },
    {
      'material': 'thorium',
      'color': 0x543923,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': [],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'byproducts': ['uranium'],
    },
    {
      'material': 'ostrum',
      'color': 0x73485d,
      'tier': 3,
      'type': 'base_metal',
      'itemParts': ['gear', 'rod', 'dust', 'plate', 'plating'],
      'blockParts': [],
      'ore': true,
    },
    {
      'material': 'magnesium',
      'color': 0x997996,
      'itemParts': ['plate', 'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'boron',
      'color': 0x20293b,
      'itemParts': ['ingot', 'nugget', 'dust'],
      'blockParts': ['storage_block'],
      'fluid': 'thick'
    },
    
    /////////////// Tier 4 Metals /////////////////////////////
    
    {
      'material': 'calorite',
      'color': 0xc43b3b,
      'tier': 4,
      'type': 'base_metal',
      'itemParts': ['gear', 'rod', 'wire', 'dust', 'plate', 'plating'],
      'blockParts': [],
      'ore': true,
    },
    {
      'material': 'stellarite',
      'color': 0x858f7c,
      'tier': 4,
      'type': 'base_metal',
      'itemParts': ['ingot', 'gear', 'rod', 'wire', 'dust', 'plating'],
      'blockParts': [],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'chromium',
      'color': 0xcfb793,
      'type': 'base_metal',
      'tier': 4,
      'itemParts': ['plate',  'gear', 'rod', 'wire', 'dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'allomancy': 'Chromium removes all metals from the stock of players you click on, while also removing all potion effects from them',
      'feruchemy': 'Luck--Good or Bad Luck'
    },
    {
      'material': 'cadmium',
      'color': 0x97b7bf,
      'type': 'base_metal',
      'tier': 4,
      'itemParts': ['plate',  'gear', 'rod', 'wire', 'dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'allomancy': 'Cadmium slows down the mobs in the area around you',
      'feruchemy': 'Breath--Respiration/Water Breathing or Air Bar when not swimming'
    },
    {
      'material': 'palladium',
      'color': 0x522d22,
      'type': 'base_metal',
      'tier': 4,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'iridium',
      'color': 0x1942bf,
      'type': 'base_metal',
      'tier': 4,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'vanadium',
      'color': 0x464e66,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': []
    },
    {
      'material': 'neodymium',
      'color': 0x634d59,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'desh',
      'color': 0xffa34d,
      'type': 'base_metal',
      'tier': 3,
      'itemParts': ['gear', 'rod', 'wire'],
      'blockParts': [],
      'ore': true
    },
    
    /////////////// Tier 1 Alloys /////////////////////////////
    {
      'material': 'bronze',
      'color': 0xfa7532,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['rod', 'wire', 'hammer', 'mechanical_component', 'plating'],
      'blockParts': ['sheetmetal', 'cog_block', 'casing'],
      'fluid_id': 'tconstruct:molten_bronze',
      'durability': 256,
      'amount': 4,
      'dust_input': ['3x #forge:dusts/copper','#forge:dusts/tin'],
      'ingot_input': ['3x #forge:ingots/copper','#forge:ingots/tin'],
      'tinkers_input': [{tag: 'forge:molten_copper',amount: 270},{tag: 'forge:molten_tin',amount: 90}],
      'allomancy': 'Bronze allows you to detect the Allomancy of other players, in much the same way Iron or Steel detects metal or Tin indicates sounds',
      'feruchemy': 'Wakefulness--Reset Phantom Timer/Switch Day to night or Night to Day or Spawn Phantoms within ~30 of storage (Must store the whole time)'
    },
    {
      'material': 'constantan',
      'color': 0xdbb488,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['rod', 'wire', 'hammer', 'mechanical_component', 'plating'],
      'blockParts': ['cog_block'],
      'fluid_id': 'tconstruct:molten_constantan',
      'durability': 256,
      'amount': 2,
      'dust_input': ['#forge:dusts/copper','#forge:dusts/nickel'],
      'ingot_input': ['#forge:ingots/copper','#forge:ingots/nickel'],
      'tinkers_input': [{tag: 'forge:molten_copper',amount: 270},{tag: 'forge:molten_tin',amount: 90}]
    },
    {
      'material': 'electrum',
      'color': 0xe6db95,
      'type': 'alloy',
      'tier': 1,
      'itemParts': [ 'rod', 'hammer', 'mechanical_component', 'plating'],
      'blockParts': [],
      'fluid_id': 'tconstruct:molten_electrum',
      'durability': 256,
      'amount': 2,
      'dust_input': ['#forge:dusts/gold','#forge:dusts/silver'],
      'ingot_input': ['#forge:ingots/gold','#forge:ingots/silver'],
      'tinkers_input': [{tag: 'forge:molten_gold',amount: 90},{tag: 'forge:molten_silver',amount: 90}],
      'allomancy': 'Electrum lets you see your "future", showing you the location of your current spawn point',
      'feruchemy': 'Determination--Gain bonus Hearts or STOP Regenerating'
    },
    {
      'material': 'invar',
      'color': 0xa4bab5,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['rod', 'wire', 'hammer', 'mechanical_component', 'plating'],
      'blockParts': ['scaffolding', 'cog_block', 'casing'],
      'fluid_id': 'tconstruct:molten_invar',
      'durability': 256,
      'amount': 3,
      'dust_input': ['2x #forge:dusts/iron','#forge:dusts/nickel'],
      'ingot_input': ['2x #forge:ingots/iron','#forge:ingots/nickel'],
      'tinkers_input': [{tag: 'forge:molten_iron',amount: 180},{tag: 'forge:molten_tin',amount: 90}]
    },
    {
      'material': 'brass',
      'color': 0xffc96b,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['gear', 'wire', 'dust', 'hammer', 'mechanical_component', 'plating'],
      'blockParts': ['cog_block', 'casing'],
      'fluid_id': 'tconstruct:molten_brass',
      'durability': 256,
      'amount': 3,
      'dust_input': ['2x #forge:dusts/copper','#forge:dusts/zinc'],
      'ingot_input': ['2x #forge:ingots/copper','#forge:ingots/zinc'],
      'tinkers_input': [{tag: 'forge:molten_copper',amount: 180},{tag: 'forge:molten_zinc',amount: 90}],
      'allomancy': 'Brass allows you to Soothe the emotions of mobs, making them passive, even fearful. Creepers are your buddies!',
      'feruchemy': 'Warmth--Melt Snow + Ice/Makes all attacks have Fire Aspect or Fire Resistance'
    },
    {
      'material': 'red_alloy',
      'color': 0xff2626,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['plate', 'gear', 'wire', 'dust', 'rod'],
      'blockParts': [],
      'fluid': 'thick',
      'fluid_id': 'kubejs:molten_red_alloy',
      'amount': 2,
      'dust_input': ['#forge:dusts/copper','3x #forge:dusts/redstone'],
      'ingot_input': ['#forge:ingots/copper','3x #forge:dusts/redstone'],
      'tinkers_input': [{tag: 'forge:molten_copper',amount: 90},{tag: 'forge:redstone',amount: 300}]
    },
    {
      'material': 'pewter',
      'color': 0x9d96b5,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['ingot', 'nugget', 'plate', 'gear', 'dust', 'rod'],
      'blockParts': ['storage_block'],
      'fluid_id': 'tconstruct:molten_pewter',
      'amount': 4,
      'dust_input': ['2x #forge:dusts/tin','#forge:dusts/silver','#forge:dusts/lead'],
      'ingot_input': ['2x #forge:ingots/tin','#forge:ingots/silver','#forge:ingots/lead'],
      'tinkers_input': [{tag: 'forge:molten_tin',amount: 180},{tag: 'forge:molten_silver',amount: 90},{tag: 'forge:molten_lead',amount: 90}],
      'allomancy': 'Pewter grants increased speed, jump height, damage, and damage resistance to the player. Be careful, though - Any damage incurred while burning pewter is remembered, and if you stop burning it at the wrong time you could end up being killed by all the built up damage.',
      'feruchemy': 'Strength--Haste/Strength or Weakness/Mining Fatigue'
    },
    
    /////////////// Tier 2 Alloys /////////////////////////////
    {
      'material': 'steel',
      'color': 0xb5b3b3,
      'type': 'alloy',
      'tier': 2,
      'itemParts': ['plate',  'gear', 'rod', 'hammer'],
      'blockParts': [],
      'durability': 512,
      'allomancy': 'Steel allows you to Push on metals. This means moving metal items away from you, or pushing yourself off of metal blocks. This can be used as a sort of rudimentary flight, though it is more falling with style than anything else. Steel also allows you to use the Coin Bag item. If you have gold nuggets in your inventory and are burning steel, you can use this as a ranged weapon similar to the old Beta-edition Bow. Iron nuggets can also be used, causing more damage but far less accurately',
      'feruchemy': 'Speed--Speed Boost or Slowness'
    },
    {
      'material': 'hepatizon',
      'color': 0x5e497a,
      'type': 'alloy',
      'tier': 2,
      'fluid_id': 'tconstruct:molten_hepatizon',
      'amount': 2,
      'dust_input': ['2x #forge:dusts/copper','#forge:dusts/cobalt','4x #forge:gems/quartz'],
      'ingot_input': ['2x #forge:ingots/copper','#forge:ingots/cobalt','4x #forge:gems/quartz'],
      'tinkers_input': [{tag: 'forge:molten_copper',amount: 180},{tag: 'forge:molten_cobalt',amount: 90},{tag: 'forge:molten_quartz',amount: 400}],
      'itemParts': ['plate', 'gear', 'rod'],
      'blockParts': [],
    },
    {
      'material': 'fluix_steel',
      'color': 0x792be0,
      'type': 'alloy',
      'tier': 2,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': ['storage_block'],
      'fluid': 'thick'
    },
    {
      'material': 'manasteel',
      'color': 0x69a7ff,
      'type': 'alloy',
      'tier': 2,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'arcane_gold',
      'color': 0xe8a02a,
      'type': 'alloy',
      'tier': 2,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'vinteum',
      'color': 0x9be3fa,
      'type': 'alloy',
      'tier': 2,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'duralumin',
      'color': 0xa9b0ac,
      'type': 'alloy',
      'tier': 2,
      'itemParts': [ 'plate', 'gear', 'wire', 'dust', 'rod'],
      'blockParts': [],
      'fluid': 'thick',
      'fluid_id': 'kubejs:molten_duralumin',
      'amount': 4,
      'dust_input': ['3x #forge:dusts/aluminum','#forge:dusts/copper'],
      'ingot_input': ['3x #forge:ingots/aluminum','#forge:ingots/copper'],
      'tinkers_input': [{tag: 'forge:molten_aluminum',amount: 270},{tag: 'forge:molten_copper',amount: 90}],
      'allomancy': 'Duralumin enhances whatever other metal you are using. This may mean pushing harder with steel, speeding things up even more with Bendalloy, or even teleporting to special locations with Gold and Electrum. If this metal burns out (which it does quickly!) or is extinguished, it empties all other burning metals of their stock.',
      'feruchemy': 'Connection--Hero of the Village or Bad Omen'
    },
    {
      'material': 'nicrosil',
      'color': 0xa9a9b0,
      'type': 'alloy',
      'tier': 2,
      'itemParts': [ 'plate', 'gear', 'wire', 'dust', 'rod'],
      'blockParts': [],
      'fluid': 'thick',
      'fluid_id': 'kubejs:molten_nicrosil',
      'amount': 4,
      'dust_input': ['3x #forge:dusts/chromium','#forge:dusts/iron'],
      'ingot_input': ['3x #forge:ingots/chromium','#forge:ingots/iron'],
      'tinkers_input': [{tag: 'forge:molten_chromium',amount: 270},{tag: 'forge:molten_iron',amount: 90}],
      'allomancy': 'Nicrosil enhances whatever metal the player you left click on is burning. When you stop enhancing them, they will lose their stock of the currently burning metal.',
      'feruchemy': 'Pure Power--If you Store here first, any charges gained by Storing other metals gets stored here, albeit at a reduced rate. But if you Tap here first, charges will be consumed here before they are consumed by other metals.'
    },
    {
      'material': 'bendalloy',
      'color': 0xbab6a2,
      'type': 'alloy',
      'tier': 2,
      'itemParts': [ 'plate', 'gear', 'wire', 'dust', 'rod'],
      'blockParts': [],
      'fluid': 'thick',
      'fluid_id': 'kubejs:molten_bendalloy',
      'amount': 3,
      'dust_input': ['2x #forge:dusts/cadmium','#forge:dusts/lead'],
      'ingot_input': ['2x #forge:ingots/cadmium','#forge:ingots/lead'],
      'tinkers_input': [{tag: 'forge:molten_cadmium',amount: 180},{tag: 'forge:molten_lead',amount: 90}],
      'allomancy': 'Bendalloy speeds up everything in a bubble around you. Furnaces, crops, and mobs all go faster!',
      'feruchemy': 'Nutrition--Gives Saturation(Restores hunger bar) or Drains hunger bar.'
    },
    
    /////////////// Tier 3 Alloys /////////////////////////////
    
    {
      'material': 'signalum',
      'color': 0xff6e4a,
      'tier': 3,
      'itemParts': ['rod', 'wire'],
      'blockParts': [],
      'type': 'alloy',
      'fluid_id': 'tconstruct:molten_signalum',
      'amount': 4,
      'dust_input': ['3x #forge:dusts/bronze','#forge:dusts/silver','4x #forge:dusts/redstone'],
      'ingot_input': ['3x #forge:ingots/bronze','#forge:ingots/silver','4x #forge:dusts/redstone'],
    },
    {
      'material': 'enderium',
      'color': 0x5fc4d4,
      'tier': 3,
      'itemParts': ['rod', 'wire'],
      'blockParts': [],
      'type': 'alloy',
      'fluid_id': 'tconstruct:molten_enderium',
      'amount': 3,
      'dust_input': ['2x #forge:dusts/pewter','#forge:dusts/platinum','2x minecraft:ender_pearl'],
      'ingot_input': ['2x #forge:ingots/pewter','#forge:ingots/platinum','2x minecraft:ender_pearl'],
    },
    {
      'material': 'lumium',
      'color': 0xffd894,
      'type': 'alloy',
      'tier': 3,
      'itemParts': ['rod', 'wire'],
      'blockParts': [],
      'type': 'alloy',
      'fluid_id': 'tconstruct:molten_lumium',
      'amount': 2,
      'dust_input': ['#forge:dusts/tin','#forge:dusts/electrum','2x #forge:dusts/glowstone'],
      'ingot_input': ['#forge:ingots/tin','#forge:ingots/electrum','2x #forge:dusts/glowstone'],
    },
    {
      'material': 'damascus_steel',
      'color': 0x828282,
      'type': 'alloy',
      'tier': 3,
      'itemParts': ['custom_ingot', 'nugget', 'plate', 'gear', 'rod', 'hammer'],
      'blockParts': ['storage_block'],
      'fluid': 'thick',
      'durability': 4096
    },
    {
      'material': 'netherite',
      'color': 0x524c49,
      'itemParts': [ 'rod', 'wire'],
      'blockParts': []
    },
    {
      'material': 'terrasteel',
      'color': 0x63e645,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'elementium',
      'color': 0xf569b6,
      'itemParts': ['plate',  'gear', 'rod', 'wire'],
      'blockParts': [],
      'fluid': 'thick'
    },
    /////////////// Magical Ore ///////////////////////////////
    
    {
      'material': 'arcanite',
      'color': 0xe2d4fa,
      'tier': 1,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'mithril',
      'color': 0x8a90db,
      'tier': 2,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'orichalcum',
      'color': 0xfa6837,
      'tier': 3,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'runite',
      'color': 0x73b4bf,
      'tier': 4,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'vibranium',
      'color': 0x7cebbe,
      'tier': 5,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'adamantite',
      'color': 0xc23c3c,
      'tier': 5,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'dracolith',
      'color': 0x421c63,
      'tier': 6,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    {
      'material': 'uru',
      'color': 0x1c121c,
      'tier': 6,
      'type': 'base_metal',
      'itemParts': ['ingot', 'nugget','dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'raw_ore': true
    },
    
    /////////////// Ore /////////////////////////////
    /*
    {
      'material': 'rutile',
      'color': 0xff4d4d,
      'type': 'base_metal',
      'itemParts': ['dust'],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'sphalerite',
      'color': 0x7b7db0,
      'type': 'base_metal',
      'itemParts': ['dust'],
      'blockParts': [],
      'ore': true
    },*/
    {
      'material': 'vincyte',
      'color': 0x0046d1,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['tin','nickel'],
      'gem_components': ['lapis', 'apatite'],
    },
    {
      'material': 'imortite',
      'color': 0xf28a2e,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['copper','gold'],
      'gem_components': ['sulfur', 'fluorite'],
    },
    {
      'material': 'densite',
      'color': 0x667e94,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['silver','tin'],
      'gem_components': ['quartz', 'certus_quartz'],
    },
    {
      'material': 'potentium',
      'color': 0xba49e3,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['gold','zinc'],
      'gem_components': ['diamond', 'amethyst'],
    },
    {
      'material': 'jimmium',
      'color': 0x270059,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['lead','iron'],
      'gem_components': ['emerald', 'niter'],
    },
    {
      'material': 'kharaxium',
      'color': 0x8f0000,
      'tier': 1,
      'type': 'compound_ore',
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick',
      'ore': true,
      'raw_ore': true,
      'components': ['iron','copper'],
      'gem_components': ['ruby', 'cinnabar'],
    },
    
    /////////////// Other /////////////////////////////
    {
      'material': 'slag',
      'color': 0x947b6c,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'rich_slag',
      'color': 0x8a472d,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'wood',
      'color': 0x825c45,
      'itemParts': [],
      'blockParts': ['scaffolding']
    },
    {
      'material': 'ancient_wood',
      'color': 0xa86cba,
      'itemParts': [],
      'blockParts': ['scaffolding']
    },
    {
      'material': 'redstone',
      'color': 0xf54242,
      'type': 'dust',
      'tier': 1,
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'sulfur',
      'color': 0xe1eb34,
      'type': 'gem',
      'iconset': 'sulfur',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'lumite',
      'color': 0xffed7a,
      'type': 'gem',
      'iconset': 'sapphire',
      'itemParts': ['gem', 'dust'],
      'blockParts': ['storage_block'],
      'ore': true,
      'burnTime': 16 //items * 200
    },
    {
      'material': 'transmuted_silver',
      'color': 0xa9d0d9,
      'type': 'converted_metal',
      'itemParts': ['plate', 'gear', 'rod'],
      'blockParts': []
    },
    {
      'material': 'infused_iron',
      'color': 0x54b33b,
      'type': 'converted_metal',
      'itemParts': ['plate', 'gear', 'rod'],
      'blockParts': []
    },
    {
      'material': 'tainted_gold',
      'color': 0xa66032,
      'type': 'converted_metal',
      'itemParts': ['plate', 'gear', 'rod', 'dust'],
      'blockParts': []
    },
    {
      'material': 'sky_metal',
      'color': 0x83d5de,
      'type': 'converted_metal',
      'itemParts': ['plate', 'gear', 'rod'],
      'blockParts': ['storage_block']
    },
    {
      'material': 'compressed_steel',
      'color': 0x6b6b6b,
      'type': 'alloy',
      'itemParts': ['plate', 'rod', 'component'],
      'blockParts': [],
    },
    {
      'material': 'energized_steel',
      'color': 0xd9c380,
      'type': 'alloy',
      'itemParts': ['plate', 'rod', 'gear'],
      'blockParts': [],
    },
    {
      'material': 'air',
      'color': 0xfcffbf,
      'type': 'element',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'earth',
      'color': 0x579c4e,
      'type': 'element',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'fire',
      'color': 0xe34536,
      'type': 'element',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'water',
      'color': 0x4272f5,
      'type': 'element',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    },
    {
      'material': 'plutonium',
      'color': 0xbdabff,
      'itemParts': ['ingot', 'nugget', 'dust'],
      'blockParts': ['storage_block'],
      'fluid': 'thick'
    },
    {
      'material': 'neptunium',
      'color': 0x5a5863,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'americium',
      'color': 0x4a3a2f,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'curium',
      'color': 0x8a3e50,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'berkelium',
      'color': 0x755444,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'californium',
      'color': 0xc93328,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    {
      'material': 'einsteinium',
      'color': 0x4a6da8,
      'itemParts': ['dust'],
      'blockParts': [],
      'fluid': 'thick'
    },
    /*
    {
      'material': 'refined_iron',
      'color': 0xdbf5ff,
      'type': 'alloy',
      'itemParts': ['ingot', 'nugget', 'dust', 'plate', 'gear', 'wire'],
      'blockParts': ['storage_block'],
      'fluid': 'thick',
    },
    {
      'material': 'crude_steel',
      'color': 0x6a7175,
      'type': 'alloy',
      'itemParts': ['ingot', 'nugget', 'dust', 'plate', 'gear',],
      'blockParts': ['storage_block'],
      'fluid': 'thick',
    },
    {
      'material': 'thermalloy',
      'color': 0x8b4aed,
      'type': 'alloy',
      'tier': 1,
      'itemParts': ['ingot', 'nugget', 'rod', 'dust', 'plate', 'gear', 'wire', 'mechanical_component'],
      'blockParts': ['scaffolding','sheetmetal', 'cog_block','storage_block'],
      'fluid': 'thick',
      'fluid_id': 'kubejs:molten_thermalloy',
      'amount': 3,
      'dust_input': ['#forge:dusts/lumium','#forge:dusts/signalum','#forge:dusts/enderium'],
      'ingot_input': ['#forge:ingots/lumium','#forge:ingots/signalum','#forge:ingots/enderium'],
      'tinkers_input': [{tag: 'forge:molten_lumium',amount: 90},{tag: 'forge:molten_signalum',amount: 90},{tag: 'forge:molten_enderium',amount: 90}]
    },
    */
    
    /////////////// Gems /////////////////////////////
    /*
    {
      'material': 'ruby',
      'gem': true,
      'color': 0xff4f55,
      'type': 'gem',
      'itemParts': ['ruby', 'dust'],
      'blockParts': ['storage_block'],
      'ore': true
    },
    {
      'material': 'sapphire',
      'gem': true,
      'color': 0x7377ff,
      'type': 'gem',
      'itemParts': ['sapphire', 'dust'],
      'blockParts': ['storage_block'],
      'ore': true
    }*/
    {
      'material': 'certus_quartz',
      'gem': true,
      'color': 0xb7d8f7,
      'type': 'gem',
      'iconset': 'quartz',
      'itemParts': [],
      'blockParts': [],
      'ore': true
    }
    ]
    
    global.stoneTypes = [
      {
        'material': 'deepslate',
        'hardness': 6,
        'resistance': 6
      },
      {
        'material': 'netherrack',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'tuff',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'smooth_basalt',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'blackstone',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'endstone',
        'hardness': 4,
        'resistance': 4
      },
      {
        'material': 'darkstone',
        'hardness': 6,
        'resistance': 6
      },
      {
        'material': 'soapstone',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'granite',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'diorite',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'andesite',
        'hardness': 3,
        'resistance': 3
      },
      {
        'material': 'moon_stone',
        'hardness': 4,
        'resistance': 4
      },
      {
        'material': 'mars_stone',
        'hardness': 4,
        'resistance': 4
      },
      {
        'material': 'venus_stone',
        'hardness': 4,
        'resistance': 4
      },
      {
        'material': 'glacio_stone',
        'hardness': 4,
        'resistance': 4
      }
    ]