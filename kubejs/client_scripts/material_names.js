const materialNameUpper = (material) => {
	const name = material.split("_");

	for (let i = 0; i < name.length; i++) {
		name[i] = name[i][0].toUpperCase() + name[i].substr(1);
	}
	
	return name.join(' ');
  }

let types = {
	'mechanical':'§e', //yellow
	'electrical':'§c', //red
	'structural':'§a', //green
	'magical':'§9' //blue
}
let tierNames = ['0', '1st','2nd','3rd','4th']
let newTierName = 'Stage '


onEvent('client.generate_assets', event => {
	global.newMaterialParts.forEach((item) => {
		if(item.material.includes('tier')) {
			let materialSplit = item.material.split('_');
			let tier = materialSplit[1]
			let materialName = materialSplit[2] +'_' + materialSplit[3]
			let newName = types[materialSplit[2]]/**this grabs a color based on the type of alloy */ + newTierName + tier +' '+ materialNameUpper(materialName) + ' ' 

			item.itemParts.forEach((partName) => {
				if (partName.includes('model')) {
					event.addLang(`item.kubejs.${item.material}_${partName.slice(6)}`, newName + materialNameUpper(partName.slice(6)))
				} else {
					event.addLang(`item.kubejs.${item.material}_${partName}`, newName + materialNameUpper(partName))

				}
			})
			item.blockParts.forEach((blockName) => {
				event.addLang(`block.kubejs.${item.material}_${blockName}`, newName + materialNameUpper(blockName))
			})
		}
	})
})
