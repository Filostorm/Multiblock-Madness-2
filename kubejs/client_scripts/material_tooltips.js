
var materialIngots = {
	'minecraft:iron_ingot': 'Tier 1 Metal',
	'minecraft:gold_ingot': 'Tier 1 Metal',
	'minecraft:copper_ingot': 'Tier 1 Metal',
	'thermal:lead_ingot': 'Tier 1 Metal',
	'thermal:nickel_ingot': 'Tier 1 Metal',
	'thermal:silver_ingot': 'Tier 1 Metal',
	'thermal:tin_ingot': 'Tier 1 Metal',
	'create:zinc_ingot': 'Tier 1 Metal',
	'tconstruct:cobalt_ingot': 'Tier 2 Metal',
	'chemlib:aluminum_ingot': 'Tier 2 Metal',
	'chemlib:titanium_ingot': 'Tier 3 Metal',
	'chemlib:tungsten_ingot': 'Tier 3 Metal',
	'kubejs:platinum_ingot': 'Tier 3 Metal',
	'allomancy:chromium_ingot': 'Tier 4 Metal',
	'allomancy:cadmium_ingot': 'Tier 4 Metal',
	'chemlib:palladium_ingot': 'Tier 4 Metal',
	'chemlib:iridium_ingot': 'Tier 4 Metal',
	'thermal:bronze_ingot': 'Tier 1 Alloy',
	'thermal:constantan_ingot': 'Tier 1 Alloy',
	'thermal:electrum_ingot': 'Tier 1 Alloy',
	'thermal:invar_ingot': 'Tier 1 Alloy',
	'create:brass_ingot': 'Tier 1 Alloy',
	'extendedcrafting:redstone_ingot': 'Tier 1 Alloy',
	'kubejs:pewter_ingot': 'Tier 1 Alloy',
	'allomancy:duralumin_ingot': 'Tier 2 Alloy',
	'allomancy:nicrosil_ingot': 'Tier 2 Alloy',
	'allomancy:bendalloy_ingot': 'Tier 2 Alloy',
}

onEvent('item.tooltip', tooltip => {
	for (var ingot in materialIngots) {
			tooltip.add(ingot, materialIngots[ingot])
		}
});