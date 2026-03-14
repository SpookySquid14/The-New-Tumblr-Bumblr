/// <reference path="./globals.d.ts" />
declare namespace Registry {
    class SoundEvent extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.SoundEventBuilder;
        create(id: string): Internal.SoundEventBuilder;
    }
    class Fluid extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.FluidBuilder;
        create(id: string): Internal.FluidBuilder;
    }
    class MobEffect extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicMobEffect$Builder;
        create(id: string): Internal.BasicMobEffect$Builder;
    }
    class Block extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicBlockJS$Builder;
        create(id: string, type: "detector"): Internal.DetectorBlock$Builder;
        create(id: string, type: "slab"): Internal.SlabBlockBuilder;
        create(id: string, type: "stairs"): Internal.StairBlockBuilder;
        create(id: string, type: "fence"): Internal.FenceBlockBuilder;
        create(id: string, type: "wall"): Internal.WallBlockBuilder;
        create(id: string, type: "fence_gate"): Internal.FenceGateBlockBuilder;
        create(id: string, type: "pressure_plate"): Internal.PressurePlateBlockBuilder;
        create(id: string, type: "button"): Internal.ButtonBlockBuilder;
        create(id: string, type: "falling"): Internal.FallingBlockBuilder;
        create(id: string, type: "crop"): Internal.CropBlockBuilder;
        create(id: string, type: "cardinal"): Internal.HorizontalDirectionalBlockBuilder;
        create(id: string, type: "carpet"): Internal.CarpetBlockBuilder;
        create(id: string): Internal.BasicBlockJS$Builder;
    }
    class Enchantment extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.EnchantmentBuilder;
        create(id: string): Internal.EnchantmentBuilder;
    }
    class EntityType extends Internal.RegistryEventJS<any> {
    }
    class Item extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BasicItemJS$Builder;
        create(id: string, type: "sword"): Internal.SwordItemBuilder;
        create(id: string, type: "pickaxe"): Internal.PickaxeItemBuilder;
        create(id: string, type: "axe"): Internal.AxeItemBuilder;
        create(id: string, type: "shovel"): Internal.ShovelItemBuilder;
        create(id: string, type: "shears"): Internal.ShearsItemBuilder;
        create(id: string, type: "hoe"): Internal.HoeItemBuilder;
        create(id: string, type: "helmet"): Internal.ArmorItemBuilder$Helmet;
        create(id: string, type: "chestplate"): Internal.ArmorItemBuilder$Chestplate;
        create(id: string, type: "leggings"): Internal.ArmorItemBuilder$Leggings;
        create(id: string, type: "boots"): Internal.ArmorItemBuilder$Boots;
        create(id: string, type: "music_disc"): Internal.RecordItemJS$Builder;
        create(id: string, type: "smithing_template"): Internal.SmithingTemplateItemBuilder;
        create(id: string, type: "biomancy:basic_serum"): Internal.SerumItemBuilder;
        create(id: string): Internal.BasicItemJS$Builder;
    }
    class Potion extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.PotionBuilder;
        create(id: string): Internal.PotionBuilder;
    }
    class ParticleType extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.ParticleTypeBuilder;
        create(id: string): Internal.ParticleTypeBuilder;
    }
    class BlockEntityType extends Internal.RegistryEventJS<any> {
    }
    class PaintingVariant extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.PaintingVariantBuilder;
        create(id: string): Internal.PaintingVariantBuilder;
    }
    class CustomStat extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.CustomStatBuilder;
        create(id: string): Internal.CustomStatBuilder;
    }
    class ChunkStatus extends Internal.RegistryEventJS<any> {
    }
    class RuleTest extends Internal.RegistryEventJS<any> {
    }
    class PosRuleTest extends Internal.RegistryEventJS<any> {
    }
    class Menu extends Internal.RegistryEventJS<any> {
    }
    class RecipeType extends Internal.RegistryEventJS<any> {
    }
    class RecipeSerializer extends Internal.RegistryEventJS<any> {
    }
    class Attribute extends Internal.RegistryEventJS<any> {
    }
    class GameEvent extends Internal.RegistryEventJS<any> {
    }
    class PositionSourceType extends Internal.RegistryEventJS<any> {
    }
    class StatType extends Internal.RegistryEventJS<any> {
    }
    class VillagerType extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.VillagerTypeBuilder;
        create(id: string): Internal.VillagerTypeBuilder;
    }
    class VillagerProfession extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.VillagerProfessionBuilder;
        create(id: string): Internal.VillagerProfessionBuilder;
    }
    class PointOfInterestType extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.PoiTypeBuilder;
        create(id: string): Internal.PoiTypeBuilder;
    }
    class MemoryModuleType extends Internal.RegistryEventJS<any> {
    }
    class SensorType extends Internal.RegistryEventJS<any> {
    }
    class Schedule extends Internal.RegistryEventJS<any> {
    }
    class Activity extends Internal.RegistryEventJS<any> {
    }
    class LootPoolEntryType extends Internal.RegistryEventJS<any> {
    }
    class LootFunctionType extends Internal.RegistryEventJS<any> {
    }
    class LootConditionType extends Internal.RegistryEventJS<any> {
    }
    class LootNumberProviderType extends Internal.RegistryEventJS<any> {
    }
    class LootNbtProviderType extends Internal.RegistryEventJS<any> {
    }
    class LootScoreProviderType extends Internal.RegistryEventJS<any> {
    }
    class CommandArgumentType extends Internal.RegistryEventJS<any> {
    }
    class DimensionType extends Internal.RegistryEventJS<any> {
    }
    class Dimension extends Internal.RegistryEventJS<any> {
    }
    class FloatProviderType extends Internal.RegistryEventJS<any> {
    }
    class IntProviderType extends Internal.RegistryEventJS<any> {
    }
    class HeightProviderType extends Internal.RegistryEventJS<any> {
    }
    class BlockPredicateType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenNoiseSettings extends Internal.RegistryEventJS<any> {
    }
    class WorldgenConfiguredCarver extends Internal.RegistryEventJS<any> {
    }
    class WorldgenConfiguredFeature extends Internal.RegistryEventJS<any> {
    }
    class WorldgenPlacedFeature extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructure extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructureSet extends Internal.RegistryEventJS<any> {
    }
    class WorldgenProcessorList extends Internal.RegistryEventJS<any> {
    }
    class WorldgenTemplatePool extends Internal.RegistryEventJS<any> {
    }
    class WorldgenBiome extends Internal.RegistryEventJS<any> {
    }
    class WorldgenNoise extends Internal.RegistryEventJS<any> {
    }
    class WorldgenDensityFunction extends Internal.RegistryEventJS<any> {
    }
    class WorldgenWorldPreset extends Internal.RegistryEventJS<any> {
    }
    class WorldgenFlatLevelGeneratorPreset extends Internal.RegistryEventJS<any> {
    }
    class WorldgenCarver extends Internal.RegistryEventJS<any> {
    }
    class WorldgenFeature extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructurePlacement extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructurePiece extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructureType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenPlacementModifierType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenBlockStateProviderType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenFoliagePlacerType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenTrunkPlacerType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenTreeDecoratorType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenRootPlacerType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenFeatureSizeType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenBiomeSource extends Internal.RegistryEventJS<any> {
    }
    class WorldgenChunkGenerator extends Internal.RegistryEventJS<any> {
    }
    class WorldgenMaterialCondition extends Internal.RegistryEventJS<any> {
    }
    class WorldgenMaterialRule extends Internal.RegistryEventJS<any> {
    }
    class WorldgenDensityFunctionType extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructureProcessor extends Internal.RegistryEventJS<any> {
    }
    class WorldgenStructurePoolElement extends Internal.RegistryEventJS<any> {
    }
    class ChatType extends Internal.RegistryEventJS<any> {
    }
    class CatVariant extends Internal.RegistryEventJS<any> {
    }
    class FrogVariant extends Internal.RegistryEventJS<any> {
    }
    class BannerPattern extends Internal.RegistryEventJS<any> {
    }
    class Instrument extends Internal.RegistryEventJS<any> {
    }
    class TrimMaterial extends Internal.RegistryEventJS<any> {
    }
    class TrimPattern extends Internal.RegistryEventJS<any> {
    }
    class CreativeModeTab extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.CreativeTabBuilder;
        create(id: string): Internal.CreativeTabBuilder;
    }
    class DamageType extends Internal.RegistryEventJS<any> {
    }
    class RuleBlockEntityModifier extends Internal.RegistryEventJS<any> {
    }
    class DecoratedPotPatterns extends Internal.RegistryEventJS<any> {
    }
    class WorldgenMultiNoiseBiomeSourceParameterList extends Internal.RegistryEventJS<any> {
    }
    class Serum extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.SerumBuilder;
        create(id: string): Internal.SerumBuilder;
    }
    class BioForgeTab extends Internal.RegistryEventJS<any> {
        create(id: string, type: "basic"): Internal.BioForgeTabBuilder;
        create(id: string): Internal.BioForgeTabBuilder;
    }
    class BlendingFunction extends Internal.RegistryEventJS<any> {
    }
    class CatVariant extends Internal.RegistryEventJS<any> {
    }
    class VillagerTradesItemListing extends Internal.RegistryEventJS<any> {
    }
    class ChickenVariant extends Internal.RegistryEventJS<any> {
    }
    class WolfSoundVariant extends Internal.RegistryEventJS<any> {
    }
    class PigVariant extends Internal.RegistryEventJS<any> {
    }
    class FrogVariant extends Internal.RegistryEventJS<any> {
    }
    class SpawnConditionType extends Internal.RegistryEventJS<any> {
    }
    class Condition extends Internal.RegistryEventJS<any> {
    }
    class WolfVariant extends Internal.RegistryEventJS<any> {
    }
    class CowVariant extends Internal.RegistryEventJS<any> {
    }
    class Keytypes extends Internal.RegistryEventJS<any> {
    }
    class TagModifier extends Internal.RegistryEventJS<any> {
    }
    class Brews extends Internal.RegistryEventJS<any> {
    }
    class BeeEffect extends Internal.RegistryEventJS<any> {
    }
    class Gene extends Internal.RegistryEventJS<any> {
    }
    class MutationCondition extends Internal.RegistryEventJS<any> {
    }
    class EntityTicker extends Internal.RegistryEventJS<any> {
    }
    class ConnectionType extends Internal.RegistryEventJS<any> {
    }
    class StringType extends Internal.RegistryEventJS<any> {
    }
    class BedrockAnimations extends Internal.RegistryEventJS<any> {
    }
    class BedrockModels extends Internal.RegistryEventJS<any> {
    }
    class BossBars extends Internal.RegistryEventJS<any> {
    }
    class Configs extends Internal.RegistryEventJS<any> {
    }
    class ModelAttachmentType extends Internal.RegistryEventJS<any> {
    }
    class RenderType extends Internal.RegistryEventJS<any> {
    }
    class ScreenEffect extends Internal.RegistryEventJS<any> {
    }
    class BiomeModifierSerializers extends Internal.RegistryEventJS<any> {
    }
    class DisplayContexts extends Internal.RegistryEventJS<any> {
    }
    class EntityDataSerializers extends Internal.RegistryEventJS<any> {
    }
    class FluidType extends Internal.RegistryEventJS<any> {
    }
    class GlobalLootModifierSerializers extends Internal.RegistryEventJS<any> {
    }
    class HolderSetType extends Internal.RegistryEventJS<any> {
    }
    class StructureModifierSerializers extends Internal.RegistryEventJS<any> {
    }
    class RitualFactory extends Internal.RegistryEventJS<any> {
    }
    class TimeEffect extends Internal.RegistryEventJS<any> {
    }
    class Schools extends Internal.RegistryEventJS<any> {
    }
    class Spells extends Internal.RegistryEventJS<any> {
    }
    class Gas extends Internal.RegistryEventJS<any> {
    }
    class InfuseType extends Internal.RegistryEventJS<any> {
    }
    class Module extends Internal.RegistryEventJS<any> {
    }
    class Pigment extends Internal.RegistryEventJS<any> {
    }
    class RobitSkinSerializer extends Internal.RegistryEventJS<any> {
    }
    class Slurry extends Internal.RegistryEventJS<any> {
    }
    class Buildingextensions extends Internal.RegistryEventJS<any> {
    }
    class Buildings extends Internal.RegistryEventJS<any> {
    }
    class Colonyeventdesctypes extends Internal.RegistryEventJS<any> {
    }
    class Colonyeventtypes extends Internal.RegistryEventJS<any> {
    }
    class Craftingtypes extends Internal.RegistryEventJS<any> {
    }
    class Equipmenttypes extends Internal.RegistryEventJS<any> {
    }
    class Guardtypes extends Internal.RegistryEventJS<any> {
    }
    class Happinessfactortypes extends Internal.RegistryEventJS<any> {
    }
    class Happinessfunction extends Internal.RegistryEventJS<any> {
    }
    class Interactionresponsehandlers extends Internal.RegistryEventJS<any> {
    }
    class Jobs extends Internal.RegistryEventJS<any> {
    }
    class Questanswerresults extends Internal.RegistryEventJS<any> {
    }
    class Questobjectives extends Internal.RegistryEventJS<any> {
    }
    class Questrewards extends Internal.RegistryEventJS<any> {
    }
    class Questtriggers extends Internal.RegistryEventJS<any> {
    }
    class Recipetypeentries extends Internal.RegistryEventJS<any> {
    }
    class Researchcosttypes extends Internal.RegistryEventJS<any> {
    }
    class Researcheffecttypes extends Internal.RegistryEventJS<any> {
    }
    class Researchrequirementtypes extends Internal.RegistryEventJS<any> {
    }
    class RitualFactory extends Internal.RegistryEventJS<any> {
    }
    class SpiritJobFactory extends Internal.RegistryEventJS<any> {
    }
    class Perks extends Internal.RegistryEventJS<any> {
    }
    class Actions extends Internal.RegistryEventJS<any> {
    }
    class ConvertingHandler extends Internal.RegistryEventJS<any> {
    }
    class Entityactions extends Internal.RegistryEventJS<any> {
    }
    class Miniontasks extends Internal.RegistryEventJS<any> {
    }
    class Oil extends Internal.RegistryEventJS<any> {
    }
    class Refinement extends Internal.RegistryEventJS<any> {
    }
    class RefinementSet extends Internal.RegistryEventJS<any> {
    }
    class Skills extends Internal.RegistryEventJS<any> {
    }
    class TaskRequirement extends Internal.RegistryEventJS<any> {
    }
    class TaskReward extends Internal.RegistryEventJS<any> {
    }
    class TaskRewardInstance extends Internal.RegistryEventJS<any> {
    }
    class TaskUnlocker extends Internal.RegistryEventJS<any> {
    }
    class ModdedBiomeSlices extends Internal.RegistryEventJS<any> {
    }
    class RobitSkin extends Internal.RegistryEventJS<any> {
    }
    class Flower extends Internal.RegistryEventJS<any> {
    }
    class BlockPropertiesTransformer extends Internal.RegistryEventJS<any> {
    }
    class ModdedBiomeSlices extends Internal.RegistryEventJS<any> {
    }
    class BiomeReplacer extends Internal.RegistryEventJS<any> {
    }
    class ColorPalette extends Internal.RegistryEventJS<any> {
    }
    class LunarEvent extends Internal.RegistryEventJS<any> {
    }
    class Comb extends Internal.RegistryEventJS<any> {
    }
    class Filter extends Internal.RegistryEventJS<any> {
    }
    class FurnaceFuels extends Internal.RegistryEventJS<any> {
    }
    class LunarDimensionSettings extends Internal.RegistryEventJS<any> {
    }
    class StructureModifier extends Internal.RegistryEventJS<any> {
    }
    class Tasks extends Internal.RegistryEventJS<any> {
    }
    class StructureRepaletters extends Internal.RegistryEventJS<any> {
    }
    class Noise extends Internal.RegistryEventJS<any> {
    }
    class Mutation extends Internal.RegistryEventJS<any> {
    }
    class MapMarkers extends Internal.RegistryEventJS<any> {
    }
    class BiomeModifier extends Internal.RegistryEventJS<any> {
    }
    class Compostables extends Internal.RegistryEventJS<any> {
    }
    class BlockUseBehaviors extends Internal.RegistryEventJS<any> {
    }
    class BlockSoundTransformers extends Internal.RegistryEventJS<any> {
    }
    class LunarEventDimensionChance extends Internal.RegistryEventJS<any> {
    }
    class WispArcheology extends Internal.RegistryEventJS<any> {
    }
    class Lens extends Internal.RegistryEventJS<any> {
    }
    class Species extends Internal.RegistryEventJS<any> {
    }
    class CassetteTape extends Internal.RegistryEventJS<any> {
    }
    class SoftFluids extends Internal.RegistryEventJS<any> {
    }
    class UpgradeOrbType extends Internal.RegistryEventJS<any> {
    }
}