onEvent('item.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.itemParts.forEach((part) => {
    if (part == 'hammer') {
      event.create(`${item.material}_${part}`, 'pickaxe').color(0, item.color).parentModel(`kubejs:item/${part}`).texture(`kubejs:item/${part}`).unstackable().tier('iron').maxDamage(item.durability)//.tooltip(`${item.durability} Base Durability`)
    } else if (part.includes('model')) {
      event.create(`${item.material}_${part.slice(6)}`).color(0, item.color).parentModel(`kubejs:item/${part.slice(6)}`).texture(`kubejs:item/${part.slice(6)}`)
    } else {
      if (item.type == 'gem') { //Gems get special Textures, and always a custom base gem texture
        if (part == 'gem') { //Gems can burn
          if(item.burnTime != null) {
            event.create(`${item.material}`).texture(`kubejs:item/${item.material}`).burnTime(item.burnTime*200)
          } else {
            event.create(`${item.material}`).texture(`kubejs:item/${item.material}`)
          }
        } else if (part == 'dust' && item.burnTime != null) { //Gem dust can burn
            event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`).burnTime(item.burnTime*200)
        } else {
            event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/gem/${part}`)
        }
      } else { //Metal cant burn (yet)
        if (part.includes('custom')) { //custom ingot tag needs a texture 
          event.create(`${item.material}_${part.slice(7)}`)
        } else {
          event.create(`${item.material}_${part}`).color(0, item.color).texture(`kubejs:item/${part}`)
        }
      }
    }
    })
    if (item.ore && (item.type == 'base_metal' || item.type == 'compound_ore' || item.type == 'rare_metal')) {
      if (item.ore_name == null) { 
        if (item.raw_ore) {
          event.create(`raw_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/raw_ore`)
        }
        event.create(`crushed_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_crushed`) //E
        event.create(`${item.material}_grit`).color(0, item.color).texture(`kubejs:item/ore/ore_grit`).parentModel(`kubejs:item/ore/ore_grit`) //0
        event.create(`${item.material}_chunk`).color(0, item.color).texture(`kubejs:item/ore/ore_chunk`).parentModel(`kubejs:item/ore/ore_chunk`)         //D
        //event.create(`${item.material}_clump`).color(0, item.color).texture(`kubejs:item/ore/ore_clump`).parentModel(`kubejs:item/ore/ore_clump`)         //D Kill?
        event.create(`leached_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_leached`).parentModel(`kubejs:item/ore/ore_leached`)   //C
        event.create(`${item.material}_deposit`).color(0, item.color).texture(`kubejs:item/ore/ore_deposit`).parentModel(`kubejs:item/ore/ore_deposit`)   //B
        event.create(`${item.material}_crystal`).color(0, item.color).texture(`kubejs:item/ore/ore_crystal`).parentModel(`kubejs:item/ore/ore_crystal`)         //A

        event.create(`${item.material}_shard`).color(0, item.color).texture(`kubejs:item/ore/ore_shard`)
        event.create(`${item.material}_cluster`).color(0, item.color).texture(`kubejs:item/ore/ore_cluster`)
        event.create(`${item.material}_brick`).color(0, item.color).texture(`kubejs:item/ore/ore_brick`)
        event.create(`washed_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_washed`)
        event.create(`infused_${item.material}`).color(0, item.color).texture(`kubejs:item/ore/ore_infused`)
        event.create(`fine_${item.material}_dust`).color(0, item.color).texture(`kubejs:item/ore/ore_fine_dust`)
        event.create(`wet_${item.material}_dust`).color(0, item.color).texture(`kubejs:item/ore/ore_wet_dust`)
    } else {
      if (item.raw_ore) {
        event.create(`raw_${item.material}`).displayName('Raw ' + item.ore_name + ' Ore').color(0, item.color).texture(`kubejs:item/ore/raw_ore`)
      }
      event.create(`crushed_${item.material}`).displayName('Crushed ' + item.ore_name).color(0, item.color).texture(`kubejs:item/ore/ore_crushed`)
      event.create(`${item.material}_grit`).displayName(item.ore_name + ' Grit').color(0, item.color).texture(`kubejs:item/ore/ore_grit`).parentModel(`kubejs:item/ore/ore_grit`)
      event.create(`${item.material}_chunk`).displayName(item.ore_name + ' Chunk').color(0, item.color).texture(`kubejs:item/ore/ore_chunk`).parentModel(`kubejs:item/ore/ore_chunk`)
      //event.create(`${item.material}_clump`).displayName(item.ore_name + ' Clump').color(0, item.color).texture(`kubejs:item/ore/ore_clump`).parentModel(`kubejs:item/ore/ore_clump`)
      event.create(`leached_${item.material}`).displayName('Leached ' + item.ore_name).color(0, item.color).texture(`kubejs:item/ore/ore_leached`).parentModel(`kubejs:item/ore/ore_leached`)
      event.create(`${item.material}_deposit`).displayName(item.ore_name + ' Deposit').color(0, item.color).texture(`kubejs:item/ore/ore_deposit`).parentModel(`kubejs:item/ore/ore_deposit`)
      event.create(`${item.material}_crystal`).displayName(item.ore_name + ' Crystal').color(0, item.color).texture(`kubejs:item/ore/ore_crystal`).parentModel(`kubejs:item/ore/ore_crystal`)

      event.create(`${item.material}_shard`).displayName(item.ore_name + ' Shard').color(0, item.color).texture(`kubejs:item/ore/ore_shard`)
      event.create(`${item.material}_cluster`).displayName(item.ore_name + ' Cluster').color(0, item.color).texture(`kubejs:item/ore/ore_cluster`)
      event.create(`${item.material}_brick`).displayName(item.ore_name + ' Brick').color(0, item.color).texture(`kubejs:item/ore/ore_brick`)
      event.create(`washed_${item.material}`).displayName('Washed ' + item.ore_name).color(0, item.color).texture(`kubejs:item/ore/ore_washed`)
      event.create(`infused_${item.material}`).displayName('Infused ' + item.ore_name).color(0, item.color).texture(`kubejs:item/ore/ore_infused`)
      event.create(`fine_${item.material}_dust`).displayName('Fine ' + item.ore_name + ' Dust').color(0, item.color).texture(`kubejs:item/ore/ore_fine_dust`)
      event.create(`wet_${item.material}_dust`).displayName('Wet ' + item.ore_name + ' Dust').color(0, item.color).texture(`kubejs:item/ore/ore_wet_dust`)
    }
  }
})
});
/*
onEvent('item.registry.tool_tiers', event => {
  event.add('tier_id', tier => {
    tier.uses = 250
    tier.speed = 6.0
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/iron'
  })
})
onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('tier_id', tier => {
    tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 5, 6, 2]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/iron'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
})*/

onEvent('block.registry', event => {
  global.newMaterialParts.forEach((item) => {
    item.blockParts.forEach((part) => {
      if (part == 'scaffolding' || part == 'coil') {
        event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
      } else  {
        if (item.type == 'gem') {
          if (part == 'storage_block' && item.burnTime != null) { //Gem blocks can burn
              event.create(`${item.material}_${part}`)
              .color(0, item.color)
              .material('metal')
              .hardness(3)
              .resistance(3)
              .tagBlock('minecraft:mineable/pickaxe')
              .tagBlock('minecraft:needs_iron_tool')
              .model(`kubejs:block/gem/${item.iconset}/${part}`)
              .item(itemForm => {itemForm.color(0, item.color).burnTime(item.burnTime*2000)})
            } else {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/gem/${item.iconset}/${part}`).item(itemForm => {itemForm.color(0, item.color)})
          }
        } else {
          event.create(`${item.material}_${part}`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').model(`kubejs:block/${part}`).item(itemForm => {itemForm.color(0, item.color)})
        }
      }
    })
    ////////////////////////////// ORE /////////////////////////////
        //Raw Blocks
    if (item.raw_ore) {
        event.create(`raw_${item.material}_block`).color(0, item.color).material('metal').hardness(3).resistance(3).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').model(`kubejs:block/ore/raw_block`).item(itemForm => {itemForm.color(0, item.color)})
      }
    if (item.ore) {
      if (item.type == 'gem') {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/gem/${item.iconset}/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else if (item.type == 'element') {
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/stone_ore`).lightLevel(0.5).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/element/${type.material}_ore`).lightLevel(0.5).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })
        } else {
          if (item.ore_name != null) { 
            event.create(`poor_${item.material}_ore`).displayName('Poor ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`${item.material}_ore`).displayName(item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            //event.create(`rich_${item.material}_ore`).displayName('Rich ' + item.ore_name + ' Ore').color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          
          global.stoneTypes.forEach((type) => {
			      let stoneNameUpper = type.material.charAt(0).toUpperCase() + type.material.slice(1)
			      let oreName = stoneNameUpper + ' ' + item.ore_name + ' Ore'

            event.create(`poor_${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            event.create(`${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
            //event.create(`rich_${type.material}_${item.material}_ore`).displayName(oreName).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          })
          } else {
          event.create(`poor_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
         //event.create(`rich_${item.material}_ore`).color(0, item.color).material('stone').hardness(4).resistance(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_stone_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        global.stoneTypes.forEach((type) => {
          event.create(`poor_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/poor_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          event.create(`${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
          //event.create(`rich_${type.material}_${item.material}_ore`).color(0, item.color).material('stone').hardness(type.hardness).resistance(type.resistance).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').renderType('cutout').defaultCutout().model(`kubejs:block/ore/rich_${type.material}_ore`).requiresTool(true).item(itemForm => {itemForm.color(0, item.color)})
        })}
      }
      event.create(`${item.material}_ore_sample`).color(0, item.color).material('stone').hardness(0.5).resistance(0.5).tagBlock('minecraft:mineable/pickaxe').renderType('cutout').defaultCutout().model(`kubejs:block/ore/ore_sample`).fullBlock(false).notSolid().box(3,0,3,13,3,13, true).item(itemForm => {itemForm.color(0, item.color)})
    }
  })
});


// Version 4.0
global.pSBC=(p,c0,c1,l)=>{
	let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
	//if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
	if(!this.pSBCr)this.pSBCr=(d)=>{
		let n=d.length,x={};
		if(n>9){
			[r,g,b,a]=d=d.split(","),n=d.length;
			//if(n<3||n>4)return null;
			x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
		}else{
			//if(n==8||n==6||n<4)return null;
			if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
			d=i(d.slice(1),16);
			if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
			else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
		}return x};
	h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
	//if(!f||!t)return null;
	if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
	else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
	a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
	if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
	else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
  }

  //const newFluid = (event, material, name, prefix, viscosity, color, shade) => {
//
//		let preparedColor = '#' + color.toString().toUpperCase().slice(2) //swaps 0x with # for the tool to use
//		let shadedColor = '0x'+ (pSBC ( shade, preparedColor ).slice(1)) //runs the tool and swaps it back to 0x
//
  //  if (prefix == 'prefix') {
  //    if (viscosity == 'thick') {
  //      event.create(`${name}_${material}`).thickTexture(shadedColor).bucketColor(shadedColor)
  //    } else {
  //      event.create(`${name}_${material}`).thinTexture(shadedColor).bucketColor(shadedColor)
  //    }
  //  } else {
  //    if (viscosity == 'thick') {
  //      event.create(`${material}_${name}`).thickTexture(shadedColor).bucketColor(shadedColor)
  //    } else {
  //      event.create(`${material}_${name}`).thinTexture(shadedColor).bucketColor(shadedColor)
  //    }
  //  }
  //}

onEvent('fluid.registry', event => {
  global.newMaterialParts.forEach((item) => {

    if (item.fluid == 'thick') {
      event.create(`molten_${item.material}`).thickTexture(item.color).bucketColor(item.color)
    } else if (item.fluid == 'thin') {
      event.create(`molten_${item.material}`).thinTexture(item.color).bucketColor(item.color)
    }
/*
    if (item.ore) {
      console.log(item.material)
      let preparedColor = '#' + item.color.toString(16).toUpperCase() //swaps 0x with # for the tool to use
      console.log('preparedColor' + preparedColor)
      let shadedColor = global.pSBC ( -0.2, preparedColor ) //runs the tool
      console.log('shadedColor' + shadedColor)
      let finalColor = '0x'+ shadedColor.slice(1) //swaps it back to 0x then converts it into 
      console.log('finalColor' + finalColor)

      event.create(`${item.material}_slurry`).thickTexture(finalColor).bucketColor(finalColor)
    }
*/
    //item.fluids.forEach((fluid) => {
    //  newFluid(event, item.material, fluid[0], fluid[1], fluid[2], item.color, fluid[3])
    //})
  })
});

