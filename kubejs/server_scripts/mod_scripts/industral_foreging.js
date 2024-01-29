/*

onEvent('tags.items', event => {
	event.add(`forge:ingots`, `naturesaura:tainted_gold`)
	 event.remove(`create:crushed_ores/${item}`, `kubejs:crushed_${item}`)
 });
 */

onEvent('recipes', event => {
	
	//Fix Plastic/Latex
    event.replaceInput({mod: 'industrialforegoing'}, 'industrialforegoing:plastic', 'pneumaticcraft:plastic')
    event.replaceOutput({mod: 'industrialforegoing'}, 'industrialforegoing:plastic', 'pneumaticcraft:plastic')
    //event.replaceInput({id: 'industrialforegoing:latex_processing_unit'}, 'industrialforegoing:latex_bucket', 'industrialforegoing:latex_bucket')
	
  //Pink Slime
  event.replaceInput({id: 'industrialforegoing:dissolution_chamber/pink_slime_ingot'}, 'iron_ingot', Item.of('#forge:ingots/platinum'))

  //Tier 1 Frame
  event.remove({output:`industrialforegoing:machine_frame_pity`})
  event.shaped('industrialforegoing:machine_frame_pity', ['AAA','BCB','AAA'], {A: 'immersiveengineering:treated_wood_horizontal',B: '#forge:plates/damascus_steel',C: 'powah:dielectric_casing'})
  

  //Tier 2 Frame
  event.replaceInput({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'}, 'iron_ingot', 'kubejs:stainless_steel_plating')

  

  //Tier 3 Frame
  event.remove({id:`industrialforegoing:dissolution_chamber/advanced_machine_frame`})
  event.custom({
	"input": [
	  {
		"item": 'kubejs:large_battery_full'
	  },
	  {
		"tag": "industrialforegoing:machine_frame/simple"
	  },
	  {
		"item": 'kubejs:large_battery_full'
	  },
	  {
		"item": 'industrialforegoing:pink_slime_ingot'
	  },
	  {
		"item": 'industrialforegoing:pink_slime_ingot'
	  },
	  {
		"tag": "forge:gears/ostrum"
	  },
	  {
		"item": 'mekanism:steel_casing'
	  },
	  {
		"tag": "forge:gears/ostrum"
	  }
	],
	"inputFluid": "{FluidName:\"tconstruct:molten_tungsten\",Amount:2700}",
	"processingTime": 300,
	"output": {
	  "item": "industrialforegoing:machine_frame_advanced",
	  "count": 1
	},
	"type": "industrialforegoing:dissolution_chamber"
  })


event.remove({id:/industrialforegoing:laser_drill_ore.*/})



let orangeLens = 'industrialforegoing:laser_lens1'
let magentaLens = 'industrialforegoing:laser_lens2'
let grayLens = 'industrialforegoing:laser_lens7'
let purpleLens = 'industrialforegoing:laser_lens10'
let blueLens = 'industrialforegoing:laser_lens11'
let redLens = 'industrialforegoing:laser_lens14'

let minDepth =[
	-64,
	-14,
	36,
	86,
	136,
	186,
]
let maxDepth =[
	0,
	50,
	100,
	150,
	200,
	255,
]

let lensColors = [
	orangeLens,
	magentaLens,
	redLens,
	blueLens,
	grayLens,
	purpleLens,
]

let compoundOres = []
//imortite,potentium,kharaxium,vincyte,densite,jimmium

global.newMaterialParts.forEach(item => {
	if(item.type == 'compound_ore') {
	compoundOres.push(item.material)
}});

compoundOres.forEach((type, index) => {
  event.custom({
	"type": "forge:conditional",
	"recipes": [
	  {
		"conditions": [
		  {
			"value": {
			  "tag": `forge:ores/raw/${type}`,
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"recipe": {
		  "output": {
			"tag": `forge:ores/raw/${type}`
		  },
		  "rarity": [
			{
			  "whitelist": {},
			  "blacklist": {},
			  "depth_min": minDepth[index],
			  "depth_max": maxDepth[index],
			  "weight": 20
			},
			{
			  "whitelist": {},
			  "blacklist": {},
			  "depth_min": 0,
			  "depth_max": 255,
			  "weight": 1
			}
		  ],
		  "pointer": 0,
		  "catalyst": {
			"item": lensColors[index]
		  },
		  "type": "industrialforegoing:laser_drill_ore"
		}
	  }
	]
  })
});
	
event.remove({output:`industrialforegoing:stasis_chamber`})
event.shaped('industrialforegoing:stasis_chamber', ['AAA','BCB','DED'], {A: 'minecraft:soul_sand',B: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}'),C: 'industrialforegoing:machine_frame_advanced',D: 'kubejs:tainted_gold_gear',E: 'mekanism:dimensional_stabilizer'}).id('mbm2:industrial_foregoing_stasis_chamber')

});



