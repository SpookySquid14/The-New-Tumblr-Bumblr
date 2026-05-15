/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class MaxManaCalcEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: number)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        setMax(arg0: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getReserve(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        setReserve(arg0: number): void;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getMax(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set max(arg0: number)
        get reserve(): number
        set result(arg0: Internal.Event$Result_)
        set reserve(arg0: number)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get max(): number
        get phase(): Internal.EventPriority
    }
    type MaxManaCalcEvent_ = MaxManaCalcEvent;
    class ItemPharaoScepter extends Internal.BowItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        getDefaultProjectileRange(): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        customArrow(arg0: Internal.AbstractArrow_): Internal.AbstractArrow;
        handler$ngo000$supplementaries$getAllSupportedProjectiles(cir: Internal.CallbackInfoReturnable_<any>): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        handler$mpl000$sounds$$stop_bow_pull_sound(stack: Internal.ItemStack_, world: Internal.Level_, user: Internal.LivingEntity_, remainingUseTicks: number, ci: Internal.CallbackInfo_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        handler$mpl000$sounds$$start_bow_pull_sound(world: Internal.Level_, user: Player_, hand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defaultProjectileRange(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type ItemPharaoScepter_ = ItemPharaoScepter;
    class ChemicalType extends Internal.Enum<Internal.ChemicalType> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static "getTypeFor(mekanism.api.chemical.ChemicalStack)"(arg0: Internal.ChemicalStack_<any>): Internal.ChemicalType;
        getSerializedName(): string;
        static fromNBT(arg0: Internal.CompoundTag_): Internal.ChemicalType;
        write(arg0: Internal.CompoundTag_): void;
        static valueOf(arg0: string): Internal.ChemicalType;
        "compareTo(mekanism.api.chemical.ChemicalType)"(arg0: Internal.ChemicalType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static getTypeFor(arg0: Internal.Chemical_<any>): Internal.ChemicalType;
        static values(): Internal.ChemicalType[];
        isInstance(arg0: Internal.Chemical_<any>): boolean;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChemicalType>>;
        static getTypeFor(arg0: Internal.ChemicalStack_<any>): Internal.ChemicalType;
        compareTo(arg0: Internal.ChemicalType_): number;
        static fromString(arg0: string): Internal.ChemicalType;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        static "getTypeFor(mekanism.api.chemical.Chemical)"(arg0: Internal.Chemical_<any>): Internal.ChemicalType;
        wait(arg0: number): void;
        static "getTypeFor(mekanism.api.recipes.ingredients.ChemicalStackIngredient)"(arg0: Internal.ChemicalStackIngredient_<any, any>): Internal.ChemicalType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static getTypeFor(arg0: Internal.ChemicalStackIngredient_<any, any>): Internal.ChemicalType;
        getDeclaringClass(): typeof Internal.ChemicalType;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.ChemicalType
        static readonly SLURRY: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly PIGMENT: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly GAS: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly INFUSION: (Internal.ChemicalType) & (Internal.ChemicalType);
    }
    type ChemicalType_ = "pigment" | ChemicalType | "gas" | "slurry" | "infusion";
    interface RenderBuffersExt {
        abstract endLevelRendering(): void;
        abstract beginLevelRendering(): void;
    }
    type RenderBuffersExt_ = RenderBuffersExt;
    class ItemSmokeBall extends Internal.ItemGeneric {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        withDefaultInfo(): Internal.ItemGeneric;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        fillItemCategory(arg0: Internal.CreativeModeTab$Output_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getColor(arg0: Internal.ItemStack_, arg1: number): number;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        addEffectInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.MobEffect_): void;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        withEffect(): Internal.ItemGeneric;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        withCombineInfo(): Internal.ItemGeneric;
        addItemPosition(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Location_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        addInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        addItemDistance(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Location_): void;
        "isEnabled(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        "addItemUse(java.util.List,ovh.corail.tombstone.helper.LangKey,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        addItemDesc(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        "addInfo(java.util.List,java.lang.String,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        withSoulboundInfo(): Internal.ItemGeneric;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        addPerkInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Perk_, arg2: number): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        addInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        withCraftingInfo(): Internal.ItemGeneric;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        withBetaInfo(): Internal.ItemGeneric;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        "addItemUse(java.util.List,java.lang.String,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        addWarn(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        "addInfo(java.util.List,ovh.corail.tombstone.helper.LangKey,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        addItemDesc(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        getSimpleName(): string;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        isEnabled(arg0: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        get enabled(): boolean
        get mod(): string
        set armorProtection(armorProtection: number)
        get simpleName(): string
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemSmokeBall_ = ItemSmokeBall;
    class OptionValueRedirectorManager {
        getClass(): typeof any;
        getCacheConfig(): xaero.lib.common.config.Config;
        toString(): string;
        notifyAll(): void;
        register<T>(arg0: Internal.ConfigOption_<T>, arg1: Internal.Supplier_<T>, arg2: Internal.Predicate_<Internal.ConfigChannel>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setChangeListener(arg0: Internal.IConfigChangeListener_): void;
        setChannel(arg0: Internal.ConfigChannel_): void;
        shouldRedirect(arg0: Internal.ConfigOption_<any>): boolean;
        hashCode(): number;
        wait(): void;
        getValue<T>(arg0: Internal.ConfigOption_<T>): T;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        freeze(): void;
        get class(): typeof any
        get cacheConfig(): xaero.lib.common.config.Config
        set changeListener(arg0: Internal.IConfigChangeListener_)
        set channel(arg0: Internal.ConfigChannel_)
    }
    type OptionValueRedirectorManager_ = OptionValueRedirectorManager;
    class ClickEvent$Action extends Internal.Enum<Internal.ClickEvent$Action> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.ClickEvent$Action_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.ClickEvent$Action;
        getDeclaringClass(): typeof Internal.ClickEvent$Action;
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ClickEvent$Action>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.ClickEvent$Action[];
        name(): string;
        hashCode(): number;
        static getByName(arg0: string): Internal.ClickEvent$Action;
        isAllowedFromServer(): boolean;
        ordinal(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        "compareTo(net.minecraft.network.chat.ClickEvent$Action)"(arg0: Internal.ClickEvent$Action_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ClickEvent$Action
        get allowedFromServer(): boolean
        get name(): string
        static readonly COPY_TO_CLIPBOARD: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly CHANGE_PAGE: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly OPEN_FILE: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly RUN_COMMAND: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly SUGGEST_COMMAND: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly OPEN_URL: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
    }
    type ClickEvent$Action_ = "copy_to_clipboard" | "suggest_command" | "open_file" | "change_page" | ClickEvent$Action | "open_url" | "run_command";
    interface ISpellModifier {
        applyModifiers(arg0: Internal.SpellStats$Builder_, arg1: Internal.AbstractSpellPart_, arg2: Internal.HitResult_, arg3: Internal.Level_, arg4: Internal.LivingEntity_, arg5: Internal.SpellContext_): Internal.SpellStats$Builder;
    }
    type ISpellModifier_ = ISpellModifier;
    interface VirtualBlockEntity {
        abstract isVirtual(): boolean;
        abstract markVirtual(): void;
        get virtual(): boolean
    }
    type VirtualBlockEntity_ = VirtualBlockEntity;
    class CopyNameFunction$NameSource extends Internal.Enum<Internal.CopyNameFunction$NameSource> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.CopyNameFunction$NameSource;
        toString(): string;
        compareTo(arg0: Internal.CopyNameFunction$NameSource_): number;
        notifyAll(): void;
        static getByName(arg0: string): Internal.CopyNameFunction$NameSource;
        getDeclaringClass(): typeof Internal.CopyNameFunction$NameSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        "compareTo(net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource)"(arg0: Internal.CopyNameFunction$NameSource_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CopyNameFunction$NameSource>>;
        ordinal(): number;
        wait(): void;
        static values(): Internal.CopyNameFunction$NameSource[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.CopyNameFunction$NameSource
        readonly name: string;
        static readonly BLOCK_ENTITY: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        readonly param: Internal.LootContextParam<any>;
        static readonly KILLER: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        static readonly KILLER_PLAYER: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        static readonly THIS: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
    }
    type CopyNameFunction$NameSource_ = "killer" | CopyNameFunction$NameSource | "killer_player" | "this" | "block_entity";
    class DarkScrollItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type DarkScrollItem_ = DarkScrollItem;
    abstract class ConfigValue <T> implements Internal.Comparable<Internal.ConfigValue<T>> {
        constructor()
        getClass(): typeof any;
        setOrder(o: number): this;
        addInfo(list: Internal.TooltipList_): void;
        getStringForGUI(v: T): net.minecraft.network.chat.Component;
        getColor(v: T): Internal.Color4I;
        abstract onClicked(arg0: Internal.Widget_, arg1: Internal.MouseButton_, arg2: Internal.ConfigCallback_): void;
        getTooltip(): string;
        notify(): void;
        getDefaultValue(): T;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(o: Internal.ConfigValue_<T>): number;
        setIcon(i: Internal.Icon_): this;
        getIcon(): Internal.Icon;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getStringForGUI(): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        getPath(): string;
        applyValue(): void;
        setNameKey(key: string): this;
        getIcon(v: T): Internal.Icon;
        toString(): string;
        notifyAll(): void;
        setCanEdit(e: boolean): this;
        init(group: Internal.ConfigGroup_, id: string, value: T, setter: Internal.Consumer_<T>, defaultValue: T): this;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<T>): number;
        hashCode(): number;
        setValue(value: T): void;
        wait(): void;
        getValue(): T;
        copy(value: T): T;
        getNameKey(): string;
        isEqual(v1: T, v2: T): boolean;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        setCurrentValue(v: T): boolean;
        setDefaultValue(defaultValue: T): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        set order(o: number)
        get tooltip(): string
        get defaultValue(): T
        set icon(i: Internal.Icon_)
        get icon(): Internal.Icon
        get name(): string
        get group(): Internal.ConfigGroup
        get stringForGUI(): net.minecraft.network.chat.Component
        get color(): Internal.Color4I
        get path(): string
        set nameKey(key: string)
        set canEdit(e: boolean)
        set value(value: T)
        get value(): T
        get nameKey(): string
        get canEdit(): boolean
        set currentValue(v: T)
        set defaultValue(defaultValue: T)
        static readonly NULL_TEXT: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        id: string;
    }
    type ConfigValue_<T> = ConfigValue<T>;
    class ClericShard extends Internal.AbstractRuneItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type ClericShard_ = ClericShard;
    class ItemMekaTool extends Internal.ItemEnergized implements Internal.IBlastingItem, Internal.IGenericRadialModeItem, Internal.IModuleContainerItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(stack: Internal.ItemStack_, state: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        addModuleDetails(stack: Internal.ItemStack_, tooltip: Internal.List_<net.minecraft.network.chat.Component>): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(stack: Internal.ItemStack_, book: Internal.ItemStack_): boolean;
        getBlastedBlocks(world: Internal.Level_, player: Player_, stack: Internal.ItemStack_, pos: BlockPos_, state: Internal.BlockState_): Internal.Map<BlockPos, Internal.BlockState>;
        static isModeItem(player: Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getDestroyEnergy(itemStack: Internal.ItemStack_, hardness: number, silk: boolean): Internal.FloatingLong;
        getBarWidth(stack: Internal.ItemStack_): number;
        static isModeItem(player: Player_, slotType: Internal.EquipmentSlot_): boolean;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(stack: Internal.ItemStack_, player: Player_, entity: Internal.LivingEntity_, hand: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        hasEnergyForDigAction(stack: Internal.ItemStack_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, player: Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        addCurioHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Player_, stack: Internal.ItemStack_): void;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(stack: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        addModule(stack: Internal.ItemStack_, type: Internal.ModuleData_<any>): void;
        getRadialData(stack: Internal.ItemStack_): Internal.RadialData<any>;
        getScrollTextComponent(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        setAttackSpeed(attackSpeed: number): void;
        hasModule(stack: Internal.ItemStack_, type: Internal.IModuleDataProvider_<any>): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        addHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Player_, stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): void;
        isNotReplaceableByPickAction(stack: Internal.ItemStack_, player: Player_, inventorySlot: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static canBlastBlock(world: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        removeModule(stack: Internal.ItemStack_, type: Internal.ModuleData_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(stack: Internal.ItemStack_, world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, entityliving: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        changeMode(player: Player_, stack: Internal.ItemStack_, shift: number, displayChange: Internal.IModeItem$DisplayChange_): void;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        static displayModeChange(player: Player_): void;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        getModule<MODULE extends Internal.ICustomModule<MODULE>>(stack: Internal.ItemStack_, typeProvider: Internal.IModuleDataProvider_<MODULE>): Internal.IModule<MODULE>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        supportsModule(stack: Internal.ItemStack_, typeProvider: Internal.IModuleDataProvider_<any>): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        supportsSlotType(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot,boolean)"(player: Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        getModules(stack: Internal.ItemStack_): Internal.List<mekanism.common.content.gear.Module<any>>;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        getMode<M extends Internal.IRadialMode>(stack: Internal.ItemStack_, radialData: Internal.RadialData_<M>): M;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        addDefault(): boolean;
        canPerformAction(stack: Internal.ItemStack_, action: Internal.ToolAction_): boolean;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(context: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        isModuleEnabled(stack: Internal.ItemStack_, type: Internal.IModuleDataProvider_<any>): boolean;
        shouldCauseBlockBreakReset(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(stack: Internal.ItemStack_): boolean;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(stack: Internal.ItemStack_, pos: BlockPos_, player: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        addItems(tabOutput: Internal.CreativeModeTab$Output_): void;
        notify(): void;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,boolean)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(state: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        static findPositions(world: Internal.Level_, targetPos: BlockPos_, player: Player_, radius: number): Internal.Map<BlockPos, Internal.BlockState>;
        getMod(): string;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot)"(player: Player_, slotType: Internal.EquipmentSlot_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        setMode<M extends Internal.IRadialMode>(stack: Internal.ItemStack_, player: Player_, radialData: Internal.RadialData_<M>, mode: M): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(stack: Internal.ItemStack_, target: Internal.LivingEntity_, attacker: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        getHUDElements(player: Player_, stack: Internal.ItemStack_): Internal.List<Internal.IHUDElement>;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_, slotChanged: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type ItemMekaTool_ = ItemMekaTool;
    interface Char2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<string, V> {
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2ObjectFunction<V>;
        containsKey(arg0: string): boolean;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<string, V>;
        remove(arg0: string): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Char2LongFunction;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2ObjectFunction<V>;
        "getOrDefault(char,java.lang.Object)"(arg0: string, arg1: V): V;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2ObjectFunction<V>;
        abstract get(arg0: string): V;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "apply(java.lang.Character)"(arg0: string): V;
        getOrDefault(arg0: string, arg1: V): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Char2ByteFunction;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2ObjectFunction<V>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Char2IntFunction;
        put(arg0: string, arg1: V): V;
        "put(char,java.lang.Object)"(arg0: string, arg1: V): V;
        defaultReturnValue(): V;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2ObjectFunction<V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Char2ReferenceFunction<T>;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        "remove(char)"(arg0: string): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract "get(char)"(arg0: string): V;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2ObjectFunction<V>;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: V): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, V>;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Char2ObjectFunction<T>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Char2FloatFunction;
        size(): number;
        apply(arg0: string): V;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Char2DoubleFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Object)"(arg0: string, arg1: V): V;
    }
    type Char2ObjectFunction_<V> = Char2ObjectFunction<V>;
    interface ThreadContext$ContextStack extends Internal.Collection<string>, Internal.Serializable {
        abstract peek(): string;
        spliterator(): Internal.Spliterator<string>;
        abstract asList(): Internal.List<string>;
        forEach(arg0: Internal.Consumer_<string>): void;
        abstract getImmutableStackOrNull(): this;
        abstract isEmpty(): boolean;
        abstract pop(): string;
        abstract copy(): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        parallelStream(): Internal.Stream<string>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract iterator(): Internal.Iterator<string>;
        abstract contains(arg0: any): boolean;
        abstract getDepth(): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<string>;
        abstract toArray(): any[];
        removeIf(arg0: Internal.Predicate_<string>): boolean;
        abstract push(message: string): void;
        abstract add(arg0: string): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract addAll(arg0: Internal.Collection_<string>): boolean;
        abstract clear(): void;
        abstract trim(depth: number): void;
        abstract equals(arg0: any): boolean;
        get immutableStackOrNull(): Internal.ThreadContext$ContextStack
        get empty(): boolean
        get depth(): number
    }
    type ThreadContext$ContextStack_ = ThreadContext$ContextStack;
    interface IHandcarTrain {
        abstract railways$isHandcar(): boolean;
        abstract railways$setHandcar(arg0: boolean): void;
    }
    type IHandcarTrain_ = IHandcarTrain;
    class PaintScreenEventJS extends Internal.PaintEventJS implements Internal.UnitVariables {
        constructor(m: Internal.Minecraft_, s: Internal.Screen_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, mx: number, my: number, d: number)
        constructor(m: Internal.Minecraft_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, d: number)
        alignY(y: number, h: number, alignY: Internal.AlignMode_): number;
        getMatrix(): Matrix4f;
        getVariables(): Internal.VariableSet;
        translate(x: number, y: number, z: number): void;
        notify(): void;
        begin(type: Internal.VertexFormat$Mode_, format: Internal.VertexFormat_): void;
        bindTextureForSetup(tex: ResourceLocation_): void;
        scale(scale: number): void;
        multiply(q: Quaternionf_): void;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        setShaderColor(r: number, g: number, b: number, a: number): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number, u: number, v: number): void;
        getEntity(): Internal.LivingEntity;
        push(): void;
        end(): void;
        wait(): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        rawText(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): void;
        beginQuads(texture: boolean): void;
        multiplyWithMatrix(m: Matrix4f_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        getServer(): Internal.MinecraftServer;
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
        blend(enabled: boolean): void;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        alignX(x: number, w: number, alignX: Internal.AlignMode_): number;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number): void;
        beginQuads(format: Internal.VertexFormat_): void;
        getLevel(): Internal.Level;
        "beginQuads(com.mojang.blaze3d.vertex.VertexFormat)"(format: Internal.VertexFormat_): void;
        text(text: net.minecraft.network.chat.Component_, x: number, y: number, color: number, shadow: boolean): void;
        pop(): void;
        translate(x: number, y: number): void;
        getPlayer(): Internal.LocalPlayer;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number, u0: number, v0: number, u1: number, v1: number): void;
        scale(x: number, y: number): void;
        scale(x: number, y: number, z: number): void;
        "beginQuads(boolean)"(texture: boolean): void;
        setShaderTexture(tex: ResourceLocation_): void;
        toString(): string;
        setPositionColorShader(): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        rotateDeg(angle: number): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        setPositionColorTextureShader(): void;
        wait(arg0: number): void;
        setShaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>): void;
        equals(arg0: any): boolean;
        rotateRad(angle: number): void;
        resetShaderColor(): void;
        get matrix(): Matrix4f
        get variables(): Internal.VariableSet
        get entity(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get class(): typeof any
        get level(): Internal.Level
        get player(): Internal.LocalPlayer
        set shaderTexture(tex: ResourceLocation_)
        set shaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>)
        readonly width: number;
        readonly mouseY: number;
        readonly inventory: boolean;
        readonly height: number;
        readonly painter: Internal.Painter;
        readonly mouseX: number;
    }
    type PaintScreenEventJS_ = PaintScreenEventJS;
    interface SerumBuilder$CanAffectTargetCallback {
        /**
         * Check if the target LivingEntity can be injected.
         * Called on client and server side.
         * @param level Client sided or server sided level
         * @param serumData CompoundTag stored under the tag key `biomancy:serum_data` on the Serum ItemStack
         * @param source Nullable source of the injection.
When the source is not null it is the LivingEntity with a injector.
When the source is null it is a dispenser or something similar.
         * @param target The LivingEntity to be injected.
        */
        abstract canAffect(arg0: Internal.Level_, arg1: Internal.CompoundTag_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        (arg0: Internal.Level, arg1: Internal.CompoundTag, arg2: Internal.LivingEntity, arg3: Internal.LivingEntity): boolean;
    }
    type SerumBuilder$CanAffectTargetCallback_ = ((arg0: Internal.Level, arg1: Internal.CompoundTag, arg2: Internal.LivingEntity, arg3: Internal.LivingEntity)=> boolean) | SerumBuilder$CanAffectTargetCallback;
    class FireworkRocketItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static setDuration(arg0: Internal.ItemStack_, arg1: number): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        static readonly TAG_EXPLOSION_COLORS: ("Colors") & (string);
        static readonly TAG_EXPLOSION_TYPE: ("Type") & (string);
        static readonly TAG_EXPLOSION_FADECOLORS: ("FadeColors") & (string);
        static readonly TAG_FLIGHT: ("Flight") & (string);
        static readonly TAG_EXPLOSION_FLICKER: ("Flicker") & (string);
        static readonly ROCKET_PLACEMENT_OFFSET: (0.15) & (number);
        static readonly TAG_EXPLOSIONS: ("Explosions") & (string);
        static readonly TAG_FIREWORKS: ("Fireworks") & (string);
        static readonly TAG_EXPLOSION_TRAIL: ("Trail") & (string);
        static readonly CRAFTABLE_DURATIONS: number[];
        static readonly TAG_EXPLOSION: ("Explosion") & (string);
    }
    type FireworkRocketItem_ = FireworkRocketItem;
    interface IntUnaryOperator {
        compose(arg0: Internal.IntUnaryOperator_): this;
        identity(): this;
        abstract applyAsInt(arg0: number): number;
        andThen(arg0: Internal.IntUnaryOperator_): this;
        (arg0: number): number;
    }
    type IntUnaryOperator_ = IntUnaryOperator | ((arg0: number)=> number);
    interface ClientboundPlayerInfoUpdatePacket$Action$Writer {
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry_): void;
        (arg0: Internal.FriendlyByteBuf, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry): void;
    }
    type ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ClientboundPlayerInfoUpdatePacket$Action$Writer | ((arg0: Internal.FriendlyByteBuf, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry)=> void);
    interface AccessorKeyMapping {
        getAllKeyMappings(): Internal.Map<string, Internal.KeyMapping>;
        get allKeyMappings(): Internal.Map<string, Internal.KeyMapping>
    }
    type AccessorKeyMapping_ = AccessorKeyMapping;
    interface IMenuItem {
        abstract getMenuHost(arg0: Player_, arg1: number, arg2: Internal.ItemStack_, arg3: BlockPos_): Internal.ItemMenuHost;
        (arg0: Player, arg1: number, arg2: Internal.ItemStack, arg3: BlockPos): Internal.ItemMenuHost_;
    }
    type IMenuItem_ = ((arg0: Player, arg1: number, arg2: Internal.ItemStack, arg3: BlockPos)=> Internal.ItemMenuHost_) | IMenuItem;
    interface BlockLootSubProviderAccessor {
        create$HAS_SILK_TOUCH(): Internal.LootItemCondition$Builder;
    }
    type BlockLootSubProviderAccessor_ = BlockLootSubProviderAccessor;
    interface Reference2ByteFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Reference2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Reference2IntFunction<K>;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Byte)"(arg0: K, arg1: number): number;
        "put(java.lang.Object,byte)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ByteFunction;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ByteFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Reference2CharFunction<K>;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeByte(arg0: any): number;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ByteFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Reference2LongFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ByteFunction;
        applyAsInt(arg0: K): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ByteFunction;
        "getOrDefault(java.lang.Object,byte)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract getByte(arg0: any): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ByteFunction;
        clear(): void;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2ByteFunction_<K> = ((arg0: any)=> number) | Reference2ByteFunction<K>;
    class ForgeZRecipeCrawl$Visit$Shaped extends Internal.ForgeZRecipeCrawl<Internal.ZRecipeCrawl$Visit$Shaped> {
        constructor()
        constructor(arg0: Internal.ZRecipeCrawl$Visit$Shaped_)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        get(): Internal.ZRecipeCrawl$Visit$Shaped;
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
    }
    type ForgeZRecipeCrawl$Visit$Shaped_ = ForgeZRecipeCrawl$Visit$Shaped;
    abstract class Panel extends Internal.Widget {
        constructor(panel: Internal.Panel_)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): this;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        setSize(w: number, h: number): void;
        toString(): string;
        isOffset(): boolean;
        getCursor(): dev.ftb.mods.ftblibrary.ui.CursorType;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        abstract alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): dev.ftb.mods.ftblibrary.ui.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        getContentWidth(): number;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setY(v: number): void;
        static isCtrlKeyDown(): boolean;
        static isKeyDown(key: number): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get offset(): boolean
        get cursor(): dev.ftb.mods.ftblibrary.ui.CursorType
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): dev.ftb.mods.ftblibrary.ui.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type Panel_ = Panel;
    class Scope$Builder {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        additionalZoom(arg0: number): this;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        viewFinderOffset(arg0: number): this;
        overlay(arg0: ResourceLocation_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        viewFinderDistance(arg0: number): this;
        modifiers(...arg0: Internal.IWeaponModifier_[]): this;
        hashCode(): number;
        overlay(): this;
        wait(): void;
        wait(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        centerOffset(arg0: number): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        reticleOffset(arg0: number): this;
        equals(arg0: any): boolean;
        stable(arg0: boolean): this;
        aimFovModifier(arg0: number): this;
        build(): com.nukateam.ntgl.common.data.attachment.impl.Scope;
        get class(): typeof any
    }
    type Scope$Builder_ = Scope$Builder;
    interface ExperienceOrbAccessor {
        abstract botania_getCount(): number;
        abstract botania_setCount(arg0: number): void;
    }
    type ExperienceOrbAccessor_ = ExperienceOrbAccessor;
    class HSB extends Internal.Record {
        constructor(hue: number, saturation: number, brightness: number)
        getClass(): typeof any;
        toPacket(buf: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        saturation(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hue(): number;
        brightness(): number;
        hashCode(): number;
        static fromPacket(buf: Internal.FriendlyByteBuf_): Internal.HSB;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.HSB>;
        static readonly EMPTY: (Internal.HSB) & (Internal.HSB);
    }
    type HSB_ = HSB;
    interface LithiumDefaultedList {
        abstract changedInteractionConditions(): void;
        (): void;
    }
    type LithiumDefaultedList_ = (()=> void) | LithiumDefaultedList;
    interface Short2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2FloatFunction;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Short2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "containsKey(short)"(arg0: number): boolean;
        "getOrDefault(short,float)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2FloatFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract "get(short)"(arg0: number): number;
        "remove(short)"(arg0: number): number;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        containsKey(arg0: number): boolean;
        "put(short,float)"(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Float)"(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2FloatFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Short2ShortFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Short2ByteFunction;
        apply(arg0: number): number;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2FloatFunction;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Short2CharFunction;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2FloatFunction;
        size(): number;
        put(arg0: number, arg1: number): number;
        clear(): void;
    }
    type Short2FloatFunction_ = Short2FloatFunction;
    interface Serializable {
    }
    type Serializable_ = Serializable;
    interface ITextureAtlasSpriteLoader {
        abstract loadContents(arg0: ResourceLocation_, arg1: Internal.Resource_, arg2: Internal.FrameSize_, arg3: Internal.NativeImage_, arg4: Internal.AnimationMetadataSection_, arg5: Internal.ForgeTextureMetadata_): Internal.SpriteContents;
        abstract makeSprite(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.TextureAtlasSprite;
    }
    type ITextureAtlasSpriteLoader_ = ITextureAtlasSpriteLoader;
    class MagicSwordItem extends Internal.ExtendedSwordItem implements Internal.IPresetSpellContainer {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: any_[], arg4: Internal.Map_<Internal.Attribute, Internal.AttributeModifier>, arg5: Internal.Item$Properties_)
        constructor(arg0: T, arg1: Internal.Item$Properties_, arg2: any_[])
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        handler$kkp000$dummmmmmy$mm$damageEquipment(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getSpells(): Internal.List<SpellData>;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        biomancy$getDefaultModifiers(): Internal.Multimap<any, any>;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get spells(): Internal.List<SpellData>
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type MagicSwordItem_ = MagicSwordItem;
    class BuilderBase {
        translationKey(key: Special.LangKey): Internal.BuilderBase<T>;
    }
    type BuilderBase_ = BuilderBase;
    interface DropTargetListener extends Internal.EventListener {
        abstract dragExit(arg0: Internal.DropTargetEvent_): void;
        abstract drop(arg0: Internal.DropTargetDropEvent_): void;
        abstract dragEnter(arg0: Internal.DropTargetDragEvent_): void;
        abstract dragOver(arg0: Internal.DropTargetDragEvent_): void;
        abstract dropActionChanged(arg0: Internal.DropTargetDragEvent_): void;
    }
    type DropTargetListener_ = DropTargetListener;
    class LootParams$Builder {
        constructor(arg0: Internal.ServerLevel_)
        getClass(): typeof any;
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        toString(): string;
        handler$kom000$lootjs$addTypeOnCreate(paramSet: Internal.LootContextParamSet_, cir: Internal.CallbackInfoReturnable_<any>): void;
        notifyAll(): void;
        withOptionalParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        wait(): void;
        withParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        withDynamicDrop(arg0: ResourceLocation_, arg1: Internal.LootParams$DynamicDrop_): this;
        wait(arg0: number): void;
        withLuck(arg0: number): this;
        create(arg0: Internal.LootContextParamSet_): Internal.LootParams;
        equals(arg0: any): boolean;
        get class(): typeof any
        get level(): Internal.ServerLevel
        luck: number;
    }
    type LootParams$Builder_ = LootParams$Builder;
    interface EntityTickListAccessor {
        abstract getActive(): Internal.Int2ObjectMap<Internal.Entity>;
        get active(): Internal.Int2ObjectMap<Internal.Entity>
        (): Internal.Int2ObjectMap_<Internal.Entity>;
    }
    type EntityTickListAccessor_ = (()=> Internal.Int2ObjectMap_<Internal.Entity>) | EntityTickListAccessor;
    abstract class NumberConfig <T extends number> extends Internal.ConfigFromString<T> {
        constructor(mn: T, mx: T)
        getColor(v: T): Internal.Color4I;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getTooltip(): string;
        notify(): void;
        compareTo(arg0: any): number;
        "getColor(java.lang.Object)"(arg0: any): Internal.Color4I;
        "getStringForGUI(java.lang.Number)"(v: T): net.minecraft.network.chat.Component;
        getStringForGUI(): net.minecraft.network.chat.Component;
        applyValue(): void;
        getIcon(v: T): Internal.Icon;
        canScroll(): boolean;
        setCanEdit(e: boolean): Internal.ConfigValue<T>;
        "getColor(java.lang.Number)"(v: T): Internal.Color4I;
        getColor(arg0: any): Internal.Color4I;
        scrollValue(currentValue: T, forward: boolean): Internal.Optional<T>;
        abstract parse(arg0: Internal.Consumer_<T>, arg1: string): boolean;
        setValue(value: T): void;
        wait(): void;
        copy(value: T): T;
        getNameKey(): string;
        setDefaultValue(defaultValue: T): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        setOrder(o: number): Internal.ConfigValue<T>;
        getStringForGUI(v: T): net.minecraft.network.chat.Component;
        addInfo(list: Internal.TooltipList_): void;
        getDefaultValue(): T;
        wait(arg0: number, arg1: number): void;
        compareTo(o: Internal.ConfigValue_<T>): number;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<T>;
        getIcon(): Internal.Icon;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getStringForGUI(arg0: any): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        "getStringForGUI(java.lang.Object)"(arg0: any): net.minecraft.network.chat.Component;
        getPath(): string;
        setNameKey(key: string): Internal.ConfigValue<T>;
        toString(): string;
        notifyAll(): void;
        init(group: Internal.ConfigGroup_, id: string, value: T, setter: Internal.Consumer_<T>, defaultValue: T): Internal.ConfigValue<T>;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<T>): number;
        getStringFromValue(v: T): string;
        withScrollIncrement(increment: T): this;
        hashCode(): number;
        getValue(): T;
        isEqual(v1: T, v2: T): boolean;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        fader(v: boolean): this;
        setCurrentValue(v: T): boolean;
        equals(arg0: any): boolean;
        get tooltip(): string
        get stringForGUI(): net.minecraft.network.chat.Component
        set canEdit(e: boolean)
        set value(value: T)
        get nameKey(): string
        set defaultValue(defaultValue: T)
        get class(): typeof any
        set order(o: number)
        get defaultValue(): T
        set icon(i: Internal.Icon_)
        get icon(): Internal.Icon
        get name(): string
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set nameKey(key: string)
        get value(): T
        get canEdit(): boolean
        set currentValue(v: T)
        static readonly COLOR: (Internal.Color4I) & (Internal.Color4I);
        readonly min: T;
        readonly max: T;
        fader: boolean;
    }
    type NumberConfig_<T extends number> = NumberConfig<T>;
    abstract class AbstractContainerMenu implements fuzs.stylisheffects.mixin.client.accessor.AbstractContainerMenuAccessor, Internal.AbstractContainerMenuAccessor, fuzs.puzzleslib.mixin.accessor.AbstractContainerMenuAccessor, Internal.ContainerAccess, Internal.AbstractContainerMenuInvoker {
        constructor(arg0: Internal.MenuType_<any>, arg1: number)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        createCarriedSlotAccess(): Internal.SlotAccess;
        abstract quickMoveStack(arg0: Player_, arg1: number): Internal.ItemStack;
        resetQuickCraft(): void;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        getLastSlots(): Internal.NonNullList<any>;
        incrementStateId(): number;
        static checkContainerDataCount(arg0: Internal.ContainerData_, arg1: number): void;
        isValidSlotIndex(arg0: number): boolean;
        puzzleslib$callAddSlot(arg0: Internal.Slot_): Internal.Slot;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        getRemoteSlots(): Internal.NonNullList<any>;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        wrapOperation$gej000$azurelib$syncAzureIDWithRemote(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Operation_<any>): boolean;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        tryItemClickBehaviourOverride(arg0: Player_, arg1: Internal.ClickAction_, arg2: Internal.Slot_, arg3: Internal.ItemStack_, arg4: Internal.ItemStack_): boolean;
        getCarried(): Internal.ItemStack;
        clearContainer(arg0: Player_, arg1: net.minecraft.world.Container_): void;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        getMenuType(): Internal.MenuType<any>;
        puzzlesapi$getMenuType(): Internal.MenuType<any>;
        doClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Player_): void;
        static isValidQuickcraftType(arg0: number, arg1: Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        synchronizeCarriedToRemote(): void;
        resumeRemoteUpdates(): void;
        addDataSlots(arg0: Internal.ContainerData_): void;
        static getQuickcraftHeader(arg0: number): number;
        static stillValid(arg0: Internal.ContainerLevelAccess_, arg1: Player_, arg2: Internal.Block_): boolean;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        redirect$gej000$azurelib$syncAzureIDWithRemote(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        toString(): string;
        clickMenuButton(arg0: Player_, arg1: number): boolean;
        handler$kbb000$relics$onClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Player_, arg4: Internal.CallbackInfo_): void;
        handler$mpb000$sounds$$item_transfer_sound_effects(slotIndex: number, button: number, actionType: Internal.ClickType_, player: Player_, ci: Internal.CallbackInfo_): void;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        static checkContainerSize(arg0: net.minecraft.world.Container_, arg1: number): void;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Player_): void;
        abstract stillValid(arg0: Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        wrapOperation$gej000$azurelib$detectSlotChangeWithAzureID(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Operation_<any>): boolean;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get lastSlots(): Internal.NonNullList<any>
        get remoteSlots(): Internal.NonNullList<any>
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get menuType(): Internal.MenuType<any>
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        synchronizer: Internal.ContainerSynchronizer;
        static readonly QUICKCRAFT_TYPE_CLONE: (2) & (number);
        remoteCarried: Internal.ItemStack;
        readonly containerListeners: Internal.List<net.minecraft.world.inventory.ContainerListener>;
        static readonly SLOT_CLICKED_OUTSIDE: (-999) & (number);
        readonly slots: Internal.NonNullList<Internal.Slot>;
        static readonly CARRIED_SLOT_SIZE: (2147483647) & (number);
        static readonly QUICKCRAFT_TYPE_GREEDY: (1) & (number);
        remoteSlots: Internal.NonNullList<Internal.ItemStack>;
        stateId: number;
        menuType: Internal.MenuType<any>;
        static readonly QUICKCRAFT_HEADER_CONTINUE: (1) & (number);
        static readonly QUICKCRAFT_HEADER_START: (0) & (number);
        static readonly QUICKCRAFT_HEADER_END: (2) & (number);
        quickcraftStatus: number;
        suppressRemoteUpdates: boolean;
        readonly quickcraftSlots: Internal.Set<Internal.Slot>;
        quickcraftType: number;
        static readonly QUICKCRAFT_TYPE_CHARITABLE: (0) & (number);
        containerId: number;
        lastSlots: Internal.NonNullList<Internal.ItemStack>;
    }
    type AbstractContainerMenu_ = AbstractContainerMenu;
    class Behavior$Status extends Internal.Enum<Internal.Behavior$Status> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.Behavior$Status[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Behavior$Status;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Behavior$Status>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.Behavior$Status;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Behavior$Status_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "compareTo(net.minecraft.world.entity.ai.behavior.Behavior$Status)"(arg0: Internal.Behavior$Status_): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Behavior$Status
        static readonly RUNNING: (Internal.Behavior$Status) & (Internal.Behavior$Status);
        static readonly STOPPED: (Internal.Behavior$Status) & (Internal.Behavior$Status);
    }
    type Behavior$Status_ = "stopped" | Behavior$Status | "running";
    abstract class AzAnimator <K, T> {
        getClass(): typeof any;
        animate(arg0: T, arg1: number, arg2: boolean): void;
        toString(): string;
        setCustomAnimations(arg0: T, arg1: number): void;
        notifyAll(): void;
        createBoneCache(): Internal.AzBoneCache;
        getAnimationControllerContainer(): Internal.AzAnimationControllerContainer<T>;
        context(): Internal.AzAnimationContext<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract registerControllers(arg0: Internal.AzAnimationControllerContainer_<T>): void;
        getOrCreateContext(arg0: K): Internal.AzAnimationContext<T>;
        hashCode(): number;
        createAzAnimationTimer(arg0: Internal.AzAnimatorConfig_): Internal.AzAnimationTimer;
        animate(arg0: T, arg1: number): void;
        abstract getAnimationLocation(arg0: T): ResourceLocation;
        wait(): void;
        wait(arg0: number): void;
        getAnimation(arg0: T, arg1: string): Internal.AzBakedAnimation;
        equals(arg0: any): boolean;
        get class(): typeof any
        get animationControllerContainer(): Internal.AzAnimationControllerContainer<T>
        reloadAnimations: boolean;
    }
    type AzAnimator_<K, T> = AzAnimator<K, T>;
    interface Supplier <T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T> | (()=> T);
    class GeoArmorRenderer <T extends Internal.Item & Internal.GeoItem> extends Internal.HumanoidModel<any> implements Internal.GeoRenderer<T>, Internal.UpdateableLevel<any> {
        constructor(arg0: I)
        constructor(arg0: Internal.GeoModel_<T>)
        mobplayeranimator$getHead(): Internal.ModelPart;
        mobplayeranimator$getRightArm(): Internal.ModelPart;
        "getRenderType(java.lang.Object,net.minecraft.resources.ResourceLocation,net.minecraft.client.renderer.MultiBufferSource,float)"(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        "preRender(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getBodyBone(): Internal.GeoBone;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        static register<O extends Internal.UpdateableLevel<any>>(arg0: O): void;
        rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        mobplayeranimator$getHat(): Internal.ModelPart;
        getRenderType(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        withScale(arg0: number, arg1: number): this;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        emf$getEMFRootModel(): Internal.EMFModelPartRoot;
        "prepareMobModel(net.minecraft.world.entity.LivingEntity,float,float,float)"(arg0: T, arg1: number, arg2: number, arg3: number): void;
        getRightLegBone(): Internal.GeoBone;
        getRightBootBone(): Internal.GeoBone;
        handler$ioh002$xaerominimap$onRender(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.CallbackInfo_): void;
        getPackedOverlay(arg0: T, arg1: number, arg2: number): number;
        copyPropertiesTo(arg0: Internal.HumanoidModel_<T>): void;
        mobplayeranimator$getLeftArm(): Internal.ModelPart;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getBodyYOffset(): number;
        getHeadBone(): Internal.GeoBone;
        mobplayeranimator$getInitialBodyPose(): Internal.HumanoidBodyPose;
        atl$onClientLevelUpdated(arg0: Internal.ClientLevel_): void;
        getBodyParts(): Internal.Iterable<any>;
        renderRecursively(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        "actuallyRender(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        mobplayeranimator$getBody(): Internal.ModelPart;
        copyPropertiesTo(arg0: Internal.EntityModel_<T>): void;
        getClass(): typeof any;
        setupAnim(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        updateAnimatedTextureFrame(arg0: Internal.GeoAnimatable_): void;
        applyBoneVisibilityByPart(arg0: Internal.EquipmentSlot_, arg1: Internal.ModelPart_, arg2: Internal.HumanoidModel_<any>): void;
        preRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getInstanceId(arg0: T): number;
        "renderRecursively(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.GeoBone,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        isScaleHead(): boolean;
        "copyPropertiesTo(net.minecraft.client.model.EntityModel)"(arg0: Internal.EntityModel_<T>): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        "copyPropertiesTo(net.minecraft.client.model.HumanoidModel)"(arg0: Internal.HumanoidModel_<T>): void;
        handler$mmo003$moonlight$setupAnim(entity: Internal.LivingEntity_, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, ci: Internal.CallbackInfo_): void;
        static createMesh(arg0: Internal.CubeDeformation_, arg1: number): Internal.MeshDefinition;
        "prepareMobModel(net.minecraft.world.entity.Entity,float,float,float)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getLeftBootBone(): Internal.GeoBone;
        setAllVisible(arg0: boolean): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        handler$mmo002$moonlight$poseRightArm(entity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        "getInstanceId(java.lang.Object)"(arg0: T): number;
        bucklerAnimationsLeftArm(arg0: Internal.InteractionHand_, arg1: Internal.LivingEntity_): void;
        "updateAnimatedTextureFrame(software.bernie.geckolib.core.animatable.GeoAnimatable)"(arg0: Internal.GeoAnimatable_): void;
        getRenderType(arg0: Internal.GeoAnimatable_, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        "getRenderType(software.bernie.geckolib.core.animatable.GeoAnimatable,net.minecraft.resources.ResourceLocation,net.minecraft.client.renderer.MultiBufferSource,float)"(arg0: Internal.GeoAnimatable_, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        toString(): string;
        "getInstanceId(software.bernie.geckolib.core.animatable.GeoAnimatable)"(arg0: Internal.GeoAnimatable_): number;
        notifyAll(): void;
        handler$jmg002$piglinproliferation$setupAnim(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CallbackInfo_): void;
        doPostRenderCleanup(): void;
        getEmoteSupplier(): Internal.SetableSupplier<any>;
        setupAttackAnimation(arg0: T, arg1: number): void;
        "preRender(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        handler$mmo002$moonlight$poseLeftArm(entity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        handler$zok000$exposure$onSetupAnim(entity: Internal.LivingEntity_, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, ci: Internal.CallbackInfo_): void;
        mobplayeranimator$setFirstPersonNext(arg0: boolean): void;
        getCurrentEntity(): Internal.Entity;
        wait(arg0: number): void;
        "renderRecursively(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.GeoBone,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        setEmoteSupplier(emoteSupplier: Internal.SetableSupplier_<any>): void;
        getLeftLegBone(): Internal.GeoBone;
        handler$inh000$immersiveengineering$rotationAngleCallback(arg0: Internal.LivingEntity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.CallbackInfo_): void;
        getHeadParts(): Internal.Iterable<any>;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getBabyHeadScale(): number;
        create$callHeadParts(): Internal.Iterable<any>;
        "setupAnim(net.minecraft.world.entity.Entity,float,float,float,float,float)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        invokeBodyParts(): Internal.Iterable<any>;
        emf$isEMFModel(): boolean;
        handler$mem001$etched$poseLeftArm(livingEntity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        headParts(): Internal.Iterable<Internal.ModelPart>;
        withScale(arg0: number): this;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        notify(): void;
        getGeoModel(): Internal.GeoModel<T>;
        getCurrentSlot(): Internal.EquipmentSlot;
        fireCompileRenderLayersEvent(): void;
        scaleModelForBaby(arg0: Internal.PoseStack_, arg1: T, arg2: number, arg3: boolean): void;
        getRenderLayers(): Internal.List<Internal.GeoRenderLayer<T>>;
        getHead(): Internal.ModelPart;
        mobplayeranimator$getLeftLeg(): Internal.ModelPart;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        addRenderLayer(arg0: Internal.GeoRenderLayer_<T>): this;
        getBabyBodyScale(): number;
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        getTextureLocation(arg0: T): ResourceLocation;
        "setupAnim(net.minecraft.world.entity.LivingEntity,float,float,float,float,float)"(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        updateAnimatedTextureFrame(arg0: T): void;
        getBodyParts_vampirism(): Internal.Iterable<any>;
        handler$egl000$immersive_melodies$immersiveMelodies$injectSetupAnim(entity: Internal.LivingEntity_, limbAngle: number, limbDistance: number, animationProgress: number, headYaw: number, headPitch: number, ci: Internal.CallbackInfo_): void;
        handler$mem000$etched$setupAttackAnimation(livingEntity: Internal.LivingEntity_, f: number, ci: Internal.CallbackInfo_, arm: Internal.HumanoidArm_, part: Internal.ModelPart_): void;
        wait(): void;
        "actuallyRender(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        playerAnimator_prepForFirstPersonRender(): void;
        renderFinal(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        prepForRender(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: Internal.HumanoidModel_<any>): void;
        getLeftArmBone(): Internal.GeoBone;
        getBabyYHeadOffset(): number;
        getBabyZHeadOffset(): number;
        getCurrentStack(): Internal.ItemStack;
        mobplayeranimator$isFirstPersonNext(): boolean;
        getAnimatable(): T;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        getArm(arg0: Internal.HumanoidArm_): Internal.ModelPart;
        wait(arg0: number, arg1: number): void;
        bodyParts(): Internal.Iterable<Internal.ModelPart>;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vec3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        handler$ljd000$createbigcannons$setupAnimHead(livingEntity: Internal.LivingEntity_, f: number, g: number, h: number, i: number, j: number, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getPackedOverlay(arg0: T, arg1: number): number;
        handler$mem001$etched$poseRightArm(livingEntity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        create$callBodyParts(): Internal.Iterable<any>;
        renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        prepareMobModel(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        getInstanceId(arg0: Internal.GeoAnimatable_): number;
        firePreRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): boolean;
        firePostRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        handler$ljd000$createbigcannons$setupAnimNearTail(livingEntity: Internal.LivingEntity_, f: number, g: number, h: number, i: number, j: number, ci: Internal.CallbackInfo_): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        bucklerAnimationsRightArm(arg0: Internal.InteractionHand_, arg1: Internal.LivingEntity_): void;
        "updateAnimatedTextureFrame(java.lang.Object)"(arg0: T): void;
        mobplayeranimator$getRightLeg(): Internal.ModelPart;
        getModelParts(): Internal.List<any>;
        mobplayeranimator$copyMutatedAttributes(arg0: Internal.EntityModel_<any>): void;
        hashCode(): number;
        getRightArmBone(): Internal.GeoBone;
        scaleModelForRender(arg0: number, arg1: number, arg2: Internal.PoseStack_, arg3: T, arg4: Internal.BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        translateToHand(arg0: Internal.HumanoidArm_, arg1: Internal.PoseStack_): void;
        equals(arg0: any): boolean;
        get bodyBone(): Internal.GeoBone
        get rightLegBone(): Internal.GeoBone
        get rightBootBone(): Internal.GeoBone
        get bodyYOffset(): number
        get headBone(): Internal.GeoBone
        get bodyParts(): Internal.Iterable<any>
        get class(): typeof any
        get scaleHead(): boolean
        get leftBootBone(): Internal.GeoBone
        set allVisible(arg0: boolean)
        get emoteSupplier(): Internal.SetableSupplier<any>
        get currentEntity(): Internal.Entity
        set emoteSupplier(emoteSupplier: Internal.SetableSupplier_<any>)
        get leftLegBone(): Internal.GeoBone
        get headParts(): Internal.Iterable<any>
        get babyHeadScale(): number
        get geoModel(): Internal.GeoModel<T>
        get currentSlot(): Internal.EquipmentSlot
        get renderLayers(): Internal.List<Internal.GeoRenderLayer<T>>
        get head(): Internal.ModelPart
        get babyBodyScale(): number
        get bodyParts_vampirism(): Internal.Iterable<any>
        get leftArmBone(): Internal.GeoBone
        get babyYHeadOffset(): number
        get babyZHeadOffset(): number
        get currentStack(): Internal.ItemStack
        get animatable(): T
        get modelParts(): Internal.List<any>
        get rightArmBone(): Internal.GeoBone
    }
    type GeoArmorRenderer_<T extends Internal.Item & Internal.GeoItem> = GeoArmorRenderer<T>;
    abstract class ControlsRegister {
        getClass(): typeof any;
        getKeyMappingControllers(): Internal.KeyMappingControllerManager;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        onStage2(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        registerKeybindings(arg0: Internal.Consumer_<Internal.KeyMapping>): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get keyMappingControllers(): Internal.KeyMappingControllerManager
    }
    type ControlsRegister_ = ControlsRegister;
    interface IForgeFluidState {
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getFluidType(): Internal.FluidType;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        get fluidType(): Internal.FluidType
    }
    type IForgeFluidState_ = IForgeFluidState;
    class PhotographFrameEntity extends Internal.HangingEntity {
        constructor(entityType: Internal.EntityType_<Internal.PhotographFrameEntity>, level: Internal.Level_)
        constructor(level: Internal.Level_, pos: BlockPos_, facingDirection: Internal.Direction_)
        handler$idj000$etstlib$addVibrationListener(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.CallbackInfo_): void;
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        handler$inl000$entityjs$getSwimSplashSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$log002$blueprint$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        servercore$setActivatedTick(tick: number): void;
        etf$getType(): Internal.EntityType<any>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        getXRot(): number;
        isSuppressingBounce(): boolean;
        etf$getOptifineVehicleId(): number;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        chunkPosition(): Internal.ChunkPos;
        emf$isOnGround(): boolean;
        shouldRender(arg0: Internal.RenderBuffer_<any, any>): boolean;
        gameEvent(arg0: Internal.GameEvent_): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        draw3dTrail(partialPoses: Internal.List_<Vec3d>, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        getAttachmentProgress(arg0: number): number;
        "shouldRender(it.hurts.octostudios.octolib.modules.particles.RenderBuffer)"(arg0: Internal.RenderBuffer_<any, any>): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getBlockY(): number;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        setFrameItem(stack: Internal.ItemStack_): void;
        transition$setRawPosition(arg0: Vec3d_): void;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        servercore$incFullTickCount(): void;
        isSpectator(): boolean;
        getTrailMaxLength(): number;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        emf$isGlowing(): boolean;
        getRandomZ(arg0: number): number;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        onFlap(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        handler$kbd000$relics$setWet(arg0: Internal.CallbackInfoReturnable_<any>): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        getTrailScale(): number;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setItemRotation(rotation: number): void;
        getPos(): BlockPos;
        localvar$kbd001$relics$fluidCollision(arg0: Vec3d_): Vec3d;
        getBlock(): Internal.BlockContainerJS;
        etf$getHandItems(): Internal.Iterable<any>;
        handler$inl000$entityjs$lavaHurt(ci: Internal.CallbackInfo_): void;
        handler$hgi000$goety$goetyLightLevelMagicValue(arg0: Internal.CallbackInfoReturnable_<any>): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        "isGlowing()"(): boolean;
        emf$isTouchingWater(): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        emf$getVariableMap(): Internal.Object2FloatOpenHashMap<any>;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        handler$kof000$betterthirdperson$postTurnHook(arg0: Internal.CallbackInfo_): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        setOutOfCamera(value: boolean): void;
        getTrailUpdateFrequency(): number;
        handler$klh012$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        handler$inl000$entityjs$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        getPlaceSound(): Internal.SoundEvent;
        setDirection(arg0: Internal.Direction_): void;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        isDescending(): boolean;
        emf$getPitch(): number;
        setSize(size: number): void;
        getYHeadRot(): number;
        handler$inl000$entityjs$getBlockJumpFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        "setGlowing(boolean)"(arg0: boolean): void;
        shouldRenderAtSqrDistance(distance: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        recreateFromPacket(packet: Internal.ClientboundAddEntityPacket_): void;
        getWidth(): number;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        handler$mfh000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isCulled(): boolean;
        getTrailConfigData(): Internal.TrailConfigData;
        setFireType(arg0: ResourceLocation_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        etf$getOptifineId(): number;
        getLeashOffset(): Vec3d;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        isAttackable(): boolean;
        processPortalCooldown(): void;
        handler$mfh000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getSlot(slot: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        emf$isInLava(): boolean;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        stopRiding(): void;
        "shouldRender(it.hurts.octostudios.octolib.modules.particles.trail.TrailBuffer)"(buffer: Internal.TrailBuffer_): boolean;
        handler$inl000$entityjs$isInvulnerableTo(pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getX(arg0: number): number;
        handler$inl000$entityjs$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        getLuminance(): number;
        callUnsetRemoved(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        handler$jop000$domesticationinnovation$di_gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        hasPassenger(arg0: Internal.Entity_): boolean;
        getDynamicLightX(): number;
        callReapplyPosition(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        handler$inl000$entityjs$repositionEntityAfterLoad(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$jik00f$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        emf$getZ(): number;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        handler$inl000$entityjs$getBlockSpeedFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        emf$getYaw(): number;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        servercore$getActivationType(): Internal.ActivationType;
        handler$hek000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        etf$getBlockY(): number;
        isSprinting(): boolean;
        getMotionY(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getDimensions(): Internal.EntityDimensions;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        setTrailConfigData(data: Internal.TrailConfigData_): void;
        handler$inl000$entityjs$move(pType: Internal.MoverType_, pPos: Vec3d_, ci: Internal.CallbackInfo_): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getIsInsidePortal(): boolean;
        canSpawnSprintParticle(): boolean;
        canRide(arg0: Internal.Entity_): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$ljb001$createbigcannons$turn(yaw: number, pitch: number, ci: Internal.CallbackInfo_): void;
        disappearAfterDeath(): boolean;
        handler$inl001$entityjs$playerTouch(pPlayer: Player_, ci: Internal.CallbackInfo_): void;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        getPose(): Internal.Pose;
        getSharedFlag(arg0: number): boolean;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTrailFadeOutColor(): number;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        handler$jia000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        handler$jop000$domesticationinnovation$di_canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        etf$getUuid(): Internal.UUID;
        removeVehicle(): void;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        defineSynchedData(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        checkInsideBlocks(): void;
        updateFluidOnEyes(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        createHoverEvent(): Internal.HoverEvent;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        handler$inl000$entityjs$positionRider(pPassenger: Internal.Entity_, pCallback: Internal.Entity$MoveFunction_, ci: Internal.CallbackInfo_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        emf$getVelocity(): Vec3d;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        etf$isBlockEntity(): boolean;
        canChangeDirection(): boolean;
        shouldUpdateDynamicLight(): boolean;
        setItem(stack: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        handler$inl000$entityjs$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        "getPos()"(): Internal.Position;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(tag: Internal.CompoundTag_): void;
        survives(): boolean;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        getFrameItem(): Internal.ItemStack;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        getCommandSenderWorld(): Internal.Level;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        getItemRotation(): number;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        isMoving(): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        setMagneticDeltaY(arg0: number): void;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        getHeight(): number;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        handler$jop000$domesticationinnovation$di_rideableInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        getFluidJumpThreshold(): number;
        servercore$getActivatedImmunityTick(): number;
        handler$inl000$entityjs$entityJs$tick(ci: Internal.CallbackInfo_): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Player_): boolean;
        handler$inl000$entityjs$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        setRewinding(arg0: boolean): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        etf$getWorld(): Internal.Level;
        repositionEntityAfterLoad(): boolean;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getStepHeight(): number;
        getBaseFrameItem(): Internal.PhotographFrameItem;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        etf$getBlockPos(): BlockPos;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        emf$age(): number;
        etf$hasCustomName(): boolean;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        getRemoveItemSound(): Internal.SoundEvent;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        isTrailGrowing(): boolean;
        getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        handler$inl000$entityjs$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        hasExactlyOnePlayerPassenger(): boolean;
        getSwimSplashSound(): Internal.SoundEvent;
        isOnPortalCooldown(): boolean;
        biomancy$setEyeHeight(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isAlwaysTicking(): boolean;
        handler$kof000$betterthirdperson$preTurnHook(arg0: Internal.CallbackInfo_): void;
        handler$jop000$domesticationinnovation$di_getMovementEmission(arg0: Internal.CallbackInfoReturnable_<any>): void;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        emf$getX(): number;
        getValue(arg0: Internal.TrackedData_<any>): any;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        emf$hasPassengers(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        handler$jik000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        endimateTick(): void;
        lithiumOnBlockCacheDeleted(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        emf$hasVehicle(): boolean;
        /**
         * @deprecated
        */
        maxUpStep(): number;
        setGlowing(glowing: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        isAlive(): boolean;
        getBbHeight(): number;
        handler$inl000$entityjs$rideTick(ci: Internal.CallbackInfo_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        handler$hgi000$goety$isSwimming(arg0: Internal.CallbackInfoReturnable_<any>): void;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getDataMap(): Internal.Map<any, any>;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        handler$inl000$entityjs$isPickable(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$getSwimSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        emf$isInvisible(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        emf$isSprinting(): boolean;
        handler$jel000$treechop$injectDataSaving(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getBreakSound(): Internal.SoundEvent;
        setPose(arg0: Internal.Pose_): void;
        getTrailRenderDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        handler$jia00e$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        toString(): string;
        handler$inl000$entityjs$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$idj000$etstlib$removeFromTickerMap(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        isDirty(): boolean;
        etf$getScoreboardTeam(): Internal.Team;
        "getServer()"(): Internal.MinecraftServer;
        setYRot(arg0: number): void;
        localvar$cie000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        onClientRemoval(): void;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        "getPos()"(): BlockPos;
        handler$hdm000$irons_spellbooks$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMagneticDeltaZ(): number;
        abstract sdl$resetDynamicLight(): void;
        handler$hoi000$servercore$ignorePushingWhileInactive(x: number, y: number, z: number, ci: Internal.CallbackInfo_): void;
        handler$mfh000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        modifyExpressionValue$odl000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        handler$hdm000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$gdb000$combatnouveau$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        servercore$setInactive(inactive: boolean): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        setAnimationTick(arg0: number): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(key: Internal.EntityDataAccessor_<any>): void;
        handler$hgi000$goety$canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        emf$prevY(): number;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getBlockJumpFactor(): number;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        handler$hoi000$servercore$onPistonMove(moverType: Internal.MoverType_, vec3: Vec3d_, ci: Internal.CallbackInfo_): void;
        getDistanceSq(pos: BlockPos_): number;
        emf$getTypeString(): string;
        playEntityOnFireExtinguishedSound(): void;
        isFullyFrozen(): boolean;
        handler$jop000$domesticationinnovation$di_isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$cok000$radium$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getAddItemSound(): Internal.SoundEvent;
        getMagneticDeltaX(): number;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        getSize(): number;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        getPitch(): number;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        getRotateSound(): Internal.SoundEvent;
        handler$mfh000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        alwaysAccepts(): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        isVisuallyCrawling(): boolean;
        servercore$setActivatedImmunityTick(tick: number): void;
        /**
         * @deprecated
        */
        getRenderDistance(): number;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        biomancy$getDimensions(): Internal.EntityDimensions;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        isActive(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        handler$inl000$entityjs$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getPosition(arg0: number): Vec3d;
        servercore$inactiveTick(): void;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        recalculateBoundingBox(): void;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        "getItem()"(): Internal.ItemStack;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(tag: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getEncodeId(): string;
        getY(arg0: number): number;
        emf$prevPitch(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        dropItem(brokenEntity: Internal.Entity_): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getDynamicLightY(): number;
        attack(damageSource: DamageSource_, amount: number): boolean;
        getBlockSpeedFactor(): number;
        modifyReturnValue$odl000$create$onFireImmune(arg0: boolean): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        servercore$isExcluded(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        getTrailFadeInColor(): number;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        startRiding(arg0: Internal.Entity_): boolean;
        setChopData(arg0: Internal.SyncedChopData_): Internal.SyncedChopData;
        getTrailPosition(partialTicks: number): Vec3d;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        handler$mfh000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        postMagnetJump(): void;
        shouldRender(buffer: Internal.TrailBuffer_): boolean;
        getEyeY(): number;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        getChopData(): Internal.SyncedChopData;
        handler$inl002$entityjs$onInteract(pPlayer: Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        playerTouch(arg0: Player_): void;
        addTag(arg0: string): boolean;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getEyeHeight(arg0: Internal.Pose_): number;
        doWaterSplashEffect(): void;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        servercore$getActivatedTick(): number;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        /**
         * @deprecated
        */
        render(pTicks: number, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        resetDynamicLight(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        etf$distanceTo(entity: Internal.Entity_): number;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handleNetherPortal(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        handler$inl000$entityjs$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        servercore$getFullTickCount(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        handler$inl001$entityjs$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        handler$mfh000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        abstract sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        callGetBlockPosBelowThatAffectsMyMovement(): BlockPos;
        clean(): void;
        handler$jia000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        markFusionRecomputeModels(): void;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        handler$mfh001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        setYaw(arg0: number): void;
        createBuffer(): Internal.RenderBuffer<any, any>;
        getPickRadius(): number;
        isRemoved(): boolean;
        handler$inl000$entityjs$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        emf$isSneaking(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        refreshDimensions(): void;
        isRewinding(): boolean;
        self(): Internal.Entity;
        handler$inl001$entityjs$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        getFirstPassenger(): Internal.Entity;
        getEntries(arg0: boolean): Internal.Set<any>;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        handler$hgi000$goety$makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        interact(player: Player_, hand: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        setXRot(arg0: number): void;
        checkSlowFallDistance(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        addPassenger(arg0: Internal.Entity_): void;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        handler$inl000$entityjs$entityJs$ignoreExplosion(cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract sdl$getDynamicLightZ(): number;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        getLookAngle(): Vec3d;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        emf$isOnFire(): boolean;
        getPermissionLevel(): number;
        getMotionZ(): number;
        /**
         * @deprecated
        */
        getUpdateFrequency(): number;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        emf$isAlive(): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        handler$hgi000$goety$fireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        setTimeout(): void;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        etf$canBeBright(): boolean;
        setY(y: number): void;
        getFeetBlockState(): Internal.BlockState;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getPos(): Internal.Position;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        handler$jik000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        getTrailRenderPositions(points: Internal.List_<Vec3d>, pTicks: number): Internal.List<Vec3d>;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        processFlappingMovement(): void;
        entityJs$getTypeId(): string;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        emf$isWet(): boolean;
        handler$inl000$entityjs$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        handler$inl000$entityjs$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        getTrailInterpolationPoints(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        isInWater(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        unsetRemoved(): void;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        handler$hgi000$goety$push(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$canAddPassenger(pPassenger: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        abstract sdl$getLuminance(): number;
        isNoGravity(): boolean;
        setMagneticDeltaZ(arg0: number): void;
        servercore$isInactive(): boolean;
        emf$getY(): number;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        updateSwimming(): void;
        handler$inl000$entityjs$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        handler$hgi000$goety$playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CallbackInfo_): void;
        getUuid(): Internal.UUID;
        spawn(): void;
        handler$inl000$entityjs$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        kill(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        handler$mfh000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        biomancy$setDimensions(arg0: Internal.EntityDimensions_): void;
        handler$kbd002$relics$getBlockSpeedFactor(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$mfh000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        handler$klh001$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        handler$lhe000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        revive(): void;
        getBbWidth(): number;
        handler$hoi000$servercore$setupActivationStates(type: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$onClientRemoval(ci: Internal.CallbackInfo_): void;
        callSetRot(arg0: number, arg1: number): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        handler$inl000$entityjs$isFlapping(cir: Internal.CallbackInfoReturnable_<any>): void;
        canUpdate(): boolean;
        getTypeName(): net.minecraft.network.chat.Component;
        getTicksRequiredToFreeze(): number;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        handler$jop000$domesticationinnovation$di_pushedByWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        emf$prevZ(): number;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        onRemovedFromWorld(): void;
        lithiumOnBlockCacheSet(newState: Internal.BlockState_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        isInFluidType(predicate: Internal.BiPredicate_<any, any>, forAllTypes: boolean): boolean;
        handler$inl001$entityjs$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        setYHeadRot(arg0: number): void;
        getPickResult(): Internal.ItemStack;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        handler$inl000$entityjs$onFlap(ci: Internal.CallbackInfo_): void;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getRenderPosition(partialTick: number): Vec3d;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        handler$inl000$entityjs$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        notifyAll(): void;
        getPassengersRidingOffset(): number;
        handler$idj000$etstlib$cancelHurt(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$kkh000$raidsenhanced$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isFrame(): boolean;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        handler$inl000$entityjs$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        setNoGravity(arg0: boolean): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        isFrameInvisible(): boolean;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        getLightProbePosition(arg0: number): Vec3d;
        handler$jel000$treechop$injectDataLoading(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        emf$prevX(): number;
        handler$inl000$entityjs$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        onSyncedDataUpdated(key: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        setMotionX(x: number): void;
        isTrailAlive(): boolean;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$inl003$entityjs$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        distanceToEntity(arg0: Internal.Entity_): number;
        localvar$fgh000$fluidCollision(arg0: Vec3d_): Vec3d;
        playPlacementSound(): void;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        lithiumSetClimbingMobCachingSectionUpdateBehavior(listening: boolean): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        setDynamicLightEnabled(arg0: boolean): void;
        moveTo(arg0: Vec3d_): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        handler$inl000$entityjs$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$stopRiding(ci: Internal.CallbackInfo_): void;
        isForcedVisible(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        renderTrail(pTicks: number, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        get XRot(): number
        get suppressingBounce(): boolean
        set culled(value: boolean)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get playingEndimation(): Internal.PlayableEndimation
        get blockY(): number
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        set frameItem(stack: Internal.ItemStack_)
        get spectator(): boolean
        get trailMaxLength(): number
        get persistentData(): Internal.CompoundTag
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        set animator(arg0: Internal.AzAnimator_<any, any>)
        set level(arg0: Internal.Level_)
        get trailScale(): number
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set itemRotation(rotation: number)
        get pos(): BlockPos
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get "glowing()"(): boolean
        set outOfCamera(value: boolean)
        get trailUpdateFrequency(): number
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get placeSound(): Internal.SoundEvent
        set direction(arg0: Internal.Direction_)
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get descending(): boolean
        set size(size: number)
        get YHeadRot(): number
        set "glowing(boolean)"(arg0: boolean)
        get width(): number
        set deltaMovement(arg0: Vec3d_)
        get culled(): boolean
        get trailConfigData(): Internal.TrailConfigData
        set fireType(arg0: ResourceLocation_)
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get luminance(): number
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        set swimming(arg0: boolean)
        get rotationVector(): Internal.Vec2
        get sprinting(): boolean
        get motionY(): number
        get dimensions(): Internal.EntityDimensions
        set trailConfigData(data: Internal.TrailConfigData_)
        get isInsidePortal(): boolean
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get pose(): Internal.Pose
        get trailFadeOutColor(): number
        set z(z: number)
        get y(): number
        set item(stack: Internal.ItemStack_)
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get "pos()"(): Internal.Position
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get frameItem(): Internal.ItemStack
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get motions(): Internal.Stack<any>
        get itemRotation(): number
        get moving(): boolean
        get fireImmuneTicks(): number
        set magneticDeltaY(arg0: number)
        get height(): number
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get baseFrameItem(): Internal.PhotographFrameItem
        set dataMap(arg0: Internal.Map_<any, any>)
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get removeItemSound(): Internal.SoundEvent
        get trailGrowing(): boolean
        get fireType(): ResourceLocation
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(glowing: boolean)
        get YRot(): number
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get breakSound(): Internal.SoundEvent
        set pose(arg0: Internal.Pose_)
        get trailRenderDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get dirty(): boolean
        get "server()"(): Internal.MinecraftServer
        set YRot(arg0: number)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get dynamicLightEnabled(): boolean
        get "pos()"(): BlockPos
        get magneticDeltaZ(): number
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get passenger(): boolean
        get flapping(): boolean
        get viewScale(): number
        get visualRotationYInDegrees(): number
        get discrete(): boolean
        get level(): Internal.Level
        set animationTick(arg0: number)
        get blockJumpFactor(): number
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get addItemSound(): Internal.SoundEvent
        get magneticDeltaX(): number
        get blockZ(): number
        get silent(): boolean
        get size(): number
        get pitch(): number
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get noEndimationPlaying(): boolean
        get rotateSound(): Internal.SoundEvent
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        /**
         * @deprecated
        */
        get renderDistance(): number
        get active(): boolean
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get "item()"(): Internal.ItemStack
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get encodeId(): string
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get dynamicLightY(): number
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get yaw(): number
        get trailFadeInColor(): number
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        set chopData(arg0: Internal.SyncedChopData_)
        get forward(): Vec3d
        get id(): number
        get dirtyEntries(): Internal.Set<any>
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get chopData(): Internal.SyncedChopData
        get swimSound(): Internal.SoundEvent
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get onRails(): boolean
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get removed(): boolean
        get rewinding(): boolean
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get firstPassenger(): Internal.Entity
        set XRot(arg0: number)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get permissionLevel(): number
        get motionZ(): number
        /**
         * @deprecated
        */
        get updateFrequency(): number
        get invisible(): boolean
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get pos(): Internal.Position
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get animationTick(): number
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get trailInterpolationPoints(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set magneticDeltaZ(arg0: number)
        get cachedFeetBlockState(): Internal.BlockState
        get uuid(): Internal.UUID
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get pickResult(): Internal.ItemStack
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get passengersRidingOffset(): number
        get frame(): boolean
        set noGravity(arg0: boolean)
        get indirectPassengers(): Internal.Iterable<any>
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get frameInvisible(): boolean
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get dynamicLightWorld(): Internal.Level
        get magneticAttachmentFace(): Internal.Direction
        set motionX(x: number)
        get trailAlive(): boolean
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        set dynamicLightEnabled(arg0: boolean)
        get forcedVisible(): boolean
        get endimatedState(): Internal.Endimatable$EndimatedState
        get freezing(): boolean
        set sharedFlagOnFire(arg0: boolean)
        static readonly LOGGER: (Internal.Log4jLogger) & (org.slf4j.Logger);
    }
    type PhotographFrameEntity_ = PhotographFrameEntity;
    abstract class UpgradeWrapperBase <W extends Internal.IUpgradeWrapper, T extends Internal.UpgradeItemBase<W>> implements Internal.IUpgradeWrapper {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getUpgradeStack(): Internal.ItemStack;
        setEnabled(arg0: boolean): void;
        isInCooldown(arg0: Internal.Level_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getCooldownTime(): number;
        isEnabled(): boolean;
        canBeDisabled(): boolean;
        hashCode(): number;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        get upgradeStack(): Internal.ItemStack
        set enabled(arg0: boolean)
        get cooldownTime(): number
        get enabled(): boolean
    }
    type UpgradeWrapperBase_<W extends Internal.IUpgradeWrapper, T extends Internal.UpgradeItemBase<W>> = UpgradeWrapperBase<W, T>;
    class WeightedOre implements Internal.CommonCollect$IWeighted {
        constructor(arg0: Internal.BlockState_, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getBlockState(): Internal.BlockState;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getWeight(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get blockState(): Internal.BlockState
        get weight(): number
    }
    type WeightedOre_ = WeightedOre;
    class RingBufferAdmin implements Internal.RingBufferAdminMBean {
        getClass(): typeof any;
        hashCode(): number;
        abstract getBufferSize(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract getRemainingCapacity(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get bufferSize(): number
        get remainingCapacity(): number
    }
    type RingBufferAdmin_ = RingBufferAdmin;
    class ScreenEvent$Init$Post extends Internal.ScreenEvent$Init {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.List_<Internal.GuiEventListener>, arg2: Internal.Consumer_<Internal.GuiEventListener>, arg3: Internal.Consumer_<Internal.GuiEventListener>)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getListenersList(): Internal.List<Internal.GuiEventListener>;
        isCancelable(): boolean;
        removeListener(arg0: Internal.GuiEventListener_): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        addListener(arg0: Internal.GuiEventListener_): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get listenersList(): Internal.List<Internal.GuiEventListener>
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$Init$Post_ = ScreenEvent$Init$Post;
    class PermissionType <T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        typeToken(): T;
        equals(arg0: any): boolean;
        typeName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PermissionType_<T> = PermissionType<T>;
    interface IArrayEntry {
        abstract drawToolTip(arg0: number, arg1: number): void;
        abstract keyTyped(arg0: string, arg1: number): void;
        abstract mouseClicked(arg0: number, arg1: number, arg2: number): void;
        abstract isValueSavable(): boolean;
        abstract getValue(): any;
        abstract updateCursorCounter(): void;
        get valueSavable(): boolean
        get value(): any
    }
    type IArrayEntry_ = IArrayEntry;
    class BlockComponent extends Internal.Record implements Internal.RecipeComponent<Internal.Block> {
        constructor(crole: Internal.ComponentRole_)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: com.google.gson.JsonObject_): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Block, O>;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Block>;
        key(name: string): Internal.RecipeKey<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<com.google.gson.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: com.google.gson.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, map: Internal.Map_<any, any>): void;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        crole(): Internal.ComponentRole;
        checkValueHasChanged(oldValue: Internal.Block_, newValue: Internal.Block_): boolean;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Block>>;
        write(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,net.minecraft.world.level.block.Block)"(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): com.google.gson.JsonElement;
        read(recipe: Internal.RecipeJS_, from: any): Internal.Block;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Block;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<Internal.Block>;
        getClass(): typeof any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Block>>;
        write(arg0: Internal.RecipeJS_, arg1: any): com.google.gson.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Block;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block)"(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<Internal.Block>;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<com.google.gson.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Block>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Block, O>;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly OUTPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly INPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly BLOCK: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
    }
    type BlockComponent_ = BlockComponent;
    interface IntSet extends Internal.Set<number>, Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract "contains(int)"(arg0: number): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of(arg0: number, arg1: number): this;
        of(): this;
        abstract contains(arg0: number): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "remove(int)"(arg0: number): boolean;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        abstract "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        spliterator(): Internal.IntSpliterator;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        abstract "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        abstract remove(arg0: number): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(int[])"(arg0: number[]): number[];
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        "of(int,int,int)"(arg0: number, arg1: number, arg2: number): this;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        "of(int)"(arg0: number): this;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "of(int,int)"(arg0: number, arg1: number): this;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract toArray(arg0: number[]): number[];
        "of(int[])"(...arg0: number[]): this;
        of(arg0: number, arg1: number, arg2: number): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        of(...arg0: number[]): this;
        abstract hashCode(): number;
        abstract size(): number;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        of<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        abstract "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        abstract equals(arg0: any): boolean;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type IntSet_ = IntSet;
    abstract class Config$Serializer <T extends com.almostreliable.unified.config.Config> {
        constructor()
        abstract deserialize(arg0: com.google.gson.JsonObject_): T;
        getClass(): typeof any;
        toString(): string;
        isInvalid(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        abstract serialize(arg0: T): com.google.gson.JsonObject;
        wait(arg0: number): void;
        safeGet<V>(supplier: Internal.Supplier_<V>, defaultValue: V): V;
        equals(arg0: any): boolean;
        get class(): typeof any
        get invalid(): boolean
    }
    type Config$Serializer_<T extends com.almostreliable.unified.config.Config> = Config$Serializer<T>;
    class MultiblockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type MultiblockItem_ = MultiblockItem;
    class MutableInt extends number implements Internal.Mutable<number>, Internal.Comparable<Internal.MutableInt> {
        constructor()
        constructor(arg0: number)
        constructor(arg0: number)
        constructor(arg0: string)
        decrementAndGet(): number;
        "getAndAdd(int)"(arg0: number): number;
        doubleValue(): number;
        getAndAdd(arg0: number): number;
        increment(): void;
        compareTo(arg0: Internal.MutableInt_): number;
        add(arg0: number): void;
        notify(): void;
        "setValue(java.lang.Object)"(arg0: any): void;
        compareTo(arg0: any): number;
        "add(int)"(arg0: number): void;
        subtract(arg0: number): void;
        setValue(arg0: any): void;
        getAndDecrement(): number;
        longValue(): number;
        "addAndGet(java.lang.Number)"(arg0: number): number;
        toInteger(): number;
        incrementAndGet(): number;
        "subtract(java.lang.Number)"(arg0: number): void;
        getValue(): any;
        shortValue(): number;
        getAndIncrement(): number;
        wait(): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        addAndGet(arg0: number): number;
        setValue(arg0: number): void;
        getClass(): typeof any;
        floatValue(): number;
        add(arg0: number): void;
        "setValue(int)"(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        addAndGet(arg0: number): number;
        getAndAdd(arg0: number): number;
        intValue(): number;
        decrement(): void;
        "getAndAdd(java.lang.Number)"(arg0: number): number;
        toString(): string;
        "subtract(int)"(arg0: number): void;
        notifyAll(): void;
        "add(java.lang.Number)"(arg0: number): void;
        subtract(arg0: number): void;
        "setValue(java.lang.Number)"(arg0: number): void;
        "compareTo(org.apache.commons.lang3.mutable.MutableInt)"(arg0: Internal.MutableInt_): number;
        hashCode(): number;
        "addAndGet(int)"(arg0: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setValue(arg0: number): void;
        byteValue(): number;
        set "value(java.lang.Object)"(arg0: any)
        set value(arg0: any)
        get andDecrement(): number
        get value(): any
        get andIncrement(): number
        set value(arg0: number)
        get class(): typeof any
        set "value(int)"(arg0: number)
        set "value(java.lang.Number)"(arg0: number)
        set value(arg0: number)
    }
    type MutableInt_ = MutableInt;
    class LivingUseTotemEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: DamageSource_, arg2: Internal.ItemStack_, arg3: Internal.InteractionHand_)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        getHandHolding(): Internal.InteractionHand;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        getSource(): DamageSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getTotem(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        get handHolding(): Internal.InteractionHand
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get source(): DamageSource
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get totem(): Internal.ItemStack
    }
    type LivingUseTotemEvent_ = LivingUseTotemEvent;
    class BakedGlyph {
        constructor(arg0: any_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        getClass(): typeof any;
        renderType(arg0: Internal.Font$DisplayMode_): Internal.RenderType;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handler$cgk000$oculus$render(italic: boolean, x: number, y: number, matrix: Matrix4f_, vertexConsumer: Internal.VertexConsumer_, red: number, green: number, blue: number, alpha: number, light: number, ci: Internal.CallbackInfo_): void;
        renderEffect(arg0: Internal.BakedGlyph$Effect_, arg1: Matrix4f_, arg2: Internal.VertexConsumer_, arg3: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        render(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        get class(): typeof any
    }
    type BakedGlyph_ = BakedGlyph;
    interface StructurifyStructurePlacement extends Internal.StructurifyWithStructureSet {
        abstract structurify$getStructureSetId(): string;
        abstract structurify$getOriginalSalt(): number;
        abstract structurify$getOriginalFrequency(): number;
        abstract structurify$setStructureSetId(arg0: string): void;
    }
    type StructurifyStructurePlacement_ = StructurifyStructurePlacement;
    interface VertexBufferHelper {
        abstract restoreBinding(): void;
        abstract saveBinding(): void;
    }
    type VertexBufferHelper_ = VertexBufferHelper;
    class ChemicalHandlerManager$GasHandlerManager extends Internal.ChemicalHandlerManager<Internal.Gas, Internal.GasStack, Internal.IGasTank, Internal.IGasHandler, Internal.IGasHandler$ISidedGasHandler> {
        constructor(holder: Internal.IChemicalTankHolder_<Internal.Gas, Internal.GasStack, Internal.IGasTank>, baseHandler: Internal.IGasHandler$ISidedGasHandler_)
        getContainers(side: Internal.Direction_): Internal.List<Internal.IGasTank>;
        getClass(): typeof any;
        toString(): string;
        invalidateAll(): void;
        notifyAll(): void;
        resolve<T>(capability: Internal.Capability_<T>, side: Internal.Direction_): Internal.LazyOptional<T>;
        notify(): void;
        getSupportedCapabilities(): Internal.List<Internal.Capability<any>>;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getInternal(): Internal.IGasHandler$ISidedGasHandler;
        wait(): void;
        invalidate(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        canHandle(): boolean;
        get class(): typeof any
        get supportedCapabilities(): Internal.List<Internal.Capability<any>>
        get internal(): Internal.IGasHandler$ISidedGasHandler
    }
    type ChemicalHandlerManager$GasHandlerManager_ = ChemicalHandlerManager$GasHandlerManager;
    class IntTag extends Internal.NumericTag {
        constructor(arg0: number)
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsFloat(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.IntTag;
        getAsDouble(): number;
        getType(): Internal.TagType<Internal.IntTag>;
        accept(arg0: Internal.TagVisitor_): void;
        getAsInt(): number;
        hashCode(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asFloat(): number
        get asLong(): number
        get id(): number
        get asDouble(): number
        get type(): Internal.TagType<Internal.IntTag>
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly TYPE: Internal.TagType<Internal.IntTag>;
    }
    type IntTag_ = IntTag;
    interface GenerationProperties {
        abstract getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>;
        abstract getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        abstract getFeatures(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>;
        get features(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>
    }
    type GenerationProperties_ = GenerationProperties;
    abstract class AbstractLong2ObjectMap <V> extends Internal.AbstractLong2ObjectFunction<V> implements Internal.Serializable, Internal.Long2ObjectMap<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        "computeIfAbsent(long,it.unimi.dsi.fastutil.longs.Long2ObjectFunction)"(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        "computeIfAbsent(java.lang.Long,java.util.function.Function)"(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "computeIfPresent(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getClass(): typeof any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "compute(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "remove(long)"(arg0: number): V;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        wait(arg0: number): void;
        replace(arg0: number, arg1: V): V;
        abstract long2ObjectEntrySet(): Internal.ObjectSet<Internal.Long2ObjectMap$Entry<V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        notify(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "apply(long)"(arg0: number): V;
        keySet(): Internal.Set<any>;
        "putIfAbsent(long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        "compute(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        wait(): void;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        static identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: V): void;
        remove(arg0: number, arg1: any): boolean;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        apply(arg0: number): V;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        values(): Internal.ObjectCollection<V>;
        abstract get(arg0: number): V;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractLong2ObjectMap_<V> = AbstractLong2ObjectMap<V>;
    class HoodItem extends Internal.CustomGeoArmorItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        static ARMOR_MODIFIER_UUID_PER_TYPE$biomancy_$md$b94be4$1(): Internal.EnumMap<any, any>;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<net.minecraft.network.chat.Component>, isAdvanced: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        createRenderer(consumer: Internal.Consumer_<any>): void;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        biomancy$setDefaultModifiers(arg0: Internal.Multimap_<any, any>): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(controllerRegistrar: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        static getARMOR_MODIFIERS(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getRenderProvider(): Internal.Supplier<any>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        static getModifierUUID_vampirism(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        initializeClient(consumer: Internal.Consumer_<any>): void;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        biomancy$getDefaultModifiers(): Internal.Multimap<any, any>;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        static getARMOR_MODIFIERS$werewolves_$md$b94be4$3(): Internal.EnumMap<any, any>;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        static biomancy$ARMOR_MODIFIER_UUID_PER_TYPE(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        static getModifierUUID_vampirism$vampirism_$md$b94be4$2(): Internal.EnumMap<any, any>;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        get ARMOR_MODIFIERS(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get renderProvider(): Internal.Supplier<any>
        get creativeTab(): string
        get modifierUUID_vampirism(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get ARMOR_MODIFIERS$werewolves_$md$b94be4$3(): Internal.EnumMap<any, any>
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        get modifierUUID_vampirism$vampirism_$md$b94be4$2(): Internal.EnumMap<any, any>
    }
    type HoodItem_ = HoodItem;
    class SinglePoolElement extends Internal.StructurePoolElement implements Internal.AccessorSinglePoolElement, Internal.SinglePoolElementExtension, Internal.WaystoneStructurePoolElement, com.craisinlord.integrated_api.mixins.structures.SinglePoolElementAccessor, com.github.L_Ender.cataclysm.mixin.accessor.SinglePoolElementAccessor, Internal.SinglePoolElementAccessor, com.yungnickyoung.minecraft.yungsapi.mixin.accessor.SinglePoolElementAccessor {
        constructor(arg0: Internal.Either_<ResourceLocation, Internal.StructureTemplate>, arg1: Internal.Holder_<Internal.StructureProcessorList>, arg2: Internal.StructureTemplatePool$Projection_)
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        callGetTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        static templateCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Either<ResourceLocation, Internal.StructureTemplate>>;
        getDataMarkers(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: boolean): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        getSettings(arg0: Internal.Rotation_, arg1: Internal.BoundingBox_, arg2: boolean): Internal.StructurePlaceSettings;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        structure_gel$setPiece(arg0: Internal.StructurePiece_): void;
        getType(): Internal.StructurePoolElementType<any>;
        getTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        waystones$isWaystone(): boolean;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        static processorsCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Holder<Internal.StructureProcessorList>>;
        handler$ljo002$waystones$place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean, arg10: Internal.CallbackInfoReturnable_<any>): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        integratedapi_getProcessors(): Internal.Holder<any>;
        handler$hic000$guardvillagers$place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean, arg10: Internal.CallbackInfoReturnable_<any>): void;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        waystones$setIsWaystone(arg0: boolean): void;
        getTemplate(): Internal.Either<any, any>;
        wait(arg0: number): void;
        structure_gel$getPiece(): Internal.StructurePiece;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        integratedapi_getTemplate(): Internal.Either<any, any>;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        get template(): Internal.Either<any, any>
        template: Internal.Either<ResourceLocation, Internal.StructureTemplate>;
        readonly processors: Internal.Holder<Internal.StructureProcessorList>;
        static readonly CODEC: Internal.Codec<Internal.SinglePoolElement>;
    }
    type SinglePoolElement_ = SinglePoolElement;
    class AnimationApplier extends dev.kosmx.playerAnim.core.impl.AnimationProcessor {
        constructor(animation: Internal.IAnimation_)
        getClass(): typeof any;
        getFirstPersonMode(): Internal.FirstPersonMode;
        updatePart(partName: string, part: Internal.ModelPart_): void;
        toString(): string;
        notifyAll(): void;
        getBend(modelName: string): dev.kosmx.playerAnim.core.util.Pair<number, number>;
        isFirstPersonAnimationDisabled(): boolean;
        isActive(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        getFirstPersonConfiguration(): Internal.FirstPersonConfiguration;
        hashCode(): number;
        setTickDelta(tickDelta: number): void;
        wait(): void;
        wait(arg0: number): void;
        get3DTransform(modelName: string, type: Internal.TransformType_, value0: Internal.Vec3f_): Internal.Vec3f;
        equals(arg0: any): boolean;
        get class(): typeof any
        get firstPersonMode(): Internal.FirstPersonMode
        get firstPersonAnimationDisabled(): boolean
        get active(): boolean
        get firstPersonConfiguration(): Internal.FirstPersonConfiguration
        set tickDelta(tickDelta: number)
    }
    type AnimationApplier_ = AnimationApplier;
    class CitizenSkillHandler$SkillData {
        getClass(): typeof any;
        getLevel(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExperience(): number;
        setExperience(arg0: number): void;
        hashCode(): number;
        wait(): void;
        setLevel(arg0: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get level(): number
        get experience(): number
        set experience(arg0: number)
        set level(arg0: number)
    }
    type CitizenSkillHandler$SkillData_ = CitizenSkillHandler$SkillData;
    class WireCollisionData {
        addConnection(arg0: blusunrize.immersiveengineering.api.wires.Connection_): void;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        removeConnection(arg0: blusunrize.immersiveengineering.api.wires.Connection_): void;
        hashCode(): number;
        getWiresIn(arg0: Internal.SectionPos_): Internal.List<Internal.WireCollisionData$ConnectionSegments>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getCollisionInfo(arg0: BlockPos_): Internal.Collection<Internal.WireCollisionData$CollisionInfo>;
        get class(): typeof any
    }
    type WireCollisionData_ = WireCollisionData;
    class CarvingMaskPlacement extends Internal.PlacementModifier {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        static forStep(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMaskPlacement;
        wait(): void;
        type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CarvingMaskPlacement>;
    }
    type CarvingMaskPlacement_ = CarvingMaskPlacement;
    class Convertable <RAW> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "of(net.minecraftforge.fluids.FluidStack)"(value: Internal.FluidStack_): Internal.Convertable<Internal.FluidStack>;
        hashCode(): number;
        convert(helper: Internal.BaseComputerHelper_): any;
        static of(value: Internal.FluidStack_): Internal.Convertable<Internal.FluidStack>;
        wait(): void;
        static of<RAW>(value: RAW, converter: Internal.BiFunction_<Internal.BaseComputerHelper, RAW, any>): Internal.Convertable<RAW>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static "of(mekanism.api.chemical.ChemicalStack)"(value: Internal.ChemicalStack_<any>): Internal.Convertable<Internal.ChemicalStack<any>>;
        static of(value: Internal.ChemicalStack_<any>): Internal.Convertable<Internal.ChemicalStack<any>>;
        get class(): typeof any
    }
    type Convertable_<RAW> = Convertable<RAW>;
    class CoreAPI$GameVersion extends Internal.Enum<Internal.CoreAPI$GameVersion> {
        getPackageName(arg0: Internal.CoreAPI$ModLoader_, arg1: string): string;
        isV19(): boolean;
        getClassExt(): string;
        getDeclaringClass(): typeof Internal.CoreAPI$GameVersion;
        "isAtLeast(java.lang.String)"(arg0: string): boolean;
        notify(): void;
        withClassExt(arg0: string): string;
        compareTo(arg0: any): number;
        getPackageName(arg0: boolean): string;
        "isLessThan(java.lang.String)"(arg0: string): boolean;
        "compareTo(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$GameVersion)"(arg0: Internal.CoreAPI$GameVersion_): number;
        static values(): Internal.CoreAPI$GameVersion[];
        isV19_2(): boolean;
        isV19_4(): boolean;
        "isAtLeast(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$GameVersion)"(arg0: Internal.CoreAPI$GameVersion_): boolean;
        isCompatibleNeoForge(): boolean;
        getPackageName(): string;
        "getPackageName(java.lang.String)"(arg0: string): string;
        isAtMost(arg0: Internal.CoreAPI$GameVersion_): boolean;
        withClassExt(arg0: string, arg1: boolean): string;
        isCompatibleModernForge(): boolean;
        getPkg(): string;
        static valueOf(arg0: string): Internal.CoreAPI$GameVersion;
        isAtLeast(arg0: Internal.CoreAPI$GameVersion_): boolean;
        "isLessThan(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$GameVersion)"(arg0: Internal.CoreAPI$GameVersion_): boolean;
        isLessThan(arg0: Internal.CoreAPI$GameVersion_): boolean;
        isV20_1(): boolean;
        name(): string;
        getPackageName(arg0: string): string;
        "getPackageName(boolean)"(arg0: boolean): string;
        isV20(): boolean;
        isGreaterThan(arg0: string): boolean;
        wait(): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        isAtMost(arg0: string): boolean;
        isV21_1(): boolean;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CoreAPI$GameVersion>>;
        isV18(): boolean;
        isAtLeast(arg0: string): boolean;
        isV12(): boolean;
        isV16(): boolean;
        wait(arg0: number, arg1: number): void;
        isLessThan(arg0: string): boolean;
        getName(): string;
        "isGreaterThan(java.lang.String)"(arg0: string): boolean;
        isGreaterThan(arg0: Internal.CoreAPI$GameVersion_): boolean;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getPackageName(arg0: Internal.CoreAPI$ModLoader_, arg1: string, arg2: boolean): string;
        toString(): string;
        compareTo(arg0: Internal.CoreAPI$GameVersion_): number;
        "getPackageName(java.lang.String,boolean)"(arg0: string, arg1: boolean): string;
        isCompatibleForge(): boolean;
        "isGreaterThan(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$GameVersion)"(arg0: Internal.CoreAPI$GameVersion_): boolean;
        notifyAll(): void;
        isV20_6(): boolean;
        "isAtMost(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$GameVersion)"(arg0: Internal.CoreAPI$GameVersion_): boolean;
        isV21(): boolean;
        getClassExt(arg0: boolean): string;
        isCompatibleLegacyForge(): boolean;
        isV20_4(): boolean;
        isCompatibleFabric(): boolean;
        "getPackageName(mods.thecomputerizer.theimpossiblelibrary.api.core.CoreAPI$ModLoader,java.lang.String)"(arg0: Internal.CoreAPI$ModLoader_, arg1: string): string;
        hashCode(): number;
        static parse(arg0: string): Internal.CoreAPI$GameVersion;
        ordinal(): number;
        getPackageName(arg0: string, arg1: boolean): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "isAtMost(java.lang.String)"(arg0: string): boolean;
        get v19(): boolean
        get classExt(): string
        get declaringClass(): typeof Internal.CoreAPI$GameVersion
        get v19_2(): boolean
        get v19_4(): boolean
        get compatibleNeoForge(): boolean
        get packageName(): string
        get compatibleModernForge(): boolean
        get pkg(): string
        get v20_1(): boolean
        get v20(): boolean
        get v21_1(): boolean
        get class(): typeof any
        get v18(): boolean
        get v12(): boolean
        get v16(): boolean
        get name(): string
        get compatibleForge(): boolean
        get v20_6(): boolean
        get v21(): boolean
        get compatibleLegacyForge(): boolean
        get v20_4(): boolean
        get compatibleFabric(): boolean
        static readonly V21_1: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V19_2: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V18_2: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V20_4: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V12_2: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V20_1: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V20_6: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V16_5: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
        static readonly V19_4: (Internal.CoreAPI$GameVersion) & (Internal.CoreAPI$GameVersion);
    }
    type CoreAPI$GameVersion_ = "v12_2" | "v20_1" | "v18_2" | "v21_1" | "v19_4" | "v20_4" | CoreAPI$GameVersion | "v19_2" | "v20_6" | "v16_5";
    class Direction8 extends Internal.Enum<Internal.Direction8> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.Direction8_): number;
        "compareTo(net.minecraft.core.Direction8)"(arg0: Internal.Direction8_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Direction8;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction8>>;
        name(): string;
        getDirections(): Internal.Set<Internal.Direction>;
        hashCode(): number;
        getStepX(): number;
        getStepZ(): number;
        getDeclaringClass(): typeof Internal.Direction8;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Direction8[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get directions(): Internal.Set<Internal.Direction>
        get stepX(): number
        get stepZ(): number
        get declaringClass(): typeof Internal.Direction8
        static readonly NORTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly WEST: (Internal.Direction8) & (Internal.Direction8);
    }
    type Direction8_ = "north_west" | "west" | "north_east" | "east" | "south_west" | "south" | "north" | Direction8 | "south_east";
    class ItemRitualFlute extends Internal.ItemGeneric {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        withDefaultInfo(): Internal.ItemGeneric;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        fillItemCategory(arg0: Internal.CreativeModeTab$Output_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        addEffectInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.MobEffect_): void;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        withEffect(): Internal.ItemGeneric;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        withCombineInfo(): Internal.ItemGeneric;
        addItemPosition(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Location_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        addInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        addItemDistance(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Location_): void;
        "isEnabled(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        "addItemUse(java.util.List,ovh.corail.tombstone.helper.LangKey,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        addItemDesc(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>): void;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        "addInfo(java.util.List,java.lang.String,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        withSoulboundInfo(): Internal.ItemGeneric;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        addPerkInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Perk_, arg2: number): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        addInfo(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        withCraftingInfo(): Internal.ItemGeneric;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        withBetaInfo(): Internal.ItemGeneric;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        addItemUse(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        "addItemUse(java.util.List,java.lang.String,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        addWarn(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        "addInfo(java.util.List,ovh.corail.tombstone.helper.LangKey,java.lang.Object[])"(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.LangKey_, ...arg2: any[]): void;
        addItemDesc(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: string, ...arg2: any[]): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        getSimpleName(): string;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        isEnabled(arg0: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        get enabled(): boolean
        get mod(): string
        set armorProtection(armorProtection: number)
        get simpleName(): string
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemRitualFlute_ = ItemRitualFlute;
    abstract class AbstractByteBufAllocator implements Internal.ByteBufAllocator {
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        getClass(): typeof any;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        heapBuffer(arg0: number): Internal.ByteBuf;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateNewCapacity(arg0: number, arg1: number): number;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(): Internal.ByteBuf;
        toString(): string;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        notifyAll(): void;
        heapBuffer(): Internal.ByteBuf;
        ioBuffer(arg0: number): Internal.ByteBuf;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        hashCode(): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        wait(): void;
        wait(arg0: number): void;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        equals(arg0: any): boolean;
        buffer(arg0: number): Internal.ByteBuf;
        get class(): typeof any
        get directBufferPooled(): boolean
    }
    type AbstractByteBufAllocator_ = AbstractByteBufAllocator;
    interface DoubleToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToIntFunction_ = ((arg0: number)=> number) | DoubleToIntFunction;
    class ForgeManglerfishArmorItem extends Internal.ManglerfishArmorItem implements Internal.GeoItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        static ARMOR_MODIFIER_UUID_PER_TYPE$biomancy_$md$b94be4$1(): Internal.EnumMap<any, any>;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        biomancy$setDefaultModifiers(arg0: Internal.Multimap_<any, any>): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        static getARMOR_MODIFIERS(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        static getModifierUUID_vampirism(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        biomancy$getDefaultModifiers(): Internal.Multimap<any, any>;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        static getARMOR_MODIFIERS$werewolves_$md$b94be4$3(): Internal.EnumMap<any, any>;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        static biomancy$ARMOR_MODIFIER_UUID_PER_TYPE(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        static getModifierUUID_vampirism$vampirism_$md$b94be4$2(): Internal.EnumMap<any, any>;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        get ARMOR_MODIFIERS(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        get modifierUUID_vampirism(): Internal.EnumMap<Internal.ArmorItem$Type, Internal.UUID>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get ARMOR_MODIFIERS$werewolves_$md$b94be4$3(): Internal.EnumMap<any, any>
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        get modifierUUID_vampirism$vampirism_$md$b94be4$2(): Internal.EnumMap<any, any>
    }
    type ForgeManglerfishArmorItem_ = ForgeManglerfishArmorItem;
    class StalhrimSword extends Internal.SwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, settings: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(stack: Internal.ItemStack_, state: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, context: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        handler$kkp000$dummmmmmy$mm$damageEquipment(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, miner: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(stack: Internal.ItemStack_, world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, miner: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        biomancy$getDefaultModifiers(): Internal.Multimap<any, any>;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(state: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(stack: Internal.ItemStack_, target: Internal.LivingEntity_, attacker: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type StalhrimSword_ = StalhrimSword;
    class PiercingPrismLens extends Internal.AbstractPrismLens {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        canConvert(arg0: Internal.EntityProjectileSpell_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        shoot(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.EntityProjectileSpell_, arg3: Vec3d_): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type PiercingPrismLens_ = PiercingPrismLens;
    class OminousCharmItem extends Internal.SingleStackItem implements Internal.IActivatable {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        activate(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ItemStack_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getAttributeModifiers(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static hasOmen(arg0: Internal.ItemStack_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        static setOmenLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        static increaseOmenLevel(arg0: Internal.ItemStack_, arg1: number): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        "makesPiglinsNeutral(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        "isEnderMask(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.player.Player,net.minecraft.world.entity.monster.EnderMan)"(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "curioBreak(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        "canWalkOnPowderedSnow(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getAttributesTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static getOmenAmount(arg0: Internal.ItemStack_): number;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        "curioBreak(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        "makesPiglinsNeutral(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "canEquip(java.lang.String,net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        "canWalkOnPowderedSnow(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        "isEnderMask(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.entity.monster.EnderMan,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "canEquip(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.entity.Entity)"(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type OminousCharmItem_ = OminousCharmItem;
    interface FileNotFoundAction {
        copyData(arg0: Internal.InputStream_): this;
        "copyData(java.nio.file.Path)"(arg0: Internal.Path_): this;
        "copyData(java.io.File)"(arg0: Internal.File_): this;
        "copyData(java.net.URL)"(arg0: Internal.URL_): this;
        copyData(arg0: Internal.URL_): this;
        abstract run(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): boolean;
        copyData(arg0: Internal.File_): this;
        copyResource(arg0: string): this;
        "copyData(java.io.InputStream)"(arg0: Internal.InputStream_): this;
        copyData(arg0: Internal.Path_): this;
        (arg0: Internal.Path, arg1: Internal.ConfigFormat<any>): boolean;
        readonly THROW_ERROR: Internal.FileNotFoundAction;
        readonly READ_NOTHING: Internal.FileNotFoundAction;
        readonly CREATE_EMPTY: Internal.FileNotFoundAction;
    }
    type FileNotFoundAction_ = FileNotFoundAction | ((arg0: Internal.Path, arg1: Internal.ConfigFormat<any>)=> boolean);
    class ScatteredOreFeature extends Internal.Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.OreConfiguration>): boolean;
        static isStone(arg0: Internal.BlockState_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.OreConfiguration, Internal.Feature<Internal.OreConfiguration>>>;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        place(arg0: Internal.OreConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type ScatteredOreFeature_ = ScatteredOreFeature;
    class GlobalTrainDisplayData$TrainDeparturePrediction implements Internal.Comparable<Internal.GlobalTrainDisplayData$TrainDeparturePrediction> {
        constructor(arg0: Internal.Train_, arg1: number, arg2: Internal.MutableComponent_, arg3: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.GlobalTrainDisplayData$TrainDeparturePrediction_): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(com.simibubi.create.content.trains.display.GlobalTrainDisplayData$TrainDeparturePrediction)"(arg0: Internal.GlobalTrainDisplayData$TrainDeparturePrediction_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        ticks: number;
        scheduleTitle: Internal.MutableComponent;
        destination: string;
        train: Internal.Train;
    }
    type GlobalTrainDisplayData$TrainDeparturePrediction_ = GlobalTrainDisplayData$TrainDeparturePrediction;
    class AnimationController$State extends Internal.Enum<Internal.AnimationController$State> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.AnimationController$State[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AnimationController$State>>;
        getDeclaringClass(): typeof Internal.AnimationController$State;
        static valueOf(arg0: string): Internal.AnimationController$State;
        compareTo(arg0: Internal.AnimationController$State_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(software.bernie.geckolib.core.animation.AnimationController$State)"(arg0: Internal.AnimationController$State_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.AnimationController$State
        static readonly TRANSITIONING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly PAUSED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly RUNNING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly STOPPED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
    }
    type AnimationController$State_ = "transitioning" | "paused" | AnimationController$State | "stopped" | "running";
    interface VerticalAnchor {
        aboveBottom(arg0: number): this;
        absolute(arg0: number): this;
        belowTop(arg0: number): this;
        bottom(): this;
        top(): this;
        abstract resolveY(arg0: Internal.WorldGenerationContext_): number;
        (arg0: Internal.WorldGenerationContext): number;
        readonly BOTTOM: (Internal.VerticalAnchor$AboveBottom) & (Internal.VerticalAnchor);
        readonly CODEC: Internal.Codec<Internal.VerticalAnchor>;
        readonly TOP: (Internal.VerticalAnchor$BelowTop) & (Internal.VerticalAnchor);
    }
    type VerticalAnchor_ = ((arg0: Internal.WorldGenerationContext)=> number) | VerticalAnchor;
    interface IForgeRegistry$ValidateCallback <V> {
        abstract onValidate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_, arg2: number, arg3: ResourceLocation_, arg4: V): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V): void;
    }
    type IForgeRegistry$ValidateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V)=> void) | IForgeRegistry$ValidateCallback<V>;
    abstract class FieldNamingPolicy extends Internal.Enum<Internal.FieldNamingPolicy> implements Internal.FieldNamingStrategy {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        abstract translateName(arg0: Internal.Field_): string;
        getDeclaringClass(): typeof Internal.FieldNamingPolicy;
        toString(): string;
        compareTo(arg0: Internal.FieldNamingPolicy_): number;
        notifyAll(): void;
        static values(): Internal.FieldNamingPolicy[];
        "compareTo(com.google.gson.FieldNamingPolicy)"(arg0: Internal.FieldNamingPolicy_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.FieldNamingPolicy;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FieldNamingPolicy>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.FieldNamingPolicy
        static readonly UPPER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly IDENTITY: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DASHES: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE_WITH_SPACES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DOTS: Internal.FieldNamingPolicy;
    }
    type FieldNamingPolicy_ = "lower_case_with_underscores" | "lower_case_with_dashes" | "identity" | "upper_camel_case_with_spaces" | "lower_case_with_dots" | "upper_case_with_underscores" | FieldNamingPolicy | "upper_camel_case";
    class ContextUtils$EntityItemStackContext {
        constructor(item: Internal.ItemStack_, entity: Internal.LivingEntity_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        /**
         * The item stack
        */
        readonly item: Internal.ItemStack;
        /**
         * The living entity
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$EntityItemStackContext_ = ContextUtils$EntityItemStackContext;
    class ForgeZGatherHints extends net.minecraftforge.eventbus.api.Event implements Internal.ZGatherHints, Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ZGatherHints_)
        hintItem(arg0: Internal.ItemLike_, arg1: string, ...arg2: any[]): void;
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        getRegistryAccess(): Internal.RegistryAccess;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        hintItem(arg0: Internal.ItemLike_, ...arg1: any[]): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        accept(arg0: Internal.ItemLike_, arg1: net.minecraft.network.chat.Component_): void;
        gatherHintsFromModule(arg0: Internal.ZetaModule_, arg1: Internal.ConfigFlagManager_): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        get registryAccess(): Internal.RegistryAccess
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ForgeZGatherHints_ = ForgeZGatherHints;
    class PrintStream extends Internal.FilterOutputStream implements Internal.Closeable, Internal.Appendable {
        constructor(arg0: Internal.File_)
        constructor(arg0: Internal.OutputStream_, arg1: boolean)
        constructor(arg0: Internal.OutputStream_)
        constructor(arg0: string, arg1: string)
        constructor(arg0: string, arg1: Internal.Charset_)
        constructor(arg0: Internal.File_, arg1: Internal.Charset_)
        constructor(arg0: Internal.OutputStream_, arg1: boolean, arg2: Internal.Charset_)
        constructor(arg0: string)
        constructor(arg0: Internal.OutputStream_, arg1: boolean, arg2: string)
        constructor(arg0: Internal.File_, arg1: string)
        print(arg0: string): void;
        "println(int)"(arg0: number): void;
        "println(java.lang.Object)"(arg0: any): void;
        printf(arg0: string, ...arg1: any[]): this;
        append(arg0: Internal.CharSequence_, arg1: number, arg2: number): Internal.Appendable;
        notify(): void;
        println(arg0: string): void;
        write(arg0: number): void;
        print(arg0: number): void;
        "print(float)"(arg0: number): void;
        print(arg0: boolean): void;
        "append(char)"(arg0: string): Internal.Appendable;
        "println(long)"(arg0: number): void;
        println(arg0: string): void;
        append(arg0: Internal.CharSequence_): Internal.Appendable;
        "println(java.lang.String)"(arg0: string): void;
        "println(char)"(arg0: string): void;
        println(arg0: number): void;
        checkError(): boolean;
        print(arg0: any): void;
        static nullOutputStream(): Internal.OutputStream;
        print(arg0: string): void;
        wait(): void;
        println(arg0: any): void;
        "append(java.lang.CharSequence)"(arg0: Internal.CharSequence_): Internal.Appendable;
        getClass(): typeof any;
        println(arg0: number): void;
        "write(byte[])"(arg0: number[]): void;
        println(): void;
        "print(int)"(arg0: number): void;
        format(arg0: Internal.Locale_, arg1: string, ...arg2: any[]): this;
        println(arg0: number): void;
        write(arg0: number[]): void;
        append(arg0: string): Internal.Appendable;
        wait(arg0: number, arg1: number): void;
        "print(java.lang.String)"(arg0: string): void;
        print(arg0: number): void;
        flush(): void;
        "print(char[])"(arg0: string[]): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        format(arg0: string, ...arg1: any[]): this;
        print(arg0: number): void;
        "println(float)"(arg0: number): void;
        "println(double)"(arg0: number): void;
        "println(boolean)"(arg0: boolean): void;
        toString(): string;
        println(arg0: string[]): void;
        println(arg0: boolean): void;
        printf(arg0: Internal.Locale_, arg1: string, ...arg2: any[]): this;
        notifyAll(): void;
        "println(char[])"(arg0: string[]): void;
        "print(long)"(arg0: number): void;
        "print(java.lang.Object)"(arg0: any): void;
        "print(double)"(arg0: number): void;
        hashCode(): number;
        println(arg0: number): void;
        print(arg0: string[]): void;
        "print(char)"(arg0: string): void;
        "print(boolean)"(arg0: boolean): void;
        close(): void;
        wait(arg0: number): void;
        writeBytes(arg0: number[]): void;
        print(arg0: number): void;
        equals(arg0: any): boolean;
        "write(int)"(arg0: number): void;
        get class(): typeof any
    }
    type PrintStream_ = PrintStream;
    class ItemScrollColonyTP extends Internal.AbstractItemScroll {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type ItemScrollColonyTP_ = ItemScrollColonyTP;
    interface AbstractContainerMenuInvoker {
        abstract _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        (arg0: Internal.ItemStack, arg1: number, arg2: number, arg3: boolean): boolean;
    }
    type AbstractContainerMenuInvoker_ = AbstractContainerMenuInvoker | ((arg0: Internal.ItemStack, arg1: number, arg2: number, arg3: boolean)=> boolean);
    abstract class TickRateModifier {
        constructor(arg0: Internal.CompoundTag_)
        constructor(arg0: Internal.TickRateModifierType_, arg1: number, arg2: number)
        getClass(): typeof any;
        toString(): string;
        setMaxDuration(arg0: number): void;
        notifyAll(): void;
        notify(): void;
        getMaxDuration(): number;
        toTag(): Internal.CompoundTag;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        abstract appliesTo(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number): boolean;
        getType(): Internal.TickRateModifierType;
        doRemove(): boolean;
        wait(): void;
        getTickRateMultiplier(): number;
        isGlobal(): boolean;
        static fromTag(arg0: Internal.CompoundTag_): Internal.TickRateModifier;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setTickRateMultiplier(arg0: number): void;
        masterTick(): void;
        get class(): typeof any
        set maxDuration(arg0: number)
        get maxDuration(): number
        get type(): Internal.TickRateModifierType
        get tickRateMultiplier(): number
        get global(): boolean
        set tickRateMultiplier(arg0: number)
    }
    type TickRateModifier_ = TickRateModifier;
    /**
     * Invoked when a player right clicks on an entity.
    */
    class ItemEntityInteractedEventJS extends Internal.PlayerEventJS {
        constructor(player: Player_, entity: Internal.Entity_, hand: Internal.InteractionHand_)
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
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * The entity that was interacted with.
        */
        getTarget(): Internal.Entity;
        /**
         * The hand that was used to interact with the entity.
        */
        getHand(): Internal.InteractionHand;
        getPlayer(): Player;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        toString(): string;
        /**
         * The player that interacted with the entity.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was used to interact with the entity.
        */
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
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
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        get level(): Internal.Level
        /**
         * The entity that was interacted with.
        */
        get target(): Internal.Entity
        /**
         * The hand that was used to interact with the entity.
        */
        get hand(): Internal.InteractionHand
        get player(): Player
        /**
         * The player that interacted with the entity.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was used to interact with the entity.
        */
        get item(): Internal.ItemStack
        get server(): Internal.MinecraftServer
    }
    type ItemEntityInteractedEventJS_ = ItemEntityInteractedEventJS;
    class HauntedJugItem extends com.Polarice3.Goety.common.items.block.BlockItemBase {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static updateState<T extends Internal.Comparable<T>>(arg0: Internal.BlockState_, arg1: Internal.Property_<T>, arg2: string): Internal.BlockState;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type HauntedJugItem_ = HauntedJugItem;
    class Tesselator implements Internal.MixinSetTessBuffer {
        constructor()
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static setInstance(tes: Internal.Tesselator_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static setInstance$inline_$md$b94be4$0(arg0: Internal.Tesselator_): void;
        getBuilder(): Internal.BufferBuilder;
        end(): void;
        wait(): void;
        static getInstance(): Internal.Tesselator;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        set instance(tes: Internal.Tesselator_)
        set instance$inline_$md$b94be4$0(arg0: Internal.Tesselator_)
        get builder(): Internal.BufferBuilder
        get instance(): Internal.Tesselator
    }
    type Tesselator_ = Tesselator;
    abstract class AbstractHorse extends Internal.Animal implements Internal.HitchableHorse, Internal.LessWanderingHorse, Internal.ModifedToBeTameable, Internal.AbstractHorseAccessor, Internal.HasCustomInventoryScreen, Internal.Saddleable, Internal.OwnableEntity, net.minecraft.world.ContainerListener, Internal.PlayerRideableJumping {
        constructor(arg0: Internal.EntityType_<Internal.AbstractHorse>, arg1: Internal.Level_)
        handler$idj000$etstlib$addVibrationListener(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$getSwimSplashSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        rarcompat$travel(arg0: Vec3d_, arg1: Internal.Mob_): void;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        etf$getOptifineVehicleId(): number;
        setCulled(value: boolean): void;
        getDeathSound(): Internal.SoundEvent;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getFallFlyingTicks(): number;
        chunkPosition(): Internal.ChunkPos;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        setUUID(arg0: Internal.UUID_): void;
        handler$flf000$biomancy$onGetAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        draw3dTrail(partialPoses: Internal.List_<Vec3d>, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        getMagicData(): Internal.MagicData;
        "brainProvider()"(): Internal.Brain$Provider<any>;
        callCheckTotemDeathProtection(arg0: DamageSource_): boolean;
        "shouldRender(it.hurts.octostudios.octolib.modules.particles.RenderBuffer)"(arg0: Internal.RenderBuffer_<any, any>): boolean;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        static isHitched(horse: Internal.HitchableHorse_): boolean;
        static isLeadSlotActive(horse: Internal.HitchableHorse_): boolean;
        isSpectator(): boolean;
        isFreezingFromFrostmint(): boolean;
        getTrailMaxLength(): number;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        emf$isGlowing(): boolean;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        getHasUsedSingleAttack(): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        biomancy$setForcedAge(arg0: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        static vb$leashableInArea(level: Internal.Level_, pos: Vec3d_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        onFlap(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        handler$ino000$entityjs$doHurtTarget(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        getTrailScale(): number;
        isAmbientCreature(): boolean;
        getInventorySize(): number;
        rarcompat$tickRidden(arg0: Internal.Mob_, arg1: Player_): void;
        handler$kbg002$relics$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        isFollowingOwner(): boolean;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): net.minecraft.network.chat.Component;
        static vb$getKnownMovement(entity: Internal.Entity_): Vec3d;
        onGround(): boolean;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        playGallopSound(arg0: SoundType_): void;
        getSwipeDelay(): number;
        horseman$isOutsideWanderingLimit(pos: Vec3d_): boolean;
        emf$isTouchingWater(): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        handler$kof000$betterthirdperson$postTurnHook(arg0: Internal.CallbackInfo_): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        horseman$getLead(): Internal.ItemStack;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        getTrailUpdateFrequency(): number;
        isAutoSpinAttack(): boolean;
        handler$klh012$sodiumdynamiclights$onTick(ci: Internal.CallbackInfo_): void;
        getRemainingFireTicks(): number;
        botania_getAmbientSound(): Internal.SoundEvent;
        getZ(arg0: number): number;
        handler$hlm000$vanillabackport$vb$readAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        getAngrySound(): Internal.SoundEvent;
        abstract setNoHoney(arg0: number): void;
        tickRidden(arg0: Player_, arg1: Vec3d_): void;
        getDynamicLightZ(): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        bettermobcombat$getAttackCooldown(): number;
        getVoicePitch(): number;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        emf$getPitch(): number;
        handler$ngm000$supplementaries$eatSugarCube(player: Player_, stack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getLastHurtByPlayer(): Player;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        handler$mfh000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isBaby(): boolean;
        getTrailConfigData(): Internal.TrailConfigData;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        die(arg0: DamageSource_): void;
        getLeashOffset(): Vec3d;
        handler$hec000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        fedFood(arg0: Player_, arg1: Internal.ItemStack_): Internal.InteractionResult;
        onClimbable(): boolean;
        getRiddenSpeed(arg0: Player_): number;
        getSaddleSoundEvent(): Internal.SoundEvent;
        processPortalCooldown(): void;
        handler$mfh000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getSlot(arg0: number): Internal.SlotAccess;
        static vb$computeElasticInteraction<E extends Internal.Entity & Internal.Leashable>(entity: E, holder: Internal.Entity_, attachmentPoints: Internal.List_<Vec3d>, holderAttachmentPoints: Internal.List_<Vec3d>): Internal.List<Internal.Leashable$Wrench>;
        stopRiding(): void;
        irons_spellbooks$getMagicData(): Internal.MagicData;
        handler$inl000$entityjs$isInvulnerableTo(pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$thunderHit(pLevel: Internal.ServerLevel_, pLightning: Internal.LightningBolt_, ci: Internal.CallbackInfo_): void;
        detectEquipmentUpdates(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        getDeltaMovement(): Vec3d;
        horseman$setWanderAnchor(pos: Vec3d_): void;
        static generateMaxHealth(arg0: Internal.IntUnaryOperator_): number;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        callReapplyPosition(): void;
        modifyExpressionValue$jhm001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        handler$jik00f$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        static hasLead(horse: Internal.HitchableHorse_): boolean;
        getMoveControl(): Internal.MoveControl;
        setStanding(arg0: boolean): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        emf$getYaw(): number;
        ate(): void;
        notify(): void;
        getFirstTick(): boolean;
        setOffspringAttributes(arg0: Internal.AgeableMob_, arg1: Internal.AbstractHorse_): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        handler$ino001$entityjs$setTarget(pTarget: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        handler$hek000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        etf$getBlockY(): number;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        vb$angularMomentum(): number;
        getOffhandItem(): Internal.ItemStack;
        getDimensions(): Internal.EntityDimensions;
        setTrailConfigData(data: Internal.TrailConfigData_): void;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        horseman$hasLead(): boolean;
        setLootTable(arg0: ResourceLocation_): void;
        handler$hgm000$goety$jumpFromGround(arg0: Internal.CallbackInfo_): void;
        getIsInsidePortal(): boolean;
        vb$leashElasticDistance(): number;
        ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        handler$ljb001$createbigcannons$turn(yaw: number, pitch: number, ci: Internal.CallbackInfo_): void;
        disappearAfterDeath(): boolean;
        getOnPos(arg0: number): BlockPos;
        vb$onElasticLeashPull(entity: Internal.Entity_): void;
        vb$getQuadLeashOffsets(): Vec3d[];
        static shouldHaveLeadSlot(horse: Internal.HitchableHorse_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        isJumping(): boolean;
        setNoActionTime(arg0: number): void;
        getPose(): Internal.Pose;
        callActuallyHurt(arg0: DamageSource_, arg1: number): void;
        setLastAttackedTicks(arg0: number): void;
        getSharedFlag(arg0: number): boolean;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getTrailFadeOutColor(): number;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        ageUp(arg0: number): void;
        etf$getUuid(): Internal.UUID;
        removeVehicle(): void;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        checkInsideBlocks(): void;
        updateFluidOnEyes(): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        setIsJumping(arg0: boolean): void;
        createHoverEvent(): Internal.HoverEvent;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        redirect$ich000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        handler$inl000$entityjs$positionRider(pPassenger: Internal.Entity_, pCallback: Internal.Entity$MoveFunction_, ci: Internal.CallbackInfo_): void;
        showVehicleHealth(): boolean;
        isBlocking(): boolean;
        isCasting(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        etf$isBlockEntity(): boolean;
        canChangeDirection(): boolean;
        handler$hgm000$goety$addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        shouldUpdateDynamicLight(): boolean;
        setReanimated(value: boolean): void;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
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
        getFireImmuneTicks(): number;
        bettercombat$resetAttackStrengthTicker(): void;
        /**
         * Calls a triggerable animation to be played anywhere.
        */
        triggerAnimation(controllerName: string, animName: string): void;
        getAttributes(): Internal.AttributeMap;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        setInLoveTime(arg0: number): void;
        handler$mfo000$alexscaves$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setPortalCooldown(): void;
        handler$hlm000$vanillabackport$vb$tick(ci: Internal.CallbackInfo_): void;
        setX(x: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        setOwnerUUID(arg0: Internal.UUID_): void;
        handler$zcf000$horseman$onAddAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        getFluidJumpThreshold(): number;
        handler$inl000$entityjs$entityJs$tick(ci: Internal.CallbackInfo_): void;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        handler$inl000$entityjs$canChangeDimensions(cir: Internal.CallbackInfoReturnable_<any>): void;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        getOnPos(): BlockPos;
        vb$setBoatDelayedLeashHolderId(leashHolderId: number): void;
        etf$getWorld(): Internal.Level;
        repositionEntityAfterLoad(): boolean;
        setUseItemRemaining(arg0: number): void;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        getTargetSelector(): Internal.GoalSelector;
        setRegisteredToWorld(navigation: Internal.PathNavigation_): void;
        stopUsingItem(): void;
        vb$leashSnapDistance(): number;
        etf$getBlockPos(): BlockPos;
        horseman$getWanderAnchor(): Vec3d;
        ageBoundaryReached(): void;
        updateAnimationsOnTick(): void;
        setOldPosAndRot(): void;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        lithiumOnEquipmentChanged(): void;
        setRemainingFireTicks(arg0: number): void;
        handler$ino004$entityjs$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        updateControlFlags(): void;
        emf$age(): number;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        setSwipeDelay(arg0: number): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setCanPickUpLoot(arg0: boolean): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canEatGrass(): boolean;
        getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        openCustomInventoryScreen(arg0: Player_): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        bettermobcombat$getAlternateMainhandItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        handleEntityEvent(arg0: number): void;
        isUsingItem(): boolean;
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isAlwaysTicking(): boolean;
        handler$kof000$betterthirdperson$preTurnHook(arg0: Internal.CallbackInfo_): void;
        interactAt(arg0: Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        static generateSpeed(arg0: Internal.DoubleSupplier_): number;
        emf$getX(): number;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        biomancy$getData(): Internal.LivingEntityData$TransientDataProvider$DataHolder;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        handler$jik000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        endimateTick(): void;
        ac_dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        lithiumOnBlockCacheDeleted(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        emf$hasVehicle(): boolean;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        vb$setLeashedTo(entity: Internal.Entity_, sendAttachPacket: boolean): void;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getYRot(): number;
        onChangedBlock(arg0: BlockPos_): void;
        biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        handler$inl000$entityjs$rideTick(ci: Internal.CallbackInfo_): void;
        setTame(arg0: boolean): void;
        handler$cih000$attributeslib$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        bettermobcombat$getHandItems(): Internal.NonNullList<any>;
        handler$hlm000$vanillabackport$vb$defineSynchedData(ci: Internal.CallbackInfo_): void;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        getDataMap(): Internal.Map<any, any>;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        emf$isInvisible(): boolean;
        isLeashed(): boolean;
        bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
        handler$inp000$entityjs$followLeashSpeed(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$ino000$entityjs$getAmbientSoundInterval(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$jia00e$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        toString(): string;
        canWearArmor(): boolean;
        handler$inl000$entityjs$isFreezing(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$idj000$etstlib$removeFromTickerMap(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        etf$getScoreboardTeam(): Internal.Team;
        "getServer()"(): Internal.MinecraftServer;
        handler$eim000$ad_astra$adastra$checkSpawnObstruction(levelReader: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        onClientRemoval(): void;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        abstract sdl$resetDynamicLight(): void;
        handler$cih000$attributeslib$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
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
        modifyExpressionValue$odl000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        handler$hdm000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$gdb000$combatnouveau$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        cancelCast(): void;
        biomancy$setLoveCause(arg0: Internal.UUID_): void;
        isSaddleable(): boolean;
        static getViewScale(): number;
        getEatingSound(): Internal.SoundEvent;
        handler$iei000$bettermobcombat$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        updateFallFlying(): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        servercore$setInactive(inactive: boolean): void;
        handler$ino000$entityjs$ate(ci: Internal.CallbackInfo_): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        setAnimationTick(arg0: number): void;
        static setLead(horse: Internal.HitchableHorse_, leadStack: Internal.ItemStack_): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        canBreed(): boolean;
        handler$hgi000$goety$canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        handler$hoi000$servercore$onPistonMove(moverType: Internal.MoverType_, vec3: Vec3d_, ci: Internal.CallbackInfo_): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        callOnLeashDistance(arg0: number): void;
        emf$getTypeString(): string;
        setFrostmintFreezing(arg0: boolean): void;
        isFullyFrozen(): boolean;
        handler$jop000$domesticationinnovation$di_isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        getLastPos(): BlockPos;
        vb$getLeashHolder(): Internal.Entity;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$hec000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        getPitch(): number;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Player_): boolean;
        redirect$cih000$attributeslib$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setMagnetHeadRotation(): void;
        clearRestriction(): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        getNoActionTime(): number;
        /**
         * @deprecated
        */
        getRenderDistance(): number;
        isWearingArmor(): boolean;
        setComboCount(arg0: number): void;
        redirect$cih000$attributeslib$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        vb$whenLeashedTo(entity: Internal.Entity_): void;
        handler$inl000$entityjs$showVehicleHealth(cir: Internal.CallbackInfoReturnable_<any>): void;
        getTemper(): number;
        static createOffspringAttribute(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.RandomSource_): number;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnParticles(arg0: Internal.ItemStack_, arg1: number): void;
        tameWithName(arg0: Player_): boolean;
        getItem(): Internal.ItemStack;
        handler$ino000$entityjs$canBeLeashed(pPlayer: Player_, cir: Internal.CallbackInfoReturnable_<any>): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getFlag(arg0: number): boolean;
        releaseUsingItem(): void;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        horseman$setHitched(hitched: boolean): void;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        isInRain(): boolean;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        distanceToSqr(arg0: Vec3d_): number;
        handler$naj000$quark$onEatGoldenCarrot(arg0: Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_, arg3: Internal.CallbackInfo_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        elytratrims$isGui(): boolean;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        bettermobcombat$cancelWeaponSwing(): void;
        getNbt(): Internal.CompoundTag;
        bettermobcombat$cancelUpswing(): void;
        isSaddled(): boolean;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        getAmbientStandInterval(): number;
        getEyePosition(): Vec3d;
        onOffspringSpawnedFromEgg(arg0: Player_, arg1: Internal.Mob_): void;
        getYaw(): number;
        getUsedItemHand(): Internal.InteractionHand;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        servercore$isExcluded(): boolean;
        getTrailFadeInColor(): number;
        getBrain(): Internal.Brain<any>;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        shouldDiscardFriction(): boolean;
        setChopData(arg0: Internal.SyncedChopData_): Internal.SyncedChopData;
        getTrailPosition(partialTicks: number): Vec3d;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getComboCount(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        postMagnetJump(): void;
        executeRidersJump(arg0: number, arg1: Vec3d_): void;
        getEyeY(): number;
        skipDropExperience(): void;
        isInWaterOrRain(): boolean;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getSwimSound(): Internal.SoundEvent;
        getCitadelEntityData(): Internal.CompoundTag;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        isWithinRestriction(arg0: BlockPos_): boolean;
        invokeGetExperiencePoints_vampirism(): number;
        handler$eil000$ad_astra$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        vb$resetAngularMomentum(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        stopAttackAnimation(arg0: number): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        /**
         * @deprecated
        */
        render(pTicks: number, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        resetDynamicLight(): void;
        setIsInPowderSnow(arg0: boolean): void;
        handler$gdh000$combatnouveau$getAttackAnim(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        modifyExpressionValue$jhm000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        handleNetherPortal(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        servercore$getFullTickCount(): number;
        static vb$angularFriction<E extends Internal.Entity & Internal.Leashable>(entity: E): number;
        isCustomNameVisible(): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        static getPackagedLeadSlotIndex(horse: Internal.HitchableHorse_): number;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getMotionX(): number;
        canBeLeashed(arg0: Player_): boolean;
        handler$hec000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        handler$mfh000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        sdl$dynamicLightTick(): void;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        bettermobcombat$hasActiveMainHandBodyPose(): boolean;
        static getLeadSlotIndex(horse: Internal.HitchableHorse_): number;
        biomancy$getVoicePitch(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        handler$idl000$etstlib$percentageBypass(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        isOnRails(): boolean;
        markFusionRecomputeModels(): void;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        setTeleportLocationBehindTarget(distance: number): boolean;
        getWaterSlowDown(): number;
        setYaw(arg0: number): void;
        createBuffer(): Internal.RenderBuffer<any, any>;
        getPickRadius(): number;
        isPathFinding(): boolean;
        bettermobcombat$hasDelayedUpswing(): boolean;
        isWeaponSwingInProgress(): boolean;
        isRemoved(): boolean;
        handler$inl000$entityjs$onAddedToWorld(ci: Internal.CallbackInfo_): void;
        handleStopJump(): void;
        static vb$createQuadLeashOffsets(entity: Internal.Entity_, frontOffset: number, frontBack: number, leftRight: number, height: number): Vec3d[];
        emf$isSneaking(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        resetMagnetHeadRotation(): void;
        refreshDimensions(): void;
        isRewinding(): boolean;
        bookshelf$getAmbientSound(): Internal.SoundEvent;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getPassengers(): Internal.EntityArrayList;
        standIfPossible(): void;
        setSwipes(arg0: number): void;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        handler$mpj000$sounds$$lead_snapping_sound_effect(sendPacket: boolean, dropItem: boolean, ci: Internal.CallbackInfo_): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getServer(): Internal.MinecraftServer;
        vb$leashDistanceTo(entity: Internal.Entity_): number;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        static isEnabled(): boolean;
        setXRot(arg0: number): void;
        bettermobcombat$hasActiveOffHandBodyPose(): boolean;
        handler$mfo000$alexscaves$ac_increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        static vb$onTickLeash<E extends Internal.Entity & Internal.Leashable>(entity: E): void;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        playAttackAnimation(arg0: string, arg1: Internal.AnimatedHand_, arg2: number, arg3: number): void;
        emf$isOnFire(): boolean;
        static requiresLead(): boolean;
        getPermissionLevel(): number;
        nextStep(): number;
        is(arg0: Internal.Entity_): boolean;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        playJumpSound(): void;
        setInLove(arg0: Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        emf$isAlive(): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        redirect$cih000$attributeslib$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        handler$hgi000$goety$fireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getOffHandItem(): Internal.ItemStack;
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
        handler$hgm000$goety$getMobType(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        entityJs$defineSynchedData(): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        handler$mcp000$libertyvillagers$replaceGetSafeFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        handler$jik000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        isVisuallySwimming(): boolean;
        getTrailRenderPositions(points: Internal.List_<Vec3d>, pTicks: number): Internal.List<Vec3d>;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        entityJs$getTypeId(): string;
        getFacing(): Internal.Direction;
        getJumpCooldown(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        static syncHorseDataToTrackingClients(horse: Internal.HitchableHorse_): void;
        handler$inl000$entityjs$getMaxFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        getTarget(): Internal.LivingEntity;
        handler$ino000$entityjs$canPickUpLoot(cir: Internal.CallbackInfoReturnable_<any>): void;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_, arg1: Internal.BiConsumer_<any, any>): void;
        getTrailInterpolationPoints(): number;
        isInvulnerable(): boolean;
        handler$ino000$entityjs$isPersistenceRequired(cir: Internal.CallbackInfoReturnable_<any>): void;
        isInWater(): boolean;
        randomizeAttributes(arg0: Internal.RandomSource_): void;
        handleStartJump(arg0: number): void;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        handler$hgi000$goety$push(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$canAddPassenger(pPassenger: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getOwnerUUID(): Internal.UUID;
        horseman$setLead(stack: Internal.ItemStack_): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        horseman$isHitched(): boolean;
        getMouthAnim(arg0: number): number;
        servercore$isInactive(): boolean;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        getSpeed(): number;
        vb$canBeLeashed(entity: Internal.Entity_): boolean;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        abstract getNoHoney(): number;
        bettercombat$getAttackStrengthScale(arg0: number): number;
        handler$hgi000$goety$playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CallbackInfo_): void;
        addSyncedData(identifier: string, value: any): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        handler$hec000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$push(pEntity: Internal.Entity_, ci: Internal.CallbackInfo_): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
        playSwimSound(arg0: number): void;
        handler$eba000$notenoughanimations$tickHeadTurn(f: number, g: number, info: Internal.CallbackInfoReturnable_<any>): void;
        animateHurt(arg0: number): void;
        biomancy$setDimensions(arg0: Internal.EntityDimensions_): void;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        getTameOwnerUUID(): Internal.UUID;
        registerGoals(): void;
        hasRestriction(): boolean;
        handler$mfh000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$zcl000$horseman$addAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        addBehaviourGoals(): void;
        handler$lhe000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        setNavigation(nav: Internal.PathNavigation_): void;
        handler$hoi000$servercore$setupActivationStates(type: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
        handler$ino000$entityjs$shouldDespawnInPeaceful(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$jho001$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        mirror(arg0: Internal.Mirror_): number;
        handler$inl000$entityjs$isFlapping(cir: Internal.CallbackInfoReturnable_<any>): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): net.minecraft.network.chat.Component;
        elytratrims$markGui(): void;
        getTicksRequiredToFreeze(): number;
        updateContainerEquipment(): void;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        handler$jop000$domesticationinnovation$di_pushedByWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        artifacts$getPocketPistonLength(): number;
        canJump(): boolean;
        emf$prevZ(): number;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        handler$zcf000$horseman$onReadAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        transition$getRawPosition(): Vec3d;
        lithiumOnBlockCacheSet(newState: Internal.BlockState_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(predicate: Internal.BiPredicate_<any, any>, forAllTypes: boolean): boolean;
        setYHeadRot(arg0: number): void;
        handler$inl001$entityjs$isCurrentlyGlowing(cir: Internal.CallbackInfoReturnable_<any>): void;
        setFromSpawner(fromSpawner: boolean): void;
        setJumping(arg0: boolean): void;
        setDrinkingPotion(drinkingPotion: boolean): void;
        getAbsorptionAmount(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        handler$inl000$entityjs$onFlap(ci: Internal.CallbackInfo_): void;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        maxhealthfix$setRestorePoint(arg0: number): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        startDrinkingPotion(): void;
        abstract isUrsa(): boolean;
        handler$ino000$entityjs$getMainArm(cir: Internal.CallbackInfoReturnable_<any>): void;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        handler$inl000$entityjs$isAttackable(cir: Internal.CallbackInfoReturnable_<any>): void;
        getSyncedData(identifier: string): any;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        handler$kkh000$raidsenhanced$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        handler$mcn000$libertyvillagers$replaceAttributeValueForVillagersAndGolems(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        notifyDangerousProjectile(projectile: Internal.Projectile_): void;
        handler$inl000$entityjs$mayInteract(pLevel: Internal.Level_, pPos: BlockPos_, cir: Internal.CallbackInfoReturnable_<any>): void;
        static tickEntity(entity: Internal.LivingEntity_): void;
        handler$inl000$entityjs$onRemovedFromWorld(ci: Internal.CallbackInfo_): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getHorizontalFacing(): Internal.Direction;
        ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        handler$jel000$treechop$injectDataLoading(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        handler$inl000$entityjs$setSprinting(pSprinting: boolean, ci: Internal.CallbackInfo_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        getMagneticAttachmentFace(): Internal.Direction;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        spawnTamingParticles(arg0: boolean): void;
        lithiumSetClimbingMobCachingSectionUpdateBehavior(listenForCachedBlockChanges: boolean): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        handler$inn000$entityjs$brainProvider(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$ibk000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        equipArmor(arg0: Player_, arg1: Internal.ItemStack_): void;
        getRestrictRadius(): number;
        handler$hgm000$goety$randomTeleport(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        handler$inl000$entityjs$getMyRidingOffset(cir: Internal.CallbackInfoReturnable_<any>): void;
        modifyTemper(arg0: number): number;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        containerChanged(arg0: net.minecraft.world.Container_): void;
        renderTrail(pTicks: number, poseStack: Internal.PoseStack_, bufferSourceList: Internal.MultiBufferSource_): void;
        runCommand(command: string): number;
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        static isHitchable(horse: Internal.HitchableHorse_): boolean;
        handler$log002$blueprint$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        servercore$setActivatedTick(tick: number): void;
        etf$getType(): Internal.EntityType<any>;
        getUpVector(arg0: number): Vec3d;
        getXRot(): number;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isOnFire(): boolean;
        getOwner(): Internal.LivingEntity;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        shouldPassengersInheritMalus(): boolean;
        runCommandSilent(command: string): number;
        setPosition(x: number, y: number, z: number): void;
        setMoveControl(control: Internal.MoveControl_): void;
        emf$isOnGround(): boolean;
        dropLeash(arg0: boolean, arg1: boolean): void;
        shouldRender(arg0: Internal.RenderBuffer_<any, any>): boolean;
        gameEvent(arg0: Internal.GameEvent_): void;
        callFollowLeashSpeed(): number;
        isSoulSpeedBlock(): boolean;
        handler$hlm000$vanillabackport$vb$finalizeSpawn(level: Internal.ServerLevelAccessor_, difficulty: Internal.DifficultyInstance_, reason: Internal.MobSpawnType_, spawnData: Internal.SpawnGroupData_, dataTag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        wrapOperation$gcp000$artifacts$travel(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_, original: Internal.Operation_<any>): number;
        vb$checkElasticInteractions(entity: Internal.Entity_): boolean;
        setMotionZ(z: number): void;
        getAttachmentProgress(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getBlockY(): number;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        transition$setRawPosition(arg0: Vec3d_): void;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        servercore$incFullTickCount(): void;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        getMaxHealth(): number;
        handler$jho000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isRegisteredToWorld(): boolean;
        updateSwimAmount(): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        getRemovalReason(): Internal.Entity$RemovalReason;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        handler$kbd000$relics$setWet(arg0: Internal.CallbackInfoReturnable_<any>): void;
        resetFallDistance(): void;
        isEating(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        handleEating(arg0: Player_, arg1: Internal.ItemStack_): boolean;
        localvar$kbd001$relics$fluidCollision(arg0: Vec3d_): Vec3d;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        etf$getHandItems(): Internal.Iterable<any>;
        handler$inl000$entityjs$lavaHurt(ci: Internal.CallbackInfo_): void;
        handler$hgi000$goety$goetyLightLevelMagicValue(arg0: Internal.CallbackInfoReturnable_<any>): void;
        playAmbientSound(): void;
        getControlledVehicle(): Internal.Entity;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        handler$hec000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        createInventory(): void;
        getKillCredit(): Internal.LivingEntity;
        handler$cih000$attributeslib$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        emf$getVariableMap(): Internal.Object2FloatOpenHashMap<any>;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setOutOfCamera(value: boolean): void;
        getDefaultLootTable(): ResourceLocation;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        handler$hgm001$goety$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        handler$inl000$entityjs$isPushable(cir: Internal.CallbackInfoReturnable_<any>): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        redirect$mko000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        handler$inl000$entityjs$getBlockJumpFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        static syncHorseDataToClient(horse: Internal.HitchableHorse_, player: Internal.ServerPlayer_): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static mayPlaceInLeadSlot(horse: Internal.HitchableHorse_, stack: Internal.ItemStack_): boolean;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        handler$ino000$entityjs$removeWhenFarAway(pDistanceToClosestPlayer: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        handler$hgm000$goety$dropExperience(arg0: Internal.CallbackInfo_): void;
        canStartSwimming(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setFireType(arg0: ResourceLocation_): void;
        setTameOwnerUUID(arg0: Internal.UUID_): void;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        etf$getOptifineId(): number;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        isAttackable(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        emf$isInLava(): boolean;
        vb$getQuadLeashHolderOffsets(): Vec3d[];
        callMobInteract(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        "shouldRender(it.hurts.octostudios.octolib.modules.particles.trail.TrailBuffer)"(buffer: Internal.TrailBuffer_): boolean;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isValidAttackTarget(arg0: Internal.LivingEntity_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        handler$jop000$domesticationinnovation$di_gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        shouldDropExperience(): boolean;
        handler$gdd000$combatnouveau$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        handler$inl000$entityjs$repositionEntityAfterLoad(cir: Internal.CallbackInfoReturnable_<any>): void;
        emf$getZ(): number;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        handler$hgm001$goety$travelRidden(arg0: Player_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$getBlockSpeedFactor(cir: Internal.CallbackInfoReturnable_<any>): void;
        tickHeadTurn(arg0: number, arg1: number): number;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        handler$mec002$clanginghowl$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        playSound(arg0: Internal.SoundEvent_): void;
        vb$dropLeash(): void;
        makeBoundingBox(): Internal.AABB;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        setHasUsedSingleAttack(hasUsedSingleAttack: boolean): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setPersistenceRequired(): void;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        getMainArm(): Internal.HumanoidArm;
        servercore$getActivationType(): Internal.ActivationType;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        abstract sdl$getDynamicLightY(): number;
        isSprinting(): boolean;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$inl000$entityjs$move(pType: Internal.MoverType_, pPos: Vec3d_, ci: Internal.CallbackInfo_): void;
        isDrinkingPotion(): boolean;
        clearSleepingPos(): void;
        canRide(arg0: Internal.Entity_): boolean;
        handler$ino000$entityjs$isSunBurnTick(cir: Internal.CallbackInfoReturnable_<any>): void;
        getLastHurtMob(): Internal.LivingEntity;
        handler$inl001$entityjs$playerTouch(pPlayer: Player_, ci: Internal.CallbackInfo_): void;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        handler$jfp000$ntgl$getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        removeAfterChangingDimensions(): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        static setHitched(horse: Internal.HitchableHorse_, hitched: boolean): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        tryAddFrost(): void;
        handler$jia000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        callGetSoundVolume(): number;
        quark$lastHurtByPlayer(): Player;
        getRestrictCenter(): BlockPos;
        handler$jop000$domesticationinnovation$di_canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
        defineSynchedData(): void;
        setZ(z: number): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        handler$mej015$etched$onTick(ci: Internal.CallbackInfo_): void;
        bookshelf$makePoofParticles(): void;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        getDistance(pos: BlockPos_): number;
        handler$ino000$entityjs$getAmbientSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        emf$getVelocity(): Vec3d;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        handler$inl000$entityjs$canTrample(state: Internal.BlockState_, pos: BlockPos_, fallDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        vb$setAngularMomentum(angularMomentum: number): void;
        "getItemBySlot(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        handler$hlm000$vanillabackport$vb$addAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        isPlayer(): boolean;
        static canHitch(horse: Internal.HitchableHorse_): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        invokeGetJumpPower_werewolves(): number;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        isMoving(): boolean;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        handler$kbg000$relics$onAiStep(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setMagneticDeltaY(arg0: number): void;
        initiateCastSpell(spell: Internal.AbstractSpell_, spellLevel: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        botania_playHurtSound(arg0: DamageSource_): void;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        abstract sdl$getDynamicLightX(): number;
        handler$jop000$domesticationinnovation$di_rideableInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setSprinting(arg0: boolean): void;
        doPlayerRide(arg0: Player_): void;
        addSyncedData(type: Internal.EntitySerializerType_, key: string, value: any): void;
        setRot(arg0: number, arg1: number): void;
        getAttackAnim(arg0: number): number;
        handler$hjb000$lavafishing$travel(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        castComplete(): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        bettermobcombat$getAlternateMainHandItem(arg0: Internal.Mob_, arg1: Internal.Operation_<any>): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        horseman$asHorse(): this;
        servercore$getActivatedImmunityTick(): number;
        isInvisibleTo(arg0: Player_): boolean;
        setAirSupply(arg0: number): void;
        isUndead(): boolean;
        static createBaseHorseAttributes(): Internal.AttributeSupplier$Builder;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getStepHeight(): number;
        isSleeping(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        rarcompat$getRiddenInput(arg0: Player_, arg1: Internal.CowboyHatItem_, arg2: Internal.Mob_): Vec3d;
        createBodyControl(): Internal.BodyRotationControl;
        handler$hec000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        vb$dropLeash(broadcast: boolean, dropItem: boolean): void;
        etf$hasCustomName(): boolean;
        setPos(arg0: Vec3d_): void;
        handler$inp000$entityjs$shouldStayCloseToLeashHolder(cir: Internal.CallbackInfoReturnable_<any>): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getMainHandItem(): Internal.ItemStack;
        irons_lib$setTransmogPreview(arg0: boolean): void;
        isTrailGrowing(): boolean;
        doPush(arg0: Internal.Entity_): void;
        handler$inl000$entityjs$causeFallDamage(pFallDistance: number, pMultiplier: number, pSource: DamageSource_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        biomancy$setEyeHeight(arg0: number): void;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getParts(): Internal.PartEntity<any>[];
        static vb$leashableLeashedTo(entity: Internal.Entity_): Internal.List<Internal.Leashable>;
        handler$jop000$domesticationinnovation$di_getMovementEmission(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getValue(arg0: Internal.TrackedData_<any>): any;
        onPlayerJump(arg0: number): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        emf$hasPassengers(): boolean;
        handler$kbg001$relics$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        getForgePersistentData(): Internal.CompoundTag;
        getTameOwner(): Internal.LivingEntity;
        jumpFromGround(): void;
        canMate(arg0: Internal.Animal_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        handler$hgm000$goety$isSensitiveToWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        maxUpStep(): number;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        handler$ino005$entityjs$mobInteract(pPlayer: Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        isAlive(): boolean;
        usePlayerItem(arg0: Player_, arg1: Internal.InteractionHand_, arg2: Internal.ItemStack_): void;
        startSleeping(arg0: BlockPos_): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        calculateFallDamage(arg0: number, arg1: number): number;
        setSyncedSpellData(syncedSpellData: Internal.SyncedSpellData_): void;
        handler$hgi000$goety$isSwimming(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        handler$hgm001$goety$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        getGoalSelector(): Internal.GoalSelector;
        onPathfindingStart(): void;
        handler$inl000$entityjs$isPickable(cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$inl000$entityjs$getSwimSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        hasGlowingTag(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        emf$isSprinting(): boolean;
        vb$canHaveALeashAttachedTo(target: Internal.Entity_): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        handler$jel000$treechop$injectDataSaving(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        biomancy$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        fabric_getAttachments(): Internal.Map<any, any>;
        irons_lib$isTransmogPreview(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getTrailRenderDistance(): number;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        followMommy(): void;
        static vb$getHolderMovement(entity: Internal.Entity_): Vec3d;
        updateInvisibilityStatus(): void;
        isDirty(): boolean;
        "isJumping()"(): boolean;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        biomancy$getForcedAge(): number;
        vb$notifyLeashHolder(entity: Internal.Leashable_): void;
        setLastHurtByPlayer(arg0: Player_): void;
        getAmbientStandSound(): Internal.SoundEvent;
        setYRot(arg0: number): void;
        mobInteract(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        localvar$cie000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        localvar$kbg000$relics$setBlockFriction(arg0: number): number;
        self(): Internal.LivingEntity;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        handler$hdm000$irons_spellbooks$isInvisibleTo(arg0: Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$hoi000$servercore$ignorePushingWhileInactive(x: number, y: number, z: number, ci: Internal.CallbackInfo_): void;
        handler$mfh000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setBred(arg0: boolean): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        irons_lib$getCapeData(): Internal.CapeData;
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
        handler$inn001$entityjs$getMobType(cir: Internal.CallbackInfoReturnable_<any>): void;
        getFeetArmorItem(): Internal.ItemStack;
        bettermobcombat$setDelayedUpswing(arg0: Internal.Runnable_): void;
        handler$mfo000$alexscaves$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        requiresCustomPersistence(): boolean;
        biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        getCustomJump(): number;
        handler$gdd000$combatnouveau$blockedByShield(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        emf$prevY(): number;
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
        onSoulSpeedBlock(): boolean;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        handler$cok000$radium$tryShortcutFluidPushing(ci: Internal.CallbackInfo_, box: Internal.AABB_, x1: number, x2: number, y1: number, y2: number, z1: number, z2: number, zero: number): void;
        isInWall(): boolean;
        getInventory(): Internal.SimpleContainer;
        getMagneticDeltaX(): number;
        localvar$jcb000$vampirism$vampireSlayerEnchantment(arg0: number, arg1: Internal.Entity_): number;
        dampensVibrations(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        handler$hgm000$goety$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        handler$eil000$ad_astra$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        getMaxTemper(): number;
        handler$mcn000$libertyvillagers$replaceIsClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        callGetDeathSound(): Internal.SoundEvent;
        handler$mfh000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        biomancy$getAmbientSound(): Internal.SoundEvent;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        handler$inn000$entityjs$tickDeath(ci: Internal.CallbackInfo_): void;
        redirect$cih000$attributeslib$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        static generateJumpStrength(arg0: Internal.DoubleSupplier_): number;
        isVisuallyCrawling(): boolean;
        servercore$setActivatedImmunityTick(tick: number): void;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        handler$lko000$yungscavebiomes$buffetEntitiesInSandstorm(arg0: Internal.CallbackInfo_): void;
        biomancy$getDimensions(): Internal.EntityDimensions;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isActive(): boolean;
        dropExperience(): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        getLastHurtByMob(): Internal.LivingEntity;
        botania_setLoveCause(arg0: Internal.UUID_): void;
        decreaseAirSupply(arg0: number): number;
        getPortalCooldown(): number;
        setSyncedData(key: string, value: any): void;
        bettermobcombat$getSwingProgress(): number;
        getPosition(arg0: number): Vec3d;
        servercore$inactiveTick(): void;
        setSlowFallingFlag(arg0: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        static vb$leashableInArea(entity: Internal.Entity_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        canUpdate(arg0: boolean): void;
        isFromSpawner(): boolean;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getBlockX(): number;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        handler$eil000$ad_astra$adastra$tick(ci: Internal.CallbackInfo_): void;
        makeMad(): void;
        getAnimationStack(): Internal.AnimationStack;
        emf$prevPitch(): number;
        getMaxHeadXRot(): number;
        setInvisible(arg0: boolean): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        handler$hec000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        setHealth(arg0: number): void;
        modifyReturnValue$odl000$create$onFireImmune(arg0: boolean): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        handler$inp000$entityjs$getWalkTargetValue(pPos: BlockPos_, pLevel: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        handler$ima000$bettercombat$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        bettermobcombat$hasActiveOffHandItemPose(): boolean;
        handler$icn000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        setDefaultMovementSpeed(speed: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        setCustomNameVisible(arg0: boolean): void;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        equipSaddle(arg0: Internal.SoundSource_): void;
        startRiding(arg0: Internal.Entity_): boolean;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        handler$mfh000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        shouldRender(buffer: Internal.TrailBuffer_): boolean;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        getStandAnim(arg0: number): number;
        getChopData(): Internal.SyncedChopData;
        handler$inl002$entityjs$onInteract(pPlayer: Player_, pHand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        bettermobcombat$hasActiveAttackAnimation(): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(arg0: ResourceLocation_): Internal.IAnimation;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        getTeam(): Internal.Team;
        isArmor(arg0: Internal.ItemStack_): boolean;
        handler$ino000$entityjs$getMeleeAttackRangeSqr(pEntity: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        static vb$getPreciseBodyRotation(entity: Internal.Entity_, partialTicks: number): number;
        getFlyingSpeed(): number;
        isLiving(): boolean;
        servercore$getActivatedTick(): number;
        setTemper(arg0: number): void;
        tickLeash(): void;
        handler$ino000$entityjs$tickLeash(ci: Internal.CallbackInfo_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        etf$distanceTo(entity: Internal.Entity_): number;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        handler$inl000$entityjs$lerpTo(x: number, y: number, z: number, yaw: number, pitch: number, posRotationIncrements: number, teleport: boolean, ci: Internal.CallbackInfo_): void;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        bettermobcombat$hasActiveMainHandItemPose(): boolean;
        canPerformRearing(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        shouldRiderSit(): boolean;
        handler$inl001$entityjs$canFreeze(cir: Internal.CallbackInfoReturnable_<any>): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setFlag(arg0: number, arg1: boolean): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        handler$zcl000$horseman$readAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        handler$hkk000$irons_spells_js$init(entityType: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
        handleInsidePortal(arg0: BlockPos_): void;
        vb$supportQuadLeashAsHolder(): boolean;
        handler$eoe000$ramcompat$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        callGetBlockPosBelowThatAffectsMyMovement(): BlockPos;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        clean(): void;
        getLastHurtByPlayerTime(): number;
        handler$jia000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        checkAndHandleImportantInteractions(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getDimensionChangingDelay(): number;
        handler$mfh001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        static isBrightEnoughToSpawn(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_): boolean;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        isTame(): boolean;
        supp$getSlimedTicks(): number;
        static getAnchorUpdateThreshold(): number;
        getEatAnim(arg0: number): number;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        handler$inl001$entityjs$canCollideWith(pEntity: Internal.Entity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        bettermobcombat$getUpswingTicks(): number;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getRiddenInput(arg0: Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        isStayingStill(): boolean;
        canParent(): boolean;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        handler$zcl000$horseman$equipSaddle(source: Internal.SoundSource_, ci: Internal.CallbackInfo_): void;
        dropEquipment(): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        handler$ino000$entityjs$canHoldItem(pStack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        maybeDisableShield(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        getEntries(arg0: boolean): Internal.Set<any>;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        handler$hgi000$goety$makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        interact(arg0: Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        handler$glj001$rarcompat$getControllingPassenger(arg0: Internal.CallbackInfoReturnable_<any>): void;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        callGetAmbientSound(): Internal.SoundEvent;
        handler$inl000$entityjs$entityJs$ignoreExplosion(cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        /**
         * @deprecated
        */
        getUpdateFrequency(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        isTamed(): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getProfile(): Internal.GameProfile;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        biomancy$getSoundVolume(): number;
        isBred(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        getRiddenRotation(arg0: Internal.LivingEntity_): Internal.Vec2;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        setTimeout(): void;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        onAddedToWorld(): void;
        isCrouching(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        getPos(): Internal.Position;
        damageHeldItem(): void;
        "self()"(): Internal.Entity;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        processFlappingMovement(): void;
        handler$idl000$etstlib$getDamage(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        vb$closeRangeLeashBehavior(entity: Internal.Entity_): void;
        emf$isWet(): boolean;
        localvar$ima000$bettercombat$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        handler$ngm000$supplementaries$addSugarCube(ci: Internal.CallbackInfo_): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        static collideBoundingBox(entity: Internal.Entity_, movement: Vec3d_, entityBoundingBox: Internal.AABB_, world: Internal.Level_, collisions: Internal.List_<any>): Vec3d;
        handler$kbg002$relics$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        handler$inl000$entityjs$dampensVibrations(cir: Internal.CallbackInfoReturnable_<any>): void;
        trackingPosition(): Vec3d;
        getCurrentSwingDuration(): number;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        handler$fgl000$cataclysm$onCanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        swing(arg0: Internal.InteractionHand_): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        static getMaxWanderDistance(): number;
        getAnimatableEntity(): Internal.WrappedAnimatableEntity;
        setMagneticDeltaZ(arg0: number): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        emf$getY(): number;
        resetLove(): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        handler$inl000$entityjs$shouldRenderAtSqrDistance(pDistance: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        getSwipes(): number;
        wait(): void;
        getUuid(): Internal.UUID;
        handler$ino000$entityjs$canTakeItem(pItemstack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        setBurningDashDirectionData(): void;
        callShouldStayCloseToLeashHolder(): boolean;
        markHurt(): void;
        canPickUpLoot(): boolean;
        kill(): void;
        redirect$cih000$attributeslib$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        handler$mfh000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        handler$kbd002$relics$getBlockSpeedFactor(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        botania_createInventory(): void;
        handler$klh001$sodiumdynamiclights$onRemove(ci: Internal.CallbackInfo_): void;
        isReanimated(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setEating(arg0: boolean): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        setRollInvulnerableTicks(ticks: number): void;
        removeEffectParticles(): void;
        revive(): void;
        vb$isLeashed(): boolean;
        getBbWidth(): number;
        handler$inl000$entityjs$onClientRemoval(ci: Internal.CallbackInfo_): void;
        callSetRot(arg0: number, arg1: number): void;
        getLastAttackedTicks(): number;
        setTamed(arg0: boolean): void;
        "getName()"(): net.minecraft.network.chat.Component;
        canUpdate(): boolean;
        handler$kbg000$relics$canBeSeenByAnyone(arg0: Internal.CallbackInfoReturnable_<any>): void;
        vb$supportQuadLeash(): boolean;
        shouldDespawnInPeaceful(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        getInLoveTime(): number;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        isPickable(): boolean;
        handler$ino000$entityjs$createNavigation(pLevel: Internal.Level_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        handler$hec000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        checkBedExists(): boolean;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        getRenderPosition(partialTick: number): Vec3d;
        fabric_hasPersistentAttachments(): boolean;
        setSpawnType(arg0: Internal.MobSpawnType_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        restoreLeashFromSave(): void;
        removeTag(arg0: string): boolean;
        notifyAll(): void;
        hasInventoryChanged(arg0: net.minecraft.world.Container_): boolean;
        handler$idj000$etstlib$cancelHurt(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setNoGravity(arg0: boolean): void;
        vb$leashTooFarBehaviour(): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getIndirectPassengers(): Internal.Iterable<any>;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        setId(arg0: number): void;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        emf$prevX(): number;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        isTrailAlive(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$inl003$entityjs$getControllingPassenger(cir: Internal.CallbackInfoReturnable_<any>): void;
        localvar$fgh000$fluidCollision(arg0: Vec3d_): Vec3d;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        static getLead(horse: Internal.HitchableHorse_): Internal.ItemStack;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        setDynamicLightEnabled(arg0: boolean): void;
        moveTo(arg0: Vec3d_): void;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        handler$jgb002$ntgl$setTarget(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        tickEffects(): void;
        wrapOperation$nla000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        handler$inl000$entityjs$stopRiding(ci: Internal.CallbackInfo_): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        handler$inn000$entityjs$makeBrain(pDynamic: Internal.Dynamic_<any>, cir: Internal.CallbackInfoReturnable_<any>): void;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        isStanding(): boolean;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        playerAnimator_setAnimation(arg0: ResourceLocation_, arg1: Internal.IAnimation_): Internal.IAnimation;
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get magicData(): Internal.MagicData
        get playingEndimation(): Internal.PlayableEndimation
        get spectator(): boolean
        get freezingFromFrostmint(): boolean
        get trailMaxLength(): number
        get persistentData(): Internal.CompoundTag
        get health(): number
        get hasUsedSingleAttack(): boolean
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        set animator(arg0: Internal.AzAnimator_<any, any>)
        get trailScale(): number
        get ambientCreature(): boolean
        get inventorySize(): number
        get followingOwner(): boolean
        get name(): net.minecraft.network.chat.Component
        get armorValue(): number
        get swipeDelay(): number
        get trailUpdateFrequency(): number
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get angrySound(): Internal.SoundEvent
        set noHoney(arg0: number)
        get dynamicLightZ(): number
        get voicePitch(): number
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get lastHurtByPlayer(): Player
        get YHeadRot(): number
        get sunBurnTick(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get trailConfigData(): Internal.TrailConfigData
        get glowing(): boolean
        get leashOffset(): Vec3d
        get saddleSoundEvent(): Internal.SoundEvent
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        set standing(arg0: boolean)
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
        set trailConfigData(data: Internal.TrailConfigData_)
        set lootTable(arg0: ResourceLocation_)
        get isInsidePortal(): boolean
        get jumping(): boolean
        set noActionTime(arg0: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get trailFadeOutColor(): number
        get y(): number
        set isJumping(arg0: boolean)
        get blocking(): boolean
        get casting(): boolean
        set reanimated(value: boolean)
        get airSupply(): number
        get animal(): boolean
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get motions(): Internal.Stack<any>
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set x(x: number)
        set ownerUUID(arg0: Internal.UUID_)
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        get onPos(): BlockPos
        set useItemRemaining(arg0: number)
        get targetSelector(): Internal.GoalSelector
        set registeredToWorld(navigation: Internal.PathNavigation_)
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
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get usingItem(): boolean
        get alwaysTicking(): boolean
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get YRot(): number
        set tame(arg0: boolean)
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        get leashed(): boolean
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get flapping(): boolean
        get saddleable(): boolean
        get viewScale(): number
        get eatingSound(): Internal.SoundEvent
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        set animationTick(arg0: number)
        get noAi(): boolean
        set frostmintFreezing(arg0: boolean)
        get fullyFrozen(): boolean
        get lastPos(): BlockPos
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
        /**
         * @deprecated
        */
        get renderDistance(): number
        get wearingArmor(): boolean
        set comboCount(arg0: number)
        set baby(arg0: boolean)
        get temper(): number
        get inWaterOrBubble(): boolean
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get fallFlying(): boolean
        get encodeId(): string
        get nbt(): Internal.CompoundTag
        get saddled(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        get blockSpeedFactor(): number
        get ambientStandInterval(): number
        get eyePosition(): Vec3d
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        get trailFadeInColor(): number
        get brain(): Internal.Brain<any>
        set chopData(arg0: Internal.SyncedChopData_)
        get comboCount(): number
        get dirtyEntries(): Internal.Set<any>
        get eyeY(): number
        get inWaterOrRain(): boolean
        get swimSound(): Internal.SoundEvent
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get onRails(): boolean
        set teleportLocationBehindTarget(distance: number)
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get weaponSwingInProgress(): boolean
        get removed(): boolean
        get rewinding(): boolean
        get passengers(): Internal.EntityArrayList
        set swipes(arg0: number)
        get server(): Internal.MinecraftServer
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        get enabled(): boolean
        set XRot(arg0: number)
        get animatorOrNull(): Internal.AzAnimator<any, any>
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get permissionLevel(): number
        set inLove(arg0: Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get facing(): Internal.Direction
        get jumpCooldown(): number
        get target(): Internal.LivingEntity
        get inLove(): boolean
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get trailInterpolationPoints(): number
        get invulnerable(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get ownerUUID(): Internal.UUID
        set citadelEntityData(arg0: Internal.CompoundTag_)
        get immobile(): boolean
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get noHoney(): number
        set offHandItem(item: Internal.ItemStack_)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get tameOwnerUUID(): Internal.UUID
        set navigation(nav: Internal.PathNavigation_)
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        set knockbackMultiplier_BetterCombat(value: number)
        set YHeadRot(arg0: number)
        set fromSpawner(fromSpawner: boolean)
        set jumping(arg0: boolean)
        set drinkingPotion(drinkingPotion: boolean)
        get absorptionAmount(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get ursa(): boolean
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
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
        set maxUpStep(arg0: number)
        set moveControl(control: Internal.MoveControl_)
        get soulSpeedBlock(): boolean
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get blockY(): number
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        get removalReason(): Internal.Entity$RemovalReason
        get eating(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get controlledVehicle(): Internal.Entity
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get defaultLootTable(): ResourceLocation
        get maxFallDistance(): number
        get ticksFrozen(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        get culled(): boolean
        set fireType(arg0: ResourceLocation_)
        set tameOwnerUUID(arg0: Internal.UUID_)
        get attackable(): boolean
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
        set hasUsedSingleAttack(hasUsedSingleAttack: boolean)
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get mainArm(): Internal.HumanoidArm
        get sprinting(): boolean
        get drinkingPotion(): boolean
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
        get armorCoverPercentage(): number
        get player(): boolean
        get motionDirection(): Internal.Direction
        get moving(): boolean
        set magneticDeltaY(arg0: number)
        get spawnCancelled(): boolean
        set sprinting(arg0: boolean)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        set airSupply(arg0: number)
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        set dataMap(arg0: Internal.Map_<any, any>)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        set pos(arg0: Vec3d_)
        get mainHandItem(): Internal.ItemStack
        get trailGrowing(): boolean
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        get parts(): Internal.PartEntity<any>[]
        get forgePersistentData(): Internal.CompoundTag
        get tameOwner(): Internal.LivingEntity
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        set syncedSpellData(syncedSpellData: Internal.SyncedSpellData_)
        get lastAttacker(): Internal.LivingEntity
        get goalSelector(): Internal.GoalSelector
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get trailRenderDistance(): number
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get dirty(): boolean
        get "jumping()"(): boolean
        set lastHurtByPlayer(arg0: Player_)
        get ambientStandSound(): Internal.SoundEvent
        set YRot(arg0: number)
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set bred(arg0: boolean)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get customJump(): number
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        get inWall(): boolean
        get inventory(): Internal.SimpleContainer
        get magneticDeltaX(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get maxTemper(): number
        get age(): number
        get prevMagneticAttachmentFace(): Internal.Direction
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        get active(): boolean
        get lastHurtByMob(): Internal.LivingEntity
        get portalCooldown(): number
        set slowFallingFlag(arg0: boolean)
        get fromSpawner(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get blockX(): number
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get animationStack(): Internal.AnimationStack
        get maxHeadXRot(): number
        set invisible(arg0: boolean)
        set health(arg0: number)
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get possessedByWatcher(): boolean
        set defaultMovementSpeed(speed: number)
        set customNameVisible(arg0: boolean)
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
        get flyingSpeed(): number
        get living(): boolean
        set temper(arg0: number)
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get lastHurtByPlayerTime(): number
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get tame(): boolean
        get anchorUpdateThreshold(): number
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get stayingStill(): boolean
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        /**
         * @deprecated
        */
        get updateFrequency(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get tamed(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        set viewScale(arg0: number)
        get bred(): boolean
        get outOfCamera(): boolean
        get crouching(): boolean
        get pos(): Internal.Position
        get maxAirSupply(): number
        get animationTick(): number
        set maxHealth(hp: number)
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get currentSwingDuration(): number
        get inLava(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get maxWanderDistance(): number
        get animatableEntity(): Internal.WrappedAnimatableEntity
        set magneticDeltaZ(arg0: number)
        get swipes(): number
        get uuid(): Internal.UUID
        set noAi(arg0: boolean)
        get headArmorItem(): Internal.ItemStack
        get reanimated(): boolean
        set eating(arg0: boolean)
        set rollInvulnerableTicks(ticks: number)
        get bbWidth(): number
        get lastAttackedTicks(): number
        set tamed(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
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
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get trailAlive(): boolean
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set dynamicLightEnabled(arg0: boolean)
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get standing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly MAX_JUMP_STRENGTH: (1.0) & (number);
        static readonly BREEDING_CROSS_FACTOR: (0.15) & (number);
        playerJumpPendingScale: number;
        static readonly CHEST_SLOT_OFFSET: (499) & (number);
        static readonly MAX_MOVEMENT_SPEED: (0.3375) & (number);
        canGallop: boolean;
        temper: number;
        static readonly INV_SLOT_ARMOR: (1) & (number);
        sprintCounter: number;
        static FOOD_ITEMS: (Internal.Ingredient) & (Internal.Ingredient);
        gallopSoundCounter: number;
        static readonly INVENTORY_SLOT_OFFSET: (500) & (number);
        tailCounter: number;
        static readonly INV_BASE_COUNT: (2) & (number);
        allowStandSliding: boolean;
        static readonly INV_SLOT_SADDLE: (0) & (number);
        isJumping: boolean;
        horseman$isHitched: boolean;
        static readonly EQUIPMENT_SLOT_OFFSET: (400) & (number);
        inventory: Internal.SimpleContainer;
        horseman$builtInLead: Internal.ItemStack;
    }
    type AbstractHorse_ = AbstractHorse;
    class TrackGraphBounds {
        constructor(arg0: Internal.TrackGraph_, arg1: Internal.ResourceKey_<Internal.Level>)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        beziers: Internal.List<Internal.BezierConnection>;
        box: Internal.AABB;
    }
    type TrackGraphBounds_ = TrackGraphBounds;
    class MissingMappingsEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<any>>, arg1: Internal.IForgeRegistry_<any>, arg2: Internal.Collection_<Internal.MissingMappingsEvent$Mapping<any>>)
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
        getRegistry(): Internal.IForgeRegistry<any>;
        getAllMappings<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.List<Internal.MissingMappingsEvent$Mapping<T>>;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getKey(): Internal.ResourceKey<Internal.Registry<any>>;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getMappings<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: string): Internal.List<Internal.MissingMappingsEvent$Mapping<T>>;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get registry(): Internal.IForgeRegistry<any>
        get listenerList(): Internal.ListenerList
        get key(): Internal.ResourceKey<Internal.Registry<any>>
        get phase(): Internal.EventPriority
    }
    type MissingMappingsEvent_ = MissingMappingsEvent;
    interface FocusListener extends Internal.EventListener {
        abstract focusGained(arg0: Internal.FocusEvent_): void;
        abstract focusLost(arg0: Internal.FocusEvent_): void;
    }
    type FocusListener_ = FocusListener;
    class SummonEvent$Death extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.ISummon_, arg2: DamageSource_, arg3: boolean)
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
        wasExpiration: boolean;
        source: DamageSource;
        summon: Internal.ISummon;
        world: Internal.Level;
    }
    type SummonEvent$Death_ = SummonEvent$Death;
    class Direction$AxisDirection extends Internal.Enum<Internal.Direction$AxisDirection> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getStep(): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction$AxisDirection>>;
        "compareTo(net.minecraft.core.Direction$AxisDirection)"(arg0: Internal.Direction$AxisDirection_): number;
        getDeclaringClass(): typeof Internal.Direction$AxisDirection;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        opposite(): this;
        hashCode(): number;
        static values(): Internal.Direction$AxisDirection[];
        ordinal(): number;
        wait(): void;
        getName(): string;
        compareTo(arg0: Internal.Direction$AxisDirection_): number;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.Direction$AxisDirection;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get step(): number
        get declaringClass(): typeof Internal.Direction$AxisDirection
        get name(): string
        static readonly POSITIVE: (Internal.Direction$AxisDirection) & (Internal.Direction$AxisDirection);
        static readonly NEGATIVE: (Internal.Direction$AxisDirection) & (Internal.Direction$AxisDirection);
    }
    type Direction$AxisDirection_ = "negative" | "positive" | Direction$AxisDirection;
    class GreaterElementalFocus extends Internal.ElementalFocus {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.SpellSchool_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDiscount(): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getAttributeModifiers(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        static airCheck(arg0: Internal.SpellResolver_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        static waterCheck(arg0: Internal.SpellResolver_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        applyItemModifiers(arg0: Internal.ItemStack_, arg1: Internal.SpellStats$Builder_, arg2: Internal.AbstractSpellPart_, arg3: Internal.HitResult_, arg4: Internal.Level_, arg5: Internal.LivingEntity_, arg6: Internal.SpellContext_): Internal.SpellStats$Builder;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static hasFocus(arg0: Internal.Entity_): Internal.SpellSchool;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        "makesPiglinsNeutral(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
        "isEnderMask(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.player.Player,net.minecraft.world.entity.monster.EnderMan)"(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
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
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "curioBreak(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        "canWalkOnPowderedSnow(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getAttributesTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        "curioBreak(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        "makesPiglinsNeutral(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        applyModifiers(arg0: Internal.SpellStats$Builder_, arg1: Internal.AbstractSpellPart_, arg2: Internal.HitResult_, arg3: Internal.Level_, arg4: Internal.LivingEntity_, arg5: Internal.SpellContext_): Internal.SpellStats$Builder;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        static earthCheck(arg0: Internal.SpellResolver_): boolean;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        static fireCheck(arg0: Internal.SpellResolver_): boolean;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static getFocus(arg0: Player_): Internal.ISchoolFocus;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        notify(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "canEquip(java.lang.String,net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        "canWalkOnPowderedSnow(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSchool(): Internal.SpellSchool;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        "isEnderMask(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.entity.monster.EnderMan,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "canEquip(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.entity.Entity)"(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get discount(): number
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
        get school(): Internal.SpellSchool
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type GreaterElementalFocus_ = GreaterElementalFocus;
    class AllOfCondition$Builder extends Internal.CompositeLootItemCondition$Builder {
        constructor(...arg0: Internal.LootItemCondition$Builder_[])
        getClass(): typeof any;
        create(arg0: Internal.LootItemCondition_[]): Internal.LootItemCondition;
        toString(): string;
        or(arg0: Internal.LootItemCondition$Builder_): Internal.AnyOfCondition$Builder;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        and(arg0: Internal.LootItemCondition$Builder_): this;
        build(): Internal.LootItemCondition;
        hashCode(): number;
        addTerm(arg0: Internal.LootItemCondition$Builder_): void;
        invert(): Internal.LootItemCondition$Builder;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AllOfCondition$Builder_ = AllOfCondition$Builder;
    class DestinationHandler {
        constructor(arg0: Internal.MinimapSession_, arg1: Internal.WaypointDeleter_)
        getClass(): typeof any;
        begin(arg0: Internal.Entity_, arg1: Internal.MinimapWorld_, arg2: boolean, arg3: boolean): void;
        hashCode(): number;
        handle(arg0: Internal.Waypoint_): void;
        toString(): string;
        end(): void;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type DestinationHandler_ = DestinationHandler;
    interface RecipeWrapperAccess {
        abstract getInv(): Internal.IItemHandlerModifiable;
        get inv(): Internal.IItemHandlerModifiable
        (): Internal.IItemHandlerModifiable_;
    }
    type RecipeWrapperAccess_ = RecipeWrapperAccess | (()=> Internal.IItemHandlerModifiable_);
    class IEditModeConfig$HideMode extends Internal.Enum<Internal.IEditModeConfig$HideMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        getDeclaringClass(): typeof Internal.IEditModeConfig$HideMode;
        toString(): string;
        compareTo(arg0: Internal.IEditModeConfig$HideMode_): number;
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.IEditModeConfig$HideMode>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        "compareTo(mezz.jei.api.runtime.IEditModeConfig$HideMode)"(arg0: Internal.IEditModeConfig$HideMode_): number;
        static values(): Internal.IEditModeConfig$HideMode[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.IEditModeConfig$HideMode;
        get class(): typeof any
        get declaringClass(): typeof Internal.IEditModeConfig$HideMode
        static readonly SINGLE: (Internal.IEditModeConfig$HideMode) & (Internal.IEditModeConfig$HideMode);
        static readonly WILDCARD: (Internal.IEditModeConfig$HideMode) & (Internal.IEditModeConfig$HideMode);
    }
    type IEditModeConfig$HideMode_ = "wildcard" | IEditModeConfig$HideMode | "single";
    interface ICapeDataProvider {
        abstract irons_lib$getCapeData(): Internal.CapeData;
        (): Internal.CapeData_;
    }
    type ICapeDataProvider_ = ICapeDataProvider | (()=> Internal.CapeData_);
    class EmptyFluid extends Internal.Fluid {
        constructor()
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        isRandomlyTicking(): boolean;
        getDripParticle(): Internal.ParticleOptions;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getExplosionResistance(): number;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        getClass(): typeof any;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        isEmpty(): boolean;
        callAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        handler$foc000$fabric_transfer_api_v1$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$registryName(): ResourceLocation;
        registerDefaultState(arg0: Internal.FluidState_): void;
        getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        hashCode(): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        createFluidStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Fluid, Internal.FluidState>): void;
        createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get randomlyTicking(): boolean
        get dripParticle(): Internal.ParticleOptions
        get explosionResistance(): number
        get bucket(): Internal.Item
        get class(): typeof any
        get empty(): boolean
        get fluidType(): Internal.FluidType
    }
    type EmptyFluid_ = EmptyFluid;
    class Color$Unbounded extends Internal.Record {
        constructor(r: number, g: number, b: number, a: number)
        getClass(): typeof any;
        clamp(): io.github.mortuusars.exposure.util.color.Color;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        b(): number;
        wait(arg0: number, arg1: number): void;
        a(): number;
        g(): number;
        hashCode(): number;
        multiply(scalar: number): this;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        r(): number;
        get class(): typeof any
    }
    type Color$Unbounded_ = Color$Unbounded;
    interface RandomTickScheduler {
        abstract getScheduledRandomTicks(): Internal.List<BlockPos>;
        abstract scheduleRandomTick(arg0: BlockPos_): void;
        get scheduledRandomTicks(): Internal.List<BlockPos>
    }
    type RandomTickScheduler_ = RandomTickScheduler;
    class Weatherable$WeatheringState extends Internal.Enum<Internal.Weatherable$WeatheringState> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        getSerializedName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        isWeathering(): boolean;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        isStable(): boolean;
        toString(): string;
        "compareTo(com.ordana.immersive_weathering.util.Weatherable$WeatheringState)"(arg0: Internal.Weatherable$WeatheringState_): number;
        notifyAll(): void;
        compareTo(arg0: Internal.Weatherable$WeatheringState_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Weatherable$WeatheringState>>;
        name(): string;
        getDeclaringClass(): typeof Internal.Weatherable$WeatheringState;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Weatherable$WeatheringState[];
        wait(arg0: number): void;
        static valueOf(name: string): Internal.Weatherable$WeatheringState;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get weathering(): boolean
        get stable(): boolean
        get declaringClass(): typeof Internal.Weatherable$WeatheringState
        static readonly STABLE: (Internal.Weatherable$WeatheringState) & (Internal.Weatherable$WeatheringState);
        static readonly TRUE: (Internal.Weatherable$WeatheringState) & (Internal.Weatherable$WeatheringState);
        static readonly FALSE: (Internal.Weatherable$WeatheringState) & (Internal.Weatherable$WeatheringState);
    }
    type Weatherable$WeatheringState_ = Weatherable$WeatheringState | "false" | "stable" | "true";
    interface IRefinementItem extends Internal.IFactionExclusiveItem {
        addFactionToolTips(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: Player_): void;
        abstract applyRefinementSet(arg0: Internal.ItemStack_, arg1: Internal.IRefinementSet_): boolean;
        abstract asItem(): Internal.Item;
        abstract getRefinementSet(arg0: Internal.ItemStack_): Internal.IRefinementSet;
        addOilDescTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: Player_): void;
        abstract getExclusiveFaction(arg0: Internal.ItemStack_): Internal.IFaction<any>;
        abstract getSlotType(): Internal.IRefinementItem$AccessorySlotType;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        addFactionPoisonousToolTip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: Player_): void;
        get slotType(): Internal.IRefinementItem$AccessorySlotType
    }
    type IRefinementItem_ = IRefinementItem;
    interface Merchant {
        abstract notifyTradeUpdated(arg0: Internal.ItemStack_): void;
        abstract notifyTrade(arg0: Internal.MerchantOffer_): void;
        abstract setTradingPlayer(arg0: Player_): void;
        abstract isClientSide(): boolean;
        abstract getTradingPlayer(): Player;
        canRestock(): boolean;
        abstract getOffers(): Internal.MerchantOffers;
        openTradingScreen(arg0: Player_, arg1: net.minecraft.network.chat.Component_, arg2: number): void;
        abstract getNotifyTradeSound(): Internal.SoundEvent;
        abstract overrideOffers(arg0: Internal.MerchantOffers_): void;
        abstract overrideXp(arg0: number): void;
        abstract showProgressBar(): boolean;
        abstract getVillagerXp(): number;
        set tradingPlayer(arg0: Player_)
        get clientSide(): boolean
        get tradingPlayer(): Player
        get offers(): Internal.MerchantOffers
        get notifyTradeSound(): Internal.SoundEvent
        get villagerXp(): number
    }
    type Merchant_ = Merchant;
    interface TraceableEntity {
        abstract getOwner(): Internal.Entity;
        get owner(): Internal.Entity
        (): Internal.Entity_;
    }
    type TraceableEntity_ = TraceableEntity | (()=> Internal.Entity_);
    interface IResearchEffectManager {
        abstract getEffectStrength(arg0: ResourceLocation_): number;
        abstract applyEffect(arg0: Internal.IResearchEffect_): void;
        abstract removeAllEffects(): void;
    }
    type IResearchEffectManager_ = IResearchEffectManager;
    class NeptuniumBow extends Internal.BowItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        getDefaultProjectileRange(): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        customArrow(arg0: Internal.AbstractArrow_): Internal.AbstractArrow;
        handler$ngo000$supplementaries$getAllSupportedProjectiles(cir: Internal.CallbackInfoReturnable_<any>): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        handler$mpl000$sounds$$stop_bow_pull_sound(stack: Internal.ItemStack_, world: Internal.Level_, user: Internal.LivingEntity_, remainingUseTicks: number, ci: Internal.CallbackInfo_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        handler$mpl000$sounds$$start_bow_pull_sound(world: Internal.Level_, user: Player_, hand: Internal.InteractionHand_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defaultProjectileRange(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type NeptuniumBow_ = NeptuniumBow;
    interface BrewContainer {
        abstract getManaCost(arg0: Internal.Brew_, arg1: Internal.ItemStack_): number;
        abstract getItemForBrew(arg0: Internal.Brew_, arg1: Internal.ItemStack_): Internal.ItemStack;
    }
    type BrewContainer_ = BrewContainer;
    interface Int2CharFunction extends it.unimi.dsi.fastutil.Function<number, string>, Internal.IntUnaryOperator {
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        containsKey(arg0: number): boolean;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): string;
        "remove(int)"(arg0: number): string;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        "getOrDefault(int,char)"(arg0: number, arg1: string): string;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2CharFunction;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2CharFunction<T>;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Int2ByteFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2CharFunction;
        "containsKey(int)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        remove(arg0: number): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Int2ShortFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        getOrDefault(arg0: number, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Int2FloatFunction;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        apply(arg0: number): string;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        "put(int,char)"(arg0: number, arg1: string): string;
        abstract get(arg0: number): string;
        abstract "get(int)"(arg0: number): string;
        put(arg0: number, arg1: string): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Int2DoubleFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2CharFunction;
        size(): number;
        clear(): void;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Int2LongFunction;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2CharFunction<T>;
        /**
         * @deprecated
        */
        "put(java.lang.Integer,java.lang.Character)"(arg0: number, arg1: string): string;
    }
    type Int2CharFunction_ = Int2CharFunction;
    class PlayerBlimpItem extends Internal.ItemWithDescription {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
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
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        modifyReturnValue$ncl000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Player_, arg6: Internal.SlotAccess_): boolean;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        handler$hdo000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        handler$kbe000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        handler$kbe001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        handler$mnd000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$b94be4$3(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vec3f;
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
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        modifyReturnValue$ncl000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_): boolean;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$b94be4$2(): Internal.UUID;
        handler$kbe000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        handler$gfp000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
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
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
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
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        handler$fij000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set renderProperties(arg0: any)
        get BASE_ATTACK_DAMAGE_UUID(): Internal.UUID
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$b94be4$4(): Internal.UUID
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
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
    type PlayerBlimpItem_ = PlayerBlimpItem;
}
declare namespace me.paulf.fairylights.server.block {
    class LightBlock extends Internal.FaceAttachedHorizontalDirectionalBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.LightVariant_<any>)
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
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
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
        playerDestroy(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        needsDynamicNodeTypeCheck(): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
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
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
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
        handler$clp000$radium$postConstruct(p_i241196_1_: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        handler$lme000$particular$spawnParticles(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
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
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(shape: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        handler$nbc000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        handler$moi000$sounds$$manageCustomSounds(state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        invokeGetSoundGroup(arg0: Internal.BlockState_): SoundType;
        getVariant(): Internal.LightVariant<any>;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        handler$hlc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        needsDynamicBurningCheck(): boolean;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        static canAttach(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
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
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        sounds$prepareTagPair(value: ResourceLocation_): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
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
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): void;
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
        get variant(): Internal.LightVariant<any>
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
        static readonly LIT: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type LightBlock_ = LightBlock;
}
declare namespace com.yungnickyoung.minecraft.yungscavebiomes.mixin.accessor {
    interface StructureManagerAccessor {
        abstract getWorldOptions(): Internal.WorldOptions;
        abstract getLevel(): Internal.LevelAccessor;
        get worldOptions(): Internal.WorldOptions
        get level(): Internal.LevelAccessor
    }
    type StructureManagerAccessor_ = StructureManagerAccessor;
}
declare namespace io.github.mortuusars.exposure.world.item.camera {
    class Timer {
        constructor()
        getClass(): typeof any;
        set(holder: Internal.CameraHolder_, stack: Internal.ItemStack_, ticks: number): void;
        getTicksSinceLastRelease(holder: Internal.CameraHolder_, stack: Internal.ItemStack_): number;
        setEndTick(stack: Internal.ItemStack_, tick: number): void;
        isTicking(holder: Internal.CameraHolder_, stack: Internal.ItemStack_): boolean;
        toString(): string;
        notifyAll(): void;
        tick(holder: Internal.CameraHolder_, level: Internal.ServerLevel_, stack: Internal.ItemStack_): boolean;
        getStartTick(stack: Internal.ItemStack_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        stop(stack: Internal.ItemStack_): void;
        hashCode(): number;
        setLastReleaseTick(stack: Internal.ItemStack_, tick: number): void;
        setStartTick(stack: Internal.ItemStack_, tick: number): void;
        wait(): void;
        getEndTick(stack: Internal.ItemStack_): number;
        wait(arg0: number): void;
        getRemainingTicks(holder: Internal.CameraHolder_, stack: Internal.ItemStack_): number;
        equals(arg0: any): boolean;
        getLastReleaseTick(stack: Internal.ItemStack_): number;
        get class(): typeof any
    }
    type Timer_ = Timer;
}
declare namespace com.leclowndu93150.particular.mixin {
    interface NativeImageAccessor {
        abstract getPixels(): number;
        get pixels(): number
        (): number;
    }
    type NativeImageAccessor_ = NativeImageAccessor | (()=> number);
}
