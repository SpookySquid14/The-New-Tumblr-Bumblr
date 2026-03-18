/// <reference path="./internal_*.d.ts" />
declare namespace slimeknights.tconstruct.library.tools.part {
    class MaterialItem extends Internal.Item implements Internal.IMaterialItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        withMaterial(arg0: Internal.MaterialVariantId_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        static getName(arg0: Internal.IMaterialItem_, arg1: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        addVariants(arg0: Internal.Consumer_<Internal.ItemStack>, arg1: string): void;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        "canUseMaterial(slimeknights.tconstruct.library.materials.definition.MaterialId)"(arg0: Internal.MaterialId_): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static appendHoverText(arg0: Internal.IMaterialItem_, arg1: Internal.ItemStack_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getMaterial(arg0: Internal.ItemStack_): Internal.MaterialVariantId;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        withMaterialForDisplay(arg0: Internal.MaterialVariantId_): Internal.ItemStack;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        setMaterial(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        static getMaterialId(arg0: Internal.CompoundTag_): Internal.MaterialVariantId;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        canUseMaterial(arg0: Internal.MaterialId_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        static withMaterial(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "appendHoverText(slimeknights.tconstruct.library.tools.part.IMaterialItem,net.minecraft.world.item.ItemStack,java.util.List,net.minecraft.world.item.TooltipFlag)"(arg0: Internal.IMaterialItem_, arg1: Internal.ItemStack_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        setMaterialForced(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        static getMaterialFromStack(arg0: Internal.ItemStack_): Internal.MaterialVariantId;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canUseMaterial(arg0: Internal.IMaterial_): boolean;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        static getCreatorModId(arg0: Internal.IMaterialItem_, arg1: Internal.ItemStack_): string;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        "canUseMaterial(slimeknights.tconstruct.library.materials.definition.IMaterial)"(arg0: Internal.IMaterial_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static verifyTag(arg0: Internal.CompoundTag_): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        "appendHoverText(net.minecraft.world.item.ItemStack,net.minecraft.world.level.Level,java.util.List,net.minecraft.world.item.TooltipFlag)"(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type MaterialItem_ = MaterialItem;
}
declare namespace software.bernie.geckolib.core.keyframe.event.data {
    class ParticleKeyframeData extends Internal.KeyFrameData {
        constructor(arg0: number, arg1: string, arg2: string, arg3: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLocator(): string;
        hashCode(): number;
        getStartTick(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getEffect(): string;
        script(): string;
        get class(): typeof any
        get locator(): string
        get startTick(): number
        get effect(): string
    }
    type ParticleKeyframeData_ = ParticleKeyframeData;
}
declare namespace Internal {
    interface FurnaceTEAccess {
        abstract getQuickCheck(): Internal.RecipeManager$CachedCheck<net.minecraft.world.Container, Internal.AbstractCookingRecipe>;
        abstract getDataAccess(): Internal.ContainerData;
        get quickCheck(): Internal.RecipeManager$CachedCheck<net.minecraft.world.Container, Internal.AbstractCookingRecipe>
        get dataAccess(): Internal.ContainerData
    }
    type FurnaceTEAccess_ = FurnaceTEAccess;
    class EntityEvent$EnteringSection extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Entity_, arg1: number, arg2: number)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        getPackedOldPos(): number;
        getOldPos(): Internal.SectionPos;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPackedNewPos(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        didChunkChange(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getNewPos(): Internal.SectionPos;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        get packedOldPos(): number
        get oldPos(): Internal.SectionPos
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get packedNewPos(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get newPos(): Internal.SectionPos
    }
    type EntityEvent$EnteringSection_ = EntityEvent$EnteringSection;
    abstract class AbstractNecromancer extends Internal.AbstractSkeletonServant implements Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.AbstractSkeletonServant>, arg1: Internal.Level_)
        soulJar(): void;
        rarcompat$travel(arg0: Vec3d_, arg1: Internal.Mob_): void;
        isFollowing(): boolean;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        "copyTrueOwner(com.Polarice3.Goety.api.blocks.entities.IOwnedBlock)"(arg0: Internal.IOwnedBlock_): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        etf$getOptifineVehicleId(): number;
        getDeathSound(): Internal.SoundEvent;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isShaking(): boolean;
        getFallFlyingTicks(): number;
        chunkPosition(): Internal.ChunkPos;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        setUUID(arg0: Internal.UUID_): void;
        handler$icl000$domesticationinnovation$di_rideableInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        static getGhostArrow(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number): Internal.AbstractArrow;
        handler$kae000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$iep001$relics$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getServantAttack(): DamageSource;
        isSpectator(): boolean;
        isFreezingFromFrostmint(): boolean;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        handler$fko000$goety$push(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        servantSunBurn(): boolean;
        getRandomZ(arg0: number): number;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        static vb$leashableInArea(level: Internal.Level_, pos: Vec3d_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        handler$gef000$etstlib$cancelHurt(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        onFlap(): void;
        ownedTeleport(arg0: number, arg1: number, arg2: number): boolean;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isAmbientCreature(): boolean;
        rarcompat$tickRidden(arg0: Internal.Mob_, arg1: Internal.Player_): void;
        burnSunTick(): boolean;
        handler$elb000$combatnouveau$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$jol000$libertyvillagers$replaceAttributeValueForVillagersAndGolems(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        handler$cel000$attributeslib$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
        static vb$getKnownMovement(entity: Internal.Entity_): Vec3d;
        onGround(): boolean;
        handler$kal000$alexscaves$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        getSwipeDelay(): number;
        onCeaseFire(arg0: Internal.ServerPlayer_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        handler$flc000$goety$isSensitiveToWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        botania_getAmbientSound(): Internal.SoundEvent;
        getZ(arg0: number): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        abstract setNoHoney(arg0: number): void;
        setStaying(): void;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        vec3RevivePos(): Vec3d;
        getDynamicLightZ(): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        bettermobcombat$getAttackCooldown(): number;
        getVoicePitch(): number;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        setGuarding(): void;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getLastHurtByPlayer(): Internal.Player;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        populateDefaultWeapons(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        canStay(): boolean;
        saveOwnedData(arg0: Internal.CompoundTag_): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        handler$hnf000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        handler$geh000$etstlib$percentageBypass(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        die(arg0: DamageSource_): void;
        handler$gef000$etstlib$addVibrationListener(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.CallbackInfo_): void;
        getLeashOffset(): Vec3d;
        onClimbable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        static vb$computeElasticInteraction<E extends Internal.Entity & Internal.Leashable>(entity: E, holder: Internal.Entity_, attachmentPoints: Internal.List_<Vec3d>, holderAttachmentPoints: Internal.List_<Vec3d>): Internal.List<Internal.Leashable$Wrench>;
        stopRiding(): void;
        irons_spellbooks$getMagicData(): Internal.MagicData;
        detectEquipmentUpdates(): void;
        getSelfAndPassengers(): Internal.Stream<any>;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getDeltaMovement(): Vec3d;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        callReapplyPosition(): void;
        spawnUndeadIdle(): boolean;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        isGrudgedTowardsType(arg0: Internal.EntityType_<any>): boolean;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        ate(): void;
        notify(): void;
        getFirstTick(): boolean;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        canBeRidden(arg0: Internal.LivingEntity_): boolean;
        checkHostility(): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        etf$getBlockY(): number;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        vb$angularMomentum(): number;
        getOffhandItem(): Internal.ItemStack;
        getDimensions(): Internal.EntityDimensions;
        handler$fim000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        handler$flc000$goety$jumpFromGround(arg0: Internal.CallbackInfo_): void;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        setLootTable(arg0: ResourceLocation_): void;
        setWebbed(arg0: boolean): void;
        isAbleToRide(arg0: Internal.LivingEntity_): boolean;
        vb$leashElasticDistance(): number;
        ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        "setReviveDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): void;
        getOnPos(arg0: number): BlockPos;
        spellCastParticles(): void;
        localvar$hgp000$vampirism$vampireSlayerEnchantment(arg0: number, arg1: Internal.Entity_): number;
        vb$onElasticLeashPull(entity: Internal.Entity_): void;
        setOwnerClientId(arg0: number): void;
        vb$getQuadLeashOffsets(): Vec3d[];
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        setNoActionTime(arg0: number): void;
        isJumping(): boolean;
        getPose(): Internal.Pose;
        decreaseTicketTime(): number;
        setLastAttackedTicks(arg0: number): void;
        getSharedFlag(arg0: number): boolean;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        etf$getUuid(): Internal.UUID;
        removeVehicle(): void;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        checkInsideBlocks(): void;
        updateFluidOnEyes(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        handler$eaf000$cataclysm$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        createHoverEvent(): Internal.HoverEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        showVehicleHealth(): boolean;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        handler$kae000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        etf$isBlockEntity(): boolean;
        canChangeDirection(): boolean;
        shouldUpdateDynamicLight(): boolean;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        "copyTrueOwner(com.Polarice3.Goety.api.entities.IOwned)"(arg0: Internal.IOwned_): void;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        quark$lastHurtByPlayerTime(): number;
        getTotalMovementSpeed(): number;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        updatingUsingItem(): void;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        attack(hp: number): void;
        chunkLoadTarget(arg0: BlockPos_): void;
        getFireImmuneTicks(): number;
        bettercombat$resetAttackStrengthTicker(): void;
        handler$chd000$illageandspillage$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAttributes(): Internal.AttributeMap;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        handler$hji000$treechop$injectDataLoading(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        setX(x: number): void;
        reviveOwned(): void;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getOwnerClientId(): number;
        getFluidJumpThreshold(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        getOnPos(): BlockPos;
        vb$setBoatDelayedLeashHolderId(leashHolderId: number): void;
        etf$getWorld(): Internal.Level;
        repositionEntityAfterLoad(): boolean;
        setUseItemRemaining(arg0: number): void;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        getTargetSelector(): Internal.GoalSelector;
        setRegisteredToWorld(arg0: Internal.PathNavigation_): void;
        stopUsingItem(): void;
        localvar$eac000$fluidCollision(arg0: Vec3d_): Vec3d;
        vb$leashSnapDistance(): number;
        etf$getBlockPos(): BlockPos;
        handler$gmb000$bettercombat$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        updateAnimationsOnTick(): void;
        setOldPosAndRot(): void;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        setSwipeDelay(arg0: number): void;
        setCanPickUpLoot(arg0: boolean): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        /**
         * @deprecated
        */
        canRide(arg0: Internal.LivingEntity_): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getReviveDim(): string;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setUndeadIdle(arg0: boolean): void;
        saveServantData(arg0: Internal.CompoundTag_): void;
        isHostile(): boolean;
        bettermobcombat$getAlternateMainhandItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        setPitch(arg0: number): void;
        canBeCommanded(): boolean;
        isMultipartEntity(): boolean;
        setAnimationState(arg0: number): void;
        handleEntityEvent(arg0: number): void;
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        xpReward(): number;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        setFollowing(): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        handler$fph000$vanillabackport$vb$addAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        biomancy$getData(): Internal.LivingEntityData$TransientDataProvider$DataHolder;
        callSetWebbed(arg0: boolean): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        handler$kae001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        redirect$cel000$attributeslib$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        endimateTick(): void;
        ac_dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        callIsWebbed(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        handler$hkk000$ntgl$getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        vb$setLeashedTo(entity: Internal.Entity_, sendAttachPacket: boolean): void;
        setGlowing(arg0: boolean): void;
        getYRot(): number;
        load(arg0: Internal.CompoundTag_): void;
        stopAllAnimations(): void;
        onChangedBlock(arg0: BlockPos_): void;
        biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        addSummon(arg0: Internal.EntityType_<any>): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        bettermobcombat$getHandItems(): Internal.NonNullList<any>;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        getDataMap(): Internal.Map<any, any>;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        isLeashed(): boolean;
        bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
        isSpellCasting(): boolean;
        toString(): string;
        etf$getScoreboardTeam(): Internal.Team;
        canSpawnArmor(): boolean;
        "getServer()"(): Internal.MinecraftServer;
        handler$hce000$canary$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        onClientRemoval(): void;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        tryKill(arg0: Internal.Player_): void;
        vec3BoundPos(): Vec3d;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        handler$gef000$etstlib$removeFromTickerMap(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        getBoundLevel(): Internal.ResourceKey<Internal.Level>;
        handler$iep000$relics$onAiStep(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isIdleOrNoAnimation(): boolean;
        wrapOperation$ekp000$artifacts$travel(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_, original: Internal.Operation_<any>): number;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        isFlapping(): boolean;
        handler$kae000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$jol000$libertyvillagers$replaceIsClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        summonSpells(arg0: number): void;
        static getViewScale(): number;
        copyStance(arg0: Internal.IServant_): void;
        updateFallFlying(): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        setOwnerId(arg0: Internal.UUID_): void;
        getCombatTracker(): Internal.CombatTracker;
        setAnimationTick(arg0: number): void;
        getShootSound(): Internal.SoundEvent;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        convertNewEquipment(arg0: Internal.Entity_): void;
        handler$geh000$etstlib$getDamage(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        handler$hnf000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        callOnLeashDistance(arg0: number): void;
        setFrostmintFreezing(arg0: boolean): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        handler$icl000$domesticationinnovation$di_isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        vb$getLeashHolder(): Internal.Entity;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        handler$fog000$alekiships$injectOnClimbableWhileClimbingMasts(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getBlockZ(): number;
        handler$flc000$goety$getMobType(arg0: Internal.CallbackInfoReturnable_<any>): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        getPitch(): number;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        handler$dgm000$ad_astra$adastra$checkSpawnObstruction(levelReader: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$kae000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        summonPredicate(): Internal.Predicate<Internal.Entity>;
        setMagnetHeadRotation(): void;
        spawnUpgraded(): void;
        clearRestriction(): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        handler$fim000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        getNoActionTime(): number;
        avoidGoal(arg0: number): void;
        setComboCount(arg0: number): void;
        spawnArmor(arg0: Internal.RandomSource_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        /**
         * @deprecated
        */
        normalSetTarget(arg0: Internal.LivingEntity_): void;
        vb$whenLeashedTo(entity: Internal.Entity_): void;
        getArrowPower(): number;
        "setAnimationState(int)"(arg0: number): void;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        handler$fig000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        setCommandTick(arg0: number): void;
        releaseUsingItem(): void;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        isInRain(): boolean;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getCommandPos(): BlockPos;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        elytratrims$isGui(): boolean;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        handler$gdj000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        canaryOnBlockCacheDeleted(): void;
        bettermobcombat$cancelWeaponSwing(): void;
        getNbt(): Internal.CompoundTag;
        bettermobcombat$cancelUpswing(): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        getEyePosition(): Vec3d;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        getYaw(): number;
        getUsedItemHand(): Internal.InteractionHand;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        handler$dgl000$ad_astra$adastra$tick(ci: Internal.CallbackInfo_): void;
        getBrain(): Internal.Brain<any>;
        handler$elh000$combatnouveau$getAttackAnim(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getCurrentAnimation(): number;
        uncreditedKill(arg0: Internal.LivingEntity_): void;
        shouldDiscardFriction(): boolean;
        setChopData(arg0: Internal.SyncedChopData_): Internal.SyncedChopData;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        setTrueOwner(arg0: Internal.LivingEntity_): void;
        getComboCount(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        postMagnetJump(): void;
        getEyeY(): number;
        setLifespan(arg0: number): void;
        redirect$gdd000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        skipDropExperience(): void;
        redirect$cel000$attributeslib$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        isInWaterOrRain(): boolean;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getSwimSound(): Internal.SoundEvent;
        setAttackSpeed(arg0: number): void;
        isGuardingArea(): boolean;
        doHurtTarget(arg0: number, arg1: Internal.Entity_): boolean;
        getCitadelEntityData(): Internal.CompoundTag;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        isWithinRestriction(arg0: BlockPos_): boolean;
        invokeGetExperiencePoints_vampirism(): number;
        vb$resetAngularMomentum(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        callSetPreserved(arg0: boolean): void;
        updateMoveMode(arg0: Internal.Player_): void;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        stopAttackAnimation(arg0: number): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        resetDynamicLight(): void;
        getBaseRangeDamage(): number;
        copyTrueOwner(arg0: Internal.IOwnedBlock_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        "setAnimationState(java.lang.String)"(arg0: string): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handleNetherPortal(): void;
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        static vb$angularFriction<E extends Internal.Entity & Internal.Leashable>(entity: E): number;
        isCustomNameVisible(): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getMotionX(): number;
        projectileGoal(arg0: number): void;
        healServant(): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        isReviving(): boolean;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        pacifySurroundingMobs(arg0: number): void;
        bettermobcombat$hasActiveMainHandBodyPose(): boolean;
        biomancy$getVoicePitch(): number;
        areOwnedByEachOther(arg0: Internal.LivingEntity_): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        markFusionRecomputeModels(): void;
        reapplyPosition(): void;
        getAttackSpeed(): number;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        handler$dgl000$ad_astra$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        getWaterSlowDown(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        bettermobcombat$hasDelayedUpswing(): boolean;
        isWeaponSwingInProgress(): boolean;
        isRemoved(): boolean;
        setReviveDim(arg0: Internal.ResourceKey_<Internal.Level>): void;
        static vb$createQuadLeashOffsets(entity: Internal.Entity_, frontOffset: number, frontBack: number, leftRight: number, height: number): Vec3d[];
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        resetMagnetHeadRotation(): void;
        refreshDimensions(): void;
        isRewinding(): boolean;
        bookshelf$getAmbientSound(): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getPassengers(): Internal.EntityArrayList;
        setSwipes(arg0: number): void;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        vb$leashDistanceTo(entity: Internal.Entity_): number;
        shouldChunkLoad(): boolean;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtMob(arg0: Internal.Entity_): void;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        setXRot(arg0: number): void;
        bettermobcombat$hasActiveOffHandBodyPose(): boolean;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        static vb$onTickLeash<E extends Internal.Entity & Internal.Leashable>(entity: E): void;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        commandMode(): void;
        playAttackAnimation(arg0: string, arg1: Internal.AnimatedHand_, arg2: number, arg3: number): void;
        getPermissionLevel(): number;
        setCommandPos(arg0: BlockPos_, arg1: boolean): void;
        nextStep(): number;
        is(arg0: Internal.Entity_): boolean;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        handler$hnf00d$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        isStaying(): boolean;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getCommandSpeed(): number;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        targetRetaliateGoal(): void;
        getLookControl(): Internal.LookControl;
        setSpellCasting(arg0: boolean): void;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        burnServant(arg0: Internal.LivingEntity_): void;
        preventsSleep(arg0: Internal.Player_): boolean;
        getOffHandItem(): Internal.ItemStack;
        getNecroLevel(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        copyPosition(arg0: Internal.Entity_): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        etf$canBeBright(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        handler$flc001$goety$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        isWithinRestriction(): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getAnimations(): Internal.List<Internal.AnimationState>;
        canBeFamiliar(): boolean;
        handler$jig001$createbigcannons$turn(yaw: number, pitch: number, ci: Internal.CallbackInfo_): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        isVisuallySwimming(): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        handler$jgj000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        getFacing(): Internal.Direction;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setNatural(arg0: boolean): void;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_, arg1: Internal.BiConsumer_<any, any>): void;
        isInvulnerable(): boolean;
        isInWater(): boolean;
        handler$hml000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        getOwnerUUID(): Internal.UUID;
        save(arg0: Internal.CompoundTag_): boolean;
        followGoal(): void;
        populateDefaultArmor(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        getTicketTime(): number;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        getSpeed(): number;
        vb$canBeLeashed(entity: Internal.Entity_): boolean;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        abstract getNoHoney(): number;
        bettercombat$getAttackStrengthScale(arg0: number): number;
        setOffHandItem(item: Internal.ItemStack_): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$fje000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        biomancy$setDimensions(arg0: Internal.EntityDimensions_): void;
        isFamiliar(): boolean;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        registerGoals(): void;
        hasRestriction(): boolean;
        handler$fko000$goety$fireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isNatural(): boolean;
        handler$hml00c$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        "setBoundDim(java.lang.String)"(arg0: string): void;
        getCommandTick(): number;
        setRevivingTime(arg0: number): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        mirror(arg0: Internal.Mirror_): number;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): net.minecraft.network.chat.Component;
        startRevival(): void;
        elytratrims$markGui(): void;
        getTicksRequiredToFreeze(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        artifacts$getPocketPistonLength(): number;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getLaughSound(): Internal.SoundEvent;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getAbsorptionAmount(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        maxhealthfix$setRestorePoint(arg0: number): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        abstract isUrsa(): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        isCommanded(): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        handler$iem000$relics$getBlockSpeedFactor(arg0: Internal.CallbackInfoReturnable_<any>): void;
        warnKill(arg0: Internal.Player_): void;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        redirect$cel000$attributeslib$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        redirect$cel000$attributeslib$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isMonster(): boolean;
        ownedTeleport(arg0: Vec3d_): boolean;
        getHorizontalFacing(): Internal.Direction;
        ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        onStopAttack(): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        getMagneticAttachmentFace(): Internal.Direction;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        localvar$iem001$relics$fluidCollision(arg0: Vec3d_): Vec3d;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Owned>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        handler$hmj000$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        handler$flc001$goety$travelRidden(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        handler$kae000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        etf$getType(): Internal.EntityType<any>;
        modifyExpressionValue$hmh000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        getUpVector(arg0: number): Vec3d;
        getXRot(): number;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        handler$iep001$relics$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        isOnFire(): boolean;
        getOwner(): Internal.LivingEntity;
        setPriorityTarget(arg0: Internal.LivingEntity_): void;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        callFollowLeashSpeed(): number;
        redirect$keh000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        isChargingCrossbow(): boolean;
        isSoulSpeedBlock(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        canGuardArea(): boolean;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        vb$checkElasticInteractions(entity: Internal.Entity_): boolean;
        setMotionZ(z: number): void;
        isShooting(): boolean;
        getAttachmentProgress(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        getBlockY(): number;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        getMaxHealth(): number;
        callIsPreserved(): boolean;
        isRegisteredToWorld(): boolean;
        updateSwimAmount(): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        getRemovalReason(): Internal.Entity$RemovalReason;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        localvar$cei000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        resetFallDistance(): void;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        handler$kal000$alexscaves$ac_increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        modifyReturnValue$ljh000$create$onFireImmune(arg0: boolean): boolean;
        isWebbed(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        etf$getHandItems(): Internal.Iterable<any>;
        playAmbientSound(): void;
        teleportHits(): void;
        getControlledVehicle(): Internal.Entity;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        copyTrueOwner(arg0: Internal.IOwned_): void;
        getKillCredit(): Internal.LivingEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        handler$cel000$attributeslib$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        getDefaultLootTable(): ResourceLocation;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        handler$jke002$blueprint$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        setCommandPosEntity(arg0: Internal.LivingEntity_): void;
        onlyOpCanSetNbt(): boolean;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getAnimationState(arg0: string): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        handler$fph000$vanillabackport$vb$defineSynchedData(ci: Internal.CallbackInfo_): void;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        isCurrentAnimation(arg0: string): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        wrapOperation$lci000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        static checkHostileSpawnRules(arg0: Internal.EntityType_<Internal.Owned>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        teleportTowards(arg0: Internal.Entity_): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        handler$gfe000$bettermobcombat$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$fph000$vanillabackport$vb$readAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        getSummonLimit(arg0: Internal.LivingEntity_): number;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        canStartSwimming(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setFireType(arg0: ResourceLocation_): void;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        etf$getOptifineId(): number;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        getLifespan(): number;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        isAttackable(): boolean;
        handler$flc000$goety$dropExperience(arg0: Internal.CallbackInfo_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        vb$getQuadLeashHolderOffsets(): Vec3d[];
        setHasSummonCheck(arg0: number): void;
        callMobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getVariant(arg0: Internal.Level_, arg1: BlockPos_): Internal.EntityType<any>;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        vb$dropLeash(): void;
        makeBoundingBox(): Internal.AABB;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        handler$fne000$lavafishing$travel(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        setPos(arg0: number, arg1: number, arg2: number): void;
        "setBoundDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): void;
        setPersistenceRequired(): void;
        handler$gci000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        getMainArm(): Internal.HumanoidArm;
        getPriorityPos(): BlockPos;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        isSprinting(): boolean;
        getKillChance(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$fig000$irons_spellbooks$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        setKillChance(arg0: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        ownedByServantTick(): void;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        downgrade(): void;
        isAddedToWorld(): boolean;
        summonParticles(arg0: Internal.ServerLevel_, arg1: Internal.MobSpawnType_): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        isAllyWith(arg0: Internal.LivingEntity_): boolean;
        tryAddFrost(): void;
        readOwnedData(arg0: Internal.CompoundTag_): void;
        quark$lastHurtByPlayer(): Internal.Player;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        defineSynchedData(): void;
        setZ(z: number): void;
        bookshelf$makePoofParticles(): void;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        getDistance(pos: BlockPos_): number;
        setWandering(): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        vb$setAngularMomentum(angularMomentum: number): void;
        isPrioritizing(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        getPriorityTime(): number;
        setFamiliar(): void;
        isPlayer(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        handler$cel000$attributeslib$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        static setCustomAttributes(): Internal.AttributeSupplier$Builder;
        invokeGetJumpPower_werewolves(): number;
        getCommandPosEntity(): Internal.LivingEntity;
        addTargetGoal(): void;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        isMoving(): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setMagneticDeltaY(arg0: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        botania_playHurtSound(arg0: DamageSource_): void;
        setPriorityPos(arg0: BlockPos_): void;
        setSprinting(arg0: boolean): void;
        setRot(arg0: number, arg1: number): void;
        getAttackAnim(arg0: number): number;
        handler$ioa000$raidsenhanced$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        bettermobcombat$getAlternateMainHandItem(arg0: Internal.Mob_, arg1: Internal.Operation_<any>): Internal.ItemStack;
        getSummon(): Internal.Summoned;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setAirSupply(arg0: number): void;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        handler$kae000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getStepHeight(): number;
        isSleeping(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        getOwnerId(): Internal.UUID;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setConfigurableAttributes(): void;
        rarcompat$getRiddenInput(arg0: Internal.Player_, arg1: Internal.CowboyHatItem_, arg2: Internal.Mob_): Vec3d;
        createBodyControl(): Internal.BodyRotationControl;
        handler$fim000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        vb$dropLeash(broadcast: boolean, dropItem: boolean): void;
        etf$hasCustomName(): boolean;
        setPos(arg0: Vec3d_): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        reassessWeaponGoal(): void;
        getMainHandItem(): Internal.ItemStack;
        doPush(arg0: Internal.Entity_): void;
        setBoundPos(arg0: BlockPos_): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        biomancy$setEyeHeight(arg0: number): void;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getTrueOwner(): Internal.LivingEntity;
        getParts(): Internal.PartEntity<any>[];
        static vb$leashableLeashedTo(entity: Internal.Entity_): Internal.List<Internal.Leashable>;
        handler$flc000$goety$addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        getValue(arg0: Internal.TrackedData_<any>): any;
        localvar$gmb000$bettercombat$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        handler$fbf001$rarcompat$getControllingPassenger(arg0: Internal.CallbackInfoReturnable_<any>): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        ownerHurtGoals(): void;
        setUpgraded(arg0: boolean): void;
        getForgePersistentData(): Internal.CompoundTag;
        handler$iep000$relics$canBeSeenByAnyone(arg0: Internal.CallbackInfoReturnable_<any>): void;
        jumpFromGround(): void;
        handler$fko000$goety$makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        lifeSpanDamage(): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getSummonList(): Internal.List<Internal.EntityType<any>>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        getGoalSelector(): Internal.GoalSelector;
        onPathfindingStart(): void;
        handler$dkm000$ramcompat$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        canFollow(): boolean;
        getSoundVolume(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        stayingMode(): void;
        isUpgraded(): boolean;
        setRevivePos(arg0: BlockPos_): void;
        vb$canHaveALeashAttachedTo(target: Internal.Entity_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        biomancy$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        fabric_getAttachments(): Internal.Map<any, any>;
        setNecroLevel(arg0: number): void;
        getBoundPos(): BlockPos;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        setBoundDim(arg0: string): void;
        static vb$getHolderMovement(entity: Internal.Entity_): Vec3d;
        updateInvisibilityStatus(): void;
        isDirty(): boolean;
        static checkDayMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Owned>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        vb$notifyLeashHolder(entity: Internal.Leashable_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        setNoHealTime(arg0: number): void;
        setYRot(arg0: number): void;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        handler$fko000$goety$playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CallbackInfo_): void;
        self(): Internal.LivingEntity;
        handler$icl000$domesticationinnovation$di_pushedByWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        handler$flc002$goety$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setLimitedLife(arg0: number): void;
        canWander(): boolean;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        setBoundDim(arg0: Internal.ResourceKey_<Internal.Level>): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        irons_spellbooks$getCapData(): Internal.IArmorCapeProvider$CapeData;
        isPassenger(): boolean;
        etstlib$getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        bettermobcombat$setDelayedUpswing(arg0: Internal.Runnable_): void;
        requiresCustomPersistence(): boolean;
        isGrudgedTowards(arg0: Internal.LivingEntity_): boolean;
        biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        handler$hml000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        isAllyWithType(arg0: Internal.EntityType_<any>): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        ownerCheck(): void;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        biomancy$getDeathSound(): Internal.SoundEvent;
        setCommandPosEntityOrder(arg0: Internal.LivingEntity_): void;
        onSoulSpeedBlock(): boolean;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        stopMostAnimation(arg0: Internal.AnimationState_): void;
        handler$kal000$alexscaves$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        isInWall(): boolean;
        handler$fim000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        handler$eld001$combatnouveau$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMagneticDeltaX(): number;
        getBoundDim(): string;
        handler$fim000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        dampensVibrations(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        biomancy$getAmbientSound(): Internal.SoundEvent;
        "self()"(): Internal.LivingEntity;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        "canRide(net.minecraft.world.entity.LivingEntity)"(arg0: Internal.LivingEntity_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        biomancy$getDimensions(): Internal.EntityDimensions;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        localvar$iep000$relics$setBlockFriction(arg0: number): number;
        handler$fko000$goety$canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isActive(): boolean;
        handler$dgl000$ad_astra$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        dropExperience(): void;
        handler$cpg000$clanginghowl$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getLastHurtByMob(): Internal.LivingEntity;
        decreaseAirSupply(arg0: number): number;
        hasSummons(): boolean;
        getPortalCooldown(): number;
        bettermobcombat$getSwingProgress(): number;
        getPosition(arg0: number): Vec3d;
        setSlowFallingFlag(arg0: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        static vb$leashableInArea(entity: Internal.Entity_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        handler$eld000$combatnouveau$blockedByShield(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        getMasterOwner(): Internal.LivingEntity;
        isSteppingCarefully(): boolean;
        getPriorityTarget(): Internal.LivingEntity;
        handler$icl000$domesticationinnovation$di_getMovementEmission(arg0: Internal.CallbackInfoReturnable_<any>): void;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        setStaying(arg0: boolean): void;
        getAnimationStack(): Internal.AnimationStack;
        getMaxHeadXRot(): number;
        setInvisible(arg0: boolean): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        setHasLifespan(arg0: boolean): void;
        handler$icl000$domesticationinnovation$di_gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setHealth(arg0: number): void;
        handler$fim000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        bettermobcombat$hasActiveOffHandItemPose(): boolean;
        isPossessedByWatcher(): boolean;
        isWandering(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        setDefaultMovementSpeed(speed: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        handler$icl000$domesticationinnovation$di_canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setCustomNameVisible(arg0: boolean): void;
        setPriorityTime(arg0: number): void;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        startRiding(arg0: Internal.Entity_): boolean;
        getForward(): Vec3d;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        hasLifespan(): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        getVariant(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_): Internal.EntityType<any>;
        getChopData(): Internal.SyncedChopData;
        teleportTowards(arg0: Internal.Entity_, arg1: number): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        bettermobcombat$hasActiveAttackAnimation(): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(arg0: ResourceLocation_): Internal.IAnimation;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        getTeam(): Internal.Team;
        getReviveLevel(): Internal.ResourceKey<Internal.Level>;
        handler$fko000$goety$isSwimming(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setReviveDim(arg0: string): void;
        reviveTick(): void;
        static vb$getPreciseBodyRotation(entity: Internal.Entity_, partialTicks: number): number;
        getFlyingSpeed(): number;
        isLiving(): boolean;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        handler$chd000$illageandspillage$defineSynchedData(arg0: Internal.CallbackInfo_): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        etf$distanceTo(entity: Internal.Entity_): number;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        handler$fph000$vanillabackport$vb$finalizeSpawn(level: Internal.ServerLevelAccessor_, difficulty: Internal.DifficultyInstance_, reason: Internal.MobSpawnType_, spawnData: Internal.SpawnGroupData_, dataTag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        bettermobcombat$hasActiveMainHandItemPose(): boolean;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        shouldRiderSit(): boolean;
        hurtCurrentlyUsedShield(arg0: number): void;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handleInsidePortal(arg0: BlockPos_): void;
        vb$supportQuadLeashAsHolder(): boolean;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        handler$fph000$vanillabackport$vb$tick(ci: Internal.CallbackInfo_): void;
        callGetBlockPosBelowThatAffectsMyMovement(): BlockPos;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        clean(): void;
        getLastHurtByPlayerTime(): number;
        getHasSummonCheck(): number;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        checkAndHandleImportantInteractions(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        setNecromancerSpellType(arg0: Internal.AbstractNecromancer$NecromancerSpellType_): void;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setShooting(arg0: boolean): void;
        supp$getSlimedTicks(): number;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        mobSense(): void;
        bettermobcombat$getUpswingTicks(): number;
        handler$kae000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        setAnimationState(arg0: string): void;
        maybeDisableShield(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getExperienceReward(): number;
        handler$hji000$treechop$injectDataSaving(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getFirstPassenger(): Internal.Entity;
        getEntries(arg0: boolean): Internal.Set<any>;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        servantTick(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        addPassenger(arg0: Internal.Entity_): void;
        callGetAmbientSound(): Internal.SoundEvent;
        getLookAngle(): Vec3d;
        getRevivingTime(): number;
        isLimitedLife(): boolean;
        "setReviveDim(java.lang.String)"(arg0: string): void;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getProfile(): Internal.GameProfile;
        handler$fim000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        biomancy$getSoundVolume(): number;
        handler$jon000$libertyvillagers$replaceGetSafeFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        readServantData(arg0: Internal.CompoundTag_): void;
        displayFireAnimation(): boolean;
        handler$flc000$goety$randomTeleport(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getRopeHoldPosition(arg0: number): Vec3d;
        onAddedToWorld(): void;
        isCrouching(): boolean;
        canUpdateMove(): boolean;
        redirect$cel000$attributeslib$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        handler$hkm001$ntgl$setTarget(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        getPos(): Internal.Position;
        getRevivePos(): BlockPos;
        damageHeldItem(): void;
        "self()"(): Internal.Entity;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        processFlappingMovement(): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        vb$closeRangeLeashBehavior(entity: Internal.Entity_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        handler$hmj000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        trackingPosition(): Vec3d;
        getCurrentSwingDuration(): number;
        ownedTick(): void;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        swing(arg0: Internal.InteractionHand_): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        modifyExpressionValue$ljh000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        onPathfindingDone(): void;
        isNoGravity(): boolean;
        setMagneticDeltaZ(arg0: number): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        setCommandPos(arg0: BlockPos_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        getSwipes(): number;
        wait(): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        modifyExpressionValue$hmh001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        callShouldStayCloseToLeashHolder(): boolean;
        markHurt(): void;
        canPickUpLoot(): boolean;
        kill(): void;
        handler$eei000$biomancy$onGetAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        forceChunkLoadSelf(): void;
        chunkLoad(): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        setRollInvulnerableTicks(ticks: number): void;
        removeEffectParticles(): void;
        revive(): void;
        isWithinGuard(arg0: BlockPos_): boolean;
        vb$isLeashed(): boolean;
        getBbWidth(): number;
        callSetRot(arg0: number, arg1: number): void;
        getLastAttackedTicks(): number;
        "getName()"(): net.minecraft.network.chat.Component;
        canUpdate(): boolean;
        handler$iep001$relics$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        vb$supportQuadLeash(): boolean;
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        isPreserved(): boolean;
        handler$kae000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        removeTrueOwner(): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        canCommandToBlock(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        isPickable(): boolean;
        playLaughSound(): void;
        stayingPosition(): void;
        setHostile(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        canRevive(arg0: DamageSource_): boolean;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        checkBedExists(): boolean;
        overrideSetTarget(arg0: Internal.LivingEntity_): void;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        setSpawnType(arg0: Internal.MobSpawnType_): void;
        handler$iem000$relics$setWet(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        restoreLeashFromSave(): void;
        removeTag(arg0: string): boolean;
        handler$flc001$goety$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        notifyAll(): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$fim000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        setNoGravity(arg0: boolean): void;
        vb$leashTooFarBehaviour(): void;
        dropEquipment(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getDefaultSummon(): Internal.Summoned;
        setWandering(arg0: boolean): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        targetSelectGoal(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        setArrowPower(arg0: number): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        getMagneticDeltaY(): number;
        "canRide(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        summonVariants(): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        setDynamicLightEnabled(arg0: boolean): void;
        moveTo(arg0: Vec3d_): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        getNoHealTime(): number;
        tickEffects(): void;
        isInvertedHealAndHarm(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setTicketTime(arg0: number): void;
        setPreserved(arg0: boolean): void;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        upgrade(): void;
        playerAnimator_setAnimation(arg0: ResourceLocation_, arg1: Internal.IAnimation_): Internal.IAnimation;
        get following(): boolean
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        get shaking(): boolean
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get playingEndimation(): Internal.PlayableEndimation
        get servantAttack(): DamageSource
        get spectator(): boolean
        get freezingFromFrostmint(): boolean
        get persistentData(): Internal.CompoundTag
        get health(): number
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        set animator(arg0: Internal.AzAnimator_<any, any>)
        get ambientCreature(): boolean
        get name(): net.minecraft.network.chat.Component
        get armorValue(): number
        get swipeDelay(): number
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        set noHoney(arg0: number)
        get dynamicLightZ(): number
        get voicePitch(): number
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get lastHurtByPlayer(): Internal.Player
        get YHeadRot(): number
        get sunBurnTick(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get dimensions(): Internal.EntityDimensions
        set lootTable(arg0: ResourceLocation_)
        set webbed(arg0: boolean)
        set "reviveDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>)
        set ownerClientId(arg0: number)
        set noActionTime(arg0: number)
        get jumping(): boolean
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get y(): number
        get blocking(): boolean
        get airSupply(): number
        get animal(): boolean
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get motions(): Internal.Stack<any>
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        get swimming(): boolean
        set x(x: number)
        get ownerClientId(): number
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        get onPos(): BlockPos
        set useItemRemaining(arg0: number)
        get targetSelector(): Internal.GoalSelector
        set registeredToWorld(arg0: Internal.PathNavigation_)
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set swipeDelay(arg0: number)
        set canPickUpLoot(arg0: boolean)
        get fireType(): ResourceLocation
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get reviveDim(): string
        set undeadIdle(arg0: boolean)
        get hostile(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        set animationState(arg0: number)
        get usingItem(): boolean
        get alwaysTicking(): boolean
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get YRot(): number
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        get leashed(): boolean
        get spellCasting(): boolean
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        get boundLevel(): Internal.ResourceKey<Internal.Level>
        get idleOrNoAnimation(): boolean
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get flapping(): boolean
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        set ownerId(arg0: Internal.UUID_)
        get combatTracker(): Internal.CombatTracker
        set animationTick(arg0: number)
        get shootSound(): Internal.SoundEvent
        get noAi(): boolean
        set frostmintFreezing(arg0: boolean)
        get fullyFrozen(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get noEndimationPlaying(): boolean
        get noActionTime(): number
        set comboCount(arg0: number)
        set baby(arg0: boolean)
        get arrowPower(): number
        set "animationState(int)"(arg0: number)
        get inWaterOrBubble(): boolean
        get item(): Internal.ItemStack
        set commandTick(arg0: number)
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get commandPos(): BlockPos
        get fallFlying(): boolean
        get encodeId(): string
        get nbt(): Internal.CompoundTag
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        get brain(): Internal.Brain<any>
        get currentAnimation(): number
        set chopData(arg0: Internal.SyncedChopData_)
        set trueOwner(arg0: Internal.LivingEntity_)
        get comboCount(): number
        get dirtyEntries(): Internal.Set<any>
        get eyeY(): number
        set lifespan(arg0: number)
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        set attackSpeed(arg0: number)
        get guardingArea(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get x(): number
        get vehicle(): boolean
        get baseRangeDamage(): number
        set isInPowderSnow(arg0: boolean)
        set "animationState(java.lang.String)"(arg0: string)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get reviving(): boolean
        get onRails(): boolean
        get attackSpeed(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get weaponSwingInProgress(): boolean
        get removed(): boolean
        set reviveDim(arg0: Internal.ResourceKey_<Internal.Level>)
        get rewinding(): boolean
        get passengers(): Internal.EntityArrayList
        set swipes(arg0: number)
        get server(): Internal.MinecraftServer
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set XRot(arg0: number)
        get animatorOrNull(): Internal.AzAnimator<any, any>
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get permissionLevel(): number
        get staying(): boolean
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        get commandSpeed(): number
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        set spellCasting(arg0: boolean)
        get offHandItem(): Internal.ItemStack
        get necroLevel(): number
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get animations(): Internal.List<Internal.AnimationState>
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get target(): Internal.LivingEntity
        set natural(arg0: boolean)
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get ownerUUID(): Internal.UUID
        set citadelEntityData(arg0: Internal.CompoundTag_)
        get ticketTime(): number
        get immobile(): boolean
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get noHoney(): number
        set offHandItem(item: Internal.ItemStack_)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get familiar(): boolean
        get jumpPower(): number
        get natural(): boolean
        set "boundDim(java.lang.String)"(arg0: string)
        get commandTick(): number
        set revivingTime(arg0: number)
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        set knockbackMultiplier_BetterCombat(value: number)
        get laughSound(): Internal.SoundEvent
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get absorptionAmount(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get ursa(): boolean
        get commanded(): boolean
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get monster(): boolean
        get horizontalFacing(): Internal.Direction
        get dynamicLightWorld(): Internal.Level
        get magneticAttachmentFace(): Internal.Direction
        get movementEmission(): Internal.Entity$MovementEmission
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get registeredNavigation(): Internal.PathNavigation
        get endimatedState(): Internal.Endimatable$EndimatedState
        get freezing(): boolean
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        get XRot(): number
        set defaultMovementSpeedMultiplier(speed: number)
        get onFire(): boolean
        get owner(): Internal.LivingEntity
        set priorityTarget(arg0: Internal.LivingEntity_)
        set maxUpStep(arg0: number)
        get chargingCrossbow(): boolean
        get soulSpeedBlock(): boolean
        set motionZ(z: number)
        get shooting(): boolean
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get blockY(): number
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        get removalReason(): Internal.Entity$RemovalReason
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get webbed(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get controlledVehicle(): Internal.Entity
        get killCredit(): Internal.LivingEntity
        get defaultLootTable(): ResourceLocation
        set commandPosEntity(arg0: Internal.LivingEntity_)
        get maxFallDistance(): number
        get ticksFrozen(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set fireType(arg0: ResourceLocation_)
        get lifespan(): number
        get attackable(): boolean
        set hasSummonCheck(arg0: number)
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get defaultMovementSpeed(): number
        set "boundDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>)
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get mainArm(): Internal.HumanoidArm
        get priorityPos(): BlockPos
        get sprinting(): boolean
        get killChance(): number
        set killChance(arg0: number)
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set movementSpeedAddition(speed: number)
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get prioritizing(): boolean
        get armorCoverPercentage(): number
        get priorityTime(): number
        get player(): boolean
        get motionDirection(): Internal.Direction
        get commandPosEntity(): Internal.LivingEntity
        get moving(): boolean
        set magneticDeltaY(arg0: number)
        get spawnCancelled(): boolean
        set priorityPos(arg0: BlockPos_)
        set sprinting(arg0: boolean)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get summon(): Internal.Summoned
        set airSupply(arg0: number)
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get ownerId(): Internal.UUID
        set dataMap(arg0: Internal.Map_<any, any>)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        set pos(arg0: Vec3d_)
        get mainHandItem(): Internal.ItemStack
        set boundPos(arg0: BlockPos_)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        get trueOwner(): Internal.LivingEntity
        get parts(): Internal.PartEntity<any>[]
        set upgraded(arg0: boolean)
        get forgePersistentData(): Internal.CompoundTag
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get summonList(): Internal.List<Internal.EntityType<any>>
        get lastAttacker(): Internal.LivingEntity
        get goalSelector(): Internal.GoalSelector
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        get upgraded(): boolean
        set revivePos(arg0: BlockPos_)
        set necroLevel(arg0: number)
        get boundPos(): BlockPos
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set boundDim(arg0: string)
        get dirty(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        set noHealTime(arg0: number)
        set YRot(arg0: number)
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set limitedLife(arg0: number)
        set chestArmorItem(item: Internal.ItemStack_)
        set boundDim(arg0: Internal.ResourceKey_<Internal.Level>)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        set commandPosEntityOrder(arg0: Internal.LivingEntity_)
        get inWall(): boolean
        get magneticDeltaX(): number
        get boundDim(): string
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        get active(): boolean
        get lastHurtByMob(): Internal.LivingEntity
        get portalCooldown(): number
        set slowFallingFlag(arg0: boolean)
        get eyeInFluidType(): Internal.FluidType
        get masterOwner(): Internal.LivingEntity
        get steppingCarefully(): boolean
        get priorityTarget(): Internal.LivingEntity
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        set staying(arg0: boolean)
        get animationStack(): Internal.AnimationStack
        get maxHeadXRot(): number
        set invisible(arg0: boolean)
        set hasLifespan(arg0: boolean)
        set health(arg0: number)
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get possessedByWatcher(): boolean
        get wandering(): boolean
        set defaultMovementSpeed(speed: number)
        set customNameVisible(arg0: boolean)
        set priorityTime(arg0: number)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get boundingBox(): Internal.AABB
        get chopData(): Internal.SyncedChopData
        get affectedByPotions(): boolean
        get currentAttack(): Internal.AttackHand
        get team(): Internal.Team
        get reviveLevel(): Internal.ResourceKey<Internal.Level>
        set reviveDim(arg0: string)
        get flyingSpeed(): number
        get living(): boolean
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get lastHurtByPlayerTime(): number
        get hasSummonCheck(): number
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set necromancerSpellType(arg0: Internal.AbstractNecromancer$NecromancerSpellType_)
        set shooting(arg0: boolean)
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        set animationState(arg0: string)
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get revivingTime(): number
        get limitedLife(): boolean
        set "reviveDim(java.lang.String)"(arg0: string)
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        get crouching(): boolean
        get pos(): Internal.Position
        get revivePos(): BlockPos
        get maxAirSupply(): number
        get animationTick(): number
        set maxHealth(hp: number)
        get boundingBoxForCulling(): Internal.AABB
        get currentSwingDuration(): number
        get inLava(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set magneticDeltaZ(arg0: number)
        set commandPos(arg0: BlockPos_)
        get swipes(): number
        get uuid(): Internal.UUID
        set noAi(arg0: boolean)
        get headArmorItem(): Internal.ItemStack
        set rollInvulnerableTicks(ticks: number)
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get maxSpawnClusterSize(): number
        get preserved(): boolean
        get username(): string
        get pickable(): boolean
        set hostile(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get randomY(): number
        set spawnType(arg0: Internal.MobSpawnType_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get type(): string
        get defaultSummon(): Internal.Summoned
        set wandering(arg0: boolean)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set arrowPower(arg0: number)
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set dynamicLightEnabled(arg0: boolean)
        get noHealTime(): number
        get invertedHealAndHarm(): boolean
        set ticketTime(arg0: number)
        set preserved(arg0: boolean)
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        attackAnimationState: Internal.AnimationState;
        static readonly ANIM_STATE: Internal.EntityDataAccessor<number>;
        static SPELL_ANIM: ("spell") & (string);
        summonAnimationState: Internal.AnimationState;
        walkAnimationState: Internal.AnimationState;
        static readonly LEVEL: Internal.EntityDataAccessor<number>;
        static MAX_LEVEL: (2) & (number);
        static IDLE: ("idle") & (string);
        static SUMMON: ("summon") & (string);
        cantDo: number;
        idleAnimationState: Internal.AnimationState;
        static ATTACK: ("attack") & (string);
        static INITIAL_LEVEL: (0) & (number);
        spellAnimationState: Internal.AnimationState;
    }
    type AbstractNecromancer_ = AbstractNecromancer;
    class DoubleChestTierUpgradeRecipe extends Internal.ShapedRecipe implements Internal.IWrapperRecipe<Internal.ShapedRecipe> {
        constructor(arg0: Internal.ShapedRecipe_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        static dissolvePattern$bookshelf_$md$f7f358$3(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        static keyFromJson$bookshelf_$md$f7f358$0(arg0: com.google.gson.JsonObject_): Internal.Map<any, any>;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        isSpecial(): boolean;
        static bookshelf$dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        getWidth(): number;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static setCraftingSize(arg0: number, arg1: number): void;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getCompose(): Internal.Recipe<any>;
        static itemStackFromJson(arg0: com.google.gson.JsonObject_): Internal.ItemStack;
        getType(): ResourceLocation;
        static dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        wait(): void;
        isIncomplete(): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: number, arg2: number, arg3: boolean): boolean;
        getClass(): typeof any;
        static keyFromJson(arg0: com.google.gson.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        static bookshelf$shrink(...arg0: string[]): string[];
        static shrink$bookshelf_$md$f7f358$1(...arg0: string[]): string[];
        static bookshelf$keyFromJson(arg0: com.google.gson.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getHeight(): number;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        getRecipeWidth(): number;
        notifyAll(): void;
        static patternFromJson$bookshelf_$md$f7f358$2(arg0: com.google.gson.JsonArray_): string[];
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static patternFromJson(arg0: com.google.gson.JsonArray_): string[];
        static shrink(...arg0: string[]): string[];
        setGroup(group: string): void;
        static itemFromJson(arg0: com.google.gson.JsonObject_): Internal.Item;
        getResult(): Internal.ItemStack;
        static bookshelf$patternFromJson(arg0: com.google.gson.JsonArray_): string[];
        hashCode(): number;
        getRecipeHeight(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get id(): ResourceLocation
        get special(): boolean
        get width(): number
        get compose(): Internal.Recipe<any>
        get type(): ResourceLocation
        get incomplete(): boolean
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get height(): number
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get recipeWidth(): number
        set group(group: string)
        get result(): Internal.ItemStack
        get recipeHeight(): number
        get orCreateId(): ResourceLocation
        static readonly REGISTERED_RECIPES: Internal.Set<ResourceLocation>;
    }
    type DoubleChestTierUpgradeRecipe_ = DoubleChestTierUpgradeRecipe;
    interface WatchService extends Internal.Closeable {
        abstract poll(): Internal.WatchKey;
        abstract take(): Internal.WatchKey;
        abstract close(): void;
        abstract poll(arg0: number, arg1: Internal.TimeUnit_): Internal.WatchKey;
    }
    type WatchService_ = WatchService;
    interface ClassDesc extends Internal.TypeDescriptor$OfField<Internal.ClassDesc>, Internal.ConstantDesc {
        displayName(): string;
        isPrimitive(): boolean;
        ofDescriptor(arg0: string): this;
        of(arg0: string): this;
        abstract descriptorString(): string;
        nested(arg0: string, ...arg1: string[]): this;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        of(arg0: string, arg1: string): this;
        componentType(): this;
        isArray(): boolean;
        nested(arg0: string): this;
        isClassOrInterface(): boolean;
        packageName(): string;
        abstract equals(arg0: any): boolean;
        arrayType(arg0: number): this;
        arrayType(): Internal.TypeDescriptor$OfField<any>;
        get primitive(): boolean
        get array(): boolean
        get classOrInterface(): boolean
    }
    type ClassDesc_ = ClassDesc;
    class EnderslimeCakeSliceItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EnderslimeCakeSliceItem_ = EnderslimeCakeSliceItem;
    interface GatheringByteChannel extends Internal.WritableByteChannel {
        abstract write(arg0: Internal.ByteBuffer_): number;
        abstract write(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract "write(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        abstract "write(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        abstract write(arg0: Internal.ByteBuffer_[]): number;
        get open(): boolean
    }
    type GatheringByteChannel_ = GatheringByteChannel;
    class ServerboundContainerClickPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.ClickType_, arg5: Internal.ItemStack_, arg6: Internal.Int2ObjectMap_<Internal.ItemStack>)
        getButtonNum(): number;
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        getChangedSlots(): Internal.Int2ObjectMap<Internal.ItemStack>;
        notifyAll(): void;
        getSlotNum(): number;
        getContainerId(): number;
        getClickType(): Internal.ClickType;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        hashCode(): number;
        getStateId(): number;
        wait(): void;
        wait(arg0: number): void;
        getCarriedItem(): Internal.ItemStack;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get buttonNum(): number
        get class(): typeof any
        get changedSlots(): Internal.Int2ObjectMap<Internal.ItemStack>
        get slotNum(): number
        get containerId(): number
        get clickType(): Internal.ClickType
        get skippable(): boolean
        get stateId(): number
        get carriedItem(): Internal.ItemStack
    }
    type ServerboundContainerClickPacket_ = ServerboundContainerClickPacket;
    interface ScreenMouseEvents$BeforeMouseClick {
        abstract beforeMouseClick(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): void;
    }
    type ScreenMouseEvents$BeforeMouseClick_ = ScreenMouseEvents$BeforeMouseClick | ((arg0: Internal.Screen, arg1: number, arg2: number, arg3: number)=> void);
    /**
     * @deprecated
    */
    class InterfaceManager {
        constructor(arg0: Internal.IXaeroMinimap_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        /**
         * @deprecated
        */
        getMinimapInterface(): Internal.MinimapInterface;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        /**
         * @deprecated
        */
        get minimapInterface(): Internal.MinimapInterface
    }
    type InterfaceManager_ = InterfaceManager;
    class CaramelPepperItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type CaramelPepperItem_ = CaramelPepperItem;
    class ItemBlockInductionProvider extends Internal.ItemBlockTooltip<Internal.BlockTile<Internal.TileEntityInductionProvider, Internal.BlockTypeTile<Internal.TileEntityInductionProvider>>> {
        constructor(block: Internal.BlockTile_<Internal.TileEntityInductionProvider, Internal.BlockTypeTile<Internal.TileEntityInductionProvider>>)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        getTier(): Internal.ITier;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getTextColor(stack: Internal.ItemStack_): Internal.TextColor;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(item: Internal.ItemEntity_, damageSource: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getBlock(): Internal.BlockTile<Internal.TileEntityInductionProvider, Internal.BlockTypeTile<Internal.TileEntityInductionProvider>>;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        placeBlock(context: Internal.BlockPlaceContext_, state: Internal.BlockState_): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_, slotChanged: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get tier(): Internal.ITier
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get block(): Internal.BlockTile<Internal.TileEntityInductionProvider, Internal.BlockTypeTile<Internal.TileEntityInductionProvider>>
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemBlockInductionProvider_ = ItemBlockInductionProvider;
    interface BlockSensitiveBufferBuilder {
        abstract endBlock(): void;
        abstract beginBlock(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type BlockSensitiveBufferBuilder_ = BlockSensitiveBufferBuilder;
    class PotatoProjectileEntityHitAction$Type extends Internal.Enum<Internal.PotatoProjectileEntityHitAction$Type> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.PotatoProjectileEntityHitAction$Type_): number;
        toString(): string;
        getDeclaringClass(): typeof Internal.PotatoProjectileEntityHitAction$Type;
        notifyAll(): void;
        "compareTo(com.simibubi.create.api.equipment.potatoCannon.PotatoProjectileEntityHitAction$Type)"(arg0: Internal.PotatoProjectileEntityHitAction$Type_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PotatoProjectileEntityHitAction$Type>>;
        static values(): Internal.PotatoProjectileEntityHitAction$Type[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.PotatoProjectileEntityHitAction$Type;
        get class(): typeof any
        get declaringClass(): typeof Internal.PotatoProjectileEntityHitAction$Type
        static readonly ON_HIT: (Internal.PotatoProjectileEntityHitAction$Type) & (Internal.PotatoProjectileEntityHitAction$Type);
        static readonly PRE_HIT: (Internal.PotatoProjectileEntityHitAction$Type) & (Internal.PotatoProjectileEntityHitAction$Type);
    }
    type PotatoProjectileEntityHitAction$Type_ = "on_hit" | PotatoProjectileEntityHitAction$Type | "pre_hit";
    abstract class HolderSet$ListBacked <T> implements Internal.HolderSet<T> {
        constructor()
        getClass(): typeof any;
        abstract unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        static "direct(java.util.function.Function,java.util.List)"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
        notify(): void;
        stream(): Internal.Stream<Internal.Holder<T>>;
        wait(arg0: number, arg1: number): void;
        static "direct(net.minecraft.core.Holder[])"<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        abstract contents(): Internal.List<Internal.Holder<T>>;
        abstract contains(arg0: Internal.Holder_<T>): boolean;
        static direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        getRandomElement(arg0: Internal.RandomSource_): Internal.Optional<Internal.Holder<T>>;
        iterator(): Internal.Iterator<Internal.Holder<T>>;
        abstract unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        toString(): string;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        get(arg0: number): Internal.Holder<T>;
        notifyAll(): void;
        spliterator(): Internal.Spliterator<Internal.Holder<T>>;
        static "direct(java.util.function.Function,java.lang.Object[])"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        size(): number;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        hashCode(): number;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        static direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        wait(): void;
        wait(arg0: number): void;
        static "direct(java.util.List)"<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type HolderSet$ListBacked_<T> = HolderSet$ListBacked<T>;
    class UnixPath implements Internal.Path {
        "resolveSibling(java.nio.file.Path)"(arg0: Internal.Path_): Internal.Path;
        relativize(arg0: Internal.Path_): Internal.Path;
        notify(): void;
        compareTo(arg0: any): number;
        static of(arg0: Internal.URI_): Internal.Path;
        "resolve(java.lang.String)"(arg0: string): Internal.Path;
        getName(arg0: number): Internal.Path;
        getFileName(): Internal.Path;
        "endsWith(java.nio.file.Path)"(arg0: Internal.Path_): boolean;
        startsWith(arg0: string): boolean;
        resolveSibling(arg0: string): Internal.Path;
        toRealPath(...arg0: any_[]): Internal.Path;
        startsWith(arg0: Internal.Path_): boolean;
        resolve(arg0: Internal.Path_): Internal.Path;
        endsWith(arg0: string): boolean;
        compareTo(arg0: Internal.Path_): number;
        resolve(arg0: string): Internal.Path;
        getNameCount(): number;
        register(arg0: Internal.WatchService_, ...arg1: Internal.WatchEvent$Kind_<any>[]): Internal.WatchKey;
        "resolve(java.nio.file.Path)"(arg0: Internal.Path_): Internal.Path;
        toUri(): Internal.URI;
        spliterator(): Internal.Spliterator<Internal.Path>;
        static of(arg0: string, ...arg1: string[]): Internal.Path;
        wait(): void;
        normalize(): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        subpath(arg0: number, arg1: number): this;
        "startsWith(java.nio.file.Path)"(arg0: Internal.Path_): boolean;
        toFile(): Internal.File;
        wait(arg0: number, arg1: number): void;
        getFileSystem(): Internal.UnixFileSystem;
        resolveSibling(arg0: Internal.Path_): Internal.Path;
        "startsWith(java.lang.String)"(arg0: string): boolean;
        "endsWith(java.lang.String)"(arg0: string): boolean;
        iterator(): Internal.Iterator<Internal.Path>;
        forEach(arg0: Internal.Consumer_<Internal.Path>): void;
        endsWith(arg0: Internal.Path_): boolean;
        toString(): string;
        notifyAll(): void;
        register(arg0: Internal.WatchService_, arg1: Internal.WatchEvent$Kind_<any>[], ...arg2: any_[]): Internal.WatchKey;
        toAbsolutePath(): this;
        hashCode(): number;
        "compareTo(java.nio.file.Path)"(arg0: Internal.Path_): number;
        wait(arg0: number): void;
        "resolveSibling(java.lang.String)"(arg0: string): Internal.Path;
        getRoot(): Internal.Path;
        equals(arg0: any): boolean;
        isAbsolute(): boolean;
        getParent(): this;
        get fileName(): Internal.Path
        get nameCount(): number
        get class(): typeof any
        get fileSystem(): Internal.UnixFileSystem
        get root(): Internal.Path
        get absolute(): boolean
        get parent(): Internal.UnixPath
    }
    type UnixPath_ = UnixPath;
    interface WeightedEntry {
        abstract getWeight(): Internal.Weight;
        wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        get weight(): Internal.Weight
        (): Internal.Weight_;
    }
    type WeightedEntry_ = (()=> Internal.Weight_) | WeightedEntry;
    class NetherDogFoodItem extends Internal.DogFoodItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        affectConsumer(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): void;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$cok000$vampiresdelight$hideFoodTooltips(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        static onDogFoodApplied(arg0: Internal.PlayerInteractEvent$EntityInteract_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly NETHER_EFFECTS: ([Internal.MobEffectInstance, Internal.MobEffectInstance, Internal.MobEffectInstance]) & (Internal.List<Internal.MobEffectInstance>);
    }
    type NetherDogFoodItem_ = NetherDogFoodItem;
    class OpenTomeEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.ItemStack_)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        readonly tome: Internal.ItemStack;
    }
    type OpenTomeEvent_ = OpenTomeEvent;
    abstract class TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        static setDirtAt(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): void;
        validTreePos(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_, arg5: Internal.Function_<Internal.BlockState, Internal.BlockState>): boolean;
        static trunkPlacerParts<P extends Internal.TrunkPlacer>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<P>, number, number, number>;
        abstract type(): Internal.TrunkPlacerType<any>;
        abstract placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        equals(arg0: any): boolean;
        placeLogIfFree(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.BlockPos$MutableBlockPos_, arg4: Internal.TreeConfiguration_): void;
        get class(): typeof any
        static readonly MAX_HEIGHT: (80) & (number);
        readonly heightRandB: number;
        readonly heightRandA: number;
        static readonly CODEC: Internal.Codec<Internal.TrunkPlacer>;
        readonly baseHeight: number;
    }
    type TrunkPlacer_ = TrunkPlacer;
    interface IMaterialItem extends Internal.ItemLike {
        abstract getMaterial(arg0: Internal.ItemStack_): Internal.MaterialVariantId;
        abstract asItem(): Internal.Item;
        withMaterial(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        withMaterial(arg0: Internal.MaterialVariantId_): Internal.ItemStack;
        getMaterialFromStack(arg0: Internal.ItemStack_): Internal.MaterialVariantId;
        "canUseMaterial(slimeknights.tconstruct.library.materials.definition.IMaterial)"(arg0: Internal.IMaterial_): boolean;
        canUseMaterial(arg0: Internal.IMaterial_): boolean;
        setMaterialForced(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        canUseMaterial(arg0: Internal.MaterialId_): boolean;
        addVariants(arg0: Internal.Consumer_<Internal.ItemStack>, arg1: string): void;
        withMaterialForDisplay(arg0: Internal.MaterialVariantId_): Internal.ItemStack;
        setMaterial(arg0: Internal.ItemStack_, arg1: Internal.MaterialVariantId_): Internal.ItemStack;
        "canUseMaterial(slimeknights.tconstruct.library.materials.definition.MaterialId)"(arg0: Internal.MaterialId_): boolean;
        readonly MATERIAL_TAG: ("Material") & (string);
    }
    type IMaterialItem_ = IMaterialItem;
    interface ShapedRecipeBuilderAccessor {
        abstract getShowNotification(): boolean;
        abstract getRecipeCategory(): Internal.RecipeCategory;
        get showNotification(): boolean
        get recipeCategory(): Internal.RecipeCategory
    }
    type ShapedRecipeBuilderAccessor_ = ShapedRecipeBuilderAccessor;
    class DoubleArgumentType implements Internal.ArgumentType<number> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static doubleArg(arg0: number): Internal.DoubleArgumentType;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static getDouble(arg0: Internal.CommandContext_<any>, arg1: string): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        parse(arg0: Internal.StringReader_): number;
        getExamples(): Internal.Collection<string>;
        getMaximum(): number;
        hashCode(): number;
        getMinimum(): number;
        static doubleArg(): Internal.DoubleArgumentType;
        wait(): void;
        static doubleArg(arg0: number, arg1: number): Internal.DoubleArgumentType;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get examples(): Internal.Collection<string>
        get maximum(): number
        get minimum(): number
    }
    type DoubleArgumentType_ = DoubleArgumentType;
    interface IGasTracker extends Internal.IContentsListener {
        abstract onContentsChanged(): void;
        abstract getGasTanks(side: Internal.Direction_): Internal.List<Internal.IGasTank>;
    }
    type IGasTracker_ = IGasTracker;
    class KineticNetwork {
        constructor()
        calculateCapacity(): number;
        add(arg0: Internal.KineticBlockEntity_): void;
        getClass(): typeof any;
        updateCapacity(): void;
        toString(): string;
        addSilently(arg0: Internal.KineticBlockEntity_, arg1: number, arg2: number): void;
        notifyAll(): void;
        remove(arg0: Internal.KineticBlockEntity_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        updateNetwork(): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        hashCode(): number;
        calculateStress(): number;
        updateStress(): void;
        getActualCapacityOf(arg0: Internal.KineticBlockEntity_): number;
        getSize(): number;
        wait(): void;
        wait(arg0: number): void;
        updateCapacityFor(arg0: Internal.KineticBlockEntity_, arg1: number): void;
        getActualStressOf(arg0: Internal.KineticBlockEntity_): number;
        updateStressFor(arg0: Internal.KineticBlockEntity_, arg1: number): void;
        equals(arg0: any): boolean;
        sync(): void;
        get class(): typeof any
        get size(): number
        sources: Internal.Map<Internal.KineticBlockEntity, number>;
        id: number;
        initialized: boolean;
        members: Internal.Map<Internal.KineticBlockEntity, number>;
    }
    type KineticNetwork_ = KineticNetwork;
    class ScrollInput extends Internal.AbstractSimiWidget {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        writingTo(arg0: Internal.Label_): this;
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        setActive<T extends Internal.AbstractSimiWidget>(arg0: boolean): T;
        renderScrollingString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: number, arg3: number): void;
        getY(): number;
        withShiftStep(arg0: number): this;
        setFocused(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        getTooltip(): Internal.Tooltip;
        withRange(arg0: number, arg1: number): this;
        runCallback(arg0: number, arg1: number): void;
        calling(arg0: Internal.Consumer_<number>): this;
        titled(arg0: Internal.MutableComponent_): this;
        setState(arg0: number): this;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        clearFGColor(): void;
        setX(arg0: number): void;
        setAlpha(arg0: number): void;
        getToolTip(): Internal.List<net.minecraft.network.chat.Component>;
        getState(): number;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        updateWidgetNarration(arg0: Internal.NarrationElementOutput_): void;
        createTooltipPositioner(): Internal.ClientTooltipPositioner;
        isHovered(): boolean;
        "withCallback(java.lang.Runnable)"<T extends Internal.AbstractSimiWidget>(arg0: Internal.Runnable_): T;
        atZLevel<T extends Internal.AbstractSimiWidget>(arg0: number): T;
        getWidth(): number;
        setPosition(arg0: number, arg1: number): void;
        inverted(): this;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        tick(): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        addHint(arg0: Internal.MutableComponent_): this;
        wait(): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setMessage(arg0: net.minecraft.network.chat.Component_): void;
        isValidClickButton(arg0: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        "withCallback(java.util.function.BiConsumer)"<T extends Internal.AbstractSimiWidget>(arg0: Internal.BiConsumer_<number, number>): T;
        getClass(): typeof any;
        updateTooltip(): void;
        isFocused(): boolean;
        getX(): number;
        clicked(arg0: number, arg1: number): boolean;
        withCallback<T extends Internal.AbstractSimiWidget>(arg0: Internal.BiConsumer_<number, number>): T;
        isActive(): boolean;
        withStepFunction(arg0: Internal.Function_<Internal.ScrollValueBehaviour$StepContext, number>): this;
        abstract renderWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        setTooltipDelay(arg0: number): void;
        getMessage(): net.minecraft.network.chat.Component;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setY(arg0: number): void;
        onChanged(): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        toString(): string;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        removeCallback(): this;
        standardStep(): Internal.Function<Internal.ScrollValueBehaviour$StepContext, number>;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        format(arg0: Internal.Function_<number, net.minecraft.network.chat.Component>): this;
        playDownSound(arg0: Internal.SoundManager_): void;
        defaultButtonNarrationText(arg0: Internal.NarrationElementOutput_): void;
        hashCode(): number;
        static wrapDefaultNarrationMessage(arg0: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        static renderScrollingString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: net.minecraft.network.chat.Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setFGColor(arg0: number): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        createNarrationMessage(): Internal.MutableComponent;
        wait(arg0: number): void;
        withCallback<T extends Internal.AbstractSimiWidget>(arg0: Internal.Runnable_): T;
        setHeight(arg0: number): void;
        equals(arg0: any): boolean;
        set active(arg0: boolean)
        get y(): number
        set focused(arg0: boolean)
        get tooltip(): Internal.Tooltip
        set state(arg0: number)
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get toolTip(): Internal.List<net.minecraft.network.chat.Component>
        get state(): number
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get hoveredOrFocused(): boolean
        set message(arg0: net.minecraft.network.chat.Component_)
        get class(): typeof any
        get focused(): boolean
        get x(): number
        get active(): boolean
        get tabOrderGroup(): number
        set tooltipDelay(arg0: number)
        get message(): net.minecraft.network.chat.Component
        set y(arg0: number)
        set width(arg0: number)
        get height(): number
        set tabOrderGroup(arg0: number)
        get FGColor(): number
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
    }
    type ScrollInput_ = ScrollInput;
    interface EventExecutor extends Internal.EventExecutorGroup {
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        abstract newProgressivePromise<V>(): Internal.ProgressivePromise<V>;
        abstract scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract parent(): Internal.EventExecutorGroup;
        abstract next(): this;
        abstract newFailedFuture<V>(arg0: Internal.Throwable_): io.netty.util.concurrent.Future<V>;
        abstract "schedule(java.util.concurrent.Callable,long,java.util.concurrent.TimeUnit)"<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract isTerminated(): boolean;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract isShutdown(): boolean;
        abstract newPromise<V>(): Internal.Promise<V>;
        /**
         * @deprecated
        */
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        abstract shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        abstract "submit(java.util.concurrent.Callable)"<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract inEventLoop(arg0: Internal.Thread_): boolean;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract "schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract newSucceededFuture<V>(arg0: V): io.netty.util.concurrent.Future<V>;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract submit(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract isShuttingDown(): boolean;
        abstract inEventLoop(): boolean;
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type EventExecutor_ = EventExecutor;
    class WolfVariant$AssetInfo extends Internal.Record {
        constructor(wild: Internal.ClientAsset_, tame: Internal.ClientAsset_, angry: Internal.ClientAsset_)
        getClass(): typeof any;
        hashCode(): number;
        angry(): Internal.ClientAsset;
        toString(): string;
        tame(): Internal.ClientAsset;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        wild(): Internal.ClientAsset;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.WolfVariant$AssetInfo>;
    }
    type WolfVariant$AssetInfo_ = WolfVariant$AssetInfo;
    class ClientboundLevelEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: BlockPos_, arg2: number, arg3: boolean)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getData(): number;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getPos(): BlockPos;
        hashCode(): number;
        getType(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isGlobalEvent(): boolean;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get data(): number
        get skippable(): boolean
        get pos(): BlockPos
        get type(): number
        get globalEvent(): boolean
    }
    type ClientboundLevelEventPacket_ = ClientboundLevelEventPacket;
    abstract class Locale$IsoCountryCode extends Internal.Enum<Internal.Locale$IsoCountryCode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(java.util.Locale$IsoCountryCode)"(arg0: Internal.Locale$IsoCountryCode_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Locale$IsoCountryCode>>;
        getDeclaringClass(): typeof Internal.Locale$IsoCountryCode;
        toString(): string;
        static valueOf(arg0: string): Internal.Locale$IsoCountryCode;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.Locale$IsoCountryCode_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static values(): Internal.Locale$IsoCountryCode[];
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Locale$IsoCountryCode
        static readonly PART1_ALPHA2: Internal.Locale$IsoCountryCode;
        static readonly PART1_ALPHA3: Internal.Locale$IsoCountryCode;
        static readonly PART3: Internal.Locale$IsoCountryCode;
    }
    type Locale$IsoCountryCode_ = Locale$IsoCountryCode | "part1_alpha2" | "part3" | "part1_alpha3";
    class Navigation implements Internal.AccessorNavigation, Internal.IWaypointableNavigation, Internal.IBufferBlockCheckableNavigation, Internal.IGenerallySearchableNavigation {
        constructor(arg0: Internal.Train_)
        getClass(): typeof any;
        findPathTo(arg0: Internal.ArrayList_<Internal.GlobalStation>, arg1: number): Internal.DiscoveredPath;
        controlSignalScout(): Internal.TravellingPoint$ITrackSelector;
        findNearestApproachable(arg0: boolean): Internal.GlobalStation;
        read(arg0: Internal.CompoundTag_, arg1: Internal.TrackGraph_, arg2: Internal.DimensionPalette_): void;
        findPathTo(arg0: Internal.GlobalStation_, arg1: number): Internal.DiscoveredPath;
        "findPathTo(java.util.ArrayList,double)"(arg0: Internal.ArrayList_<Internal.GlobalStation>, arg1: number): Internal.DiscoveredPath;
        isActive(): boolean;
        getCurrentPath(): Internal.List<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        railways$updateControlsBlock(forceBackwards: boolean): void;
        write(arg0: Internal.DimensionPalette_): Internal.CompoundTag;
        cancelNavigation(): void;
        startNavigation(arg0: Internal.DiscoveredPath_): number;
        toString(): string;
        railways$findNearestApproachableSwitch(forward: boolean): Internal.Pair<any, any>;
        tick(arg0: Internal.Level_): void;
        notifyAll(): void;
        search(arg0: number, arg1: boolean, arg2: Internal.ArrayList_<Internal.GlobalStation>, arg3: Internal.Navigation$StationTest_): void;
        railways$searchGeneral(maxDistance: number, maxCost: number, forward: boolean, pointTest: Internal.IGenerallySearchableNavigation$PointTest_): void;
        search(arg0: number, arg1: number, arg2: boolean, arg3: Internal.ArrayList_<Internal.GlobalStation>, arg4: Internal.Navigation$StationTest_): void;
        hashCode(): number;
        railways$isWaypointMode(): boolean;
        control(arg0: Internal.TravellingPoint_): Internal.TravellingPoint$ITrackSelector;
        "findPathTo(com.simibubi.create.content.trains.station.GlobalStation,double)"(arg0: Internal.GlobalStation_, arg1: number): Internal.DiscoveredPath;
        wait(): void;
        railways$searchGeneral(maxDistance: number, forward: boolean, pointTest: Internal.IGenerallySearchableNavigation$PointTest_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get active(): boolean
        get currentPath(): Internal.List<any>
        distanceStartedAt: number;
        announceArrival: boolean;
        destination: Internal.GlobalStation;
        destinationBehindTrain: boolean;
        distanceToDestination: number;
        distanceToSignal: number;
        waitingForSignal: Internal.Pair<Internal.UUID, boolean>;
        train: Internal.Train;
        ticksWaitingForSignal: number;
    }
    type Navigation_ = Navigation;
    interface SearchTree <T> {
        abstract search(arg0: string): Internal.List<T>;
        (arg0: string): Internal.List_<T>;
    }
    type SearchTree_<T> = SearchTree<T> | ((arg0: string)=> Internal.List_<T>);
    interface ICustomOutputRecipe <C extends net.minecraft.world.Container> extends Internal.ICommonRecipe<C> {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        /**
         * @deprecated
        */
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        /**
         * @deprecated
        */
        assemble(arg0: C, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        /**
         * @deprecated
        */
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        abstract matches(arg0: C, arg1: Internal.Level_): boolean;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getRemainingItems(arg0: C): Internal.NonNullList<Internal.ItemStack>;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type ICustomOutputRecipe_<C extends net.minecraft.world.Container> = ICustomOutputRecipe<C>;
    class ShovelItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        static toToolTier(o: any): Internal.Tier;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
        */
        subtypes(fn: Internal.Function_<Internal.ItemStack, Internal.Collection<Internal.ItemStack>>): Internal.ItemBuilder;
        createAdditionalObjects(): void;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
        */
        hurtEnemy(context: Internal.Predicate_<Internal.ItemBuilder$HurtEnemyContext>): Internal.ItemBuilder;
        getTranslationKeyGroup(): string;
        notify(): void;
        get(): Internal.Item;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
        */
        unstackable(): Internal.ItemBuilder;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
        */
        finishUsing(finishUsing: Internal.ItemBuilder$FinishUsingCallback_): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
        */
        color(index: number, color: Internal.ItemTintFunction_): Internal.ItemBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Modifies the tool tier.
        */
        modifyTier(callback: Internal.Consumer_<Internal.MutableToolTier>): Internal.HandheldItemBuilder;
        /**
         * Adds an attribute modifier to the item.
         * 
         * An attribute modifier is something like a damage boost or a speed boost.
         * On tools, they're applied when the item is held, on armor, they're
         * applied when the item is worn.
         * @param attribute The resource location of the attribute, e.g. 'generic.attack_damage'
         * @param identifier A unique identifier for the modifier. Modifiers are considered the same if they have the same identifier.
         * @param d The amount of the modifier.
         * @param operation The operation to apply the modifier with. Can be ADDITION, MULTIPLY_BASE, or MULTIPLY_TOTAL.
        */
        modifyAttribute(attribute: ResourceLocation_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): Internal.ItemBuilder;
        /**
         * Sets the item's model (parent).
        */
        parentModel(m: string): Internal.ItemBuilder;
        /**
         * Sets the item's max stack size. Default is 64.
        */
        maxStackSize(v: number): Internal.ItemBuilder;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
        */
        color(callback: Internal.ItemTintFunction_): Internal.ItemBuilder;
        /**
         * Adds a tooltip to the item.
        */
        tooltip(text: net.minecraft.network.chat.Component_): Internal.ItemBuilder;
        "transformObject(net.minecraft.world.item.Item)"(obj: Internal.Item_): Internal.Item;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
        */
        barWidth(barWidth: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Item>;
        /**
         * Sets the base attack speed of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of -2.4, while an axe has a baseline of -3.1.
         * 
         * The actual speed is the sum of the baseline and the speed from tier + 4 (bare hand).
        */
        speedBaseline(f: number): Internal.HandheldItemBuilder;
        /**
         * Sets the item's rarity.
        */
        rarity(v: Internal.Rarity_): Internal.ItemBuilder;
        /**
         * Makes the item fire resistant like netherite tools.
        */
        fireResistant(): Internal.ItemBuilder;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Item>;
        /**
         * Determines the animation of the item when used, e.g. eating food.
        */
        useAnimation(animation: Internal.UseAnim_): Internal.ItemBuilder;
        tier(t: Internal.Tier_): Internal.HandheldItemBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
        */
        use(use: Internal.ItemBuilder$UseCallback_): Internal.ItemBuilder;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
        */
        releaseUsing(releaseUsing: Internal.ItemBuilder$ReleaseUsingCallback_): Internal.ItemBuilder;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
        */
        containerItem(id: ResourceLocation_): Internal.ItemBuilder;
        wait(): void;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
        */
        burnTime(v: number): Internal.ItemBuilder;
        /**
         * Directlys set the item's texture json.
        */
        textureJson(json: com.google.gson.JsonObject_): Internal.ItemBuilder;
        static toArmorMaterial(o: any): Internal.ArmorMaterial;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
        */
        useDuration(useDuration: Internal.ToIntFunction_<Internal.ItemStack>): Internal.ItemBuilder;
        /**
         * Sets the attack speed of the tool.
        */
        speed(f: number): Internal.HandheldItemBuilder;
        getClass(): typeof any;
        /**
         * Makes the item fire resistant like netherite tools (or not).
        */
        fireResistant(isFireResistant: boolean): Internal.ItemBuilder;
        /**
         * Sets the item's texture by given key.
        */
        texture(key: string, tex: string): Internal.ItemBuilder;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
        */
        maxDamage(v: number): Internal.ItemBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        createItemProperties(): Internal.Item$Properties;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Sets the item's name dynamically.
        */
        name(name: Internal.ItemBuilder$NameCallback_): Internal.ItemBuilder;
        createObject(): Internal.Item;
        /**
         * Sets the base attack damage of the tool. Different tools have different baselines.
         * 
         * For example, a sword has a baseline of 3, while an axe has a baseline of 6.
         * 
         * The actual damage is the sum of the baseline and the attackDamageBonus from tier.
        */
        attackDamageBaseline(f: number): Internal.HandheldItemBuilder;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
        */
        glow(v: boolean): Internal.ItemBuilder;
        transformObject(arg0: any): any;
        /**
         * Directly set the item's model json.
        */
        modelJson(json: com.google.gson.JsonObject_): Internal.ItemBuilder;
        toString(): string;
        /**
         * Set the food properties of the item.
        */
        food(b: Internal.Consumer_<Internal.FoodBuilder>): Internal.ItemBuilder;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Item>;
        hashCode(): number;
        /**
         * Sets the item's texture (layer0).
        */
        texture(tex: string): Internal.ItemBuilder;
        transformObject(obj: Internal.Item_): Internal.Item;
        wait(arg0: number): void;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
        */
        barColor(barColor: Internal.Function_<Internal.ItemStack, dev.latvian.mods.rhino.mod.util.color.Color>): Internal.ItemBuilder;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Item>;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Item>;
        /**
         * Sets the attack damage bonus of the tool.
        */
        attackDamageBonus(f: number): Internal.HandheldItemBuilder;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        /**
         * @deprecated
        */
        group(g: string): Internal.ItemBuilder;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
    }
    type ShovelItemBuilder_ = ShovelItemBuilder;
    interface AccessorCarriageContraptionEntity {
        abstract railways$setCarriage(arg0: Internal.Carriage_): void;
        abstract railways$bindCarriage(): void;
    }
    type AccessorCarriageContraptionEntity_ = AccessorCarriageContraptionEntity;
    interface IImpregnable {
        abstract getTooltipDisplay(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        abstract impregnate(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        abstract isImpregnated(arg0: Internal.ItemStack_): boolean;
        abstract "impregnate(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        abstract getEntityType(arg0: Internal.ItemStack_): string;
        abstract "impregnate(net.minecraft.world.item.ItemStack,java.lang.String)"(arg0: Internal.ItemStack_, arg1: string): Internal.ItemStack;
        abstract impregnate(arg0: Internal.ItemStack_, arg1: string): Internal.ItemStack;
    }
    type IImpregnable_ = IImpregnable;
    interface RecordLoadable <T> extends Internal.Loadable<T> {
        comapFlatMap<M>(arg0: Internal.BiFunction_<T, Internal.ErrorFactory, M>, arg1: Internal.Function_<M, T>): Internal.RecordLoadable<M>;
        list(arg0: number): Internal.Loadable<Internal.List<T>>;
        mapWithValues<V>(arg0: number, arg1: Internal.Function_<T, V>): Internal.Loadable<Internal.Map<T, V>>;
        withLoader<A, B, C, D, E, F, G, H, I, J, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.Function11_<A, B, C, D, E, F, G, H, I, J, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        flatComap<M>(arg0: Internal.Function_<T, M>, arg1: Internal.BiFunction_<M, Internal.ErrorFactory, T>): Internal.RecordLoadable<M>;
        create<A, B, C, D, E, F, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.Function6_<A, B, C, D, E, F, R>): Internal.RecordLoadable<R>;
        withLoader<A, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.BiFunction_<A, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        requiredField<P>(arg0: string, arg1: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        create<A, B, C, D, E, F, G, H, I, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.Function9_<A, B, C, D, E, F, G, H, I, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.Function12_<A, B, C, D, E, F, G, H, I, J, K, L, R>): Internal.RecordLoadable<R>;
        abstract deserialize(arg0: com.google.gson.JsonObject_, arg1: Internal.TypedMap_): T;
        array(arg0: Internal.IntFunction_<T[]>, arg1: boolean, arg2: number): Internal.ArrayLoadable<T[]>;
        create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.RecordField_<N, R>, arg14: Internal.RecordField_<O, R>, arg15: Internal.RecordField_<P, R>, arg16: Internal.Function16_<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R>): Internal.RecordLoadable<R>;
        defaultField<P>(arg0: string, arg1: T, arg2: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        create<A, B, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.BiFunction_<A, B, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.Function8_<A, B, C, D, E, F, G, H, R>): Internal.RecordLoadable<R>;
        create<A, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.Function_<A, R>): Internal.RecordLoadable<R>;
        mapWithKeys<K>(arg0: number, arg1: Internal.Function_<T, K>): Internal.Loadable<Internal.Map<K, T>>;
        withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.RecordField_<N, R>, arg14: Internal.RecordField_<O, R>, arg15: Internal.Function16_<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        defaultField<P>(arg0: string, arg1: T, arg2: boolean, arg3: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        withLoader<R>(arg0: Internal.Function_<Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.Function13_<A, B, C, D, E, F, G, H, I, J, K, L, M, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.Function11_<A, B, C, D, E, F, G, H, I, J, K, R>): Internal.RecordLoadable<R>;
        withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.RecordField_<N, R>, arg14: Internal.Function15_<A, B, C, D, E, F, G, H, I, J, K, L, M, N, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.Function5_<A, B, C, D, E, R>): Internal.RecordLoadable<R>;
        serialize(arg0: T, arg1: Internal.Type_, arg2: Internal.JsonSerializationContext_): com.google.gson.JsonElement;
        create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.RecordField_<N, R>, arg14: Internal.Function14_<A, B, C, D, E, F, G, H, I, J, K, L, M, N, R>): Internal.RecordLoadable<R>;
        list(): Internal.Loadable<Internal.List<T>>;
        withLoader<A, B, C, D, E, F, G, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.Function8_<A, B, C, D, E, F, G, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        set(): Internal.Loadable<Internal.Set<T>>;
        withLoader<A, B, C, D, E, F, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.Function7_<A, B, C, D, E, F, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        withLoader<A, B, C, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.Function4_<A, B, C, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        serialize(arg0: T): com.google.gson.JsonElement;
        convert(arg0: com.google.gson.JsonElement_, arg1: string): T;
        withLoader<A, B, C, D, E, F, G, H, I, J, K, L, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.Function13_<A, B, C, D, E, F, G, H, I, J, K, L, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.RecordField_<N, R>, arg14: Internal.RecordField_<O, R>, arg15: Internal.Function15_<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, R>): Internal.RecordLoadable<R>;
        create<A, B, C, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.Function3_<A, B, C, R>): Internal.RecordLoadable<R>;
        deserialize(arg0: com.google.gson.JsonObject_): T;
        withLoader<A, B, C, D, E, F, G, H, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.Function9_<A, B, C, D, E, F, G, H, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        abstract encode(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        getOrDefault(arg0: com.google.gson.JsonObject_, arg1: string, arg2: T): T;
        getIfPresent(arg0: com.google.gson.JsonObject_, arg1: string, arg2: Internal.TypedMap_): T;
        withLoader<A, B, C, D, E, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.Function6_<A, B, C, D, E, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        withLoader<A, B, C, D, E, F, G, H, I, J, K, L, M, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.RecordField_<L, R>, arg12: Internal.RecordField_<M, R>, arg13: Internal.Function14_<A, B, C, D, E, F, G, H, I, J, K, L, M, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        getOrDefault(arg0: com.google.gson.JsonObject_, arg1: string, arg2: T, arg3: Internal.TypedMap_): T;
        array(arg0: Internal.IntFunction_<T[]>, arg1: boolean, arg2: number, arg3: number): Internal.ArrayLoadable<T[]>;
        flatXmap(arg0: Internal.Function_<any, any>, arg1: Internal.Function_<any, any>): Internal.Loadable<any>;
        compact(arg0: Internal.Loadable_<T>, arg1: Internal.Predicate_<T>): this;
        create<A, B, C, D, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.Function4_<A, B, C, D, R>): Internal.RecordLoadable<R>;
        abstract decode(arg0: Internal.FriendlyByteBuf_, arg1: Internal.TypedMap_): T;
        abstract serialize(arg0: T, arg1: com.google.gson.JsonObject_): void;
        withLoader<A, B, C, D, E, F, G, H, I, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.Function10_<A, B, C, D, E, F, G, H, I, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        validate(arg0: Internal.BiFunction_<any, any, any>): Internal.Loadable<any>;
        nullableField<P>(arg0: string, arg1: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        deserialize(arg0: com.google.gson.JsonElement_, arg1: Internal.Type_, arg2: Internal.JsonDeserializationContext_): T;
        tryDirectField<P>(arg0: string, arg1: Internal.Function_<P, T>, ...arg2: string[]): Internal.LoadableField<T, P>;
        directField<P>(arg0: Internal.Function_<P, T>): Internal.RecordField<T, P>;
        create<A, B, C, D, E, F, G, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.Function7_<A, B, C, D, E, F, G, R>): Internal.RecordLoadable<R>;
        decode(arg0: Internal.FriendlyByteBuf_): T;
        withLoader<A, B, C, D, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.Function5_<A, B, C, D, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        convert(arg0: com.google.gson.JsonElement_, arg1: string, arg2: Internal.TypedMap_): T;
        getIfPresent(arg0: com.google.gson.JsonObject_, arg1: string): T;
        withLoader<A, B, C, D, E, F, G, H, I, J, K, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.RecordField_<K, R>, arg11: Internal.Function12_<A, B, C, D, E, F, G, H, I, J, K, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        xmap<M>(arg0: Internal.BiFunction_<T, Internal.ErrorFactory, M>, arg1: Internal.BiFunction_<M, Internal.ErrorFactory, T>): Internal.RecordLoadable<M>;
        set(arg0: number): Internal.Loadable<Internal.Set<T>>;
        withLoader<A, B, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.Function3_<A, B, Internal.RecordLoadable<R>, R>): Internal.RecordLoadable<R>;
        create<A, B, C, D, E, F, G, H, I, J, R>(arg0: Internal.RecordField_<A, R>, arg1: Internal.RecordField_<B, R>, arg2: Internal.RecordField_<C, R>, arg3: Internal.RecordField_<D, R>, arg4: Internal.RecordField_<E, R>, arg5: Internal.RecordField_<F, R>, arg6: Internal.RecordField_<G, R>, arg7: Internal.RecordField_<H, R>, arg8: Internal.RecordField_<I, R>, arg9: Internal.RecordField_<J, R>, arg10: Internal.Function10_<A, B, C, D, E, F, G, H, I, J, R>): Internal.RecordLoadable<R>;
    }
    type RecordLoadable_<T> = RecordLoadable<T>;
    class ToolDefinitionData {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getHook<T>(arg0: Internal.ModuleHook_<T>): T;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getHooks(): Internal.ModuleHookMap;
        get class(): typeof any
        get hooks(): Internal.ModuleHookMap
        static readonly LOADABLE: Internal.RecordLoadable<Internal.ToolDefinitionData>;
        static readonly EMPTY: (Internal.ToolDefinitionData) & (Internal.ToolDefinitionData);
    }
    type ToolDefinitionData_ = ToolDefinitionData;
    class StoredItemStack {
        constructor(stack: Internal.ItemStack_)
        getClass(): typeof any;
        toPacket(buf: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        static fromPacket(buf: Internal.FriendlyByteBuf_): Internal.StoredItemStack;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getForReading(): Internal.ItemStack;
        getItemAndStackCopy<T extends Internal.Item>(): Internal.ItemAndStack<T>;
        mapIf<T, R>(clazz: T, func: Internal.BiFunction_<T, Internal.ItemStack, R>): Internal.Optional<R>;
        wait(): void;
        getItem(): Internal.Item;
        wait(arg0: number): void;
        getCopy(): Internal.ItemStack;
        equals(obj: any): boolean;
        get class(): typeof any
        get empty(): boolean
        get forReading(): Internal.ItemStack
        get itemAndStackCopy(): Internal.ItemAndStack<T>
        get item(): Internal.Item
        get copy(): Internal.ItemStack
        static readonly EMPTY: (Internal.StoredItemStack) & (Internal.StoredItemStack);
        static readonly CODEC: Internal.Codec<Internal.StoredItemStack>;
    }
    type StoredItemStack_ = StoredItemStack;
    interface MixinBlockEntityType {
        abstract crackerslib$setValidBlocks(arg0: Internal.Set_<Internal.Block>): void;
        abstract crackerslib$getValidBlocks(): Internal.Set<Internal.Block>;
    }
    type MixinBlockEntityType_ = MixinBlockEntityType;
    class EbonyArrowItem extends Internal.ArrowItem {
        constructor(settings: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, context: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        createArrow(world: Internal.Level_, stack: Internal.ItemStack_, shooter: Internal.LivingEntity_): Internal.AbstractArrow;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$fkh000$goety$createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type EbonyArrowItem_ = EbonyArrowItem;
    class AddOreProperties {
        constructor()
        getClass(): typeof any;
        /**
         * @deprecated
        */
        aboveBottom(y: number): Internal.VerticalAnchor;
        /**
         * @deprecated
        */
        belowTop(y: number): Internal.VerticalAnchor;
        "triangleHeight(net.minecraft.world.level.levelgen.VerticalAnchor,net.minecraft.world.level.levelgen.VerticalAnchor)"(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        triangleHeight(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        triangleHeight(min: number, max: number): this;
        "count(int)"(c: number): this;
        count(c: Internal.IntProvider_): this;
        "count(net.minecraft.util.valueproviders.IntProvider)"(c: Internal.IntProvider_): this;
        chance(c: number): this;
        uniformHeight(min: number, max: number): this;
        uniformHeight(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        size(s: number): this;
        toString(): string;
        "uniformHeight(net.minecraft.world.level.levelgen.VerticalAnchor,net.minecraft.world.level.levelgen.VerticalAnchor)"(absolute: Internal.VerticalAnchor_, absolute1: Internal.VerticalAnchor_): this;
        /**
         * @deprecated
        */
        bottom(): Internal.VerticalAnchor;
        "uniformHeight(int,int)"(min: number, max: number): this;
        notifyAll(): void;
        count(c: number): this;
        addTarget(ruleTest: Internal.RuleTest_, targetState: BlockStatePredicate_): void;
        hashCode(): number;
        squared(): this;
        wait(): void;
        "triangleHeight(int,int)"(min: number, max: number): this;
        /**
         * @deprecated
        */
        top(): Internal.VerticalAnchor;
        wait(arg0: number): void;
        count(min: number, max: number): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        height: Internal.HeightRangePlacement;
        retrogen: number;
        count: Internal.IntProvider;
        worldgenLayer: Internal.GenerationStep$Decoration;
        chance: number;
        squared: boolean;
        noSurface: number;
        biomes: Internal.BiomeFilter;
        size: number;
        id: ResourceLocation;
        targets: Internal.List<Internal.OreConfiguration$TargetBlockState>;
    }
    type AddOreProperties_ = AddOreProperties;
    interface LivingEntityExtensions {
        abstract artifacts$getPocketPistonLength(): number;
        (): number;
    }
    type LivingEntityExtensions_ = LivingEntityExtensions | (()=> number);
    class VarHandle$VarHandleDesc extends Internal.DynamicConstantDesc<Internal.VarHandle> {
        resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): Internal.VarHandle;
        getClass(): typeof any;
        constantName(): string;
        toString(): string;
        constantType(): Internal.ClassDesc;
        static ofArray(arg0: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        notifyAll(): void;
        static ofField(arg0: Internal.ClassDesc_, arg1: string, arg2: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        bootstrapArgsList(): Internal.List<Internal.ConstantDesc>;
        notify(): void;
        static ofStaticField(arg0: Internal.ClassDesc_, arg1: string, arg2: Internal.ClassDesc_): Internal.VarHandle$VarHandleDesc;
        wait(arg0: number, arg1: number): void;
        static ofCanonical<T>(arg0: Internal.DirectMethodHandleDesc_, arg1: string, arg2: Internal.ClassDesc_, arg3: Internal.ConstantDesc_[]): Internal.ConstantDesc;
        varType(): Internal.ClassDesc;
        bootstrapMethod(): Internal.DirectMethodHandleDesc;
        hashCode(): number;
        bootstrapArgs(): Internal.ConstantDesc[];
        wait(): void;
        static of<T>(arg0: Internal.DirectMethodHandleDesc_): Internal.DynamicConstantDesc<T>;
        wait(arg0: number): void;
        static ofNamed<T>(arg0: Internal.DirectMethodHandleDesc_, arg1: string, arg2: Internal.ClassDesc_, ...arg3: Internal.ConstantDesc_[]): Internal.DynamicConstantDesc<T>;
        equals(arg0: any): boolean;
        static of<T>(arg0: Internal.DirectMethodHandleDesc_, ...arg1: Internal.ConstantDesc_[]): Internal.DynamicConstantDesc<T>;
        get class(): typeof any
    }
    type VarHandle$VarHandleDesc_ = VarHandle$VarHandleDesc;
    abstract class RenderLayer <T extends Internal.Entity, M extends Internal.EntityModel<T>> implements Internal.LayerRendererAccessor<any, any>, Internal.IUpperPartHelper {
        constructor(arg0: Internal.RenderLayerParent_<T, M>)
        getClass(): typeof any;
        toString(): string;
        isUpperPart(): boolean;
        getTextureLocation(arg0: T): ResourceLocation;
        notifyAll(): void;
        abstract render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: T, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getRenderer(): Internal.RenderLayerParent<any, any>;
        setUpperPart(bl: boolean): void;
        notify(): void;
        getParentModel(): M;
        wait(arg0: number, arg1: number): void;
        static coloredCutoutModelCopyLayerRender<T extends Internal.LivingEntity>(arg0: Internal.EntityModel_<T>, arg1: Internal.EntityModel_<T>, arg2: ResourceLocation_, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: T, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        hashCode(): number;
        static renderColoredCutoutModel<T extends Internal.LivingEntity>(arg0: Internal.EntityModel_<T>, arg1: ResourceLocation_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: T, arg6: number, arg7: number, arg8: number): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get upperPart(): boolean
        get renderer(): Internal.RenderLayerParent<any, any>
        set upperPart(bl: boolean)
        get parentModel(): M
    }
    type RenderLayer_<T extends Internal.Entity, M extends Internal.EntityModel<T>> = RenderLayer<T, M>;
    class DataLayer {
        constructor()
        constructor(arg0: number)
        constructor(arg0: number[])
        getClass(): typeof any;
        copy(): this;
        toString(): string;
        isDefinitelyFilledWith(arg0: number): boolean;
        notifyAll(): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        get(arg0: number, arg1: number, arg2: number): number;
        getData(): number[];
        wait(): void;
        layerToString(arg0: number): string;
        fill(arg0: number): void;
        wait(arg0: number): void;
        isDefinitelyHomogenous(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get empty(): boolean
        get data(): number[]
        get definitelyHomogenous(): boolean
        data: number[];
        static readonly LAYER_SIZE: (128) & (number);
        static readonly SIZE: (2048) & (number);
        static readonly LAYER_COUNT: (16) & (number);
    }
    type DataLayer_ = DataLayer;
    interface BiomeSourceAccessor {
        abstract getResourceKeyMap(): Internal.Map<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>;
        abstract expandBiomesWith(arg0: Internal.Set_<Internal.Holder<Internal.Biome>>): void;
        abstract setResourceKeyMap(arg0: Internal.Map_<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>): void;
        get resourceKeyMap(): Internal.Map<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>
        set resourceKeyMap(arg0: Internal.Map_<Internal.ResourceKey<Internal.Biome>, Internal.Holder<Internal.Biome>>)
    }
    type BiomeSourceAccessor_ = BiomeSourceAccessor;
    class AtomicLong extends number implements Internal.Serializable {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        addAndGet(arg0: number): number;
        doubleValue(): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        getAndAccumulate(arg0: number, arg1: Internal.LongBinaryOperator_): number;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        incrementAndGet(): number;
        floatValue(): number;
        getAndIncrement(): number;
        setPlain(arg0: number): void;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        compareAndExchange(arg0: number, arg1: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        compareAndSet(arg0: number, arg1: number): boolean;
        intValue(): number;
        accumulateAndGet(arg0: number, arg1: Internal.LongBinaryOperator_): number;
        getAndUpdate(arg0: Internal.LongUnaryOperator_): number;
        set(arg0: number): void;
        getAndSet(arg0: number): number;
        getAndAdd(arg0: number): number;
        getAcquire(): number;
        getAndDecrement(): number;
        longValue(): number;
        get(): number;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        getPlain(): number;
        decrementAndGet(): number;
        toString(): string;
        updateAndGet(arg0: Internal.LongUnaryOperator_): number;
        lazySet(arg0: number): void;
        notifyAll(): void;
        setRelease(arg0: number): void;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getOpaque(): number;
        shortValue(): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setOpaque(arg0: number): void;
        byteValue(): number;
        get class(): typeof any
        get andIncrement(): number
        set plain(arg0: number)
        get acquire(): number
        get andDecrement(): number
        get plain(): number
        set release(arg0: number)
        get opaque(): number
        set opaque(arg0: number)
    }
    type AtomicLong_ = AtomicLong;
    class IntegratedServer extends Internal.MinecraftServer {
        constructor(arg0: Internal.Thread_, arg1: Internal.Minecraft_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.PackRepository_, arg4: Internal.WorldStem_, arg5: Internal.Services_, arg6: Internal.ChunkProgressListenerFactory_)
        getConnection(): Internal.ServerConnectionListener;
        mfix$getLastTickStartTime(): number;
        self(): Internal.MinecraftServer;
        getPlayerIdleTimeout(): number;
        getCompressionThreshold(): number;
        fillServerSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        getResourceManager(): Internal.ResourceManager;
        getProxy(): Internal.Proxy;
        setDefaultGameType(arg0: Internal.GameType_): void;
        getAdvancement(id: ResourceLocation_): Internal.AdvancementJS;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        "submit(java.util.function.Supplier)"<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        handler$ibh000$citadel$beforeServerTick(arg0: Internal.CallbackInfo_): void;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        /**
         * @deprecated
        */
        markWorldsDirty(): void;
        "tell(java.lang.Object)"(arg0: any): void;
        "tell(net.minecraft.network.chat.Component)"(message: net.minecraft.network.chat.Component_): void;
        usesAuthentication(): boolean;
        tell(arg0: any): void;
        scheduleInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        getScaledTrackingDistance(arg0: number): number;
        runCommandSilent(command: string): number;
        scheduleRepeatingInTicks(ticks: number, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        publishServer(arg0: Internal.GameType_, arg1: boolean, arg2: number): boolean;
        getFrameTimer(): Internal.FrameTimer;
        hasGui(): boolean;
        getPendingTasksCount(): number;
        setDemo(arg0: boolean): void;
        alwaysAccepts(): boolean;
        setUUID(arg0: Internal.UUID_): void;
        isUnderSpawnProtection(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        isDedicated(): boolean;
        /**
         * @deprecated
        */
        forgeGetWorldMap(): Internal.Map<Internal.ResourceKey<Internal.Level>, Internal.ServerLevel>;
        logChatMessage(arg0: net.minecraft.network.chat.Component_, arg1: Internal.ChatType$Bound_, arg2: string): void;
        getWorldPath(arg0: Internal.LevelResource_): Internal.Path;
        "doRunTask(java.lang.Runnable)"(arg0: Internal.Runnable_): void;
        executeIfPossible(arg0: Internal.Runnable_): void;
        getClass(): typeof any;
        cancelRecordingMetrics(): void;
        isSingleplayer(): boolean;
        setPreventProxyConnections(arg0: boolean): void;
        getServerResources(): Internal.MinecraftServer$ReloadableResources;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Internal.TickTask>): Internal.CompletableFuture<Source>;
        isRecordingMetrics(): boolean;
        getMasterMs(): number;
        getPersistentData(): Internal.CompoundTag;
        shouldRun(arg0: Internal.Runnable_): boolean;
        setPlayerList(arg0: Internal.PlayerList_): void;
        setLocalIp(arg0: string): void;
        setId(arg0: string): void;
        executeBlocking(arg0: Internal.Runnable_): void;
        getScheduledEvents(): Internal.ScheduledEvents;
        createGameModeForPlayer(arg0: Internal.ServerPlayer_): Internal.ServerPlayerGameMode;
        isNetherEnabled(): boolean;
        reloadResources(arg0: Internal.Collection_<string>): Internal.CompletableFuture<void>;
        isEnforceWhitelist(): boolean;
        "shouldRun(net.minecraft.server.TickTask)"(arg0: Internal.TickTask_): boolean;
        isCurrentlySaving(): boolean;
        hidesOnlinePlayers(): boolean;
        getProfileRepository(): Internal.GameProfileRepository;
        getProfileCache(): Internal.GameProfileCache;
        getCommandStorage(): Internal.CommandStorage;
        wait(arg0: number): void;
        setDifficulty(arg0: Internal.Difficulty_, arg1: boolean): void;
        getXaeroMinimapServerData(): xaero.common.server.MinecraftServerData;
        static spin<S extends Internal.MinecraftServer>(arg0: Internal.Function_<Internal.Thread, S>): S;
        enforceSecureProfile(): boolean;
        setFlightAllowed(arg0: boolean): void;
        static configurePackRepository(arg0: Internal.PackRepository_, arg1: Internal.DataPackConfig_, arg2: boolean, arg3: Internal.FeatureFlagSet_): Internal.WorldDataConfiguration;
        getServerModName(): string;
        acceptsFailure(): boolean;
        getNextTickTime(): number;
        isHardcore(): boolean;
        isPublished(): boolean;
        startTimeProfiler(): void;
        getPlayerCount(): number;
        getOverworld(): Internal.ServerLevel;
        getName(): net.minecraft.network.chat.Component;
        setXaeroWorldMapServerData(arg0: Internal.MinecraftServerData_): void;
        getRateLimitPacketsPerSecond(): number;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        getSingleplayerProfile(): Internal.GameProfile;
        getServerResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>;
        wrapRunnable(arg0: Internal.Runnable_): Internal.TickTask;
        fillSystemReport(arg0: Internal.SystemReport_): Internal.SystemReport;
        isReady(): boolean;
        setPort(arg0: number): void;
        name(): string;
        shouldInformAdmins(): boolean;
        wait(): void;
        setDifficultyLocked(arg0: boolean): void;
        stop(): void;
        setPvpAllowed(arg0: boolean): void;
        forceSynchronousWrites(): boolean;
        getTickTime(arg0: Internal.ResourceKey_<Internal.Level>): number[];
        dropAllTasks(): void;
        getFunctionCompilationLevel(): number;
        isResourcePackRequired(): boolean;
        getProfiler(): Internal.ProfilerFiller;
        getAverageTickTime(): number;
        scheduleRepeating(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        setSingleplayerProfile(arg0: Internal.GameProfile_): void;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        kickUnlistedPlayers(arg0: Internal.CommandSourceStack_): void;
        "shouldRun(java.lang.Runnable)"(arg0: Internal.Runnable_): boolean;
        getRunningThread(): Internal.Thread;
        startRecordingMetrics(arg0: Internal.Consumer_<Internal.ProfileResults>, arg1: Internal.Consumer_<Internal.Path>): void;
        getWorldScreenshotFile(): Internal.Optional<Internal.Path>;
        getXaeroWorldMapServerData(): Internal.MinecraftServerData;
        getStructureManager(): Internal.StructureTemplateManager;
        halt(arg0: boolean): void;
        setXaeroMinimapServerData(arg0: xaero.common.server.MinecraftServerData_): void;
        levelKeys(): Internal.Set<Internal.ResourceKey<Internal.Level>>;
        getSpawnProtectionRadius(): number;
        getProfileKeySignatureValidator(): Internal.SignatureValidator;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getRecipeManager(): Internal.RecipeManager;
        doRunTask(arg0: Internal.Runnable_): void;
        getWorldData(): Internal.WorldData;
        execute(arg0: Internal.Runnable_): void;
        "doRunTask(net.minecraft.server.TickTask)"(arg0: Internal.TickTask_): void;
        setMotd(arg0: string): void;
        isSameThread(): boolean;
        getPreventProxyConnections(): boolean;
        equals(arg0: any): boolean;
        isFlightAllowed(): boolean;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        isTimeProfilerRunning(): boolean;
        onServerCrash(arg0: Internal.CrashReport_): void;
        shouldRun(arg0: Internal.TickTask_): boolean;
        getFunctions(): Internal.ServerFunctionManager;
        setEnforceWhitelist(arg0: boolean): void;
        isShutdown(): boolean;
        stopTimeProfiler(): Internal.ProfileResults;
        resetGlobalTickLengthMs(): void;
        getDefaultGameType(): Internal.GameType;
        getTickCount(): number;
        runningTask(): boolean;
        dumpServerProperties(arg0: Internal.Path_): void;
        "getLevel(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): Internal.ServerLevel;
        getPackRepository(): Internal.PackRepository;
        getPlayerList(): Internal.PlayerList;
        loadLevel(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        finishRecordingMetrics(): void;
        getLevel(arg0: Internal.ResourceKey_<Internal.Level>): Internal.ServerLevel;
        getPlayer(selector: Internal.PlayerSelector_): Internal.ServerPlayer;
        getChatDecorator(): Internal.ChatDecorator;
        getPort(): number;
        runServer(): void;
        getGameRules(): Internal.GameRules;
        tickChildren(arg0: Internal.BooleanSupplier_): void;
        getCommands(): Internal.Commands;
        isSpawningAnimals(): boolean;
        localvar$jff000$kubejs$wrapResourceManager(original: Internal.CloseableResourceManager_): Internal.CloseableResourceManager;
        initServer(): boolean;
        getServerDirectory(): Internal.File;
        setUsesAuthentication(arg0: boolean): void;
        getAllLevels(): Internal.Iterable<Internal.ServerLevel>;
        setGlobalTickLengthMs(arg0: number): void;
        isStopped(): boolean;
        toString(): string;
        "getLevel(net.minecraft.resources.ResourceLocation)"(dimension: ResourceLocation_): Internal.ServerLevel;
        sendData(channel: string): void;
        notifyAll(): void;
        runAllTasks(): void;
        getStatusJson(): string;
        initializeKeyPair(): void;
        getCustomBossEvents(): Internal.CustomBossEvents;
        getLocalIp(): string;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        areNpcsEnabled(): boolean;
        getAbsoluteMaxWorldSize(): number;
        getForcedGameType(): Internal.GameType;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        invalidateStatus(): void;
        overworld(): Internal.ServerLevel;
        getLevel(dimension: ResourceLocation_): Internal.ServerLevel;
        getStatus(): Internal.ServerStatus;
        setPlayerIdleTimeout(arg0: number): void;
        tickServer(arg0: Internal.BooleanSupplier_): void;
        getScoreboard(): Internal.ServerScoreboard;
        handler$lfj000$ae2$injectSpatialLevel(arg0: Internal.ChunkProgressListener_, arg1: Internal.CallbackInfo_): void;
        addTickable(arg0: Internal.Runnable_): void;
        createCommandSourceStack(): Internal.CommandSourceStack;
        tell(arg0: Internal.TickTask_): void;
        notify(): void;
        schedule(timer: Internal.TemporalAmount_, callback: Internal.ScheduledEvents$Callback_): Internal.ScheduledEvents$ScheduledEvent;
        isCommandBlockEnabled(): boolean;
        waitForTasks(): void;
        getFile(arg0: string): Internal.File;
        getSpawnRadius(arg0: Internal.ServerLevel_): number;
        repliesToStatus(): boolean;
        stopRecordingMetrics(): void;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        getAdvancements(): Internal.ServerAdvancementManager;
        getMaxChainedNeighborUpdates(): number;
        forceTimeSynchronization(): void;
        getMotd(): string;
        isRunning(): boolean;
        getSessionService(): Internal.MinecraftSessionService;
        getOperatorUserPermissionLevel(): number;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        registryAccess(): Internal.RegistryAccess$Frozen;
        scheduleExecutables(): boolean;
        getMaxPlayers(): number;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSpawningMonsters(): boolean;
        forceDifficulty(): void;
        getKeyPair(): Internal.KeyPair;
        isPvpAllowed(): boolean;
        waitUntilNextTick(): void;
        wait(arg0: number, arg1: number): void;
        getServerVersion(): string;
        isSingleplayerOwner(arg0: Internal.GameProfile_): boolean;
        onServerExit(): void;
        doRunTask(arg0: Internal.TickTask_): void;
        handler$enl000$smoothboot$onInit(arg0: Internal.Thread_, arg1: Internal.Minecraft_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.PackRepository_, arg4: Internal.WorldStem_, arg5: Internal.Services_, arg6: Internal.ChunkProgressListenerFactory_, arg7: Internal.CallbackInfo_): void;
        createTextFilterForPlayer(arg0: Internal.ServerPlayer_): Internal.TextFilter;
        isDemo(): boolean;
        getReloadableResources(): Internal.MinecraftServer$ReloadableResources;
        getProfilePermissions(arg0: Internal.GameProfile_): number;
        getData(): Internal.AttachedData<any>;
        getLootData(): Internal.LootDataManager;
        getEntities(): Internal.EntityArrayList;
        "tell(net.minecraft.server.TickTask)"(arg0: Internal.TickTask_): void;
        isEpollEnabled(): boolean;
        tell(message: net.minecraft.network.chat.Component_): void;
        shouldRconBroadcast(): boolean;
        createLevels(arg0: Internal.ChunkProgressListener_): void;
        getModdedStatus(): Internal.ModCheck;
        getPlayerNames(): string[];
        getPlayers(): Internal.EntityArrayList;
        hashCode(): number;
        close(): void;
        getFixerUpper(): Internal.DataFixer;
        restoreInventories(): Internal.Map<any, any>;
        runCommand(command: string): number;
        get connection(): Internal.ServerConnectionListener
        get playerIdleTimeout(): number
        get compressionThreshold(): number
        get resourceManager(): Internal.ResourceManager
        get proxy(): Internal.Proxy
        set defaultGameType(arg0: Internal.GameType_)
        get frameTimer(): Internal.FrameTimer
        get pendingTasksCount(): number
        set demo(arg0: boolean)
        set UUID(arg0: Internal.UUID_)
        get dedicated(): boolean
        get class(): typeof any
        get singleplayer(): boolean
        set preventProxyConnections(arg0: boolean)
        get serverResources(): Internal.MinecraftServer$ReloadableResources
        get recordingMetrics(): boolean
        get masterMs(): number
        get persistentData(): Internal.CompoundTag
        set playerList(arg0: Internal.PlayerList_)
        set localIp(arg0: string)
        set id(arg0: string)
        get scheduledEvents(): Internal.ScheduledEvents
        get netherEnabled(): boolean
        get enforceWhitelist(): boolean
        get currentlySaving(): boolean
        get profileRepository(): Internal.GameProfileRepository
        get profileCache(): Internal.GameProfileCache
        get commandStorage(): Internal.CommandStorage
        get xaeroMinimapServerData(): xaero.common.server.MinecraftServerData
        set flightAllowed(arg0: boolean)
        get serverModName(): string
        get nextTickTime(): number
        get hardcore(): boolean
        get published(): boolean
        get playerCount(): number
        get overworld(): Internal.ServerLevel
        get name(): net.minecraft.network.chat.Component
        set xaeroWorldMapServerData(arg0: Internal.MinecraftServerData_)
        get rateLimitPacketsPerSecond(): number
        get singleplayerProfile(): Internal.GameProfile
        get serverResourcePack(): Internal.Optional<Internal.MinecraftServer$ServerResourcePackInfo>
        get ready(): boolean
        set port(arg0: number)
        set difficultyLocked(arg0: boolean)
        set pvpAllowed(arg0: boolean)
        get functionCompilationLevel(): number
        get resourcePackRequired(): boolean
        get profiler(): Internal.ProfilerFiller
        get averageTickTime(): number
        set singleplayerProfile(arg0: Internal.GameProfile_)
        get runningThread(): Internal.Thread
        get worldScreenshotFile(): Internal.Optional<Internal.Path>
        get xaeroWorldMapServerData(): Internal.MinecraftServerData
        get structureManager(): Internal.StructureTemplateManager
        set xaeroMinimapServerData(arg0: xaero.common.server.MinecraftServerData_)
        get spawnProtectionRadius(): number
        get profileKeySignatureValidator(): Internal.SignatureValidator
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get recipeManager(): Internal.RecipeManager
        get worldData(): Internal.WorldData
        set motd(arg0: string)
        get sameThread(): boolean
        get preventProxyConnections(): boolean
        get flightAllowed(): boolean
        get timeProfilerRunning(): boolean
        get functions(): Internal.ServerFunctionManager
        set enforceWhitelist(arg0: boolean)
        get shutdown(): boolean
        get defaultGameType(): Internal.GameType
        get tickCount(): number
        get packRepository(): Internal.PackRepository
        get playerList(): Internal.PlayerList
        get displayName(): net.minecraft.network.chat.Component
        get chatDecorator(): Internal.ChatDecorator
        get port(): number
        get gameRules(): Internal.GameRules
        get commands(): Internal.Commands
        get spawningAnimals(): boolean
        get serverDirectory(): Internal.File
        set usesAuthentication(arg0: boolean)
        get allLevels(): Internal.Iterable<Internal.ServerLevel>
        set globalTickLengthMs(arg0: number)
        get stopped(): boolean
        get statusJson(): string
        get customBossEvents(): Internal.CustomBossEvents
        get localIp(): string
        get absoluteMaxWorldSize(): number
        get forcedGameType(): Internal.GameType
        get status(): Internal.ServerStatus
        set playerIdleTimeout(arg0: number)
        get scoreboard(): Internal.ServerScoreboard
        get commandBlockEnabled(): boolean
        get advancements(): Internal.ServerAdvancementManager
        get maxChainedNeighborUpdates(): number
        get motd(): string
        get running(): boolean
        get sessionService(): Internal.MinecraftSessionService
        get operatorUserPermissionLevel(): number
        get maxPlayers(): number
        get spawningMonsters(): boolean
        get keyPair(): Internal.KeyPair
        get pvpAllowed(): boolean
        get serverVersion(): string
        get demo(): boolean
        get reloadableResources(): Internal.MinecraftServer$ReloadableResources
        get data(): Internal.AttachedData<any>
        get lootData(): Internal.LootDataManager
        get entities(): Internal.EntityArrayList
        get epollEnabled(): boolean
        get moddedStatus(): Internal.ModCheck
        get playerNames(): string[]
        get players(): Internal.EntityArrayList
        get fixerUpper(): Internal.DataFixer
    }
    type IntegratedServer_ = IntegratedServer;
    class MarimorphosisRecipe$Serializer implements Internal.RecipeSerializer<Internal.MarimorphosisRecipe> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.MarimorphosisRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.MarimorphosisRecipe;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.MarimorphosisRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,vazkii.botania.common.crafting.MarimorphosisRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MarimorphosisRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.MarimorphosisRecipe;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.MarimorphosisRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MarimorphosisRecipe_): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type MarimorphosisRecipe$Serializer_ = MarimorphosisRecipe$Serializer;
    class SmallDripleafBlock extends Internal.DoublePlantBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        static preventCreativeDropFromBottomPart(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        handler$kik000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        mayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static copyWaterloggedFrom(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        modifyReturnValue$zil000$bbb$mayPlaceOn(original: boolean, state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        handler$foo000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static placeAt(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number): void;
        handler$ckb002$immersive_weathering$mayPlaceOn(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly AABB_OFFSET: (6.0) & (number);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type SmallDripleafBlock_ = SmallDripleafBlock;
    class DayOfWeek extends Internal.Enum<Internal.DayOfWeek> implements Internal.TemporalAccessor, Internal.TemporalAdjuster {
        getClass(): typeof any;
        minus(arg0: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static of(arg0: number): Internal.DayOfWeek;
        "compareTo(java.time.DayOfWeek)"(arg0: Internal.DayOfWeek_): number;
        getLong(arg0: Internal.TemporalField_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DayOfWeek>>;
        getValue(): number;
        isSupported(arg0: Internal.TemporalField_): boolean;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        compareTo(arg0: Internal.DayOfWeek_): number;
        plus(arg0: number): this;
        toString(): string;
        static from(arg0: Internal.TemporalAccessor_): Internal.DayOfWeek;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        notifyAll(): void;
        static values(): Internal.DayOfWeek[];
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        name(): string;
        hashCode(): number;
        get(arg0: Internal.TemporalField_): number;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.DayOfWeek;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.DayOfWeek;
        get class(): typeof any
        get value(): number
        get declaringClass(): typeof Internal.DayOfWeek
        static readonly SUNDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly SATURDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly THURSDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly FRIDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly MONDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly WEDNESDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
        static readonly TUESDAY: (Internal.DayOfWeek) & (Internal.DayOfWeek);
    }
    type DayOfWeek_ = DayOfWeek | "tuesday" | "friday" | "thursday" | "monday" | "saturday" | "sunday" | "wednesday";
    interface ClientboundLevelChunkPacketData$BlockEntityTagOutput {
        abstract accept(arg0: BlockPos_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        (arg0: BlockPos, arg1: Internal.BlockEntityType<any>, arg2: Internal.CompoundTag): void;
    }
    type ClientboundLevelChunkPacketData$BlockEntityTagOutput_ = ClientboundLevelChunkPacketData$BlockEntityTagOutput | ((arg0: BlockPos, arg1: Internal.BlockEntityType<any>, arg2: Internal.CompoundTag)=> void);
    class MaterialStatsId extends Internal.ResourceId {
        constructor(arg0: ResourceLocation_)
        constructor(arg0: string, arg1: string)
        constructor(arg0: string)
        static isValidNamespace(arg0: string): boolean;
        compareTo(arg0: ResourceLocation_): number;
        toLanguageKey(arg0: string): string;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        static tryParse(arg0: string): Internal.MaterialStatsId;
        notify(): void;
        compareTo(arg0: any): number;
        static tryBuild(arg0: string, arg1: string): Internal.MaterialStatsId;
        static tryBuild(arg0: string, arg1: string): ResourceLocation;
        static isAllowedInResourceLocation(arg0: string): boolean;
        static tryParse(arg0: string): ResourceLocation;
        withPath(arg0: string): ResourceLocation;
        static validPathChar(arg0: string): boolean;
        toLanguageKey(arg0: string, arg1: string): string;
        toDebugFileName(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static of(arg0: string, arg1: string): ResourceLocation;
        specialEquals(o: any, shallow: boolean): boolean;
        static "tryParse(java.lang.String)"(arg0: string): ResourceLocation;
        static read(arg0: Internal.StringReader_): ResourceLocation;
        static bySeparator(arg0: string, arg1: string): ResourceLocation;
        static "tryBuild(java.lang.String,java.lang.String)"(arg0: string, arg1: string): ResourceLocation;
        toLanguageKey(): string;
        static isValidResourceLocation(arg0: string): boolean;
        static parse(arg0: string): ResourceLocation;
        static decompose(arg0: string, arg1: string): string[];
        "withPath(java.util.function.UnaryOperator)"(arg0: Internal.UnaryOperator_<string>): ResourceLocation;
        wait(): void;
        static fromNamespaceAndPath(arg0: string, arg1: string): ResourceLocation;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        static validNamespaceChar(arg0: string): boolean;
        static read(arg0: string): Internal.DataResult<ResourceLocation>;
        toShortLanguageKey(): string;
        static isValidPath(arg0: string): boolean;
        static withDefaultNamespace(arg0: string): ResourceLocation;
        wait(arg0: number, arg1: number): void;
        setPath(arg0: string): void;
        "withPath(java.lang.String)"(arg0: string): ResourceLocation;
        canUseMaterial(arg0: Internal.MaterialId_): boolean;
        static "tryParse(java.lang.String)"(arg0: string): Internal.MaterialStatsId;
        getPath(): string;
        getNamespace(): string;
        static "tryBuild(java.lang.String,java.lang.String)"(arg0: string, arg1: string): Internal.MaterialStatsId;
        compareNamespaced(arg0: ResourceLocation_): number;
        handler$bmb000$lightspeed$hashCodeHeadInjected(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "compareTo(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): number;
        toString(): string;
        withSuffix(arg0: string): ResourceLocation;
        notifyAll(): void;
        static tryBySeparator(arg0: string, arg1: string): ResourceLocation;
        handler$bmb000$lightspeed$hashCodeReturnInjected(arg0: Internal.CallbackInfoReturnable_<any>): void;
        static "read(com.mojang.brigadier.StringReader)"(arg0: Internal.StringReader_): ResourceLocation;
        hashCode(): number;
        static "read(java.lang.String)"(arg0: string): Internal.DataResult<ResourceLocation>;
        setNamespace(arg0: string): void;
        withPath(arg0: Internal.UnaryOperator_<string>): ResourceLocation;
        wait(arg0: number): void;
        withPrefix(arg0: string): ResourceLocation;
        equals(arg0: any): boolean;
        get class(): typeof any
        set path(arg0: string)
        get path(): string
        get namespace(): string
        set namespace(arg0: string)
        static readonly PARSER: Internal.IdParser<Internal.MaterialStatsId>;
    }
    type MaterialStatsId_ = MaterialStatsId;
    interface FloatConsumer extends Internal.DoubleConsumer, Internal.Consumer<number> {
        andThen(arg0: Internal.FloatConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Float)"(arg0: number): void;
        abstract "accept(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        "andThen(java.util.function.DoubleConsumer)"(arg0: Internal.DoubleConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(double)"(arg0: number): void;
        andThen(arg0: Internal.DoubleConsumer_): this;
        "andThen(it.unimi.dsi.fastutil.floats.FloatConsumer)"(arg0: Internal.FloatConsumer_): this;
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Object)"(arg0: any): void;
    }
    type FloatConsumer_ = FloatConsumer;
    class AzAnimationControllerStateMachine$Context <T> implements Internal.StateMachineContext {
        getClass(): typeof any;
        stateMachine(): Internal.AzAnimationControllerStateMachine<T>;
        animationContext(): Internal.AzAnimationContext<T>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        animationController(): Internal.AzAnimationController<T>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type AzAnimationControllerStateMachine$Context_<T> = AzAnimationControllerStateMachine$Context<T>;
    interface ClientWorldAccessor {
        abstract getEntityManager(): Internal.TransientEntitySectionManager<Internal.Entity>;
        get entityManager(): Internal.TransientEntitySectionManager<Internal.Entity>
        (): Internal.TransientEntitySectionManager_<Internal.Entity>;
    }
    type ClientWorldAccessor_ = ClientWorldAccessor | (()=> Internal.TransientEntitySectionManager_<Internal.Entity>);
    interface ISpellbook {
    }
    type ISpellbook_ = ISpellbook;
    class NimbusAmuletItem extends Internal.CirrusAmuletItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasPhantomInk(arg0: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        getEquippedAttributeModifiers(arg0: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        onWornTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getMaxAllowedJumps(): number;
        setCosmeticItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        onEquipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        static popJumping(arg0: Internal.Player_): boolean;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        onUnequipped(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static setJumping(arg0: Internal.Player_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        hasRender(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        setPhantomInk(arg0: Internal.ItemStack_, arg1: boolean): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getCosmeticItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getBaubleUUID(arg0: Internal.ItemStack_): Internal.UUID;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        get maxAllowedJumps(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set jumping(arg0: Internal.Player_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type NimbusAmuletItem_ = NimbusAmuletItem;
    class ColorChannel extends Internal.Enum<Internal.ColorChannel> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static fromStringOrThrow(serializedName: string): Internal.ColorChannel;
        getSerializedName(): string;
        compareTo(arg0: Internal.ColorChannel_): number;
        getShader(): ResourceLocation;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getRepresentationColor(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromFilterStack(stack: Internal.ItemStack_): Internal.Optional<Internal.ColorChannel>;
        static fromStringOptional(serializedName: string): Internal.Optional<Internal.ColorChannel>;
        static fromStringOrDefault(serializedName: string, defaultValue: Internal.ColorChannel_): Internal.ColorChannel;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        "compareTo(io.github.mortuusars.exposure.world.camera.ColorChannel)"(arg0: Internal.ColorChannel_): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.ColorChannel[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(name: string): Internal.ColorChannel;
        getDeclaringClass(): typeof Internal.ColorChannel;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ColorChannel>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get shader(): ResourceLocation
        get representationColor(): number
        get declaringClass(): typeof Internal.ColorChannel
        static readonly RED: (Internal.ColorChannel) & (Internal.ColorChannel);
        static readonly CODEC: Internal.Codec<Internal.ColorChannel>;
        static readonly GREEN: (Internal.ColorChannel) & (Internal.ColorChannel);
        static readonly BLUE: (Internal.ColorChannel) & (Internal.ColorChannel);
    }
    type ColorChannel_ = "red" | ColorChannel | "blue" | "green";
    class ScreenDirection extends Internal.Enum<Internal.ScreenDirection> {
        getClass(): typeof any;
        isBefore(arg0: number, arg1: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        isPositive(): boolean;
        getDeclaringClass(): typeof Internal.ScreenDirection;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        isAfter(arg0: number, arg1: number): boolean;
        coordinateValueComparator(): Internal.IntComparator;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.ScreenDirection;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getOpposite(): this;
        getAxis(): Internal.ScreenAxis;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.ScreenDirection_): number;
        "compareTo(net.minecraft.client.gui.navigation.ScreenDirection)"(arg0: Internal.ScreenDirection_): number;
        static values(): Internal.ScreenDirection[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ScreenDirection>>;
        get class(): typeof any
        get positive(): boolean
        get declaringClass(): typeof Internal.ScreenDirection
        get opposite(): Internal.ScreenDirection
        get axis(): Internal.ScreenAxis
        static readonly UP: (Internal.ScreenDirection) & (Internal.ScreenDirection);
        static readonly RIGHT: (Internal.ScreenDirection) & (Internal.ScreenDirection);
        static readonly LEFT: (Internal.ScreenDirection) & (Internal.ScreenDirection);
        static readonly DOWN: (Internal.ScreenDirection) & (Internal.ScreenDirection);
    }
    type ScreenDirection_ = ScreenDirection | "up" | "down" | "right" | "left";
    abstract class GuiHelper {
        constructor(arg0: Internal.IXaeroMinimap_)
        getClass(): typeof any;
        /**
         * @deprecated
        */
        openMinimapSettingsFromScreen(arg0: Internal.Screen_, arg1: Internal.Screen_): void;
        toString(): string;
        notifyAll(): void;
        getMinimapSettingsFromScreen(arg0: Internal.Screen_): Internal.ScreenBase;
        notify(): void;
        abstract getMainSettingsScreen(arg0: Internal.Screen_): Internal.GuiSettings;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        abstract openMainSettingsFromScreen(arg0: Internal.Screen_): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type GuiHelper_ = GuiHelper;
    interface IStorageService extends Internal.IGridService {
        abstract getCachedInventory(): Internal.KeyCounter;
        abstract invalidateCache(): void;
        abstract refreshNodeStorageProvider(arg0: Internal.IGridNode_): void;
        abstract addGlobalStorageProvider(arg0: Internal.IStorageProvider_): void;
        abstract removeGlobalStorageProvider(arg0: Internal.IStorageProvider_): void;
        abstract refreshGlobalStorageProvider(arg0: Internal.IStorageProvider_): void;
        abstract getInventory(): Internal.MEStorage;
        get cachedInventory(): Internal.KeyCounter
        get inventory(): Internal.MEStorage
    }
    type IStorageService_ = IStorageService;
    interface ContainerAccess {
        abstract getRemoteSlots(): Internal.NonNullList<Internal.ItemStack>;
        abstract getLastSlots(): Internal.NonNullList<Internal.ItemStack>;
        get remoteSlots(): Internal.NonNullList<Internal.ItemStack>
        get lastSlots(): Internal.NonNullList<Internal.ItemStack>
    }
    type ContainerAccess_ = ContainerAccess;
    interface VillagerAccessor {
        abstract callIncreaseMerchantCareer(): void;
        (): void;
    }
    type VillagerAccessor_ = VillagerAccessor | (()=> void);
    class AccessibleRelation extends Internal.AccessibleBundle {
        constructor(arg0: string, arg1: any)
        constructor(arg0: string, arg1: any[])
        constructor(arg0: string)
        getClass(): typeof any;
        "setTarget(java.lang.Object[])"(arg0: any[]): void;
        toDisplayString(arg0: Internal.Locale_): string;
        getKey(): string;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        setTarget(arg0: any): void;
        wait(arg0: number, arg1: number): void;
        "setTarget(java.lang.Object)"(arg0: any): void;
        setTarget(arg0: any[]): void;
        toDisplayString(): string;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getTarget(): any[];
        equals(arg0: any): boolean;
        get class(): typeof any
        set "target(java.lang.Object[])"(arg0: any[])
        get key(): string
        set target(arg0: any)
        set "target(java.lang.Object)"(arg0: any)
        set target(arg0: any[])
        get target(): any[]
        static readonly CONTROLLER_FOR: ("controllerFor") & (string);
        static readonly MEMBER_OF: ("memberOf") & (string);
        static readonly EMBEDS_PROPERTY: ("embedsProperty") & (string);
        static readonly LABELED_BY: ("labeledBy") & (string);
        static readonly SUBWINDOW_OF_PROPERTY: ("subwindowOfProperty") & (string);
        static readonly CONTROLLED_BY_PROPERTY: ("controlledByProperty") & (string);
        static readonly SUBWINDOW_OF: ("subwindowOf") & (string);
        static readonly EMBEDDED_BY: ("embeddedBy") & (string);
        static readonly LABEL_FOR: ("labelFor") & (string);
        static readonly LABELED_BY_PROPERTY: ("labeledByProperty") & (string);
        static readonly PARENT_WINDOW_OF: ("parentWindowOf") & (string);
        static readonly CHILD_NODE_OF: ("childNodeOf") & (string);
        static readonly LABEL_FOR_PROPERTY: ("labelForProperty") & (string);
        static readonly FLOWS_TO_PROPERTY: ("flowsToProperty") & (string);
        static readonly CONTROLLER_FOR_PROPERTY: ("controllerForProperty") & (string);
        static readonly EMBEDS: ("embeds") & (string);
        static readonly EMBEDDED_BY_PROPERTY: ("embeddedByProperty") & (string);
        static readonly CHILD_NODE_OF_PROPERTY: ("childNodeOfProperty") & (string);
        static readonly CONTROLLED_BY: ("controlledBy") & (string);
        static readonly FLOWS_FROM: ("flowsFrom") & (string);
        static readonly FLOWS_TO: ("flowsTo") & (string);
        static readonly PARENT_WINDOW_OF_PROPERTY: ("parentWindowOfProperty") & (string);
        static readonly MEMBER_OF_PROPERTY: ("memberOfProperty") & (string);
        static readonly FLOWS_FROM_PROPERTY: ("flowsFromProperty") & (string);
    }
    type AccessibleRelation_ = AccessibleRelation;
    interface IForgeRegistryModifiable <V> extends Internal.IForgeRegistry<V> {
        abstract getResourceKey(arg0: V): Internal.Optional<Internal.ResourceKey<V>>;
        abstract getDelegateOrThrow(arg0: V): Internal.Holder$Reference<V>;
        abstract iterator(): Internal.Iterator<V>;
        abstract "getDelegateOrThrow(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        abstract getHolder(arg0: V): Internal.Optional<Internal.Holder<V>>;
        abstract getValues(): Internal.Collection<V>;
        abstract "getDelegateOrThrow(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        abstract "getDelegateOrThrow(java.lang.Object)"(arg0: V): Internal.Holder$Reference<V>;
        abstract getHolder(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        spliterator(): Internal.Spliterator<V>;
        abstract "getDelegate(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract isEmpty(): boolean;
        abstract getSlaveMap<T>(arg0: ResourceLocation_, arg1: T): T;
        abstract register(arg0: ResourceLocation_, arg1: V): void;
        abstract getDelegate(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract containsKey(arg0: ResourceLocation_): boolean;
        forEach(arg0: Internal.Consumer_<V>): void;
        abstract "getDelegate(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getHolder(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract getDelegate(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract getCodec(): Internal.Codec<V>;
        abstract "getDelegate(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract "register(net.minecraft.resources.ResourceLocation,java.lang.Object)"(arg0: ResourceLocation_, arg1: V): void;
        abstract "getHolder(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.Optional<Internal.Holder<V>>;
        abstract "getHolder(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<V>): Internal.Optional<Internal.Holder<V>>;
        abstract "register(java.lang.String,java.lang.Object)"(arg0: string, arg1: V): void;
        abstract getDefaultKey(): ResourceLocation;
        abstract getDelegate(arg0: ResourceLocation_): Internal.Optional<Internal.Holder$Reference<V>>;
        abstract "getHolder(java.lang.Object)"(arg0: V): Internal.Optional<Internal.Holder<V>>;
        abstract remove(arg0: ResourceLocation_): V;
        abstract getKeys(): Internal.Set<ResourceLocation>;
        abstract tags(): Internal.ITagManager<V>;
        abstract getRegistryKey(): Internal.ResourceKey<Internal.Registry<V>>;
        abstract register(arg0: string, arg1: V): void;
        abstract containsValue(arg0: V): boolean;
        abstract isLocked(): boolean;
        abstract getValue(arg0: ResourceLocation_): V;
        abstract clear(): void;
        abstract getRegistryName(): ResourceLocation;
        abstract getEntries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>;
        abstract getDelegateOrThrow(arg0: Internal.ResourceKey_<V>): Internal.Holder$Reference<V>;
        abstract getKey(arg0: V): ResourceLocation;
        abstract getDelegateOrThrow(arg0: ResourceLocation_): Internal.Holder$Reference<V>;
        get values(): Internal.Collection<V>
        get empty(): boolean
        get codec(): Internal.Codec<V>
        get defaultKey(): ResourceLocation
        get keys(): Internal.Set<ResourceLocation>
        get registryKey(): Internal.ResourceKey<Internal.Registry<V>>
        get locked(): boolean
        get registryName(): ResourceLocation
        get entries(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<V>, V>>
    }
    type IForgeRegistryModifiable_<V> = IForgeRegistryModifiable<V>;
    class DataFetcher {
        constructor(arg0: Internal.Executor_, arg1: Internal.TimeUnit_, arg2: any_)
        createTask<T>(arg0: string, arg1: Internal.Callable_<T>, arg2: Duration_, arg3: Internal.RepeatedDelayStrategy_): Internal.DataFetcher$Task<T>;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        createSubscription(): Internal.DataFetcher$Subscription;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type DataFetcher_ = DataFetcher;
    interface Ability$Action {
        abstract apply(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_, arg3: Internal.UseOnContext_, arg4: Internal.List_<number>): boolean;
        (arg0: Internal.ItemStack, arg1: Internal.LivingEntity, arg2: Internal.LivingEntity, arg3: Internal.UseOnContext, arg4: Internal.List<number>): boolean;
    }
    type Ability$Action_ = ((arg0: Internal.ItemStack, arg1: Internal.LivingEntity, arg2: Internal.LivingEntity, arg3: Internal.UseOnContext, arg4: Internal.List<number>)=> boolean) | Ability$Action;
    interface IPotionProvider {
        abstract getPotionData(arg0: Internal.ItemStack_): Internal.PotionData;
        (arg0: Internal.ItemStack): Internal.PotionData_;
    }
    type IPotionProvider_ = ((arg0: Internal.ItemStack)=> Internal.PotionData_) | IPotionProvider;
    interface ITier {
        abstract getBaseTier(): Internal.BaseTier;
        get baseTier(): Internal.BaseTier
        (): Internal.BaseTier_;
    }
    type ITier_ = ITier | (()=> Internal.BaseTier_);
    class FancyTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        static setDirtAt(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): void;
        validTreePos(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        isFree(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        getTreeHeight(arg0: Internal.RandomSource_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_, arg5: Internal.Function_<Internal.BlockState, Internal.BlockState>): boolean;
        type(): Internal.TrunkPlacerType<any>;
        placeTrunk(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: number, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): Internal.List<Internal.FoliagePlacer$FoliageAttachment>;
        static trunkPlacerParts<P extends Internal.TrunkPlacer>(arg0: Internal.RecordCodecBuilder$Instance_<P>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<P>, number, number, number>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        placeLog(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.TreeConfiguration_): boolean;
        equals(arg0: any): boolean;
        placeLogIfFree(arg0: Internal.LevelSimulatedReader_, arg1: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.BlockPos$MutableBlockPos_, arg4: Internal.TreeConfiguration_): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.FancyTrunkPlacer>;
    }
    type FancyTrunkPlacer_ = FancyTrunkPlacer;
    interface Short2CharFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, string> {
        abstract "get(short)"(arg0: number): string;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Short2LongFunction;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2CharFunction<T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        "containsKey(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): string;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2CharFunction<T>;
        "remove(short)"(arg0: number): string;
        containsKey(arg0: number): boolean;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2CharFunction;
        getOrDefault(arg0: number, arg1: string): string;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2CharFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2CharFunction;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Short2IntFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Short2ByteFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Character)"(arg0: number, arg1: string): string;
        put(arg0: number, arg1: string): string;
        abstract get(arg0: number): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        apply(arg0: number): string;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        remove(arg0: number): string;
        "getOrDefault(short,char)"(arg0: number, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2CharFunction;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        "put(short,char)"(arg0: number, arg1: string): string;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Short2DoubleFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        size(): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        clear(): void;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
    }
    type Short2CharFunction_ = Short2CharFunction;
    abstract class FileSystem implements Internal.Closeable {
        getClass(): typeof any;
        abstract getSeparator(): string;
        abstract getRootDirectories(): Internal.Iterable<Internal.Path>;
        toString(): string;
        abstract getFileStores(): Internal.Iterable<Internal.FileStore>;
        abstract newWatchService(): Internal.WatchService;
        notifyAll(): void;
        abstract getPath(arg0: string, ...arg1: string[]): Internal.Path;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract supportedFileAttributeViews(): Internal.Set<string>;
        abstract isOpen(): boolean;
        wait(): void;
        abstract close(): void;
        abstract getUserPrincipalLookupService(): Internal.UserPrincipalLookupService;
        wait(arg0: number): void;
        abstract provider(): Internal.FileSystemProvider;
        abstract getPathMatcher(arg0: string): Internal.PathMatcher;
        abstract isReadOnly(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get separator(): string
        get rootDirectories(): Internal.Iterable<Internal.Path>
        get fileStores(): Internal.Iterable<Internal.FileStore>
        get open(): boolean
        get userPrincipalLookupService(): Internal.UserPrincipalLookupService
        get readOnly(): boolean
    }
    type FileSystem_ = FileSystem;
    class CraterWorldCarver extends Internal.WorldCarver<Internal.CarverConfiguration> {
        constructor(codec: Internal.Codec_<Internal.CarverConfiguration>)
        getClass(): typeof any;
        carveEllipsoid(arg0: Internal.CarvingContext_, arg1: Internal.CarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.Aquifer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.CarvingMask_, arg11: Internal.WorldCarver$CarveSkipChecker_): boolean;
        toString(): string;
        carveBlock(arg0: Internal.CarvingContext_, arg1: Internal.CarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.CarvingMask_, arg5: Internal.BlockPos$MutableBlockPos_, arg6: Internal.BlockPos$MutableBlockPos_, arg7: Internal.Aquifer_, arg8: Internal.MutableBoolean_): boolean;
        carve(context: Internal.CarvingContext_, config: Internal.CarverConfiguration_, chunk: Internal.ChunkAccess_, biomeAccessor: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, random: Internal.RandomSource_, aquifer: Internal.Aquifer_, chunkPos: Internal.ChunkPos_, carvingMask: Internal.CarvingMask_): boolean;
        notifyAll(): void;
        canReplaceBlock(arg0: Internal.CarverConfiguration_, arg1: Internal.BlockState_): boolean;
        isStartChunk(config: Internal.CarverConfiguration_, random: Internal.RandomSource_): boolean;
        getRange(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static canReach(arg0: Internal.ChunkPos_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        hashCode(): number;
        wait(): void;
        configured(arg0: Internal.CarverConfiguration_): Internal.ConfiguredWorldCarver<Internal.CarverConfiguration>;
        wait(arg0: number): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredWorldCarver<Internal.CarverConfiguration>>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get range(): number
    }
    type CraterWorldCarver_ = CraterWorldCarver;
    interface IColorableFrequency {
        abstract getColor(): Internal.EnumColor;
        abstract setColor(color: Internal.EnumColor_): void;
        get color(): Internal.EnumColor
        set color(color: Internal.EnumColor_)
    }
    type IColorableFrequency_ = IColorableFrequency;
    interface StrLookup {
        evaluate(event: Internal.LogEvent_, key: string): Internal.LookupResult;
        abstract lookup(key: string): string;
        abstract lookup(event: Internal.LogEvent_, key: string): string;
        evaluate(key: string): Internal.LookupResult;
        readonly CATEGORY: ("Lookup") & (string);
    }
    type StrLookup_ = StrLookup;
    interface Int2IntMap$FastEntrySet extends Internal.ObjectSet<Internal.Int2IntMap$Entry> {
        abstract fastIterator(): Internal.ObjectIterator<Internal.Int2IntMap$Entry>;
        fastForEach(arg0: Internal.Consumer_<Internal.Int2IntMap$Entry>): void;
        forEach(arg0: Internal.Consumer_<Internal.Int2IntMap$Entry>): void;
        "of(java.lang.Object)"<K>(arg0: K): Internal.ObjectSet<K>;
        of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectSet<K>;
        abstract isEmpty(): boolean;
        of<K>(arg0: K, arg1: K): Internal.ObjectSet<K>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        abstract addAll(arg0: Internal.Collection_<Internal.Int2IntMap$Entry>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        parallelStream(): Internal.Stream<Internal.Int2IntMap$Entry>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        "of(java.lang.Object[])"<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract toArray(): any[];
        of<K>(): Internal.ObjectSet<K>;
        abstract hashCode(): number;
        abstract size(): number;
        abstract add(arg0: Internal.Int2IntMap$Entry_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        stream(): Internal.Stream<Internal.Int2IntMap$Entry>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        of<K>(...arg0: K[]): Internal.ObjectSet<K>;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<Internal.Int2IntMap$Entry>): boolean;
        of<K>(arg0: K): Internal.ObjectSet<K>;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        get empty(): boolean
    }
    type Int2IntMap$FastEntrySet_ = Int2IntMap$FastEntrySet;
    class LanguageInfo extends Internal.Record {
        constructor(arg0: string, arg1: string, arg2: boolean)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        bidirectional(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        region(): string;
        name(): string;
        toComponent(): net.minecraft.network.chat.Component;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.LanguageInfo>;
    }
    type LanguageInfo_ = LanguageInfo;
    class RenderTooltipEvent$Pre extends Internal.RenderTooltipEvent {
        constructor()
        constructor(arg0: Internal.ItemStack_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: net.minecraft.client.gui.Font_, arg7: Internal.List_<Internal.ClientTooltipComponent>, arg8: Internal.ClientTooltipPositioner_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getX(): number;
        getY(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        getGraphics(): Internal.GuiGraphics;
        isCanceled(): boolean;
        setFont(arg0: net.minecraft.client.gui.Font_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getComponents(): Internal.List<Internal.ClientTooltipComponent>;
        isCancelable(): boolean;
        setY(arg0: number): void;
        setX(arg0: number): void;
        getListenerList(): Internal.ListenerList;
        getResult(): Internal.Event$Result;
        getScreenHeight(): number;
        toString(): string;
        notifyAll(): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getFont(): net.minecraft.client.gui.Font;
        hashCode(): number;
        getScreenWidth(): number;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getTooltipPositioner(): Internal.ClientTooltipPositioner;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        get x(): number
        get y(): number
        set phase(arg0: Internal.EventPriority_)
        get graphics(): Internal.GuiGraphics
        get canceled(): boolean
        set font(arg0: net.minecraft.client.gui.Font_)
        get components(): Internal.List<Internal.ClientTooltipComponent>
        get cancelable(): boolean
        set y(arg0: number)
        set x(arg0: number)
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        get screenHeight(): number
        set result(arg0: Internal.Event$Result_)
        get font(): net.minecraft.client.gui.Font
        get screenWidth(): number
        get phase(): Internal.EventPriority
        get tooltipPositioner(): Internal.ClientTooltipPositioner
        get itemStack(): Internal.ItemStack
    }
    type RenderTooltipEvent$Pre_ = RenderTooltipEvent$Pre;
    abstract class BasePressurePlateBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BlockSetType_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        handler$kik000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        abstract setSignalForState(arg0: Internal.BlockState_, arg1: number): Internal.BlockState;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        abstract getSignalForState(arg0: Internal.BlockState_): number;
        static getEntityCount(arg0: Internal.Level_, arg1: Internal.AABB_, arg2: typeof Internal.Entity): number;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        abstract getSignalStrength(arg0: Internal.Level_, arg1: BlockPos_): number;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        updateNeighbours(arg0: Internal.Level_, arg1: BlockPos_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        handler$foo000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getPressedTime(): number;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get pressedTime(): number
        set hasCollision(arg0: boolean)
        static readonly PRESSED_AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly TOUCH_AABB: (Internal.AABB) & (Internal.AABB);
        static readonly AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
    }
    type BasePressurePlateBlock_ = BasePressurePlateBlock;
    interface CriticalHitListener {
        abstract onCriticalHitEntity(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): void;
        (arg0: Internal.ItemStack, arg1: Internal.LivingEntity, arg2: Internal.LivingEntity): void;
    }
    type CriticalHitListener_ = CriticalHitListener | ((arg0: Internal.ItemStack, arg1: Internal.LivingEntity, arg2: Internal.LivingEntity)=> void);
    class LaunchPadInteractionPoint extends Internal.ArmInteractionPointType {
        constructor()
        getClass(): typeof any;
        createPoint(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_): Internal.ArmInteractionPoint;
        toString(): string;
        static init(): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        canCreatePoint(level: Internal.Level_, blockPos: BlockPos_, blockState: Internal.BlockState_): boolean;
        static getPrimaryType(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ArmInteractionPointType;
        hashCode(): number;
        getPriority(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get priority(): number
    }
    type LaunchPadInteractionPoint_ = LaunchPadInteractionPoint;
    abstract class LivingEntityRenderer <T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> extends Internal.EntityRenderer<T> implements Internal.AccessorLivingEntityRenderer<any>, de.teamlapen.vampirism.mixin.client.LivingEntityRendererAccessor<any, any>, Internal.LivingEntityRendererInvoker, Internal.LivingEntityRendererAccessor, com.github.alexmodguy.alexscaves.client.render.entity.LivingEntityRendererAccessor, Internal.RenderLayerParent<T, M>, artifacts.mixin.accessors.client.LivingEntityRendererAccessor<any, any> {
        constructor(arg0: Internal.EntityRendererProvider$Context_, arg1: M, arg2: number)
        "shouldShowName(net.minecraft.world.entity.LivingEntity)"(arg0: T): boolean;
        "render(net.minecraft.world.entity.LivingEntity,float,float,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: T, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        handler$flo001$goety$isShaking(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        invokeSetupTransforms(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        getFeatures(): Internal.List<any>;
        render(arg0: T, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        setFusionModelParts(parts: Internal.List_<any>): void;
        handler$icb000$citadel$render_setupAnim_after(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: Internal.CallbackInfo_): void;
        setupRotations(arg0: T, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        notify(): void;
        getBob(arg0: T, arg1: number): number;
        static getOverlayCoords(arg0: Internal.LivingEntity_, arg1: number): number;
        isShaking(arg0: T): boolean;
        handler$hph000$immersive_aircraft$render(entity: Internal.LivingEntity_, matrices: Internal.PoseStack_, animationProgress: number, bodyYaw: number, tickDelta: number, ci: Internal.CallbackInfo_): void;
        shouldShowName(arg0: T): boolean;
        static isEntityUpsideDown(arg0: Internal.LivingEntity_): boolean;
        getFusionModelParts(): Internal.List<any>;
        shouldShowName(arg0: Internal.Entity_): boolean;
        isBodyVisible(arg0: T): boolean;
        callGetBlockLightLevel(arg0: Internal.Entity_, arg1: BlockPos_): number;
        getSkyLightLevel(arg0: T, arg1: BlockPos_): number;
        abstract getTextureLocation(arg0: T): ResourceLocation;
        getBlockLightLevel(arg0: T, arg1: BlockPos_): number;
        getRenderType(arg0: T, arg1: boolean, arg2: boolean, arg3: boolean): Internal.RenderType;
        invokeScale(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number): void;
        scaleForHologram(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number): void;
        wait(): void;
        mobplayeranimator$applyBodyRotations(arg0: Internal.Mob_, arg1: Internal.PoseStack_, arg2: number): void;
        getAttackAnim(arg0: T, arg1: number): number;
        render(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        "render(net.minecraft.world.entity.Entity,float,float,com.mojang.blaze3d.vertex.PoseStack,net.minecraft.client.renderer.MultiBufferSource,int)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number): void;
        handler$fgg000$mobplayeranimator$pre_renderToBuffer(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: Internal.CallbackInfo_): void;
        getFlipDegrees(arg0: T): number;
        getClass(): typeof any;
        getLayers(): Internal.List<any>;
        getRenderOffset(arg0: T, arg1: number): Vec3d;
        scale(arg0: T, arg1: Internal.PoseStack_, arg2: number): void;
        wait(arg0: number, arg1: number): void;
        handler$die000$ad_astra$adastra$shouldRender(entity: Internal.Entity_, frustum: Internal.Frustum_, x: number, y: number, z: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$fjf000$irons_spellbooks$renderRayOverride(arg0: Internal.Entity_, arg1: Internal.Frustum_, arg2: number, arg3: number, arg4: number, arg5: Internal.CallbackInfoReturnable_<any>): void;
        handler$icb000$citadel$setupRotations(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number, arg5: Internal.CallbackInfo_): void;
        getPackedLightCoords(arg0: T, arg1: number): number;
        "shouldShowName(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        toString(): string;
        notifyAll(): void;
        getWhiteOverlayProgress(arg0: T, arg1: number): number;
        renderNameTag(arg0: T, arg1: net.minecraft.network.chat.Component_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number): void;
        handler$icb000$citadel$render_setupAnim_before(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: Internal.CallbackInfo_): void;
        shouldRender(arg0: T, arg1: Internal.Frustum_, arg2: number, arg3: number, arg4: number): boolean;
        handler$fgg000$mobplayeranimator$post_renderToBuffer(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: Internal.CallbackInfo_): void;
        getModel(): M;
        getFont(): net.minecraft.client.gui.Font;
        hashCode(): number;
        handler$cpi000$clanginghowl$isShaking(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        addLayer(arg0: Internal.RenderLayer_<T, M>): boolean;
        wait(arg0: number): void;
        callSetupRotations(arg0: Internal.LivingEntity_, arg1: Internal.PoseStack_, arg2: number, arg3: number, arg4: number): void;
        handler$icb000$citadel$render_renderToBuffer(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number, arg6: Internal.CallbackInfo_): void;
        equals(arg0: any): boolean;
        get features(): Internal.List<any>
        set fusionModelParts(parts: Internal.List_<any>)
        get fusionModelParts(): Internal.List<any>
        get class(): typeof any
        get layers(): Internal.List<any>
        get model(): M
        get font(): net.minecraft.client.gui.Font
        layers: Internal.List<Internal.RenderLayer<T, M>>;
        model: M;
    }
    type LivingEntityRenderer_<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> = LivingEntityRenderer<T, M>;
    /**
     * Invoked before an entity is spawned into the world.
     * 
     * Only entities from a `BaseSpawner` or world generation will trigger this event.
    */
    class CheckLivingEntitySpawnEventJS extends Internal.LivingEntityEventJS {
        constructor(entity: Internal.LivingEntity_, level: Internal.Level_, x: number, y: number, z: number, type: Internal.MobSpawnType_, spawner: Internal.BaseSpawner_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        /**
         * The entity being spawned.
        */
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        /**
         * The spawner that spawned the entity. Can be null if the entity was spawned by worldgen.
        */
        getSpawner(): Internal.BaseSpawner;
        wait(arg0: number, arg1: number): void;
        /**
         * The level the entity is being spawned into.
        */
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        /**
         * The type of spawn.
        */
        getType(): Internal.MobSpawnType;
        getServer(): Internal.MinecraftServer;
        /**
         * The block the entity is being spawned on.
        */
        getBlock(): Internal.BlockContainerJS;
        get class(): typeof any
        /**
         * The entity being spawned.
        */
        get entity(): Internal.LivingEntity
        /**
         * The spawner that spawned the entity. Can be null if the entity was spawned by worldgen.
        */
        get spawner(): Internal.BaseSpawner
        /**
         * The level the entity is being spawned into.
        */
        get level(): Internal.Level
        get player(): Internal.Player
        /**
         * The type of spawn.
        */
        get type(): Internal.MobSpawnType
        get server(): Internal.MinecraftServer
        /**
         * The block the entity is being spawned on.
        */
        get block(): Internal.BlockContainerJS
        readonly z: number;
        readonly spawner: Internal.BaseSpawner;
        readonly type: Internal.MobSpawnType;
        readonly x: number;
        readonly y: number;
    }
    type CheckLivingEntitySpawnEventJS_ = CheckLivingEntitySpawnEventJS;
    class RenderLivingEvent$Post <T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> extends Internal.RenderLivingEvent<T, M> {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntityRenderer_<T, M>, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.MultiBufferSource_, arg5: number)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        getPartialTick(): number;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        getPackedLight(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getRenderer(): Internal.LivingEntityRenderer<T, M>;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getMultiBufferSource(): Internal.MultiBufferSource;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        get partialTick(): number
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        get packedLight(): number
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get renderer(): Internal.LivingEntityRenderer<T, M>
        get phase(): Internal.EventPriority
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderLivingEvent$Post_<T extends Internal.LivingEntity, M extends Internal.EntityModel<T>> = RenderLivingEvent$Post<T, M>;
    class PipeBlock extends Internal.Block {
        constructor(arg0: number, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getAABBIndex(arg0: Internal.BlockState_): number;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        handler$kik000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        handler$foo000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly NORTH: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly PROPERTY_BY_DIRECTION: ({[key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty}) & (Internal.Map<Internal.Direction, Internal.BooleanProperty>);
        static readonly SOUTH: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly UP: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WEST: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly DOWN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        readonly shapeByIndex: Internal.VoxelShape[];
        static readonly EAST: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type PipeBlock_ = PipeBlock;
    class TickRateModulation extends Internal.Enum<Internal.TickRateModulation> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.TickRateModulation;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.TickRateModulation[];
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.TickRateModulation_): number;
        static valueOf(arg0: string): Internal.TickRateModulation;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TickRateModulation>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(appeng.api.networking.ticking.TickRateModulation)"(arg0: Internal.TickRateModulation_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.TickRateModulation
        static readonly SLOWER: (Internal.TickRateModulation) & (Internal.TickRateModulation);
        static readonly URGENT: (Internal.TickRateModulation) & (Internal.TickRateModulation);
        static readonly SAME: (Internal.TickRateModulation) & (Internal.TickRateModulation);
        static readonly SLEEP: (Internal.TickRateModulation) & (Internal.TickRateModulation);
        static readonly IDLE: (Internal.TickRateModulation) & (Internal.TickRateModulation);
        static readonly FASTER: (Internal.TickRateModulation) & (Internal.TickRateModulation);
    }
    type TickRateModulation_ = "slower" | "faster" | TickRateModulation | "idle" | "urgent" | "same" | "sleep";
    interface ServerboundInteractPacketAccessor {
        abstract getEntityId(): number;
        get entityId(): number
        (): number;
    }
    type ServerboundInteractPacketAccessor_ = (()=> number) | ServerboundInteractPacketAccessor;
    class NearestVisibleLivingEntities {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.List_<Internal.LivingEntity>)
        getClass(): typeof any;
        contains(arg0: Internal.LivingEntity_): boolean;
        toString(): string;
        "contains(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.LivingEntity>): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        findClosest(arg0: Internal.Predicate_<Internal.LivingEntity>): Internal.Optional<Internal.LivingEntity>;
        contains(arg0: Internal.Predicate_<Internal.LivingEntity>): boolean;
        hashCode(): number;
        static empty(): Internal.NearestVisibleLivingEntities;
        wait(): void;
        wait(arg0: number): void;
        "contains(net.minecraft.world.entity.LivingEntity)"(arg0: Internal.LivingEntity_): boolean;
        findAll(arg0: Internal.Predicate_<Internal.LivingEntity>): Internal.Iterable<Internal.LivingEntity>;
        equals(arg0: any): boolean;
        find(arg0: Internal.Predicate_<Internal.LivingEntity>): Internal.Stream<Internal.LivingEntity>;
        get class(): typeof any
        lineOfSightTest: Internal.Predicate<Internal.LivingEntity>;
        nearbyEntities: Internal.List<Internal.LivingEntity>;
    }
    type NearestVisibleLivingEntities_ = NearestVisibleLivingEntities;
    class AccessibleStateSet {
        constructor()
        constructor(arg0: Internal.AccessibleState_[])
        add(arg0: Internal.AccessibleState_): boolean;
        getClass(): typeof any;
        toArray(): Internal.AccessibleState[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        contains(arg0: Internal.AccessibleState_): boolean;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        addAll(arg0: Internal.AccessibleState_[]): void;
        remove(arg0: Internal.AccessibleState_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AccessibleStateSet_ = AccessibleStateSet;
    interface Instancer <I extends Internal.Instance> {
        createInstances(arr: I[]): void;
        abstract createInstance(): I;
        abstract stealInstance(arg0: I): void;
    }
    type Instancer_<I extends Internal.Instance> = Instancer<I>;
    interface IFrog {
        abstract onFrogInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): boolean;
        (arg0: Internal.Player, arg1: Internal.InteractionHand): boolean;
    }
    type IFrog_ = ((arg0: Internal.Player, arg1: Internal.InteractionHand)=> boolean) | IFrog;
    class DefaultChapterGroup extends Internal.ChapterGroup {
        constructor(f: Internal.BaseQuestFile_)
        getRelativeProgressFromChildren(data: Internal.TeamData_): number;
        isCompletedRaw(data: Internal.TeamData_): boolean;
        writeData(nbt: Internal.CompoundTag_): void;
        getMutableTitle(): Internal.MutableComponent;
        isOptionalForProgression(teamData: Internal.TeamData_): boolean;
        readData(nbt: Internal.CompoundTag_): void;
        editedFromGUI(): void;
        notify(): void;
        compareTo(arg0: any): number;
        clearCachedData(): void;
        getRawTitle(): string;
        toggleCollapsed(): void;
        getProgressColor(data: Internal.TeamData_): Internal.Color4I;
        static isNull(object: Internal.QuestObjectBase_): boolean;
        getChapters(): Internal.List<Internal.Chapter>;
        isGuiCollapsed(): boolean;
        cacheProgress(): boolean;
        deleteSelf(): void;
        addChapter(chapter: Internal.Chapter_): void;
        isLastGroup(): boolean;
        componentsToRefresh(): Internal.Set<Internal.RecipeModHelper$Components>;
        static getID(object: Internal.QuestObjectBase_): number;
        hasUnclaimedRewardsRaw(teamData: Internal.TeamData_, player: Internal.UUID_): boolean;
        isValid(): boolean;
        onCompleted(data: Internal.QuestProgressEventData_<any>): void;
        static parseCodeString(id: string): number;
        static getRelativeProgressFromChildren(progressSum: number, count: number): number;
        deleteChildren(): void;
        getTags(): Internal.Set<string>;
        forceProgress(teamData: Internal.TeamData_, progressChange: Internal.ProgressChange_): void;
        getChildren(): Internal.Collection<Internal.QuestObject>;
        static "getCodeString(dev.ftb.mods.ftbquests.quest.QuestObjectBase)"(object: Internal.QuestObjectBase_): string;
        removeChapter(chapter: Internal.Chapter_): void;
        isDefaultGroup(): boolean;
        wait(): void;
        isSearchable(data: Internal.TeamData_): boolean;
        setRawIcon(rawIcon: Internal.ItemStack_): void;
        getTitle(): net.minecraft.network.chat.Component;
        static shouldSendNotifications(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getAltIcon(): Internal.Icon;
        isFirstGroup(): boolean;
        onEditButtonClicked(gui: Internal.Runnable_): void;
        static titleToID(s: string): Internal.Optional<string>;
        getClass(): typeof any;
        getProgressColor(data: Internal.TeamData_, dim: boolean): Internal.Color4I;
        static getCodeString(object: Internal.QuestObjectBase_): string;
        getCodeString(): string;
        static copy<T extends Internal.QuestObjectBase>(orig: T, factory: Internal.Supplier_<T>): T;
        static getCodeString(id: number): string;
        getFirstVisibleChapter(data: Internal.TeamData_): Internal.Chapter;
        createSubGroup(group: Internal.ConfigGroup_): Internal.ConfigGroup;
        getParentID(): number;
        wait(arg0: number, arg1: number): void;
        fillConfigGroup(config: Internal.ConfigGroup_): void;
        getIcon(): Internal.Icon;
        getId(): number;
        getAltTitle(): net.minecraft.network.chat.Component;
        moveChapterWithinGroup(chapter: Internal.Chapter_, movingUp: boolean): boolean;
        static "getCodeString(long)"(id: number): string;
        clearChapters(): void;
        "compareTo(dev.ftb.mods.ftbquests.quest.QuestObjectBase)"(other: Internal.QuestObjectBase_): number;
        readNetData(buffer: Internal.FriendlyByteBuf_): void;
        hasTag(tag: string): boolean;
        compareTo(other: Internal.QuestObjectBase_): number;
        setRawTitle(rawTitle: string): void;
        toString(): string;
        getFile(): Internal.BaseQuestFile;
        onStarted(data: Internal.QuestProgressEventData_<any>): void;
        getQuestChapter(): Internal.Chapter;
        notifyAll(): void;
        getQuestFile(): Internal.BaseQuestFile;
        getObjectType(): Internal.QuestObjectType;
        sortChapters(c: Internal.Comparator_<Internal.Chapter>): void;
        forceProgressRaw(teamData: Internal.TeamData_, progressChange: Internal.ProgressChange_): void;
        static parseHexId(id: string): Internal.Optional<number>;
        hashCode(): number;
        getPath(): Internal.Optional<string>;
        isVisible(data: Internal.TeamData_): boolean;
        writeNetData(buffer: Internal.FriendlyByteBuf_): void;
        editedFromGUIOnServer(): void;
        onCreated(): void;
        getVisibleChapters(data: Internal.TeamData_): Internal.List<Internal.Chapter>;
        wait(arg0: number): void;
        equals(object: any): boolean;
        get mutableTitle(): Internal.MutableComponent
        get rawTitle(): string
        get chapters(): Internal.List<Internal.Chapter>
        get guiCollapsed(): boolean
        get lastGroup(): boolean
        get valid(): boolean
        get tags(): Internal.Set<string>
        get children(): Internal.Collection<Internal.QuestObject>
        get defaultGroup(): boolean
        set rawIcon(rawIcon: Internal.ItemStack_)
        get title(): net.minecraft.network.chat.Component
        get altIcon(): Internal.Icon
        get firstGroup(): boolean
        get class(): typeof any
        get codeString(): string
        get parentID(): number
        get icon(): Internal.Icon
        get id(): number
        get altTitle(): net.minecraft.network.chat.Component
        set rawTitle(rawTitle: string)
        get file(): Internal.BaseQuestFile
        get questChapter(): Internal.Chapter
        get questFile(): Internal.BaseQuestFile
        get objectType(): Internal.QuestObjectType
        get path(): Internal.Optional<string>
    }
    type DefaultChapterGroup_ = DefaultChapterGroup;
    class DoubleSummaryStatistics implements Internal.DoubleConsumer {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        getSum(): number;
        toString(): string;
        getCount(): number;
        notifyAll(): void;
        andThen(arg0: Internal.DoubleConsumer_): Internal.DoubleConsumer;
        getMin(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        combine(arg0: Internal.DoubleSummaryStatistics_): void;
        accept(arg0: number): void;
        hashCode(): number;
        getAverage(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getMax(): number;
        get class(): typeof any
        get sum(): number
        get count(): number
        get min(): number
        get average(): number
        get max(): number
    }
    type DoubleSummaryStatistics_ = DoubleSummaryStatistics;
    interface ICopiedBlockProperties {
        abstract setBaseBlock(arg0: Internal.Block_): void;
        abstract getBaseBlock(): Internal.Block;
        set baseBlock(arg0: Internal.Block_)
        get baseBlock(): Internal.Block
    }
    type ICopiedBlockProperties_ = ICopiedBlockProperties;
    class MemoryCardItem extends Internal.AEBaseItem implements Internal.DyeableLeatherItem, Internal.IMemoryCard {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static exportGenericSettings(arg0: any, arg1: Internal.CompoundTag_): Internal.Set<Internal.SettingsCategory>;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getColor(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static importGenericSettingsAndNotify(arg0: any, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        clearColor(arg0: Internal.ItemStack_): void;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getSettingsName(arg0: Internal.ItemStack_): string;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        notifyUser(arg0: Internal.Player_, arg1: Internal.MemoryCardMessages_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static getTintColor(arg0: Internal.ItemStack_, arg1: number): number;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        getColorCode(arg0: Internal.ItemStack_): Internal.AEColor[];
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        static importGenericSettings(arg0: any, arg1: Internal.CompoundTag_, arg2: Internal.Player_): Internal.Set<Internal.SettingsCategory>;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        setMemoryCardContents(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getRegistryName(): ResourceLocation;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        get registryName(): ResourceLocation
    }
    type MemoryCardItem_ = MemoryCardItem;
    class Netherite_Effigy extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type Netherite_Effigy_ = Netherite_Effigy;
    interface ChunkHolder$ChunkLoadingFailure {
        readonly UNLOADED: Internal.ChunkHolder$ChunkLoadingFailure;
    }
    type ChunkHolder$ChunkLoadingFailure_ = ChunkHolder$ChunkLoadingFailure;
    interface AgeableListAccessor {
        abstract invokeBodyParts(): Internal.Iterable<Internal.ModelPart>;
        (): Internal.Iterable_<Internal.ModelPart>;
    }
    type AgeableListAccessor_ = AgeableListAccessor | (()=> Internal.Iterable_<Internal.ModelPart>);
    interface BlockEntityVisual <T extends Internal.BlockEntity> extends Internal.Visual {
        abstract update(arg0: number): void;
        abstract collectCrumblingInstances(arg0: Internal.Consumer_<Internal.Instance>): void;
        abstract "delete"(): void;
    }
    type BlockEntityVisual_<T extends Internal.BlockEntity> = BlockEntityVisual<T>;
    abstract class TileEntityLogisticalTransporterBase extends Internal.TileEntityTransmitter {
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        requestModelDataUpdate(): void;
        etf$getType(): Internal.EntityType<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        sideChanged(side: Internal.Direction_, old: mekanism.common.lib.transmitter.ConnectionType_, type: mekanism.common.lib.transmitter.ConnectionType_): void;
        etf$isBlockEntity(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(nbt: Internal.CompoundTag_): void;
        etf$getOptifineVehicleId(): number;
        setForceUpdate(): void;
        setChanged(): void;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction)"(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getReducedUpdateTag(): Internal.CompoundTag;
        modifyReturnValue$cmi000$scholar$onGetUpdateTag(original: Internal.CompoundTag_): Internal.CompoundTag;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        etf$canBeBright(): boolean;
        onSneakRightClick(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        onNeighborTileChange(side: Internal.Direction_): void;
        setRemoved(): void;
        invalidateCapability(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        onSneakRightClick(player: Internal.Player_): Internal.InteractionResult;
        etf$getOptifineId(): number;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction)"(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        onAdded(): void;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        markDirtyComparator(): void;
        getClass(): typeof any;
        static tickClient(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, transmitter: Internal.TileEntityLogisticalTransporterBase_): void;
        sendUpdatePacket(): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        etf$distanceTo(entity: Internal.Entity_): number;
        isLoaded(): boolean;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        onUpdateServer(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        onComparatorAdded(arg0: Internal.Direction_, arg1: number): void;
        abstract getTransmitterType(): Internal.TransmitterType;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        getTileChunk(): Internal.Chunk3D;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getTileWorld(): Internal.Level;
        handler$jag000$setRemoved(arg0: Internal.CallbackInfo_): void;
        etf$getScoreboardTeam(): Internal.Team;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        invalidateCachedCapabilities(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setWorldPosition(arg0: BlockPos_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        wait(arg0: number): void;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        reviveCaps(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        handleUpdatePacket(tag: Internal.CompoundTag_): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        etf$getWorld(): Internal.Level;
        getSideLookingAt(player: Internal.Player_): Internal.Direction;
        handleUpdateTag(tag: Internal.CompoundTag_): void;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(world: Internal.Level_): void;
        notify(): void;
        chunkAccessibilityChange(loaded: boolean): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        static tickServer(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, transmitter: Internal.TileEntityTransmitter_): void;
        etf$getBlockPos(): BlockPos;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction[])"(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        etf$getBlockY(): number;
        markForSave(): void;
        etf$getHandItems(): Internal.Iterable<any>;
        invalidateCaps(): void;
        getTilePos(): BlockPos;
        etf$getArmorItems(): Internal.Iterable<any>;
        getTileCoord(): Internal.Coord4D;
        getBlockState(): Internal.BlockState;
        modifyReturnValue$cmi000$scholar$onGetUpdatePacket(original: Internal.Packet_<any>): Internal.Packet<any>;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        handler$jag000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        etf$hasCustomName(): boolean;
        getSideLookingAt(player: Internal.Player_, fallback: Internal.Direction_): Internal.Direction;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        wait(): void;
        sendUpdatePacket(tracking: Internal.BlockEntity_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(nbtTags: Internal.CompoundTag_): void;
        getCapability<T>(capability: Internal.Capability_<T>, side: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getCollisionBoxes(): Internal.List<Internal.VoxelShape>;
        onRightClick(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onRightClick(player: Internal.Player_): Internal.InteractionResult;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        isRemote(): boolean;
        serializeNBT(): Internal.Tag;
        getTransmitter(): Internal.LogisticalTransporterBase;
        onNeighborBlockChange(side: Internal.Direction_): void;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        onDataPacket(net: Internal.Connection_, pkt: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction[])"(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        onAlloyInteraction(player: Internal.Player_, stack: Internal.ItemStack_, tier: Internal.AlloyTier_): void;
        etf$getUuid(): Internal.UUID;
        invalidateCapability(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        redstoneChanged(powered: boolean): void;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        hashCode(): number;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        blockRemoved(): void;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        equals(arg0: any): boolean;
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get reducedUpdateTag(): Internal.CompoundTag
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get loaded(): boolean
        get transmitterType(): Internal.TransmitterType
        get updatePacket(): Internal.Packet<any>
        get tileChunk(): Internal.Chunk3D
        get persistentData(): Internal.CompoundTag
        get tileWorld(): Internal.Level
        set worldPosition(arg0: BlockPos_)
        set animator(arg0: Internal.AzAnimator_<any, any>)
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(world: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get tilePos(): BlockPos
        get tileCoord(): Internal.Coord4D
        get blockState(): Internal.BlockState
        get collisionBoxes(): Internal.List<Internal.VoxelShape>
        get level(): Internal.Level
        get remote(): boolean
        get transmitter(): Internal.LogisticalTransporterBase
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get modelData(): Internal.ModelData
        get renderData(): any
    }
    type TileEntityLogisticalTransporterBase_ = TileEntityLogisticalTransporterBase;
    class ResourceKeyArgument <T> implements Internal.ArgumentType<Internal.ResourceKey<T>> {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>)
        getClass(): typeof any;
        static getConfiguredFeature(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Holder$Reference<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        static resolveKey<T>(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string, arg2: Internal.ResourceKey_<Internal.Registry<T>>, arg3: Internal.DynamicCommandExceptionType_): Internal.Holder$Reference<T>;
        notifyAll(): void;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static key<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.ResourceKeyArgument<T>;
        getExamples(): Internal.Collection<string>;
        hashCode(): number;
        static getStructureTemplatePool(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Holder$Reference<Internal.StructureTemplatePool>;
        wait(): void;
        wait(arg0: number): void;
        static getStructure(arg0: Internal.CommandContext_<Internal.CommandSourceStack>, arg1: string): Internal.Holder$Reference<Internal.Structure>;
        parse(arg0: Internal.StringReader_): Internal.ResourceKey<T>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get examples(): Internal.Collection<string>
        readonly registryKey: Internal.ResourceKey<Internal.Registry<T>>;
    }
    type ResourceKeyArgument_<T> = ResourceKeyArgument<T>;
    class InterfaceAddress {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        getNetworkPrefixLength(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getAddress(): Internal.InetAddress;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getBroadcast(): Internal.InetAddress;
        get class(): typeof any
        get networkPrefixLength(): number
        get address(): Internal.InetAddress
        get broadcast(): Internal.InetAddress
    }
    type InterfaceAddress_ = InterfaceAddress;
    class ChatReportBuilder$CannotBuildReason extends Internal.Record {
        constructor(arg0: net.minecraft.network.chat.Component_)
        getClass(): typeof any;
        hashCode(): number;
        message(): net.minecraft.network.chat.Component;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly NO_REASON: (Internal.ChatReportBuilder$CannotBuildReason) & (Internal.ChatReportBuilder$CannotBuildReason);
        static readonly TOO_MANY_MESSAGES: (Internal.ChatReportBuilder$CannotBuildReason) & (Internal.ChatReportBuilder$CannotBuildReason);
        static readonly NO_REPORTED_MESSAGES: (Internal.ChatReportBuilder$CannotBuildReason) & (Internal.ChatReportBuilder$CannotBuildReason);
        static readonly COMMENTS_TOO_LONG: (Internal.ChatReportBuilder$CannotBuildReason) & (Internal.ChatReportBuilder$CannotBuildReason);
    }
    type ChatReportBuilder$CannotBuildReason_ = ChatReportBuilder$CannotBuildReason;
    interface LifeCycle2 extends Internal.LifeCycle {
        abstract stop(timeout: number, timeUnit: Internal.TimeUnit_): boolean;
        abstract start(): void;
        abstract getState(): Internal.LifeCycle$State;
        abstract isStopped(): boolean;
        abstract stop(): void;
        abstract isStarted(): boolean;
        abstract initialize(): void;
        get state(): Internal.LifeCycle$State
        get stopped(): boolean
        get started(): boolean
    }
    type LifeCycle2_ = LifeCycle2;
    class ServerboundBlockEntityTagQuery implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: number, arg1: BlockPos_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        notifyAll(): void;
        getTransactionId(): number;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getPos(): BlockPos;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get transactionId(): number
        get skippable(): boolean
        get pos(): BlockPos
    }
    type ServerboundBlockEntityTagQuery_ = ServerboundBlockEntityTagQuery;
    class WarpPlateRecipe$Serializer implements Internal.RecipeSerializer<Internal.WarpPlateRecipe> {
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.WarpPlateRecipe;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.WarpPlateRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.WarpPlateRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.WarpPlateRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.WarpPlateRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.blay09.mods.waystones.recipe.WarpPlateRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.WarpPlateRecipe_): void;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.WarpPlateRecipe;
        get class(): typeof any
    }
    type WarpPlateRecipe$Serializer_ = WarpPlateRecipe$Serializer;
    class PoweredRailBlock extends Internal.BaseRailBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: boolean)
        registerDefaultState(): void;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        "updateState(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.Block)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        updateDir(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): Internal.BlockState;
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        isFlexibleRail(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        handler$kik000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getShapeProperty(): Internal.Property<Internal.RailShape>;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        static isRail(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        findPoweredRailSignal(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean, arg4: number): boolean;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getRailDirection(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): Internal.RailShape;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        onMinecartPass(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): void;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidRailShape(arg0: Internal.RailShape_): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        isActivatorRail(): boolean;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        canMakeSlopes(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isSameRailWithPower(arg0: Internal.Level_, arg1: BlockPos_, arg2: boolean, arg3: number, arg4: Internal.RailShape_): boolean;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        handler$foo000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        "updateState(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,boolean)"(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.BlockState;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isRail(arg0: Internal.BlockState_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isStraight(): boolean;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRailMaxSpeed(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.AbstractMinecart_): number;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get shapeProperty(): Internal.Property<Internal.RailShape>
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get activatorRail(): boolean
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get straight(): boolean
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly SHAPE: Internal.EnumProperty<Internal.RailShape>;
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type PoweredRailBlock_ = PoweredRailBlock;
    class VoxelPlane {
        constructor(axis: Internal.Structure$Axis_, pos: BlockPos_, frame: boolean)
        getClass(): typeof any;
        isFull(): boolean;
        toString(): string;
        notifyAll(): void;
        height(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxRow(): number;
        getMissing(): number;
        hashCode(): number;
        size(): number;
        getMinCol(): number;
        getAxis(): Internal.Structure$Axis;
        hasFrame(): boolean;
        wait(): void;
        isOutside(pos: BlockPos_): boolean;
        merge(other: Internal.VoxelPlane_): void;
        wait(arg0: number): void;
        getMaxCol(): number;
        equals(obj: any): boolean;
        getMinRow(): number;
        length(): number;
        get class(): typeof any
        get full(): boolean
        get maxRow(): number
        get missing(): number
        get minCol(): number
        get axis(): Internal.Structure$Axis
        get maxCol(): number
        get minRow(): number
    }
    type VoxelPlane_ = VoxelPlane;
    abstract class ModContainer {
        constructor(arg0: Internal.IModInfo_)
        getClass(): typeof any;
        registerExtensionPoint<T extends Internal.Record & Internal.IExtensionPoint<T>>(arg0: Internal.IExtensionPoint<T>, arg1: Internal.Supplier_<T>): void;
        static buildTransitionHandler<T extends net.minecraftforge.eventbus.api.Event & Internal.IModBusEvent>(arg0: Internal.ModContainer_, arg1: Internal.IModStateTransition$EventGenerator_<T>, arg2: Internal.ProgressMeter_, arg3: Internal.BiFunction_<Internal.ModLoadingStage, Internal.Throwable, Internal.ModLoadingStage>, arg4: Internal.Executor_): Internal.CompletableFuture<void>;
        abstract getMod(): any;
        getCustomExtension<T extends Internal.Record>(arg0: Internal.IExtensionPoint<T>): Internal.Optional<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        dispatchConfigEvent(arg0: Internal.IConfigEvent_): void;
        "registerDisplayTest(java.util.function.Supplier,java.util.function.BiPredicate)"(arg0: Internal.Supplier_<string>, arg1: Internal.BiPredicate_<string, boolean>): void;
        registerDisplayTest(arg0: Internal.Supplier_<string>, arg1: Internal.BiPredicate_<string, boolean>): void;
        getNamespace(): string;
        getModInfo(): Internal.IModInfo;
        toString(): string;
        registerDisplayTest(arg0: Internal.IExtensionPoint$DisplayTest_): void;
        notifyAll(): void;
        getModId(): string;
        abstract matches(arg0: any): boolean;
        registerDisplayTest(arg0: string, arg1: Internal.BiPredicate_<string, boolean>): void;
        "registerDisplayTest(net.minecraftforge.fml.IExtensionPoint$DisplayTest)"(arg0: Internal.IExtensionPoint$DisplayTest_): void;
        addConfig(arg0: Internal.ModConfig_): void;
        "registerDisplayTest(java.util.function.Supplier)"(arg0: Internal.Supplier_<Internal.IExtensionPoint$DisplayTest>): void;
        hashCode(): number;
        getCurrentState(): Internal.ModLoadingStage;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        registerDisplayTest(arg0: Internal.Supplier_<Internal.IExtensionPoint$DisplayTest>): void;
        "registerDisplayTest(java.lang.String,java.util.function.BiPredicate)"(arg0: string, arg1: Internal.BiPredicate_<string, boolean>): void;
        get class(): typeof any
        get mod(): any
        get namespace(): string
        get modInfo(): Internal.IModInfo
        get modId(): string
        get currentState(): Internal.ModLoadingStage
    }
    type ModContainer_ = ModContainer;
    interface IInfusionTile extends Internal.IInfusionTracker {
        insertInfusionCheck(tank: number, side: Internal.Direction_): boolean;
        canHandleInfusion(): boolean;
        extractInfusionCheck(tank: number, side: Internal.Direction_): boolean;
        abstract getInfusionManager(): Internal.ChemicalHandlerManager$InfusionHandlerManager;
        abstract onContentsChanged(): void;
        getInfusionTanks(side: Internal.Direction_): Internal.List<Internal.IInfusionTank>;
        getInitialInfusionManager(listener: Internal.IContentsListener_): Internal.ChemicalHandlerManager$InfusionHandlerManager;
        getInitialInfusionTanks(listener: Internal.IContentsListener_): Internal.IChemicalTankHolder<Internal.InfuseType, Internal.InfusionStack, Internal.IInfusionTank>;
        get infusionManager(): Internal.ChemicalHandlerManager$InfusionHandlerManager
    }
    type IInfusionTile_ = IInfusionTile;
    interface DispensibleContainerItem extends Internal.IForgeDispensibleContainerItem {
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        abstract emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_): boolean;
        checkExtraContent(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: BlockPos_): void;
        (arg0: Internal.Player, arg1: Internal.Level, arg2: BlockPos, arg3: Internal.BlockHitResult): boolean;
    }
    type DispensibleContainerItem_ = ((arg0: Internal.Player, arg1: Internal.Level, arg2: BlockPos, arg3: Internal.BlockHitResult)=> boolean) | DispensibleContainerItem;
    interface ITempleStateCacheProvider {
        abstract getTempleStateCache(): Internal.TempleStateCache;
        get templeStateCache(): Internal.TempleStateCache
        (): Internal.TempleStateCache_;
    }
    type ITempleStateCacheProvider_ = ITempleStateCacheProvider | (()=> Internal.TempleStateCache_);
    class MetalPressRecipeSerializer extends Internal.IERecipeSerializer<Internal.MetalPressRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.MetalPressRecipe;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,blusunrize.immersiveengineering.api.crafting.MetalPressRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MetalPressRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.MetalPressRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        readFromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.MetalPressRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.MetalPressRecipe;
        notifyAll(): void;
        getIcon(): Internal.ItemStack;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        wait(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.MetalPressRecipe_): void;
        wait(arg0: number): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.MetalPressRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
        get icon(): Internal.ItemStack
    }
    type MetalPressRecipeSerializer_ = MetalPressRecipeSerializer;
    class SimpleRegistryImpl$SingleImpl <K, V> extends Internal.SimpleRegistryImpl<K, V> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        "get(net.minecraft.world.level.block.state.StateHolder)"(arg0: Internal.StateHolder_<K, any>): V;
        invalidate(): void;
        get(arg0: Internal.StateHolder_<K, any>): V;
        register(arg0: K, arg1: V): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        registerProvider(arg0: Internal.SimpleRegistry$Provider_<K, V>): void;
        hashCode(): number;
        static create<K, V>(): Internal.SimpleRegistry<K, V>;
        static multi<K, V>(): Internal.SimpleRegistry$Multi<K, V>;
        wait(): void;
        wait(arg0: number): void;
        get(arg0: K): V;
        static single<K, V>(): Internal.SimpleRegistry<K, V>;
        "get(java.lang.Object)"(arg0: K): V;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SimpleRegistryImpl$SingleImpl_<K, V> = SimpleRegistryImpl$SingleImpl<K, V>;
    class TransmitterType$Size extends Internal.Enum<Internal.TransmitterType$Size> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TransmitterType$Size>>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "compareTo(mekanism.common.block.states.TransmitterType$Size)"(arg0: Internal.TransmitterType$Size_): number;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(name: string): Internal.TransmitterType$Size;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.TransmitterType$Size_): number;
        static values(): Internal.TransmitterType$Size[];
        getDeclaringClass(): typeof Internal.TransmitterType$Size;
        get class(): typeof any
        get declaringClass(): typeof Internal.TransmitterType$Size
        readonly centerSize: number;
        static readonly SMALL: (Internal.TransmitterType$Size) & (Internal.TransmitterType$Size);
        static readonly LARGE: (Internal.TransmitterType$Size) & (Internal.TransmitterType$Size);
    }
    type TransmitterType$Size_ = "large" | "small" | TransmitterType$Size;
    class ClientboundChunksBiomesPacket extends Internal.Record implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.List_<Internal.ClientboundChunksBiomesPacket$ChunkBiomeData>)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        chunkBiomeData(): Internal.List<Internal.ClientboundChunksBiomesPacket$ChunkBiomeData>;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        static forChunks(arg0: Internal.List_<Internal.LevelChunk>): Internal.ClientboundChunksBiomesPacket;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
    }
    type ClientboundChunksBiomesPacket_ = ClientboundChunksBiomesPacket;
    abstract class ChemicalToChemicalRecipe <CHEMICAL extends Internal.Chemical<CHEMICAL>, STACK extends Internal.ChemicalStack<CHEMICAL>, INGREDIENT extends Internal.ChemicalStackIngredient<CHEMICAL, STACK>> extends Internal.MekanismRecipe implements Internal.Predicate<STACK> {
        constructor(arg0: ResourceLocation_, arg1: INGREDIENT, arg2: STACK)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        notify(): void;
        test(arg0: any): boolean;
        getId(): ResourceLocation;
        isSpecial(): boolean;
        write(arg0: Internal.FriendlyByteBuf_): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        "assemble(mekanism.api.inventory.IgnoredIInventory,net.minecraft.core.RegistryAccess)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getType(): ResourceLocation;
        wait(): void;
        isIncomplete(): boolean;
        getOutputDefinition(): Internal.List<STACK>;
        getClass(): typeof any;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<STACK>): Internal.Predicate<STACK>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        negate(): Internal.Predicate<STACK>;
        and(arg0: Internal.Predicate_<STACK>): Internal.Predicate<STACK>;
        "test(java.lang.Object)"(arg0: any): boolean;
        getOutput(arg0: STACK): STACK;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        logMissingTags(): void;
        test(arg0: STACK): boolean;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "test(mekanism.api.chemical.ChemicalStack)"(arg0: STACK): boolean;
        notifyAll(): void;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getInput(): INGREDIENT;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        assemble(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getRemainingItems(arg0: Internal.IgnoredIInventory_): Internal.NonNullList<Internal.ItemStack>;
        equals(arg0: any): boolean;
        "matches(mekanism.api.inventory.IgnoredIInventory,net.minecraft.world.level.Level)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        matches(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get id(): ResourceLocation
        get special(): boolean
        get type(): ResourceLocation
        get incomplete(): boolean
        get outputDefinition(): Internal.List<STACK>
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get input(): INGREDIENT
        set group(group: string)
        get orCreateId(): ResourceLocation
    }
    type ChemicalToChemicalRecipe_<CHEMICAL extends Internal.Chemical<CHEMICAL>, STACK extends Internal.ChemicalStack<CHEMICAL>, INGREDIENT extends Internal.ChemicalStackIngredient<CHEMICAL, STACK>> = ChemicalToChemicalRecipe<CHEMICAL, STACK, INGREDIENT>;
}
declare namespace gripe._90.polyeng.mixin {
    interface AbstractContainerScreenAccessor {
        abstract getImageHeight(): number;
        get imageHeight(): number
        (): number;
    }
    type AbstractContainerScreenAccessor_ = AbstractContainerScreenAccessor | (()=> number);
}
declare namespace slimeknights.mantle.command.argument {
    class ResourceOrTagKeyArgument$Result extends Internal.Record {
        constructor(location: ResourceLocation_, isTag: boolean)
        getClass(): typeof any;
        isTag(): boolean;
        tag<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.TagKey<T>;
        toString(): string;
        notifyAll(): void;
        resource<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.TagKey<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        location(): ResourceLocation;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        tagEntry(): Internal.TagEntry;
        get class(): typeof any
        get tag(): boolean
    }
    type ResourceOrTagKeyArgument$Result_ = ResourceOrTagKeyArgument$Result;
}
declare namespace xaero.common.minimap.element.render {
    /**
     * @deprecated
    */
    abstract class MinimapElementRenderer <E, RC> extends Internal.MinimapElementRenderer<E, RC> {
        constructor(arg0: Internal.MinimapElementReader_<E, RC>, arg1: any_<E, RC>, arg2: RC)
        getClass(): typeof any;
        /**
         * @deprecated
        */
        abstract "shouldRender(int)"(arg0: number): boolean;
        "shouldRender(xaero.hud.minimap.element.render.MinimapElementRenderLocation)"(arg0: Internal.MinimapElementRenderLocation_): boolean;
        renderElement(arg0: E, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Internal.MinimapElementRenderInfo_, arg8: Internal.GuiGraphics_, arg9: Internal.MultiBufferSource$BufferSource_): boolean;
        /**
         * @deprecated
        */
        abstract shouldRender(arg0: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        preRender(arg0: Internal.MinimapElementRenderInfo_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.MultiTextureRenderTypeRendererProvider_): void;
        compareTo(arg0: any): number;
        /**
         * @deprecated
        */
        getProvider(): Internal.MinimapElementRenderProvider<any, any>;
        /**
         * @deprecated
        */
        getElementReader(): Internal.MinimapElementReader<E, RC>;
        compareTo(arg0: Internal.MinimapElementRenderer_<any, any>): number;
        /**
         * @deprecated
        */
        abstract preRender(arg0: number, arg1: Internal.Entity_, arg2: Internal.Player_, arg3: number, arg4: number, arg5: number, arg6: Internal.IXaeroMinimap_, arg7: Internal.MultiBufferSource$BufferSource_, arg8: Internal.MultiTextureRenderTypeRendererProvider_): void;
        toString(): string;
        notifyAll(): void;
        getContext(): RC;
        postRender(arg0: Internal.MinimapElementRenderInfo_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.MultiTextureRenderTypeRendererProvider_): void;
        hashCode(): number;
        wait(): void;
        getOrder(): number;
        wait(arg0: number): void;
        "compareTo(xaero.hud.minimap.element.render.MinimapElementRenderer)"(arg0: Internal.MinimapElementRenderer_<any, any>): number;
        /**
         * @deprecated
        */
        abstract renderElement(arg0: number, arg1: boolean, arg2: boolean, arg3: Internal.GuiGraphics_, arg4: Internal.MultiBufferSource$BufferSource_, arg5: net.minecraft.client.gui.Font_, arg6: Internal.RenderTarget_, arg7: Internal.MinimapRendererHelper_, arg8: Internal.Entity_, arg9: Internal.Player_, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: E, arg17: number, arg18: number, arg19: boolean, arg20: number): boolean;
        /**
         * @deprecated
        */
        abstract postRender(arg0: number, arg1: Internal.Entity_, arg2: Internal.Player_, arg3: number, arg4: number, arg5: number, arg6: Internal.IXaeroMinimap_, arg7: Internal.MultiBufferSource$BufferSource_, arg8: Internal.MultiTextureRenderTypeRendererProvider_): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        shouldRender(arg0: Internal.MinimapElementRenderLocation_): boolean;
        get class(): typeof any
        /**
         * @deprecated
        */
        get provider(): Internal.MinimapElementRenderProvider<any, any>
        /**
         * @deprecated
        */
        get elementReader(): Internal.MinimapElementReader<E, RC>
        get context(): RC
        get order(): number
    }
    type MinimapElementRenderer_<E, RC> = MinimapElementRenderer<E, RC>;
}
declare namespace com.github.L_Ender.cataclysm.mixin.accessor {
    interface BoundingBoxAccessor {
        abstract setMinZ(arg0: number): void;
        abstract setMaxX(arg0: number): void;
        abstract setMaxY(arg0: number): void;
        abstract setMaxZ(arg0: number): void;
        abstract setMinX(arg0: number): void;
        abstract setMinY(arg0: number): void;
        set minZ(arg0: number)
        set maxX(arg0: number)
        set maxY(arg0: number)
        set maxZ(arg0: number)
        set minX(arg0: number)
        set minY(arg0: number)
    }
    type BoundingBoxAccessor_ = BoundingBoxAccessor;
}
declare namespace com.cerbon.bosses_of_mass_destruction.item.custom {
    class MaterialItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        handler$fii000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): Internal.Item;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$kkd000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dkc000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        handler$ien001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$dkc000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        handler$emn000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        handler$ien000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$kkd000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$kgm000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        handler$ien000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        handler$dkc000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$ebn000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type MaterialItem_ = MaterialItem;
}
declare namespace earth.terrarium.adastra.mixins.common {
    interface LivingEntityAccessor {
        abstract isJumping(): boolean;
        get jumping(): boolean
        (): boolean;
    }
    type LivingEntityAccessor_ = LivingEntityAccessor | (()=> boolean);
}
