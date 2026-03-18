/// <reference path="./internal_*.d.ts" />
declare namespace fuzs.combatnouveau.mixin.accessor {
    interface PlayerAccessor {
        abstract goldenagecombat$setLastItemInMainHand(arg0: Internal.ItemStack_): void;
        abstract goldenagecombat$getLastItemInMainHand(): Internal.ItemStack;
    }
    type PlayerAccessor_ = PlayerAccessor;
}
declare namespace com.tterrag.registrate.builders {
    class ItemBuilder <T extends Internal.Item, P> extends Internal.AbstractBuilder<Internal.Item, T, P, com.tterrag.registrate.builders.ItemBuilder<T, P>> {
        initialProperties(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Item$Properties>): this;
        recipe(arg0: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.Item, T>, Internal.RegistrateRecipeProvider>): this;
        "lang(java.lang.String)"(arg0: string): this;
        getOwner(): Internal.AbstractRegistrate<any>;
        notify(): void;
        removeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): this;
        defaultLang(): this;
        static create<T extends Internal.Item, P>(arg0: Internal.AbstractRegistrate_<any>, arg1: P, arg2: string, arg3: Internal.BuilderCallback_, arg4: com.tterrag.registrate.util.nullness.NonNullFunction_<Internal.Item$Properties, T>): com.tterrag.registrate.builders.ItemBuilder<T, P>;
        asSupplier(): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        register(): Internal.RegistryEntry<any>;
        build(): P;
        onRegister(arg0: com.tterrag.registrate.util.nullness.NonNullConsumer_<T>): this;
        color(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<Internal.Supplier<Internal.ItemColor>>): this;
        "tab(net.minecraft.resources.ResourceKey,com.tterrag.registrate.util.nullness.NonNullBiConsumer)"(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.Item, T>, Internal.CreativeModeTabModifier>): this;
        static of<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        static lazy<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        lazy(): com.tterrag.registrate.util.nullness.NonNullSupplier<Internal.RegistryEntry<T>>;
        wait(): void;
        addMiscData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<D>): this;
        defaultModel(): this;
        getClass(): typeof any;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<Internal.Item>>;
        static of<T>(arg0: Internal.Supplier_<T>, arg1: com.tterrag.registrate.util.nullness.NonNullSupplier_<string>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        tab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.Item, T>, Internal.CreativeModeTabModifier>): this;
        removeTag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.Item>[]): this;
        lang(arg0: Internal.NonNullFunction_<T, string>): this;
        lang(arg0: Internal.NonNullFunction_<T, string>, arg1: string): this;
        tag<TP extends Internal.TagsProvider<R> & Internal.RegistrateTagsProvider<R>>(arg0: Internal.ProviderType_<TP>, ...arg1: Internal.TagKey_<Internal.Item>[]): this;
        wait(arg0: number, arg1: number): void;
        onRegisterAfter<OR>(arg0: Internal.ResourceKey_<Internal.Registry<OR>>, arg1: com.tterrag.registrate.util.nullness.NonNullConsumer_<T>): this;
        getName(): string;
        getEntry(): T;
        tab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): this;
        lang(arg0: string): this;
        toString(): string;
        setData<D extends Internal.RegistrateProvider>(arg0: Internal.ProviderType_<D>, arg1: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.Item, T>, D>): this;
        properties(arg0: Internal.NonNullUnaryOperator_<Internal.Item$Properties>): this;
        /**
         * @deprecated
        */
        tab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.Consumer_<Internal.CreativeModeTabModifier>): this;
        notifyAll(): void;
        getParent(): P;
        tag(...arg0: Internal.TagKey_<Internal.Item>[]): this;
        /**
         * @deprecated
        */
        "tab(net.minecraft.resources.ResourceKey,java.util.function.Consumer)"(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.Consumer_<Internal.CreativeModeTabModifier>): this;
        hashCode(): number;
        "lang(net.minecraftforge.common.util.NonNullFunction)"(arg0: Internal.NonNullFunction_<T, string>): this;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        model(arg0: Internal.NonNullBiConsumer_<Internal.DataGenContext<Internal.Item, T>, Internal.RegistrateItemModelProvider>): this;
        transform<R2, T2 extends R2, P2, S2 extends com.tterrag.registrate.builders.Builder<R2, T2, P2, S2>>(arg0: com.tterrag.registrate.util.nullness.NonNullFunction_<com.tterrag.registrate.builders.ItemBuilder<T, P>, S2>): S2;
        get(): Internal.RegistryEntry<T>;
        get owner(): Internal.AbstractRegistrate<any>
        get class(): typeof any
        get registryKey(): Internal.ResourceKey<Internal.Registry<Internal.Item>>
        get name(): string
        get entry(): T
        get parent(): P
    }
    type ItemBuilder_<T extends Internal.Item, P> = ItemBuilder<T, P>;
}
declare namespace com.yungnickyoung.minecraft.betterfortresses.mixin.accessor {
    interface StructureManagerAccessor {
        abstract getLevel(): Internal.LevelAccessor;
        get level(): Internal.LevelAccessor
        (): Internal.LevelAccessor_;
    }
    type StructureManagerAccessor_ = (()=> Internal.LevelAccessor_) | StructureManagerAccessor;
}
declare namespace Internal {
    interface PlayerAccessor {
        abstract invoke_removeEntitiesOnShoulder(): void;
        (): void;
    }
    type PlayerAccessor_ = PlayerAccessor | (()=> void);
    class ReportedException extends Internal.RuntimeException {
        constructor(arg0: Internal.CrashReport_)
        getClass(): typeof any;
        "printStackTrace(java.io.PrintStream)"(arg0: Internal.PrintStream_): void;
        getMessage(): string;
        toString(): string;
        notifyAll(): void;
        "printStackTrace(java.io.PrintWriter)"(arg0: Internal.PrintWriter_): void;
        getReport(): Internal.CrashReport;
        getCause(): Internal.Throwable;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getStackTrace(): Internal.StackTraceElement[];
        printStackTrace(arg0: Internal.PrintWriter_): void;
        hashCode(): number;
        getSuppressed(): Internal.Throwable[];
        fillInStackTrace(): Internal.Throwable;
        addSuppressed(arg0: Internal.Throwable_): void;
        wait(): void;
        printStackTrace(): void;
        initCause(arg0: Internal.Throwable_): Internal.Throwable;
        wait(arg0: number): void;
        setStackTrace(arg0: Internal.StackTraceElement_[]): void;
        printStackTrace(arg0: Internal.PrintStream_): void;
        equals(arg0: any): boolean;
        getLocalizedMessage(): string;
        get class(): typeof any
        get message(): string
        get report(): Internal.CrashReport
        get cause(): Internal.Throwable
        get stackTrace(): Internal.StackTraceElement[]
        get suppressed(): Internal.Throwable[]
        set stackTrace(arg0: Internal.StackTraceElement_[])
        get localizedMessage(): string
    }
    type ReportedException_ = ReportedException;
    interface CraftingRecipe extends Internal.Recipe<Internal.CraftingContainer> {
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        abstract canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        abstract assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract category(): Internal.CraftingBookCategory;
        setGroup(group: string): void;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        abstract getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
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
    type CraftingRecipe_ = CraftingRecipe;
    class BaseCoralWallFanBlock extends Internal.BaseCoralFanBlock {
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
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        static scanForWater(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
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
        tryScheduleDieTick(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): void;
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
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type BaseCoralWallFanBlock_ = BaseCoralWallFanBlock;
    class RegisterShadersEvent extends net.minecraftforge.eventbus.api.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.ResourceProvider_, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.ShaderInstance, Internal.Consumer<Internal.ShaderInstance>>>)
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
        getResourceProvider(): Internal.ResourceProvider;
        registerShader(arg0: Internal.ShaderInstance_, arg1: Internal.Consumer_<Internal.ShaderInstance>): void;
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
        get resourceProvider(): Internal.ResourceProvider
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type RegisterShadersEvent_ = RegisterShadersEvent;
    interface IOwned {
        ownedTeleport(arg0: number, arg1: number, arg2: number): boolean;
        getMasterOwner(): Internal.LivingEntity;
        setLimitedLife(arg0: number): void;
        teleportTowards(arg0: Internal.Entity_): void;
        saveOwnedData(arg0: Internal.CompoundTag_): void;
        startRevival(): void;
        "copyTrueOwner(com.Polarice3.Goety.api.blocks.entities.IOwnedBlock)"(arg0: Internal.IOwnedBlock_): void;
        preventsSleep(arg0: Internal.Player_): boolean;
        checkHostility(): void;
        ownedTeleport(arg0: Vec3d_): boolean;
        setReviveDim(arg0: Internal.ResourceKey_<Internal.Level>): void;
        abstract getOwnerId(): Internal.UUID;
        getSummonLimit(arg0: Internal.LivingEntity_): number;
        getReviveLevel(): Internal.ResourceKey<Internal.Level>;
        setReviveDim(arg0: string): void;
        removeTrueOwner(): void;
        lifeSpanDamage(): void;
        mobSense(): void;
        setHasLifespan(arg0: boolean): void;
        "copyTrueOwner(com.Polarice3.Goety.api.entities.IOwned)"(arg0: Internal.IOwned_): void;
        setFamiliar(): void;
        reviveTick(): void;
        summonPredicate(): Internal.Predicate<Internal.Entity>;
        teleportHits(): void;
        isChargingCrossbow(): boolean;
        onStopAttack(): void;
        copyTrueOwner(arg0: Internal.IOwned_): void;
        abstract setHostile(arg0: boolean): void;
        canBeFamiliar(): boolean;
        onCeaseFire(arg0: Internal.ServerPlayer_): void;
        getLifespan(): number;
        "setReviveDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): void;
        canRevive(arg0: DamageSource_): boolean;
        getRevivePos(): BlockPos;
        copyTrueOwner(arg0: Internal.IOwnedBlock_): void;
        setOwnerClientId(arg0: number): void;
        getReviveDim(): string;
        setRevivePos(arg0: BlockPos_): void;
        setHasSummonCheck(arg0: number): void;
        isGrudgedTowards(arg0: Internal.LivingEntity_): boolean;
        uncreditedKill(arg0: Internal.LivingEntity_): void;
        abstract setOwnerId(arg0: Internal.UUID_): void;
        isFamiliar(): boolean;
        abstract isHostile(): boolean;
        setTrueOwner(arg0: Internal.LivingEntity_): void;
        abstract getTrueOwner(): Internal.LivingEntity;
        isAllyWithType(arg0: Internal.EntityType_<any>): boolean;
        isAllyWith(arg0: Internal.LivingEntity_): boolean;
        getRevivingTime(): number;
        isLimitedLife(): boolean;
        ownerCheck(): void;
        getVariant(arg0: Internal.Level_, arg1: BlockPos_): Internal.EntityType<any>;
        hasSummons(): boolean;
        readOwnedData(arg0: Internal.CompoundTag_): void;
        hasLifespan(): boolean;
        "setReviveDim(java.lang.String)"(arg0: string): void;
        isNatural(): boolean;
        setNatural(arg0: boolean): void;
        convertNewEquipment(arg0: Internal.Entity_): void;
        isReviving(): boolean;
        vec3RevivePos(): Vec3d;
        ownedTick(): void;
        pacifySurroundingMobs(arg0: number): void;
        reviveOwned(): void;
        isGrudgedTowardsType(arg0: Internal.EntityType_<any>): boolean;
        setLifespan(arg0: number): void;
        getOwnerClientId(): number;
        getVariant(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_): Internal.EntityType<any>;
        teleportTowards(arg0: Internal.Entity_, arg1: number): void;
        getHasSummonCheck(): number;
        setRevivingTime(arg0: number): void;
        get masterOwner(): Internal.LivingEntity
        set limitedLife(arg0: number)
        set reviveDim(arg0: Internal.ResourceKey_<Internal.Level>)
        get ownerId(): Internal.UUID
        get reviveLevel(): Internal.ResourceKey<Internal.Level>
        set reviveDim(arg0: string)
        set hasLifespan(arg0: boolean)
        get chargingCrossbow(): boolean
        set hostile(arg0: boolean)
        get lifespan(): number
        set "reviveDim(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>)
        get revivePos(): BlockPos
        set ownerClientId(arg0: number)
        get reviveDim(): string
        set revivePos(arg0: BlockPos_)
        set hasSummonCheck(arg0: number)
        set ownerId(arg0: Internal.UUID_)
        get familiar(): boolean
        get hostile(): boolean
        set trueOwner(arg0: Internal.LivingEntity_)
        get trueOwner(): Internal.LivingEntity
        get revivingTime(): number
        get limitedLife(): boolean
        set "reviveDim(java.lang.String)"(arg0: string)
        get natural(): boolean
        set natural(arg0: boolean)
        get reviving(): boolean
        set lifespan(arg0: number)
        get ownerClientId(): number
        get hasSummonCheck(): number
        set revivingTime(arg0: number)
        readonly SPEED_MODIFIER_UUID: (Internal.UUID) & (Internal.UUID);
        readonly SPEED_MODIFIER: (Internal.AttributeModifier) & (Internal.AttributeModifier);
    }
    type IOwned_ = IOwned;
    class PlayerEvent$PlayerChangedDimensionEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: Internal.ResourceKey_<Internal.Level>, arg2: Internal.ResourceKey_<Internal.Level>)
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
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getFrom(): Internal.ResourceKey<Internal.Level>;
        wait(arg0: number): void;
        getTo(): Internal.ResourceKey<Internal.Level>;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get from(): Internal.ResourceKey<Internal.Level>
        get to(): Internal.ResourceKey<Internal.Level>
        get phase(): Internal.EventPriority
    }
    type PlayerEvent$PlayerChangedDimensionEvent_ = PlayerEvent$PlayerChangedDimensionEvent;
    interface InfoDisplayOnCompile <T> {
        abstract onCompile(arg0: Internal.InfoDisplay_<T>, arg1: Internal.InfoDisplayCompiler_, arg2: Internal.MinimapSession_, arg3: number, arg4: BlockPos_): void;
        (arg0: Internal.InfoDisplay<T>, arg1: Internal.InfoDisplayCompiler, arg2: Internal.MinimapSession, arg3: number, arg4: BlockPos): void;
    }
    type InfoDisplayOnCompile_<T> = InfoDisplayOnCompile<T> | ((arg0: Internal.InfoDisplay<T>, arg1: Internal.InfoDisplayCompiler, arg2: Internal.MinimapSession, arg3: number, arg4: BlockPos)=> void);
    class FDEDataSerializers$1 implements Internal.EntityDataSerializer<Vec3d> {
        getClass(): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static simple<T>(arg0: Internal.FriendlyByteBuf$Writer_<T>, arg1: Internal.FriendlyByteBuf$Reader_<T>): Internal.EntityDataSerializer<T>;
        "read(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Vec3d;
        "write(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.phys.Vec3)"(arg0: Internal.FriendlyByteBuf_, arg1: Vec3d_): void;
        copy(arg0: Vec3d_): Vec3d;
        static simpleEnum<T extends Internal.Enum<T>>(arg0: T): Internal.EntityDataSerializer<T>;
        "write(net.minecraft.network.FriendlyByteBuf,java.lang.Object)"(arg0: Internal.FriendlyByteBuf_, arg1: any): void;
        "read(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): any;
        static simpleId<T>(arg0: Internal.IdMap_<T>): Internal.EntityDataSerializer<T>;
        toString(): string;
        copy(arg0: any): any;
        static optional<T>(arg0: Internal.FriendlyByteBuf$Writer_<T>, arg1: Internal.FriendlyByteBuf$Reader_<T>): Internal.EntityDataSerializer<Internal.Optional<T>>;
        notifyAll(): void;
        read(arg0: Internal.FriendlyByteBuf_): Vec3d;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Vec3d_): void;
        hashCode(): number;
        read(arg0: Internal.FriendlyByteBuf_): any;
        createAccessor(arg0: number): Internal.EntityDataAccessor<Vec3d>;
        wait(): void;
        wait(arg0: number): void;
        "copy(java.lang.Object)"(arg0: any): any;
        write(arg0: Internal.FriendlyByteBuf_, arg1: any): void;
        equals(arg0: any): boolean;
        "copy(net.minecraft.world.phys.Vec3)"(arg0: Vec3d_): Vec3d;
        get class(): typeof any
    }
    type FDEDataSerializers$1_ = FDEDataSerializers$1;
    abstract class IESerializableRecipe implements Internal.Recipe<net.minecraft.world.Container> {
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        abstract getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        static of(arg0: Internal.ItemStack_): net.minecraftforge.common.util.Lazy<Internal.ItemStack>;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        static readonly LAZY_EMPTY: net.minecraftforge.common.util.Lazy<Internal.ItemStack>;
    }
    type IESerializableRecipe_ = IESerializableRecipe;
    class MaterialId extends Internal.ResourceId implements Internal.MaterialVariantId {
        constructor(arg0: ResourceLocation_)
        constructor(arg0: string, arg1: string)
        constructor(arg0: string)
        static isValidNamespace(arg0: string): boolean;
        "matchesVariant(slimeknights.tconstruct.library.materials.definition.MaterialVariantId)"(arg0: Internal.MaterialVariantId_): boolean;
        compareTo(arg0: ResourceLocation_): number;
        toLanguageKey(arg0: string): string;
        matchesVariant(arg0: Internal.MaterialVariantId_): boolean;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        static read(arg0: string, arg1: Internal.StringReader_): Internal.MaterialVariantId;
        notify(): void;
        compareTo(arg0: any): number;
        static tryBuild(arg0: string, arg1: string): ResourceLocation;
        matchesVariant(arg0: Internal.ItemStack_): boolean;
        static isAllowedInResourceLocation(arg0: string): boolean;
        static tryParse(arg0: string, arg1: string): Internal.MaterialVariantId;
        static tryParse(arg0: string): ResourceLocation;
        withPath(arg0: string): ResourceLocation;
        static validPathChar(arg0: string): boolean;
        static parse(arg0: string): Internal.MaterialVariantId;
        toLanguageKey(arg0: string, arg1: string): string;
        toDebugFileName(): string;
        static create(arg0: Internal.MaterialId_, arg1: string): Internal.MaterialVariantId;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static of(arg0: string, arg1: string): ResourceLocation;
        matchesVariant(arg0: Internal.MaterialVariant_): boolean;
        specialEquals(o: any, shallow: boolean): boolean;
        hasVariant(): boolean;
        static "tryParse(java.lang.String)"(arg0: string): ResourceLocation;
        static read(arg0: Internal.StringReader_): ResourceLocation;
        static bySeparator(arg0: string, arg1: string): ResourceLocation;
        static "tryBuild(java.lang.String,java.lang.String)"(arg0: string, arg1: string): ResourceLocation;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        toLanguageKey(): string;
        static isValidResourceLocation(arg0: string): boolean;
        static decompose(arg0: string, arg1: string): string[];
        "withPath(java.util.function.UnaryOperator)"(arg0: Internal.UnaryOperator_<string>): ResourceLocation;
        wait(): void;
        static fromNamespaceAndPath(arg0: string, arg1: string): ResourceLocation;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static "tryBuild(java.lang.String,java.lang.String)"(arg0: string, arg1: string): Internal.MaterialId;
        static "tryParse(java.lang.String)"(arg0: string): Internal.MaterialId;
        getClass(): typeof any;
        "matchesVariant(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        getId(): this;
        "matches(slimeknights.tconstruct.library.materials.definition.IMaterial)"(arg0: Internal.IMaterial_): boolean;
        static convertJson(arg0: com.google.gson.JsonElement_, arg1: string): Internal.MaterialVariantId;
        static tryBuild(arg0: string, arg1: string): Internal.MaterialId;
        matches(arg0: Internal.IMaterial_): boolean;
        static validNamespaceChar(arg0: string): boolean;
        static read(arg0: string): Internal.DataResult<ResourceLocation>;
        toShortLanguageKey(): string;
        static isValidPath(arg0: string): boolean;
        static withDefaultNamespace(arg0: string): ResourceLocation;
        wait(arg0: number, arg1: number): void;
        setPath(arg0: string): void;
        "withPath(java.lang.String)"(arg0: string): ResourceLocation;
        getVariant(): string;
        "matches(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): boolean;
        getPath(): string;
        getLocation(arg0: string): ResourceLocation;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static tryParse(arg0: Internal.StringReader_): Internal.MaterialVariantId;
        getSuffix(): string;
        getNamespace(): string;
        compareNamespaced(arg0: ResourceLocation_): number;
        "matchesVariant(slimeknights.tconstruct.library.materials.definition.MaterialVariant)"(arg0: Internal.MaterialVariant_): boolean;
        handler$bmb000$lightspeed$hashCodeHeadInjected(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "compareTo(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): number;
        toString(): string;
        withSuffix(arg0: string): ResourceLocation;
        static tryParse(arg0: string): Internal.MaterialId;
        notifyAll(): void;
        static tryBySeparator(arg0: string, arg1: string): ResourceLocation;
        handler$bmb000$lightspeed$hashCodeReturnInjected(arg0: Internal.CallbackInfoReturnable_<any>): void;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.MaterialVariantId;
        static "read(com.mojang.brigadier.StringReader)"(arg0: Internal.StringReader_): ResourceLocation;
        hashCode(): number;
        static "read(java.lang.String)"(arg0: string): Internal.DataResult<ResourceLocation>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        static "tryParse(com.mojang.brigadier.StringReader)"(arg0: Internal.StringReader_): Internal.MaterialVariantId;
        setNamespace(arg0: string): void;
        withPath(arg0: Internal.UnaryOperator_<string>): ResourceLocation;
        static create(arg0: string, arg1: string, arg2: string): Internal.MaterialVariantId;
        static fromJson(arg0: com.google.gson.JsonObject_, arg1: string): Internal.MaterialVariantId;
        wait(arg0: number): void;
        matches(arg0: Internal.ItemStack_): boolean;
        sameVariant(arg0: Internal.MaterialVariantId_): boolean;
        withPrefix(arg0: string): ResourceLocation;
        equals(arg0: any): boolean;
        get class(): typeof any
        get id(): Internal.MaterialId
        set path(arg0: string)
        get variant(): string
        get path(): string
        get suffix(): string
        get namespace(): string
        set namespace(arg0: string)
        static readonly PARSER: Internal.IdParser<Internal.MaterialId>;
    }
    type MaterialId_ = MaterialId;
    class PointOfView extends Internal.Record {
        constructor(pos: Vec3d_, dir: Vec3d_)
        getClass(): typeof any;
        toString(): string;
        limitMaxDistance(entity: Internal.Entity_, distance: number): this;
        reverseDirection(): this;
        notifyAll(): void;
        static of(entity: Internal.Entity_): Internal.PointOfView;
        pos(): Vec3d;
        move(x: number, y: number, z: number): this;
        "limitMaxDistance(net.minecraft.world.entity.Entity,double)"(entity: Internal.Entity_, distance: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static of(holder: Internal.CameraHolder_): Internal.PointOfView;
        limitMaxDistance(holder: Internal.CameraHolder_, distance: number): this;
        static "of(net.minecraft.world.entity.Entity)"(entity: Internal.Entity_): Internal.PointOfView;
        hashCode(): number;
        rotateY(degrees: number): this;
        rotateX(degrees: number): this;
        static "of(io.github.mortuusars.exposure.world.entity.CameraHolder)"(holder: Internal.CameraHolder_): Internal.PointOfView;
        wait(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        dir(): Vec3d;
        "limitMaxDistance(io.github.mortuusars.exposure.world.entity.CameraHolder,double)"(holder: Internal.CameraHolder_, distance: number): this;
        get class(): typeof any
    }
    type PointOfView_ = PointOfView;
    class InetAddress implements Internal.Serializable {
        getClass(): typeof any;
        isSiteLocalAddress(): boolean;
        isLinkLocalAddress(): boolean;
        static getLocalHost(): Internal.InetAddress;
        isAnyLocalAddress(): boolean;
        static getByAddress(arg0: string, arg1: number[]): Internal.InetAddress;
        notify(): void;
        getHostAddress(): string;
        wait(arg0: number, arg1: number): void;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        getCanonicalHostName(): string;
        static getAllByName(arg0: string): Internal.InetAddress[];
        getHostName(): string;
        isMCOrgLocal(): boolean;
        static getByName(arg0: string): Internal.InetAddress;
        static getLoopbackAddress(): Internal.InetAddress;
        isMulticastAddress(): boolean;
        toString(): string;
        isReachable(arg0: number): boolean;
        isReachable(arg0: Internal.NetworkInterface_, arg1: number, arg2: number): boolean;
        isMCLinkLocal(): boolean;
        notifyAll(): void;
        isLoopbackAddress(): boolean;
        isMCSiteLocal(): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static getByAddress(arg0: number[]): Internal.InetAddress;
        equals(arg0: any): boolean;
        getAddress(): number[];
        get class(): typeof any
        get siteLocalAddress(): boolean
        get linkLocalAddress(): boolean
        get localHost(): Internal.InetAddress
        get anyLocalAddress(): boolean
        get hostAddress(): string
        get MCGlobal(): boolean
        get MCNodeLocal(): boolean
        get canonicalHostName(): string
        get hostName(): string
        get MCOrgLocal(): boolean
        get loopbackAddress(): Internal.InetAddress
        get multicastAddress(): boolean
        get MCLinkLocal(): boolean
        get loopbackAddress(): boolean
        get MCSiteLocal(): boolean
        get address(): number[]
    }
    type InetAddress_ = InetAddress;
    interface Short2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.IntPredicate {
        apply(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        remove(arg0: number): boolean;
        or(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Short2ByteFunction;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2BooleanFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        "containsKey(short)"(arg0: number): boolean;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2BooleanFunction;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2BooleanFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Short2DoubleFunction;
        abstract get(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        abstract "get(short)"(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2BooleanFunction<T>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Short2ShortFunction;
        "getOrDefault(short,boolean)"(arg0: number, arg1: boolean): boolean;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2BooleanFunction;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        negate(): Internal.IntPredicate;
        "remove(short)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Boolean)"(arg0: number, arg1: boolean): boolean;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2BooleanFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): boolean;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Short2LongFunction;
        defaultReturnValue(): boolean;
        and(arg0: Internal.IntPredicate_): Internal.IntPredicate;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        "put(short,boolean)"(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Boolean)"(arg0: any, arg1: boolean): boolean;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2BooleanFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2BooleanFunction;
        put(arg0: number, arg1: boolean): boolean;
        size(): number;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        clear(): void;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Short2FloatFunction;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Short2IntFunction;
    }
    type Short2BooleanFunction_ = Short2BooleanFunction;
    class RegularImmutableList <E> extends Internal.ImmutableList<E> {
        static builder<E>(): Internal.ImmutableList$Builder<E>;
        static copyOf<E>(arg0: E[]): Internal.ImmutableList<E>;
        reverse(): Internal.ImmutableList<E>;
        static sortedCopyOf<E>(arg0: Internal.Comparator_<E>, arg1: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static copyOf<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<E>): void;
        notify(): void;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        "remove(int)"(arg0: number): E;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        listIterator(): Internal.ListIterator<any>;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.ImmutableList<E>;
        indexOf(arg0: any): number;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.ImmutableList<E>;
        abstract toArray<T>(arg0: T[]): T[];
        static "of(java.lang.Object)"<E>(arg0: E): Internal.ImmutableList<E>;
        abstract remove(arg0: any): boolean;
        abstract "remove(java.lang.Object)"(arg0: any): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.ImmutableList<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        listIterator(arg0: number): Internal.UnmodifiableListIterator<E>;
        static "copyOf(java.lang.Iterable)"<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        static of<E>(arg0: E, arg1: E): Internal.ImmutableList<E>;
        getClass(): typeof any;
        get(arg0: number): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.ImmutableList<E>;
        static "copyOf(java.util.Collection)"<E>(arg0: Internal.Collection_<E>): Internal.ImmutableList<E>;
        abstract add(arg0: E): boolean;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.ImmutableList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.ImmutableList<E>;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: E): E;
        static of<E>(...arg0: E[]): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E, arg11: E, ...arg12: E[]): Internal.ImmutableList<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.ImmutableList<E>;
        static builderWithExpectedSize<E>(arg0: number): Internal.ImmutableList$Builder<E>;
        static of<E>(): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        remove(arg0: number): E;
        static of<E>(arg0: E): Internal.ImmutableList<E>;
        contains(arg0: any): boolean;
        static "copyOf(java.util.Iterator)"<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableList<E>;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.ImmutableList<E>;
        toString(): string;
        iterator(): Internal.Iterator<any>;
        notifyAll(): void;
        static sortedCopyOf<E extends Internal.Comparable<any>>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static "copyOf(java.lang.Object[])"<E>(arg0: E[]): Internal.ImmutableList<E>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E): Internal.ImmutableList<E>;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        asList(): Internal.ImmutableList<E>;
        subList(arg0: number, arg1: number): Internal.List<any>;
        size(): number;
        hashCode(): number;
        static toImmutableList<E>(): Internal.Collector<E, any, Internal.ImmutableList<E>>;
        abstract clear(): void;
        wait(arg0: number): void;
        spliterator(): Internal.Spliterator<E>;
        equals(arg0: any): boolean;
        static copyOf<E>(arg0: Internal.Iterator_<E>): Internal.ImmutableList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.ImmutableList<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type RegularImmutableList_<E> = RegularImmutableList<E>;
    abstract class TeamProperty <T> {
        getClass(): typeof any;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        config(config: Internal.ConfigGroup_, value: Internal.TeamPropertyValue_<T>): void;
        toNBT(value: T): Internal.Tag;
        notify(): void;
        createValueFromNetwork(buf: Internal.FriendlyByteBuf_): Internal.TeamPropertyValue<T>;
        getDefaultValue(): T;
        writeValue(buf: Internal.FriendlyByteBuf_, value: T): void;
        wait(arg0: number, arg1: number): void;
        createValueFromNBT(tag: Internal.Tag_): Internal.TeamPropertyValue<T>;
        getTranslationKey(prefix: string): string;
        hashCode(): number;
        getId(): ResourceLocation;
        abstract fromString(arg0: string): Internal.Optional<T>;
        toString(value: T): string;
        wait(): void;
        abstract getType(): Internal.TeamPropertyType<T>;
        wait(arg0: number): void;
        equals(o: any): boolean;
        createDefaultValue(): Internal.TeamPropertyValue<T>;
        fromNBT(tag: Internal.Tag_): Internal.Optional<T>;
        readValue(buf: Internal.FriendlyByteBuf_): T;
        get class(): typeof any
        get defaultValue(): T
        get id(): ResourceLocation
        get type(): Internal.TeamPropertyType<T>
    }
    type TeamProperty_<T> = TeamProperty<T>;
    interface MobEffectInstanceAccessor {
        abstract create$getHiddenEffect(): Internal.MobEffectInstance;
        (): Internal.MobEffectInstance_;
    }
    type MobEffectInstanceAccessor_ = MobEffectInstanceAccessor | (()=> Internal.MobEffectInstance_);
    class HauntedArmorStandItem extends Internal.Item {
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
    type HauntedArmorStandItem_ = HauntedArmorStandItem;
    class SoftFluid$Builder {
        constructor(stillTexture: ResourceLocation_, flowingTexture: ResourceLocation_)
        constructor(fluid: Internal.Fluid_)
        getClass(): typeof any;
        "copyTexturesFrom(java.lang.String)"(fluidRes: string): this;
        addEqFluid(fluid: Internal.Fluid_): this;
        drink(item: Internal.Item_): this;
        "food(net.minecraft.world.item.Item)"(item: Internal.Item_): this;
        containers(containerList: Internal.FluidContainerList_): this;
        tinted(): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        emptyHandContainerItem(filledItem: Internal.Item_, itemCapacity: number): this;
        luminosity(luminosity: number): this;
        copyTexturesFrom(fluidRes: ResourceLocation_): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number): this;
        textures(still: ResourceLocation_, flow: ResourceLocation_): this;
        containerItem(filledItem: Internal.Item_, emptyItem: Internal.Item_, itemCapacity: number, fillSound: Internal.SoundEvent_, emptySound: Internal.SoundEvent_): this;
        translation(component: net.minecraft.network.chat.Component_): this;
        "copyTexturesFrom(net.minecraft.resources.ResourceLocation)"(fluidRes: ResourceLocation_): this;
        emissivity(emissivity: number): this;
        bottle(item: Internal.Item_): this;
        keepNBTFromItem(...NBTkey: string[]): this;
        food(foodProvider: Internal.FoodProvider_): this;
        stew(item: Internal.Item_): this;
        food(item: Internal.Item_): this;
        toString(): string;
        notifyAll(): void;
        bucket(item: Internal.Item_): this;
        "food(net.mehvahdjukaar.moonlight.api.fluids.FoodProvider)"(foodProvider: Internal.FoodProvider_): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        fromMod(s: string): this;
        copyTexturesFrom(fluidRes: string): this;
        food(item: Internal.Item_, foodDivider: number): this;
        onlyFlowingTinted(): this;
        tintMethod(tint: Internal.SoftFluid$TintMethod_): this;
        hashCode(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        translationKey(translationKey: string): this;
        wait(): void;
        wait(arg0: number): void;
        color(tintColor: number): this;
        build(): Internal.SoftFluid;
        equals(arg0: any): boolean;
        noTint(): this;
        bowl(item: Internal.Item_): this;
        get class(): typeof any
    }
    type SoftFluid$Builder_ = SoftFluid$Builder;
    interface IIngredientAcceptor <THIS extends Internal.IIngredientAcceptor<THIS>> extends Internal.IIngredientConsumer {
        addOptionalTypedIngredients(arg0: Internal.List_<any>): Internal.IIngredientConsumer;
        abstract addIngredient<I>(arg0: Internal.IIngredientType_<I>, arg1: I): THIS;
        abstract addTypedIngredients(arg0: Internal.List_<Internal.ITypedIngredient<any>>): THIS;
        abstract addIngredientsUnsafe(arg0: Internal.List_<any>): THIS;
        addIngredients(arg0: Internal.IIngredientType_<any>, arg1: Internal.List_<any>): Internal.IIngredientConsumer;
        addIngredients(arg0: Internal.Ingredient_): Internal.IIngredientConsumer;
        addItemLike(arg0: Internal.ItemLike_): Internal.IIngredientConsumer;
        addTypedIngredient<I>(arg0: Internal.ITypedIngredient_<I>): THIS;
        addItemStacks(arg0: Internal.List_<Internal.ItemStack>): THIS;
        addFluidStack(arg0: Internal.Fluid_, arg1: number): Internal.IIngredientConsumer;
        addFluidStack(arg0: Internal.Fluid_): Internal.IIngredientConsumer;
        addItemStack(arg0: Internal.ItemStack_): THIS;
        abstract addFluidStack(arg0: Internal.Fluid_, arg1: number, arg2: Internal.CompoundTag_): THIS;
    }
    type IIngredientAcceptor_<THIS extends Internal.IIngredientAcceptor<THIS>> = IIngredientAcceptor<THIS>;
    class EctoKnifeItem extends Internal.KnifeItem {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
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
        handler$ela000$combatnouveau$hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
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
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
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
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
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
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
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
        handler$ioj001$dummmmmmy$mm$damageEquipment(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
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
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$f7f358$6(): Internal.UUID;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
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
        getAttackDamage(): number;
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
        /**
         * @deprecated
        */
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
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
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
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get attackDamage(): number
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
    type EctoKnifeItem_ = EctoKnifeItem;
    class GoodDemomanIconItem extends Internal.Item {
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
    type GoodDemomanIconItem_ = GoodDemomanIconItem;
    interface SculkBehaviour {
        depositCharge(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        attemptSpreadVein(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>, arg4: boolean): boolean;
        abstract attemptUseCharge(arg0: Internal.SculkSpreader$ChargeCursor_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.SculkSpreader_, arg5: boolean): number;
        canChangeBlockStateOnSpread(): boolean;
        getSculkSpreadDelay(): number;
        onDischarged(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        updateDecayDelay(arg0: number): number;
        get sculkSpreadDelay(): number
        (arg0: Internal.SculkSpreader$ChargeCursor, arg1: Internal.LevelAccessor, arg2: BlockPos, arg3: Internal.RandomSource, arg4: Internal.SculkSpreader, arg5: boolean): number;
        readonly DEFAULT: Internal.SculkBehaviour;
    }
    type SculkBehaviour_ = SculkBehaviour | ((arg0: Internal.SculkSpreader$ChargeCursor, arg1: Internal.LevelAccessor, arg2: BlockPos, arg3: Internal.RandomSource, arg4: Internal.SculkSpreader, arg5: boolean)=> number);
    class BubblePearlItem extends Internal.EnderpearlItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<net.minecraft.network.chat.Component>, isAdvanced: Internal.TooltipFlag_): void;
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
        use(level: Internal.Level_, player: Internal.Player_, usedHand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
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
    type BubblePearlItem_ = BubblePearlItem;
    class ConditionalRecipeSerializer implements Internal.RecipeSerializer<Internal.Recipe<any>> {
        fromJson(location: ResourceLocation_, json: com.google.gson.JsonObject_, context: Internal.ICondition$IContext_): Internal.Recipe<any>;
        getClass(): typeof any;
        static wrapRecipe(recipe: com.google.gson.JsonObject_, conditions: Internal.Collection_<Internal.ResourceCondition>): com.google.gson.JsonObject;
        toString(): string;
        notifyAll(): void;
        toNetwork(friendlyByteBuf: Internal.FriendlyByteBuf_, recipe: Internal.Recipe_<any>): void;
        notify(): void;
        static wrapRecipeWithForgeConditions(recipe: com.google.gson.JsonObject_, conditions: Internal.Collection_<Internal.ICondition>): com.google.gson.JsonObject;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(location: ResourceLocation_, json: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(resourceLocation: ResourceLocation_, friendlyByteBuf: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
        static readonly INSTANCE: (Internal.ConditionalRecipeSerializer) & (Internal.ConditionalRecipeSerializer);
    }
    type ConditionalRecipeSerializer_ = ConditionalRecipeSerializer;
    class MultiTextureRenderTypeRenderer {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        begin(arg0: number): Internal.BufferBuilder;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type MultiTextureRenderTypeRenderer_ = MultiTextureRenderTypeRenderer;
    class FilterOutputStream extends Internal.OutputStream {
        constructor(arg0: Internal.OutputStream_)
        getClass(): typeof any;
        toString(): string;
        "write(byte[])"(arg0: number[]): void;
        notifyAll(): void;
        write(arg0: number[]): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        flush(): void;
        write(arg0: number): void;
        hashCode(): number;
        static nullOutputStream(): Internal.OutputStream;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        write(arg0: number[], arg1: number, arg2: number): void;
        equals(arg0: any): boolean;
        "write(int)"(arg0: number): void;
        get class(): typeof any
    }
    type FilterOutputStream_ = FilterOutputStream;
    class VariableOutput {
        constructor(arg0: Internal.ItemLike_, arg1: Internal.CompoundTag_, arg2: Internal.ItemCountRange_)
        constructor(arg0: Internal.ItemLike_, arg1: Internal.ItemCountRange_)
        constructor(arg0: Internal.ItemLike_, arg1: number, arg2: number)
        constructor(arg0: Internal.ItemStack_, arg1: number)
        constructor(arg0: Internal.ItemStack_)
        constructor(arg0: Internal.ItemLike_, arg1: number, arg2: number)
        constructor(arg0: Internal.ItemLike_)
        constructor(arg0: Internal.ItemStack_, arg1: Internal.ItemCountRange_)
        constructor(arg0: Internal.ItemStack_, arg1: number, arg2: number)
        constructor(arg0: Internal.ItemLike_, arg1: number)
        constructor(arg0: Internal.ItemStack_, arg1: number, arg2: number)
        getClass(): typeof any;
        static deserialize(arg0: com.google.gson.JsonObject_): Internal.VariableOutput;
        toString(): string;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.VariableOutput;
        notifyAll(): void;
        serialize(): com.google.gson.JsonObject;
        getItemStack(arg0: Internal.RandomSource_): Internal.ItemStack;
        toNetwork(arg0: Internal.FriendlyByteBuf_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getCountRange(): Internal.ItemCountRange;
        hashCode(): number;
        getCount(arg0: Internal.RandomSource_): number;
        wait(): void;
        getItem(): Internal.Item;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        get class(): typeof any
        get countRange(): Internal.ItemCountRange
        get item(): Internal.Item
        get itemStack(): Internal.ItemStack
    }
    type VariableOutput_ = VariableOutput;
    interface Vector3dc {
        abstract "mulTransposePosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulAdd(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(int)"(arg0: number): number;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract add(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateX(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract round(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "fma(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract x(): number;
        abstract "fma(org.joml.Vector3fc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulTransposePosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract "add(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract normalize(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract div(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract orthogonalizeUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPositionW(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        abstract "div(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract smoothStep(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulAdd(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranspose(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulPosition(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract half(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract dot(arg0: number, arg1: number, arg2: number): number;
        abstract absolute(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract maxComponent(): number;
        abstract getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        abstract add(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "sub(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract floor(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract rotateY(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract getToAddress(arg0: number): this;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number): number;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract y(): number;
        abstract mulTransposeDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract lengthSquared(): number;
        abstract mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract sub(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulTranspose(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract hermite(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "div(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract negate(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Matrix3x2fc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulPositionW(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        abstract "mulPosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPositionW(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract max(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranspose(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract orthogonalize(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract ceil(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract distanceSquared(arg0: Internal.Vector3dc_): number;
        abstract div(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract dot(arg0: Internal.Vector3dc_): number;
        abstract "mul(org.joml.Matrix3x2dc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract angleSigned(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): number;
        abstract cross(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulPosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract z(): number;
        abstract isFinite(): boolean;
        abstract equals(arg0: Internal.Vector3dc_, arg1: number): boolean;
        abstract mulTransposePosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateZ(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "fma(double,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulDirection(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulAdd(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Matrix3dc,org.joml.Vector3f)"(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract "mulPosition(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract half(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulTransposeDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract "fma(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulAdd(org.joml.Vector3fc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract angleCos(arg0: Internal.Vector3dc_): number;
        abstract get(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract angle(arg0: Internal.Vector3dc_): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract minComponent(): number;
        abstract "mulDirection(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulTranspose(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "add(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulProject(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract normalize(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract div(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract min(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "div(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulPositionW(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        abstract fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "get(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract mulPosition(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract cross(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mulDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Vec3f_): Vec3f;
        abstract "sub(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract distance(arg0: Internal.Vector3dc_): number;
        abstract "fma(org.joml.Vector3dc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract lerp(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotationTo(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract div(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mul(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract "mulTransposeDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        get finite(): boolean
    }
    type Vector3dc_ = Vector3dc;
    class ItemMistletoe extends Internal.AbstractItemMinecolonies {
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
    type ItemMistletoe_ = ItemMistletoe;
    abstract class MinimapWriter {
        constructor(arg0: Internal.IXaeroMinimap_, arg1: Internal.MinimapSession_, arg2: xaero.common.cache.BlockStateShortShapeCache_, arg3: xaero.common.minimap.highlight.HighlighterRegistry_)
        getClass(): typeof any;
        getBlockBrightness(arg0: number, arg1: number, arg2: number, arg3: number): number;
        resetShortBlocks(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLoadedBlocks(): Internal.MinimapChunk[][];
        getFixedSkyLightBlockBrightness(arg0: number, arg1: number, arg2: number): number;
        onRender(): void;
        getLoadingMapChunkX(): number;
        getLoadingMapChunkZ(): number;
        getLoadSide(): number;
        cleanup(): void;
        getLoadedSideInChunks(): number;
        getLoadingSideInChunks(): number;
        toString(): string;
        findBlock(arg0: Internal.Level_, arg1: Internal.LevelChunk_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: Internal.BlockPos$MutableBlockPos_, arg9: Internal.BlockPos$MutableBlockPos_, arg10: number, arg11: boolean, arg12: Internal.List_<number>, arg13: Internal.List_<Internal.BlockState>, arg14: number, arg15: boolean, arg16: Internal.List_<number>, arg17: boolean, arg18: boolean, arg19: Internal.BlockPos$MutableBlockPos_, arg20: boolean): Internal.Block;
        getLoadedCaving(): number;
        notifyAll(): void;
        getUpdateRadiusInChunks(): number;
        getSectionBasedHeight(arg0: Internal.LevelChunk_, arg1: number): number;
        setupDimensionHighlightHandler(arg0: Internal.ResourceKey_<Internal.Level>): void;
        isLoadedNonWorldMap(): boolean;
        hashCode(): number;
        getDimensionHighlightHandler(): Internal.DimensionHighlighterHandler;
        wait(): void;
        getLoadedLevels(): number;
        wait(arg0: number): void;
        loadBlockColor(arg0: number, arg1: Internal.Level_, arg2: number, arg3: number, arg4: Internal.LevelChunk_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Heightmap$Types_, arg11: Internal.MinimapTile_, arg12: Internal.MinimapChunk_, arg13: Internal.MinimapChunk_, arg14: Internal.MinimapChunk_, arg15: Internal.MinimapChunk_, arg16: number, arg17: number, arg18: number, arg19: boolean, arg20: boolean, arg21: number, arg22: number, arg23: number, arg24: boolean, arg25: number, arg26: number, arg27: boolean, arg28: number, arg29: number, arg30: boolean, arg31: Internal.List_<number>, arg32: Internal.List_<Internal.BlockState>, arg33: Internal.List_<number>, arg34: number[], arg35: number[], arg36: number[], arg37: number[], arg38: number[], arg39: number[], arg40: number[], arg41: number[], arg42: number[], arg43: boolean, arg44: number, arg45: Internal.BlockPos$MutableBlockPos_, arg46: Internal.BlockPos$MutableBlockPos_, arg47: number, arg48: number, arg49: Internal.IXaeroMinimap_, arg50: Internal.MinimapWriterHelper_, arg51: number, arg52: boolean, arg53: boolean, arg54: number, arg55: number, arg56: number, arg57: number, arg58: boolean, arg59: boolean, arg60: boolean, arg61: boolean, arg62: Internal.BlockPos$MutableBlockPos_, arg63: boolean): Internal.MinimapTile;
        setClearBlockColours(arg0: boolean): void;
        equals(arg0: any): boolean;
        getLoadedMapChunkZ(): number;
        getMapCoord(arg0: number, arg1: number): number;
        getLoadedMapChunkX(): number;
        get class(): typeof any
        get loadedBlocks(): Internal.MinimapChunk[][]
        get loadingMapChunkX(): number
        get loadingMapChunkZ(): number
        get loadSide(): number
        get loadedSideInChunks(): number
        get loadingSideInChunks(): number
        get loadedCaving(): number
        get updateRadiusInChunks(): number
        set upDimensionHighlightHandler(arg0: Internal.ResourceKey_<Internal.Level>)
        get loadedNonWorldMap(): boolean
        get dimensionHighlightHandler(): Internal.DimensionHighlighterHandler
        get loadedLevels(): number
        set clearBlockColours(arg0: boolean)
        get loadedMapChunkZ(): number
        get loadedMapChunkX(): number
        totalRuns: number;
        static readonly SUN_MINIMUM: (9) & (number);
        loadingLightOverlayMaxLight: number;
        lastDebugTime: number;
        loadingLightOverlayMinLight: number;
        totalTime: number;
        minTimeDebug: number;
        maxTime: number;
        static readonly NO_Y_VALUE: (2147483647) & (number);
        averageTimeDebug: number;
        loadedLightOverlayMaxLight: number;
        loadedLightOverlayColor: number;
        writeFreeSinceLastWrite: number;
        loadedLightOverlayType: number;
        minTime: number;
        loadingLightOverlayColor: number;
        loadedLightOverlayMinLight: number;
        maxTimeDebug: number;
        debugTotalTime: boolean;
        loadingLightOverlayType: number;
    }
    type MinimapWriter_ = MinimapWriter;
    class SkullBombItem extends Internal.Item {
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
    type SkullBombItem_ = SkullBombItem;
    class MobSpawnSettings$Builder implements Internal.MobSpawnSettingsBuilderForgeAccessor, Internal.SpawnSettingsBuilderAccessor {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        creatureGenerationProbability(arg0: number): this;
        puzzleslib$getMobSpawnCosts(): Internal.Map<any, any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addSpawn(arg0: Internal.MobCategory_, arg1: Internal.MobSpawnSettings$SpawnerData_): this;
        hashCode(): number;
        wait(): void;
        getSpawnCosts(): Internal.Map<any, any>;
        wait(arg0: number): void;
        build(): Internal.MobSpawnSettings;
        equals(arg0: any): boolean;
        addMobCharge(arg0: Internal.EntityType_<any>, arg1: number, arg2: number): this;
        get class(): typeof any
        get spawnCosts(): Internal.Map<any, any>
        readonly mobSpawnCosts: Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        creatureGenerationProbability: number;
        readonly spawners: Internal.Map<Internal.MobCategory, Internal.List<Internal.MobSpawnSettings$SpawnerData>>;
    }
    type MobSpawnSettings$Builder_ = MobSpawnSettings$Builder;
    class ExtraScroll extends Internal.ResearchScroll {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Research_, arg2: Internal.Research_)
        constructor(arg0: Internal.Research_, arg1: Internal.Research_)
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
        static scrollProperties(): Internal.Item$Properties;
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
        researchGet(): net.minecraft.network.chat.Component;
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
        static fireResistant(): Internal.Item$Properties;
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
        requirement: Internal.Research;
    }
    type ExtraScroll_ = ExtraScroll;
    class ModBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
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
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
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
        withRarity(arg0: Internal.Rarity_): this;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
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
        withTooltip(arg0: net.minecraft.network.chat.Component_): this;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$f7f358$7(): Internal.UUID;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
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
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$f7f358$8(): Internal.UUID
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
        rarity: Internal.Rarity;
        tooltip: Internal.List<net.minecraft.network.chat.Component>;
    }
    type ModBlockItem_ = ModBlockItem;
    interface IPage {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: Internal.RegistryAccess_, arg2: de.maxanier.guideapi.api.impl.Book_, arg3: Internal.CategoryAbstract_, arg4: Internal.EntryAbstract_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.BaseScreen_, arg10: net.minecraft.client.gui.Font_): void;
        abstract onLeftClicked(arg0: de.maxanier.guideapi.api.impl.Book_, arg1: Internal.CategoryAbstract_, arg2: Internal.EntryAbstract_, arg3: number, arg4: number, arg5: Internal.Player_, arg6: Internal.EntryScreen_): void;
        abstract onRightClicked(arg0: de.maxanier.guideapi.api.impl.Book_, arg1: Internal.CategoryAbstract_, arg2: Internal.EntryAbstract_, arg3: number, arg4: number, arg5: Internal.Player_, arg6: Internal.EntryScreen_): void;
        abstract canSee(arg0: de.maxanier.guideapi.api.impl.Book_, arg1: Internal.CategoryAbstract_, arg2: Internal.EntryAbstract_, arg3: Internal.Player_, arg4: Internal.ItemStack_, arg5: Internal.EntryScreen_): boolean;
        abstract drawExtras(arg0: Internal.GuiGraphics_, arg1: de.maxanier.guideapi.api.impl.Book_, arg2: Internal.CategoryAbstract_, arg3: Internal.EntryAbstract_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.BaseScreen_, arg9: net.minecraft.client.gui.Font_): void;
        onClose(): void;
        abstract onInit(arg0: de.maxanier.guideapi.api.impl.Book_, arg1: Internal.CategoryAbstract_, arg2: Internal.EntryAbstract_, arg3: Internal.Player_, arg4: Internal.ItemStack_, arg5: Internal.EntryScreen_): void;
    }
    type IPage_ = IPage;
    class RecipeComponentBuilderMap extends Internal.AbstractMap<Internal.RecipeKey<any>, any> {
        constructor(holders: Internal.RecipeComponentValue_<any>[])
        constructor(keys: Internal.RecipeKey_<any>[])
        constructor(builder: Internal.RecipeComponentBuilder_)
        containsValue(arg0: any): boolean;
        notify(): void;
        computeIfAbsent(arg0: Internal.RecipeKey_<any>, arg1: Internal.Function_<Internal.RecipeKey<any>, any>): any;
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: any, arg1: any): any;
        getHolder(key: any): Internal.RecipeComponentValue<any>;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        keySet(): Internal.Set<Internal.RecipeKey<any>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replace(arg0: Internal.RecipeKey_<any>, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        wait(): void;
        putAll(arg0: Internal.Map_<Internal.RecipeKey<any>, any>): void;
        remove(arg0: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<Internal.RecipeKey<any>, any>): void;
        getClass(): typeof any;
        computeIfPresent(arg0: Internal.RecipeKey_<any>, arg1: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): any;
        getOrDefault(key: any, defaultValue: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        isEmpty(): boolean;
        entrySet(): Internal.Set<Internal.Map$Entry<Internal.RecipeKey<any>, any>>;
        merge(arg0: Internal.RecipeKey_<any>, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        put(key: Internal.RecipeKey_<any>, value: any): any;
        "put(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(key: Internal.RecipeKey_<any>, value: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        compute(arg0: Internal.RecipeKey_<any>, arg1: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): any;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        replace(arg0: Internal.RecipeKey_<any>, arg1: any, arg2: any): boolean;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        hashCode(): number;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        putIfAbsent(arg0: Internal.RecipeKey_<any>, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        wait(arg0: number): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        equals(o: any): boolean;
        replaceAll(arg0: Internal.BiFunction_<Internal.RecipeKey<any>, any, any>): void;
        get(key: any): any;
        get class(): typeof any
        get empty(): boolean
        static readonly EMPTY: ({}) & (Internal.RecipeComponentBuilderMap);
        readonly holders: Internal.RecipeComponentValue<any>[];
        hasChanged: boolean;
    }
    type RecipeComponentBuilderMap_ = RecipeComponentBuilderMap;
    class ImmutableSet$Builder <E> extends Internal.ImmutableCollection$Builder<E> {
        constructor()
        getClass(): typeof any;
        "add(java.lang.Object)"(arg0: E): this;
        toString(): string;
        notifyAll(): void;
        add(arg0: E): this;
        add(...arg0: E[]): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        build(): Internal.ImmutableCollection<any>;
        "addAll(java.util.Iterator)"(arg0: Internal.Iterator_<any>): Internal.ImmutableCollection$Builder<any>;
        hashCode(): number;
        wait(): void;
        addAll(arg0: Internal.Iterator_<any>): Internal.ImmutableCollection$Builder<any>;
        "addAll(java.lang.Iterable)"(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        addAll(arg0: Internal.Iterable_<any>): Internal.ImmutableCollection$Builder<any>;
        "add(java.lang.Object[])"(...arg0: E[]): this;
        get class(): typeof any
    }
    type ImmutableSet$Builder_<E> = ImmutableSet$Builder<E>;
    class IRaiderManager$RaidSettings extends Internal.Record {
        constructor(forcedSpawn: boolean, raidType: string, allowShips: boolean, raiderAmount: number, location: BlockPos_)
        getClass(): typeof any;
        withExplicitType(arg0: string): this;
        toString(): string;
        raidType(): string;
        allowShips(): boolean;
        notifyAll(): void;
        static defaultRaidSettings(): Internal.IRaiderManager$RaidSettings;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        raiderAmount(): number;
        location(): BlockPos;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        forcedSpawn(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type IRaiderManager$RaidSettings_ = IRaiderManager$RaidSettings;
    interface RegistryCallback <T> {
        abstract accept(arg0: ResourceLocation_, arg1: Internal.Supplier_<T>): void;
        (arg0: ResourceLocation, arg1: Internal.Supplier<T>): void;
    }
    type RegistryCallback_<T> = ((arg0: ResourceLocation, arg1: Internal.Supplier<T>)=> void) | RegistryCallback<T>;
    class HugeFungusFeature extends Internal.Feature<Internal.HugeFungusConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.HugeFungusConfiguration>)
        getClass(): typeof any;
        place(arg0: Internal.HugeFungusConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        static isStone(arg0: Internal.BlockState_): boolean;
        place(arg0: Internal.FeaturePlaceContext_<Internal.HugeFungusConfiguration>): boolean;
        placeHat(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: Internal.HugeFungusConfiguration_, arg3: BlockPos_, arg4: number, arg5: boolean): void;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.HugeFungusConfiguration, Internal.Feature<Internal.HugeFungusConfiguration>>>;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        handler$hpm000$piglinproliferation$place(arg0: Internal.FeaturePlaceContext_<any>, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        placeStem(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: Internal.HugeFungusConfiguration_, arg3: BlockPos_, arg4: number, arg5: boolean): void;
        get class(): typeof any
    }
    type HugeFungusFeature_ = HugeFungusFeature;
    class UpgradeRenderDataType <T extends Internal.IUpgradeRenderData> {
        constructor(arg0: string, arg1: T, arg2: Internal.Function_<Internal.CompoundTag, T>)
        getClass(): typeof any;
        deserialize(arg0: Internal.CompoundTag_): T;
        hashCode(): number;
        toString(): string;
        cast(arg0: Internal.IUpgradeRenderData_): Internal.Optional<T>;
        wait(): void;
        getName(): string;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get name(): string
    }
    type UpgradeRenderDataType_<T extends Internal.IUpgradeRenderData> = UpgradeRenderDataType<T>;
    class TileEntityCardboardBox extends Internal.TileEntityUpdateable {
        constructor(pos: BlockPos_, state: Internal.BlockState_)
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        requestModelDataUpdate(): void;
        etf$getType(): Internal.EntityType<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        etf$isBlockEntity(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(nbt: Internal.CompoundTag_): void;
        etf$getOptifineVehicleId(): number;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getReducedUpdateTag(): Internal.CompoundTag;
        modifyReturnValue$cmi000$scholar$onGetUpdateTag(original: Internal.CompoundTag_): Internal.CompoundTag;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        etf$canBeBright(): boolean;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        etf$getOptifineId(): number;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getRenderBoundingBox(): Internal.AABB;
        markDirtyComparator(): void;
        getClass(): typeof any;
        sendUpdatePacket(): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        etf$distanceTo(entity: Internal.Entity_): number;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        onComparatorAdded(arg0: Internal.Direction_, arg1: number): void;
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
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(tag: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(world: Internal.Level_): void;
        notify(): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        etf$getBlockPos(): BlockPos;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        etf$getBlockY(): number;
        markForSave(): void;
        etf$getHandItems(): Internal.Iterable<any>;
        getTilePos(): BlockPos;
        etf$getArmorItems(): Internal.Iterable<any>;
        invalidateCaps(): void;
        getTileCoord(): Internal.Coord4D;
        getBlockState(): Internal.BlockState;
        modifyReturnValue$cmi000$scholar$onGetUpdatePacket(original: Internal.Packet_<any>): Internal.Packet<any>;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        handler$jag000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        etf$hasCustomName(): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        wait(): void;
        sendUpdatePacket(tracking: Internal.BlockEntity_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(nbtTags: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        isRemote(): boolean;
        serializeNBT(): Internal.Tag;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        onDataPacket(net: Internal.Connection_, pkt: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        etf$getUuid(): Internal.UUID;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        hashCode(): number;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        blockRemoved(): void;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
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
        get level(): Internal.Level
        get remote(): boolean
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        storedData: Internal.BlockCardboardBox$BlockData;
    }
    type TileEntityCardboardBox_ = TileEntityCardboardBox;
    interface IColonyRaidEvent extends Internal.IColonyEntitySpawnEvent {
        isRaidActive(): boolean;
        registerEntity(arg0: Internal.Entity_): void;
        abstract getStatus(): Internal.EventStatus;
        abstract setSpawnPoint(arg0: BlockPos_): void;
        onFinish(): void;
        getEntities(): Internal.List<Internal.Entity>;
        abstract setColony(arg0: Internal.IColony_): void;
        abstract serializeNBT(): Internal.CompoundTag;
        abstract setStatus(arg0: Internal.EventStatus_): void;
        abstract deserializeNBT(arg0: Internal.CompoundTag_): void;
        abstract getWayPoints(): Internal.List<BlockPos>;
        abstract getBossRaiderType(): Internal.EntityType<any>;
        unregisterEntity(arg0: Internal.Entity_): void;
        abstract getEventTypeID(): ResourceLocation;
        abstract getNormalRaiderType(): Internal.EntityType<any>;
        abstract addSpawner(arg0: BlockPos_): void;
        onNightFall(): void;
        abstract getSpawnPos(): BlockPos;
        abstract getArcherRaiderType(): Internal.EntityType<any>;
        onEntityDeath(arg0: Internal.LivingEntity_): void;
        onTileEntityBreak(arg0: Internal.BlockEntity_): void;
        onStart(): void;
        onUpdate(): void;
        abstract getID(): number;
        get raidActive(): boolean
        get status(): Internal.EventStatus
        set spawnPoint(arg0: BlockPos_)
        get entities(): Internal.List<Internal.Entity>
        set colony(arg0: Internal.IColony_)
        set status(arg0: Internal.EventStatus_)
        get wayPoints(): Internal.List<BlockPos>
        get bossRaiderType(): Internal.EntityType<any>
        get eventTypeID(): ResourceLocation
        get normalRaiderType(): Internal.EntityType<any>
        get spawnPos(): BlockPos
        get archerRaiderType(): Internal.EntityType<any>
        get ID(): number
    }
    type IColonyRaidEvent_ = IColonyRaidEvent;
    class ChorusPlantFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type ChorusPlantFeature_ = ChorusPlantFeature;
    interface JsonPath {
        abstract getArray(arg0: number): this;
        abstract toString(): string;
        abstract getParent(): Internal.Optional<Internal.JsonPath>;
        abstract getObject(arg0: string): this;
        abstract createProblem(arg0: string): Internal.Problem;
        create(name: string): this;
        get parent(): Internal.Optional<Internal.JsonPath>
    }
    type JsonPath_ = JsonPath;
    class PageAttributes$MediaType extends Internal.AttributeValue {
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
        static readonly ENV_INVITE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C0_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly STATEMENT: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_10X15_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_12: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_DESIGNATED_LONG: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_LEGAL: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_9X11_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C7_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_NUMBER_11_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ITALY: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly INVITE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly INVITE_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_9X12_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_PERSONAL: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly E: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C8_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_6X9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly PERSONAL_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C1_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly TABLOID: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_NUMBER_10_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C9_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_NUMBER_9_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_14: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly D: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_10X13_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_9X12: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly MONARCH_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C10_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly QUARTO: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_DESIGNATED_LONG_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_NUMBER_12_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C6_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly FOLIO: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ITALY_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_9X11: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_MONARCH: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_10X13: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly INVOICE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_7X9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly LEGAL: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C3_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_LETTER: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_2A0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B5_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_NUMBER_14_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_10X14: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NOTE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C4_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A5: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly EXECUTIVE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_7X9_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_10X15: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_6X9_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C2_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_10: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C4: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B4_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C5_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly LETTER: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly LEDGER: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_4A0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly PERSONAL: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_11: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B1: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_C3: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly NA_10X14_ENVELOPE: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ENV_ITALY: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly MONARCH: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_A7: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly ISO_B9: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly JIS_B8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly A6: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B8: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly C2: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
        static readonly B0: (Internal.PageAttributes$MediaType) & (Internal.PageAttributes$MediaType);
    }
    type PageAttributes$MediaType_ = PageAttributes$MediaType;
    abstract class WaypointSet {
        getClass(): typeof any;
        addAll(arg0: Internal.Collection_<Internal.Waypoint>, arg1: boolean): void;
        addTo(arg0: Internal.List_<Internal.Waypoint>): void;
        getWaypoints(): Internal.Iterable<Internal.Waypoint>;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        remove(arg0: number): Internal.Waypoint;
        getName(): string;
        get(arg0: number): Internal.Waypoint;
        removeAll(arg0: Internal.Collection_<Internal.Waypoint>): void;
        toString(): string;
        add(arg0: Internal.Waypoint_): void;
        "remove(int)"(arg0: number): Internal.Waypoint;
        notifyAll(): void;
        add(arg0: Internal.Waypoint_, arg1: boolean): void;
        remove(arg0: Internal.Waypoint_): void;
        set(arg0: number, arg1: Internal.Waypoint_): Internal.Waypoint;
        size(): number;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        "remove(xaero.common.minimap.waypoints.Waypoint)"(arg0: Internal.Waypoint_): void;
        addAll(arg0: Internal.Collection_<Internal.Waypoint>): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get waypoints(): Internal.Iterable<Internal.Waypoint>
        get empty(): boolean
        get name(): string
    }
    type WaypointSet_ = WaypointSet;
    class DripstoneClusterFeature extends Internal.Feature<Internal.DripstoneClusterConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.DripstoneClusterConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
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
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        place(arg0: Internal.FeaturePlaceContext_<Internal.DripstoneClusterConfiguration>): boolean;
        place(arg0: Internal.DripstoneClusterConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.DripstoneClusterConfiguration, Internal.Feature<Internal.DripstoneClusterConfiguration>>>;
        get class(): typeof any
    }
    type DripstoneClusterFeature_ = DripstoneClusterFeature;
    interface IVillagerTransformable extends Internal.WerewolfTransformable {
        getSkinType(): number;
        abstract getForm(): Internal.WerewolfForm;
        getEyeType(): number;
        hasGlowingEyes(): boolean;
        abstract getEntityClass(): Internal.EntityClassType;
        abstract setWerewolfFaction(arg0: boolean): void;
        transformToWerewolf(arg0: de.teamlapen.werewolves.api.entities.werewolf.TransformType_): Internal.WerewolfTransformable;
        abstract getEntityTier(): Internal.EntityActionTier;
        abstract getSkinType(arg0: Internal.WerewolfForm_): number;
        abstract canTransform(): boolean;
        abstract _transformToWerewolf(): Internal.WerewolfTransformable;
        abstract _transformBack(): Internal.WerewolfTransformable;
        transformBack(): Internal.WerewolfTransformable;
        "copyData(net.minecraft.world.entity.Mob,net.minecraft.world.entity.Mob)"<T extends Internal.Mob>(arg0: T, arg1: Internal.Mob_): T;
        start(arg0: de.teamlapen.werewolves.api.entities.werewolf.TransformType_): void;
        reset(): void;
        abstract getEyeType(arg0: Internal.WerewolfForm_): number;
        abstract hasGlowingEyes(arg0: Internal.WerewolfForm_): boolean;
        "copyData(net.minecraft.world.entity.EntityType,net.minecraft.world.entity.Mob)"<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: Internal.Mob_): T;
        copyData<T extends Internal.Mob>(arg0: T, arg1: Internal.Mob_): T;
        copyData<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: Internal.Mob_): T;
        get skinType(): number
        get form(): Internal.WerewolfForm
        get eyeType(): number
        get entityClass(): Internal.EntityClassType
        set werewolfFaction(arg0: boolean)
        get entityTier(): Internal.EntityActionTier
    }
    type IVillagerTransformable_ = IVillagerTransformable;
    interface Vector3fc {
        abstract "get(org.joml.Vector3d)"(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract add(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Vec3f_): Vec3f;
        abstract "mul(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract angleCos(arg0: Internal.Vector3fc_): number;
        abstract normalize(arg0: number, arg1: Vec3f_): Vec3f;
        abstract sub(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract z(): number;
        abstract "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulPositionW(arg0: Internal.Matrix4fc_, arg1: Vec3f_): number;
        abstract "fma(org.joml.Vector3fc,org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract "mulAdd(org.joml.Vector3fc,org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract orthogonalizeUnit(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract lengthSquared(): number;
        abstract get(arg0: number): number;
        abstract "mulAdd(float,org.joml.Vector3fc,org.joml.Vector3f)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract mulTranspose(arg0: Internal.Matrix3fc_, arg1: Vec3f_): Vec3f;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vec3f_): Vec3f;
        abstract ceil(arg0: Vec3f_): Vec3f;
        abstract "mulPosition(org.joml.Matrix4x3fc,org.joml.Vector3f)"(arg0: Internal.Matrix4x3fc_, arg1: Vec3f_): Vec3f;
        abstract maxComponent(): number;
        abstract "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract div(arg0: number, arg1: Vec3f_): Vec3f;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract dot(arg0: number, arg1: number, arg2: number): number;
        abstract "div(float,org.joml.Vector3f)"(arg0: number, arg1: Vec3f_): Vec3f;
        abstract mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract distanceSquared(arg0: Internal.Vector3fc_): number;
        abstract equals(arg0: Internal.Vector3fc_, arg1: number): boolean;
        abstract div(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract lerp(arg0: Internal.Vector3fc_, arg1: number, arg2: Vec3f_): Vec3f;
        abstract max(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract length(): number;
        abstract mulPosition(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaternionf_): Quaternionf;
        abstract "mul(org.joml.Matrix3x2fc,org.joml.Vector3f)"(arg0: Internal.Matrix3x2fc_, arg1: Vec3f_): Vec3f;
        abstract mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Vec3f_): Vec3f;
        abstract "mulPosition(org.joml.Matrix4fc,org.joml.Vector3f)"(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "mulDirection(org.joml.Matrix4fc,org.joml.Vector3f)"(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract rotateZ(arg0: number, arg1: Vec3f_): Vec3f;
        abstract orthogonalize(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract cross(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract angleSigned(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): number;
        abstract absolute(arg0: Vec3f_): Vec3f;
        abstract "mul(float,org.joml.Vector3f)"(arg0: number, arg1: Vec3f_): Vec3f;
        abstract cross(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract half(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract normalize(arg0: Vec3f_): Vec3f;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: number, arg2: Vec3f_): Vec3f;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract floor(arg0: Vec3f_): Vec3f;
        abstract isFinite(): boolean;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Vec3f_): Vec3f;
        abstract getToAddress(arg0: number): this;
        abstract "mulDirection(org.joml.Matrix4dc,org.joml.Vector3f)"(arg0: Internal.Matrix4dc_, arg1: Vec3f_): Vec3f;
        abstract "mul(org.joml.Matrix3dc,org.joml.Vector3f)"(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        abstract half(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract "mulDirection(org.joml.Matrix4x3fc,org.joml.Vector3f)"(arg0: Internal.Matrix4x3fc_, arg1: Vec3f_): Vec3f;
        abstract smoothStep(arg0: Internal.Vector3fc_, arg1: number, arg2: Vec3f_): Vec3f;
        abstract x(): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract mul(arg0: number, arg1: Vec3f_): Vec3f;
        abstract negate(arg0: Vec3f_): Vec3f;
        abstract hermite(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: number, arg4: Vec3f_): Vec3f;
        abstract mulDirection(arg0: Internal.Matrix4dc_, arg1: Vec3f_): Vec3f;
        abstract mulAdd(arg0: number, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract get(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateY(arg0: number, arg1: Vec3f_): Vec3f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(int)"(arg0: number): number;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract minComponent(): number;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Vec3f_): Vec3f;
        abstract dot(arg0: Internal.Vector3fc_): number;
        abstract div(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract min(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract round(arg0: Vec3f_): Vec3f;
        abstract "div(org.joml.Vector3fc,org.joml.Vector3f)"(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mul(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Vec3f_): Vec3f;
        abstract rotationTo(arg0: Internal.Vector3fc_, arg1: Quaternionf_): Quaternionf;
        abstract angle(arg0: Internal.Vector3fc_): number;
        abstract mul(arg0: Internal.Vector3fc_, arg1: Vec3f_): Vec3f;
        abstract mulProject(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Vec3f_): Vec3f;
        abstract y(): number;
        abstract "fma(float,org.joml.Vector3fc,org.joml.Vector3f)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract "get(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        abstract fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract distance(arg0: Internal.Vector3fc_): number;
        abstract mulDirection(arg0: Internal.Matrix4fc_, arg1: Vec3f_): Vec3f;
        abstract "mul(org.joml.Matrix3fc,org.joml.Vector3f)"(arg0: Internal.Matrix3fc_, arg1: Vec3f_): Vec3f;
        abstract fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vec3f_): Vec3f;
        abstract get(arg0: Vec3f_): Vec3f;
        abstract rotateX(arg0: number, arg1: Vec3f_): Vec3f;
        get finite(): boolean
    }
    type Vector3fc_ = Vector3fc;
    class MobEffectEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffectInstance_)
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
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getEffectInstance(): Internal.MobEffectInstance;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get effectInstance(): Internal.MobEffectInstance
    }
    type MobEffectEvent_ = MobEffectEvent;
    class PowderSnowBlock extends Internal.Block implements Internal.BucketPickup {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$ifb000$relics$boilSnow(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: Internal.CallbackInfo_): void;
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        static canEntityWalkOnPowderSnow(arg0: Internal.Entity_): boolean;
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
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
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
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
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
        /**
         * @deprecated
        */
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
    }
    type PowderSnowBlock_ = PowderSnowBlock;
    class WetSpongeBlock extends Internal.Block {
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
        /**
         * @deprecated
        */
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
    }
    type WetSpongeBlock_ = WetSpongeBlock;
    class CountConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.IntProvider_)
        constructor(arg0: number)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        count(): Internal.IntProvider;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.CountConfiguration>;
    }
    type CountConfiguration_ = CountConfiguration;
    class WeightedEntry$IntrusiveBase implements Internal.WeightedEntry {
        constructor(arg0: number)
        constructor(arg0: Internal.Weight_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getWeight(): Internal.Weight;
        notifyAll(): void;
        static wrap<T>(arg0: T, arg1: number): Internal.WeightedEntry$Wrapper<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get weight(): Internal.Weight
        readonly weight: Internal.Weight;
    }
    type WeightedEntry$IntrusiveBase_ = WeightedEntry$IntrusiveBase;
    interface BiomeModifications$BiomeContext {
        abstract getProperties(): Internal.BiomeProperties;
        abstract hasTag(arg0: Internal.TagKey_<Internal.Biome>): boolean;
        abstract getKey(): Internal.Optional<ResourceLocation>;
        get properties(): Internal.BiomeProperties
        get key(): Internal.Optional<ResourceLocation>
    }
    type BiomeModifications$BiomeContext_ = BiomeModifications$BiomeContext;
    class FireworkStarFadeRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type FireworkStarFadeRecipe_ = FireworkStarFadeRecipe;
    class DebugQueryHandler {
        constructor(arg0: Internal.ClientPacketListener_)
        getClass(): typeof any;
        queryBlockEntityTag(arg0: BlockPos_, arg1: Internal.Consumer_<Internal.CompoundTag>): void;
        hashCode(): number;
        queryEntityTag(arg0: number, arg1: Internal.Consumer_<Internal.CompoundTag>): void;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        handleResponse(arg0: number, arg1: Internal.CompoundTag_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type DebugQueryHandler_ = DebugQueryHandler;
    interface IModLanguageProvider$IModLanguageLoader {
        abstract loadMod<T>(arg0: Internal.IModInfo_, arg1: Internal.ModFileScanData_, arg2: Internal.ModuleLayer_): T;
        (arg0: Internal.IModInfo, arg1: Internal.ModFileScanData, arg2: Internal.ModuleLayer): T;
    }
    type IModLanguageProvider$IModLanguageLoader_ = IModLanguageProvider$IModLanguageLoader | ((arg0: Internal.IModInfo, arg1: Internal.ModFileScanData, arg2: Internal.ModuleLayer)=> T);
    class PointedDripstoneConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        hashCode(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly chanceOfTallerDripstone: number;
        static readonly CODEC: Internal.Codec<Internal.PointedDripstoneConfiguration>;
        readonly chanceOfSpreadRadius2: number;
        readonly chanceOfSpreadRadius3: number;
        readonly chanceOfDirectionalSpread: number;
    }
    type PointedDripstoneConfiguration_ = PointedDripstoneConfiguration;
    interface ICraftingSubmitResult {
        abstract errorDetail(): any;
        abstract errorCode(): Internal.CraftingSubmitErrorCode;
        abstract link(): Internal.ICraftingLink;
        successful(): boolean;
    }
    type ICraftingSubmitResult_ = ICraftingSubmitResult;
    class PlayerXpEvent$PickupXp extends Internal.PlayerXpEvent {
        constructor(arg0: Internal.Player_, arg1: Internal.ExperienceOrb_)
        constructor()
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
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getOrb(): Internal.ExperienceOrb;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get orb(): Internal.ExperienceOrb
    }
    type PlayerXpEvent$PickupXp_ = PlayerXpEvent$PickupXp;
    interface NeighborUpdater {
        abstract shapeUpdate(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        abstract neighborChanged(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Block_, arg3: BlockPos_, arg4: boolean): void;
        executeUpdate(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        abstract neighborChanged(arg0: BlockPos_, arg1: Internal.Block_, arg2: BlockPos_): void;
        executeShapeUpdate(arg0: Internal.LevelAccessor_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: BlockPos_, arg5: number, arg6: number): void;
        updateNeighborsAtExceptFromFacing(arg0: BlockPos_, arg1: Internal.Block_, arg2: Internal.Direction_): void;
        readonly UPDATE_ORDER: Internal.Direction[];
    }
    type NeighborUpdater_ = NeighborUpdater;
    interface IStorageBlock extends net.minecraft.world.Container, Internal.MenuProvider {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        abstract "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        "isEmpty()"(): boolean;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,int)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getItem(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        abstract getDisplayName(): net.minecraft.network.chat.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        abstract getInventory(): Internal.NonNullList<Internal.ItemStack>;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        shouldCloseCurrentScreen(): boolean;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,double)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get displayName(): net.minecraft.network.chat.Component
        get empty(): boolean
        get inventory(): Internal.NonNullList<Internal.ItemStack>
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type IStorageBlock_ = IStorageBlock;
    interface SensitiveFilmItem extends Internal.FilmItem {
        getFrameSize(stack: Internal.ItemStack_): number;
        hasFrameAt(stack: Internal.ItemStack_, index: number): boolean;
        getDitherMode(stack: Internal.ItemStack_): Internal.DitherMode;
        getMaxFrameCount(stack: Internal.ItemStack_): number;
        getFilmStyle(stack: Internal.ItemStack_): Internal.FilmStyle;
        abstract getType(): Internal.ExposureType;
        getStoredFrames(stack: Internal.ItemStack_): Internal.List<io.github.mortuusars.exposure.world.camera.frame.Frame>;
        getDefaultMaxFrameCount(stack: Internal.ItemStack_): number;
        isFull(stack: Internal.ItemStack_): boolean;
        getColorPalette(stack: Internal.ItemStack_): Internal.ResourceKey<Internal.ColorPalette>;
        getStoredFramesCount(stack: Internal.ItemStack_): number;
        getDefaultFrameSize(stack: Internal.ItemStack_): number;
        getFilmProperties(stack: Internal.ItemStack_): Internal.FilmProperties;
        hasFrames(stack: Internal.ItemStack_): boolean;
        getFullness(stack: Internal.ItemStack_): number;
        addFrameSizeToTooltip(stack: Internal.ItemStack_, list: Internal.List_<net.minecraft.network.chat.Component>): void;
        addStyleToTooltip(stack: Internal.ItemStack_, list: Internal.List_<net.minecraft.network.chat.Component>): void;
        addPaletteToTooltip(stack: Internal.ItemStack_, list: Internal.List_<net.minecraft.network.chat.Component>): void;
        get type(): Internal.ExposureType
        (): Internal.ExposureType_;
    }
    type SensitiveFilmItem_ = SensitiveFilmItem | (()=> Internal.ExposureType_);
    class TransmutingElixirItem extends Internal.Item {
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
    type TransmutingElixirItem_ = TransmutingElixirItem;
    class ThornChakramItem extends Internal.Item {
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
    type ThornChakramItem_ = ThornChakramItem;
    class PathComputationType extends Internal.Enum<Internal.PathComputationType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        compareTo(arg0: Internal.PathComputationType_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getDeclaringClass(): typeof Internal.PathComputationType;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static values(): Internal.PathComputationType[];
        wait(arg0: number): void;
        "compareTo(net.minecraft.world.level.pathfinder.PathComputationType)"(arg0: Internal.PathComputationType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.PathComputationType;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PathComputationType>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.PathComputationType
        static readonly AIR: (Internal.PathComputationType) & (Internal.PathComputationType);
        static readonly LAND: (Internal.PathComputationType) & (Internal.PathComputationType);
        static readonly WATER: (Internal.PathComputationType) & (Internal.PathComputationType);
    }
    type PathComputationType_ = "land" | PathComputationType | "air" | "water";
    class CaptureParameters$Builder {
        constructor(params: Internal.CaptureParameters_)
        constructor(exposureId: string)
        getClass(): typeof any;
        setProjection(projection: Internal.Optional_<Internal.Projection>): this;
        toString(): string;
        extraData(extraDataUpdater: Internal.Consumer_<Internal.ExtraData>): this;
        notifyAll(): void;
        setCropFactor(cropFactor: number): this;
        "setChromaticChannel(io.github.mortuusars.exposure.world.camera.ColorChannel)"(chromaticChannel: Internal.ColorChannel_): this;
        setCameraHolder(holder: Internal.CameraHolder_): this;
        setFilter(filter: ResourceLocation_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        extraData<T>(type: Internal.NbtType_<T>, value: T): this;
        "setChromaticChannel(java.util.Optional)"(chromaticChannel: Internal.Optional_<Internal.ColorChannel>): this;
        setProjectionInfo(projection: Internal.Projection_): this;
        setFilmProperties(filmProperties: Internal.FilmProperties_): this;
        setChromaticChannel(chromaticChannel: Internal.ColorChannel_): this;
        hashCode(): number;
        setChromaticChannel(chromaticChannel: Internal.Optional_<Internal.ColorChannel>): this;
        setFov(fov: number): this;
        wait(): void;
        wait(arg0: number): void;
        build(): Internal.CaptureParameters;
        equals(arg0: any): boolean;
        setCameraID(cameraId: Internal.CameraId_): this;
        get class(): typeof any
        set projection(projection: Internal.Optional_<Internal.Projection>)
        set cropFactor(cropFactor: number)
        set "chromaticChannel(io.github.mortuusars.exposure.world.camera.ColorChannel)"(chromaticChannel: Internal.ColorChannel_)
        set cameraHolder(holder: Internal.CameraHolder_)
        set filter(filter: ResourceLocation_)
        set "chromaticChannel(java.util.Optional)"(chromaticChannel: Internal.Optional_<Internal.ColorChannel>)
        set projectionInfo(projection: Internal.Projection_)
        set filmProperties(filmProperties: Internal.FilmProperties_)
        set chromaticChannel(chromaticChannel: Internal.ColorChannel_)
        set chromaticChannel(chromaticChannel: Internal.Optional_<Internal.ColorChannel>)
        set fov(fov: number)
        set cameraID(cameraId: Internal.CameraId_)
    }
    type CaptureParameters$Builder_ = CaptureParameters$Builder;
    abstract class CombinerRecipe extends Internal.MekanismRecipe implements Internal.BiPredicate<Internal.ItemStack, Internal.ItemStack> {
        constructor(arg0: ResourceLocation_, arg1: Internal.ItemStackIngredient_, arg2: Internal.ItemStackIngredient_, arg3: Internal.ItemStack_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        or(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.ItemStack>): Internal.BiPredicate<Internal.ItemStack, Internal.ItemStack>;
        notify(): void;
        getId(): ResourceLocation;
        isSpecial(): boolean;
        write(arg0: Internal.FriendlyByteBuf_): void;
        negate(): Internal.BiPredicate<Internal.ItemStack, Internal.ItemStack>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        "assemble(mekanism.api.inventory.IgnoredIInventory,net.minecraft.core.RegistryAccess)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getType(): ResourceLocation;
        getOutput(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): Internal.ItemStack;
        wait(): void;
        isIncomplete(): boolean;
        test(arg0: any, arg1: any): boolean;
        getExtraInput(): Internal.ItemStackIngredient;
        getClass(): typeof any;
        getMainInput(): Internal.ItemStackIngredient;
        getSchema(): Internal.RecipeSchema;
        "test(net.minecraft.world.item.ItemStack,net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        abstract getSerializer(): Internal.RecipeSerializer<any>;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        logMissingTags(): void;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        and(arg0: Internal.BiPredicate_<Internal.ItemStack, Internal.ItemStack>): Internal.BiPredicate<Internal.ItemStack, Internal.ItemStack>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        test(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getOutputDefinition(): Internal.List<Internal.ItemStack>;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        assemble(arg0: Internal.IgnoredIInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getRemainingItems(arg0: Internal.IgnoredIInventory_): Internal.NonNullList<Internal.ItemStack>;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        equals(arg0: any): boolean;
        "matches(mekanism.api.inventory.IgnoredIInventory,net.minecraft.world.level.Level)"(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        matches(arg0: Internal.IgnoredIInventory_, arg1: Internal.Level_): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get id(): ResourceLocation
        get special(): boolean
        get type(): ResourceLocation
        get incomplete(): boolean
        get extraInput(): Internal.ItemStackIngredient
        get class(): typeof any
        get mainInput(): Internal.ItemStackIngredient
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get outputDefinition(): Internal.List<Internal.ItemStack>
        set group(group: string)
        get orCreateId(): ResourceLocation
    }
    type CombinerRecipe_ = CombinerRecipe;
    class AbstractIllager$IllagerArmPose extends Internal.Enum<Internal.AbstractIllager$IllagerArmPose> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        compareTo(arg0: Internal.AbstractIllager$IllagerArmPose_): number;
        toString(): string;
        static valueOf(arg0: string): Internal.AbstractIllager$IllagerArmPose;
        notifyAll(): void;
        "compareTo(net.minecraft.world.entity.monster.AbstractIllager$IllagerArmPose)"(arg0: Internal.AbstractIllager$IllagerArmPose_): number;
        static values(): Internal.AbstractIllager$IllagerArmPose[];
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AbstractIllager$IllagerArmPose>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.AbstractIllager$IllagerArmPose;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.AbstractIllager$IllagerArmPose
        static readonly BOW_AND_ARROW: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly CROSSBOW_CHARGE: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly CROSSED: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly CELEBRATING: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly NEUTRAL: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly SPELLCASTING: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly CROSSBOW_HOLD: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
        static readonly ATTACKING: (Internal.AbstractIllager$IllagerArmPose) & (Internal.AbstractIllager$IllagerArmPose);
    }
    type AbstractIllager$IllagerArmPose_ = "crossed" | "neutral" | "celebrating" | "spellcasting" | "attacking" | "crossbow_hold" | "bow_and_arrow" | "crossbow_charge" | AbstractIllager$IllagerArmPose;
    abstract class MultithreadEventExecutorGroup extends Internal.AbstractEventExecutorGroup {
        scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        getClass(): typeof any;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        submit(arg0: Internal.Runnable_, arg1: any): Internal.Future<any>;
        schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        next(): Internal.EventExecutor;
        "schedule(java.util.concurrent.Callable,long,java.util.concurrent.TimeUnit)"<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        submit(arg0: Internal.Runnable_): Internal.Future<any>;
        isTerminated(): boolean;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.Future<any>;
        isShutdown(): boolean;
        scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        toString(): string;
        "submit(java.util.concurrent.Callable)"(arg0: Internal.Callable_<any>): Internal.Future<any>;
        /**
         * @deprecated
        */
        shutdownNow(): Internal.List<Internal.Runnable>;
        notifyAll(): void;
        "schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): Internal.ScheduledFuture<any>;
        invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        /**
         * @deprecated
        */
        shutdown(): void;
        terminationFuture(): io.netty.util.concurrent.Future<any>;
        awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        iterator(): Internal.Iterator<Internal.EventExecutor>;
        hashCode(): number;
        submit(arg0: Internal.Callable_<any>): Internal.Future<any>;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        executorCount(): number;
        wait(): void;
        invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        wait(arg0: number): void;
        execute(arg0: Internal.Runnable_): void;
        equals(arg0: any): boolean;
        isShuttingDown(): boolean;
        get class(): typeof any
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type MultithreadEventExecutorGroup_ = MultithreadEventExecutorGroup;
    interface IJeiRuntime {
        abstract getEditModeConfig(): Internal.IEditModeConfig;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIngredientVisibility(): Internal.IIngredientVisibility;
        abstract getJeiHelpers(): Internal.IJeiHelpers;
        abstract getKeyMappings(): Internal.IJeiKeyMappings;
        abstract getIngredientManager(): Internal.IIngredientManager;
        abstract getRecipesGui(): Internal.IRecipesGui;
        abstract getConfigManager(): Internal.IJeiConfigManager;
        abstract getIngredientListOverlay(): Internal.IIngredientListOverlay;
        abstract getIngredientFilter(): Internal.IIngredientFilter;
        abstract getRecipeTransferManager(): Internal.IRecipeTransferManager;
        abstract getBookmarkOverlay(): Internal.IBookmarkOverlay;
        abstract getScreenHelper(): Internal.IScreenHelper;
        abstract getRecipeManager(): Internal.IRecipeManager;
        get editModeConfig(): Internal.IEditModeConfig
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get ingredientVisibility(): Internal.IIngredientVisibility
        get jeiHelpers(): Internal.IJeiHelpers
        get keyMappings(): Internal.IJeiKeyMappings
        get ingredientManager(): Internal.IIngredientManager
        get recipesGui(): Internal.IRecipesGui
        get configManager(): Internal.IJeiConfigManager
        get ingredientListOverlay(): Internal.IIngredientListOverlay
        get ingredientFilter(): Internal.IIngredientFilter
        get recipeTransferManager(): Internal.IRecipeTransferManager
        get bookmarkOverlay(): Internal.IBookmarkOverlay
        get screenHelper(): Internal.IScreenHelper
        get recipeManager(): Internal.IRecipeManager
    }
    type IJeiRuntime_ = IJeiRuntime;
    class StarbuncleShard extends Internal.ModItem {
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
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
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
        withTooltip(arg0: string): Internal.ModItem;
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
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
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
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
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
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
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
    type StarbuncleShard_ = StarbuncleShard;
    interface Vector3ic {
        abstract "div(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract maxComponent(): number;
        abstract z(): number;
        abstract "mul(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract y(): number;
        abstract x(): number;
        abstract min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract negate(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract "div(float,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: Internal.Vector3ic_): number;
        abstract get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract absolute(arg0: Internal.Vector3i_): Internal.Vector3i;
        abstract max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distance(arg0: number, arg1: number, arg2: number): number;
        abstract div(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number): number;
        abstract gridDistance(arg0: Internal.Vector3ic_): number;
        abstract sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        abstract "mul(org.joml.Vector3ic,org.joml.Vector3i)"(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): Internal.Vector3i;
        abstract "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        abstract getToAddress(arg0: number): this;
        abstract "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract lengthSquared(): number;
        abstract equals(arg0: number, arg1: number, arg2: number): boolean;
        abstract distance(arg0: Internal.Vector3ic_): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number): number;
        abstract gridDistance(arg0: number, arg1: number, arg2: number): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): Internal.Vector3i;
        abstract "get(int)"(arg0: number): number;
        abstract minComponent(): number;
    }
    type Vector3ic_ = Vector3ic;
    interface ArmorMaterial {
        abstract getDefenseForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getDurabilityForType(arg0: Internal.ArmorItem$Type_): number;
        abstract getRepairIngredient(): Internal.Ingredient;
        abstract getEnchantmentValue(): number;
        abstract getName(): string;
        abstract getToughness(): number;
        abstract getKnockbackResistance(): number;
        abstract getEquipSound(): Internal.SoundEvent;
        get repairIngredient(): Internal.Ingredient
        get enchantmentValue(): number
        get name(): string
        get toughness(): number
        get knockbackResistance(): number
        get equipSound(): Internal.SoundEvent
    }
    type ArmorMaterial_ = string | ArmorMaterial;
    interface IHasTileEntity <TILE extends Internal.BlockEntity> extends Internal.EntityBlock {
        createDummyBlockEntity(): TILE;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, blockEntityType: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        createDummyBlockEntity(state: Internal.BlockState_): TILE;
        triggerBlockEntityEvent(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, id: number, param: number): boolean;
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): TILE;
        abstract getTileType(): Internal.TileEntityTypeRegistryObject<TILE>;
        get tileType(): Internal.TileEntityTypeRegistryObject<TILE>
        (): Internal.TileEntityTypeRegistryObject_<TILE>;
    }
    type IHasTileEntity_<TILE extends Internal.BlockEntity> = IHasTileEntity<TILE> | (()=> Internal.TileEntityTypeRegistryObject_<TILE>);
    interface IGuiItem {
        abstract getContainerType(): Internal.ContainerTypeRegistryObject<any>;
        get containerType(): Internal.ContainerTypeRegistryObject<any>
        (): Internal.ContainerTypeRegistryObject_<any>;
    }
    type IGuiItem_ = IGuiItem | (()=> Internal.ContainerTypeRegistryObject_<any>);
    class RecastInstance implements Internal.ISerializable, Internal.INBTSerializable<Internal.CompoundTag> {
        constructor()
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: Internal.CastSource_, arg5: Internal.ICastDataSerializable_)
        getCastSource(): Internal.CastSource;
        getClass(): typeof any;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        getRemainingRecasts(): number;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getSpellId(): string;
        wait(arg0: number, arg1: number): void;
        serializeNBT(): Internal.CompoundTag;
        getCastData(): Internal.ICastDataSerializable;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getTicksRemaining(): number;
        getSpellLevel(): number;
        wait(): void;
        getTicksToLive(): number;
        getTotalRecasts(): number;
        wait(arg0: number): void;
        writeToBuffer(arg0: Internal.FriendlyByteBuf_): void;
        readFromBuffer(arg0: Internal.FriendlyByteBuf_): void;
        equals(arg0: any): boolean;
        get castSource(): Internal.CastSource
        get class(): typeof any
        get remainingRecasts(): number
        get spellId(): string
        get castData(): Internal.ICastDataSerializable
        get ticksRemaining(): number
        get spellLevel(): number
        get ticksToLive(): number
        get totalRecasts(): number
    }
    type RecastInstance_ = RecastInstance;
    class FruitOfGrisaiaItem extends vazkii.botania.common.item.relic.RelicItem {
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
        static isBoot(arg0: Internal.ItemStack_): boolean;
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
        static makeRelic(arg0: Internal.ItemStack_): Internal.Relic;
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
    type FruitOfGrisaiaItem_ = FruitOfGrisaiaItem;
    class EntityRadarCategoryManager {
        getClass(): typeof any;
        updateFromConfigChange(arg0: xaero.lib.common.config.Config_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getEditedCategoryConfig(): xaero.lib.common.config.Config;
        fetchDefaultServerCategory(arg0: number): Internal.EntityRadarCategory;
        getSecondaryLegacyFilePath(): Internal.Path;
        fetchDefaultClientCategory(arg0: number): Internal.EntityRadarCategory;
        fetchDefaultServerCategory(): Internal.EntityRadarCategory;
        resetRootCategorySettings(arg0: Internal.IEditConfigScreenContext_): void;
        loadEditedCategory(arg0: xaero.lib.common.config.Config_, arg1: boolean): Internal.EntityRadarCategory;
        forgetEditedCategory(): void;
        storeEditedCategory(arg0: Internal.EntityRadarCategory_, arg1: boolean): void;
        getRootCategory(): Internal.EntityRadarCategory;
        toString(): string;
        init(): void;
        getSyncedRootCategory(): Internal.EntityRadarCategory;
        storeEditedCategory(arg0: boolean): void;
        getEditedCategory(): Internal.EntityRadarCategory;
        notifyAll(): void;
        fetchDefaultClientCategory(): Internal.EntityRadarCategory;
        hashCode(): number;
        getRuleResolver(): Internal.ObjectCategoryRuleResolver;
        wait(): void;
        wait(arg0: number): void;
        editedCategoryNeedsSaving(): boolean;
        getDefaultCategoryConfigurator(): Internal.EntityRadarDefaultCategories;
        equals(arg0: any): boolean;
        setEditedCategoryNeedsSaving(arg0: boolean): void;
        getMainIO(): Internal.EntityRadarCategoryConfigIO;
        getEffectiveSyncedRootCategory(): Internal.EntityRadarCategory;
        get class(): typeof any
        get editedCategoryConfig(): xaero.lib.common.config.Config
        get secondaryLegacyFilePath(): Internal.Path
        get rootCategory(): Internal.EntityRadarCategory
        get syncedRootCategory(): Internal.EntityRadarCategory
        get editedCategory(): Internal.EntityRadarCategory
        get ruleResolver(): Internal.ObjectCategoryRuleResolver
        get defaultCategoryConfigurator(): Internal.EntityRadarDefaultCategories
        set editedCategoryNeedsSaving(arg0: boolean)
        get mainIO(): Internal.EntityRadarCategoryConfigIO
        get effectiveSyncedRootCategory(): Internal.EntityRadarCategory
    }
    type EntityRadarCategoryManager_ = EntityRadarCategoryManager;
    interface ICraftingSimulationRequester {
        abstract getActionSource(): Internal.IActionSource;
        getGridNode(): Internal.IGridNode;
        get actionSource(): Internal.IActionSource
        get gridNode(): Internal.IGridNode
        (): Internal.IActionSource_;
    }
    type ICraftingSimulationRequester_ = (()=> Internal.IActionSource_) | ICraftingSimulationRequester;
    /**
     * Invoked before a living entity dies.
     * 
     * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
    */
    class LivingEntityDeathEventJS extends Internal.LivingEntityEventJS {
        constructor(entity: Internal.LivingEntity_, source: DamageSource_)
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
        notifyAll(): void;
        /**
         * The damage source that triggers the death.
        */
        getSource(): DamageSource;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        /**
         * The entity that dies.
        */
        getEntity(): Internal.Entity;
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
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        /**
         * The damage source that triggers the death.
        */
        get source(): DamageSource
        get level(): Internal.Level
        /**
         * The entity that dies.
        */
        get entity(): Internal.Entity
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
    }
    type LivingEntityDeathEventJS_ = LivingEntityDeathEventJS;
    class SequencedAssemblyRecipeSerializer implements Internal.RecipeSerializer<Internal.SequencedAssemblyRecipe> {
        constructor()
        getClass(): typeof any;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.simibubi.create.content.processing.sequenced.SequencedAssemblyRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SequencedAssemblyRecipe_): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.SequencedAssemblyRecipe;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.SequencedAssemblyRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.SequencedAssemblyRecipe_): void;
        wait(arg0: number, arg1: number): void;
        write(arg0: com.google.gson.JsonObject_, arg1: Internal.SequencedAssemblyRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.SequencedAssemblyRecipe;
        wait(arg0: number): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.SequencedAssemblyRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.SequencedAssemblyRecipe;
        get class(): typeof any
    }
    type SequencedAssemblyRecipeSerializer_ = SequencedAssemblyRecipeSerializer;
    class PlayerEvent$SaveToFile extends Internal.PlayerEvent {
        constructor(arg0: Internal.Player_, arg1: Internal.File_, arg2: string)
        constructor()
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        getPlayerDirectory(): Internal.File;
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
        getPlayerFile(arg0: string): Internal.File;
        equals(arg0: any): boolean;
        getPlayerUUID(): string;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get playerDirectory(): Internal.File
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get playerUUID(): string
    }
    type PlayerEvent$SaveToFile_ = PlayerEvent$SaveToFile;
    interface IContextAttachment extends Internal.Serializable {
        abstract id(): ResourceLocation;
        (): ResourceLocation_;
    }
    type IContextAttachment_ = (()=> ResourceLocation_) | IContextAttachment;
    interface TrackedDataContainer <O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>> {
        abstract dataAnchor$getTrackedDataKeys(): Internal.Collection<Internal.TrackedDataKey<T>>;
        abstract dataAnchor$getTrackedData<E extends T>(arg0: Internal.TrackedDataKey_<E>): Internal.Optional<E>;
        makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): this;
        makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): this;
        abstract dataAnchor$createTrackedData(): void;
    }
    type TrackedDataContainer_<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>> = TrackedDataContainer<O, T>;
    interface Element {
        abstract getElementIndex(arg0: number): number;
        abstract getParentElement(): this;
        abstract getEndOffset(): number;
        abstract getElementCount(): number;
        abstract getAttributes(): Internal.AttributeSet;
        abstract getName(): string;
        abstract isLeaf(): boolean;
        abstract getElement(arg0: number): this;
        abstract getStartOffset(): number;
        abstract getDocument(): Internal.Document;
        get parentElement(): Internal.Element
        get endOffset(): number
        get elementCount(): number
        get attributes(): Internal.AttributeSet
        get name(): string
        get leaf(): boolean
        get startOffset(): number
        get document(): Internal.Document
    }
    type Element_ = Element;
    class MainSettingsCategory <T extends Internal.MainSettingsCategory<any>> implements Internal.ISettingsCategory<T> {
        constructor(arg0: Internal.CompoundTag_, arg1: Internal.Consumer_<Internal.CompoundTag>, arg2: string)
        getClass(): typeof any;
        deleteSlotSettingsFrom(arg0: number): void;
        "copyTo(net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory,int,int)"(arg0: Internal.ISettingsCategory_<any>, arg1: number, arg2: number): void;
        getSettingValue<S>(arg0: Internal.MainSetting_<S>): Internal.Optional<S>;
        toString(): string;
        isLargerThanNumberOfSlots(arg0: number): boolean;
        getPlayerSettingsTagName(): string;
        notifyAll(): void;
        removeSetting<S>(arg0: Internal.MainSetting_<S>): void;
        copyTo(arg0: Internal.ISettingsCategory_<any>, arg1: number, arg2: number): void;
        "overwriteWith(net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory)"(arg0: Internal.ISettingsCategory_<any>): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        "overwriteWith(net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory)"(arg0: T): void;
        wait(arg0: number): void;
        reloadFrom(arg0: Internal.CompoundTag_): void;
        setSettingValue<S>(arg0: Internal.MainSetting_<S>, arg1: S): void;
        "copyTo(net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory,int,int)"(arg0: T, arg1: number, arg2: number): void;
        overwriteWith(arg0: T): void;
        copyTo(arg0: T, arg1: number, arg2: number): void;
        equals(arg0: any): boolean;
        overwriteWith(arg0: Internal.ISettingsCategory_<any>): void;
        get class(): typeof any
        get playerSettingsTagName(): string
        static readonly NAME: ("global") & (string);
    }
    type MainSettingsCategory_<T extends Internal.MainSettingsCategory<any>> = MainSettingsCategory<T>;
    interface IModFile {
        abstract getScanResult(): Internal.ModFileScanData;
        abstract getSecureJar(): Internal.SecureJar;
        abstract getModInfos(): Internal.List<Internal.IModInfo>;
        abstract getFilePath(): Internal.Path;
        abstract getModFileInfo(): Internal.IModFileInfo;
        abstract getFileName(): string;
        abstract getLoaders(): Internal.List<Internal.IModLanguageProvider>;
        abstract getType(): Internal.IModFile$Type;
        abstract setSecurityStatus(arg0: Internal.SecureJar$Status_): void;
        abstract getProvider(): Internal.IModProvider;
        abstract findResource(...arg0: string[]): Internal.Path;
        abstract getSubstitutionMap(): Internal.Supplier<Internal.Map<string, any>>;
        get scanResult(): Internal.ModFileScanData
        get secureJar(): Internal.SecureJar
        get modInfos(): Internal.List<Internal.IModInfo>
        get filePath(): Internal.Path
        get modFileInfo(): Internal.IModFileInfo
        get fileName(): string
        get loaders(): Internal.List<Internal.IModLanguageProvider>
        get type(): Internal.IModFile$Type
        set securityStatus(arg0: Internal.SecureJar$Status_)
        get provider(): Internal.IModProvider
        get substitutionMap(): Internal.Supplier<Internal.Map<string, any>>
    }
    type IModFile_ = IModFile;
    class ButtonBack extends Internal.ButtonGuideAPI {
        constructor(arg0: number, arg1: number, arg2: Internal.Button$OnPress_, arg3: Internal.BaseScreen_)
        charTyped(arg0: string, arg1: number): boolean;
        onRelease(arg0: number, arg1: number): void;
        renderScrollingString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: number, arg3: number): void;
        getY(): number;
        setFocused(arg0: boolean): void;
        setOnPress(arg0: Internal.Button$OnPress_): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        getTooltip(): Internal.Tooltip;
        onClick(arg0: number, arg1: number): void;
        setTooltip(arg0: Internal.Tooltip_): void;
        clearFGColor(): void;
        setX(arg0: number): void;
        setAlpha(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        updateWidgetNarration(arg0: Internal.NarrationElementOutput_): void;
        createTooltipPositioner(): Internal.ClientTooltipPositioner;
        isHovered(): boolean;
        getWidth(): number;
        getOnPress(): Internal.Button$OnPress;
        getTextureY(): number;
        setXaero_tooltip(arg0: Internal.Supplier_<any>): void;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        onPress(): void;
        wait(): void;
        isHoveredOrFocused(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        setMessage(arg0: net.minecraft.network.chat.Component_): void;
        isValidClickButton(arg0: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        getClass(): typeof any;
        updateTooltip(): void;
        isFocused(): boolean;
        getX(): number;
        clicked(arg0: number, arg1: number): boolean;
        isActive(): boolean;
        renderWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        setTooltipDelay(arg0: number): void;
        getMessage(): net.minecraft.network.chat.Component;
        onDrag(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setY(arg0: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setWidth(arg0: number): void;
        getHeight(): number;
        setTabOrderGroup(arg0: number): void;
        getFGColor(): number;
        toString(): string;
        getHoveringText(): Internal.List<net.minecraft.network.chat.Component>;
        renderTexture(arg0: Internal.GuiGraphics_, arg1: ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        renderString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: number): void;
        playDownSound(arg0: Internal.SoundManager_): void;
        defaultButtonNarrationText(arg0: Internal.NarrationElementOutput_): void;
        hashCode(): number;
        static wrapDefaultNarrationMessage(arg0: net.minecraft.network.chat.Component_): Internal.MutableComponent;
        getCurrentFocusPath(): Internal.ComponentPath;
        static renderScrollingString(arg0: Internal.GuiGraphics_, arg1: net.minecraft.client.gui.Font_, arg2: net.minecraft.network.chat.Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        setFGColor(arg0: number): void;
        static builder(arg0: net.minecraft.network.chat.Component_, arg1: Internal.Button$OnPress_): Internal.Button$Builder;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        createNarrationMessage(): Internal.MutableComponent;
        wait(arg0: number): void;
        setHeight(arg0: number): void;
        getXaero_tooltip(): Internal.Supplier<any>;
        equals(arg0: any): boolean;
        get y(): number
        set focused(arg0: boolean)
        set onPress(arg0: Internal.Button$OnPress_)
        get tooltip(): Internal.Tooltip
        set tooltip(arg0: Internal.Tooltip_)
        set x(arg0: number)
        set alpha(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get hovered(): boolean
        get width(): number
        get onPress(): Internal.Button$OnPress
        get textureY(): number
        set xaero_tooltip(arg0: Internal.Supplier_<any>)
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
        get hoveringText(): Internal.List<net.minecraft.network.chat.Component>
        get currentFocusPath(): Internal.ComponentPath
        set FGColor(arg0: number)
        set height(arg0: number)
        get xaero_tooltip(): Internal.Supplier<any>
        static readonly TEXTURE: (ResourceLocation) & (ResourceLocation);
    }
    type ButtonBack_ = ButtonBack;
    interface Object2CharFunction <K> extends it.unimi.dsi.fastutil.Function<K, string>, Internal.ToIntFunction<K> {
        put(arg0: K, arg1: string): string;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Object2ShortFunction<K>;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        removeChar(arg0: any): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Object2IntFunction<K>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, string>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2CharFunction;
        "getOrDefault(java.lang.Object,char)"(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        remove(arg0: any): string;
        containsKey(arg0: any): boolean;
        abstract getChar(arg0: any): string;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2CharFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2CharFunction<T>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: string): string;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        "put(java.lang.Object,char)"(arg0: K, arg1: string): string;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        apply(arg0: K): string;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Object2ByteFunction<K>;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Object2LongFunction<K>;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2CharFunction<T>;
        applyAsInt(arg0: K): number;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2CharFunction;
        size(): number;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Character)"(arg0: K, arg1: string): string;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        clear(): void;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Object2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2CharFunction;
        (arg0: any): string;
    }
    type Object2CharFunction_<K> = Object2CharFunction<K> | ((arg0: any)=> string);
    class ColoredPartItem <T extends Internal.IPart> extends Internal.PartItem<T> {
        constructor(arg0: Internal.Item$Properties_, arg1: T, arg2: Internal.Function_<Internal.ColoredPartItem<T>, T>, arg3: Internal.AEColor_)
        static getId(arg0: Internal.IPartItem_<any>): ResourceLocation;
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
        abstract asItem(): Internal.Item;
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
        static "byId(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.IPartItem<any>;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static "getId(appeng.api.parts.IPartItem)"(arg0: Internal.IPartItem_<any>): ResourceLocation;
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
        static byId(arg0: ResourceLocation_): Internal.IPartItem<any>;
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
        static getNetworkId(arg0: Internal.IPartItem_<any>): number;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
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
        createPart(): T;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static byNetworkId(arg0: number): Internal.IPartItem<any>;
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
        static "byId(int)"(arg0: number): Internal.Item;
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
        getColor(): Internal.AEColor;
        handler$dkc000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        getPartClass(): T;
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
        get color(): Internal.AEColor
        get partClass(): T
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        get registryName(): ResourceLocation
    }
    type ColoredPartItem_<T extends Internal.IPart> = ColoredPartItem<T>;
    class TileEntityBin extends Internal.TileEntityMekanism implements mekanism.api.IConfigurable {
        constructor(blockProvider: Internal.IBlockProvider_, pos: BlockPos_, state: Internal.BlockState_)
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        etf$getType(): Internal.EntityType<any>;
        getEnergyContainer(arg0: number, arg1: Internal.Direction_): Internal.IEnergyContainer;
        supportsComparator(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        getControlType(): Internal.IRedstoneControl$RedstoneControl;
        updateHeatCapacitors(side: Internal.Direction_): void;
        find(): number;
        getFluidSideFor(): Internal.Direction;
        getComponents(): Internal.List<Internal.ITileComponent>;
        /**
         * @deprecated
        */
        setBlockState(newState: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        getFluidTank(arg0: number, arg1: Internal.Direction_): Internal.IExtendedFluidTank;
        getSecurity(): Internal.TileComponentSecurity;
        etf$getOptifineVehicleId(): number;
        getFrequency<FREQ extends Internal.Frequency>(type: Internal.FrequencyType_<FREQ>): FREQ;
        saveWithoutMetadata(): Internal.CompoundTag;
        setLocked(isLocked: boolean): boolean;
        "setChanged()"(): void;
        extractFluid(arg0: number, arg1: number, arg2: mekanism.api.Action_): Internal.FluidStack;
        extractFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        tryWrench(state: Internal.BlockState_, player: Internal.Player_, hand: Internal.InteractionHand_, rayTrace: Internal.BlockHitResult_): Internal.WrenchResult;
        supportsUpgrade(upgradeType: mekanism.api.Upgrade_): boolean;
        extractFluid(arg0: Internal.FluidStack_, arg1: mekanism.api.Action_): Internal.FluidStack;
        setRemoved(): void;
        getGasTanks(side: Internal.Direction_): Internal.List<Internal.IGasTank>;
        canHandleSlurry(): boolean;
        "extractEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        static tickClient(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, tile: Internal.TileEntityMekanism_): void;
        onSneakRightClick(player: Internal.Player_): Internal.InteractionResult;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction)"(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        openGui(player: Internal.Player_): Internal.InteractionResult;
        getRightSide(): Internal.Direction;
        hasAnyComparatorNearby(): boolean;
        onChunkUnloaded(): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getConfigCardName(): string;
        getComputerMethods(holder: Internal.BoundMethodHolder_): void;
        "extractFluid(int,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: number, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        setFacing(direction: Internal.Direction_): void;
        "extractFluid(int,int,mekanism.api.Action)"(arg0: number, arg1: number, arg2: mekanism.api.Action_): Internal.FluidStack;
        getAdjacent(side: Internal.Direction_): Internal.IHeatHandler;
        persists(type: Internal.SubstanceType_): boolean;
        getInventorySlots(side: Internal.Direction_): Internal.List<Internal.IInventorySlot>;
        onNeighborChange(block: Internal.Block_, neighborPos: BlockPos_): void;
        isConfigurationDataCompatible(arg0: Internal.BlockEntityType_<any>): boolean;
        /**
         * @deprecated
        */
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getPersistentData(): Internal.CompoundTag;
        handleHeat(arg0: number): void;
        handler$jag000$setRemoved(arg0: Internal.CallbackInfo_): void;
        getInventorySideFor(): Internal.Direction;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getComponent(): Internal.TileComponentUpgrade;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        getAmbientTemperature(side: Internal.Direction_): number;
        wait(arg0: number): void;
        getNeededEnergy(arg0: number): Internal.FloatingLong;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        getUpgradeData(): Internal.BinUpgradeData;
        getInverseInsulation(arg0: number, arg1: Internal.Direction_): number;
        getEnergyContainerCount(): number;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(world: Internal.Level_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        canHandleHeat(): boolean;
        validateSecurityIsPublic(): void;
        kjs$self(): Internal.IItemHandler;
        getPigmentManager(): Internal.ChemicalHandlerManager$PigmentHandlerManager;
        recalculateUpgrades(upgrade: mekanism.api.Upgrade_): void;
        ownerMatches(arg0: Internal.Player_): boolean;
        etf$getHandItems(): Internal.Iterable<any>;
        invalidateCaps(): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        getName(): net.minecraft.network.chat.Component;
        getSlotLimit(arg0: number): number;
        getBinSlot(): Internal.BinInventorySlot;
        isDirectional(): boolean;
        canHandleEnergy(): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        getLeftSide(): Internal.Direction;
        extractSlurryCheck(tank: number, side: Internal.Direction_): boolean;
        getCapability<T>(capability: Internal.Capability_<T>, side: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        "handleHeat(int,double)"(arg0: number, arg1: number): void;
        getSlots(arg0: Internal.Direction_): number;
        getInitialPigmentTanks(listener: Internal.IContentsListener_): Internal.IChemicalTankHolder<Internal.Pigment, Internal.PigmentStack, Internal.IPigmentTank>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        insertSlurryCheck(tank: number, side: Internal.Direction_): boolean;
        getRadiationParticleCount(): number;
        getInfusionTanks(side: Internal.Direction_): Internal.List<Internal.IInfusionTank>;
        getInitialInfusionTanks(listener: Internal.IContentsListener_): Internal.IChemicalTankHolder<Internal.InfuseType, Internal.InfusionStack, Internal.IInfusionTank>;
        handleHeat(arg0: number, arg1: number): void;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        isRemote(): boolean;
        getInventorySlot(arg0: number, arg1: Internal.Direction_): Internal.IInventorySlot;
        simulate(): Internal.HeatAPI$HeatTransfer;
        serializeNBT(): Internal.Tag;
        getBlockTypeRegistryName(): ResourceLocation;
        getCurrentRedstoneLevel(): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_, arg3: mekanism.api.Action_): Internal.ItemStack;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        "extractFluid(net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: mekanism.api.Action_): Internal.FluidStack;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        isMutable(): boolean;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: mekanism.api.Action_): Internal.FloatingLong;
        extractItem(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: mekanism.api.Action_): Internal.ItemStack;
        hasSecurity(): boolean;
        equals(arg0: any): boolean;
        getHeatCapacitorCount(arg0: Internal.Direction_): number;
        "extractFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        getInputRate(): Internal.FloatingLong;
        requestModelDataUpdate(): void;
        getItemCount(): number;
        insertInfusionCheck(tank: number, side: Internal.Direction_): boolean;
        isItemValid(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getTotalHeatCapacity(arg0: Internal.Direction_): number;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getBlockType(): Internal.Block;
        "getUpdatePacket()"(): Internal.Packet<any>;
        "insertFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        isNameable(): boolean;
        getWidth(): number;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: mekanism.api.Action_): Internal.FluidStack;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSlurryTanks(side: Internal.Direction_): Internal.List<Internal.ISlurryTank>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        etf$getOptifineId(): number;
        handleHeat(arg0: number, arg1: number, arg2: Internal.Direction_): void;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        getHeatCapacitors(side: Internal.Direction_): Internal.List<Internal.IHeatCapacitor>;
        shouldDumpRadiation(): boolean;
        getRenderBoundingBox(): Internal.AABB;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        isActivatable(): boolean;
        etf$distanceTo(entity: Internal.Entity_): number;
        setCustomName(name: net.minecraft.network.chat.Component_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        insertEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        extractPigmentCheck(tank: number, side: Internal.Direction_): boolean;
        getInitialSlurryManager(listener: Internal.IContentsListener_): Internal.ChemicalHandlerManager$SlurryHandlerManager;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        configurationDataSet(): void;
        countNonEmpty(): number;
        static calculateRadiationScale(tanks: Internal.List_<Internal.IGasTank>): number;
        setSustainedInventory(nbtTags: Internal.ListTag_): void;
        getInitialVolume(): number;
        abstract getTileWorld(): Internal.Level;
        invalidateCapabilities(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        canHandleInfusion(): boolean;
        setWorldPosition(arg0: BlockPos_): void;
        onSecurityChanged(old: Internal.SecurityMode_, mode: Internal.SecurityMode_): void;
        simulateAdjacent(): number;
        getTanks(arg0: Internal.Direction_): number;
        getEnergy(arg0: number): Internal.FloatingLong;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        addContainerTrackers(container: Internal.MekanismContainer_): void;
        isInventoryEmpty(arg0: Internal.Direction_): boolean;
        handleUpdateTag(tag: Internal.CompoundTag_): void;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_): void;
        notify(): void;
        getHeatCapacity(arg0: number): number;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setActive(active: boolean): void;
        etf$getBlockY(): number;
        markForSave(): void;
        static tickServer(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, tile: Internal.TileEntityMekanism_): void;
        getTileCoord(): Internal.Coord4D;
        getInfusionManager(): Internal.ChemicalHandlerManager$InfusionHandlerManager;
        extractFluid(arg0: number, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        "extractEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        close(player: Internal.Player_): void;
        handler$jag000$setLevel(arg0: Internal.Level_, arg1: Internal.CallbackInfo_): void;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        getTotalTemperature(arg0: Internal.Direction_): number;
        getInitialPigmentManager(listener: Internal.IContentsListener_): Internal.ChemicalHandlerManager$PigmentHandlerManager;
        supportsUpgrades(): boolean;
        count(ingredient: Internal.Ingredient_): number;
        saveWithId(): Internal.CompoundTag;
        getRadiationScale(): number;
        getConfigurationData(player: Internal.Player_): Internal.CompoundTag;
        toggleLock(): boolean;
        getHeatSideFor(): Internal.Direction;
        /**
         * @deprecated
        */
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: mekanism.api.Action_): Internal.FloatingLong;
        "extractFluid(int,mekanism.api.Action)"(arg0: number, arg1: mekanism.api.Action_): Internal.FluidStack;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getGasManager(): Internal.ChemicalHandlerManager$GasHandlerManager;
        extractFluid(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: mekanism.api.Action_): Internal.FluidStack;
        hasInventory(): boolean;
        etf$getUuid(): Internal.UUID;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        insertEnergy(container: number, amount: Internal.FloatingLong_, side: Internal.Direction_, action: mekanism.api.Action_): Internal.FloatingLong;
        getInitialInfusionManager(listener: Internal.IContentsListener_): Internal.ChemicalHandlerManager$InfusionHandlerManager;
        /**
         * @deprecated
        */
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        hashCode(): number;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getHeatCapacity(arg0: number, arg1: Internal.Direction_): number;
        getDirection(): Internal.Direction;
        addComponent(component: Internal.ITileComponent_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        etf$isBlockEntity(): boolean;
        hasComputerSupport(): boolean;
        getMaxEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        getEnergySideFor(): Internal.Direction;
        modifyReturnValue$cmi000$scholar$onGetUpdateTag(original: Internal.CompoundTag_): Internal.CompoundTag;
        canHandlePigment(): boolean;
        getFrequencyComponent(): Internal.TileComponentFrequency;
        open(player: Internal.Player_): void;
        setEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_): void;
        etf$canBeBright(): boolean;
        getSupportedUpgrade(): Internal.Set<mekanism.api.Upgrade>;
        invalidateCapability(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        hasGui(): boolean;
        handles(type: Internal.SubstanceType_): boolean;
        extractFluid(arg0: number, arg1: mekanism.api.Action_): Internal.FluidStack;
        extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        getEnergyContainers(side: Internal.Direction_): Internal.List<Internal.IEnergyContainer>;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        getCustomName(): net.minecraft.network.chat.Component;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        markDirtyComparator(): void;
        getInverseConduction(arg0: number, arg1: Internal.Direction_): number;
        getClass(): typeof any;
        hasSustainedInventory(): boolean;
        insertGasCheck(tank: number, side: Internal.Direction_): boolean;
        sendUpdatePacket(): void;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        getEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        clearRemoved(): void;
        getTileChunk(): Internal.Chunk3D;
        getHeight(): number;
        hasSound(): boolean;
        supportsRedstone(): boolean;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        getSustainedInventory(): Internal.ListTag;
        invalidateCachedCapabilities(): void;
        setOwnerUUID(owner: Internal.UUID_): void;
        clear(): void;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        isComputerCapabilityPersistent(): boolean;
        getOwnerUUID(): Internal.UUID;
        "insertEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        etf$getWorld(): Internal.Level;
        removeFrequency(type: Internal.FrequencyType_<any>, data: Internal.Frequency$FrequencyIdentity_, player: Internal.UUID_): void;
        getSlots(): number;
        etf$getNbt(): Internal.CompoundTag;
        etf$getBlockPos(): BlockPos;
        setControlType(type: Internal.IRedstoneControl$RedstoneControl_): void;
        canPulse(): boolean;
        "invalidateCapability(net.minecraftforge.common.capabilities.Capability,net.minecraft.core.Direction[])"(capability: Internal.Capability_<any>, ...sides: Internal.Direction_[]): void;
        isPowered(): boolean;
        abstract getTilePos(): BlockPos;
        getTotalHeatCapacity(): number;
        setEnergy(arg0: number, arg1: Internal.FloatingLong_): void;
        getSlotLimit(arg0: number, arg1: Internal.Direction_): number;
        getSoundPos(): BlockPos;
        getSecurityMode(): Internal.SecurityMode;
        etf$hasCustomName(): boolean;
        extractInfusionCheck(tank: number, side: Internal.Direction_): boolean;
        wait(): void;
        getSlurryManager(): Internal.ChemicalHandlerManager$SlurryHandlerManager;
        getHeatCapacitor(arg0: number, arg1: Internal.Direction_): Internal.IHeatCapacitor;
        getConfigurationDataType(): Internal.BlockEntityType<any>;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getActive(): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        isEmpty(): boolean;
        getInitialGasTanks(listener: Internal.IContentsListener_): Internal.IChemicalTankHolder<Internal.Gas, Internal.GasStack, Internal.IGasTank>;
        setConfigurationData(player: Internal.Player_, data: Internal.CompoundTag_): void;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        onDataPacket(net: Internal.Connection_, pkt: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        getOwnerName(): string;
        extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_, arg3: mekanism.api.Action_): Internal.FloatingLong;
        deserializeNBT(arg0: Internal.Tag_): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        parseUpgradeData(upgradeData: Internal.IUpgradeData_): void;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        find(ingredient: Internal.Ingredient_): number;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_, arg3: mekanism.api.Action_): Internal.FluidStack;
        updatePower(): void;
        setFrequency(type: Internal.FrequencyType_<any>, frequencyCompound: Internal.CompoundTag_): void;
        getComputerName(): string;
        getMaxEnergy(arg0: number): Internal.FloatingLong;
        load(nbt: Internal.CompoundTag_): void;
        setChanged(): void;
        "getSlots()"(): number;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction)"(capabilities: Internal.Collection_<Internal.Capability<any>>, side: Internal.Direction_): void;
        getFluidTanks(side: Internal.Direction_): Internal.List<Internal.IExtendedFluidTank>;
        getReducedUpdateTag(): Internal.CompoundTag;
        "getSlotLimit(int)"(i: number): number;
        handleHeat(arg0: number, arg1: Internal.Direction_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        getVolume(): number;
        insertPigmentCheck(tank: number, side: Internal.Direction_): boolean;
        insertFluid(arg0: Internal.FluidStack_, arg1: mekanism.api.Action_): Internal.FluidStack;
        getHeatCapacitorCount(): number;
        getTanks(): number;
        getInitialGasManager(listener: Internal.IContentsListener_): Internal.ChemicalHandlerManager$GasHandlerManager;
        onAdded(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        persistInventory(): boolean;
        saveToItem(arg0: Internal.ItemStack_): void;
        getPublicCache<FREQ extends Internal.Frequency>(type: Internal.FrequencyType_<FREQ>): Internal.List<FREQ>;
        onComparatorAdded(arg0: Internal.Direction_, arg1: number): void;
        fabric_hasPersistentAttachments(): boolean;
        getEnergyContainerCount(arg0: Internal.Direction_): number;
        "handleHeat(double,net.minecraft.core.Direction)"(arg0: number, arg1: Internal.Direction_): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        getOppositeDirection(): Internal.Direction;
        getTotalInverseInsulation(arg0: Internal.Direction_): number;
        insertFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: mekanism.api.Action_): Internal.FluidStack;
        toString(): string;
        getTotalTemperature(): number;
        notifyAll(): void;
        getRedstoneLevel(): number;
        etf$getScoreboardTeam(): Internal.Team;
        callSaveMetadata(arg0: Internal.CompoundTag_): void;
        getSoundCategory(): Internal.SoundSource;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: Internal.Direction_): number;
        getNeededEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): void;
        getInverseConduction(arg0: number): number;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getFluidInTank(arg0: number): Internal.FluidStack;
        handleUpdatePacket(tag: Internal.CompoundTag_): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setSecurityMode(mode: Internal.SecurityMode_): void;
        canHandleGas(): boolean;
        "insertFluid(int,net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: number, arg1: Internal.FluidStack_, arg2: mekanism.api.Action_): Internal.FluidStack;
        getBlockPos(): BlockPos;
        getTotalInverseConduction(): number;
        canBeUpgraded(): boolean;
        setFrequency(type: Internal.FrequencyType_<any>, data: Internal.Frequency$FrequencyIdentity_, player: Internal.UUID_): void;
        getFluidInTank(arg0: number, arg1: Internal.Direction_): Internal.FluidStack;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        extractGasCheck(tank: number, side: Internal.Direction_): boolean;
        getBlockState(): Internal.BlockState;
        getTier(): Internal.BinTier;
        modifyReturnValue$cmi000$scholar$onGetUpdatePacket(original: Internal.Packet_<any>): Internal.Packet<any>;
        getTemperature(arg0: number, arg1: Internal.Direction_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        wasPowered(): boolean;
        sendUpdatePacket(tracking: Internal.BlockEntity_): void;
        canHandleFluid(): boolean;
        saveAdditional(nbtTags: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getStackInSlot(arg0: number, arg1: Internal.Direction_): Internal.ItemStack;
        getInfo(upgrade: mekanism.api.Upgrade_): Internal.List<net.minecraft.network.chat.Component>;
        wait(arg0: number, arg1: number): void;
        getInitialSlurryTanks(listener: Internal.IContentsListener_): Internal.IChemicalTankHolder<Internal.Slurry, Internal.SlurryStack, Internal.ISlurryTank>;
        /**
         * @deprecated
        */
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        getLevel(): Internal.Level;
        isInventoryEmpty(): boolean;
        onRightClick(player: Internal.Player_): Internal.InteractionResult;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        onContentsChanged(): void;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getTemperature(arg0: number): number;
        getPrivateCache<FREQ extends Internal.Frequency>(type: Internal.FrequencyType_<FREQ>): Internal.List<FREQ>;
        "invalidateCapabilities(java.util.Collection,net.minecraft.core.Direction[])"(capabilities: Internal.Collection_<Internal.Capability<any>>, ...sides: Internal.Direction_[]): void;
        simulateEnvironment(): number;
        invalidateCapability(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        getTotalInverseConductionCoefficient(arg0: Internal.Direction_): number;
        "insertEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: mekanism.api.Action_): Internal.FloatingLong;
        getTankCapacity(arg0: number): number;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): void;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        blockRemoved(): void;
        getTankCapacity(arg0: number, arg1: Internal.Direction_): number;
        getPigmentTanks(side: Internal.Direction_): Internal.List<Internal.IPigmentTank>;
        onPowerChange(): void;
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        get controlType(): Internal.IRedstoneControl$RedstoneControl
        get fluidSideFor(): Internal.Direction
        get components(): Internal.List<Internal.ITileComponent>
        /**
         * @deprecated
        */
        set blockState(newState: Internal.BlockState_)
        get security(): Internal.TileComponentSecurity
        set locked(isLocked: boolean)
        get rightSide(): Internal.Direction
        get configCardName(): string
        set facing(direction: Internal.Direction_)
        get persistentData(): Internal.CompoundTag
        get inventorySideFor(): Internal.Direction
        get component(): Internal.TileComponentUpgrade
        set animator(arg0: Internal.AzAnimator_<any, any>)
        get upgradeData(): Internal.BinUpgradeData
        get energyContainerCount(): number
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(world: Internal.Level_)
        get pigmentManager(): Internal.ChemicalHandlerManager$PigmentHandlerManager
        get name(): net.minecraft.network.chat.Component
        get binSlot(): Internal.BinInventorySlot
        get directional(): boolean
        get leftSide(): Internal.Direction
        get radiationParticleCount(): number
        get remote(): boolean
        get blockTypeRegistryName(): ResourceLocation
        get currentRedstoneLevel(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get mutable(): boolean
        get inputRate(): Internal.FloatingLong
        get itemCount(): number
        get blockType(): Internal.Block
        get "updatePacket()"(): Internal.Packet<any>
        get nameable(): boolean
        get width(): number
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get activatable(): boolean
        set customName(name: net.minecraft.network.chat.Component_)
        get updatePacket(): Internal.Packet<any>
        set sustainedInventory(nbtTags: Internal.ListTag_)
        get initialVolume(): number
        get tileWorld(): Internal.Level
        set worldPosition(arg0: BlockPos_)
        get removed(): boolean
        set active(active: boolean)
        get tileCoord(): Internal.Coord4D
        get infusionManager(): Internal.ChemicalHandlerManager$InfusionHandlerManager
        get radiationScale(): number
        get heatSideFor(): Internal.Direction
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get gasManager(): Internal.ChemicalHandlerManager$GasHandlerManager
        get direction(): Internal.Direction
        get energySideFor(): Internal.Direction
        get frequencyComponent(): Internal.TileComponentFrequency
        get supportedUpgrade(): Internal.Set<mekanism.api.Upgrade>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get tileChunk(): Internal.Chunk3D
        get height(): number
        get sustainedInventory(): Internal.ListTag
        set ownerUUID(owner: Internal.UUID_)
        get computerCapabilityPersistent(): boolean
        get ownerUUID(): Internal.UUID
        get slots(): number
        set controlType(type: Internal.IRedstoneControl$RedstoneControl_)
        get powered(): boolean
        get tilePos(): BlockPos
        get totalHeatCapacity(): number
        get soundPos(): BlockPos
        get securityMode(): Internal.SecurityMode
        get slurryManager(): Internal.ChemicalHandlerManager$SlurryHandlerManager
        get configurationDataType(): Internal.BlockEntityType<any>
        get active(): boolean
        get empty(): boolean
        get ownerName(): string
        get renderData(): any
        get modelData(): Internal.ModelData
        get computerName(): string
        get "slots()"(): number
        get reducedUpdateTag(): Internal.CompoundTag
        get type(): Internal.BlockEntityType<any>
        get volume(): number
        get heatCapacitorCount(): number
        get tanks(): number
        get displayName(): net.minecraft.network.chat.Component
        get oppositeDirection(): Internal.Direction
        get totalTemperature(): number
        get redstoneLevel(): number
        get soundCategory(): Internal.SoundSource
        set securityMode(mode: Internal.SecurityMode_)
        get blockPos(): BlockPos
        get totalInverseConduction(): number
        get blockState(): Internal.BlockState
        get tier(): Internal.BinTier
        get level(): Internal.Level
        get inventoryEmpty(): boolean
        addTicks: number;
        removeTicks: number;
    }
    type TileEntityBin_ = TileEntityBin;
    abstract class FilterObjectCategory <E, P, D extends Internal.FilterObjectCategoryData<D>, C extends Internal.FilterObjectCategory<E, P, D, C>> extends Internal.ObjectCategory<D, C> {
        getClass(): typeof any;
        getIncludeInSuperCategory(): boolean;
        toString(): string;
        getDirectSubCategoryIterator(): Internal.Iterator<C>;
        notifyAll(): void;
        getSettingOverridesIterator(): Internal.Iterator<Internal.Map$Entry<Internal.ObjectCategorySetting<any>, any>>;
        getSuperCategory(): C;
        getExcludeLists(): Internal.List<Internal.ObjectCategoryExcludeList<E, P, any>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExcludeMode(): Internal.ExcludeListMode;
        getBaseRule(): Internal.ObjectCategoryRule<E, P>;
        getProtection(): boolean;
        hashCode(): number;
        setSettingValue<T>(arg0: Internal.ObjectCategorySetting_<T>, arg1: T): void;
        getIncludeList<S>(arg0: Internal.ObjectCategoryListRuleType_<E, P, S>): Internal.ObjectCategoryIncludeList<E, P, S>;
        getIncludeLists(): Internal.List<Internal.ObjectCategoryIncludeList<E, P, any>>;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        getExcludeList<S>(arg0: Internal.ObjectCategoryListRuleType_<E, P, S>): Internal.ObjectCategoryExcludeList<E, P, S>;
        equals(arg0: any): boolean;
        getSettingValue<T>(arg0: Internal.ObjectCategorySetting_<T>): T;
        get class(): typeof any
        get includeInSuperCategory(): boolean
        get directSubCategoryIterator(): Internal.Iterator<C>
        get settingOverridesIterator(): Internal.Iterator<Internal.Map$Entry<Internal.ObjectCategorySetting<any>, any>>
        get superCategory(): C
        get excludeLists(): Internal.List<Internal.ObjectCategoryExcludeList<E, P, any>>
        get excludeMode(): Internal.ExcludeListMode
        get baseRule(): Internal.ObjectCategoryRule<E, P>
        get protection(): boolean
        get includeLists(): Internal.List<Internal.ObjectCategoryIncludeList<E, P, any>>
        get name(): string
    }
    type FilterObjectCategory_<E, P, D extends Internal.FilterObjectCategoryData<D>, C extends Internal.FilterObjectCategory<E, P, D, C>> = FilterObjectCategory<E, P, D, C>;
    interface ITileHeatHandler extends Internal.IMekanismHeatHandler {
        getInverseConduction(arg0: number, arg1: Internal.Direction_): number;
        "handleHeat(int,double)"(arg0: number, arg1: number): void;
        getInverseInsulation(arg0: number, arg1: Internal.Direction_): number;
        getHeatSideFor(): Internal.Direction;
        updateHeatCapacitors(side: Internal.Direction_): void;
        canHandleHeat(): boolean;
        handleHeat(arg0: number, arg1: number): void;
        getHeatCapacity(arg0: number): number;
        getTotalInverseConduction(): number;
        simulate(): Internal.HeatAPI$HeatTransfer;
        "handleHeat(double,net.minecraft.core.Direction)"(arg0: number, arg1: Internal.Direction_): void;
        getAdjacent(side: Internal.Direction_): Internal.IHeatHandler;
        getTotalHeatCapacity(arg0: Internal.Direction_): number;
        getTemperature(arg0: number): number;
        abstract onContentsChanged(): void;
        getTotalInverseInsulation(arg0: Internal.Direction_): number;
        simulateEnvironment(): number;
        handleHeat(arg0: number, arg1: Internal.Direction_): void;
        getTotalHeatCapacity(): number;
        handleHeat(arg0: number): void;
        getTotalTemperature(): number;
        getTotalInverseConductionCoefficient(arg0: Internal.Direction_): number;
        getTemperature(arg0: number, arg1: Internal.Direction_): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: Internal.Direction_): number;
        getHeatCapacitorCount(): number;
        getTotalTemperature(arg0: Internal.Direction_): number;
        getHeatCapacity(arg0: number, arg1: Internal.Direction_): number;
        simulateAdjacent(): number;
        getAmbientTemperature(side: Internal.Direction_): number;
        getHeatCapacitor(arg0: number, arg1: Internal.Direction_): Internal.IHeatCapacitor;
        handleHeat(arg0: number, arg1: number, arg2: Internal.Direction_): void;
        getInverseConduction(arg0: number): number;
        getHeatCapacitorCount(arg0: Internal.Direction_): number;
        abstract getHeatCapacitors(arg0: Internal.Direction_): Internal.List<Internal.IHeatCapacitor>;
        get heatSideFor(): Internal.Direction
        get totalInverseConduction(): number
        get totalHeatCapacity(): number
        get totalTemperature(): number
        get heatCapacitorCount(): number
    }
    type ITileHeatHandler_ = ITileHeatHandler;
    class SurfaceRules$Context {
        constructor(arg0: Internal.SurfaceSystem_, arg1: Internal.RandomState_, arg2: Internal.ChunkAccess_, arg3: Internal.NoiseChunk_, arg4: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg5: Internal.Registry_<Internal.Biome>, arg6: Internal.WorldGenerationContext_)
        static surfaceCellToBlockCoord(arg0: number): number;
        getClass(): typeof any;
        updateY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        toString(): string;
        notifyAll(): void;
        getSurfaceSecondary(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMinSurfaceLevel(): number;
        hashCode(): number;
        wait(): void;
        static blockCoordToSurfaceCell(arg0: number): number;
        m_204626_(arg0: number, arg1: number, arg2: number): Internal.Holder<any>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        updateXZ(arg0: number, arg1: number): void;
        get class(): typeof any
        get surfaceSecondary(): number
        get minSurfaceLevel(): number
        static readonly HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE: (8) & (number);
        readonly noiseChunk: Internal.NoiseChunk;
        readonly context: Internal.WorldGenerationContext;
        lastSurfaceDepth2Update: number;
        readonly randomState: Internal.RandomState;
        stoneDepthAbove: number;
        readonly pos: Internal.BlockPos$MutableBlockPos;
        readonly abovePreliminarySurface: Internal.SurfaceRules$Condition;
        lastPreliminarySurfaceCellOrigin: number;
        lastMinSurfaceLevelUpdate: number;
        readonly steep: Internal.SurfaceRules$Condition;
        blockY: number;
        static readonly SURFACE_CELL_BITS: (4) & (number);
        minSurfaceLevel: number;
        lastUpdateY: number;
        readonly system: Internal.SurfaceSystem;
        stoneDepthBelow: number;
        static readonly SURFACE_CELL_MASK: (15) & (number);
        readonly hole: Internal.SurfaceRules$Condition;
        lastUpdateXZ: number;
        readonly biomeGetter: Internal.Function<BlockPos, Internal.Holder<Internal.Biome>>;
        waterHeight: number;
        readonly preliminarySurfaceCache: number[];
        biome: Internal.Supplier<Internal.Holder<Internal.Biome>>;
        static readonly SURFACE_CELL_SIZE: (16) & (number);
        readonly temperature: Internal.SurfaceRules$Condition;
        surfaceDepth: number;
        blockZ: number;
        surfaceSecondary: number;
        readonly chunk: Internal.ChunkAccess;
        blockX: number;
    }
    type SurfaceRules$Context_ = SurfaceRules$Context;
    abstract class ImmutableCollections$AbstractImmutableMap <K, V> extends Internal.AbstractMap<K, V> implements Internal.Serializable {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        getClass(): typeof any;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        toString(): string;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        values(): Internal.Collection<V>;
        abstract entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        hashCode(): number;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        wait(): void;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        wait(arg0: number): void;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get class(): typeof any
        get empty(): boolean
    }
    type ImmutableCollections$AbstractImmutableMap_<K, V> = ImmutableCollections$AbstractImmutableMap<K, V>;
    class Zombie extends Internal.Monster implements Internal.FireTyped, Internal.ZombieInvoker {
        constructor(arg0: Internal.EntityType_<Internal.Zombie>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_)
        handler$flc001$goety$travelRidden(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        handler$kae000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        rarcompat$travel(arg0: Vec3d_, arg1: Internal.Mob_): void;
        etf$getType(): Internal.EntityType<any>;
        modifyExpressionValue$hmh000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        getUpVector(arg0: number): Vec3d;
        getXRot(): number;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        handler$iep001$relics$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        etf$getOptifineVehicleId(): number;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        onLeashDistance(arg0: number): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        setCanBreakDoors(arg0: boolean): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        shouldPassengersInheritMalus(): boolean;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        callFollowLeashSpeed(): number;
        redirect$keh000$moonlight$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        isSoulSpeedBlock(): boolean;
        setXxa(arg0: number): void;
        updateWalkAnimation(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        handler$icl000$domesticationinnovation$di_rideableInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        vb$checkElasticInteractions(entity: Internal.Entity_): boolean;
        setMotionZ(z: number): void;
        getAttachmentProgress(arg0: number): number;
        handler$kae000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$iep001$relics$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getPlayingEndimation(): Internal.PlayableEndimation;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        getBlockY(): number;
        onEndimationStart(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        isSpectator(): boolean;
        isFreezingFromFrostmint(): boolean;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        callIsPreserved(): boolean;
        isRegisteredToWorld(): boolean;
        handler$fko000$goety$push(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        updateSwimAmount(): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        static vb$leashableInArea(level: Internal.Level_, pos: Vec3d_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        localvar$cei000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        handler$gef000$etstlib$cancelHurt(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        onFlap(): void;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        handler$kal000$alexscaves$ac_increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        modifyReturnValue$ljh000$create$onFireImmune(arg0: boolean): boolean;
        rarcompat$tickRidden(arg0: Internal.Mob_, arg1: Internal.Player_): void;
        handler$elb000$combatnouveau$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isWebbed(): boolean;
        handler$jol000$libertyvillagers$replaceAttributeValueForVillagersAndGolems(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        etf$getHandItems(): Internal.Iterable<any>;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        handler$cel000$attributeslib$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
        static vb$getKnownMovement(entity: Internal.Entity_): Vec3d;
        playAmbientSound(): void;
        onGround(): boolean;
        handler$kal000$alexscaves$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getSwipeDelay(): number;
        getKillCredit(): Internal.LivingEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        handler$cel000$attributeslib$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        getDefaultLootTable(): ResourceLocation;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        handler$jke002$blueprint$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        handler$flc000$goety$isSensitiveToWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        botania_getAmbientSound(): Internal.SoundEvent;
        onlyOpCanSetNbt(): boolean;
        convertToZombieType(arg0: Internal.EntityType_<Internal.Zombie>): void;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        abstract setNoHoney(arg0: number): void;
        handler$fph000$vanillabackport$vb$defineSynchedData(ci: Internal.CallbackInfo_): void;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        bettermobcombat$getAttackCooldown(): number;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getLastHurtByPlayer(): Internal.Player;
        getYHeadRot(): number;
        wrapOperation$lci000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        handler$gfe000$bettermobcombat$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isSunBurnTick(): boolean;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        handler$fph000$vanillabackport$vb$readAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        handler$hnf000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        getAmbientSound(): Internal.SoundEvent;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getSkull(): Internal.ItemStack;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setFireType(arg0: ResourceLocation_): void;
        handler$geh000$etstlib$percentageBypass(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        handler$gef000$etstlib$addVibrationListener(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.CallbackInfo_): void;
        etf$getOptifineId(): number;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        handler$flc000$goety$dropExperience(arg0: Internal.CallbackInfo_): void;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        vb$getQuadLeashHolderOffsets(): Vec3d[];
        callMobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        static vb$computeElasticInteraction<E extends Internal.Entity & Internal.Leashable>(entity: E, holder: Internal.Entity_, attachmentPoints: Internal.List_<Vec3d>, holderAttachmentPoints: Internal.List_<Vec3d>): Internal.List<Internal.Leashable$Wrench>;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        irons_spellbooks$getMagicData(): Internal.MagicData;
        getLeashHolder(): Internal.Entity;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        detectEquipmentUpdates(): void;
        getSelfAndPassengers(): Internal.Stream<any>;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        shouldDropExperience(): boolean;
        getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        hasPassenger(arg0: Internal.Entity_): boolean;
        getDynamicLightX(): number;
        callReapplyPosition(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        getArrowCount(): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        vb$dropLeash(): void;
        makeBoundingBox(): Internal.AABB;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        handler$fne000$lavafishing$travel(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        doUnderWaterConversion(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getStepSound(): Internal.SoundEvent;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        handler$gci000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        isSprinting(): boolean;
        etf$getBlockY(): number;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        vb$angularMomentum(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getDimensions(): Internal.EntityDimensions;
        handler$fim000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        handler$flc000$goety$jumpFromGround(arg0: Internal.CallbackInfo_): void;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        handler$fig000$irons_spellbooks$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setLootTable(arg0: ResourceLocation_): void;
        setWebbed(arg0: boolean): void;
        clearSleepingPos(): void;
        vb$leashElasticDistance(): number;
        ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canRide(arg0: Internal.Entity_): boolean;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        localvar$hgp000$vampirism$vampireSlayerEnchantment(arg0: number, arg1: Internal.Entity_): number;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        vb$onElasticLeashPull(entity: Internal.Entity_): void;
        vb$getQuadLeashOffsets(): Vec3d[];
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        removeAfterChangingDimensions(): void;
        setNoActionTime(arg0: number): void;
        isJumping(): boolean;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        setLastAttackedTicks(arg0: number): void;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        tryAddFrost(): void;
        quark$lastHurtByPlayer(): Internal.Player;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        invokeShouldDropLoot(): boolean;
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
        handler$eaf000$cataclysm$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        createHoverEvent(): Internal.HoverEvent;
        bookshelf$makePoofParticles(): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        serverAiStep(): void;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        setItemSlotAndDropWhenKilled(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        sendDebugPackets(): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        handler$kae000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        etf$isBlockEntity(): boolean;
        canChangeDirection(): boolean;
        shouldUpdateDynamicLight(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        vb$setAngularMomentum(angularMomentum: number): void;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        getMotionDirection(): Internal.Direction;
        canBeCollidedWith(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        quark$lastHurtByPlayerTime(): number;
        getTotalMovementSpeed(): number;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        handler$cel000$attributeslib$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        updatingUsingItem(): void;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        invokeGetJumpPower_werewolves(): number;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        bettercombat$resetAttackStrengthTicker(): void;
        handler$chd000$illageandspillage$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAttributes(): Internal.AttributeMap;
        setMagneticDeltaY(arg0: number): void;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        botania_playHurtSound(arg0: DamageSource_): void;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        handler$hji000$treechop$injectDataLoading(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        canBreakDoors(): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        handler$ioa000$raidsenhanced$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        bettermobcombat$getAlternateMainHandItem(arg0: Internal.Mob_, arg1: Internal.Operation_<any>): Internal.ItemStack;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        enchantSpawnedArmor(arg0: Internal.RandomSource_, arg1: number, arg2: Internal.EquipmentSlot_): void;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        vb$setBoatDelayedLeashHolderId(leashHolderId: number): void;
        etf$getWorld(): Internal.Level;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        setUseItemRemaining(arg0: number): void;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        handler$kae000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        getTargetSelector(): Internal.GoalSelector;
        setRegisteredToWorld(arg0: Internal.PathNavigation_): void;
        stopUsingItem(): void;
        isSleeping(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        localvar$eac000$fluidCollision(arg0: Vec3d_): Vec3d;
        vb$leashSnapDistance(): number;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        etf$getBlockPos(): BlockPos;
        handler$gmb000$bettercombat$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        updateAnimationsOnTick(): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        supportsBreakDoorGoal(): boolean;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        randomizeReinforcementsChance(): void;
        rarcompat$getRiddenInput(arg0: Internal.Player_, arg1: Internal.CowboyHatItem_, arg2: Internal.Mob_): Vec3d;
        setRemainingFireTicks(arg0: number): void;
        updateControlFlags(): void;
        createBodyControl(): Internal.BodyRotationControl;
        handler$fim000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        vb$dropLeash(broadcast: boolean, dropItem: boolean): void;
        etf$hasCustomName(): boolean;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setPos(arg0: Vec3d_): void;
        enchantSpawnedWeapon(arg0: Internal.RandomSource_, arg1: number): void;
        populateDefaultEquipmentEnchantments(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        setSwipeDelay(arg0: number): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        getSwimSplashSound(): Internal.SoundEvent;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        biomancy$setEyeHeight(arg0: number): void;
        bettermobcombat$getAlternateMainhandItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        static vb$leashableLeashedTo(entity: Internal.Entity_): Internal.List<Internal.Leashable>;
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        handler$flc000$goety$addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        getValue(arg0: Internal.TrackedData_<any>): any;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        handler$fph000$vanillabackport$vb$addAdditionalSaveData(tag: Internal.CompoundTag_, ci: Internal.CallbackInfo_): void;
        localvar$gmb000$bettercombat$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        handler$fbf001$rarcompat$getControllingPassenger(arg0: Internal.CallbackInfoReturnable_<any>): void;
        biomancy$getData(): Internal.LivingEntityData$TransientDataProvider$DataHolder;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        callSetWebbed(arg0: boolean): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        handler$kae001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        redirect$cel000$attributeslib$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        getForgePersistentData(): Internal.CompoundTag;
        endimateTick(): void;
        ac_dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        callIsWebbed(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        handler$iep000$relics$canBeSeenByAnyone(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        handler$hkk000$ntgl$getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        handler$fko000$goety$makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        canReplaceCurrentItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        vb$setLeashedTo(entity: Internal.Entity_, sendAttachPacket: boolean): void;
        setGlowing(arg0: boolean): void;
        getYRot(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        biomancy$setMoveControl(arg0: Internal.MoveControl_): void;
        startSleeping(arg0: BlockPos_): void;
        pickUpItem(arg0: Internal.ItemEntity_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        bettermobcombat$getHandItems(): Internal.NonNullList<any>;
        calculateFallDamage(arg0: number, arg1: number): number;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        getGoalSelector(): Internal.GoalSelector;
        getDataMap(): Internal.Map<any, any>;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        handler$dkm000$ramcompat$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        hasGlowingTag(): boolean;
        isUnderWaterConverting(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        getSoundVolume(): number;
        bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        vb$canHaveALeashAttachedTo(target: Internal.Entity_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        biomancy$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        static vb$getHolderMovement(entity: Internal.Entity_): Vec3d;
        updateInvisibilityStatus(): void;
        isDirty(): boolean;
        etf$getScoreboardTeam(): Internal.Team;
        vb$notifyLeashHolder(entity: Internal.Leashable_): void;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        setYRot(arg0: number): void;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        handler$hce000$canary$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        handler$fko000$goety$playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CallbackInfo_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        handler$icl000$domesticationinnovation$di_pushedByWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        handler$flc002$goety$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        handler$gef000$etstlib$removeFromTickerMap(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        handler$iep000$relics$onAiStep(arg0: Internal.CallbackInfoReturnable_<any>): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        wrapOperation$ekp000$artifacts$travel(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_, original: Internal.Operation_<any>): number;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        setPlayingEndimation(arg0: Internal.PlayableEndimation_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        irons_spellbooks$getCapData(): Internal.IArmorCapeProvider$CapeData;
        isPassenger(): boolean;
        etstlib$getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        isFlapping(): boolean;
        handler$kae000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$jol000$libertyvillagers$replaceIsClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        updateFallFlying(): void;
        bettermobcombat$setDelayedUpswing(arg0: Internal.Runnable_): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        biomancy$setJumpControl(arg0: Internal.JumpControl_): void;
        getCombatTracker(): Internal.CombatTracker;
        setAnimationTick(arg0: number): void;
        handler$hml000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
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
        handler$geh000$etstlib$getDamage(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        handler$hnf000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        biomancy$getDeathSound(): Internal.SoundEvent;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        onSoulSpeedBlock(): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        callOnLeashDistance(arg0: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        setFrostmintFreezing(arg0: boolean): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        handler$kal000$alexscaves$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        handler$icl000$domesticationinnovation$di_isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        vb$getLeashHolder(): Internal.Entity;
        isInWall(): boolean;
        handler$fim000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        handler$eld001$combatnouveau$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        handler$fog000$alekiships$injectOnClimbableWhileClimbingMasts(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getBlockZ(): number;
        handler$flc000$goety$getMobType(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$fim000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        handler$dgm000$ad_astra$adastra$checkSpawnObstruction(levelReader: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        handler$kae000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        clearRestriction(): void;
        biomancy$getAmbientSound(): Internal.SoundEvent;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        handler$fim000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        setComboCount(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        biomancy$getDimensions(): Internal.EntityDimensions;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        localvar$iep000$relics$setBlockFriction(arg0: number): number;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        handler$fko000$goety$canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isActive(): boolean;
        handler$dgl000$ad_astra$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        dropExperience(): void;
        handler$cpg000$clanginghowl$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        vb$whenLeashedTo(entity: Internal.Entity_): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        handler$fig000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getItem(): Internal.ItemStack;
        bettermobcombat$getSwingProgress(): number;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        setSlowFallingFlag(arg0: boolean): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        isInRain(): boolean;
        static vb$leashableInArea(entity: Internal.Entity_, filter: Internal.Predicate_<Internal.Leashable>): Internal.List<Internal.Leashable>;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        handler$eld000$combatnouveau$blockedByShield(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        handler$icl000$domesticationinnovation$di_getMovementEmission(arg0: Internal.CallbackInfoReturnable_<any>): void;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        elytratrims$isGui(): boolean;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getAnimationStack(): Internal.AnimationStack;
        getY(arg0: number): number;
        handler$gdj000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        canaryOnBlockCacheDeleted(): void;
        getMaxHeadXRot(): number;
        bettermobcombat$cancelWeaponSwing(): void;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        bettermobcombat$cancelUpswing(): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        handler$icl000$domesticationinnovation$di_gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        handler$fim000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        onOffspringSpawnedFromEgg(arg0: Internal.Player_, arg1: Internal.Mob_): void;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        bettermobcombat$hasActiveOffHandItemPose(): boolean;
        getYaw(): number;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        handler$dgl000$ad_astra$adastra$tick(ci: Internal.CallbackInfo_): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        handler$icl000$domesticationinnovation$di_canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getBrain(): Internal.Brain<any>;
        handler$elh000$combatnouveau$getAttackAnim(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        setChopData(arg0: Internal.SyncedChopData_): Internal.SyncedChopData;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        getComboCount(): number;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getDirtyEntries(): Internal.Set<any>;
        postMagnetJump(): void;
        getEyeY(): number;
        redirect$gdd000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        redirect$cel000$attributeslib$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        isInWaterOrRain(): boolean;
        getChopData(): Internal.SyncedChopData;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        bettermobcombat$hasActiveAttackAnimation(): boolean;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getCurrentAttack(): Internal.AttackHand;
        playerAnimator_getAnimation(arg0: ResourceLocation_): Internal.IAnimation;
        doWaterSplashEffect(): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        invokeGetExperiencePoints_vampirism(): number;
        getTeam(): Internal.Team;
        vb$resetAngularMomentum(): void;
        handler$fko000$goety$isSwimming(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        callSetPreserved(arg0: boolean): void;
        static vb$getPreciseBodyRotation(entity: Internal.Entity_, partialTicks: number): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        stopAttackAnimation(arg0: number): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
        resetDynamicLight(): void;
        tickLeash(): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        callStartUnderWaterConversion(arg0: number): void;
        customServerAiStep(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        handler$chd000$illageandspillage$defineSynchedData(arg0: Internal.CallbackInfo_): void;
        setIsInPowderSnow(arg0: boolean): void;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        etf$distanceTo(entity: Internal.Entity_): number;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        handleNetherPortal(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        handler$fph000$vanillabackport$vb$finalizeSpawn(level: Internal.ServerLevelAccessor_, difficulty: Internal.DifficultyInstance_, reason: Internal.MobSpawnType_, spawnData: Internal.SpawnGroupData_, dataTag: Internal.CompoundTag_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setStingerCount(arg0: number): void;
        bettermobcombat$hasActiveMainHandItemPose(): boolean;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        getMaxHeadYRot(): number;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        static vb$angularFriction<E extends Internal.Entity & Internal.Leashable>(entity: E): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        followLeashSpeed(): number;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        hurtCurrentlyUsedShield(arg0: number): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
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
        bettermobcombat$hasActiveMainHandBodyPose(): boolean;
        biomancy$getVoicePitch(): number;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        checkAndHandleImportantInteractions(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        handler$dgl000$ad_astra$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        getWaterSlowDown(): number;
        createNavigation(arg0: Internal.Level_): Internal.PathNavigation;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        bettermobcombat$hasDelayedUpswing(): boolean;
        isWeaponSwingInProgress(): boolean;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        static vb$createQuadLeashOffsets(entity: Internal.Entity_, frontOffset: number, frontBack: number, leftRight: number, height: number): Vec3d[];
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        resetMagnetHeadRotation(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        isRewinding(): boolean;
        bookshelf$getAmbientSound(): Internal.SoundEvent;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        convertsInWater(): boolean;
        bettermobcombat$getUpswingTicks(): number;
        handler$kae000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getEyePosition(arg0: number): Vec3d;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        setSwipes(arg0: number): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        maybeDisableShield(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        vb$leashDistanceTo(entity: Internal.Entity_): number;
        handler$hji000$treechop$injectDataSaving(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getFirstPassenger(): Internal.Entity;
        getEntries(arg0: boolean): Internal.Set<any>;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        setXRot(arg0: number): void;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        isSunSensitive(): boolean;
        bettermobcombat$hasActiveOffHandBodyPose(): boolean;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        addPassenger(arg0: Internal.Entity_): void;
        callGetAmbientSound(): Internal.SoundEvent;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        getLookAngle(): Vec3d;
        static vb$onTickLeash<E extends Internal.Entity & Internal.Leashable>(entity: E): void;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        getAmbientSoundInterval(): number;
        playAttackAnimation(arg0: string, arg1: Internal.AnimatedHand_, arg2: number, arg3: number): void;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        handler$hnf00d$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getProfile(): Internal.GameProfile;
        handler$fim000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        biomancy$getSoundVolume(): number;
        getLookControl(): Internal.LookControl;
        handler$jon000$libertyvillagers$replaceGetSafeFallDistance(cir: Internal.CallbackInfoReturnable_<any>): void;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        biomancy$random(): Internal.RandomSource;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        handler$flc000$goety$randomTeleport(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        etf$canBeBright(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        redirect$cel000$attributeslib$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        handler$flc001$goety$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        handler$hkm001$ntgl$setTarget(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        static getSpawnAsBabyOdds(arg0: Internal.RandomSource_): boolean;
        static m_219167_(arg0: Internal.Zombie_): Internal.RandomSource;
        positionRider(arg0: Internal.Entity_): void;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        handler$jig001$createbigcannons$turn(yaw: number, pitch: number, ci: Internal.CallbackInfo_): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        getPos(): Internal.Position;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getEffectHandler(): Internal.EndimationEffectHandler;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        getAnimationTick(): number;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        handler$jgj000$sliceanddice$baseTick(arg0: Internal.CallbackInfo_): void;
        getFacing(): Internal.Direction;
        vb$closeRangeLeashBehavior(entity: Internal.Entity_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        handler$hmj000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_, arg1: Internal.BiConsumer_<any, any>): void;
        getCurrentSwingDuration(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        handler$hml000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        unsetRemoved(): void;
        getPickupReach(): Vec3i;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        modifyExpressionValue$ljh000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        populateDefaultEquipmentSlots(arg0: Internal.RandomSource_, arg1: Internal.DifficultyInstance_): void;
        completeUsingItem(): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        vb$canBeLeashed(entity: Internal.Entity_): boolean;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        abstract getNoHoney(): number;
        bettercombat$getAttackStrengthScale(arg0: number): number;
        rideTick(): void;
        getSwipes(): number;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        handleAttributes(arg0: number): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        modifyExpressionValue$hmh001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        callShouldStayCloseToLeashHolder(): boolean;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        handler$fje000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        updateNavigationRegistration(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        biomancy$setDimensions(arg0: Internal.EntityDimensions_): void;
        handler$eei000$biomancy$onGetAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        registerGoals(): void;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        addBehaviourGoals(): void;
        handler$fko000$goety$fireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        setRollInvulnerableTicks(ticks: number): void;
        handler$hml00c$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        removeEffectParticles(): void;
        revive(): void;
        vb$isLeashed(): boolean;
        getBbWidth(): number;
        callSetRot(arg0: number, arg1: number): void;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        updateNoActionTime(): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): net.minecraft.network.chat.Component;
        handler$iep001$relics$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        elytratrims$markGui(): void;
        getTicksRequiredToFreeze(): number;
        shouldDespawnInPeaceful(): boolean;
        vb$supportQuadLeash(): boolean;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        isPreserved(): boolean;
        artifacts$getPocketPistonLength(): number;
        handler$kae000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        setKnockbackMultiplier_BetterCombat(value: number): void;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        maxhealthfix$setRestorePoint(arg0: number): void;
        checkBedExists(): boolean;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        abstract isUrsa(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        setSpawnType(arg0: Internal.MobSpawnType_): void;
        handler$iem000$relics$setWet(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        restoreLeashFromSave(): void;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        handler$flc001$goety$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        handler$iem000$relics$getBlockSpeedFactor(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        handler$fim000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        redirect$cel000$attributeslib$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        vb$leashTooFarBehaviour(): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        redirect$cel000$attributeslib$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        getMovementEmission(): Internal.Entity$MovementEmission;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        getMagneticDeltaY(): number;
        localvar$iem001$relics$fluidCollision(arg0: Vec3d_): Vec3d;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        setDynamicLightEnabled(arg0: boolean): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        tickEffects(): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        handler$hmj000$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setPreserved(arg0: boolean): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        playerAnimator_setAnimation(arg0: ResourceLocation_, arg1: Internal.IAnimation_): Internal.IAnimation;
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        get XRot(): number
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set canBreakDoors(arg0: boolean)
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        get soulSpeedBlock(): boolean
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get playingEndimation(): Internal.PlayableEndimation
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get blockY(): number
        get spectator(): boolean
        get freezingFromFrostmint(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        set animator(arg0: Internal.AzAnimator_<any, any>)
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get webbed(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get swipeDelay(): number
        get killCredit(): Internal.LivingEntity
        get defaultLootTable(): ResourceLocation
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        set noHoney(arg0: number)
        get ticksFrozen(): number
        get dynamicLightZ(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get lastHurtByPlayer(): Internal.Player
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get sunBurnTick(): boolean
        get affectedByFluids(): boolean
        get ambientSound(): Internal.SoundEvent
        set deltaMovement(arg0: Vec3d_)
        get skull(): Internal.ItemStack
        get baby(): boolean
        set fireType(arg0: ResourceLocation_)
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get stepSound(): Internal.SoundEvent
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get dimensions(): Internal.EntityDimensions
        set lootTable(arg0: ResourceLocation_)
        set webbed(arg0: boolean)
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        get jumping(): boolean
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get motions(): Internal.Stack<any>
        get fireImmuneTicks(): number
        get attributes(): Internal.AttributeMap
        set magneticDeltaY(arg0: number)
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        set useItemRemaining(arg0: number)
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get targetSelector(): Internal.GoalSelector
        set registeredToWorld(arg0: Internal.PathNavigation_)
        get sleeping(): boolean
        set dataMap(arg0: Internal.Map_<any, any>)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set swipeDelay(arg0: number)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        get fireType(): ResourceLocation
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get YRot(): number
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get goalSelector(): Internal.GoalSelector
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        get underWaterConverting(): boolean
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get dirty(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        set YRot(arg0: number)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        set chestArmorItem(item: Internal.ItemStack_)
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        set animationTick(arg0: number)
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        set frostmintFreezing(arg0: boolean)
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaX(): number
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        set magneticAttachmentFace(arg0: Internal.Direction_)
        get noEndimationPlaying(): boolean
        get prevMagneticAttachmentFace(): Internal.Direction
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set comboCount(arg0: number)
        get active(): boolean
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set slowFallingFlag(arg0: boolean)
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get animationStack(): Internal.AnimationStack
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get possessedByWatcher(): boolean
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        set chopData(arg0: Internal.SyncedChopData_)
        get forward(): Vec3d
        get comboCount(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get dirtyEntries(): Internal.Set<any>
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get chopData(): Internal.SyncedChopData
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get currentAttack(): Internal.AttackHand
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get living(): boolean
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
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get lastHurtByPlayerTime(): number
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get weaponSwingInProgress(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        get rewinding(): boolean
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        set swipes(arg0: number)
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set XRot(arg0: number)
        get sunSensitive(): boolean
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get pos(): Internal.Position
        get customName(): net.minecraft.network.chat.Component
        get effectHandler(): Internal.EndimationEffectHandler
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get animationTick(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get currentSwingDuration(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get pickupReach(): Vec3i
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set citadelEntityData(arg0: Internal.CompoundTag_)
        set magneticDeltaZ(arg0: number)
        get immobile(): boolean
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get noHoney(): number
        get swipes(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        set rollInvulnerableTicks(ticks: number)
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get preserved(): boolean
        set knockbackMultiplier_BetterCombat(value: number)
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get ursa(): boolean
        set spawnType(arg0: Internal.MobSpawnType_)
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        set id(arg0: number)
        get horizontalFacing(): Internal.Direction
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get dynamicLightWorld(): Internal.Level
        get magneticAttachmentFace(): Internal.Direction
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get movementEmission(): Internal.Entity$MovementEmission
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        set dynamicLightEnabled(arg0: boolean)
        get restrictRadius(): number
        get registeredNavigation(): Internal.PathNavigation
        get invertedHealAndHarm(): boolean
        get endimatedState(): Internal.Endimatable$EndimatedState
        set preserved(arg0: boolean)
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly ZOMBIE_LEADER_CHANCE: (0.05) & (number);
        static readonly BABY_EYE_HEIGHT_ADJUSTMENT: (0.81) & (number);
        static readonly REINFORCEMENT_RANGE_MIN: (7) & (number);
        static readonly REINFORCEMENT_RANGE_MAX: (40) & (number);
        static readonly REINFORCEMENT_ATTEMPTS: (50) & (number);
    }
    type Zombie_ = Zombie;
    class FangoftheHoundLeaderItem extends Internal.Item {
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
    type FangoftheHoundLeaderItem_ = FangoftheHoundLeaderItem;
    class LadderBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        handler$kik000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
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
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
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
        static readonly NORTH_AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly SOUTH_AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly AABB_OFFSET: (3.0) & (number);
        static readonly EAST_AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly WEST_AABB: (Internal.VoxelShapeSimpleCube) & (Internal.VoxelShape);
    }
    type LadderBlock_ = LadderBlock;
    abstract class CraftingType {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract findRecipes(arg0: Internal.RecipeManager_, arg1: Internal.Level_): Internal.List<Internal.IGenericRecipe>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type CraftingType_ = CraftingType;
    class SyncedConfigManager extends Internal.SingleConfigManager<xaero.lib.common.config.Config> {
        getClass(): typeof any;
        receiveEditedProfile(arg0: Internal.ConfigProfile_): void;
        getChannel(): Internal.ConfigChannel;
        getConfig(): xaero.lib.common.config.Config;
        resetEdit(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setConfig(arg0: xaero.lib.common.config.Config_): void;
        setSyncingEditedProfile(arg0: boolean): void;
        getDesiredEditedProfileId(): string;
        reset(): void;
        isChannelPresentOnServer(): boolean;
        setDesiredEditedProfileId(arg0: string): void;
        toString(): string;
        getProfileInfoManager(): Internal.SyncedConfigProfileInfoManager;
        getRedirectorManager(): Internal.OptionValueRedirectorManager;
        notifyAll(): void;
        confirmEdit(arg0: Internal.ConfigProfile_): void;
        getEditedProfile(): Internal.ConfigProfile;
        setChangeListener(arg0: Internal.IConfigChangeListener_): void;
        setChannel(arg0: Internal.ConfigChannel_): void;
        getEffective<T>(arg0: Internal.ConfigOption_<T>): T;
        hashCode(): number;
        setSynchronizer(arg0: Internal.ClientConfigChannelSynchronizer_): void;
        confirmChannelPresenceOnServer(): void;
        wait(): void;
        setRedirectorManager(arg0: Internal.OptionValueRedirectorManager_): void;
        wait(arg0: number): void;
        isSyncingEditedProfile(): boolean;
        equals(arg0: any): boolean;
        getConfigId(): string;
        get class(): typeof any
        get channel(): Internal.ConfigChannel
        get config(): xaero.lib.common.config.Config
        set config(arg0: xaero.lib.common.config.Config_)
        set syncingEditedProfile(arg0: boolean)
        get desiredEditedProfileId(): string
        get channelPresentOnServer(): boolean
        set desiredEditedProfileId(arg0: string)
        get profileInfoManager(): Internal.SyncedConfigProfileInfoManager
        get redirectorManager(): Internal.OptionValueRedirectorManager
        get editedProfile(): Internal.ConfigProfile
        set changeListener(arg0: Internal.IConfigChangeListener_)
        set channel(arg0: Internal.ConfigChannel_)
        set synchronizer(arg0: Internal.ClientConfigChannelSynchronizer_)
        set redirectorManager(arg0: Internal.OptionValueRedirectorManager_)
        get syncingEditedProfile(): boolean
        get configId(): string
    }
    type SyncedConfigManager_ = SyncedConfigManager;
    class UpgradeNextTierRecipe extends Internal.ShapedRecipe implements Internal.IWrapperRecipe<Internal.ShapedRecipe> {
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
        getCompose(): Internal.ShapedRecipe;
        getWidth(): number;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static setCraftingSize(arg0: number, arg1: number): void;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
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
        get compose(): Internal.ShapedRecipe
        get width(): number
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
    type UpgradeNextTierRecipe_ = UpgradeNextTierRecipe;
    class Enchantment$Rarity extends Internal.Enum<Internal.Enchantment$Rarity> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Enchantment$Rarity>>;
        notifyAll(): void;
        compareTo(arg0: Internal.Enchantment$Rarity_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.Enchantment$Rarity;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Enchantment$Rarity[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getWeight(): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.world.item.enchantment.Enchantment$Rarity)"(arg0: Internal.Enchantment$Rarity_): number;
        static valueOf(arg0: string): Internal.Enchantment$Rarity;
        get class(): typeof any
        get declaringClass(): typeof Internal.Enchantment$Rarity
        get weight(): number
        static readonly VERY_RARE: (Internal.Enchantment$Rarity) & (Internal.Enchantment$Rarity);
        static readonly RARE: (Internal.Enchantment$Rarity) & (Internal.Enchantment$Rarity);
        static readonly UNCOMMON: (Internal.Enchantment$Rarity) & (Internal.Enchantment$Rarity);
        static readonly COMMON: (Internal.Enchantment$Rarity) & (Internal.Enchantment$Rarity);
    }
    type Enchantment$Rarity_ = "uncommon" | "rare" | "common" | "very_rare" | Enchantment$Rarity;
    class PureBloodItem extends Internal.Item {
        constructor(arg0: number)
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
        getCustomName(): net.minecraft.network.chat.Component;
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
        static getBloodItemForLevel(arg0: number): Internal.PureBloodItem;
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
        getLevel(): number;
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
        get customName(): net.minecraft.network.chat.Component
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
        get level(): number
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
        static readonly COUNT: (5) & (number);
    }
    type PureBloodItem_ = PureBloodItem;
    class VerticalAnchor$BelowTop extends Internal.Record implements Internal.VerticalAnchor {
        constructor(arg0: number)
        getClass(): typeof any;
        static aboveBottom(arg0: number): Internal.VerticalAnchor;
        toString(): string;
        static belowTop(arg0: number): Internal.VerticalAnchor;
        static bottom(): Internal.VerticalAnchor;
        notifyAll(): void;
        resolveY(arg0: Internal.WorldGenerationContext_): number;
        notify(): void;
        offset(): number;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static absolute(arg0: number): Internal.VerticalAnchor;
        wait(): void;
        static top(): Internal.VerticalAnchor;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.VerticalAnchor$BelowTop>;
    }
    type VerticalAnchor$BelowTop_ = VerticalAnchor$BelowTop;
    interface IAgeableAccessor {
        abstract getHeadParts(): Internal.Iterable<Internal.ModelPart>;
        abstract getBodyParts(): Internal.Iterable<Internal.ModelPart>;
        abstract getBabyYHeadOffset(): number;
        abstract getBabyZHeadOffset(): number;
        abstract getBabyBodyScale(): number;
        abstract isScaleHead(): boolean;
        abstract getBodyYOffset(): number;
        abstract getBabyHeadScale(): number;
        get headParts(): Internal.Iterable<Internal.ModelPart>
        get bodyParts(): Internal.Iterable<Internal.ModelPart>
        get babyYHeadOffset(): number
        get babyZHeadOffset(): number
        get babyBodyScale(): number
        get scaleHead(): boolean
        get bodyYOffset(): number
        get babyHeadScale(): number
    }
    type IAgeableAccessor_ = IAgeableAccessor;
    interface IManagedAnimal <T extends Internal.Animal> {
        abstract setManagedAnimalId(arg0: number): void;
        abstract getManagedAnimalId(): number;
        abstract setAnimalData(arg0: Internal.IAnimalData_): void;
        abstract getAnimalDataView(): Internal.IAnimalDataView;
        getOffsetTicks(): number;
        abstract getAnimalData(): Internal.IAnimalData;
        abstract getEntity(): T;
        abstract getAnimalIdAccessor(): Internal.EntityDataAccessor<number>;
        abstract setColonyId(arg0: number): void;
        abstract getColonyIdAccessor(): Internal.EntityDataAccessor<number>;
        abstract getColonyId(): number;
        set managedAnimalId(arg0: number)
        get managedAnimalId(): number
        set animalData(arg0: Internal.IAnimalData_)
        get animalDataView(): Internal.IAnimalDataView
        get offsetTicks(): number
        get animalData(): Internal.IAnimalData
        get entity(): T
        get animalIdAccessor(): Internal.EntityDataAccessor<number>
        set colonyId(arg0: number)
        get colonyIdAccessor(): Internal.EntityDataAccessor<number>
        get colonyId(): number
    }
    type IManagedAnimal_<T extends Internal.Animal> = IManagedAnimal<T>;
    class CategoryArgumentType$Serializer$Properties implements Internal.ArgumentTypeInfo$Template<Internal.CategoryArgumentType> {
        constructor(this$0: Internal.CategoryArgumentType$Serializer_, onlyWithExperience: boolean)
        getClass(): typeof any;
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        type(): Internal.ArgumentTypeInfo<Internal.CategoryArgumentType, any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        createType(commandRegistryAccess: Internal.CommandBuildContext_): Internal.CategoryArgumentType;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type CategoryArgumentType$Serializer$Properties_ = CategoryArgumentType$Serializer$Properties;
    class Excluder implements Internal.TypeAdapterFactory, Internal.Cloneable {
        constructor()
        getClass(): typeof any;
        excludeField(arg0: Internal.Field_, arg1: boolean): boolean;
        toString(): string;
        withModifiers(...arg0: number[]): this;
        notifyAll(): void;
        disableInnerClassSerialization(): this;
        create<T>(arg0: Internal.Gson_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        withVersion(arg0: number): this;
        excludeClass(arg0: typeof any, arg1: boolean): boolean;
        hashCode(): number;
        withExclusionStrategy(arg0: Internal.ExclusionStrategy_, arg1: boolean, arg2: boolean): this;
        wait(): void;
        wait(arg0: number): void;
        excludeFieldsWithoutExposeAnnotation(): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly DEFAULT: (Internal.Excluder) & (Internal.Excluder);
    }
    type Excluder_ = Excluder;
    class SpinAttackType extends Internal.Record {
        constructor(textureId: ResourceLocation_, fullbright: boolean)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        fullbright(): boolean;
        textureId(): ResourceLocation;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly RIPTIDE: (Internal.SpinAttackType) & (Internal.SpinAttackType);
        static readonly LIGHTNING: (Internal.SpinAttackType) & (Internal.SpinAttackType);
        static readonly FIRE: (Internal.SpinAttackType) & (Internal.SpinAttackType);
    }
    type SpinAttackType_ = SpinAttackType;
    class GoldenPureeItem extends Internal.Item {
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
    type GoldenPureeItem_ = GoldenPureeItem;
    class NormalNoise$NoiseParameters extends Internal.Record {
        constructor(arg0: number, arg1: Internal.DoubleList_)
        constructor(arg0: number, arg1: number, ...arg2: number[])
        constructor(arg0: number, arg1: Internal.List_<number>)
        getClass(): typeof any;
        hashCode(): number;
        amplitudes(): Internal.DoubleList;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        firstOctave(): number;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly DIRECT_CODEC: Internal.Codec<Internal.NormalNoise$NoiseParameters>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.NormalNoise$NoiseParameters>>;
    }
    type NormalNoise$NoiseParameters_ = Special.Noise | NormalNoise$NoiseParameters;
    interface HolderGetter <T> {
        abstract "get(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<T>): Internal.Optional<Internal.HolderSet$Named<T>>;
        abstract get(arg0: Internal.TagKey_<T>): Internal.Optional<Internal.HolderSet$Named<T>>;
        "getOrThrow(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
        abstract "get(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<T>): Internal.Optional<Internal.Holder$Reference<T>>;
        abstract get(arg0: Internal.ResourceKey_<T>): Internal.Optional<Internal.Holder$Reference<T>>;
        "getOrThrow(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        getOrThrow(arg0: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        getOrThrow(arg0: Internal.ResourceKey_<T>): Internal.Holder$Reference<T>;
    }
    type HolderGetter_<T> = HolderGetter<T>;
    class ConsumableItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: boolean)
        constructor(arg0: Internal.Item$Properties_)
        constructor(arg0: Internal.Item$Properties_, arg1: boolean, arg2: boolean)
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
    type ConsumableItem_ = ConsumableItem;
    class ConditionalRecipe$Serializer <T extends Internal.Recipe<any>> implements Internal.RecipeSerializer<T> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): T;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        wait(): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): T;
        wait(arg0: number): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ConditionalRecipe$Serializer_<T extends Internal.Recipe<any>> = ConditionalRecipe$Serializer<T>;
    class ThrowableBrewItem extends Internal.BrewItem {
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
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
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
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
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
    type ThrowableBrewItem_ = ThrowableBrewItem;
    class GeneratedListRecipe <R extends Internal.IESerializableRecipe, E> extends Internal.IESerializableRecipe implements Internal.IListRecipe {
        getClass(): typeof any;
        getSubSerializer(): ResourceLocation;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        static resolved(arg0: ResourceLocation_, arg1: Internal.List_<Internal.IESerializableRecipe>): Internal.GeneratedListRecipe<any, any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getSubRecipes(): Internal.List<Internal.IESerializableRecipe>;
        equals(arg0: any): boolean;
        static of(arg0: Internal.ItemStack_): net.minecraftforge.common.util.Lazy<Internal.ItemStack>;
        static from(arg0: ResourceLocation_): Internal.GeneratedListRecipe<any, any>;
        get class(): typeof any
        get subSerializer(): ResourceLocation
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get subRecipes(): Internal.List<Internal.IESerializableRecipe>
        static SERIALIZER: Internal.RegistryObject<Internal.IERecipeSerializer<Internal.GeneratedListRecipe<any, any>>>;
        static LIST_GENERATORS: ({[key: ResourceLocation]: Internal.GeneratedListRecipe$RecipeListGenerator<any, any>, [key: ResourceLocation]: Internal.GeneratedListRecipe$RecipeListGenerator<any, any>, [key: ResourceLocation]: Internal.GeneratedListRecipe$RecipeListGenerator<any, any>}) & (Internal.Map<ResourceLocation, Internal.GeneratedListRecipe$RecipeListGenerator<any, any>>);
    }
    type GeneratedListRecipe_<R extends Internal.IESerializableRecipe, E> = GeneratedListRecipe<R, E>;
    class CauldronBlock extends Internal.AbstractCauldronBlock {
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
        receiveStalactiteDrip(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Fluid_): void;
        modifyReturnValue$lde000$amendments$use(original: Internal.InteractionResult_, state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, stack: Internal.ItemStack_): Internal.InteractionResult;
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
        handler$ldl000$amendments$handleModdedFluid(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, fluid: Internal.Fluid_, ci: Internal.CallbackInfo_): void;
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
        handler$ldl000$amendments$TweakLava(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, fluid: Internal.Fluid_, ci: Internal.CallbackInfo_): void;
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
        canReceiveStalactiteDrip(arg0: Internal.Fluid_): boolean;
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
        botania_getInteractions(): Internal.Map<any, any>;
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
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getContentHeight(arg0: Internal.BlockState_): number;
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
        static shouldHandlePrecipitation(arg0: Internal.Level_, arg1: Internal.Biome$Precipitation_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isFull(arg0: Internal.BlockState_): boolean;
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
        isEntityInsideContent(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.Entity_): boolean;
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
    }
    type CauldronBlock_ = CauldronBlock;
}
declare namespace net.p3pp3rf1y.sophisticatedcore.inventory {
    class ItemStackKey {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static of(arg0: Internal.ItemStack_): net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey;
        hashCode(): number;
        getStack(): Internal.ItemStack;
        static canItemStacksStack(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static clearCache(): void;
        matches(arg0: Internal.ItemStack_): boolean;
        stack(): Internal.ItemStack;
        hashCodeNotEquals(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        static getHashCode(arg0: Internal.ItemStack_): number;
        get class(): typeof any
        get stack(): Internal.ItemStack
    }
    type ItemStackKey_ = ItemStackKey;
}
declare namespace com.blackgear.platform.core.mixin.access {
    interface CameraAccessor {
        abstract getLevel(): Internal.BlockGetter;
        abstract setYRot(arg0: number): void;
        abstract setXRot(arg0: number): void;
        get level(): Internal.BlockGetter
        set YRot(arg0: number)
        set XRot(arg0: number)
    }
    type CameraAccessor_ = CameraAccessor;
}
declare namespace com.mojang.datafixers.util {
    class Pair <F, S> implements Internal.App<Internal.Pair$Mu<S>, F> {
        constructor(arg0: F, arg1: S)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static toMap<F, S>(): Internal.Collector<com.mojang.datafixers.util.Pair<F, S>, any, Internal.Map<F, S>>;
        mapSecond<S2>(arg0: Internal.Function_<S, S2>): com.mojang.datafixers.util.Pair<F, S2>;
        getSecond(): S;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getFirst(): F;
        hashCode(): number;
        static unbox<F, S>(arg0: Internal.App_<Internal.Pair$Mu<S>, F>): com.mojang.datafixers.util.Pair<F, S>;
        wait(): void;
        mapFirst<F2>(arg0: Internal.Function_<F, F2>): com.mojang.datafixers.util.Pair<F2, S>;
        wait(arg0: number): void;
        static of<F, S>(arg0: F, arg1: S): com.mojang.datafixers.util.Pair<F, S>;
        swap(): com.mojang.datafixers.util.Pair<S, F>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get second(): S
        get first(): F
    }
    type Pair_<F, S> = Pair<F, S>;
}
declare namespace it.unimi.dsi.fastutil.doubles {
    interface DoublePredicate extends Internal.DoublePredicate, Internal.Predicate<number> {
        /**
         * @deprecated
        */
        or(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        "or(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        /**
         * @deprecated
        */
        "and(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract test(arg0: number): boolean;
        "and(it.unimi.dsi.fastutil.doubles.DoublePredicate)"(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
        /**
         * @deprecated
        */
        and(arg0: Internal.Predicate_<number>): Internal.Predicate<number>;
        and(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        abstract "test(double)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        test(arg0: number): boolean;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        or(arg0: Internal.DoublePredicate_): this;
        /**
         * @deprecated
        */
        test(arg0: any): boolean;
        "or(it.unimi.dsi.fastutil.doubles.DoublePredicate)"(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
        or(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
        /**
         * @deprecated
        */
        "test(java.lang.Object)"(arg0: any): boolean;
        "or(java.util.function.DoublePredicate)"(arg0: Internal.DoublePredicate_): this;
        negate(): Internal.DoublePredicate;
        /**
         * @deprecated
        */
        "test(java.lang.Double)"(arg0: number): boolean;
        "and(java.util.function.DoublePredicate)"(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        and(arg0: it.unimi.dsi.fastutil.doubles.DoublePredicate_): this;
    }
    type DoublePredicate_ = DoublePredicate;
}
