var parts = [
	'ingot',
	//'gear',
	//'dust',
	//'plate',
	//'rod',
	//'wire',
	//'nugget',
	//'storage_block',
]/*
var oreProcessingParts = [
	'grit',
	'raw',
	'crushed',
	'chunk',
	//'clump',
	'leached',
	'deposit',
	'crystal',
	'washed',
	'cluster',
	'lump_of',
	'imbued',
]
var oreRefiningParts = [
	'washed',
	'cluster',
	'infused',
	'brick',
	'shard',
]*/


var mods = [
	'allomancy',
	'kubejs',
	'thermal',
	'create',
	'minecraft',
	//'malum', 
	'tconstruct', 
	'mythicbotany', 
	'mna', 
	'createbigcannons', 
	'forbidden_arcanus',
	'extendedcrafting',
	'pneumaticcraft',
	'mekanism',
	'chemlib',
	'biggerreactors',
	'beyond_earth',
	'extendedcrafting'
]

var smeltingList = [
	'Furnace',
	'Furnace',
	'Foundry',
	'Arc Furnace',
	'Blast Furnace',
	'Blast Furnace 2000 Heat',
	'Blast Furnace 3000 Heat',
	'Blast Furnace 4000 Heat',
	'Blast Furnace 5000 Heat',
]
var gradeLetter = [
	`G`,
	`F`,
	`E`,
	`D`,
	`C`,
	`B`,
	`A`,
]

var gradeLetterColor = [
	Text.gray(`[G]`),
	Text.darkGray(`[F]`),
	Text.white(`[E]`),
	Text.green(`[D]`),
	Text.blue(`[C]`),
	Text.lightPurple(`[B]`),
	Text.gold(`[A]`),
]
var oreProcessingPartList = []
global.oreProcessingParts.forEach((part) => {
	oreProcessingPartList.push(part.name)
})

var oreRefiningPartList = []
global.oreRefiningParts.forEach((part) => {
	oreRefiningPartList.push(part.name)
})

const nameUpper = (name) => {return name.charAt(0).toUpperCase() + name.slice(1)}



onEvent('item.tooltip', tooltip => {
	
	global.newMaterialParts.forEach((item) => {
		//Adds Metal Tier labels
		if (item.type == 'base_metal') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Metal`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Metal`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Metal`)
					}
				})
			})
		}
		//Adds Ore Processing Info
		if (item.ore) {
			global.oreProcessingParts.forEach((part, index) => {
				console.log(part.prefix + item.material + part.suffix)
					//red = error
					//yellow = smelting
					//green = processing
					//aqua = refining
					//Step one, generate the tooltip lines
					let smeltingFunction = (tier) => {
						let smeltingTooltip = ""
						if (tier-1 > part.grade) {
							smeltingTooltip = Text.of(`Must be processed further to be smelted or refined.`).red()
						} else if (part.name == 'grit') {
							smeltingTooltip = Text.of(`Must be washed before smelting.`).red()
						} else{
							smeltingTooltip = [Text.of(`Can smelted in: `).white(), Text.of(`${smeltingList[item.tier]}`).yellow()]
						}
						return smeltingTooltip
					}
					let smeltingDashFunction = (tier, partGrade) => {
						let smeltingDash = ""
						if (tier-1 > partGrade) {
							smeltingDash = Text.of(`✗ `).red()
						} else if (part.name == 'grit') {
							smeltingDash = Text.of(`✗ `).red()
						} else{
							smeltingDash = Text.of(`✓ `).green()
						}
						return smeltingDash
					}

					let processingLine1 = (part) => {
						let tooltipLine1 = ""
						if (part == 'raw') {
							tooltipLine1 = Text.gray(`- Ore`)
						} else if (part == 'crushed') {
							tooltipLine1 = [smeltingDashFunction(item.tier, index-1), Text.gray(nameUpper(oreProcessingPartList[index-1]))]
						} else {
							tooltipLine1 = [smeltingDashFunction(item.tier, index-1), Text.gray(nameUpper(oreProcessingPartList[index-1])), Text.gray(` [${gradeLetter[index-1]}]`)]
						}
						return tooltipLine1
					}

					let processingLine2 = (part) => {
						let tooltipLine2 = ""
						if (part == 'raw') {
							tooltipLine2 = [smeltingDashFunction(item.tier, index), Text.of(nameUpper(oreProcessingPartList[index])).white()]
						} else {
							tooltipLine2 = [smeltingDashFunction(item.tier, index), Text.of(nameUpper(oreProcessingPartList[index])).white(), gradeLetterColor[index]] //, Text.white(` [`), gradeLetterColor[index], Text.white(`]`)]
						}
						return tooltipLine2
					}

					let processingLine3 = (part) => {
						let tooltipLine3 = ""
						if (oreProcessingPartList[oreProcessingPartList.length-2] == part) { //last item on the list has no next step
							tooltipLine3 = Text.gray(`Maximum Processing Reached`)
						} else {
							tooltipLine3 = [smeltingDashFunction(item.tier, index+1), Text.gray(nameUpper(oreProcessingPartList[index+1])), Text.gray(` [${gradeLetter[index+1]}]`)]
						}
						return tooltipLine3
					}
					//Dynamic Tooltip for ore parts
					let processingToolTipCreation = (name) => {
						//Make the Actual Tooltip
						tooltip.addAdvanced(name, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
							text.add(2, [smeltingFunction(item.tier)])
							if (part.name != 'grit') {
								if (!tooltip.shift) {
									text.add(3, [Text.of('Hold ').gold(), Text.of('Shift ').green(), Text.of('to see more information.').gold()])
								} else {
									text.add(3, processingLine1(part.name))
									text.add(4, processingLine2(part.name))
									text.add(5, processingLine3(part.name))
								}}
	
								//if (item.tier <= 2 && item.type != 'compound_ore') {
								//text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 2x`).aqua(), Text.of(` yield`).white()])
								//}
						})
					}
					
					//Finds the exact items then runs the tooltip creation function
					let partName = ""
					if (part.name == 'raw' || part.name == 'crushed') {
						mods.forEach((mod) => {
							if (Item.of(`${mod}:${part.name}_${item.material}`) != null) {
								partName = `${mod}:${part.name}_${item.material}`
								processingToolTipCreation(partName)
							} else if (Item.of(`${mod}:${item.material}_${part.name}`) != null) {
								processingToolTipCreation(partName)
								partName = `${mod}:${item.material}_${part.name}`
							} else if (Item.of(`${mod}:${part.name}_${item.material}_ore`) != null) {
								partName = `${mod}:${part.name}_${item.material}_ore` //this is how create does it smh
								processingToolTipCreation(partName)
							}
						})
					} else {
						if (Item.of(`kubejs:${part.name}_${item.material}`) != null) {
							partName = `kubejs:${part.name}_${item.material}`
							processingToolTipCreation(partName)
						}
					}
		})
	}


					//global.partDisplayName = part.prefix + nameUpper(item.material) + part.suffix

					//Crushed Aluminum
					//Metal Tier: 2
					//Must be processed to at least X grade before smelting or refining/Can be smelted in: Y
					//
					//Hold Shift for more info:
					//(
					//(Gray)      Raw Ore
					//(Colored) Crushed [F] -> Washed (2)
					//(Gray)      Chunk [E] -> Imbued (3)
					//)


				//Imbued Aluminum
				//Metal Tier: 2
				//Must be refined to level 1 before smelting/Can be smelted in: Y
				//
				//Hold Shift for more info:
				//(
				//(Gray)      Cluster [3]
				//(Colored) Imbued [2]
				//(Gray)      Washed [1]
				//)












/*






		if (item.type == 'base_metal' || item.type == 'compound_ore') { //Any metal can be processed, only normal can be refined
			mods.forEach((mod) => {
			oreProcessingParts.forEach((part) => {
				if (part == 'raw') { // tier 0 processed
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(), Text.of(`${item.tier}`).gold()])
							//text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`F`).gray()])
						if (!tooltip.ctrl) {
							  text.add(2, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(2, [Text.of(`Next processing step:`).white(), Text.of(` Crushing Wheel`).green()])
							if (item.tier <= 1) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
								//text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 2x`).aqua(), Text.of(` yield`).white()])
							} else if (item.tier > 1) {
								text.add(3, [Text.of(`Must be processed further to be smelted or refined`).red()])
							}
						}
					})
				} else if (part == 'crushed') { // tier 1 processed
					if (mod == 'create') {
						if (Item.of(`${mod}:${part}_${item.material}_ore`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}_ore`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`F`).gray()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Crusher`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							} else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							} else if (item.tier > 2) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 2 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 2x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
					} else  {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
							text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`F`).gray()])
							if (!tooltip.ctrl) {
								  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
							} else {
								text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Crusher`).green()])
								if (item.tier <= 1) {
									text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
								} else if (item.tier == 2) {
									text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
								} else if (item.tier > 2) {
									text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
								}
								if (item.tier <= 2 && item.type != 'compound_ore') {
								text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 2x`).aqua(), Text.of(` yield`).white()])
								}
							}
						})
					} 
				} else if (part == 'chunk') { // tier 2 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`E`).white()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Washing`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier > 3) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 3 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 3x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
				} else if (part == 'lump_of') { // tier 3 processed
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`D`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Leaching`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier > 4) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 4 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 4x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
				}  else if (part == 'leached') { // tier 3 processed
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`C`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Depositing`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier > 5) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 5 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 5x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
				} else if (part == 'deposit') { // tier 4 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`B`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Crystalizing`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier > 6) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 6 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 6x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
				} else if (part == 'crystal') { // tier 5 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`A`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` MAX`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier == 7) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 4000k`).yellow()])
							}  else if (item.tier > 7) {
								text.add(4, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
							if (item.tier <= 7 && item.type != 'compound_ore') {
							text.add(5, [Text.of(`Can be refined for up to:`).white(), Text.of(` 7x`).aqua(), Text.of(` yield`).white()])
							}
						}
					})
				} else if (part == 'grit') { // Grit
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						if (!tooltip.ctrl) {
							  text.add(2, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(2, [Text.of(`Unable to be processed further`).white()])
							if (item.tier <= 1) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier == 7) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 4000k`).yellow()])
							}  else if (item.tier == 8) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 5000k`).yellow()])
							}  else if (item.tier > 8) {
								text.add(3, [Text.of(`Must be processed further to be smelted or refined.`).red()])
							}
						}
					})
				} else if (part == 'washed') { // tier 1 refined
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Refining Level: `).white(),Text.of(`1`).aqua()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').aqua(), Text.of('to see refining information.').gold()])
						} else {
							if (item.tier <= 1) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier == 7) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 4000k`).yellow()])
							}  else if (item.tier == 8) {
								text.add(3, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 5000k`).yellow()])
							}  
						}
					})
				} else if (part == 'imbued') { // tier 2 refined
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Refining Level: `).white(),Text.of(`2`).aqua()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').aqua(), Text.of('to see refining information.').gold()])
						} else {
							text.add(3, [Text.of(`Next refining step:`).white(), Text.of(` Washing`).aqua()])
						}
					})
				} else if (part == 'cluster') { // tier 3 refined
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Refining Level: `).white(),Text.of(`3`).aqua()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').aqua(), Text.of('to see refining information.').gold()])
						} else {
							text.add(3, [Text.of(`Next refining step:`).white(), Text.of(` Imbuing`).aqua()])
						}
					})
				}   
			})
		})
		} else if (item.type == 'alloy') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Alloy`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Alloy`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Alloy`)
					}
				})
			})
		} else if (item.type == 'rare_metal') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Rare Metal`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Rare Metal`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Rare Metal`)
					}
				})
			})
		}*/
	})
});