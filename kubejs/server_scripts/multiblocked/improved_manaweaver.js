/*

onEvent('tags.items', event => {
    event.add('mbm2:mna_construct_part', [
    'mna:constructs/construct_blade_arm_right_stone', 'mna:constructs/construct_fishing_rod_right_wood', 'mna:constructs/construct_mana_cannon_left_wood', 'mna:constructs/construct_mana_torso_gold', 'mna:constructs/construct_shield_arm_right_gold',
    'mna:constructs/construct_fluid_nozzle_right_gold', 'mna:constructs/construct_blade_arm_right_wood', 'mna:constructs/construct_fishing_rod_right_stone', 'mna:constructs/construct_mana_cannon_left_stone', 'mna:constructs/construct_horn_head_wood',
    'mna:constructs/construct_caster_arm_left_iron', 'mna:constructs/construct_tank_torso_iron', 'mna:constructs/construct_fishing_rod_left_iron', 'mna:constructs/construct_caster_arm_left_wood', 'mna:constructs/construct_storage_torso_gold',
    'mna:constructs/construct_fishing_rod_left_wood', 'mna:constructs/construct_blade_arm_right_iron', 'mna:constructs/construct_fishing_rod_right_gold', 'mna:constructs/construct_rocket_legs_stone', 'mna:constructs/construct_basic_head_gold',
    'mna:constructs/construct_blade_arm_right_gold', 'mna:constructs/construct_storage_torso_stone', 'mna:constructs/construct_horn_head_iron', 'mna:constructs/construct_rocket_legs_wood', 'mna:constructs/construct_basic_torso_gold',
    'mna:constructs/construct_caster_arm_right_iron', 'mna:constructs/construct_grabber_arm_left_gold', 'mna:constructs/construct_grabber_arm_right_wood', 'mna:constructs/construct_grabber_arm_left_wood', 'mna:constructs/construct_axe_arm_left_stone',
    'mna:constructs/construct_axe_arm_right_stone', 'mna:constructs/construct_tank_torso_stone', 'mna:constructs/construct_axe_arm_left_wood', 'mna:constructs/construct_grabber_arm_right_stone', 'mna:constructs/construct_tank_torso_wood',
    'mna:constructs/construct_fishing_rod_left_stone', 'mna:constructs/construct_horn_head_stone', 'mna:constructs/construct_horn_head_gold', 'mna:constructs/construct_shield_arm_right_iron', 'mna:constructs/construct_tank_torso_gold',
    'mna:constructs/construct_grabber_arm_left_stone', 'mna:constructs/construct_blade_arm_left_gold', 'mna:constructs/construct_caster_arm_left_gold', 'mna:constructs/construct_fluid_nozzle_right_wood', 'mna:constructs/construct_reinforced_legs_gold',
    'mna:constructs/construct_mana_cannon_right_iron', 'mna:constructs/construct_shield_arm_left_stone', 'mna:constructs/construct_armor_torso_iron', 'mna:constructs/construct_fluid_nozzle_left_wood', 'mna:constructs/construct_hammer_arm_left_wood',
    'mna:constructs/construct_armor_torso_wood', 'mna:constructs/construct_shield_arm_left_iron', 'mna:constructs/construct_fluid_nozzle_right_stone', 'mna:constructs/construct_hammer_arm_left_iron', 'mna:constructs/construct_mana_cannon_right_gold',
    'mna:constructs/construct_reinforced_legs_stone', 'mna:constructs/construct_shield_arm_left_gold', 'mna:constructs/construct_ender_legs_iron', 'mna:constructs/construct_basic_legs_iron', 'mna:constructs/construct_caster_arm_right_gold',
    'mna:constructs/construct_fluid_nozzle_left_gold', 'mna:constructs/construct_grabber_arm_left_iron', 'mna:constructs/construct_mana_cannon_right_stone', 'mna:constructs/construct_basic_torso_stone', 'mna:constructs/construct_blade_arm_left_iron',
    'mna:constructs/construct_mana_torso_stone', 'mna:constructs/construct_blade_arm_left_wood', 'mna:constructs/construct_rocket_legs_gold', 'mna:constructs/construct_hammer_arm_right_gold', 'mna:constructs/construct_mana_cannon_right_wood',
    'mna:constructs/construct_armor_torso_gold', 'mna:constructs/construct_mana_torso_wood', 'mna:constructs/construct_basic_head_iron', 'mna:constructs/construct_hammer_arm_right_iron', 'mna:constructs/construct_axe_arm_right_iron',
    'mna:constructs/construct_hammer_arm_left_stone', 'mna:constructs/construct_basic_head_wood', 'mna:constructs/construct_fluid_nozzle_left_stone', 'mna:constructs/construct_basic_head_stone', 'mna:constructs/construct_reinforced_legs_iron',
    'mna:constructs/construct_fluid_nozzle_right_iron', 'mna:constructs/construct_shield_arm_left_wood', 'mna:constructs/construct_ender_legs_gold', 'mna:constructs/construct_ender_legs_stone', 'mna:constructs/construct_fluid_nozzle_left_iron',
    'mna:constructs/construct_caster_arm_right_stone', 'mna:constructs/construct_basic_legs_gold', 'mna:constructs/construct_hammer_arm_left_gold', 'mna:constructs/construct_mana_torso_iron', 'mna:constructs/construct_rocket_legs_iron',
    'mna:constructs/construct_storage_torso_iron', 'mna:constructs/construct_ender_legs_wood', 'mna:constructs/construct_fishing_rod_right_iron', 'mna:constructs/construct_mana_cannon_left_iron', 'mna:constructs/construct_basic_legs_stone',
    'mna:constructs/construct_caster_arm_left_stone', 'mna:constructs/construct_shield_arm_right_stone', 'mna:constructs/construct_blade_arm_left_stone', 'mna:constructs/construct_axe_arm_left_iron', 'mna:constructs/construct_grabber_arm_right_gold',
    'mna:constructs/construct_fishing_rod_left_gold', 'mna:constructs/construct_basic_torso_wood', 'mna:constructs/construct_mana_cannon_left_gold', 'mna:constructs/construct_caster_arm_right_wood', 'mna:constructs/construct_axe_arm_left_gold',
    'mna:constructs/construct_basic_legs_wood', 'mna:constructs/construct_armor_torso_stone', 'mna:constructs/construct_smart_head_iron', 'mna:constructs/construct_smart_head_gold', 'mna:constructs/construct_axe_arm_right_wood',
    'mna:constructs/construct_axe_arm_right_gold', 'mna:constructs/construct_grabber_arm_right_iron', 'mna:constructs/construct_shield_arm_right_wood', 'mna:constructs/construct_hammer_arm_right_stone', 'mna:constructs/construct_reinforced_legs_wood',
    'mna:constructs/construct_basic_torso_iron', 'mna:constructs/construct_smart_head_wood', 'mna:constructs/construct_hammer_arm_right_wood', 'mna:constructs/construct_smart_head_stone', 'mna:constructs/construct_storage_torso_wood'
    ])
    event.add('mbm2:auto_manaweaver_blacklist', ['#mna:runes', '#curios:ring', '#curios:charm', '#curios:head', '#curios:necklace', '#curios:bracelet', '#curios:back', '#curios:belt', '#mbm2:mna_construct_part','mna:patch_weave', 'mna:staff_skull_alt', 'mna:wand_skull_alt', 'mna:eldrin_sight_unguent', 'mna:spectral_elytra', 'mna:hellfire_staff', 'mna:coffin', 'mna:player_charm', 'mna:faction_horn_council', 'mna:faction_horn_demons', 'mna:faction_horn_fey', 'mna:faction_horn_undead', 'mna:mage_hood', 'mna:mage_robes', 'mna:mage_leggings', 'mna:mage_boots'])
});

//function getManaweaveBottle (pattern) {
//    let modAndPattern = pattern.split(':')
//    return Item.of('mna:manaweave_bottle', `{pattern:"${modAndPattern[0]}:manaweave_patterns/${modAndPattern[1]}"}`)
//  };
  
onEvent('recipes', event => {
    
    let mWeaves = [
        'inverted_split_triangle',
        'backslash',
        'infinity', 
        'inverted_triangle', 
        'knot4', 
        'circle', 
        'knot2', 
        'slash', 
        'knot3', 
        'star',
        'diamond',
        'knot', 
        'square', 
        'triangle', 
        'split_triangle', 
        'hourglass', 
        'bolt'
    ]
    let mwRecipes =
    [{output:"mna:ender_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_ender',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:wellspring_dowsing_rod",items:['mna:thaumaturgic_link','minecraft:stick','minecraft:compass','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/hourglass"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:disenchanter",items:['mna:basic_table','mna:chimerite_gem','minecraft:glass_pane','4x #minecraft:fences','2x mna:transmuted_silver',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"mna:study_desk",items:['mna:basic_table','2x minecraft:book','mna:animated_quill','3x mna:vellum','mna:spell_book','minecraft:candles',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}')]},
    {output:"mna:eldrin_fume",items:['mna:basic_table','minecraft:iron_bars','minecraft:furnace','4x mna:decoration/arcane_sandstone',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}')]},
    {output:"mna:refraction_lens_water",items:['4x mna:purified_vinteum_ingot','4x minecraft:blue_stained_glass','mna:mote_water',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/hourglass"}')]},
    {output:"mna:wellspring_pillar",items:['mna:decoration/arcane_sandstone','4x mna:rune_ritual_metal','2x mna:decoration/arcane_sandstone_wall','minecraft:hopper','mna:eldrin_rift',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"8x mna:decoration/vinteum_arcane_sandstone",items:['mna:vinteum_dust','8x mna:decoration/arcane_sandstone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:brimstone_charm",items:['minecraft:magma_block','3x minecraft:gold_ingot','2x minecraft:blackstone','mna:greater_mote_fire',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:mana_coffee",items:[Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),'minecraft:kelp','#mna:ma_flowers','mna:clay_mug',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"2x mna:sachet_earth",items:['mna:aum','#forge:stone','#forge:mushrooms','minecraft:glow_lichen','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:refraction_lens_wind",items:['4x mna:purified_vinteum_ingot','4x minecraft:white_stained_glass','mna:mote_air',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"mna:flat_lands_book",items:['minecraft:book','minecraft:stone_pickaxe','minecraft:stone_pickaxe','minecraft:stone_shovel','minecraft:stone_shovel','minecraft:stone_axe','minecraft:stone_axe',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:transitory_tunnel",items:['minecraft:clock','mna:mote_ender','mna:rune_ender',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"mna:book_of_rote",items:['3x mna:vellum','mna:arcanist_ink','mna:mundane_ring','mna:mundane_ring','mna:mundane_ring','2x minecraft:string',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"mna:patch_glyph",items:['mna:infused_silk','4x #mna:stone_runes','minecraft:chest',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"minecraft:poisonous_potato",items:['minecraft:potato','minecraft:lily_of_the_valley','minecraft:spider_eye',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}')]},
    {output:"mna:infused_thread",items:['mna:infused_silk','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}')]},
    {output:"8x mna:illusion_block",items:['mna:stone_rune_purple','mna:stone_rune_magenta','mna:stone_rune_cyan','mna:stone_rune_light_blue','minecraft:glass','mna:chimerite_gem','2x mna:vinteum_dust',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}')]},
    {output:"8x mna:decoration/arcane_sandstone",items:['8x #forge:sandstone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:eldrin_rift",items:['mna:decoration/chimerite_arcane_sandstone','4x mna:stone_rune_purple','minecraft:ender_pearl',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/hourglass"}')]},
    {output:"mna:mana_crystal_fragment",items:['mna:purified_vinteum_dust','8x mna:chimerite_gem',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:witherbone",items:['mna:vinteum_dust','mna:bone_ash','#forge:bones','minecraft:phantom_membrane',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"8x minecraft:crying_obsidian",items:['8x minecraft:obsidian','minecraft:ghast_tear',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}')]},
    {output:"8x mna:decoration/chimerite_arcane_sandstone",items:['mna:chimerite_gem','8x mna:decoration/arcane_sandstone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:ritual_focus_greater",items:['mna:ritual_focus_lesser','minecraft:diamond','mna:purified_vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:'mna:decoration/transmuted_silver_block',items:['#forge:storage_blocks/mithril',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"2x mna:sachet_arcane",items:['mna:cerublossom','mna:decoration/arcane_stone','minecraft:book','minecraft:glowstone_dust','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:warding_candle",items:['2x minecraft:honeycomb','minecraft:string','#minecraft:wooden_slabs','mna:ritual_focus_lesser',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"8x mna:decoration/chimerite_arcane_stone",items:['mna:chimerite_gem','8x mna:decoration/arcane_stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:eldrin_conduit_water",items:['mna:mote_ender','mna:mote_water','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/hourglass"}')]},
    {output:"mna:water_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_water',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:redstone_trigger",items:['minecraft:target','3x minecraft:stone','2x mna:chimerite_gem',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"2x mna:sachet_water",items:['mna:wakebloom','minecraft:kelp',Item.of('minecraft:potion', '{Potion:"minecraft:water"}'),'minecraft:melon_slice','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:bubble_boat",items:['minecraft:bubble_coral','#minecraft:boats','mna:rune_water',Item.of('6x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:eldrin_conduit_ender",items:['2x mna:mote_ender','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"2x mna:sachet_ender",items:['minecraft:pumpkin_seeds','minecraft:soul_sand','minecraft:soul_torch','minecraft:glistering_melon_slice','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:living_flame",items:['mna:vinteum_dust','minecraft:magma_cream','minecraft:blaze_powder','minecraft:glass_bottle',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:minor_mana_gem",items:['mna:purified_vinteum_dust','mna:mana_crystal_fragment','2x minecraft:diamond','2x minecraft:emerald',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"mna:patch_depth",items:['mna:infused_silk','4x minecraft:chest','mna:mote_ender',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"8x mna:decoration/vinteum_arcane_stone",items:['mna:vinteum_dust','8x mna:decoration/arcane_stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:patch_collection",items:['mna:infused_silk','minecraft:hopper','mna:mote_earth',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"4x mna:animus_dust",items:['minecraft:egg','mna:vinteum_dust','mna:wakebloom',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:slipstream_generator",items:['mna:mote_air','minecraft:phantom_membrane','minecraft:feather',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"mna:patch_speed",items:['mna:infused_silk','minecraft:sugar',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:refraction_lens_arcane",items:['4x mna:purified_vinteum_ingot','4x minecraft:magenta_stained_glass','mna:mote_arcane',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}')]},
    {output:"minecraft:saddle",items:['3x minecraft:leather','minecraft:string','2x mna:belt_buckle',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:infused_silk",items:['#minecraft:wool','minecraft:string','mna:ritual_focus_minor',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:brimstone_boat",items:['mna:bubble_boat','mna:rune_fire','mna:brimstone_charm',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/infinity"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:eldrin_conduit_fire",items:['mna:mote_ender','mna:mote_fire','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"8x minecraft:prismarine_shard",items:['minecraft:kelp','4x minecraft:quartz','minecraft:flint',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:thesis_desk",items:['mna:basic_table','mna:animated_quill','minecraft:lectern','mna:vellum','3x mna:transmuted_silver',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/star"}')]},
    {output:"mna:vortex_broom",items:['mna:magic_broom','mna:mote_air',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"4x minecraft:gilded_blackstone",items:['minecraft:gold_ingot','4x minecraft:blackstone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:refraction_lens_fire",items:['4x mna:purified_vinteum_ingot','4x minecraft:orange_stained_glass','mna:mote_fire',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"mna:patch_speed_2",items:['mna:runic_silk','minecraft:clock','mna:mote_fire',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:mana_crystal",items:['mna:mote_arcane','8x mna:mana_crystal_fragment',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:fire_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_fire',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:refraction_lens_earth",items:['4x mna:purified_vinteum_ingot','4x minecraft:brown_stained_glass','mna:mote_earth',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}')]},
    {output:"mna:world_charm",items:['2x minecraft:redstone','mna:rune_marking','#forge:ingots/gold','#forge:glass_panes',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}')]},
    {output:"mna:ironbark",items:['mna:vinteum_dust','#minecraft:logs','#forge:ingots/iron',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}')]},
    {output:"mna:spell_infusion",items:['mna:basic_table','mna:wizard_chalk','2x minecraft:bowl','mna:animus_dust','minecraft:armor_stand',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"8x mna:decoration/redstone_arcane_stone",items:['minecraft:redstone','8x mna:decoration/arcane_stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:arcane_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_arcane',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:runic_silk",items:['mna:infused_silk','2x mna:rune_ritual_metal',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}')]},
    {output:"mna:crystal_of_memories",items:['mna:vinteum_dust','minecraft:emerald','mna:chimerite_gem',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}')]},
    {output:"mna:patch_void",items:['mna:runic_silk','2x minecraft:piston','2x minecraft:cactus',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:eldrin_conduit_earth",items:['mna:mote_ender','mna:mote_earth','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}')]},
    {output:"8x mna:decoration/arcane_stone",items:['8x #forge:stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"minecraft:name_tag",items:['minecraft:iron_nugget','minecraft:paper','minecraft:string',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}')]},
    {output:"8x minecraft:prismarine_crystals",items:['minecraft:kelp','4x minecraft:quartz','minecraft:glass',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:pilgrim_staff",items:['#mna:staves','mna:wizard_chalk','mna:vinteum_dust','minecraft:sugar','minecraft:dried_kelp','minecraft:leather_boots',Item.of('3x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}')]},
    {output:"mna:ritual_focus_lesser",items:['mna:ritual_focus_minor','minecraft:redstone','4x minecraft:gold_nugget','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}')]},
    {output:"4x mna:cloud_in_a_bottle",items:['minecraft:campfire','mna:vinteum_dust_block','mna:wakebloom','mna:tarma_root',Item.of('4x minecraft:potion', '{Potion:"minecraft:water"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:patch_mote",items:['mna:infused_silk','minecraft:chest','mna:mana_resevoir',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:altar_of_arcana",items:['mna:basic_table','mna:spell_book','mna:wizard_chalk','mna:animus_dust','mna:rune_marking','mna:purified_vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}')]},
    {output:"mna:wellspring_sight_unguent",items:['mna:arcanist_ink','#forge:slimeballs','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:seer_stone",items:['mna:chimerite_gem','#forge:dyes/blue','mna:decoration/arcane_stone','2x mna:transmuted_silver',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"mna:modifier_book",items:['2x mna:vellum','2x minecraft:leather','mna:infused_thread','#forge:dyes/red','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}')]},
    {output:"mna:refraction_lens_ender",items:['4x mna:purified_vinteum_ingot','4x minecraft:purple_stained_glass','mna:mote_ender',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"mna:eldrin_altar",items:['mna:pedestal','6x #mna:chimerite_crystals',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/hourglass"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/inverted_triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}')]},
    {output:"2x mna:sachet_air",items:['mna:tarma_root','#forge:feathers','minecraft:phantom_membrane','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:eldrin_conduit_arcane",items:['mna:mote_ender','mna:mote_arcane','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot3"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot4"}')]},
    {output:"mna:eldrin_conduit_air",items:['mna:mote_ender','mna:mote_air','mna:chimerite_gem','mna:decoration/chimerite_arcane_stone',Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/split_triangle"}')]},
    {output:"mna:earth_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_earth',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"2x mna:sachet_fire",items:['mna:desert_nova','#forge:netherrack','minecraft:nether_wart','mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"8x mna:decoration/redstone_arcane_sandstone",items:['minecraft:redstone','8x mna:decoration/arcane_sandstone',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}')]},
    {output:"3x minecraft:leather",items:['6x minecraft:rotten_flesh','mna:bone_ash',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}')]},
    {output:"mna:transmuted_silver",items:['#forge:ingots/mithril',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}')]},
    {output:"mna:magic_broom",items:['minecraft:stick','minecraft:hay_block','2x mna:vinteum_dust',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/circle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}')]},
    {output:"mna:wind_sentry",items:['mna:rune_defense','mna:animus_dust','mna:wizard_chalk','mna:spell_book','mna:rune_air',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/diamond"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/slash"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/backslash"}')]},
    {output:"kubejs:transmuted_casing",items:['4x kubejs:transmuted_silver_plate','5x mna:chimerite_gem',Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot2"}'),Item.of('2x mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/square"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/triangle"}'),Item.of('mna:manaweave_bottle', '{pattern:"mna:manaweave_patterns/knot"}')]}]
    
    //bottled weaves
    mWeaves.forEach(weaves => {
    event.recipes.multiblocked.multiblock("improved_manaweaver")
        .setChance(0.0)
		.inputItem(Item.of('mna:manaweaving_pattern_recipe_paper', `{manaweave_pattern_id:"mna:manaweave_patterns/${weaves}"}`))
		.setChance(1)
        .inputItem('minecraft:glass_bottle')
        .outputItem(Item.of('mna:manaweave_bottle', `{pattern:"mna:manaweave_patterns/${weaves}"}`))
        .duration(80)
    });
    
    //Manaweave recipes
    mwRecipes.forEach(recipe => {
    event.recipes.multiblocked.multiblock("improved_manaweaver")
    .inputItems(recipe.items)
    .outputItem(recipe.output)
    .duration(80)
    });
    
    
    //manaweaving logging
    //event.forEachRecipe({ type: 'mna:manaweaving-recipe', not: {output: '#mbm2:auto_manaweaver_blacklist'}}, r => {
    //console.log(r.json)})

    global.compactCrafting(event, 'mbm2:improved_manaweaver', 1, 'mna:manaweaving_altar',
  5, [
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['H', 'H', 'H', 'H', 'H'],
			['H', '-', '-', '-', 'H'],
			['H', '-', '-', '-', 'H'],
      ['H', '-', '-', '-', 'H'],
      ['H', 'H', 'H', 'H', 'H']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['H', '-', '-', '-', 'H'],
			['-', 'V', 'V', 'V', '-'],
			['-', 'V', 'R', 'V', '-'],
      ['-', 'V', 'V', 'V', '-'],
      ['H', '-', '-', '-', 'H']
		]
	},
	{
		type: 'compactcrafting:mixed',
		pattern: [
			['H', '-', '-', '-', 'H'],
			['-', 'V', 'R', 'V', '-'],
			['-', 'R', 'C', 'R', '-'],
      ['-', 'V', 'R', 'V', '-'],
      ['H', '-', '-', '-', 'H']
		]
	},
    {
		type: 'compactcrafting:mixed',
		pattern: [
			['H', '-', '-', '-', 'H'],
			['-', 'V', 'V', 'V', '-'],
			['-', 'V', 'R', 'V', '-'],
      ['-', 'V', 'V', 'V', '-'],
      ['H', '-', '-', '-', 'H']
		]
	},
    {
		type: 'compactcrafting:mixed',
		pattern: [
			['H', 'H', 'H', 'H', 'H'],
			['H', '-', '-', '-', 'H'],
			['H', '-', '-', '-', 'H'],
      ['H', '-', '-', '-', 'H'],
      ['H', 'H', 'H', 'H', 'H']
		]
	}
	], {
	'H': {
	  type: 'compactcrafting:block',
	  block: 'kubejs:heated_vinteum_block'
	},
    'V': {
        type: 'compactcrafting:block',
        block: 'mna:vinteum_dust_block'
      },
	'R': {
	  type: 'compactcrafting:block',
	  block: 'mna:redstone_trigger'
	},
	'C': {
	  type: 'compactcrafting:block',
	  block: 'kubejs:transmuted_casing'
	}
  },  'mbm2:improved_manawever_miniaturization')
  });*/