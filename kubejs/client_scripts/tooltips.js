var parts = [ //this list is used to label parts the metal tier
	'ingot',
	//'gear',
	'dust',
	//'plate',
	//'rod',
	//'wire',
	//'nugget',
	//'storage_block',
]

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
	//'createbigcannons', 
	'forbidden_arcanus',
	'extendedcrafting',
	'pneumaticcraft',
	'mekanism',
	'chemlib',
	'biggerreactors',
	'beyond_earth',
	'extendedcrafting',
	'elementalcraft'
]

var smeltingList = [
	'Furnace', //this is just to take up the 0 slot
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
	`G`, //this is just to take up the 0 slot
	`F`,
	`E`,
	`D`,
	`C`,
	`B`,
	`A`,
]

var gradeLetterColor = [
	Text.gray(`[G]`), //this is just to take up the 0 slot
	Text.darkGray(`[F]`),
	Text.white(`[E]`),
	Text.green(`[D]`),
	Text.blue(`[C]`),
	Text.lightPurple(`[B]`),
	Text.gold(`[A]`),
]

//This is also in ore_processing
global.refiningMultiplier = [
	1, //this is just to take up the 0 slot
	2,
	4,
	8,
	16,
	32,
	64,
]

//Function that capitilizes the first leter
const nameUpper = (name) => {
	if(name != null) {
		return name.charAt(0).toUpperCase() + name.slice(1)
	} else {
		return 'null'
	}
}

var oreProcessingPartList = []
global.oreProcessingParts.forEach((part) => {
	oreProcessingPartList.push(nameUpper(part.name))
})

var oreRefiningPartList = []
global.oreRefiningParts.forEach((part) => {
	oreRefiningPartList.push(nameUpper(part.name))
})

var partColor = [
	'§f', //Raw ore
	'§8',
	'§f',
	'§a',
	'§9',
	'§d',
	'§6',
]


onEvent('client.generate_assets', event => {
	global.newMaterialParts.forEach((item) => {
		if (item.ore) {
			global.oreProcessingParts.forEach((part) => {
				if (part.name != 'grit') {
					global.partDisplayName = ""
					if (item.ore_name == null) { 
					  global.partDisplayName = part.prefix + nameUpper(item.material) + part.suffix
					} else {
					  global.partDisplayName = part.prefix + nameUpper(item.ore_name) + part.suffix
					}
						//Color the ore part names based on the grade
    					event.addLang(`item.kubejs.${part.name}_${item.material}`, `${partColor[part.grade]}${global.partDisplayName}`)
					if (part.name == 'crushed') {
    					event.addLang(`item.create.crushed_raw_${item.material}`, `${partColor[part.grade]}${global.partDisplayName}`)
					}
				}
			})
		}
	})
})


onEvent('item.tooltip', tooltip => {
	
	tooltip.addAdvanced('multiblocked:symbol', (item, advanced, text) => {
		text.add(1, [Text.aqua('the first tooltip has issues sometimes')])
 	})

	//Multiblocked Tooltips
	tooltip.addAdvanced(`multiblocked:energy_input_mk1`, (item, advanced, text) => {
		text.add(1, [Text.of('Max transfer: ').gold(), Text.of('16,000').green()])
 	})
  	tooltip.addAdvanced(`multiblocked:energy_input_mk2`, (item, advanced, text) => {
		text.add(1, [Text.of('Max transfer: ').gold(), Text.of('128,000').green()])
  	})
  	tooltip.addAdvanced(`multiblocked:energy_input_mk3`, (item, advanced, text) => {
		text.add(1, [Text.of('Max transfer: ').gold(), Text.of('1,024,000').green()])
  	})

	//Battie tooltips
	global.batteryItems.forEach((item, index) => {
	  let storage = global.batteryStorage[index].toLocaleString();
	  console.log(item +' ' +storage)
	  tooltip.addAdvanced(`kubejs:${item}_empty`, (item, advanced, text) => {
		  text.add(1, [Text.of(`(0/${storage})`).red()])
		})
	  tooltip.addAdvanced(`kubejs:${item}_full`, (item, advanced, text) => {
		  text.add(1, [Text.of(`(${storage})`).green()])
		})
	  
	  
	})

	//ae2additions
	var ae2aLoaded = Platform.isLoaded('ae2additions');
   	if(ae2aLoaded){
	tooltip.addAdvanced('ae2additions:pattern_provider_2th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 18 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	tooltip.addAdvanced('ae2additions:pattern_provider_3th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 27 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	tooltip.addAdvanced('ae2additions:pattern_provider_4th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 36 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	tooltip.addAdvanced('ae2additions:part_pattern_provider_2th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 18 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	tooltip.addAdvanced('ae2additions:part_pattern_provider_3th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 27 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	tooltip.addAdvanced('ae2additions:part_pattern_provider_4th', (item, advanced, text) => {
		text.add(1, [Text.of('Holds 36 Patterns').lightPurple()])
		text.add(2, [Text.of('Only Shows Up On The Advanced Pattern Access Terminal').red()])
  	})
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////// COIL TIPS NEED TO MAKE CHANGES MANUALLY HERE THERE AND EVERYWHERE (aka ore_processing) ///////////////

	  let coilHeatValues = [
		{
			name: 'white_alloy',
			heat: 100
		},
		{
			name: 'desh',
			heat: 200
		},
		{
			name: 'tungsten',
			heat: 300
		},
		{
			name: 'adamantium',
			heat: 400
		},
		{
			name: 'vibranium',
			heat: 1000
		}
	]
	coilHeatValues.forEach(coil => {
		tooltip.addAdvanced(`kubejs:${coil.name}_coil`, (item, advanced, text) => {
			text.add(1, [Text.white('EBF Heat Increase Per Coil: '), Text.red(`${coil.heat}`)])
		})
	});

	/////////// I really should figure out a way to handle these through the master list ///////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	global.newMaterialParts.forEach((item) => {
		//Allomantic Tooltips for flakes
		if (item.allomancy != null) {
			console.log(`${item.material} is allomantic`);
			let allomancyToolTip = item.allomancy
			let feruchemyToolTip = item.feruchemy
			tooltip.addAdvanced(`allomancy:${item.material}_flakes`, (item, advanced, text) => {
				if (!tooltip.shift) {
				  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').aqua(), Text.of('to see allomantic uses.').gold()])
				} else {
				  text.add(1, Text.aqua(allomancyToolTip))
				}
				if (!tooltip.ctrl) {
				  text.add(2, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see feruchemy uses.').gold()])
				} else {
				  text.add(2, Text.green(feruchemyToolTip))
				}
			})
		}


		//Adds Metal Tier labels
		if (item.type == 'base_metal') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null){
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Metal`)}
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null){
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Metal`)}
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null){
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Metal`)}
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
			//Adds Rare Metal Tier labels
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
			
				//Grit is special
			if(item.type != 'compound_ore') {
				tooltip.addAdvanced(`kubejs:grit_${item.material}`, (items, advanced, text) => {
					text.add(1, [Text.white(`Can smelted in: `), Text.yellow(`${nameUpper(smeltingList[item.tier])}`)])
				})
			} else {
				tooltip.addAdvanced(`kubejs:grit_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.white(`Can smelted into: `), Text.gold(`${nameUpper(item.components[0])}`)])
				})}
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
							smeltingTooltip = [Text.of(`Can be smelted in: `).white(), Text.of(`${smeltingList[tier]}`).yellow()]
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
						if (oreProcessingPartList[oreProcessingPartList.length-1] == nameUpper(part)) { //last item on the list has no next step -2 because grit is last ******moved grit to a seperate list so its -1 now
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
								if (!tooltip.shift) {
									text.add(3, processingLine2(part.name))
									text.add(4, [Text.of('Hold ').gray(), Text.of('Shift ').green(), Text.of('to see more information.').gray()])
								} else {
									text.add(3, processingLine1(part.name))
									text.add(4, processingLine2(part.name))
									text.add(5, processingLine3(part.name))
								}
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
				return tooltipLine
			}
			let compoundToolTipCreation = (name) => {
				//Make the Compound part Tooltip
				tooltip.addAdvanced(name, (items, advanced, text) => {
						if (!tooltip.shift) {
							text.add(1, [compoundSmeltingFunction(part.grade)])
							text.add(2, [Text.of('Hold ').gray(), Text.of('Shift ').gold(), Text.of('for sorting information.').gray()])
						} else {
							text.add(1, [Text.gold('Sort at this grade for:')])
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
					
				})
			}
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
			if (Item.of(`kubejs:${part.name}_${item.material}`) != null && part.name != 'fine_dust') {
				partName = `kubejs:${part.name}_${item.material}`
				refiningToolTipCreation(partName)
			}
		})
		}
	});
	
	
});
