

onEvent('tags.items', event => {
	event.add(`mbm2:livingwood_twig`, 'botania:livingwood_twig')
 });

onEvent('recipes', event => {
	//HOP Dark Quartz??
    event.replaceInput({id: 'botania:quartz_dark'}, '#minecraft:coals', '#forge:dusts/hop_graphite')
    //event.replaceInput({id: 'lazierae2:compat/botania/infuser/quartz_dark'}, 'minecraft:coal', '#forge:dusts/hop_graphite')
	
	//Apothecary
	event.remove({output: 'botania:apothecary_default'})
	event.shaped('botania:apothecary_default', ['ABA',' A ','AAA'], {A: 'mna:decoration/vinteum_arcane_stone',B: 'mna:ritual_focus_minor'})

//Living Wood Twig
event.remove({id: 'botania:livingwood_twig'})
global.naturesauraAltar(event, 'botania:livingwood_twig', '#botania:livingwood_logs', 'normal', 'overworld', 15000, 80, 'mbm2:altar/livingwood_twig')

//Living Rock
event.remove({id: 'botania:pure_daisy/livingrock'})
event.custom({
	"type": "botania:pure_daisy",
	"input": {
	  "type": "block",
	  "block": 'mna:decoration/arcane_stone'
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
	  "item": 'kubejs:rune_ingot'
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
	  "item": 'kubejs:rune_storage_block'
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
		{ "item": 'mna:mark_of_the_fey' },
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


});
