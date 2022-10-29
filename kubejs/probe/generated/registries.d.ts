/// <reference path="./globals.d.ts" />
declare namespace Registry {
    class SoundEvent extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Fluid extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Block extends any {
        create(id: string, type: "basic"): any;
        create(id: string, type: "detector"): any;
        create(id: string, type: "slab"): any;
        create(id: string, type: "stairs"): any;
        create(id: string, type: "fence"): any;
        create(id: string, type: "fence_gate"): any;
        create(id: string, type: "wall"): any;
        create(id: string, type: "wooden_pressure_plate"): any;
        create(id: string, type: "stone_pressure_plate"): any;
        create(id: string, type: "wooden_button"): any;
        create(id: string, type: "stone_button"): any;
        create(id: string, type: "falling"): any;
        create(id: string, type: "crop"): any;
        create(id: string): any;
    }
    class Item extends any {
        create(id: string, type: "basic"): any;
        create(id: string, type: "sword"): any;
        create(id: string, type: "pickaxe"): any;
        create(id: string, type: "axe"): any;
        create(id: string, type: "shovel"): any;
        create(id: string, type: "hoe"): any;
        create(id: string, type: "helmet"): any;
        create(id: string, type: "chestplate"): any;
        create(id: string, type: "leggings"): any;
        create(id: string, type: "boots"): any;
        create(id: string, type: "music_disc"): Internal.RecordItemJS$Builder;
        create(id: string, type: "create:sequenced_assembly"): any;
        create(id: string): any;
    }
    class Enchantment extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class MobEffect extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class EntityType extends any {
    }
    class BlockEntityType extends any {
    }
    class Potion extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class ParticleType extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Motive extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class CustomStat extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class PointOfInterestType extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class VillagerType extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class VillagerProfession extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Gas extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class InfuseType extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Pigment extends any {
        create(id: string, type: "basic"): any;
        create(id: string): any;
    }
    class Slurry extends any {
        create(id: string, type: "basic"): any;
        create(id: string, type: "dirty"): any;
        create(id: string, type: "clean"): any;
        create(id: string): any;
    }
}