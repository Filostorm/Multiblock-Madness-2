// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {			
	global.removeAndHide.forEach((item) => {
		event.hide(item)
	})

	global.transitionalItems.forEach((item) => {
		event.hide(`kubejs:incomplete_${item}`)
	})

	global.newMaterialParts.forEach((item) => {
		global.stoneTypes.forEach((type) => {
			if (item.ore) {
				event.hide(`kubejs:poor_${type.material}_${item.material}_ore`)
				event.hide(`kubejs:${type.material}_${item.material}_ore`)
				event.hide(`kubejs:rich_${type.material}_${item.material}_ore`)
				event.hide(`kubejs:${item.material}_ore_sample`)
				}
		})
	})

	global.createCrushed.forEach((item) => {
		event.hide(`kubejs:crushed_${item}`)
	})
	
	event.hide(Item.of('ae2:facade').ignoreNBT())
});

onEvent('rei.add.items', event => {
	var addItems = [
		'thermal:ruby',
		'thermal:ruby_block',
		'thermal:ruby_ore',
		'thermal:ruby_dust',
		'thermal:ruby_gear',
		'thermal:sapphire',
		'thermal:sapphire_block',
		'thermal:sapphire_ore',
		'thermal:sapphire_dust',
		'thermal:sapphire_gear',
		'minecraft:structure_block',
		'feruchemy:metal_mind'
	]

	addItems.forEach((item) => {
		event.add(Item.of(item))
	})
});
onEvent('item.tooltip', tooltip => {
	/*
  // Neat utility to display NBT in the tooltip
  tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {

	if (!tooltip.ctrl) {
		text.add(2, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see feruchemy uses.').gold()])
	  } else {
		text.add(2, Text.of(toolTip).green())
	  }

    if (!tooltip.alt && item.nbt) {
		text.add(2, [Text.of('Hold '), Text.of('Alt ').red().italic(true), Text.of('to see NBT.')])
    } else {
		text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
	}
  })
  */
});

onEvent("rei.group", (event) => {
	/*
    // This event allows you to add custom entry groups to REI, which can be used to clean up the entry list significantly.
    // As a simple example, we can add a "Swords" group which will contain all (vanilla) swords
    // Note that each group will need an id (ResourceLocation) and a display name (Component / String)
    event.groupItems("kubejs:rei_groups/swords", "Swords", [
        "minecraft:wooden_sword",
        "minecraft:stone_sword",
        "minecraft:iron_sword",
        "minecraft:diamond_sword",
        "minecraft:golden_sword",
        "minecraft:netherite_sword",
    ]);*/

    // An easy use case for grouping stuff together could be using tags:
    // In this case, we want all the Hanging Signs and Sign Posts from Supplementaries to be grouped together
    event.groupItemsByTag("supplementaries:rei_groups/hanging_signs", "Hanging Signs", "supplementaries:hanging_signs");
    event.groupItemsByTag("supplementaries:rei_groups/sign_posts", "Sign Posts", "supplementaries:sign_posts");

    // Another example: We want all of these items to be grouped together ignoring NBT,
    // so you don't have a bajillion potions and enchanted books cluttering up REI anymore
    const useNbt = ["potion", "enchanted_book", "splash_potion", "tipped_arrow", "lingering_potion", "apotheosis:potion_charm", "botania:flight_tiara",
	"sophisticatedstorage:chest", "sophisticatedstorage:iron_chest", "sophisticatedstorage:gold_chest", "sophisticatedstorage:diamond_chest", "sophisticatedstorage:netherite_chest",
	"sophisticatedstorage:shulker_box", "sophisticatedstorage:iron_shulker_box", "sophisticatedstorage:gold_shulker_box", "sophisticatedstorage:diamond_shulker_box", "sophisticatedstorage:netherite_shulker_box",
	"sophisticatedstorage:barrel", "sophisticatedstorage:iron_barrel", "sophisticatedstorage:gold_barrel", "sophisticatedstorage:diamond_barrel", "sophisticatedstorage:netherite_barrel",
	"sophisticatedstorage:limited_barrel_1", "sophisticatedstorage:limited_iron_barrel_1", "sophisticatedstorage:limited_gold_barrel_1", "sophisticatedstorage:limited_diamond_barrel_1", "sophisticatedstorage:limited_netherite_barrel_1",
	"sophisticatedstorage:limited_barrel_2", "sophisticatedstorage:limited_iron_barrel_2", "sophisticatedstorage:limited_gold_barrel_2", "sophisticatedstorage:limited_diamond_barrel_2", "sophisticatedstorage:limited_netherite_barrel_2",
	"sophisticatedstorage:limited_barrel_3", "sophisticatedstorage:limited_iron_barrel_3", "sophisticatedstorage:limited_gold_barrel_3", "sophisticatedstorage:limited_diamond_barrel_3", "sophisticatedstorage:limited_netherite_barrel_3",
	"sophisticatedstorage:limited_barrel_4", "sophisticatedstorage:limited_iron_barrel_4", "sophisticatedstorage:limited_gold_barrel_4", "sophisticatedstorage:limited_diamond_barrel_4", "sophisticatedstorage:limited_netherite_barrel_4"
	];

    useNbt.forEach((id) => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getName(), item);
    });

    // Items can also be grouped using anything that can be expressed as an IngredientJS,
    // including for example regular expressions or lists of ingredients
    event.groupItems("kubejs:rei_groups/spawn_eggs", "Spawn Eggs", [
        /spawn_egg/,
        /^ars_nouveau:.*_se$/,
        "supplementaries:red_merchant_spawn_egg",
    ]);
/*
    // you can even use custom predicates for grouping, like so:
    event.groupItemsIf("kubejs:rei_groups/looting_stuff", "Stuff with Looting I", (item) =>
        // this would group together all items that have the Looting I enchantment on them
        item.hasEnchantment("minecraft:looting", 1)
    );

    // you can also group fluids in much the same way as you can group items, for instance:
    event.groupFluidsByTag("kubejs:rei_groups/fluid_tagged_as_water", `"Water" (yeah right lmao)`, "minecraft:water");*/
});