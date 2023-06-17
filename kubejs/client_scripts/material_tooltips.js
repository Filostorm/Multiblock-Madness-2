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

global.refiningMultiplier = [
	1, //this is just to take up the 0 slot
	2,
	4,
	8,
	16,
	32,
	64,
]

const nameUpper = (name) => {return name.charAt(0).toUpperCase() + name.slice(1)}

var oreProcessingPartList = []
global.oreProcessingParts.forEach((part) => {
	oreProcessingPartList.push(nameUpper(part.name))
})

var oreRefiningPartList = []
global.oreRefiningParts.forEach((part) => {
	oreRefiningPartList.push(nameUpper(part.name))
})




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
		} else if (item.type == 'alloy') {
			//Adds Alloy Tier labels
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
			//Adds Rare Metal Tier labels (this isn't a thing atm)
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
		}
		//Adds Ore Processing Info
		if (item.ore) {
			
			////////////////////////////////////////////////
			//											  //
			//			PROCESSING TOOLTIP START		  //
			//											  //
			////////////////////////////////////////////////
			
				global.oreProcessingParts.forEach((part, index) => {
					if(item.type != 'compound_ore') {
					console.log(part.prefix + item.material + part.suffix)
					//red = error
					//yellow = smelting
					//green = processing
					//aqua = refining
					//Step one, generate the tooltip lines
					let smeltingFunction = (tier) => {
						let smeltingTooltip = ""
						if (tier-1 > part.grade && part.name != 'grit') {
							smeltingTooltip = Text.of(`Must be processed further to be smelted or refined.`).red()
						} else {
							smeltingTooltip = [Text.of(`Can smelted in: `).white(), Text.of(`${smeltingList[tier]}`).yellow()]
						}
						return smeltingTooltip
					}
					let smeltingDashFunction = (tier, partGrade) => {
						let smeltingDash = ""
						if (tier-1 > partGrade) { //tier = item.tier
							smeltingDash = Text.of(`✗ `).red()
						} else if (part.name == 'grit') {
							smeltingDash = Text.of(`✗ `).red()
						} else{
							smeltingDash = Text.of(`✓ `).green()
						}
						return smeltingDash
					}
					let refiningFunction = (part, partLevel) => {
						let refiningStep = ""
							if (partLevel == index - 1) { //if we can smelt it (item.tier-1 <= partLevel (index)), or the next part, aqua, otherwise gray  
								if (item.tier-1 <= partLevel || item.tier-1 <= partLevel+1) {
									refiningStep = [Text.aqua(` ↗ x${global.refiningMultiplier[partLevel]}`), Text.white(` ${part}`)]
								} else {
									refiningStep = Text.gray(` ↗ x${global.refiningMultiplier[partLevel]} ${part}`)
								}
							} else if (partLevel == index) { //if we can smelt it (item.tier-1 <= partLevel (index)), aqua, otherwise gray  
								if (item.tier-1 <= partLevel) {
									refiningStep = [Text.aqua(` → x${global.refiningMultiplier[partLevel]}`), Text.white(` ${part}`)]
								} else {
									refiningStep = Text.gray(` ↗ x${global.refiningMultiplier[partLevel]} ${part}`)
								}
							} else {
								if (item.tier-1 <= partLevel || item.tier-1 <= partLevel - 1) {
									refiningStep = Text.gray(` → x${global.refiningMultiplier[partLevel]} ${part}`)
								} else {
									refiningStep = Text.gray(` ↗ x${global.refiningMultiplier[partLevel]} ${part}`)
								}
								
							}
						
						return refiningStep
					}

					let processingLine1 = (part) => {
						let tooltipLine1 = ""
						if (part == 'raw') {
							tooltipLine1 = Text.gray(`- Ore`)
						} else if (part == 'crushed') {
							tooltipLine1 = [smeltingDashFunction(item.tier, index-1), Text.gray(oreProcessingPartList[index-1])]
						} else {
							tooltipLine1 = [smeltingDashFunction(item.tier, index-1), Text.gray(oreProcessingPartList[index-1]), Text.gray(` [${gradeLetter[index-1]}]`), refiningFunction(oreRefiningPartList[index-1], index-1)]
						}
						return tooltipLine1
					}

					let processingLine2 = (part) => {
						let tooltipLine2 = ""
						if (part == 'raw') {
							tooltipLine2 = [smeltingDashFunction(item.tier, index), Text.of(oreProcessingPartList[index]).white()]
						} else {
							tooltipLine2 = [smeltingDashFunction(item.tier, index), Text.of(oreProcessingPartList[index]+' ').white(), gradeLetterColor[index], refiningFunction(oreRefiningPartList[index], index)]
						}
						return tooltipLine2
					}

					let processingLine3 = (part) => {
						let tooltipLine3 = ""
						//console.log(oreProcessingPartList)
						if (oreProcessingPartList[oreProcessingPartList.length-2] == nameUpper(part)) { //last item on the list has no next step -2 because grit is last
							tooltipLine3 = Text.darkGray(`Maximum Processing Reached`)
						} else {
							tooltipLine3 = [smeltingDashFunction(item.tier, index+1), Text.gray(oreProcessingPartList[index+1]), Text.gray(` [${gradeLetter[index+1]}]`), refiningFunction(oreRefiningPartList[index+1], index+1)]
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
									text.add(3, processingLine2(part.name))
									text.add(4, [Text.of('Hold ').gray(), Text.of('Shift ').green(), Text.of('to see more information.').gray()])
								} else {
									text.add(3, processingLine1(part.name))
									text.add(4, processingLine2(part.name))
									text.add(5, processingLine3(part.name))
								}}
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
					

	////////////////////////////////////////////////
	//											  //
	//			COMPOUND TOOLTIP START			  //
	//											  //
	////////////////////////////////////////////////
	
				} else { //if it is compound ore

			//This needs to tell the player at a given moment what it can be sorted into an any time, if it can be smelted, and what grade it is

			let compoundSmeltingFunction = (grade) => {
				let smeltingTooltip = ""
				if (grade <= 0) {
					smeltingTooltip = [Text.white(`Can smelted into: `), Text.gold(`${nameUpper(item.components[0])}`)]
				} else {
					smeltingTooltip = Text.red(`Must be sorted into base metals before smelting.`)
				}
				return smeltingTooltip
			}

			let compoundLine = (line) => {
				let tooltipLine = ""
				//if we are at the part then place the text, if we are after the part, move everything down a row
					//if (part.grade == 0) { //dealing with raw ore
					//	if ( line == 0) {
					//		tooltipLine = Text.white(`Can be processed further before sorting for these ores:`)
					//	} else {
					//		tooltipLine = Text.gray(`- ${nameUpper(item.components[line-1])}`) //skip tier 0 ore cause we smelt it
					//	}
					//} else { //every other part
						if (line <= part.grade + 1) {
							if (part.grade == 0) {
								tooltipLine = Text.white(`- ${nameUpper(item.components[line])}`)
							} else {
								tooltipLine = [gradeLetterColor[index], Text.white(` ${nameUpper(item.components[line])}`)]
							}
						} else if (line == part.grade + 2) {
							if (line != 8) {
								tooltipLine = Text.green(`Can be processed further before sorting for these ores:`)
							} else {
								tooltipLine = Text.darkGray(`Maximum yield achieved`)
							}
						} else { 
							tooltipLine = [gradeLetterColor[line-2], Text.gray(` ${nameUpper(item.components[line-1])}`)]
						}
					//}
					/*
					if (line < part.grade) {
					tooltipLine = Text.white(`- ${item.components[line+2]}`)
					} else if (line > part.grade) {
						tooltipLine = Text.gray(`- ${item.components[line-1]}`)
					} else {
						tooltipLine = Text.gold(`Can be processed further before sorting for these ores:`)
					}*/
				return tooltipLine
			}
			let compoundToolTipCreation = (name) => {
				//Make the Compound part Tooltip
				tooltip.addAdvanced(name, (items, advanced, text) => {
					if (part.name != 'grit') {
						if (!tooltip.shift) {
							text.add(1, [compoundSmeltingFunction(part.grade)])
							text.add(2, [Text.of('Hold ').gray(), Text.of('Shift ').gold(), Text.of('for sorting information.').gray()])
						} else {
							text.add(1, [Text.gold('Sort at this grade for these ores:')])
							text.add(2, compoundLine(0))
							text.add(3, compoundLine(1))
							text.add(4, compoundLine(2))
							text.add(5, compoundLine(3))
							text.add(6, compoundLine(4))
							text.add(7, compoundLine(5))
							text.add(8, compoundLine(6))
							text.add(9, compoundLine(7))
							text.add(10, compoundLine(8))
						}
					} else {
						text.add(1, [compoundSmeltingFunction(part.grade)])
					}
				})
			}
/*
			Crushed Vincyte
			
			Hold Shift for sorting info:
			(
			(White)      tier 0 metal
			(White)      tier 1 metal
			(White) 	tier 2 metal
			(White)      "Can be processed further for these ores:"
			(Gray)      tier 3 metal
			)*/
			
			//Finds the exact items then runs the tooltip creation function
				let partName = ""
				if (Item.of(`kubejs:${part.name}_${item.material}`) != null) {
					partName = `kubejs:${part.name}_${item.material}`
					compoundToolTipCreation(partName)
				}
			}


		})


	////////////////////////////////////////////////
	//											  //
	//			REFINING TOOLTIP START			  //
	//											  //
	////////////////////////////////////////////////
		global.oreRefiningParts.forEach((part, index) => {
			
			let smeltingFunction = (tier) => {
				let smeltingTooltip = ""
				if (part.level == 1) {
					smeltingTooltip = [Text.of(`Can smelted in: `).white(), Text.of(`${smeltingList[tier]}`).yellow()]
				} else {
					smeltingTooltip = Text.of(`Must be refined to level 1 before smelting.`).aqua()
				}
				return smeltingTooltip
			}
			let smeltingCheckFunction = (line) => {
				let smeltingCheck = ""
					if (line == index - 1) {
						if (line == 1) {
							smeltingCheck = Text.of(`✓ `).green()
						} else {
							smeltingCheck = Text.of(`↓ `).gray()
						}
					} else if (line == index) {
						if (line == 1) {
							smeltingCheck = Text.of(`✓ `).green()
						} else {
							smeltingCheck = Text.of(`↓ `).aqua()
						}
					} else {
						smeltingCheck = Text.of(`↓ `).gray()
					}
				return smeltingCheck
			}

			let refiningLine1 = (linePart) => {
				let tooltipLine1 = ""
				if (oreRefiningPartList[oreRefiningPartList.length-1] == nameUpper(linePart)) { // if there is no higher tier (inverted because I'm cool like that or something)
					tooltipLine1 = [Text.darkGray(`Maximum Refining Reached`)]
				} else {
					tooltipLine1 = [smeltingCheckFunction(index+1), Text.gray(oreRefiningPartList[index+1]), Text.gray(` (${index+1})`)]
				}
				return tooltipLine1
			}

			//let refiningLine2 = (linePart) => {
				let tooltipLine2 = ""
					tooltipLine2 = [smeltingCheckFunction(index), Text.of(oreRefiningPartList[index]).white(), Text.aqua(` (${index})`)]
			//	return tooltipLine2
			//}

			let refiningLine3 = (linePart) => {
				let tooltipLine3 = ""
				//console.log(oreRefiningPartList)
				if (oreRefiningPartList[1] == nameUpper(linePart)) { //last item on the list has no next step
					tooltipLine3 = Text.gray(`Can also be crushed into dust`)
				} else {
					tooltipLine3 = [smeltingCheckFunction(index-1), Text.gray(oreRefiningPartList[index-1]), Text.gray(` (${index-1})`)]
				}
				return tooltipLine3
			}
			
			console.log(part.prefix + item.material + part.suffix)

					//Dynamic Tooltip for ore parts
					let refiningToolTipCreation = (name) => {
						//Make the Actual Tooltip
						tooltip.addAdvanced(name, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
							text.add(2, [smeltingFunction(item.tier)])
								if (!tooltip.shift) {
									text.add(3, tooltipLine2)
									text.add(4, [Text.of('Hold ').gray(), Text.of('Shift ').aqua(), Text.of('to see more information.').gray()])
								} else {
									text.add(3, refiningLine1(part.name))
									text.add(4, tooltipLine2)
									text.add(5, refiningLine3(part.name))
								}
						})
					}
			//Finds the exact items then runs the tooltip creation function
			let partName = ""
			if (Item.of(`kubejs:${part.name}_${item.material}`) != null) {
				partName = `kubejs:${part.name}_${item.material}`
				refiningToolTipCreation(partName)
			}
		})
		
	



		}


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
		*/
	})
});