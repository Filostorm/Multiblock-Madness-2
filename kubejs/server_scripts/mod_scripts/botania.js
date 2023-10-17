

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




});
