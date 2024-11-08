onEvent('tags.items', event => {
	event.add(`mbm2:livingwood_twig`, 'botania:livingwood_twig')
 });

onEvent('recipes', event => {
	//HOP Dark Quartz??
    event.replaceInput({id: 'botania:quartz_dark'}, '#minecraft:coals', '#forge:dusts/hop_graphite')
    //event.replaceInput({id: 'lazierae2:compat/botania/infuser/quartz_dark'}, 'minecraft:coal', '#forge:dusts/hop_graphite')

	//blazing Quartz
	event.remove({id: 'botania:quartz_blaze'})
	event.recipes.tconstruct.casting_table('botania:quartz_blaze', 'tconstruct:blazing_blood', 25).cast('minecraft:quartz').consumeCast().coolingTime(80).id(`mbm2:casting/quartz_blaze`)
	event.recipes.tconstruct.casting_table('botania:quartz_blaze', 'kubejs:blazing_pyrotheum', 25).cast('minecraft:quartz').consumeCast().coolingTime(80).id(`mbm2:casting/quartz_blaze/blazing_pyrotheum`)
    event.replaceInput({id: 'lazierae2:compat/botania/infuser/quartz_blaze'}, 'minecraft:blaze_powder', 'minecraft:blaze_rod')
	
	//Apothecary
	event.remove({output: 'botania:apothecary_default'})
	event.shaped('botania:apothecary_default', ['ABA',' A ','AAA'], {A: 'naturesaura:infused_stone',B: 'naturesaura:token_euphoria'})

	//Mossy Apothecary
	event.remove({output: 'botania:apothecary_mossy'})
	event.shapeless('botania:apothecary_mossy', ['botania:apothecary_default', 'minecraft:moss_block']).id('mbm2:moss_apothecary')
	event.shapeless('botania:apothecary_mossy', ['botania:apothecary_default', 'minecraft:vine']).id('mbm2:vine_apothecary')
	
//Living Wood Twig
event.remove({id: 'botania:livingwood_twig'})
global.naturesauraAltar(event, 'botania:livingwood_twig', '#botania:livingwood_logs', 'normal', 'overworld', 15000, 80, 'mbm2:altar/livingwood_twig')

//Living Rock
event.remove({id: 'botania:pure_daisy/livingrock'})
event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": 'naturesaura:infused_stone'
	},
	"output": {
	  "name": "botania:livingrock"
	}
  }).id('mbm2:livingrock')
  
  //Living Wood
event.remove({id: 'botania:pure_daisy/livingwood'})
  event.custom({
	"type": "botania:state_copying_pure_daisy",
	"input": {
		"type": "block",
		"block": 'naturesaura:ancient_log'
	},
	"output": "botania:livingwood_log"
  }).id('mbm2:livingwood')

//Manasteel
event.remove({id: 'botania:mana_infusion/manasteel'})

  event.custom({
	"type": "botania:mana_infusion",
	"input": {
	  "item": 'kubejs:aetherium_ingot'
	},
	"output": {
	  "item": "botania:manasteel_ingot"
	},
	"mana": 6000
  }).id('mbm2:manasteel_ingot')
//Manasteel Block
event.remove({id: 'botania:mana_infusion/manasteel_block'})
  event.custom({
	"type": "botania:mana_infusion",
	"input": {
	  "item": 'kubejs:aetherium_storage_block'
	},
	"output": {
	  "item": "botania:manasteel_block"
	},
	"mana": 54000
  }).id('mbm2:manasteel_block')

//Craftable Botania Grass
event.shaped('8x botania:dry_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:dry_seeds'}).id("mbm2:dry_grass")
event.shaped('8x botania:golden_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:golden_seeds'}).id("mbm2:golden_grass")
event.shaped('8x botania:vivid_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:vivid_seeds'}).id("mbm2:vivid_grass")
event.shaped('8x botania:scorched_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:scorched_seeds'}).id("mbm2:scorched_grass")
event.shaped('8x botania:infused_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:infused_seeds'}).id("mbm2:infused_grass")
event.shaped('8x botania:mutated_grass', ['DDD','DSD','DDD'], {D: '#minecraft:dirt',S: 'botania:mutated_seeds'}).id("mbm2:mutated_grass")
event.shapeless('botania:enchanted_soil', ['botania:overgrowth_seed', '#minecraft:dirt']).id('mbm2:enchanted_soil')

//Custom Brew Recipes
let calcinatedraw = [
        "gold",
        "iron",
        "copper",
        "tin",
        "nickel",
        "uranium",
        "lead",
        "silver",
        "zinc",
        "osmium",
        "platinum"
]
let calcinatedgem = [
	"coal",
        "diamond",
        "emerald",
        "lapis",
        "redstone"
]
calcinatedraw.forEach(material => {
	event.recipes.botania.brew(`kubejs:${material}_sight`, ['minecraft:nether_wart', `potionsmaster:calcinated${material}_powder`, `#forge:storage_blocks/raw_${material}`]).id(`mbm2:${material}_sight`)
	})
calcinatedgem.forEach(material => {
	event.recipes.botania.brew(`kubejs:${material}_sight`, ['minecraft:nether_wart', `potionsmaster:calcinated${material}_powder`, `#forge:storage_blocks/${material}`]).id(`mbm2:${material}_sight`)
	})
event.recipes.botania.brew("kubejs:aluminium_sight", ['minecraft:nether_wart', 'potionsmaster:calcinatedaluminium_powder', '#forge:storage_blocks/raw_aluminum']).id("mbm2:aluminum_sight")
event.recipes.botania.brew("kubejs:quartz_sight", ['minecraft:nether_wart', 'potionsmaster:calcinatedquartz_powder', 'minecraft:quartz_block']).id("mbm2:quartz_sight")
event.recipes.botania.brew("kubejs:netherite_sight", ['minecraft:nether_wart', 'potionsmaster:calcinatednetherite_powder', '#mbm2:brewery_debris']).id("mbm2:debris_sight")

event.recipes.botania.brew("kubejs:bargaining", ['minecraft:nether_wart', "minecraft:golden_apple", Item.of('minecraft:potion', '{Potion:"potionsmaster:emerald_sight"}')])
event.recipes.botania.brew("kubejs:greater_bargaining", ['minecraft:nether_wart', 'minecraft:enchanted_golden_apple', Item.of('minecraft:potion', '{Potion:"potionsmaster:emerald_sight"}')])

//mythicbot infusion
event.custom({
	"type": 'mythicbotany:infusion',
	"group": 'infuser',
	"ingredients": [
		{ "item": 'kubejs:nature_gem' },
		{ "tag": 'elementalcraft:gems/fine_earth' },
		{ "item": 'reliquary:fertile_lily_pad' },
		{ "item": 'naturesaura:aura_bloom' },
		{ "item": 'ars_nouveau:ritual_overgrowth' }
	],
	"output": {
		"item": 'botania:overgrowth_seed'
	},
	"mana": 500000,
	"fromColor": 16777215,
	"toColor": 2875403
	}).id(`mbm2:mythicbotany_infusion/overgrowth`);
	
//mana pearl recipe change 
event.replaceInput({id: 'botania:mana_infusion/mana_pearl'}, 'minecraft:ender_pearl', 'kubejs:source_pearl')

//Rune recipe changes
//T1 Runes
	//Water Rune
	event.recipes.botania.runic_altar('2x botania:rune_water', ['botania:mana_powder', 'botania:manasteel_ingot', '#forge:dusts/cryotheum', 'quark:blue_rune', '#elementalcraft:gems/fine_water'], 5200).id('botania:runic_altar/water')

	//Fire Rune
	event.replaceInput({id: 'botania:runic_altar/fire'}, 'minecraft:nether_brick', '#forge:dusts/pyrotheum')
	event.replaceInput({id: 'botania:runic_altar/fire'}, 'minecraft:gunpowder', 'quark:orange_rune')
	event.replaceInput({id: 'botania:runic_altar/fire'}, 'minecraft:nether_wart', '#elementalcraft:gems/fine_fire')

	//Earth Rune
	event.recipes.botania.runic_altar('2x botania:rune_earth', ['botania:mana_powder', 'botania:manasteel_ingot', '#forge:dusts/petrotheum', 'quark:lime_rune', '#elementalcraft:gems/fine_earth'], 5200).id('botania:runic_altar/earth')

	//Air Rune
	event.replaceInput({id: 'botania:runic_altar/air'}, '#minecraft:carpets', '#forge:dusts/aerotheum')
	event.replaceInput({id: 'botania:runic_altar/air'}, 'minecraft:feather', 'quark:light_blue_rune')
	event.replaceInput({id: 'botania:runic_altar/air'}, 'minecraft:string', '#elementalcraft:gems/fine_air')

	//Mana Rune
	event.remove({id: 'botania:runic_altar/mana'})
	event.recipes.botania.runic_altar('botania:rune_mana', ['elementalcraft:shrine_upgrade_core', 'botania:mana_pearl', 'botania:mana_pearl', 'quark:purple_rune', 'botania:manasteel_ingot', 'botania:manasteel_ingot'], 8000).id('mbm2:botania/runic_altar/rune_mana')

//T2 Runes
	//Rune of Spring
	event.remove({id: 'botania:runic_altar/spring'})
	event.recipes.botania.runic_altar('botania:rune_spring', ['botania:rune_water', 'botania:rune_fire', 'quark:pink_rune', 'ars_nouveau:glyph_grow', 'reliquary:fertile_essence', 'quark:pink_blossom_leaf_carpet'], 8000).id('mbm2:botania/runic_altar/rune_spring')

	//Rune of Summer
	event.remove({id: 'botania:runic_altar/summer'})
	event.recipes.botania.runic_altar('botania:rune_summer', ['botania:rune_earth', 'botania:rune_air', 'quark:cyan_rune', 'ars_nouveau:glyph_evaporate', 'elementalcraft:springaline_cluster', 'quark:yellow_blossom_leaf_carpet'], 8000).id('mbm2:botania/runic_altar/rune_summer')

	//Rune of Autumn
	event.remove({id: 'botania:runic_altar/autumn'})
	event.recipes.botania.runic_altar('botania:rune_autumn', ['botania:rune_fire', 'botania:rune_air', 'quark:yellow_rune', 'ars_nouveau:glyph_harvest', 'naturesaura:gold_leaf', 'quark:lavender_blossom_leaf_carpet'], 8000).id('mbm2:botania/runic_altar/rune_autumn')

	//Rune of Winter
	event.remove({id: 'botania:runic_altar/winter'})
	event.recipes.botania.runic_altar('botania:rune_winter', ['botania:rune_water', 'botania:rune_earth', 'quark:white_rune', 'ars_nouveau:glyph_freeze', 'reliquary:frozen_core', 'quark:blue_blossom_leaf_carpet'], 8000).id('mbm2:botania/runic_altar/rune_winter')

//T3 Runes
	//Lust
	event.remove({id: 'botania:runic_altar/lust'})
	event.recipes.botania.runic_altar('botania:rune_lust', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:magenta_rune', 'botania:rune_summer', 'botania:rune_air'], 12000).id('mbm2:botania/runic_altar/rune_lust')

	//Gluttony
	event.remove({id: 'botania:runic_altar/gluttony'})
	event.recipes.botania.runic_altar('botania:rune_gluttony', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:gray_rune', 'botania:rune_winter', 'botania:rune_fire'], 12000).id('mbm2:botania/runic_altar/rune_gluttony')

	//Greed
	event.remove({id: 'botania:runic_altar/greed'})
	event.recipes.botania.runic_altar('botania:rune_greed', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:green_rune', 'botania:rune_spring', 'botania:rune_water'], 12000).id('mbm2:botania/runic_altar/rune_greed')

	//Sloth
	event.remove({id: 'botania:runic_altar/sloth'})
	event.recipes.botania.runic_altar('botania:rune_sloth', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:brown_rune', 'botania:rune_autumn', 'botania:rune_air'], 12000).id('mbm2:botania/runic_altar/rune_sloth')

	//Wrath
	event.remove({id: 'botania:runic_altar/wrath'})
	event.recipes.botania.runic_altar('botania:rune_wrath', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:red_rune', 'botania:rune_winter', 'botania:rune_earth'], 12000).id('mbm2:botania/runic_altar/rune_wrath')

	//Envy
	event.remove({id: 'botania:runic_altar/envy'})
	event.recipes.botania.runic_altar('botania:rune_envy', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:purple_rune', 'botania:rune_winter', 'botania:rune_water'], 12000).id('mbm2:botania/runic_altar/rune_envy')

	//Pride
	event.remove({id: 'botania:runic_altar/pride'})
	event.recipes.botania.runic_altar('botania:rune_pride', ['botania:mana_diamond', 'botania:mana_diamond', 'quark:black_rune', 'botania:rune_summer', 'botania:rune_fire'], 12000).id('mbm2:botania/runic_altar/rune_pride')

//T4 Runes
	//Asgard
	event.remove({id: 'mythicbotany:asgard_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:asgard_rune', ['minecraft:netherite_ingot', 'quark:yellow_rune', 'botania:rune_air', 'botania:rune_autumn', 'botania:rune_pride', 'botania:rainbow_rod'], 16000).id('mbm2:mythicbotany/runic_altar/rune_asgard')

	//Vanaheim
	event.remove({id: 'mythicbotany:vanaheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:vanaheim_rune', ['botania:terrasteel_ingot', 'quark:lime_rune', 'botania:rune_earth', 'botania:rune_spring', 'botania:rune_pride', 'botania:alfheim_portal'], 16000).id('mbm2:mythicbotany/runic_altar/rune_vanaheim')

	//Alfheim
	event.remove({id: 'mythicbotany:alfheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:alfheim_rune', ['botania:elementium_ingot', 'quark:pink_rune', 'botania:rune_air', 'botania:rune_summer', 'botania:rune_lust', ['ars_nouveau:blue_archwood_leaves', 'ars_nouveau:purple_archwood_leaves', 'ars_nouveau:green_archwood_leaves', 'ars_nouveau:red_archwood_leaves']], 16000).id('mbm2:mythicbotany/runic_altar/rune_alfheim')

	//Midgard
	event.remove({id: 'mythicbotany:midgard_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:midgard_rune', ['botania:manasteel_ingot', 'quark:green_rune', 'botania:rune_earth', 'botania:rune_spring', 'botania:rune_greed', 'botania:enchanted_soil'], 16000).id('mbm2:mythicbotany/runic_altar/rune_midgard')

	//Joetunheim
	event.remove({id: 'mythicbotany:joetunheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:joetunheim_rune', ['tconstruct:seared_brick', 'quark:orange_rune', 'botania:rune_earth', 'botania:rune_autumn', 'botania:rune_gluttony', 'minecraft:blackstone'], 16000).id('mbm2:mythicbotany/runic_altar/rune_joetunheim')

	//Muspelheim
	event.remove({id: 'mythicbotany:muspelheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:muspelheim_rune', ['minecraft:nether_brick', 'quark:red_rune', 'botania:rune_fire', 'botania:rune_summer', 'botania:rune_wrath', 'minecraft:magma_block'], 16000).id('mbm2:mythicbotany/runic_altar/rune_muspelheim')

	//Niflheim
	event.remove({id: 'mythicbotany:niflheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:niflheim_rune', ['elementalcraft:drenched_iron_ingot', 'quark:light_blue_rune', 'botania:rune_water', 'botania:rune_winter', 'botania:rune_wrath', 'minecraft:blue_ice'], 16000).id('mbm2:mythicbotany/runic_altar/rune_niflheim')

	//Nidavellir
	event.remove({id: 'mythicbotany:nidavellir_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:nidavellir_rune', ['minecraft:copper_ingot', 'quark:light_gray_rune', 'botania:rune_earth', 'botania:rune_winter', 'botania:rune_sloth', 'minecraft:iron_block'], 16000).id('mbm2:mythicbotany/runic_altar/rune_nidavellir')

	//Helheim
	event.remove({id: 'mythicbotany:helheim_rune_runic_altar'})
	event.recipes.botania.runic_altar('mythicbotany:helheim_rune', ['naturesaura:tainted_gold', 'quark:brown_rune', 'botania:rune_fire', 'botania:rune_autumn', 'botania:rune_envy', 'minecraft:wither_skeleton_skull'], 16000).id('mbm2:mythicbotany/runic_altar/rune_helheim')

});
