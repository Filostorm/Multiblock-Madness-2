/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.low_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.chunk_generator", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.mana_compressor", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.drone_bay", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.height_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.super_computational_matrix", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.hephaestus_smithing_station", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placed_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.mana_condenser", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.mbm2.mana_compressor", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_condition_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.create_item_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.flotation", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature_size_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.mana_condenser", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.deposition_chamber", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.fluid_centrifuge_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.item_input", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.mana_condenser", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.mbm2.hephaestus_smithing_station", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.aureal_accumulator", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.item_output", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.deposition_chamber", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.drone_bay", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.leaching_vat", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.mbm2.mana_compressor", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.energy_input_mk3", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.sludge_pump", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.energy_input_mk1", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.dimension_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.super_computational_matrix", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.energy_receiver", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.centrifuge", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.mechanical_crafting", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.mbm2.hephaestus_smithing_station", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.precision_milling_unit", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "level.tick", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.enchantment", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.mixer_mk1", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.fluid_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.item_output", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.hephaestus_smithing_station", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.heater", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.fluid", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.heater", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.mbm2.aureal_accumulator", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.elemental_stabilizer", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.fluids", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.categories", handler: (event: Internal.RemoveJEICategoriesEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.paint_screen", handler: (event: Internal.ScreenPaintEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.vaccum_chamber", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "postinit", handler: (event: Internal.StartupEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.blueprint_table_part", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.mbm2.hephaestus_smithing_station", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.load", handler: (event: Internal.ServerEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.energy_receiver", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_converter_register", handler: (event: Internal.RecipeConverterRegisterEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "command.registry", handler: (event: Internal.CommandRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "level.load", handler: (event: Internal.SimpleLevelEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_piece", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.ebf", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.hephaestus_smithing_station", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mekanism.pigment", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "entity.loot_tables", handler: (event: Internal.EntityLootEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.elemental_stabilizer", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.mbm2.hephaestus_smithing_station", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.ebf", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.centrifuge_mk2", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.fusion_reactor", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.air_collector", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.botanical_sourcelink", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.battery_converter", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.big_item_output", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.sludge_sifter", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.forge.world_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.processor_list", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.fusion_reactor", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.information", handler: (event: Internal.InformationREIEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.sludge_sifter", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.boiler.heater", handler: (event: Internal.BoilerHeaterHandlerEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.combo_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.precision_milling_unit", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.casting_machine", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.logged_in", handler: (event: Internal.ClientLoggedInEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.subtypes", handler: (event: Internal.JEISubtypesEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.items", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.energy_receiver", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.menu", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.big_item_input", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.item_input", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.fluid_centrifuge_mk1", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.casting_machine", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.mana_condenser", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.galactic_trade_center", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.activity", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.powder_mill", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.modification", handler: (event: Internal.ItemModificationEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.crystal_chamber", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.mechanical_crafter", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.mixer_mk1", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.fluid_output", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.controller_tester", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.big_item_output", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "init", handler: (event: Internal.StartupEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.logged_in", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.chemical_reactor", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.blueprint_table", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.motive", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.create_item_output", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "chest.loot_tables", handler: (event: Internal.ChestLootEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.drone_bay", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.botania.brews", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_entity_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.data_processing_unit", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.fluid_centrifuge_mk1", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.game_events", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.mbm2.ebf", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.receiver_block", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.cast_press", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.item_input", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.data_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.stat_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.mbm2.ebf", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.minecraft.fluid", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.railgun", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mekanism.slurry", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.modification", handler: (event: Internal.BlockModificationEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.leaching", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.recipes", handler: (event: Internal.RemoveJEIRecipesEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "gift.loot_tables", handler: (event: Internal.GiftLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.particle_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.big_item_input", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "fishing.loot_tables", handler: (event: Internal.FishingLootEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.air_collector_mk1", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.fluid_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.fluid_output", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mob_effect", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_output_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.mixer", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.vaccum_chamber", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.controller_tester", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.mbm2.ebf", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.mbm2.mana_compressor", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.tick", handler: (event: Internal.ServerEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.type_registry", handler: (event: Internal.RecipeTypeRegistryEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.crystal_chamber", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "sound.registry", handler: (event: Internal.SoundRegistryEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.super_computational_matrix", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_placement", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.compostables", handler: (event: Internal.CompostablesRecipeEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.air_collector_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome_source", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_output_mk1", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.big_item_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_input_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_input_mk2", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.energy_input_mk3", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.mana_compressor", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.information", handler: (event: Internal.InformationJEIEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.cast_press", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "generic.loot_tables", handler: (event: Internal.GenericLootEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.railgun", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.painter_updated", handler: (event: Internal.PainterUpdatedEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.fluids", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.centrifuge_mk2", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.fluids", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.sorter_mk1", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.sorter_mk2", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.schedule", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.fluids", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.fusion_reactor", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.pipe.fluid_effect", handler: (event: Internal.SpecialFluidHandlerEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "command.run", handler: (event: Internal.CommandEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.data_receiver", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.elemental_stabilizer", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.data_receiver", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.remove.categories", handler: (event: Internal.RemoveREICategoryEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "create.spout.special", handler: (event: Internal.SpecialSpoutHandlerEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.fluids", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.pedestal", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.item_input", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.flotation", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.deposition", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.mixer_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.create_item_output", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.mechanical_crafter", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_condition", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.mana_compressor", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.big_item_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.energy_input_mk1", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.sorter_mk1", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.material_rule", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.sorter_mk2", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.template_pool", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.sintering", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.energy_input_mk3", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.chunk_status", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sensor_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.fluid", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.serializer.special.flag", handler: (event: Internal.SpecialRecipeSerializerManager) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.drone_bay", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.mbm2.hephaestus_smithing_station", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.int_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.vaccum", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.entity_types", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.data_processing_unit", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.satellite_receiver", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.position_source_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.remove", handler: (event: Internal.WorldgenRemoveEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.mbm2.mixer_mk1", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.group", handler: (event: Internal.REIGroupEntriesEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ponder.tag", handler: (event: Internal.PonderItemTagEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.potion_brewing.register", handler: (event: Internal.PotionBrewingRegisterEventForge) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.fluid_output", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.pedestal", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.botanical_sourcelink", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.attribute", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "worldgen.add", handler: (event: Internal.WorldgenAddEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.fluid_input", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.leaching_vat", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.drops", handler: (event: Internal.LivingEntityDropsEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.vaccum_chamber", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.foliage_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.recipe_serializer", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "fluid.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.items", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.item.any", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.mbm2.aureal_accumulator", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.chemical_reactor", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.items", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.energy_converter", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.item", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.super_computational_matrix", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.sintering_oven", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.railgun", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.pos_rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_number_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.block_predicate_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.casting_machine", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.hurt", handler: (event: Internal.LivingEntityHurtEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.model_properties", handler: (event: Internal.ItemModelPropertiesEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.receiver_block", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.forge.loot_modifier_serializers", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.feature", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.sintering_oven", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.high_priority", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.air_collector_mk1", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.density_function", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.mbm2.aureal_accumulator", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.sound_event", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.minecraft.item", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.pedestal", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.centrifuge_mk2", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.energy_converter", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table_part", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.mechanical_crafter", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.fluid_input", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.mbm2.mana_compressor", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.item_output", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.hephaestus_smithing_station", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.sorter_mk1", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mekanism.gas", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.placement_modifier_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_profession", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.trade_center", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.botanical_sourcelink", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.sorter_mk2", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.ebf", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.villager_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.mbm2.ebf", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.cast_press", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.railgun", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.energy_receiver", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.hide.minecraft.item", handler: (event: Internal.HideREIEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "block.loot_tables", handler: (event: Internal.BlockLootEventJS) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.tool_tiers", handler: (event: Internal.ItemToolTierEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.chemical_reactor", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.mana_compressor", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.item_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.heater", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.potion", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.energy_converter", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.mbm2.ebf", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.leaching_vat", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.fluid_output", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.tick", handler: (event: Internal.ClientTickEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**, **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.death", handler: (event: Internal.LivingEntityDeathEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.flotation", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.data_receiver", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.trunk_placer_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.blocks", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.item_output", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.blueprint_table", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.mbm2.aureal_accumulator", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.heater", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.item_output", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_pool_entry_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.memory_module_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.controller_tester", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.casting", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.repurposed_structures.json_conditions", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.chemical_reactor", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.fluid_input", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_pool_element", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.mbm2.hephaestus_smithing_station", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.deposition_chamber", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.elemental_stabilizer", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.satellite_receiver", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.custom_stat", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "player.advancement", handler: (event: Internal.PlayerAdvancementEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.block_state_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.mbm2.aureal_accumulator", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.data_processing_unit", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.aureal_accumulator", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.sludge_sifter", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.big_item_input", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.flotation", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.minecraft.fluid", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.mbm2.mixer_mk1", handler: (event: Internal.UpdateTickEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.energy_input_mk3", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.aureal_accumulator", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.mekanism.infuse_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.energy_input_mk1", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.mbm2.mana_compressor", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.fluid_output", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "lootjs", handler: (event: Internal.LootModificationForgeEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.pedestal", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.aureal_accumulator", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_score_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.wanderer.trades", handler: (event: Internal.WandererTradingEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.data_processing_unit", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.galactic_trade_center", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.point_of_interest_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.noise_settings", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.structure.load", handler: (event: Internal.StructureLoadEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.big_item_input", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.crystal_chamber", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.armor_tiers", handler: (event: Internal.ItemArmorTierEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.mbm2.ebf", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.generate_assets", handler: (event: Internal.ClientGenerateAssetsEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.mbm2.mixer_mk1", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.blueprint_table", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.sintering_oven", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.loot_nbt_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.mbm2.satellite_receiver", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table_part", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "morejs.player.xp_change", handler: (event: Internal.ExperiencePlayerEventJS) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.mbm2.mixer_mk1", handler: (event: Internal.UpdateFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.create_item_input", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_input_mk3", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_input_mk2", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.ebf", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.float_provider_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.crystallization", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.last", handler: (event: Internal.DataPackEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "morejs.villager.trades", handler: (event: Internal.VillagerTradingEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.galactic_trade_center", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.fluid_centrifuge_mk1", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.energy_input_mk1", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.custom", handler: (event: Internal.HideCustomJEIEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_processor", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.item_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "ponder.registry", handler: (event: Internal.PonderRegistryEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.rule_test", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "client.init", handler: (event: Internal.ClientEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.cast_press", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.structure_set", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.tree_decorator_type", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.search_recipe.mbm2.mixer_mk1", handler: (event: Internal.SearchRecipeEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "entity.check_spawn", handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.pedestal", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.item_output", handler: (event: Internal.UpdateRendererEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.combo_input", handler: (event: Internal.PartAddedEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.configured_carver", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.mbm2.data_receiver", handler: (event: Internal.DynamicPatternEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.mbm2.precision_milling_unit", handler: (event: Internal.StructureFormedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.item.any", handler: (event: Internal.StatusChangedEvent) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.sorter_mk1", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "rei.add.item", handler: (event: Internal.AddREIEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "tags.worldgen.biome", handler: (event: Internal.TagEventJS<any>) => void);
/**
 * 
 * The event fires on: **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.sorter_mk2", handler: (event: Internal.RecipeUIEvent) => void);
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "server.datapack.first", handler: (event: Internal.DataPackEventJS) => void);
declare function onEvent(name: `mbd.structure_formed`, handler: (event: Internal.StructureFormedEvent) => void);
declare function onEvent(name: `mbd.status_changed`, handler: (event: Internal.StatusChangedEvent) => void);
declare function onEvent(name: `mbd.update_renderer`, handler: (event: Internal.UpdateRendererEvent) => void);
declare function onEvent(name: `mbd.part_added`, handler: (event: Internal.PartAddedEvent) => void);
declare function onEvent(name: `mbd.dynamic_pattern`, handler: (event: Internal.DynamicPatternEvent) => void);
declare function onEvent(name: `mbd.recipe_ui`, handler: (event: Internal.RecipeUIEvent) => void);
declare function onEvent(name: `mbd.write_initial_data`, handler: (event: Internal.WriteInitialDataEvent) => void);
declare function onEvent(name: `mbd.update_formed`, handler: (event: Internal.UpdateFormedEvent) => void);
declare function onEvent(name: `mbd.read_initial_data`, handler: (event: Internal.ReadInitialDataEvent) => void);
declare function onEvent(name: `mbd.update_tick`, handler: (event: Internal.UpdateTickEvent) => void);
declare function onEvent(name: `mbd.search_recipe`, handler: (event: Internal.SearchRecipeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.ProjectileImpactEvent", handler: (event: Internal.ProjectileImpactEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile", handler: (event: Internal.PlayerEvent$LoadFromFile) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogColors", handler: (event: Internal.EntityViewRenderEvent$FogColors) => void);
declare function onForgeEvent(name: "be.florens.expandability.api.forge.PlayerSwimEvent", handler: (event: Internal.PlayerSwimEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$UnWatch", handler: (event: Internal.ChunkWatchEvent$UnWatch) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void);
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.RandomTickEvent$Fluid", handler: (event: io.github.noeppi_noeppi.libx.event.RandomTickEvent$Fluid) => void);
declare function onForgeEvent(name: "it.hurts.sskirillss.relics.api.events.common.LivingSlippingEvent", handler: (event: Internal.LivingSlippingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking", handler: (event: Internal.PlayerEvent$StopTracking) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseInputEvent", handler: (event: Internal.InputEvent$MouseInputEvent) => void);
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.ConfigLoadedEvent", handler: (event: Internal.ConfigLoadedEvent) => void);
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.RandomTickEvent$Block", handler: (event: io.github.noeppi_noeppi.libx.event.RandomTickEvent$Block) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Post", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$CameraSetup", handler: (event: Internal.EntityViewRenderEvent$CameraSetup) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.BlockSetEvent", handler: (event: Internal.BlockSetEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void);
declare function onForgeEvent(name: "com.blakebr0.cucumber.event.RegisterRecipesEvent", handler: (event: Internal.RegisterRecipesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlayStreamingSourceEvent", handler: (event: Internal.PlayStreamingSourceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$AllowDespawn", handler: (event: Internal.LivingSpawnEvent$AllowDespawn) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.EntityTickEvent", handler: (event: Internal.EntityTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.modifiers.ModifierManager$ModifiersLoadedEvent", handler: (event: Internal.ModifierManager$ModifiersLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Pre", handler: (event: Internal.RenderLivingEvent$Pre<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void);
declare function onForgeEvent(name: "it.hurts.sskirillss.relics.api.events.common.FluidCollisionEvent", handler: (event: Internal.FluidCollisionEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderNameplateEvent", handler: (event: Internal.RenderNameplateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Pre) => void);
declare function onForgeEvent(name: "net.mehvahdjukaar.selene.villager_ai.VillagerBrainEvent", handler: (event: Internal.VillagerBrainEvent) => void);
declare function onForgeEvent(name: "com.supermartijn642.core.render.RenderWorldEvent", handler: (event: Internal.RenderWorldEvent) => void);
declare function onForgeEvent(name: "sirttas.dpanvil.api.event.DataPackReloadCompleteEvent", handler: (event: Internal.DataPackReloadCompleteEvent) => void);
declare function onForgeEvent(name: "org.embeddedt.embeddium.api.ChunkDataBuiltEvent", handler: (event: Internal.ChunkDataBuiltEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityJoinWorldEvent", handler: (event: Internal.EntityJoinWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$RenderFogEvent", handler: (event: Internal.EntityViewRenderEvent$RenderFogEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent", handler: (event: Internal.LivingEvent$LivingVisibilityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Post", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$PotentialSpawns", handler: (event: Internal.WorldEvent$PotentialSpawns) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingGetProjectileEvent", handler: (event: Internal.LivingGetProjectileEvent) => void);
declare function onForgeEvent(name: "org.zeith.hammerlib.event.client.ClientLoadedInEvent", handler: (event: Internal.ClientLoadedInEvent) => void);
declare function onForgeEvent(name: "net.roguelogix.phosphophyllite.event.ReloadDataEvent", handler: (event: Internal.ReloadDataEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityLeaveWorldEvent", handler: (event: Internal.EntityLeaveWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "com.github.alexthe666.citadel.client.event.EventPosePlayerHand", handler: (event: Internal.EventPosePlayerHand) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$WorldTickEvent", handler: (event: Internal.TickEvent$WorldTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.DifficultyChangeEvent", handler: (event: Internal.DifficultyChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawSelectionEvent$HighlightBlock", handler: (event: Internal.DrawSelectionEvent$HighlightBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: Internal.EntityMobGriefingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PostLayer", handler: (event: Internal.RenderGameOverlayEvent$PostLayer) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Load", handler: (event: Internal.WorldEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionColorCalculationEvent", handler: (event: Internal.PotionColorCalculationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Post", handler: (event: Internal.RenderGameOverlayEvent$Post) => void);
declare function onForgeEvent(name: "com.github.alexthe666.citadel.client.event.EventGetStarBrightness", handler: (event: Internal.EventGetStarBrightness) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.PlaySoundAtEntityEvent", handler: (event: Internal.PlaySoundAtEntityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$CheckSpawn", handler: (event: Internal.LivingSpawnEvent$CheckSpawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Post", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void);
declare function onForgeEvent(name: "be.florens.expandability.api.forge.LivingFluidCollisionEvent", handler: (event: Internal.LivingFluidCollisionEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.SetupLivingBipedAnimEvent$Post", handler: (event: Internal.SetupLivingBipedAnimEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: Internal.EntityEvent$EntityConstructing) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.RenderHandItemEvent$Post", handler: (event: Internal.RenderHandItemEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenOpenEvent", handler: (event: Internal.ScreenOpenEvent) => void);
declare function onForgeEvent(name: "org.cyclops.integrateddynamics.api.part.AttachCapabilitiesEventPart", handler: (event: Internal.AttachCapabilitiesEventPart) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDestroyBlockEvent", handler: (event: Internal.LivingDestroyBlockEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelLastEvent", handler: (event: Internal.RenderLevelLastEvent) => void);
declare function onForgeEvent(name: "it.hurts.sskirillss.relics.api.events.common.EntityBlockSpeedFactorEvent", handler: (event: Internal.EntityBlockSpeedFactorEvent) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.ManaRegenCalcEvent", handler: (event: Internal.ManaRegenCalcEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogDensity", handler: (event: Internal.EntityViewRenderEvent$FogDensity) => void);
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaItemsEvent", handler: (event: Internal.ManaItemsEvent) => void);
declare function onForgeEvent(name: "org.cyclops.integrateddynamics.api.network.AttachCapabilitiesEventNetwork", handler: (event: Internal.AttachCapabilitiesEventNetwork) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Block", handler: (event: Internal.RandomTickEvent$Block) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.CampfireSmokeEvent", handler: (event: Internal.CampfireSmokeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void);
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.drone.DroneConstructingEvent", handler: (event: Internal.DroneConstructingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedInEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.FOVModifierEvent", handler: (event: Internal.FOVModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void);
declare function onForgeEvent(name: "com.simibubi.create.api.event.BlockEntityBehaviourEvent", handler: (event: Internal.BlockEntityBehaviourEvent<any>) => void);
declare function onForgeEvent(name: "net.blay09.mods.cookingforblockheads.api.event.FoodRegistryInitEvent", handler: (event: Internal.FoodRegistryInitEvent) => void);
declare function onForgeEvent(name: "sirttas.dpanvil.api.event.DataManagerReloadEvent", handler: (event: Internal.DataManagerReloadEvent<any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionApplicableEvent", handler: (event: Internal.PotionEvent$PotionApplicableEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BiomeLoadingEvent", handler: (event: Internal.BiomeLoadingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegistryEvent$IdMappingEvent", handler: (event: Internal.RegistryEvent$IdMappingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$SpecialSpawn", handler: (event: Internal.LivingSpawnEvent$SpecialSpawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemExpireEvent", handler: (event: Internal.ItemExpireEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.AdvancementEvent", handler: (event: Internal.AdvancementEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.SetupLivingBipedAnimEvent$Pre", handler: (event: Internal.SetupLivingBipedAnimEvent$Pre) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Chat", handler: (event: Internal.RenderGameOverlayEvent$Chat) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedOutEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedOutEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerNegotiationEvent", handler: (event: Internal.PlayerNegotiationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Pre", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.LivingEntityTickEndEvent", handler: (event: Internal.LivingEntityTickEndEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingPackSizeEvent", handler: (event: Internal.LivingPackSizeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler", handler: (event: Internal.PermissionGatherEvent$Handler) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat", handler: (event: Internal.PlayerEvent$TabListNameFormat) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.ChunkFullyLoadedEvent", handler: (event: Internal.ChunkFullyLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: Internal.LivingEvent$LivingJumpEvent) => void);
declare function onForgeEvent(name: "net.mehvahdjukaar.selene.resourcepack.EarlyPackReloadEvent", handler: (event: Internal.EarlyPackReloadEvent) => void);
declare function onForgeEvent(name: "dev.ftb.mods.ftblibrary.sidebar.SidebarButtonCreatedEvent", handler: (event: Internal.SidebarButtonCreatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.RenderHandItemEvent$Pre", handler: (event: Internal.RenderHandItemEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$KeyInputEvent", handler: (event: Internal.InputEvent$KeyInputEvent) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.MaterialsLoadedEvent", handler: (event: Internal.MaterialsLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PreLayer", handler: (event: Internal.RenderGameOverlayEvent$PreLayer) => void);
declare function onForgeEvent(name: "org.zeith.hammerlib.event.player.PlayerLoadedInEvent", handler: (event: Internal.PlayerLoadedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardCharTypedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: Internal.PlayerEvent$NameFormat) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FieldOfView", handler: (event: Internal.EntityViewRenderEvent$FieldOfView) => void);
declare function onForgeEvent(name: "shadows.apotheosis.Apotheosis$ApotheosisCommandEvent", handler: (event: Internal.Apotheosis$ApotheosisCommandEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Pre", handler: (event: Internal.ScreenEvent$InitScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Pre", handler: (event: Internal.RenderGameOverlayEvent$Pre) => void);
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaNetworkEvent", handler: (event: Internal.ManaNetworkEvent) => void);
declare function onForgeEvent(name: "shadows.apotheosis.Apotheosis$ApotheosisReloadEvent", handler: (event: Internal.Apotheosis$ApotheosisReloadEvent) => void);
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.heat.HeatRegistrationEvent", handler: (event: Internal.HeatRegistrationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent", handler: (event: Internal.MaxManaCalcEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundEvent", handler: (event: Internal.PlaySoundEvent) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$RawMouseEvent", handler: (event: Internal.InputEvent$RawMouseEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.ItemEntityTickEndEvent", handler: (event: Internal.ItemEntityTickEndEvent) => void);
declare function onForgeEvent(name: "me.ichun.mods.ichunutil.loader.forge.event.client.OverlayChangeEvent", handler: (event: Internal.OverlayChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.VanillaGameEvent", handler: (event: Internal.VanillaGameEvent) => void);
declare function onForgeEvent(name: "net.mrscauthd.beyond_earth.events.forge.RenderViewEvent", handler: (event: Internal.RenderViewEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$BackgroundDrawnEvent", handler: (event: Internal.ScreenEvent$BackgroundDrawnEvent) => void);
declare function onForgeEvent(name: "com.anthonyhilyard.iceberg.events.CriterionEvent", handler: (event: Internal.CriterionEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Post", handler: (event: Internal.RenderLivingEvent$Post<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityTeleportEvent$TeleportCommand", handler: (event: Internal.EntityTeleportEvent$TeleportCommand) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: Internal.EnderManAngerEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Text", handler: (event: Internal.RenderGameOverlayEvent$Text) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AnvilUpdateEvent", handler: (event: Internal.AnvilUpdateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Post) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Fluid", handler: (event: Internal.RandomTickEvent$Fluid) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: Internal.EntityEvent$EnteringSection) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AttachCapabilitiesEvent", handler: (event: Internal.AttachCapabilitiesEvent<any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundSourceEvent", handler: (event: Internal.PlaySoundSourceEvent) => void);
declare function onForgeEvent(name: "org.embeddedt.embeddium.api.ChunkMeshEvent", handler: (event: Internal.ChunkMeshEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Post", handler: (event: Internal.ScreenEvent$InitScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerXpEvent$XpChange", handler: (event: Internal.PlayerXpEvent$XpChange) => void);
declare function onForgeEvent(name: "net.blay09.mods.waystones.api.KnownWaystonesEvent", handler: (event: Internal.KnownWaystonesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingUpdateEvent", handler: (event: Internal.LivingEvent$LivingUpdateEvent) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.ToolEquipmentChangeEvent", handler: (event: Internal.ToolEquipmentChangeEvent) => void);
declare function onEvent(name: "minecraft.sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "minecraft.fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "minecraft.block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "minecraft.item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "minecraft.enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "minecraft.mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "minecraft.entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "minecraft.block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "minecraft.potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "minecraft.particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "minecraft.motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "minecraft.custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "minecraft.point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "minecraft.villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "minecraft.villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
declare function onEvent(name: "villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
declare function onEvent(name: "mekanism.gas.registry", handler: (event: Registry.Gas) => void);
declare function onEvent(name: "mekanism.infuse_type.registry", handler: (event: Registry.InfuseType) => void);
declare function onEvent(name: "mekanism.pigment.registry", handler: (event: Registry.Pigment) => void);
declare function onEvent(name: "mekanism.slurry.registry", handler: (event: Registry.Slurry) => void);
declare function onEvent(name: "botania.brews.registry", handler: (event: Registry.Brews) => void);
