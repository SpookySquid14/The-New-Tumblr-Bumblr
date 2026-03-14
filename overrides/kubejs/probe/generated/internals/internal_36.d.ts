/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    interface AnimationController$SoundKeyframeHandler <A extends Internal.GeoAnimatable> {
        abstract handle(arg0: Internal.SoundKeyframeEvent_<A>): void;
        (arg0: Internal.SoundKeyframeEvent<A>): void;
    }
    type AnimationController$SoundKeyframeHandler_<A extends Internal.GeoAnimatable> = AnimationController$SoundKeyframeHandler<A> | ((arg0: Internal.SoundKeyframeEvent<A>)=> void);
    class SynchedEntityData$DataValue <T> extends Internal.Record {
        constructor(id: number, serializer: Internal.EntityDataSerializer_<T>, value: T)
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        value(): T;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        id(): number;
        wait(): void;
        serializer(): Internal.EntityDataSerializer<T>;
        wait(arg0: number): void;
        static create<T>(arg0: Internal.EntityDataAccessor_<T>, arg1: T): Internal.SynchedEntityData$DataValue<T>;
        static read(arg0: Internal.FriendlyByteBuf_, arg1: number): Internal.SynchedEntityData$DataValue<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SynchedEntityData$DataValue_<T> = SynchedEntityData$DataValue<T>;
    interface ScreenMouseEvents$AfterMouseScroll {
        abstract afterMouseScroll(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type ScreenMouseEvents$AfterMouseScroll_ = ((arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number)=> void) | ScreenMouseEvents$AfterMouseScroll;
    class StunningStrikeMobEffect extends Internal.MobEffect {
        constructor()
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        isInstantenous(): boolean;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getColor(): number;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type StunningStrikeMobEffect_ = StunningStrikeMobEffect;
    class FallingButton extends Internal.AbstractSmallButton {
        constructor(arg0: boolean, arg1: Internal.BlockBehaviour$Properties_, arg2: boolean)
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        updateNeighbors(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
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
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        getPressDuration(): number;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
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
        static getConnectedDirection(arg0: Internal.BlockState_): Internal.Direction;
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
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        powerBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
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
        get pressDuration(): number
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
        gravel: boolean;
    }
    type FallingButton_ = FallingButton;
    abstract class ImmutableList <E> extends Internal.ImmutableCollection<E> implements Internal.RandomAccess, Internal.List<E> {
        static builder<E>(): Internal.ImmutableList$Builder<E>;
        static copyOf<E>(arg0: E[]): Internal.ImmutableList<E>;
        reverse(): this;
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
        static "copyOf(java.lang.Iterable)"<E>(arg0: Internal.Iterable_<E>): Internal.ImmutableList<E>;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        static of<E>(arg0: E, arg1: E): Internal.ImmutableList<E>;
        getClass(): typeof any;
        abstract get(arg0: number): E;
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
        listIterator(arg0: number): Internal.ListIterator<any>;
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
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        static "copyOf(java.lang.Object[])"<E>(arg0: E[]): Internal.ImmutableList<E>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E): Internal.ImmutableList<E>;
        abstract toArray(): any[];
        /**
         * @deprecated
        */
        asList(): this;
        subList(arg0: number, arg1: number): Internal.List<any>;
        hashCode(): number;
        abstract size(): number;
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
    type ImmutableList_<E> = ImmutableList<E>;
    class SpellResolveEvent extends net.minecraftforge.eventbus.api.Event {
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
        resolver: Internal.SpellResolver;
        world: Internal.Level;
        shooter: Internal.LivingEntity;
        spell: Internal.Spell;
        context: Internal.SpellContext;
        rayTraceResult: Internal.HitResult;
    }
    type SpellResolveEvent_ = SpellResolveEvent;
    interface MushroomCowAccessor {
        abstract setEffect(arg0: Internal.MobEffect_): void;
        abstract getEffect(): Internal.MobEffect;
        abstract getEffectDuration(): number;
        abstract setEffectDuration(arg0: number): void;
        set effect(arg0: Internal.MobEffect_)
        get effect(): Internal.MobEffect
        get effectDuration(): number
        set effectDuration(arg0: number)
    }
    type MushroomCowAccessor_ = MushroomCowAccessor;
    interface IModuleContainerView {
        abstract getModuleView(arg0: number): Internal.IBuildingModuleView;
        abstract getAllModuleViews(): Internal.List<Internal.IBuildingModuleView>;
        abstract getModuleViewByType<T extends Internal.IBuildingModuleView>(arg0: T): T;
        abstract "getModuleView(com.minecolonies.api.colony.buildings.registry.BuildingEntry$ModuleProducer)"<M extends Internal.IBuildingModule, V extends Internal.IBuildingModuleView>(arg0: Internal.BuildingEntry$ModuleProducer_<M, V>): V;
        abstract getModuleViewMatching<T extends Internal.IBuildingModuleView>(arg0: T, arg1: Internal.Predicate_<T>): T;
        abstract getModuleViews<T extends Internal.IBuildingModuleView>(arg0: T): Internal.List<T>;
        abstract "getModuleView(int)"(arg0: number): Internal.IBuildingModuleView;
        abstract registerModule(arg0: Internal.IBuildingModuleView_): void;
        abstract getModuleView<M extends Internal.IBuildingModule, V extends Internal.IBuildingModuleView>(arg0: Internal.BuildingEntry$ModuleProducer_<M, V>): V;
        abstract hasModuleView(arg0: Internal.BuildingEntry$ModuleProducer_<any, any>): boolean;
        get allModuleViews(): Internal.List<Internal.IBuildingModuleView>
    }
    type IModuleContainerView_ = IModuleContainerView;
    class VoidBlossomSummonBlock extends Internal.BaseEntityBlock {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
    type VoidBlossomSummonBlock_ = VoidBlossomSummonBlock;
    interface WeatheringButton extends Internal.WeatheringCopper {
        "getFirst(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Block;
        getPrevious(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        "getNext(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        wax(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.ItemStack_): Internal.InteractionResult;
        getFirst(arg0: Internal.Block_): Internal.Block;
        getNext(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getUnwaxed(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        "getFirst(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.BlockState;
        getFirst(arg0: Internal.BlockState_): Internal.BlockState;
        "getNext(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getSticky(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        applyChangeOverTime(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getUnsticky(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getNext(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        scrape(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.ItemStack_): Internal.InteractionResult;
        abstract getAge(): Internal.WeatheringCopper$WeatherState;
        "getPrevious(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        getPrevious(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        onRandomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getWaxed(arg0: Internal.BlockState_): Internal.Optional<Internal.BlockState>;
        "getPrevious(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): Internal.Optional<Internal.Block>;
        getChanceModifier(): number;
        get age(): Internal.WeatheringCopper$WeatherState
        get chanceModifier(): number
        (): Internal.WeatheringCopper$WeatherState_;
    }
    type WeatheringButton_ = WeatheringButton | (()=> Internal.WeatheringCopper$WeatherState_);
    abstract class TableBlock extends Internal.InventoryBlock implements Internal.SimpleWaterloggedBlock {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
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
        abstract newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static dropInventoryItems(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.IItemHandler_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
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
    type TableBlock_ = TableBlock;
    class UraniumRodBlock extends Internal.RotatedPillarBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static getLiquidType(arg0: Internal.FluidState_): number;
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
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
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
        static readonly LIQUID_LOGGED: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type UraniumRodBlock_ = UraniumRodBlock;
    class WidgetLayout$Padding extends Internal.Record {
        constructor(vertical: number, horizontal: number)
        vertical(): number;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        horizontal(): number;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type WidgetLayout$Padding_ = WidgetLayout$Padding;
    class CreateWorldScreen extends Internal.Screen {
        charTyped(arg0: string, arg1: number): boolean;
        onFilesDrop(arg0: Internal.List_<Internal.Path>): void;
        fabric_getAfterRenderEvent(): net.fabricmc.fabric.api.event.Event<any>;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        static m_267821_(arg0: Internal.CreateWorldScreen_, arg1: Internal.GuiEventListener_): void;
        narrationEnabled(): void;
        setFocused(arg0: boolean): void;
        renderDirtBackground(arg0: Internal.GuiGraphics_): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        fabric_getRemoveEvent(): net.fabricmc.fabric.api.event.Event<any>;
        renderWithTooltip(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        static isCut(arg0: number): boolean;
        changeFocus(arg0: Internal.ComponentPath_): void;
        fabric_getAfterTickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        addRenderableWidget<T extends Internal.GuiEventListener & Internal.Renderable & Internal.NarratableEntry>(arg0: T): T;
        static m_267746_(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        invokeAddRenderableWidget_werewolves(arg0: Internal.AbstractWidget_): Internal.AbstractWidget;
        openExperimentsScreen(arg0: Internal.WorldDataConfiguration_): void;
        getFocused(): Internal.GuiEventListener;
        "setTooltipForNextRenderPass(java.util.List,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        fabric_getBeforeMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static createTempDataPackDirFromExistingWorld(arg0: Internal.Path_, arg1: Internal.Minecraft_): Internal.Path;
        static openFresh(arg0: Internal.Minecraft_, arg1: Internal.Screen_): void;
        openLink(arg0: Internal.URI_): void;
        fabric_getAllowKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        createArrowEvent(arg0: Internal.ScreenDirection_): Internal.FocusNavigationEvent$ArrowNavigation;
        handleComponentClicked(arg0: Internal.Style_): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        static findNarratableWidget(arg0: Internal.List_<Internal.NarratableEntry>, arg1: Internal.NarratableEntry_): Internal.Screen$NarratableSearchResult;
        controlling$getRenderables(): Internal.List<any>;
        getTextRenderer(): net.minecraft.client.gui.Font;
        fabric_getBeforeMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        removed(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        addRenderableOnly<T extends Internal.Renderable>(arg0: T): T;
        static isSelectAll(arg0: number): boolean;
        fabric_getAfterMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        shouldCloseOnEsc(): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        m_289588_(arg0: Internal.Runnable_): void;
        fabric_getAfterKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        balm_getRenderables(): Internal.List<any>;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        getRenderables(): Internal.List<any>;
        callAddRenderableWidget(arg0: Internal.GuiEventListener_): Internal.GuiEventListener;
        init(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        modify$ibc001$configured$configuredModifyBlitBackgroundTexture(arg0: ResourceLocation_): ResourceLocation;
        getBackgroundMusic(): Internal.Music;
        getNarrationMessage(): net.minecraft.network.chat.Component;
        static access$500(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        fabric_getBeforeRenderEvent(): net.fabricmc.fabric.api.event.Event<any>;
        shouldNarrateNavigation(): boolean;
        toString(): string;
        handler$hij001$relics$render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number, arg4: Internal.CallbackInfo_): void;
        fabric_getAfterMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        clearFocus(): void;
        handler$bam000$immersiveui$clearScreenParticles(ci: Internal.CallbackInfo_): void;
        notifyAll(): void;
        static isPaste(arg0: number): boolean;
        static hideWidgets(...arg0: Internal.AbstractWidget_[]): void;
        popScreen(): void;
        static access$400(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        afterKeyboardAction(): void;
        static hasControlDown(): boolean;
        "setTooltipForNextRenderPass(java.util.List)"(arg0: Internal.List_<Internal.FormattedCharSequence>): void;
        setInitialFocus(arg0: Internal.GuiEventListener_): void;
        getCurrentFocusPath(): Internal.ComponentPath;
        fabric_getAllowKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        balm_getChildren(): Internal.List<any>;
        shouldRunNarration(): boolean;
        wait(arg0: number): void;
        invokeRemoveWidget(arg0: Internal.GuiEventListener_): void;
        static wrapScreenError(arg0: Internal.Runnable_, arg1: string, arg2: string): void;
        afterMouseAction(): void;
        updateNarrationState(arg0: Internal.NarrationElementOutput_): void;
        getMinecraft(): Internal.Minecraft;
        removeWidget(arg0: Internal.GuiEventListener_): void;
        suppressNarration(arg0: number): void;
        static getTooltipFromItem(arg0: Internal.Minecraft_, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        confirmLink(arg0: boolean): void;
        notify(): void;
        callAddWidget(arg0: Internal.GuiEventListener_): Internal.GuiEventListener;
        handler$hnm000$yeetusexperimentus$onTryApplyNewDataPacks(arg0: Internal.PackRepository_, arg1: boolean, arg2: Internal.Consumer_<any>, arg3: Internal.CallbackInfo_, arg4: Internal.List_<any>, arg5: Internal.List_<any>, arg6: Internal.WorldDataConfiguration_): void;
        static m_169404_(arg0: string): string;
        insertText(arg0: string, arg1: boolean): void;
        afterMouseMove(): void;
        clearWidgets(): void;
        static getExtensions(screen: Internal.Screen_): Internal.ScreenExtensions;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        "setTooltipForNextRenderPass(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): void;
        static isCopy(arg0: number): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        handler$hij015$relics$tick(arg0: Internal.CallbackInfo_): void;
        fabric_getButtons(): Internal.List<any>;
        tick(): void;
        isPauseScreen(): boolean;
        getClient(): Internal.Minecraft;
        setDragging(arg0: boolean): void;
        wait(): void;
        getTitle(): net.minecraft.network.chat.Component;
        fabric_getBeforeMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        m_289587_(arg0: Internal.Runnable_): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getNarratables(): Internal.List<any>;
        fabric_getBeforeKeyPressEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static m_267793_(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        fabric_getAfterKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static hasAltDown(): boolean;
        static access$600(arg0: Internal.CreateWorldScreen_): net.minecraft.client.gui.Font;
        renderBackground(arg0: Internal.GuiGraphics_): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number, arg1: number): void;
        onClose(): void;
        addWidget<T extends Internal.GuiEventListener & Internal.NarratableEntry>(arg0: T): T;
        fabric_getAllowMouseReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static hasShiftDown(): boolean;
        repositionElements(): void;
        scheduleNarration(arg0: number, arg1: boolean): void;
        balm_getNarratables(): Internal.List<any>;
        fabric_getBeforeTickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        fabric_getAfterMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        updateNarratedWidget(arg0: Internal.NarrationElementOutput_): void;
        rebuildWidgets(): void;
        isValidCharacterForName(arg0: string, arg1: string, arg2: number): boolean;
        getUiState(): Internal.WorldCreationUiState;
        "setTooltipForNextRenderPass(net.minecraft.client.gui.components.Tooltip,net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner,boolean)"(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        init(): void;
        static createFromExisting(arg0: Internal.Minecraft_, arg1: Internal.Screen_, arg2: Internal.LevelSettings_, arg3: Internal.WorldCreationContext_, arg4: Internal.Path_): Internal.CreateWorldScreen;
        resize(arg0: Internal.Minecraft_, arg1: number, arg2: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        openDataPackSelectionScreen(arg0: Internal.WorldDataConfiguration_): void;
        setTooltipForNextRenderPass(arg0: net.minecraft.network.chat.Component_): void;
        "setFocused(boolean)"(arg0: boolean): void;
        setTooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        addEventWidget(arg0: Internal.GuiEventListener_): void;
        fabric_getBeforeKeyReleaseEvent(): net.fabricmc.fabric.api.event.Event<any>;
        getFont(): net.minecraft.client.gui.Font;
        hashCode(): number;
        runNarration(arg0: boolean): void;
        fabric_getAllowMouseScrollEvent(): net.fabricmc.fabric.api.event.Event<any>;
        static m_267796_(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        callAddRenderableOnly(arg0: Internal.Renderable_): Internal.Renderable;
        added(): void;
        handleDelayedNarration(): void;
        equals(arg0: any): boolean;
        createTabEvent(): Internal.FocusNavigationEvent$TabNavigation;
        triggerImmediateNarration(arg0: boolean): void;
        static access$300(arg0: Internal.CreateWorldScreen_): Internal.Minecraft;
        setTooltipForNextRenderPass(arg0: Internal.Tooltip_, arg1: Internal.ClientTooltipPositioner_, arg2: boolean): void;
        fabric_getAllowMouseClickEvent(): net.fabricmc.fabric.api.event.Event<any>;
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        set focused(arg0: boolean)
        set tooltipForNextRenderPass(arg0: Internal.List_<Internal.FormattedCharSequence>)
        get focused(): Internal.GuiEventListener
        get textRenderer(): net.minecraft.client.gui.Font
        get dragging(): boolean
        get class(): typeof any
        get focused(): boolean
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        get renderables(): Internal.List<any>
        get backgroundMusic(): Internal.Music
        get narrationMessage(): net.minecraft.network.chat.Component
        set "tooltipForNextRenderPass(java.util.List)"(arg0: Internal.List_<Internal.FormattedCharSequence>)
        set initialFocus(arg0: Internal.GuiEventListener_)
        get currentFocusPath(): Internal.ComponentPath
        get minecraft(): Internal.Minecraft
        get rectangle(): Internal.ScreenRectangle
        set "tooltipForNextRenderPass(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_)
        get pauseScreen(): boolean
        get client(): Internal.Minecraft
        set dragging(arg0: boolean)
        get title(): net.minecraft.network.chat.Component
        get narratables(): Internal.List<any>
        get uiState(): Internal.WorldCreationUiState
        set tooltipForNextRenderPass(arg0: net.minecraft.network.chat.Component_)
        set "focused(boolean)"(arg0: boolean)
        get font(): net.minecraft.client.gui.Font
        static readonly ALLOW_CHEATS_INFO: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        static readonly LIGHT_DIRT_BACKGROUND: (ResourceLocation) & (ResourceLocation);
        static readonly NAME_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        static readonly GAME_MODEL_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        readonly uiState: Internal.WorldCreationUiState;
        static readonly FOOTER_SEPERATOR: (ResourceLocation) & (ResourceLocation);
        static readonly HEADER_SEPERATOR: (ResourceLocation) & (ResourceLocation);
        static readonly EXPERIMENTS_LABEL: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
    }
    type CreateWorldScreen_ = CreateWorldScreen;
    interface ResourceManagerReloadListener extends Internal.PreparableReloadListener {
        getName(): string;
        abstract onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
        (arg0: Internal.ResourceManager): void;
    }
    type ResourceManagerReloadListener_ = ((arg0: Internal.ResourceManager)=> void) | ResourceManagerReloadListener;
    class DecimalFormat extends Internal.NumberFormat {
        constructor()
        constructor(arg0: string, arg1: Internal.DecimalFormatSymbols_)
        constructor(arg0: string)
        setDecimalSeparatorAlwaysShown(arg0: boolean): void;
        format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        parse(arg0: string, arg1: Internal.ParsePosition_): number;
        static getCompactNumberInstance(): Internal.NumberFormat;
        setMaximumIntegerDigits(arg0: number): void;
        getPositiveSuffix(): string;
        setNegativeSuffix(arg0: string): void;
        parse(arg0: string): number;
        setParseIntegerOnly(arg0: boolean): void;
        static getAvailableLocales(): Internal.Locale[];
        notify(): void;
        "format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        setGroupingUsed(arg0: boolean): void;
        setNegativePrefix(arg0: string): void;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        setMaximumFractionDigits(arg0: number): void;
        applyPattern(arg0: string): void;
        applyLocalizedPattern(arg0: string): void;
        setPositiveSuffix(arg0: string): void;
        static getInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        setRoundingMode(arg0: Internal.RoundingMode_): void;
        static getInstance(): Internal.NumberFormat;
        setCurrency(arg0: Internal.Currency_): void;
        isDecimalSeparatorAlwaysShown(): boolean;
        "format(double)"(arg0: number): string;
        getMaximumIntegerDigits(): number;
        toPattern(): string;
        isGroupingUsed(): boolean;
        "format(long,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        static getCurrencyInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        isParseIntegerOnly(): boolean;
        toLocalizedPattern(): string;
        setPositivePrefix(arg0: string): void;
        setMinimumIntegerDigits(arg0: number): void;
        format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getNegativeSuffix(): string;
        static getCompactNumberInstance(arg0: Internal.Locale_, arg1: Internal.NumberFormat$Style_): Internal.NumberFormat;
        static getNumberInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        setMinimumFractionDigits(arg0: number): void;
        getNegativePrefix(): string;
        wait(): void;
        "format(long)"(arg0: number): string;
        setGroupingSize(arg0: number): void;
        static getIntegerInstance(): Internal.NumberFormat;
        getPositivePrefix(): string;
        getRoundingMode(): Internal.RoundingMode;
        clone(): any;
        getClass(): typeof any;
        format(arg0: number): string;
        isParseBigDecimal(): boolean;
        parseObject(arg0: string): any;
        parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        wait(arg0: number, arg1: number): void;
        static getPercentInstance(): Internal.NumberFormat;
        getGroupingSize(): number;
        format(arg0: number): string;
        getMinimumIntegerDigits(): number;
        "format(double,java.lang.StringBuffer,java.text.FieldPosition)"(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        getCurrency(): Internal.Currency;
        getMaximumFractionDigits(): number;
        getDecimalFormatSymbols(): Internal.DecimalFormatSymbols;
        static getPercentInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        static getNumberInstance(): Internal.NumberFormat;
        toString(): string;
        "format(java.lang.Object)"(arg0: any): string;
        notifyAll(): void;
        setMultiplier(arg0: number): void;
        format(arg0: any): string;
        setParseBigDecimal(arg0: boolean): void;
        getMultiplier(): number;
        static getCurrencyInstance(): Internal.NumberFormat;
        hashCode(): number;
        getMinimumFractionDigits(): number;
        static getIntegerInstance(arg0: Internal.Locale_): Internal.NumberFormat;
        wait(arg0: number): void;
        format(arg0: number, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        equals(arg0: any): boolean;
        setDecimalFormatSymbols(arg0: Internal.DecimalFormatSymbols_): void;
        set decimalSeparatorAlwaysShown(arg0: boolean)
        get compactNumberInstance(): Internal.NumberFormat
        set maximumIntegerDigits(arg0: number)
        get positiveSuffix(): string
        set negativeSuffix(arg0: string)
        set parseIntegerOnly(arg0: boolean)
        get availableLocales(): Internal.Locale[]
        set groupingUsed(arg0: boolean)
        set negativePrefix(arg0: string)
        set maximumFractionDigits(arg0: number)
        set positiveSuffix(arg0: string)
        set roundingMode(arg0: Internal.RoundingMode_)
        get instance(): Internal.NumberFormat
        set currency(arg0: Internal.Currency_)
        get decimalSeparatorAlwaysShown(): boolean
        get maximumIntegerDigits(): number
        get groupingUsed(): boolean
        get parseIntegerOnly(): boolean
        set positivePrefix(arg0: string)
        set minimumIntegerDigits(arg0: number)
        get negativeSuffix(): string
        set minimumFractionDigits(arg0: number)
        get negativePrefix(): string
        set groupingSize(arg0: number)
        get integerInstance(): Internal.NumberFormat
        get positivePrefix(): string
        get roundingMode(): Internal.RoundingMode
        get class(): typeof any
        get parseBigDecimal(): boolean
        get percentInstance(): Internal.NumberFormat
        get groupingSize(): number
        get minimumIntegerDigits(): number
        get currency(): Internal.Currency
        get maximumFractionDigits(): number
        get decimalFormatSymbols(): Internal.DecimalFormatSymbols
        get numberInstance(): Internal.NumberFormat
        set multiplier(arg0: number)
        set parseBigDecimal(arg0: boolean)
        get multiplier(): number
        get currencyInstance(): Internal.NumberFormat
        get minimumFractionDigits(): number
        set decimalFormatSymbols(arg0: Internal.DecimalFormatSymbols_)
    }
    type DecimalFormat_ = DecimalFormat;
    interface ScreenEvents$Remove {
        abstract onRemove(arg0: Internal.Screen_): void;
        (arg0: Internal.Screen): void;
    }
    type ScreenEvents$Remove_ = ((arg0: Internal.Screen)=> void) | ScreenEvents$Remove;
    class BreakerSwitchBlock <T> extends Internal.ConnectorBlock<T> {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.RegistryObject_<Internal.BlockEntityType<T>>)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        fillCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        canIEBlockBePlaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        setHasFlavour(arg0: boolean): Internal.IEBaseBlock;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        static areAllReplaceable(arg0: BlockPos_, arg1: BlockPos_, arg2: Internal.BlockPlaceContext_): boolean;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getTicker<T2 extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T2>): Internal.BlockEntityTicker<T2>;
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
        fitsIntoContainer(): boolean;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        hasCustomBlockColours(): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
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
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        hasFlavour(): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onIEBlockPlacedBy(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): void;
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
        screwdriverUseSide(arg0: Internal.Direction_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setHasColours(): Internal.IEEntityBlock<any>;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getRenderColour(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: number): number;
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
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        setHidden(arg0: boolean): Internal.IEBaseBlock;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getNameForFlavour(): string;
        static applyLocationalWaterlogging(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        setLightOpacity(arg0: number): Internal.IEBaseBlock;
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
        isHidden(): boolean;
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
        hammerUseSide(arg0: Internal.Direction_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
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
        set hasFlavour(arg0: boolean)
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
        set hidden(arg0: boolean)
        get nameForFlavour(): string
        set destroySpeed(v: number)
        set lightOpacity(arg0: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get hidden(): boolean
        set hasCollision(arg0: boolean)
    }
    type BreakerSwitchBlock_<T> = BreakerSwitchBlock<T>;
    interface IContentsListener {
        abstract onContentsChanged(): void;
        (): void;
    }
    type IContentsListener_ = IContentsListener | (()=> void);
    class TextureUploader {
        constructor(arg0: any_, arg1: any_, arg2: any_, arg3: any_, arg4: any_, arg5: any_, arg6: any_)
        getClass(): typeof any;
        requestSubsequentNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): number;
        toString(): string;
        finishNewestRequestImmediately(): void;
        notifyAll(): void;
        requestNormal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): number;
        requestUpload(arg0: Internal.TextureUpload_): number;
        requestBranchDownload(arg0: number, arg1: number, arg2: number, arg3: number): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        uploadTextures(): void;
        wait(): void;
        requestCompressed(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        requestBranchUpdate(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.BranchTextureRenderer_, arg17: number, arg18: number): number;
        get class(): typeof any
        static readonly BRANCHUPDATE_ALLOCATE: (4) & (number);
        static readonly COMPRESSED: (2) & (number);
        static readonly NORMAL: (0) & (number);
        static readonly BRANCHUPDATE: (3) & (number);
        static readonly NORMALDOWNLOAD: (1) & (number);
        static readonly BRANCHDOWNLOAD: (5) & (number);
        static readonly SUBSEQUENT_NORMAL: (6) & (number);
    }
    type TextureUploader_ = TextureUploader;
    class ConfiguredFeature <FC extends Internal.FeatureConfiguration, F extends Internal.Feature<FC>> extends Internal.Record {
        constructor(arg0: F, arg1: FC)
        getClass(): typeof any;
        place(arg0: Internal.WorldGenLevel_, arg1: Internal.ChunkGenerator_, arg2: Internal.RandomSource_, arg3: BlockPos_): boolean;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        toString(): string;
        notifyAll(): void;
        feature(): F;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        config(): FC;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.ConfiguredFeature<any, any>>>;
        static readonly LIST_CODEC: Internal.Codec<Internal.HolderSet<Internal.ConfiguredFeature<any, any>>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.ConfiguredFeature<any, any>>;
    }
    type ConfiguredFeature_<FC extends Internal.FeatureConfiguration, F extends Internal.Feature<FC>> = Special.ConfiguredFeature | ConfiguredFeature<FC, F>;
    class WaypointColor extends Internal.Enum<Internal.WaypointColor> {
        getClass(): typeof any;
        static fromIndex(arg0: number): Internal.WaypointColor;
        static values(): Internal.WaypointColor[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.WaypointColor_): number;
        static getRandom(): Internal.WaypointColor;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getName(): net.minecraft.network.chat.Component;
        toString(): string;
        notifyAll(): void;
        getFormat(): string;
        getDeclaringClass(): typeof Internal.WaypointColor;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.WaypointColor>>;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getHex(): number;
        static valueOf(arg0: string): Internal.WaypointColor;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(xaero.hud.minimap.waypoint.WaypointColor)"(arg0: Internal.WaypointColor_): number;
        get class(): typeof any
        get random(): Internal.WaypointColor
        get name(): net.minecraft.network.chat.Component
        get format(): string
        get declaringClass(): typeof Internal.WaypointColor
        get hex(): number
        static readonly WHITE: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_RED: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly AQUA: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_GREEN: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly GRAY: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly BLUE: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_GRAY: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_BLUE: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly RED: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly GOLD: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly BLACK: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly PURPLE: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_AQUA: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly DARK_PURPLE: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly GREEN: (Internal.WaypointColor) & (Internal.WaypointColor);
        static readonly YELLOW: (Internal.WaypointColor) & (Internal.WaypointColor);
    }
    type WaypointColor_ = "dark_red" | "dark_gray" | "gold" | "dark_green" | "red" | "purple" | "black" | "green" | "dark_purple" | "dark_blue" | "yellow" | "aqua" | "white" | "gray" | "dark_aqua" | "blue" | WaypointColor;
    interface FabricItemStack extends Internal.IForgeItemStack {
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        isBookEnchantable(arg0: Internal.ItemStack_): boolean;
        getEntityLifespan(arg0: Internal.Level_): number;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        onItemUseFirst(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.Level_, arg1: Internal.Player_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        isEnderMask(arg0: Internal.Player_, arg1: Internal.EnderMan_): boolean;
        doesSneakBypassUse(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getEnchantmentLevel(arg0: Internal.Enchantment_): number;
        serializeNBT(): Internal.Tag;
        getCraftingRemainingItem(): Internal.ItemStack;
        isPiglinCurrency(): boolean;
        getShareTag(): Internal.CompoundTag;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        getXpRepairRatio(): number;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(): boolean;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getEquipmentSlot(): Internal.EquipmentSlot;
        getBurnTime(arg0: Internal.RecipeType_<any>): number;
        onEntityItemUpdate(arg0: Internal.ItemEntity_): boolean;
        getHighlightTip(arg0: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        getEnchantmentValue(): number;
        isRepairable(): boolean;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        readShareTag(arg0: Internal.CompoundTag_): void;
        getSweepHitBox(arg0: Internal.Player_, arg1: Internal.Entity_): Internal.AABB;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        abstract deserializeNBT(arg0: Internal.CompoundTag_): void;
        onDroppedByPlayer(arg0: Internal.Player_): boolean;
        equals(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        onInventoryTick(arg0: Internal.Level_, arg1: Internal.Player_, arg2: number, arg3: number): void;
        canEquip(arg0: Internal.EquipmentSlot_, arg1: Internal.Entity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.Enchantment_): boolean;
        isNotReplaceableByPickAction(arg0: Internal.Player_, arg1: number): boolean;
        onEntitySwing(arg0: Internal.LivingEntity_): boolean;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onBlockStartBreak(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.Level_, arg1: Internal.Mob_): void;
        canElytraFly(arg0: Internal.LivingEntity_): boolean;
        getRecipeRemainder(): Internal.ItemStack;
        hasCraftingRemainingItem(): boolean;
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get shareTag(): Internal.CompoundTag
        get xpRepairRatio(): number
        get equipmentSlot(): Internal.EquipmentSlot
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get enchantmentValue(): number
        get repairable(): boolean
        get recipeRemainder(): Internal.ItemStack
    }
    type FabricItemStack_ = FabricItemStack;
    interface RepositorySource {
        abstract loadPacks(arg0: Internal.Consumer_<Internal.Pack>): void;
        (arg0: Internal.Consumer<Internal.Pack>): void;
    }
    type RepositorySource_ = RepositorySource | ((arg0: Internal.Consumer<Internal.Pack>)=> void);
    interface GameProfileRepository {
        abstract findProfilesByNames(arg0: string[], arg1: Internal.Agent_, arg2: Internal.ProfileLookupCallback_): void;
        (arg0: string[], arg1: Internal.Agent, arg2: Internal.ProfileLookupCallback): void;
    }
    type GameProfileRepository_ = GameProfileRepository | ((arg0: string[], arg1: Internal.Agent, arg2: Internal.ProfileLookupCallback)=> void);
    class ScryRitualRecipe$Serializer implements Internal.RecipeSerializer<Internal.ScryRitualRecipe> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.ScryRitualRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ScryRitualRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.ScryRitualRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.hollingsworth.arsnouveau.api.recipe.ScryRitualRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ScryRitualRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ScryRitualRecipe_): void;
        equals(arg0: any): boolean;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.ScryRitualRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.ScryRitualRecipe;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.ScryRitualRecipe>;
    }
    type ScryRitualRecipe$Serializer_ = ScryRitualRecipe$Serializer;
    class LevelEvent extends net.minecraftforge.eventbus.api.Event implements Internal.EventHandlerImplCommon$LevelEventAttachment {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        architectury$getAttachedLevel(): Internal.LevelAccessor;
        notifyAll(): void;
        isCanceled(): boolean;
        architectury$attachLevel(level: Internal.LevelAccessor_): void;
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
        getLevel(): Internal.LevelAccessor;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get level(): Internal.LevelAccessor
    }
    type LevelEvent_ = LevelEvent;
    interface GameRulesIntRuleAccessor {
        abstract setValue(arg0: number): void;
        abstract getValue(): number;
        set value(arg0: number)
        get value(): number
    }
    type GameRulesIntRuleAccessor_ = GameRulesIntRuleAccessor;
    class SpiritFireRecipe extends Internal.ItemStackFakeInventoryRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.Ingredient_, arg2: Internal.ItemStack_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.ItemStackFakeInventory_): Internal.NonNullList<Internal.ItemStack>;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        matches(arg0: Internal.ItemStackFakeInventory_, arg1: Internal.Level_): boolean;
        getId(): ResourceLocation;
        "matches(com.klikli_dev.occultism.crafting.recipe.ItemStackFakeInventory,net.minecraft.world.level.Level)"(arg0: Internal.ItemStackFakeInventory_, arg1: Internal.Level_): boolean;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        assemble(arg0: Internal.ItemStackFakeInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
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
        "assemble(com.klikli_dev.occultism.crafting.recipe.ItemStackFakeInventory,net.minecraft.core.RegistryAccess)"(arg0: Internal.ItemStackFakeInventory_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
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
        static SERIALIZER: (Internal.SpiritFireRecipe$Serializer) & (Internal.SpiritFireRecipe$Serializer);
    }
    type SpiritFireRecipe_ = SpiritFireRecipe;
    class TransparencyType extends Internal.Enum<Internal.TransparencyType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.TransparencyType[];
        "compareTo(net.irisshaders.batchedentityrendering.impl.TransparencyType)"(arg0: Internal.TransparencyType_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TransparencyType>>;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.TransparencyType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(name: string): Internal.TransparencyType;
        compareTo(arg0: Internal.TransparencyType_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.TransparencyType
        static readonly OPAQUE_DECAL: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly GENERAL_TRANSPARENT: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly LINES: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly OPAQUE: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly DECAL: (Internal.TransparencyType) & (Internal.TransparencyType);
        static readonly WATER_MASK: (Internal.TransparencyType) & (Internal.TransparencyType);
    }
    type TransparencyType_ = "decal" | TransparencyType | "water_mask" | "opaque" | "general_transparent" | "opaque_decal" | "lines";
    class CreativeModeTab$Row extends Internal.Enum<Internal.CreativeModeTab$Row> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.CreativeModeTab$Row[];
        getDeclaringClass(): typeof Internal.CreativeModeTab$Row;
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.CreativeModeTab$Row;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CreativeModeTab$Row>>;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        "compareTo(net.minecraft.world.item.CreativeModeTab$Row)"(arg0: Internal.CreativeModeTab$Row_): number;
        compareTo(arg0: Internal.CreativeModeTab$Row_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.CreativeModeTab$Row
        static readonly BOTTOM: (Internal.CreativeModeTab$Row) & (Internal.CreativeModeTab$Row);
        static readonly TOP: (Internal.CreativeModeTab$Row) & (Internal.CreativeModeTab$Row);
    }
    type CreativeModeTab$Row_ = "bottom" | CreativeModeTab$Row | "top";
    class LollipopFeatureConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.List_<ResourceLocation>, arg1: Internal.List_<ResourceLocation>, arg2: number)
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
        static readonly CODEC: Internal.Codec<Internal.LollipopFeatureConfiguration>;
        readonly bigLollipopTopStructures: Internal.List<ResourceLocation>;
        readonly bigChance: number;
        readonly smallLollipopTopStructures: Internal.List<ResourceLocation>;
    }
    type LollipopFeatureConfiguration_ = LollipopFeatureConfiguration;
    interface ISustainedInventory {
        hasSustainedInventory(): boolean;
        abstract setSustainedInventory(nbtTags: Internal.ListTag_): void;
        abstract getSustainedInventory(): Internal.ListTag;
        set sustainedInventory(nbtTags: Internal.ListTag_)
        get sustainedInventory(): Internal.ListTag
    }
    type ISustainedInventory_ = ISustainedInventory;
    class BigIcicleBlock extends com.mongoose.clanginghowl.common.blocks.IcicleBlock {
        constructor()
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        spawnFallingStalactite(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        static isTip(arg0: Internal.BlockState_): boolean;
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
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
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
        static readonly HALF: Internal.EnumProperty<Internal.DoubleBlockHalf>;
    }
    type BigIcicleBlock_ = BigIcicleBlock;
    class EnchantmentVampireSlayer extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_)
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        handler$clh000$vampiresdelight$canBackstabbingBeApplied(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get orCreateDescriptionId(): string
        get allowedOnBooks(): boolean
    }
    type EnchantmentVampireSlayer_ = EnchantmentVampireSlayer;
    class DamageScaling extends Internal.Enum<Internal.DamageScaling> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.damagesource.DamageScaling)"(arg0: Internal.DamageScaling_): number;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.DamageScaling;
        getSerializedName(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.DamageScaling;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        compareTo(arg0: Internal.DamageScaling_): number;
        hashCode(): number;
        static values(): Internal.DamageScaling[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DamageScaling>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.DamageScaling
        static readonly NEVER: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly WHEN_CAUSED_BY_LIVING_NON_PLAYER: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly ALWAYS: (Internal.DamageScaling) & (Internal.DamageScaling);
        static readonly CODEC: Internal.Codec<Internal.DamageScaling>;
    }
    type DamageScaling_ = DamageScaling | "never" | "always" | "when_caused_by_living_non_player";
    class FoamRecipe implements Internal.Recipe<Internal.SimpleContainer> {
        constructor(arg0: ResourceLocation_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_)
        matches(arg0: Internal.SimpleContainer_, arg1: Internal.Level_): boolean;
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.SimpleContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.SimpleContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        "matches(net.minecraft.world.SimpleContainer,net.minecraft.world.level.Level)"(arg0: Internal.SimpleContainer_, arg1: Internal.Level_): boolean;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getRemainingItems(arg0: Internal.SimpleContainer_): Internal.NonNullList<Internal.ItemStack>;
        getTea(): Internal.ItemStack;
        assemble(arg0: Internal.SimpleContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
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
        get tea(): Internal.ItemStack
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type FoamRecipe_ = FoamRecipe;
    class RenderWorldEvent extends net.minecraftforge.eventbus.api.Event {
        constructor(poseStack: Internal.PoseStack_, partialTicks: number)
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
        getPoseStack(): Internal.PoseStack;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getPartialTicks(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get poseStack(): Internal.PoseStack
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get partialTicks(): number
        get phase(): Internal.EventPriority
    }
    type RenderWorldEvent_ = RenderWorldEvent;
    class VaultSharedData {
        getClass(): typeof any;
        hasDisplayItem(): boolean;
        hashCode(): number;
        toString(): string;
        wait(): void;
        getDisplayItem(): Internal.ItemStack;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setDisplayItem(arg0: Internal.ItemStack_): void;
        get class(): typeof any
        get displayItem(): Internal.ItemStack
        set displayItem(arg0: Internal.ItemStack_)
    }
    type VaultSharedData_ = VaultSharedData;
    class LibidoEffect extends Internal.StatusEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getColor(): number;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        addModifier<E extends Internal.StatusEffect>(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): E;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
        static readonly VILLAGER_BREED_DELAY: (60) & (number);
    }
    type LibidoEffect_ = LibidoEffect;
    class FlatLayerInfo {
        constructor(arg0: number, arg1: Internal.Block_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getBlockState(): Internal.BlockState;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getHeight(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get blockState(): Internal.BlockState
        get height(): number
        static readonly CODEC: Internal.Codec<Internal.FlatLayerInfo>;
    }
    type FlatLayerInfo_ = FlatLayerInfo;
    class BlockDreadfulDirt extends Internal.Block {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        shouldSpawnMob(arg0: Internal.Level_, arg1: BlockPos_): boolean;
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
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
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
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
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
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        spawnMob(arg0: Internal.ServerLevel_, arg1: BlockPos_): void;
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
        shouldCatchFire(arg0: Internal.Level_, arg1: BlockPos_): boolean;
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
    type BlockDreadfulDirt_ = BlockDreadfulDirt;
    interface PropertyChangeListener extends Internal.EventListener {
        abstract propertyChange(arg0: Internal.PropertyChangeEvent_): void;
        (arg0: Internal.PropertyChangeEvent): void;
    }
    type PropertyChangeListener_ = PropertyChangeListener | ((arg0: Internal.PropertyChangeEvent)=> void);
    interface ProgressivePromise <V> extends Internal.Promise<V>, Internal.ProgressiveFuture<V> {
        abstract isSuccess(): boolean;
        abstract setProgress(arg0: number, arg1: number): this;
        abstract addListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract tryFailure(arg0: Internal.Throwable_): boolean;
        abstract awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract cause(): Internal.Throwable;
        abstract get(): V;
        abstract await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        abstract await(arg0: number): boolean;
        abstract addListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract setUncancellable(): boolean;
        abstract trySuccess(arg0: V): boolean;
        abstract syncUninterruptibly(): this;
        abstract awaitUninterruptibly(arg0: number): boolean;
        abstract isCancelled(): boolean;
        abstract removeListeners(...arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>[]): this;
        abstract await(): this;
        abstract sync(): this;
        abstract isDone(): boolean;
        abstract cancel(arg0: boolean): boolean;
        abstract getNow(): V;
        abstract setSuccess(arg0: V): this;
        abstract setFailure(arg0: Internal.Throwable_): this;
        abstract removeListener(arg0: Internal.GenericFutureListener_<io.netty.util.concurrent.Future<V>>): this;
        abstract isCancellable(): boolean;
        abstract get(arg0: number, arg1: Internal.TimeUnit_): V;
        abstract awaitUninterruptibly(): this;
        abstract tryProgress(arg0: number, arg1: number): boolean;
        get success(): boolean
        get cancelled(): boolean
        get done(): boolean
        get now(): V
        set success(arg0: V)
        set failure(arg0: Internal.Throwable_)
        get cancellable(): boolean
    }
    type ProgressivePromise_<V> = ProgressivePromise<V>;
    class UpgradeHandler extends Internal.ItemStackHandler {
        constructor(arg0: number, arg1: Internal.IStorageWrapper_, arg2: Internal.CompoundTag_, arg3: Internal.Runnable_, arg4: Internal.Runnable_)
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        registerUpgradeDefaultsHandler<T extends Internal.IUpgradeWrapper>(arg0: T, arg1: Internal.Consumer_<T>): void;
        find(): number;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        setRenderUpgradeItems(): void;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(i: number, itemStack: Internal.ItemStack_, b: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        getTypeWrappers<T extends Internal.IUpgradeWrapper>(arg0: Internal.UpgradeType_<T>): Internal.List<T>;
        copyTo(arg0: Internal.UpgradeHandler_): void;
        "getSlotLimit(int)"(arg0: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        wait(): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        removeRefreshCallback(): void;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getWrappersThatImplement<T>(arg0: T): Internal.List<T>;
        getSlotWrappers(): Internal.Map<number, Internal.IUpgradeWrapper>;
        wait(arg0: number, arg1: number): void;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        increaseSize(arg0: number): void;
        getListOfWrappersThatImplement<T>(arg0: T): Internal.List<T>;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        setPersistent(arg0: boolean): void;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        setRefreshCallBack(arg0: Internal.Runnable_): void;
        getWrappersThatImplementFromMainStorage<T>(arg0: T): Internal.List<T>;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        refreshWrappersThatImplementAndTypeWrappers(): void;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        hasUpgrade<T extends Internal.IUpgradeWrapper>(arg0: Internal.UpgradeType_<T>): boolean;
        saveInventory(): void;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        refreshUpgradeWrappers(): void;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get slots(): number
        get "slots()"(): number
        get width(): number
        get class(): typeof any
        get empty(): boolean
        get slotWrappers(): Internal.Map<number, Internal.IUpgradeWrapper>
        get height(): number
        set persistent(arg0: boolean)
        set refreshCallBack(arg0: Internal.Runnable_)
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        set size(arg0: number)
        static readonly UPGRADE_INVENTORY_TAG: ("upgradeInventory") & (string);
    }
    type UpgradeHandler_ = UpgradeHandler;
    class CacheStats {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        getClass(): typeof any;
        plus(arg0: Internal.CacheStats_): this;
        evictionCount(): number;
        toString(): string;
        hitCount(): number;
        notifyAll(): void;
        loadExceptionRate(): number;
        missCount(): number;
        hitRate(): number;
        notify(): void;
        loadExceptionCount(): number;
        wait(arg0: number, arg1: number): void;
        totalLoadTime(): number;
        hashCode(): number;
        loadSuccessCount(): number;
        missRate(): number;
        wait(): void;
        loadCount(): number;
        wait(arg0: number): void;
        averageLoadPenalty(): number;
        minus(arg0: Internal.CacheStats_): this;
        equals(arg0: any): boolean;
        requestCount(): number;
        get class(): typeof any
    }
    type CacheStats_ = CacheStats;
    class CoralWallFanBlock extends Internal.BaseCoralWallFanBlock {
        constructor(arg0: Internal.Block_, arg1: Internal.BlockBehaviour$Properties_)
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
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
    }
    type CoralWallFanBlock_ = CoralWallFanBlock;
    class ResourceOrTagKeyArgument$Info <T> implements Internal.ArgumentTypeInfo<Internal.ResourceOrTagKeyArgument<T>, Internal.ResourceOrTagKeyArgument$Info$Template<>> {
        constructor()
        getClass(): typeof any;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        toString(): string;
        notifyAll(): void;
        serializeToJson(arg0: Internal.ResourceOrTagKeyArgument$Info$Template_<>, arg1: com.google.gson.JsonObject_): void;
        "serializeToJson(net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template,com.google.gson.JsonObject)"(arg0: Internal.ResourceOrTagKeyArgument$Info$Template_<>, arg1: com.google.gson.JsonObject_): void;
        "unpack(com.mojang.brigadier.arguments.ArgumentType)"(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        hashCode(): number;
        wait(): void;
        serializeToNetwork(arg0: Internal.ResourceOrTagKeyArgument$Info$Template_<>, arg1: Internal.FriendlyByteBuf_): void;
        wait(arg0: number): void;
        "unpack(net.minecraft.commands.arguments.ResourceOrTagKeyArgument)"(arg0: Internal.ResourceOrTagKeyArgument_<T>): Internal.ResourceOrTagKeyArgument$Info$Template<>;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        "serializeToNetwork(net.minecraft.commands.synchronization.ArgumentTypeInfo$Template,net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        equals(arg0: any): boolean;
        "serializeToNetwork(net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template,net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.ResourceOrTagKeyArgument$Info$Template_<>, arg1: Internal.FriendlyByteBuf_): void;
        "serializeToJson(net.minecraft.commands.synchronization.ArgumentTypeInfo$Template,com.google.gson.JsonObject)"(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: com.google.gson.JsonObject_): void;
        unpack(arg0: Internal.ResourceOrTagKeyArgument_<T>): Internal.ResourceOrTagKeyArgument$Info$Template<>;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: com.google.gson.JsonObject_): void;
        get class(): typeof any
    }
    type ResourceOrTagKeyArgument$Info_<T> = ResourceOrTagKeyArgument$Info<T>;
    class ReportChatMessage {
        constructor(arg0: number, arg1: Internal.UUID_, arg2: Internal.UUID_, arg3: Internal.Instant_, arg4: number, arg5: Internal.List_<Internal.ByteBuffer>, arg6: string, arg7: Internal.ByteBuffer_, arg8: boolean)
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
        signature: Internal.ByteBuffer;
        profileId: Internal.UUID;
        lastSeen: Internal.List<Internal.ByteBuffer>;
        salt: number;
        index: number;
        sessionId: Internal.UUID;
        timestamp: Internal.Instant;
        messageReported: boolean;
        message: string;
    }
    type ReportChatMessage_ = ReportChatMessage;
    interface LookupResult {
        isLookupEvaluationAllowedInValue(): boolean;
        abstract value(): string;
        get lookupEvaluationAllowedInValue(): boolean
        (): string;
    }
    type LookupResult_ = (()=> string) | LookupResult;
    interface IFluidLogType {
        abstract getFluid(): Internal.Fluid;
        isEmpty(): boolean;
        get fluid(): Internal.Fluid
        get empty(): boolean
        (): Internal.Fluid_;
    }
    type IFluidLogType_ = (()=> Internal.Fluid_) | IFluidLogType;
    class CompatibleTransmitterValidator <ACCEPTOR, NETWORK extends Internal.DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends Internal.Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        isNetworkCompatible(net: NETWORK): boolean;
        wait(arg0: number): void;
        isTransmitterCompatible(transmitter: Internal.Transmitter_<any, any, any>): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type CompatibleTransmitterValidator_<ACCEPTOR, NETWORK extends Internal.DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends Internal.Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> = CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
    class SparkleParticleData implements Internal.ParticleOptions {
        getClass(): typeof any;
        static noClip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        toString(): string;
        static corrupt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        notifyAll(): void;
        static fake(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static sparkle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.SparkleParticleData;
        hashCode(): number;
        wait(): void;
        writeToString(): string;
        wait(arg0: number): void;
        getType(): Internal.ParticleType<Internal.SparkleParticleData>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get type(): Internal.ParticleType<Internal.SparkleParticleData>
        readonly noClip: boolean;
        readonly corrupt: boolean;
        readonly m: number;
        readonly g: number;
        readonly fake: boolean;
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.SparkleParticleData>;
        readonly r: number;
        readonly b: number;
        readonly size: number;
        static readonly CODEC: Internal.Codec<Internal.SparkleParticleData>;
    }
    type SparkleParticleData_ = SparkleParticleData;
    class WallmountBlock$Orientation extends Internal.Enum<Internal.WallmountBlock$Orientation> implements Internal.StringRepresentable {
        getClass(): typeof any;
        touchesTop(): boolean;
        compareTo(arg0: Internal.WallmountBlock$Orientation_): number;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.WallmountBlock$Orientation>>;
        getSerializedName(): string;
        modelSuffix(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        getDual(): this;
        getDeclaringClass(): typeof Internal.WallmountBlock$Orientation;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        attachedToSide(): boolean;
        name(): string;
        "compareTo(blusunrize.immersiveengineering.common.blocks.generic.WallmountBlock$Orientation)"(arg0: Internal.WallmountBlock$Orientation_): number;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.WallmountBlock$Orientation;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.WallmountBlock$Orientation[];
        get class(): typeof any
        get serializedName(): string
        get dual(): Internal.WallmountBlock$Orientation
        get declaringClass(): typeof Internal.WallmountBlock$Orientation
        static readonly SIDE_UP: (Internal.WallmountBlock$Orientation) & (Internal.WallmountBlock$Orientation);
        static readonly VERT_UP: (Internal.WallmountBlock$Orientation) & (Internal.WallmountBlock$Orientation);
        static readonly SIDE_DOWN: (Internal.WallmountBlock$Orientation) & (Internal.WallmountBlock$Orientation);
        static readonly VERT_DOWN: (Internal.WallmountBlock$Orientation) & (Internal.WallmountBlock$Orientation);
    }
    type WallmountBlock$Orientation_ = "vert_down" | "side_down" | "vert_up" | WallmountBlock$Orientation | "side_up";
    class AbilityData$AbilityDataBuilder {
        requiredLevel(arg0: number): this;
        getClass(): typeof any;
        toString(): string;
        build(): Internal.AbilityData;
        notifyAll(): void;
        requiredPoints(arg0: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        maxLevel(arg0: number): this;
        hashCode(): number;
        stat(arg0: Internal.StatData_): this;
        active(arg0: Internal.CastData_): this;
        wait(): void;
        stats(arg0: Internal.Map_<string, Internal.StatData>): this;
        wait(arg0: number): void;
        icon(arg0: Internal.Function3_<Internal.Player, Internal.ItemStack, string, string>): this;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AbilityData$AbilityDataBuilder_ = AbilityData$AbilityDataBuilder;
    class SoundBuffer {
        constructor(arg0: Internal.ByteBuffer_, arg1: Internal.AudioFormat_)
        getClass(): typeof any;
        hashCode(): number;
        discardAlBuffer(): void;
        toString(): string;
        wait(): void;
        releaseAlBuffer(): Internal.OptionalInt;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SoundBuffer_ = SoundBuffer;
    class VampirePieBlock extends Internal.PieBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.Item>)
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getMaxBites(): number;
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
        getPieSliceItem(): Internal.ItemStack;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
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
        get maxBites(): number
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
        get pieSliceItem(): Internal.ItemStack
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
    type VampirePieBlock_ = VampirePieBlock;
    class ResolvedModule {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        name(): string;
        hashCode(): number;
        configuration(): Internal.Configuration;
        wait(): void;
        reads(): Internal.Set<Internal.ResolvedModule>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reference(): Internal.ModuleReference;
        get class(): typeof any
    }
    type ResolvedModule_ = ResolvedModule;
    class Rotations {
        constructor(arg0: Internal.ListTag_)
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        getX(): number;
        getZ(): number;
        toString(): string;
        getY(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getWrappedZ(): number;
        getWrappedY(): number;
        getWrappedX(): number;
        wait(): void;
        save(): Internal.ListTag;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get z(): number
        get y(): number
        get wrappedZ(): number
        get wrappedY(): number
        get wrappedX(): number
        readonly z: number;
        readonly y: number;
        readonly x: number;
    }
    type Rotations_ = Rotations;
    interface IntIterable extends Internal.Iterable<number> {
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        iterator(): Internal.Iterator<any>;
        spliterator(): Internal.Spliterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        forEach(arg0: Internal.IntConsumer_): void;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        intSpliterator(): Internal.IntSpliterator;
        intIterator(): Internal.IntIterator;
    }
    type IntIterable_ = IntIterable;
    class AlloyRecipeSerializer extends Internal.IERecipeSerializer<Internal.AlloyRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.AlloyRecipe;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notifyAll(): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.AlloyRecipe_): void;
        getIcon(): Internal.ItemStack;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,blusunrize.immersiveengineering.api.crafting.AlloyRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.AlloyRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.AlloyRecipe;
        wait(arg0: number, arg1: number): void;
        readFromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.AlloyRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): Internal.AlloyRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.AlloyRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
        get icon(): Internal.ItemStack
    }
    type AlloyRecipeSerializer_ = AlloyRecipeSerializer;
    class FluidBlockBuilder extends Internal.BlockBuilder {
        constructor(b: Internal.FluidBuilder_)
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
        */
        bounciness(bounciness: number): Internal.BlockBuilder;
        /**
         * Note block instrument.
        */
        instrument(i: Internal.NoteBlockInstrument_): Internal.BlockBuilder;
        "transformObject(net.minecraft.world.level.block.Block)"(obj: Internal.Block_): Internal.Block;
        createAdditionalObjects(): void;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
        */
        fallenOn(callbackJS: Internal.Consumer_<Internal.EntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Tags the item with the given tag.
        */
        tagItem(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Block>;
        /**
         * Set the block's model.
        */
        model(m: string): Internal.BlockBuilder;
        createObject(): any;
        sandSoundType(): Internal.BlockBuilder;
        getTranslationKeyGroup(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Internal.BlockBuilder;
        notify(): void;
        get(): Internal.Block;
        /**
         * Makes the block a redstone conductor.
        */
        redstoneConductor(b: boolean): Internal.BlockBuilder;
        noSoundType(): Internal.BlockBuilder;
        item(i: Internal.Consumer_<Internal.BlockItemBuilder>): Internal.BlockBuilder;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Set the default state of the block.
        */
        defaultState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyCallbackJS>): Internal.BlockBuilder;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
        */
        steppedOn(callbackJS: Internal.Consumer_<Internal.EntitySteppedOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Texture the block on all sides with the same texture.
        */
        textureAll(tex: string): Internal.BlockBuilder;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Block>;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
        */
        defaultTranslucent(): Internal.BlockBuilder;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
        */
        dynamicMapColor(m: Internal.Function_<Internal.BlockState, any>): Internal.BlockBuilder;
        /**
         * Tags both the block and the item with the given tag.
        */
        tagBoth(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Makes the block unbreakable.
        */
        unbreakable(): Internal.BlockBuilder;
        /**
         * Makes the block view blocking.
        */
        viewBlocking(b: boolean): Internal.BlockBuilder;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
        */
        property(property: Internal.Property_<any>): Internal.BlockBuilder;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
        */
        resistance(r: number): Internal.BlockBuilder;
        gravelSoundType(): Internal.BlockBuilder;
        getBuilderTranslationKey(): string;
        /**
         * Set the shape of the block.
        */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): Internal.BlockBuilder;
        /**
         * Set the callback for determining the blocks state when placed.
        */
        placementState(callbackJS: Internal.Consumer_<Internal.BlockStateModifyPlacementCallbackJS>): Internal.BlockBuilder;
        /**
         * Set if the block can be replaced by something else.
        */
        canBeReplaced(callbackJS: Internal.Predicate_<Internal.CanBeReplacedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets random tick callback for this black.
        */
        randomTick(randomTickCallback: Internal.Consumer_<Internal.RandomTickCallbackJS>): Internal.BlockBuilder;
        wait(): void;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
        */
        exploded(callbackJS: Internal.Consumer_<Internal.BlockExplodedCallbackJS>): Internal.BlockBuilder;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
        */
        lightLevel(light: number): Internal.BlockBuilder;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Block>;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): dev.latvian.mods.kubejs.registry.BuilderBase<Internal.Block>;
        /**
         * Sets the block's map color. Defaults to NONE.
        */
        mapColor(m: Internal.MapColor_): Internal.BlockBuilder;
        static createShape(boxes: Internal.List_<Internal.AABB>): Internal.VoxelShape;
        /**
         * Makes the block not be solid.
        */
        notSolid(): Internal.BlockBuilder;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
        */
        renderType(l: string): Internal.BlockBuilder;
        /**
         * Clears all drops for the block.
        */
        noDrops(): Internal.BlockBuilder;
        getClass(): typeof any;
        stoneSoundType(): Internal.BlockBuilder;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setWaterlogged(waterlogged: boolean): Internal.BlockBuilder;
        grassSoundType(): Internal.BlockBuilder;
        createProperties(): Internal.BlockBehaviour$Properties;
        /**
         * Sets the block's sound type. Defaults to wood.
        */
        soundType(m: SoundType_): Internal.BlockBuilder;
        /**
         * Makes the block can be waterlogged.
        */
        waterlogged(): Internal.BlockBuilder;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        /**
         * Set the callback used for determining how the block rotates
        */
        rotateState(callbackJS: Internal.Consumer_<Internal.BlockStateRotateCallbackJS>): Internal.BlockBuilder;
        /**
         * Set how high you can jump on the block.
        */
        jumpFactor(f: number): Internal.BlockBuilder;
        /**
         * Set the callback used for right-clicking on the block
        */
        rightClick(callbackJS: Internal.Consumer_<Internal.BlockRightClickedEventJS>): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(f: boolean): Internal.BlockBuilder;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Texture a specific side of the block.
        */
        textureSide(direction: Internal.Direction_, tex: string): Internal.BlockBuilder;
        /**
         * Texture a specific texture key of the block.
        */
        texture(id: string, tex: string): Internal.BlockBuilder;
        /**
         * Checks if the block can be waterlogged.
        */
        canBeWaterlogged(): boolean;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): dev.latvian.mods.kubejs.registry.BuilderBase<any>;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
        */
        hardness(h: number): Internal.BlockBuilder;
        glassSoundType(): Internal.BlockBuilder;
        /**
         * Creates a Block Entity for this block
        */
        blockEntity(callback: Internal.Consumer_<Internal.BlockEntityInfo>): Internal.BlockBuilder;
        /**
         * Set the block to have no corresponding item.
        */
        noItem(): Internal.BlockBuilder;
        transformObject(arg0: any): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWaterlogged(): boolean;
        /**
         * Set the callback used for determining how the block is mirrored
        */
        mirrorState(callbackJS: Internal.Consumer_<Internal.BlockStateMirrorCallbackJS>): Internal.BlockBuilder;
        /**
         * Tags the block with the given tag.
        */
        tagBlock(tag: ResourceLocation_): Internal.BlockBuilder;
        /**
         * Set how slippery the block is.
        */
        slipperiness(f: number): Internal.BlockBuilder;
        toString(): string;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
        */
        opaque(o: boolean): Internal.BlockBuilder;
        woodSoundType(): Internal.BlockBuilder;
        notifyAll(): void;
        /**
         * Makes mobs not spawn on the block.
        */
        noValidSpawns(b: boolean): Internal.BlockBuilder;
        material(material: string): Internal.BlockBuilder;
        transformObject(obj: Internal.Block_): Internal.Block;
        /**
         * Makes the block transparent.
        */
        transparent(b: boolean): Internal.BlockBuilder;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
        */
        defaultCutout(): Internal.BlockBuilder;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
        */
        fullBlock(f: boolean): Internal.BlockBuilder;
        /**
         * Makes the block not collide with entities.
        */
        noCollision(): Internal.BlockBuilder;
        hashCode(): number;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
        */
        afterFallenOn(callbackJS: Internal.Consumer_<Internal.AfterEntityFallenOnBlockCallbackJS>): Internal.BlockBuilder;
        /**
         * Makes the block suffocating.
        */
        suffocating(b: boolean): Internal.BlockBuilder;
        /**
         * Set the color of a specific layer of the block.
        */
        color(index: number, color: Internal.BlockTintFunction_): Internal.BlockBuilder;
        wait(arg0: number): void;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
        */
        speedFactor(f: number): Internal.BlockBuilder;
        /**
         * Makes the block require a tool to have drops when broken.
        */
        requiresTool(): Internal.BlockBuilder;
        equals(arg0: any): boolean;
        cropSoundType(): Internal.BlockBuilder;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set waterlogged(waterlogged: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get waterlogged(): boolean
    }
    type FluidBlockBuilder_ = FluidBlockBuilder;
    class EntityWeight {
        constructor()
        getClass(): typeof any;
        readNetData(data: Internal.FriendlyByteBuf_): void;
        writeData(nbt: Internal.CompoundTag_): void;
        toString(): string;
        notifyAll(): void;
        readData(nbt: Internal.CompoundTag_): void;
        getWeight(entity: Internal.Entity_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        writeNetData(data: Internal.FriendlyByteBuf_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        monster: number;
        boss: number;
        passive: number;
    }
    type EntityWeight_ = EntityWeight;
    interface FloatingFlower {
        abstract writeNBT(): Internal.Tag;
        abstract getIslandType(): Internal.FloatingFlower$IslandType;
        abstract setIslandType(arg0: Internal.FloatingFlower$IslandType_): void;
        abstract getDisplayStack(): Internal.ItemStack;
        abstract readNBT(arg0: Internal.CompoundTag_): void;
        get islandType(): Internal.FloatingFlower$IslandType
        set islandType(arg0: Internal.FloatingFlower$IslandType_)
        get displayStack(): Internal.ItemStack
    }
    type FloatingFlower_ = FloatingFlower;
    interface TickContainerAccess <T> extends Internal.TickAccess<T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type TickContainerAccess_<T> = TickContainerAccess<T>;
    interface ZetaLoadModule extends Internal.Annotation {
        abstract name(): string;
        abstract loadPhase(): number;
        abstract clientReplacement(): boolean;
        abstract hashCode(): number;
        abstract toString(): string;
        abstract antiOverlap(): string[];
        abstract enabledByDefault(): boolean;
        abstract category(): string;
        abstract annotationType(): typeof Internal.Annotation;
        abstract equals(arg0: any): boolean;
        abstract description(): string;
    }
    type ZetaLoadModule_ = ZetaLoadModule;
    class BlockHutComposter extends Internal.AbstractBlockHut<Internal.BlockHutComposter> {
        constructor()
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        getBlueprintDisplayName(): net.minecraft.network.chat.Component;
        registerBlockItem(arg0: Internal.IForgeRegistry_<Internal.Item>, arg1: Internal.Item$Properties_): void;
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
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getDesc(): Internal.List<Internal.MutableComponent>;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getHutName(): string;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        registerBlock(arg0: Internal.IForgeRegistry_<Internal.Block>): this;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
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
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        setup(arg0: Internal.ServerPlayer_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Blueprint_, arg4: Internal.PlacementSettings_, arg5: boolean, arg6: string, arg7: string): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        onBlockPlacedByBuildTool(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_, arg5: boolean, arg6: string, arg7: string): void;
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
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getLevel(arg0: Internal.CompoundTag_): number;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        areRequirementsMet(arg0: Internal.ClientLevel_, arg1: BlockPos_, arg2: Internal.LocalPlayer_): boolean;
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
        getStructureHandler(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Blueprint_, arg3: Internal.PlacementSettings_, arg4: boolean): Internal.AbstractStructureHandler;
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
        getRequirements(arg0: Internal.ClientLevel_, arg1: BlockPos_, arg2: Internal.LocalPlayer_): Internal.List<Internal.MutableComponent>;
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
        canPlaceAt(arg0: BlockPos_, arg1: Internal.Player_): boolean;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        shouldBrowseBuildings(arg0: Internal.PlayerInteractEvent$RightClickItem_): boolean;
        getBlueprintName(): string;
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
        getBuildingEntry(): Internal.BuildingEntry;
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
        isVisible(arg0: Internal.CompoundTag_): boolean;
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
        getRegistryName(): ResourceLocation;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        canRightClickWithoutPermissions(): boolean;
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
        get blueprintDisplayName(): net.minecraft.network.chat.Component
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get desc(): Internal.List<Internal.MutableComponent>
        get hutName(): string
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
        get blueprintName(): string
        get buildingEntry(): Internal.BuildingEntry
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        set hasCollision(arg0: boolean)
    }
    type BlockHutComposter_ = BlockHutComposter;
    interface GeneratedClassLoader {
        abstract linkClass(arg0: typeof any): void;
        abstract defineClass(arg0: string, arg1: number[]): typeof any;
    }
    type GeneratedClassLoader_ = GeneratedClassLoader;
    class SmallOakTreeFeature extends Internal.Feature<Internal.RuTreeConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.RuTreeConfiguration>)
        place(arg0: Internal.FeaturePlaceContext_<Internal.RuTreeConfiguration>): boolean;
        getClass(): typeof any;
        static isReplaceableDirtBlock(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        placeLeavesBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): boolean;
        placeTop(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        checkReplaceable(arg0: Internal.LevelAccessor_, arg1: BlockPos_): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isReplaceableBlock(arg0: Internal.BlockState_): boolean;
        placeEastBranch(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        placeWestBranch(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        placeBranchDecorator(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        static isStone(arg0: Internal.BlockState_): boolean;
        static isReplaceableDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        toString(): string;
        placeLeavesBlob(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.RuTreeConfiguration, Internal.Feature<Internal.RuTreeConfiguration>>>;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        placeNorthBranch(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        placeLog(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_, arg4: Internal.Direction$Axis_): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        place(arg0: Internal.RuTreeConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        placeSouthBranch(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: Internal.RuTreeConfiguration_): void;
        hashCode(): number;
        static isReplaceable(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type SmallOakTreeFeature_ = SmallOakTreeFeature;
    class OwnablePressurePlateBlock extends Internal.PressurePlateBlock implements Internal.OwnableEntityBlock {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(arg0: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        static appendUserListToTooltip(arg0: Internal.ItemStack_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
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
        static appendUserListToTooltip(arg0: Internal.CompoundTag_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
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
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        setSignalForState(arg0: Internal.BlockState_, arg1: number): Internal.BlockState;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static setBlockEntityOwner(arg0: Internal.Level_, arg1: Internal.Ownable_, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getSignalForState(arg0: Internal.BlockState_): number;
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
        getSignalStrength(arg0: Internal.Level_, arg1: BlockPos_): number;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        static "appendUserListToTooltip(net.minecraft.world.item.ItemStack,java.util.List)"(arg0: Internal.ItemStack_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
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
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        static "appendUserListToTooltip(net.minecraft.nbt.CompoundTag,java.util.List)"(arg0: Internal.CompoundTag_, arg1: Internal.List_<net.minecraft.network.chat.Component>): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
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
        static dropForCreativePlayer(arg0: Internal.Level_, arg1: Internal.Block_, arg2: BlockPos_, arg3: Internal.Player_): void;
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
        static readonly USER_SENSITIVITY: Internal.EnumProperty<Internal.UserSensitivity>;
        static readonly ENTITY_SELECTOR: Internal.Predicate<Internal.Entity>;
    }
    type OwnablePressurePlateBlock_ = OwnablePressurePlateBlock;
    class EnchantmentRuthlessStrike extends Internal.TombstoneEnchantment {
        constructor()
        getClass(): typeof any;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isInBeta(): boolean;
        isTradeable(): boolean;
        handler$clh000$vampiresdelight$canBackstabbingBeApplied(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getTooltipInfos(arg0: boolean): Internal.List<net.minecraft.network.chat.Component>;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        getSimpleName(): string;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get inBeta(): boolean
        get tradeable(): boolean
        get treasureOnly(): boolean
        get enabled(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get simpleName(): string
        get curse(): boolean
        get orCreateDescriptionId(): string
        get allowedOnBooks(): boolean
    }
    type EnchantmentRuthlessStrike_ = EnchantmentRuthlessStrike;
    class ChunkPos {
        constructor(arg0: BlockPos_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number)
        getClass(): typeof any;
        static getX(arg0: number): number;
        getWorldPosition(): BlockPos;
        static maxFromRegion(arg0: number, arg1: number): Internal.ChunkPos;
        static getZ(arg0: number): number;
        getMinBlockZ(): number;
        static "rangeClosed(net.minecraft.world.level.ChunkPos,net.minecraft.world.level.ChunkPos)"(arg0: Internal.ChunkPos_, arg1: Internal.ChunkPos_): Internal.Stream<Internal.ChunkPos>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static hash(arg0: number, arg1: number): number;
        getMinBlockX(): number;
        getMaxBlockX(): number;
        getRegionLocalX(): number;
        getMaxBlockZ(): number;
        getMiddleBlockX(): number;
        getMiddleBlockZ(): number;
        getRegionLocalZ(): number;
        getBlockAt(arg0: number, arg1: number, arg2: number): BlockPos;
        static rangeClosed(arg0: Internal.ChunkPos_, arg1: number): Internal.Stream<Internal.ChunkPos>;
        getRegionZ(): number;
        toString(): string;
        static minFromRegion(arg0: number, arg1: number): Internal.ChunkPos;
        getChessboardDistance(arg0: Internal.ChunkPos_): number;
        static asLong(arg0: number, arg1: number): number;
        getRegionX(): number;
        notifyAll(): void;
        getMiddleBlockPosition(arg0: number): BlockPos;
        getBlockX(arg0: number): number;
        static asLong(arg0: BlockPos_): number;
        hashCode(): number;
        getBlockZ(arg0: number): number;
        static "rangeClosed(net.minecraft.world.level.ChunkPos,int)"(arg0: Internal.ChunkPos_, arg1: number): Internal.Stream<Internal.ChunkPos>;
        static rangeClosed(arg0: Internal.ChunkPos_, arg1: Internal.ChunkPos_): Internal.Stream<Internal.ChunkPos>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        toLong(): number;
        get class(): typeof any
        get worldPosition(): BlockPos
        get minBlockZ(): number
        get minBlockX(): number
        get maxBlockX(): number
        get regionLocalX(): number
        get maxBlockZ(): number
        get middleBlockX(): number
        get middleBlockZ(): number
        get regionLocalZ(): number
        get regionZ(): number
        get regionX(): number
        static readonly REGION_SIZE: (32) & (number);
        static readonly ZERO: (Internal.ChunkPos) & (Internal.ChunkPos);
        readonly z: number;
        static readonly INVALID_CHUNK_POS: (8053347149716602) & (number);
        readonly x: number;
        static readonly REGION_MAX_INDEX: (31) & (number);
    }
    type ChunkPos_ = ChunkPos;
    interface SkullBlock$Type {
    }
    type SkullBlock$Type_ = SkullBlock$Type;
    interface SerumBuilder$CanAffectUserCallback {
        /**
         * Check if the Player can inject themself.
         * Called on client and server side.
         * @param level 
         * @param serumData CompoundTag stored under the tag key `biomancy:serum_data` on the Serum ItemStack
         * @param user The Player that wants to inject themself.
        */
        abstract canAffect(arg0: Internal.Level_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): boolean;
        (arg0: Internal.Level, arg1: Internal.CompoundTag, arg2: Internal.Player): boolean;
    }
    type SerumBuilder$CanAffectUserCallback_ = SerumBuilder$CanAffectUserCallback | ((arg0: Internal.Level, arg1: Internal.CompoundTag, arg2: Internal.Player)=> boolean);
    interface IGuiProperties {
        abstract getGuiTop(): number;
        abstract getScreenHeight(): number;
        abstract getScreenWidth(): number;
        abstract getScreenClass(): typeof Internal.Screen;
        abstract getGuiLeft(): number;
        abstract getGuiXSize(): number;
        abstract getGuiYSize(): number;
        get guiTop(): number
        get screenHeight(): number
        get screenWidth(): number
        get screenClass(): typeof Internal.Screen
        get guiLeft(): number
        get guiXSize(): number
        get guiYSize(): number
    }
    type IGuiProperties_ = IGuiProperties;
    class ConfigProfileInfoPacket$Entry {
        constructor(arg0: string, arg1: string)
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
        readonly name: string;
        readonly id: string;
    }
    type ConfigProfileInfoPacket$Entry_ = ConfigProfileInfoPacket$Entry;
    interface Object2IntMap <K> extends Internal.Map<K, number>, Internal.Object2IntFunction<K> {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Object,java.util.function.BiFunction)"(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "mergeInt(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object,java.lang.Object)"(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        values(): Internal.Collection<any>;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        replace(arg0: K, arg1: number): number;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        "remove(java.lang.Object,int)"(arg0: any, arg1: number): boolean;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        put(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer,java.lang.Integer)"(arg0: K, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "merge(java.lang.Object,java.lang.Integer,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        "merge(java.lang.Object,int,java.util.function.BiFunction)"(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        abstract size(): number;
        abstract putAll(arg0: Internal.Map_<K, number>): void;
        abstract object2IntEntrySet(): Internal.ObjectSet<Internal.Object2IntMap$Entry<K>>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        "computeIfAbsent(java.lang.Object,it.unimi.dsi.fastutil.objects.Object2IntFunction)"(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        "mergeInt(java.lang.Object,int,java.util.function.IntBinaryOperator)"(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract defaultReturnValue(): number;
        removeInt(arg0: any): number;
        "putIfAbsent(java.lang.Object,int)"(arg0: K, arg1: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.ToIntFunction)"(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        keySet(): Internal.Set<any>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        "mergeInt(java.lang.Object,int,it.unimi.dsi.fastutil.ints.IntBinaryOperator)"(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        abstract "containsValue(int)"(arg0: number): boolean;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        abstract isEmpty(): boolean;
        "replace(java.lang.Object,int)"(arg0: K, arg1: number): number;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        abstract containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "putIfAbsent(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        abstract containsValue(arg0: number): boolean;
        "replace(java.lang.Object,int,int)"(arg0: K, arg1: number, arg2: number): boolean;
        computeInt(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        remove(arg0: any, arg1: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "replace(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        computeIntIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        mergeInt(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.ints.IntBinaryOperator_): number;
        putIfAbsent(arg0: K, arg1: number): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        abstract defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        "computeIfAbsent(java.lang.Object,java.util.function.Function)"(arg0: K, arg1: Internal.Function_<K, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "containsValue(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        get empty(): boolean
    }
    type Object2IntMap_<K> = Object2IntMap<K>;
    class BOWindow$WindowRenderType extends Internal.Enum<Internal.BOWindow$WindowRenderType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BOWindow$WindowRenderType>>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static valueOf(arg0: string): Internal.BOWindow$WindowRenderType;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        calcRenderScale(arg0: com.mojang.blaze3d.platform.Window_, arg1: Internal.BOWindow_): number;
        static values(): Internal.BOWindow$WindowRenderType[];
        getDeclaringClass(): typeof Internal.BOWindow$WindowRenderType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(com.ldtteam.blockui.views.BOWindow$WindowRenderType)"(arg0: Internal.BOWindow$WindowRenderType_): number;
        compareTo(arg0: Internal.BOWindow$WindowRenderType_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.BOWindow$WindowRenderType
        static readonly FULLSCREEN_VANILLA: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly FIXED_VANILLA: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly OVERSIZED_VANILLA: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly FIXED: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly VANILLA: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly OVERSIZED: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
        static readonly FULLSCREEN: (Internal.BOWindow$WindowRenderType) & (Internal.BOWindow$WindowRenderType);
    }
    type BOWindow$WindowRenderType_ = "fixed" | "fullscreen" | "fullscreen_vanilla" | "vanilla" | "oversized_vanilla" | "oversized" | "fixed_vanilla" | BOWindow$WindowRenderType;
    class ParticleEngine implements Internal.ParticleManagerAccess, Internal.PhasedParticleEngine, Internal.PreparableReloadListener, Internal.ParticleManagerAccessor {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.TextureManager_)
        setParticleRenderingPhase(phase: Internal.ParticleRenderingPhase_): void;
        getClass(): typeof any;
        createTrackingEmitter(arg0: Internal.Entity_, arg1: Internal.ParticleOptions_): void;
        /**
         * @deprecated
        */
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.LightTexture_, arg3: Internal.Camera_, arg4: number): void;
        destroy(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        createParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle;
        notify(): void;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider$Sprite_<T>): void;
        wait(arg0: number, arg1: number): void;
        add(arg0: Internal.Particle_): void;
        createTrackingEmitter(arg0: Internal.Entity_, arg1: Internal.ParticleOptions_, arg2: number): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource$BufferSource_, arg2: Internal.LightTexture_, arg3: Internal.Camera_, arg4: number, arg5: Internal.Frustum_): void;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleProvider)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider_<T>): void;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<T>): void;
        getName(): string;
        addBlockHitEffects(arg0: BlockPos_, arg1: Internal.BlockHitResult_): void;
        setLevel(arg0: Internal.ClientLevel_): void;
        /**
         * @deprecated
        */
        register<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider_<T>): void;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        countParticles(): string;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
        */
        "register(net.minecraft.core.particles.ParticleType,net.minecraft.client.particle.ParticleProvider$Sprite)"<T extends Internal.ParticleOptions>(arg0: Internal.ParticleType_<T>, arg1: Internal.ParticleProvider$Sprite_<T>): void;
        toString(): string;
        crack(arg0: BlockPos_, arg1: Internal.Direction_): void;
        notifyAll(): void;
        tick(): void;
        connector$getProviders(): Internal.Int2ObjectMap<any>;
        hashCode(): number;
        wait(): void;
        invokeMakeParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.Particle;
        close(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getParticleAtlasTexture(): Internal.TextureAtlas;
        set particleRenderingPhase(phase: Internal.ParticleRenderingPhase_)
        get class(): typeof any
        get name(): string
        set level(arg0: Internal.ClientLevel_)
        get particleAtlasTexture(): Internal.TextureAtlas
        level: Internal.ClientLevel;
        readonly textureAtlas: Internal.TextureAtlas;
    }
    type ParticleEngine_ = ParticleEngine;
    interface VertexSorting$DistanceFunction {
        abstract apply(arg0: Vec3f_): number;
        (arg0: Vec3f): number;
    }
    type VertexSorting$DistanceFunction_ = VertexSorting$DistanceFunction | ((arg0: Vec3f)=> number);
    abstract class WearableRelicItem extends Internal.WearableArtifactItem implements Internal.IRelicItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setExperience(arg0: Internal.ItemStack_, arg1: number): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        setAbilitiesTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        static isActivated(stack: Internal.ItemStack_): boolean;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$1bc272$6(): Internal.UUID;
        getStatData(arg0: string, arg1: string): Internal.StatData;
        isFireResistant(): boolean;
        getAbilityQuality(arg0: Internal.ItemStack_, arg1: string): number;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        getRelicQuality(arg0: Internal.ItemStack_): number;
        canUseAbility(arg0: Internal.ItemStack_, arg1: string): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        handler$ino000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        setAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        getExperienceLeftForLevel(arg0: Internal.ItemStack_, arg1: number): number;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setLevel(arg0: Internal.ItemStack_, arg1: number): void;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getSlotModifiers(arg0: Internal.ItemStack_): Internal.RelicSlotModifier;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getLevelFromExperience(arg0: Internal.ItemStack_, arg1: number): number;
        tickActiveAbilitySelection(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string): void;
        getFortuneLevel(): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        handler$hie000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        getAbilityPoints(arg0: Internal.ItemStack_, arg1: string): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        addAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
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
        handler$dfo000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setAbilityTicking(arg0: Internal.ItemStack_, arg1: string, arg2: boolean): void;
        addExperience(arg0: Internal.ItemStack_, arg1: number): boolean;
        testAbilityCastPredicates(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        makesPiglinsNeutral(): boolean;
        setRenderProperties(arg0: any): void;
        static getBASE_ATTACK_DAMAGE_UUID(): Internal.UUID;
        handler$dfo000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        setAbilityPoints(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        setPoints(arg0: Internal.ItemStack_, arg1: number): void;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        mayUpgrade(arg0: Internal.ItemStack_, arg1: string): boolean;
        onUnequip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        isEquippedBy(entity: Internal.LivingEntity_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        mayPlayerReroll(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRelicData(): Internal.RelicData;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isAbilityTicking(arg0: Internal.ItemStack_, arg1: string): boolean;
        toggleItem(player: Internal.ServerPlayer_): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canSeeAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getExchanges(arg0: Internal.ItemStack_): number;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        isAbilityMaxLevel(arg0: Internal.ItemStack_, arg1: string): boolean;
        abstract constructDefaultRelicData(): Internal.RelicData;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getLevel(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getStatQuality(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        canPlayerUseActiveAbility(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setRelicData(arg0: Internal.RelicData_): void;
        isMaxLevel(arg0: Internal.ItemStack_): boolean;
        addExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$1bc272$7(): Internal.UUID;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        addAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        addPoints(arg0: Internal.ItemStack_, arg1: number): void;
        getStatByQuality(arg0: string, arg1: string, arg2: number): number;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        mayPlayerUpgrade(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getRerollRequiredExperience(arg0: string): number;
        arch$registryName(): ResourceLocation;
        getAbilitiesTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getStyleData(): Internal.StyleData;
        addExperience(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isCosmetic(): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        randomizeStat(arg0: Internal.ItemStack_, arg1: string, arg2: string): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        getAbilityCastData(arg0: string): Internal.CastData;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        getAbilityCooldown(arg0: Internal.ItemStack_, arg1: string): number;
        getMaxQuality(): number;
        setRarity(arg0: Internal.Rarity_): void;
        static setActivated(stack: Internal.ItemStack_, active: boolean): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        setAbilityTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        getExperience(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        handler$hie001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        spreadExperience(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAbilityTempTag(arg0: Internal.ItemStack_, arg1: string, arg2: Internal.CompoundTag_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getLevelingTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        addCooldown(entity: Internal.LivingEntity_, ticks: number): void;
        isOnCooldown(entity: Internal.LivingEntity_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        isExchangeAvailable(arg0: Internal.Player_, arg1: Internal.ItemStack_): boolean;
        getAttributeModifiers(arg0: Internal.ItemStack_): Internal.RelicAttributeModifier;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string): number;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        mayPlayerReset(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: string): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        handler$dle000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        mayReroll(arg0: Internal.ItemStack_, arg1: string): boolean;
        handler$epg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        handler$hie000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        getAbilityData(arg0: string): Internal.AbilityData;
        setAbilityCooldownCap(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getAbilityTempTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        getExchangeCost(arg0: Internal.ItemStack_): number;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        wornTick(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        getLootingLevel(): number;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAbilitiesData(): Internal.AbilitiesData;
        getLootData(): Internal.LootData;
        getPoints(arg0: Internal.ItemStack_): number;
        isItemResearched(arg0: Internal.Player_): boolean;
        setAttackDamage(attackDamage: number): void;
        castActiveAbility(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: string, arg3: Internal.CastType_, arg4: Internal.CastStage_): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getResetRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        setItemResearched(arg0: Internal.Player_, arg1: boolean): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        setAbilityCooldown(arg0: Internal.ItemStack_, arg1: string, arg2: number): void;
        getUpgradeRequiredExperience(arg0: Internal.ItemStack_, arg1: string): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAbilityInitialValues(arg0: Internal.ItemStack_, arg1: string): Internal.Map<string, number>;
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
        getAbilityInitialValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        getExperienceBetweenLevels(arg0: number, arg1: number): number;
        notify(): void;
        addAttributeModifier(attributeModifier: Internal.ArtifactAttributeModifier_): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        dropExperience(arg0: Internal.Level_, arg1: Vec3d_, arg2: number): void;
        "getItem()"(): Internal.Item;
        getEquipSound(): Internal.SoundEvent;
        handler$dfo000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canWalkOnPowderedSnow(): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        spreadExperience(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number, arg3: number): void;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$eec000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        getAttributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>;
        getAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string): number;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getTotalExperienceForLevel(arg0: number): number;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        modifyReturnValue$jbf000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$1bc272$8(): Internal.UUID;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        addAbilityValue(arg0: Internal.ItemStack_, arg1: string, arg2: string, arg3: number): void;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        addLevel(arg0: Internal.ItemStack_, arg1: number): void;
        setLevelingTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        randomizeStats(arg0: Internal.ItemStack_, arg1: string): void;
        getLevelingData(): Internal.LevelingData;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltipList: Internal.List_<any>, flags: Internal.TooltipFlag_): void;
        setExchanges(arg0: Internal.ItemStack_, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        handler$dfo000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        findAllEquippedBy(entity: Internal.LivingEntity_): Internal.Stream<Internal.ItemStack>;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        onEquip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        getTypeItemStackKey(): Internal.ItemStackKey;
        mayReset(arg0: Internal.ItemStack_, arg1: string): boolean;
        modifyReturnValue$jbf000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        getAbilityTag(arg0: Internal.ItemStack_, arg1: string): Internal.CompoundTag;
        isAbilityOnCooldown(arg0: Internal.ItemStack_, arg1: string): boolean;
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
        get fortuneLevel(): number
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
        get relicData(): Internal.RelicData
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set relicData(arg0: Internal.RelicData_)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get styleData(): Internal.StyleData
        get cosmetic(): boolean
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        get maxQuality(): number
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
        get lootingLevel(): number
        set itemBuilder(b: Internal.ItemBuilder_)
        get abilitiesData(): Internal.AbilitiesData
        get lootData(): Internal.LootData
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
        get "item()"(): Internal.Item
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get attributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$1bc272$8(): Internal.UUID
        get eatingSound(): Internal.SoundEvent
        get levelingData(): Internal.LevelingData
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type WearableRelicItem_ = WearableRelicItem;
    interface LivingChangeTargetEvent$ILivingTargetType {
    }
    type LivingChangeTargetEvent$ILivingTargetType_ = LivingChangeTargetEvent$ILivingTargetType;
    interface Kind1 <F extends Internal.K1, Mu extends Internal.Kind1$Mu> extends Internal.App<Mu, F> {
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>): Internal.Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>): Internal.Products$P6<F, T1, T2, T3, T4, T5, T6>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>): Internal.Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        unbox<F extends Internal.K1, Proof extends Internal.Kind1$Mu>(arg0: Internal.App_<Proof, F>): Internal.Kind1<F, Proof>;
        group<T1, T2>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>): Internal.Products$P2<F, T1, T2>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>): Internal.Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>): Internal.Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>): Internal.Products$P7<F, T1, T2, T3, T4, T5, T6, T7>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>): Internal.Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>): Internal.Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>): Internal.Products$P4<F, T1, T2, T3, T4>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>): Internal.Products$P5<F, T1, T2, T3, T4, T5>;
        group<T1>(arg0: Internal.App_<F, T1>): Internal.Products$P1<F, T1>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>): Internal.Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>): Internal.Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>, arg3: Internal.App_<F, T4>, arg4: Internal.App_<F, T5>, arg5: Internal.App_<F, T6>, arg6: Internal.App_<F, T7>, arg7: Internal.App_<F, T8>, arg8: Internal.App_<F, T9>, arg9: Internal.App_<F, T10>, arg10: Internal.App_<F, T11>, arg11: Internal.App_<F, T12>, arg12: Internal.App_<F, T13>, arg13: Internal.App_<F, T14>, arg14: Internal.App_<F, T15>, arg15: Internal.App_<F, T16>): Internal.Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        group<T1, T2, T3>(arg0: Internal.App_<F, T1>, arg1: Internal.App_<F, T2>, arg2: Internal.App_<F, T3>): Internal.Products$P3<F, T1, T2, T3>;
    }
    type Kind1_<F extends Internal.K1, Mu extends Internal.Kind1$Mu> = Kind1<F, Mu>;
    abstract class LivingEntity extends Internal.Entity implements Internal.LivingEntityExtensions, Internal.AccessorLivingEntity, Internal.Attackable, Internal.RollInvulnerable, Internal.LivingAccessor, vazkii.botania.mixin.LivingEntityAccessor, artifacts.mixin.accessors.LivingEntityAccessor, Internal.BlockCachingEntity, Internal.ICitadelDataEntity, net.darkhax.bookshelf.mixin.accessors.entity.AccessorLivingEntity, Internal.MagicData$IExtendedEntity, Internal.DarknessIncarnateUserAccessor, de.teamlapen.vampirism.mixin.LivingEntityAccessor, net.bettercombat.mixin.LivingEntityAccessor, earth.terrarium.adastra.mixins.common.LivingEntityAccessor, Internal.LivingEntityKJS, Internal.GrizzlyExtras, com.teamabnormals.allurement.core.mixin.LivingEntityAccessor, Internal.WatcherPossessionAccessor, Internal.ConfigurableKnockback, com.c2h6s.etstlib.mixin.LivingEntityAccessor, com.github.elenterius.biomancy.mixin.accessor.LivingEntityAccessor, Internal.EntityDropChanceAccessor, com.blackgear.vanillabackport.core.mixin.access.LivingEntityAccessor, de.teamlapen.werewolves.mixin.LivingEntityAccessor, net.mehvahdjukaar.supplementaries.mixins.LivingEntityAccessor, Internal.LivingEntityData$TransientDataProvider, Internal.LivingEntityAccessor, Internal.IForgeLivingEntity, Internal.EquipmentEntity, Internal.HeadRotationEntityAccessor, io.redspace.ironsspellbooks.mixin.LivingEntityAccessor, Internal.LivingEntityAccess, Internal.FrostmintFreezableAccessor, Internal.ISlimeable {
        constructor(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.Level_)
        getAnimator(): Internal.Optional<Internal.AzAnimator<K, T>>;
        rarcompat$travel(arg0: Vec3d_, arg1: Internal.Mob_): void;
        etf$getType(): Internal.EntityType<any>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        etf$getOptifineVehicleId(): number;
        handler$ihg000$alexscaves$ac_isInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        getPositionCodec(): Internal.VecDeltaCodec;
        handler$dcl000$ad_astra$adastra$travel(travelVector: Vec3d_, ci: Internal.CallbackInfo_): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        handler$cda000$attributeslib$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        setMaxUpStep(arg0: number): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        handler$fbi001$goety$travelRidden(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        handler$epe000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        isSoulSpeedBlock(): boolean;
        updateWalkAnimation(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        handler$ihg000$alexscaves$ac_turn(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        updateSwingTime(): void;
        handler$fkl000$etstlib$getDamage(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        handler$hgc000$domesticationinnovation$di_gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        setMotionZ(z: number): void;
        getAttachmentProgress(arg0: number): number;
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
        handler$hjb000$raidsenhanced$canEnterPose(arg0: Internal.Pose_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        callIsPreserved(): boolean;
        updateSwimAmount(): void;
        invokeTurnHead(arg0: number, arg1: number): number;
        getRandomZ(arg0: number): number;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        handler$fbe000$goety$push(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean): Internal.TrackedDataContainer<O, T>;
        etf$getVelocity(): Vec3d;
        dataAnchor$createTrackedData(): void;
        onFlap(): void;
        setAnimator(arg0: Internal.AzAnimator_<any, any>): void;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        resetFallDistance(): void;
        handler$djm000$cataclysm$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        rarcompat$tickRidden(arg0: Internal.Mob_, arg1: Internal.Player_): void;
        handler$epe000$irons_spellbooks$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isWebbed(): boolean;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        etf$getHandItems(): Internal.Iterable<any>;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        handler$ihn000$alexscaves$ac_increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getName(): net.minecraft.network.chat.Component;
        handler$ihg000$alexscaves$ac_makeBoundingBox(arg0: Internal.CallbackInfoReturnable_<any>): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getSwipeDelay(): number;
        getKillCredit(): this;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        handler$hig001$relics$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        handler$ifn000$libertyvillagers$replaceIsClimbing(cir: Internal.CallbackInfoReturnable_<any>): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        modifyExpressionValue$hab001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        onInsideBlock(arg0: Internal.BlockState_): void;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        isEndimationPlaying(arg0: Internal.PlayableEndimation_): boolean;
        localvar$gbj000$bettercombat$takeKnockback_HEAD_changeStrength(knockbackStrength: number): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        fireImmune(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        handler$epk000$irons_spellbooks$changeSummonHurtCredit(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        handler$gok000$treechop$injectDataLoading(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        abstract setNoHoney(arg0: number): void;
        getTicksFrozen(): number;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        getDynamicLightZ(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        handler$fek000$alekiships$injectOnClimbableWhileClimbingMasts(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getLastHurtByPlayer(): Internal.Player;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        handler$hid000$relics$getBlockSpeedFactor(arg0: Internal.CallbackInfoReturnable_<any>): void;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        isAffectedByFluids(): boolean;
        handler$hgc000$domesticationinnovation$di_canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$hap000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setFireType(arg0: ResourceLocation_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        etf$getOptifineId(): number;
        handler$epk000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        static cast<K, T>(arg0: T): Internal.AzAnimatorAccessor<K, T>;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        modifyExpressionValue$hab000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        irons_spellbooks$getMagicData(): Internal.MagicData;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        handler$ihg000$alexscaves$ac_move(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        getX(arg0: number): number;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        callUnsetRemoved(): void;
        detectEquipmentUpdates(): void;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        getSelfAndPassengers(): Internal.Stream<any>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        removeSoulSpeed(): void;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        redirect$cda000$attributeslib$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        getDynamicLightX(): number;
        callReapplyPosition(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getTicksUsingItem(): number;
        getLootTable(): ResourceLocation;
        getArrowCount(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        resetEndimation(): void;
        isPeacefulCreature(): boolean;
        onEndimationEnd(arg0: Internal.PlayableEndimation_, arg1: Internal.PlayableEndimation_): void;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        handler$haf000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        handler$dcl000$ad_astra$adastra$tick(ci: Internal.CallbackInfo_): void;
        handler$ihg000$alexscaves$ac_getEyePosition(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        handler$ihg001$alexscaves$ac_tick(arg0: Internal.CallbackInfo_): void;
        notify(): void;
        getFirstTick(): boolean;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        abstract getMainArm(): Internal.HumanoidArm;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        etf$getBlockY(): number;
        isSprinting(): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getDimensions(): Internal.EntityDimensions;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        callGetJumpPower(): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        setWebbed(arg0: boolean): void;
        clearSleepingPos(): void;
        abstract ac_setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        canSpawnSprintParticle(): boolean;
        canRide(arg0: Internal.Entity_): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): this;
        handler$fbi002$goety$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getOnPos(arg0: number): BlockPos;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        isJumping(): boolean;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        removeAfterChangingDimensions(): void;
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
        invokeShouldDropLoot(): boolean;
        etf$getUuid(): Internal.UUID;
        dataAnchor$getTrackedDataKeys(): Internal.Collection<any>;
        removeVehicle(): void;
        defineSynchedData(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        checkInsideBlocks(): void;
        updateFluidOnEyes(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        createHoverEvent(): Internal.HoverEvent;
        bookshelf$makePoofParticles(): void;
        serverAiStep(): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        etf$isBlockEntity(): boolean;
        canChangeDirection(): boolean;
        redirect$cda000$attributeslib$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        shouldUpdateDynamicLight(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        waterSwimSound(): void;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
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
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        updatingUsingItem(): void;
        dataAnchor$getTrackedData(key: Internal.TrackedDataKey_<any>): Internal.Optional<any>;
        invokeGetJumpPower_werewolves(): number;
        handler$fkl000$etstlib$percentageBypass(arg0: DamageSource_, arg1: number, arg2: Internal.CallbackInfoReturnable_<any>): void;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        handler$fbe000$goety$fireImmune(arg0: Internal.CallbackInfoReturnable_<any>): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getFireImmuneTicks(): number;
        handler$gok000$treechop$injectDataSaving(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAttributes(): Internal.AttributeMap;
        setMagneticDeltaY(arg0: number): void;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        botania_playHurtSound(arg0: DamageSource_): void;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        handler$cda000$attributeslib$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        etf$getWorld(): Internal.Level;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        setUseItemRemaining(arg0: number): void;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        stopUsingItem(): void;
        isSleeping(): boolean;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        setDataMap(arg0: Internal.Map_<any, any>): void;
        etf$getBlockPos(): BlockPos;
        handler$fbe000$goety$makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_, arg2: Internal.CallbackInfo_): void;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        handler$cmc000$clanginghowl$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        playBlockFallSound(): void;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        rarcompat$getRiddenInput(arg0: Internal.Player_, arg1: Internal.CowboyHatItem_, arg2: Internal.Mob_): Vec3d;
        setRemainingFireTicks(arg0: number): void;
        handler$fbi001$goety$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        etf$hasCustomName(): boolean;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        setSwipeDelay(arg0: number): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        handler$fbi000$goety$getMobType(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        hasExactlyOnePlayerPassenger(): boolean;
        canBeSeenAsEnemy(): boolean;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        biomancy$setEyeHeight(arg0: number): void;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        getValue(arg0: Internal.TrackedData_<any>): any;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        biomancy$getData(): Internal.LivingEntityData$TransientDataProvider$DataHolder;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        callSetWebbed(arg0: boolean): void;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        handler$hgc000$domesticationinnovation$di_isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        endimateTick(): void;
        callIsWebbed(): boolean;
        abstract ac_dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        handler$hig000$relics$onAiStep(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        handler$dcl000$ad_astra$adastra$hurt(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        onChangedBlock(arg0: BlockPos_): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        handler$eci001$combatnouveau$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getBbHeight(): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        calculateFallDamage(arg0: number, arg1: number): number;
        redirect$cda000$attributeslib$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        getLastAttacker(): this;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        updateEffectVisibility(): void;
        getDataMap(): Internal.Map<any, any>;
        getPercentFrozen(): number;
        handler$fbi000$goety$randomTeleport(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPortalCooldown(arg0: number): void;
        setPossessedByWatcher(arg0: boolean): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        handler$ihg000$alexscaves$ac_collide(arg0: Vec3d_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        biomancy$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        updateInvisibilityStatus(): void;
        isDirty(): boolean;
        handler$fbi000$goety$isSensitiveToWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$epk000$irons_spellbooks$onEffectRemoved(arg0: Internal.MobEffectInstance_, arg1: Internal.CallbackInfo_): void;
        etf$getScoreboardTeam(): Internal.Team;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        handler$ghk000$canary$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): this;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        wrapOperation$jjk000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        isDynamicLightEnabled(): boolean;
        getMagneticDeltaZ(): number;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        handler$epk000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        handler$ibg002$blueprint$read(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
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
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        handler$haf00c$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        updateFallFlying(): void;
        handler$epk000$irons_spellbooks$saveDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        handler$fkj000$etstlib$removeFromTickerMap(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        setAnimationTick(arg0: number): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
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
        biomancy$getDeathSound(): Internal.SoundEvent;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        onSoulSpeedBlock(): boolean;
        handler$ihg000$alexscaves$ac_onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>, arg1: Internal.CallbackInfo_): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        playEntityOnFireExtinguishedSound(): void;
        setFrostmintFreezing(arg0: boolean): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        handler$fkj000$etstlib$cancelHurt(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$fbi001$goety$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getMagneticDeltaX(): number;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        handler$fli000$bettermobcombat$pre_getAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPitch(): number;
        getRandom(): Internal.RandomSource;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        handler$hap000$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        getPassengersAndSelf(): Internal.Stream<any>;
        setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        handler$ihn000$alexscaves$ac_livingTick(arg0: Internal.CallbackInfo_): void;
        isNoEndimationPlaying(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        setMagnetHeadRotation(): void;
        "self()"(): this;
        localvar$ccn000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPrevMagneticAttachmentFace(): Internal.Direction;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        handler$hig001$relics$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        biomancy$getDimensions(): Internal.EntityDimensions;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        isActive(): boolean;
        handler$fbi000$goety$dropExperience(arg0: Internal.CallbackInfo_): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        handler$hig001$relics$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        getLastHurtByMob(): this;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        setSlowFallingFlag(arg0: boolean): void;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        setValue(arg0: Internal.TrackedData_<any>, arg1: any): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        elytratrims$isGui(): boolean;
        isFallFlying(): boolean;
        getEncodeId(): string;
        handler$ifn000$libertyvillagers$replaceAttributeValueForVillagersAndGolems(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$fbi000$goety$jumpFromGround(arg0: Internal.CallbackInfo_): void;
        getY(arg0: number): number;
        canaryOnBlockCacheDeleted(): void;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        handler$fbi000$goety$addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfoReturnable_<any>): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        isPossessedByWatcher(): boolean;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getControllingPassenger(): this;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        handler$hig000$relics$canBeSeenByAnyone(arg0: Internal.CallbackInfoReturnable_<any>): void;
        startRiding(arg0: Internal.Entity_): boolean;
        setChopData(arg0: Internal.SyncedChopData_): Internal.SyncedChopData;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        getDirtyEntries(): Internal.Set<any>;
        canBeHitByProjectile(): boolean;
        postMagnetJump(): void;
        getEyeY(): number;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        getChopData(): Internal.SyncedChopData;
        abstract setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        doWaterSplashEffect(): void;
        invokeGetExperiencePoints_vampirism(): number;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        handler$had000$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        callSetPreserved(arg0: boolean): void;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        handler$cep000$illageandspillage$canAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        stepOnMagnetBlock(arg0: BlockPos_): void;
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
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
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
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        callGetBlockPosBelowThatAffectsMyMovement(): BlockPos;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        clean(): void;
        getLastHurtByPlayerTime(): number;
        biomancy$getVoicePitch(): number;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getWaterSlowDown(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        supp$getSlimedTicks(): number;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getJumpBoostPower(): number;
        resetMagnetHeadRotation(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        isRewinding(): boolean;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getEyePosition(arg0: number): Vec3d;
        handler$haf000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        handler$ecg000$combatnouveau$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$fim000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        spawnSprintParticle(): void;
        setSwipes(arg0: number): void;
        handler$fjn000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        dropEquipment(): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        handler$fbe000$goety$isSwimming(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getFirstPassenger(): Internal.Entity;
        getEntries(arg0: boolean): Internal.Set<any>;
        heal(arg0: number): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAnimatorOrNull(): Internal.AzAnimator<any, any>;
        getLookAngle(): Vec3d;
        setRemovalReason(arg0: Internal.Entity$RemovalReason_): void;
        setArrowCount(arg0: number): void;
        getPermissionLevel(): number;
        getMotionZ(): number;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        handler$cda000$attributeslib$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        static makeBasicContainer<O, T extends dev.corgitaco.dataanchor.data.TrackedData<O>>(registry: Internal.TrackedDataRegistry_<O, T>, o: O, isClient: boolean, lazyLoad: boolean): Internal.TrackedDataContainer<O, T>;
        static get<K, T>(arg0: T): Internal.Optional<Internal.AzAnimator<K, T>>;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        biomancy$getSoundVolume(): number;
        pushEntities(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        handler$dgi000$ramcompat$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        localvar$hid001$relics$fluidCollision(arg0: Vec3d_): Vec3d;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        biomancy$random(): Internal.RandomSource;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        etf$canBeBright(): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        redirect$cda000$attributeslib$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
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
        handler$hap00d$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        handler$dnp000$biomancy$onGetAttributeValue(arg0: Internal.Attribute_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        trackingPosition(): Vec3d;
        setMagneticDeltaX(arg0: number): void;
        getNameTagOffsetY(): number;
        getCurrentSwingDuration(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        setLivingEntityFlagInvoker(arg0: number, arg1: boolean): void;
        unsetRemoved(): void;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        handler$hid000$relics$setWet(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$gbj000$bettercombat$getAttributeValue_Inject(attribute: Internal.Attribute_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        setMagneticDeltaZ(arg0: number): void;
        completeUsingItem(): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        hasSlowFallingFlag(): boolean;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        abstract getNoHoney(): number;
        rideTick(): void;
        getSwipes(): number;
        handler$fbe000$goety$canCollideWith(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        wait(): void;
        handler$hgc000$domesticationinnovation$di_rideableInWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        handler$fac000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        markHurt(): void;
        abstract getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        kill(): void;
        onEnterCombat(): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        biomancy$setDimensions(arg0: Internal.EntityDimensions_): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        getJumpPower(): number;
        brainProvider(): Internal.Brain$Provider<any>;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        setRollInvulnerableTicks(ticks: number): void;
        removeEffectParticles(): void;
        revive(): void;
        getBbWidth(): number;
        callSetRot(arg0: number, arg1: number): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getLastAttackedTicks(): number;
        addDeltaMovement(arg0: Vec3d_): void;
        handler$fdi000$lavafishing$travel(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        handler$epk000$irons_spellbooks$readDataAttachment(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        canUpdate(): boolean;
        handler$ihg000$alexscaves$ac_getEyePosition_lerp(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$epk000$irons_spellbooks$onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_, arg2: Internal.CallbackInfo_): void;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): net.minecraft.network.chat.Component;
        elytratrims$markGui(): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        handler$fbe000$goety$playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CallbackInfo_): void;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        isPreserved(): boolean;
        handler$hgc000$domesticationinnovation$di_getMovementEmission(arg0: Internal.CallbackInfoReturnable_<any>): void;
        artifacts$getPocketPistonLength(): number;
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
        localvar$djj000$fluidCollision(arg0: Vec3d_): Vec3d;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        checkBedExists(): boolean;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        abstract isUrsa(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        fabric_hasPersistentAttachments(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        redirect$cda000$attributeslib$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        redirect$fjh000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        notifyAll(): void;
        wrapOperation$ece000$artifacts$travel(state: Internal.BlockState_, level: Internal.LevelReader_, pos: BlockPos_, entity: Internal.Entity_, original: Internal.Operation_<any>): number;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        localvar$hig000$relics$setBlockFriction(arg0: number): number;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        handler$epk000$irons_spellbooks$onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        handler$had000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        handler$cep000$illageandspillage$defineSynchedData(arg0: Internal.CallbackInfo_): void;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        setId(arg0: number): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        abstract ac_getEquipmentDropChance(arg0: Internal.EquipmentSlot_): number;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        handler$ihn000$alexscaves$ac_calculateEntityAnimation(arg0: boolean, arg1: Internal.CallbackInfo_): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        handler$ecm000$combatnouveau$getAttackAnim(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$eci000$combatnouveau$blockedByShield(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        checkDespawn(): void;
        getDynamicLightWorld(): Internal.Level;
        handler$fkj000$etstlib$addVibrationListener(arg0: Internal.BiConsumer_<any, any>, arg1: Internal.CallbackInfo_): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getMagneticAttachmentFace(): Internal.Direction;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        getMagneticDeltaY(): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        extinguish(): void;
        static getOrNull<K, T>(arg0: T): Internal.AzAnimator<K, T>;
        setDynamicLightEnabled(arg0: boolean): void;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        tickEffects(): void;
        isInvertedHealAndHarm(): boolean;
        getEndimatedState(): Internal.Endimatable$EndimatedState;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setPreserved(arg0: boolean): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        handler$hgc000$domesticationinnovation$di_pushedByWater(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        get animator(): Internal.Optional<Internal.AzAnimator<K, T>>
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        get soulSpeedBlock(): boolean
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
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
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        set animator(arg0: Internal.AzAnimator_<any, any>)
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        get webbed(): boolean
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get swipeDelay(): number
        get killCredit(): Internal.LivingEntity
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
        get lastHurtByPlayer(): Internal.Player
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        set fireType(arg0: ResourceLocation_)
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get ticksUsingItem(): number
        get lootTable(): ResourceLocation
        get arrowCount(): number
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get dimensions(): Internal.EntityDimensions
        set webbed(arg0: boolean)
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        get jumping(): boolean
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        set lastAttackedTicks(arg0: number)
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
        get mainHandItem(): Internal.ItemStack
        get fireType(): ResourceLocation
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
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
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get dataMap(): Internal.Map<any, any>
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set possessedByWatcher(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get dirty(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get dynamicLightEnabled(): boolean
        get magneticDeltaZ(): number
        set chestArmorItem(item: Internal.ItemStack_)
        set playingEndimation(arg0: Internal.PlayableEndimation_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get flapping(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        set animationTick(arg0: number)
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
        get active(): boolean
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
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get animatorOrNull(): Internal.AzAnimator<any, any>
        get lookAngle(): Vec3d
        set removalReason(arg0: Internal.Entity$RemovalReason_)
        set arrowCount(arg0: number)
        get permissionLevel(): number
        get motionZ(): number
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
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
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
        set magneticDeltaX(arg0: number)
        get nameTagOffsetY(): number
        get currentSwingDuration(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
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
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        set rollInvulnerableTicks(ticks: number)
        get bbWidth(): number
        get lastAttackedTicks(): number
        get "name()"(): net.minecraft.network.chat.Component
        get typeName(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
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
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
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
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get magneticDeltaY(): number
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        set dynamicLightEnabled(arg0: boolean)
        get invertedHealAndHarm(): boolean
        get endimatedState(): Internal.Endimatable$EndimatedState
        set preserved(arg0: boolean)
        get freezing(): boolean
        set sharedFlagOnFire(arg0: boolean)
        static readonly DEATH_DURATION: (20) & (number);
        yBodyRotO: number;
        deathScore: number;
        noActionTime: number;
        deathTime: number;
        yya: number;
        run: number;
        static readonly SWING_DURATION: (6) & (number);
        static readonly LIVING_ENTITY_FLAG_IS_USING: (1) & (number);
        lerpX: number;
        attackAnim: number;
        static readonly ARMOR_SLOT_OFFSET: (100) & (number);
        lastHurt: number;
        readonly timeOffs: number;
        oAttackAnim: number;
        attributes: Internal.AttributeMap;
        swinging: boolean;
        static readonly HAND_SLOTS: (2) & (number);
        rotOffs: number;
        static readonly SLEEPING_DIMENSIONS: (Internal.EntityDimensions) & (Internal.EntityDimensions);
        removeStingerTime: number;
        dead: boolean;
        animStepO: number;
        lerpY: number;
        irons_spellbooks$magicData: Internal.MagicData;
        static readonly USE_ITEM_INTERVAL: (4) & (number);
        walkAnimation: Internal.WalkAnimationState;
        static readonly MIN_MOVEMENT_DISTANCE: (0.003) & (number);
        useItemRemaining: number;
        brain: Internal.Brain<any>;
        hurtDuration: number;
        attackStrengthTicker: number;
        irons_spellbooks$capeData: Internal.IArmorCapeProvider$CapeData;
        zza: number;
        oRun: number;
        static readonly LIVING_ENTITY_FLAG_SPIN_ATTACK: (4) & (number);
        jumping: boolean;
        static DATA_HEALTH_ID: Internal.EntityDataAccessor<number>;
        static readonly EQUIPMENT_SLOT_OFFSET: (98) & (number);
        autoSpinAttackTicks: number;
        removeArrowTime: number;
        lerpYRot: number;
        lyHeadRot: number;
        readonly activeEffects: Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        lastHurtByPlayerTime: number;
        swingingArm: Internal.InteractionHand;
        lerpZ: number;
        lerpXRot: number;
        static readonly DATA_LIVING_ENTITY_FLAGS: Internal.EntityDataAccessor<number>;
        hurtTime: number;
        lastHurtByPlayer: Internal.Player;
        lerpHeadSteps: number;
        static readonly PLAYER_HURT_EXPERIENCE_TIME: (100) & (number);
        supp$slimedTicks: number;
        static readonly DEFAULT_BASE_GRAVITY: (0.08) & (number);
        yBodyRot: number;
        yHeadRot: number;
        yHeadRotO: number;
        fallFlyTicks: number;
        static readonly ARMOR_SLOTS: (4) & (number);
        static readonly LIVING_ENTITY_FLAG_OFF_HAND: (2) & (number);
        static readonly DEFAULT_EYE_HEIGHT: (1.74) & (number);
        swingTime: number;
        static readonly $assertionsDisabled: (true) & (boolean);
        animStep: number;
        lerpSteps: number;
        biomancy$transientData: Internal.LivingEntityData$TransientDataProvider$DataHolder;
        readonly invulnerableDuration: number;
        lastDamageStamp: number;
        updateClimbingMobCachingSectionOnChange: boolean;
        xxa: number;
        useItem: Internal.ItemStack;
        lastPos: BlockPos;
        readonly rotA: number;
        effectsDirty: boolean;
        static readonly EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: (0.5) & (number);
        lastDamageSource: DamageSource;
        noJumpDelay: number;
    }
    type LivingEntity_ = LivingEntity;
    class StrawBaleBlock extends Internal.HayBlock {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
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
    type StrawBaleBlock_ = StrawBaleBlock;
    class WallMushroomPatchBlock extends Internal.Block {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
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
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly BLOCKSTATE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type WallMushroomPatchBlock_ = WallMushroomPatchBlock;
    class WrappingRecipeSerializer <WrappingType extends Internal.Recipe<any>, WrappedType extends Internal.Recipe<any>> implements Internal.RecipeSerializer<WrappingType> {
        constructor(arg0: Internal.RecipeSerializer_<WrappedType>, arg1: Internal.Function_<WrappingType, WrappedType>, arg2: Internal.Function_<WrappedType, WrappingType>)
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_, arg2: Internal.ICondition$IContext_): WrappingType;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): WrappingType;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: com.google.gson.JsonObject_): WrappingType;
        wait(): void;
        wait(arg0: number): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: WrappingType): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type WrappingRecipeSerializer_<WrappingType extends Internal.Recipe<any>, WrappedType extends Internal.Recipe<any>> = WrappingRecipeSerializer<WrappingType, WrappedType>;
    class ListPoolElement extends Internal.StructurePoolElement implements com.github.L_Ender.cataclysm.mixin.accessor.ListPoolElementAccessor, Internal.ListPoolElementAccessor {
        constructor(arg0: Internal.List_<Internal.StructurePoolElement>, arg1: Internal.StructureTemplatePool$Projection_)
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        getElements(): Internal.List<any>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        get elements(): Internal.List<any>
        static readonly CODEC: Internal.Codec<Internal.ListPoolElement>;
        elements: Internal.List<Internal.StructurePoolElement>;
    }
    type ListPoolElement_ = ListPoolElement;
    class TippedArrowItem extends Internal.ArrowItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        static goldenagecombat$getBaseAttackDamageUUID$combatnouveau_$md$1bc272$6(): Internal.UUID;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        handler$ino000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        handler$hie000$relics$init(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
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
        handler$dfo000$goety_spillage$finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
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
        handler$dfo000$goety_spillage$use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): Internal.AbstractArrow;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
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
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID$combatnouveau_$md$1bc272$7(): Internal.UUID;
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
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        handler$hie001$relics$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
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
        handler$dle000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$epg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        handler$hie000$relics$inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean, arg5: Internal.CallbackInfo_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        handler$fan000$goety$createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
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
        handler$dfo000$goety_spillage$getUseDuration(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        handler$eec000$elytratrims$modifyTooltip(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<any>, context: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        modifyReturnValue$jbf000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        static getBASE_ATTACK_DAMAGE_UUID$tact_$md$1bc272$8(): Internal.UUID;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        handler$dfo000$goety_spillage$getUseAnimation(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        modifyReturnValue$jbf000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
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
        get BASE_ATTACK_DAMAGE_UUID$tact_$md$1bc272$8(): Internal.UUID
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type TippedArrowItem_ = TippedArrowItem;
    class SoundKeyframeData extends mod.azure.azurelib.core.keyframe.event.data.KeyFrameData {
        constructor(arg0: number, arg1: string)
        getClass(): typeof any;
        hashCode(): number;
        getStartTick(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        getSound(): string;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get startTick(): number
        get sound(): string
    }
    type SoundKeyframeData_ = SoundKeyframeData;
    class TileComponentEjector implements Internal.ITileComponent, Internal.MekanismContainer$ISpecificContainerTracker {
        constructor(tile: Internal.TileEntityMekanism_, chemicalEjectRate: Internal.LongSupplier_)
        constructor(tile: Internal.TileEntityMekanism_, chemicalEjectRate: Internal.LongSupplier_, fluidEjectRate: Internal.IntSupplier_, energyEjectRate: Internal.FloatingLongSupplier_)
        constructor(tile: Internal.TileEntityMekanism_, chemicalEjectRate: Internal.LongSupplier_, fluidEjectRate: Internal.IntSupplier_)
        constructor(tile: Internal.TileEntityMekanism_)
        constructor(tile: Internal.TileEntityMekanism_, energyEjectRate: Internal.FloatingLongSupplier_)
        getClass(): typeof any;
        getSpecificSyncableData(): Internal.List<Internal.ISyncableData>;
        write(nbtTags: Internal.CompoundTag_): void;
        trackForMainContainer(container: Internal.MekanismContainer_): void;
        getOutputColor(): Internal.EnumColor;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEjecting(info: Internal.ConfigInfo_, type: Internal.TransmissionType_): boolean;
        setCanTankEject(canTankEject: Internal.Predicate_<Internal.IChemicalTank<any, any>>): this;
        hasStrictInput(): boolean;
        setOutputData(config: Internal.TileComponentConfig_, ...types: Internal.TransmissionType_[]): this;
        setOutputColor(color: Internal.EnumColor_): void;
        readFromUpdateTag(updateTag: Internal.CompoundTag_): void;
        setStrictInput(strict: boolean): void;
        tickServer(): void;
        toString(): string;
        setInputColor(side: mekanism.api.RelativeSide_, color: Internal.EnumColor_): void;
        isInputSideEnabled(side: mekanism.api.RelativeSide_): boolean;
        addToUpdateTag(updateTag: Internal.CompoundTag_): void;
        notifyAll(): void;
        getInputColor(side: mekanism.api.RelativeSide_): Internal.EnumColor;
        invalidate(): void;
        setCanEject(canEject: Internal.Predicate_<Internal.TransmissionType>): this;
        hashCode(): number;
        read(nbtTags: Internal.CompoundTag_): void;
        removed(): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get specificSyncableData(): Internal.List<Internal.ISyncableData>
        get outputColor(): Internal.EnumColor
        set canTankEject(canTankEject: Internal.Predicate_<Internal.IChemicalTank<any, any>>)
        set outputColor(color: Internal.EnumColor_)
        set strictInput(strict: boolean)
        set canEject(canEject: Internal.Predicate_<Internal.TransmissionType>)
    }
    type TileComponentEjector_ = TileComponentEjector;
    class LightTexture implements Internal.LightTextureAccessor, Internal.AutoCloseable {
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Minecraft_)
        getClass(): typeof any;
        static block(arg0: number): number;
        toString(): string;
        turnOffLightLayer(): void;
        notifyAll(): void;
        getLightTexture(): Internal.DynamicTexture;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        static pack(arg0: number, arg1: number): number;
        hashCode(): number;
        wait(): void;
        close(): void;
        static sky(arg0: number): number;
        wait(arg0: number): void;
        updateLightTexture(arg0: number): void;
        static getBrightness(arg0: Internal.DimensionType_, arg1: number): number;
        turnOnLightLayer(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get lightTexture(): Internal.DynamicTexture
        static readonly FULL_BRIGHT: (15728880) & (number);
        static readonly FULL_SKY: (15728640) & (number);
        static readonly FULL_BLOCK: (240) & (number);
    }
    type LightTexture_ = LightTexture;
    class AquaBiomeModifiers$MobSpawnBiomeModifier extends Internal.Record implements Internal.BiomeModifier {
        constructor(includeList: Internal.HolderSet_<Internal.Biome>, excludeList: Internal.HolderSet_<Internal.Biome>, spawn: Internal.MobSpawnSettings$SpawnerData_)
        static makeCodec(): Internal.Codec<Internal.AquaBiomeModifiers$MobSpawnBiomeModifier>;
        codec(): Internal.Codec<Internal.BiomeModifier>;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        modify(arg0: Internal.Holder_<Internal.Biome>, arg1: Internal.BiomeModifier$Phase_, arg2: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
        hashCode(): number;
        wait(): void;
        excludeList(): Internal.HolderSet<Internal.Biome>;
        spawn(): Internal.MobSpawnSettings$SpawnerData;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        includeList(): Internal.HolderSet<Internal.Biome>;
        get class(): typeof any
    }
    type AquaBiomeModifiers$MobSpawnBiomeModifier_ = AquaBiomeModifiers$MobSpawnBiomeModifier;
    /**
     * @deprecated
    */
    class PrimaryLevelData$SpecialWorldProperty extends Internal.Enum<Internal.PrimaryLevelData$SpecialWorldProperty> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.PrimaryLevelData$SpecialWorldProperty>>;
        getDeclaringClass(): typeof Internal.PrimaryLevelData$SpecialWorldProperty;
        toString(): string;
        compareTo(arg0: Internal.PrimaryLevelData$SpecialWorldProperty_): number;
        notifyAll(): void;
        "compareTo(net.minecraft.world.level.storage.PrimaryLevelData$SpecialWorldProperty)"(arg0: Internal.PrimaryLevelData$SpecialWorldProperty_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static values(): Internal.PrimaryLevelData$SpecialWorldProperty[];
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.PrimaryLevelData$SpecialWorldProperty;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.PrimaryLevelData$SpecialWorldProperty
        static readonly FLAT: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
        static readonly DEBUG: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
        static readonly NONE: (Internal.PrimaryLevelData$SpecialWorldProperty) & (Internal.PrimaryLevelData$SpecialWorldProperty);
    }
    type PrimaryLevelData$SpecialWorldProperty_ = PrimaryLevelData$SpecialWorldProperty | "flat" | "debug" | "none";
    interface RequirementsStrategy {
        abstract createRequirements(arg0: Internal.Collection_<string>): string[][];
        (arg0: Internal.Collection<string>): string[][];
        readonly OR: Internal.RequirementsStrategy;
        readonly AND: Internal.RequirementsStrategy;
    }
    type RequirementsStrategy_ = RequirementsStrategy | ((arg0: Internal.Collection<string>)=> string[][]);
    class CraftingBookCategory extends Internal.Enum<Internal.CraftingBookCategory> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CraftingBookCategory>>;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.CraftingBookCategory;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        "compareTo(net.minecraft.world.item.crafting.CraftingBookCategory)"(arg0: Internal.CraftingBookCategory_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static values(): Internal.CraftingBookCategory[];
        getDeclaringClass(): typeof Internal.CraftingBookCategory;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.CraftingBookCategory_): number;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.CraftingBookCategory
        static readonly REDSTONE: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly EQUIPMENT: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly MISC: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.CraftingBookCategory>;
        static readonly BUILDING: (Internal.CraftingBookCategory) & (Internal.CraftingBookCategory);
    }
    type CraftingBookCategory_ = "equipment" | "misc" | "building" | "redstone" | CraftingBookCategory;
    class BoneBarrierMobEffect extends Internal.MobEffect {
        constructor()
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getColor(): number;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type BoneBarrierMobEffect_ = BoneBarrierMobEffect;
    abstract class TreeDecorator {
        constructor()
        abstract place(arg0: Internal.TreeDecorator$Context_): void;
        getClass(): typeof any;
        hashCode(): number;
        abstract type(): Internal.TreeDecoratorType<any>;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.TreeDecorator>;
    }
    type TreeDecorator_ = TreeDecorator;
    class ContainerScreenEvent$Render$Foreground extends Internal.ContainerScreenEvent$Render {
        constructor(arg0: Internal.AbstractContainerScreen_<any>, arg1: Internal.GuiGraphics_, arg2: number, arg3: number)
        constructor()
        setCanceled(arg0: boolean): void;
        getResult(): Internal.Event$Result;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        getMouseY(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMouseX(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getContainerScreen(): Internal.AbstractContainerScreen<any>;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        set canceled(arg0: boolean)
        get result(): Internal.Event$Result
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get mouseY(): number
        get mouseX(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get containerScreen(): Internal.AbstractContainerScreen<any>
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ContainerScreenEvent$Render$Foreground_ = ContainerScreenEvent$Render$Foreground;
    class MachineEnergyContainer <TILE extends Internal.TileEntityMekanism> extends Internal.BasicEnergyContainer {
        getClass(): typeof any;
        static create(maxEnergy: Internal.FloatingLong_, canExtract: Internal.Predicate_<Internal.AutomationType>, canInsert: Internal.Predicate_<Internal.AutomationType>, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        static internal<TILE extends Internal.TileEntityMekanism>(tile: TILE, listener: Internal.IContentsListener_): Internal.MachineEnergyContainer<TILE>;
        isEmpty(): boolean;
        getNeeded(): Internal.FloatingLong;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(nbt: Internal.CompoundTag_): void;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(nbt: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        static "input(mekanism.common.tile.base.TileEntityMekanism,mekanism.api.IContentsListener)"<TILE extends Internal.TileEntityMekanism>(tile: TILE, listener: Internal.IContentsListener_): Internal.MachineEnergyContainer<TILE>;
        setMaxEnergy(maxEnergy: Internal.FloatingLong_): void;
        static create(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        setEmpty(): void;
        getMaxEnergy(): Internal.FloatingLong;
        getEnergyPerTick(): Internal.FloatingLong;
        updateEnergyPerTick(): void;
        setEnergy(energy: Internal.FloatingLong_): void;
        onContentsChanged(): void;
        static input<TILE extends Internal.TileEntityMekanism>(tile: TILE, listener: Internal.IContentsListener_): Internal.MachineEnergyContainer<TILE>;
        getBaseEnergyPerTick(): Internal.FloatingLong;
        static output(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        deserializeNBT(nbt: Internal.Tag_): void;
        toString(): string;
        insert(amount: Internal.FloatingLong_, action: mekanism.api.Action_, automationType: Internal.AutomationType_): Internal.FloatingLong;
        notifyAll(): void;
        getEnergy(): Internal.FloatingLong;
        setEnergyPerTick(energyPerTick: Internal.FloatingLong_): void;
        serializeNBT(): Internal.CompoundTag;
        deserializeNBT(nbt: Internal.CompoundTag_): void;
        hashCode(): number;
        updateMaxEnergy(): void;
        wait(): void;
        static "input(mekanism.api.math.FloatingLong,mekanism.api.IContentsListener)"(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        getBaseMaxEnergy(): Internal.FloatingLong;
        adjustableRates(): boolean;
        wait(arg0: number): void;
        static validateBlock(tile: Internal.TileEntityMekanism_): Internal.AttributeEnergy;
        extract(amount: Internal.FloatingLong_, action: mekanism.api.Action_, automationType: Internal.AutomationType_): Internal.FloatingLong;
        equals(arg0: any): boolean;
        static input(maxEnergy: Internal.FloatingLong_, listener: Internal.IContentsListener_): Internal.BasicEnergyContainer;
        get class(): typeof any
        get empty(): boolean
        get needed(): Internal.FloatingLong
        set maxEnergy(maxEnergy: Internal.FloatingLong_)
        get maxEnergy(): Internal.FloatingLong
        get energyPerTick(): Internal.FloatingLong
        set energy(energy: Internal.FloatingLong_)
        get baseEnergyPerTick(): Internal.FloatingLong
        get energy(): Internal.FloatingLong
        set energyPerTick(energyPerTick: Internal.FloatingLong_)
        get baseMaxEnergy(): Internal.FloatingLong
    }
    type MachineEnergyContainer_<TILE extends Internal.TileEntityMekanism> = MachineEnergyContainer<TILE>;
    interface IntBidirectionalIterator extends Internal.IntIterator, Internal.ObjectBidirectionalIterator<number> {
        forEachRemaining(arg0: any): void;
        "forEachRemaining(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        abstract previousInt(): number;
        skip(arg0: number): number;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        previous(): number;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        abstract hasPrevious(): boolean;
        remove(): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        abstract nextInt(): number;
    }
    type IntBidirectionalIterator_ = IntBidirectionalIterator;
    class AmplifierEnchantment extends Internal.Enchantment implements Internal.CustomConditionalEnchantment {
        constructor(weight: Internal.Enchantment$Rarity_, operation: Internal.AmplifierEnchantment$Operation_, properties: Internal.EnchantmentConfig_, type: Internal.EnchantmentCategory_, slotTypes: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        setCondition(condition: Internal.CustomConditionalEnchantment$Condition_): void;
        handler$clh000$vampiresdelight$canBackstabbingBeApplied(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(level: number): number;
        isDiscoverable(): boolean;
        getMinCost(level: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        condition(condition: Internal.CustomConditionalEnchantment$Condition_): this;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        apply(value: number, level: number): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        checkCompatibility(arg0: Internal.Enchantment_): boolean;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(stack: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        set condition(condition: Internal.CustomConditionalEnchantment$Condition_)
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get orCreateDescriptionId(): string
        get allowedOnBooks(): boolean
        properties: Internal.EnchantmentConfig;
        operation: Internal.AmplifierEnchantment$Operation;
    }
    type AmplifierEnchantment_ = AmplifierEnchantment;
    interface IntListIterator extends Internal.ListIterator<number>, Internal.IntBidirectionalIterator {
        /**
         * @deprecated
        */
        add(arg0: any): void;
        abstract nextIndex(): number;
        forEachRemaining(arg0: any): void;
        "forEachRemaining(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        set(arg0: any): void;
        set(arg0: number): void;
        /**
         * @deprecated
        */
        add(arg0: number): void;
        add(arg0: number): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        set(arg0: number): void;
        /**
         * @deprecated
        */
        "set(java.lang.Object)"(arg0: any): void;
        "add(int)"(arg0: number): void;
        remove(): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        previous(): any;
        abstract nextInt(): number;
        abstract previousIndex(): number;
        abstract previousInt(): number;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): void;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        /**
         * @deprecated
        */
        "set(java.lang.Integer)"(arg0: number): void;
        abstract hasPrevious(): boolean;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        "set(int)"(arg0: number): void;
        /**
         * @deprecated
        */
        set "(java.lang.Object)"(arg0: any)
        /**
         * @deprecated
        */
        set "(java.lang.Integer)"(arg0: number)
        set "(int)"(arg0: number)
    }
    type IntListIterator_ = IntListIterator;
    interface LivingEntityKJS extends Internal.EntityKJS {
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        isUndead(): boolean;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isAmbientCreature(): boolean;
        isMonster(): boolean;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        swing(): void;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): net.minecraft.network.chat.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setY(y: number): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        getTotalMovementSpeed(): number;
        rayTrace(): Internal.RayTraceResultJS;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        damageHeldItem(): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        setMotionX(x: number): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        setMaxHealth(hp: number): void;
        getLevel(): Internal.Level;
        getFacing(): Internal.Direction;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getReachDistance(): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getPersistentData(): Internal.CompoundTag;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        setZ(z: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        runCommand(command: string): number;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        set defaultMovementSpeedMultiplier(speed: number)
        get ambientCreature(): boolean
        get monster(): boolean
        get offHandItem(): Internal.ItemStack
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): net.minecraft.network.chat.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        get displayName(): net.minecraft.network.chat.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        set maxHealth(hp: number)
        get level(): Internal.Level
        get facing(): Internal.Direction
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get persistentData(): Internal.CompoundTag
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        set statusMessage(message: net.minecraft.network.chat.Component_)
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        readonly KJS_PLAYER_CUSTOM_SPEED: (Internal.UUID) & (Internal.UUID);
        readonly KJS_PLAYER_CUSTOM_SPEED_NAME: ("kubejs.player.speed.modifier") & (string);
    }
    type LivingEntityKJS_ = LivingEntityKJS;
    interface GeoAnimatable {
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        getBoneResetTime(): number;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        abstract getTick(arg0: any): number;
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get boneResetTime(): number
    }
    type GeoAnimatable_ = GeoAnimatable;
    class GyrofugeBasicSpeedUnitBlock extends Internal.AbstractGyrofugePoweredBlock {
        constructor()
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
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
    type GyrofugeBasicSpeedUnitBlock_ = GyrofugeBasicSpeedUnitBlock;
    class JNEOreBlock extends Internal.DropExperienceBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.IntProvider_, arg2: number)
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
    type JNEOreBlock_ = JNEOreBlock;
    abstract class LogisticalTransporterBase extends Internal.Transmitter<Internal.IItemHandler, Internal.InventoryNetwork, Internal.LogisticalTransporterBase> {
        markDirtyAcceptor(side: Internal.Direction_): void;
        setConnectionTypeRaw(side: Internal.Direction_, type: mekanism.common.lib.transmitter.ConnectionType_): void;
        getConnections(type: mekanism.common.lib.transmitter.ConnectionType_): Internal.Set<Internal.Direction>;
        getTransit(): Internal.Collection<Internal.TransporterStack>;
        hasTransmitterNetwork(): boolean;
        handleUpdateTag(tag: Internal.CompoundTag_): void;
        insertUnchecked(outputterPos: BlockPos_, request: Internal.TransitRequest_, color: Internal.EnumColor_, doEmit: boolean, min: number): Internal.TransitRequest$TransitResponse;
        setTransmitterNetwork(network: Internal.InventoryNetwork_, requestNow: boolean): boolean;
        supportsTransmissionType(transmitter: Internal.TileEntityTransmitter_): boolean;
        writeToNBT(nbtTags: Internal.CompoundTag_): void;
        notify(): void;
        takeShare(): void;
        createInsertStack(outputterCoord: BlockPos_, color: Internal.EnumColor_): Internal.TransporterStack;
        requestsUpdate(): void;
        remove(): void;
        "supportsTransmissionType(mekanism.common.content.network.transmitter.Transmitter)"(transmitter: Internal.Transmitter_<any, any, any>): boolean;
        createEmptyNetworkWithID(networkID: Internal.UUID_): Internal.InventoryNetwork;
        refreshConnections(side: Internal.Direction_): void;
        getTransmitterNetwork(): Internal.InventoryNetwork;
        getCost(): number;
        canConnect(side: Internal.Direction_): boolean;
        getAcceptor(side: Internal.Direction_): Internal.LazyOptional<Internal.IItemHandler>;
        getTilePos(): BlockPos;
        isValid(): boolean;
        getTileCoord(): Internal.Coord4D;
        getConnectionTypeRaw(side: Internal.Direction_): mekanism.common.lib.transmitter.ConnectionType;
        onNeighborTileChange(side: Internal.Direction_): void;
        supportsTransmissionType(transmitter: Internal.Transmitter_<any, any, any>): boolean;
        refreshConnections(): void;
        getNewOrphanValidator(): Internal.CompatibleTransmitterValidator<Internal.IItemHandler, Internal.InventoryNetwork, Internal.LogisticalTransporterBase>;
        handlesRedstone(): boolean;
        wait(): void;
        canReceiveFrom(side: Internal.Direction_): boolean;
        isValidAcceptor(tile: Internal.BlockEntity_, side: Internal.Direction_): boolean;
        deleteStack(id: number): void;
        getAcceptorCache(): Internal.AbstractAcceptorCache<any, any>;
        setOrphan(nowOrphaned: boolean): void;
        getTransmitterTile(): Internal.TileEntityTransmitter;
        insert(outputter: Internal.BlockEntity_, request: Internal.TransitRequest_, color: Internal.EnumColor_, doEmit: boolean, min: number): Internal.TransitRequest$TransitResponse;
        getClass(): typeof any;
        setConnectionTypesRaw(connectionTypes: mekanism.common.lib.transmitter.ConnectionType_[]): void;
        "supportsTransmissionType(mekanism.common.tile.transmitter.TileEntityTransmitter)"(transmitter: Internal.TileEntityTransmitter_): boolean;
        onConfigure(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        addStack(id: number, s: Internal.TransporterStack_): void;
        onModeChange(side: Internal.Direction_): void;
        canConnectMutual(side: Internal.Direction_, cachedTransmitter: Internal.LogisticalTransporterBase_): boolean;
        getPossibleAcceptorConnections(): number;
        onUpdateServer(): void;
        onRightClick(player: Internal.Player_, side: Internal.Direction_): Internal.InteractionResult;
        canEmitTo(side: Internal.Direction_): boolean;
        canConnectToAcceptor(side: Internal.Direction_): boolean;
        wait(arg0: number, arg1: number): void;
        exposesInsertCap(side: Internal.Direction_): boolean;
        startUpgrading(): void;
        getSupportedTransmissionTypes(): Internal.Set<Internal.TransmissionType>;
        getAllCurrentConnections(): number;
        write(nbtTags: Internal.CompoundTag_): Internal.CompoundTag;
        isRemote(): boolean;
        getConnectionTypesRaw(): mekanism.common.lib.transmitter.ConnectionType[];
        isOrphan(): boolean;
        isValidTransmitter(transmitter: Internal.TileEntityTransmitter_, side: Internal.Direction_): boolean;
        getTileChunk(): Internal.Chunk3D;
        onNeighborBlockChange(side: Internal.Direction_): void;
        notifyTileChange(): void;
        "canConnectMutual(net.minecraft.core.Direction,mekanism.common.content.network.transmitter.LogisticalTransporterBase)"(side: Internal.Direction_, cachedTransmitter: Internal.LogisticalTransporterBase_): boolean;
        insertRR(outputter: Internal.TileEntityLogisticalSorter_, request: Internal.TransitRequest_, color: Internal.EnumColor_, doEmit: boolean, min: number): Internal.TransitRequest$TransitResponse;
        validateAndTakeShare(): void;
        getReducedUpdateTag(updateTag: Internal.CompoundTag_): Internal.CompoundTag;
        getColor(): Internal.EnumColor;
        setTransmitterNetwork(network: Internal.InventoryNetwork_): void;
        isValidTransmitterBasic(transmitter: Internal.TileEntityTransmitter_, side: Internal.Direction_): boolean;
        toString(): string;
        notifyAll(): void;
        createNetworkByMerging(networks: Internal.Collection_<any>): Internal.DynamicNetwork<any, any, any>;
        getTileWorld(): Internal.Level;
        canConnectMutual(side: Internal.Direction_, cachedTile: Internal.BlockEntity_): boolean;
        onUpdateClient(): void;
        isRedstoneActivated(): boolean;
        "canConnectMutual(net.minecraft.core.Direction,net.minecraft.world.level.block.entity.BlockEntity)"(side: Internal.Direction_, cachedTile: Internal.BlockEntity_): boolean;
        hashCode(): number;
        read(nbtTags: Internal.CompoundTag_): void;
        isUpgrading(): boolean;
        static connectionMapContainsSide(connections: number, side: Internal.Direction_): boolean;
        getConnectionType(side: Internal.Direction_): mekanism.common.lib.transmitter.ConnectionType;
        getPossibleTransmitterConnections(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get transit(): Internal.Collection<Internal.TransporterStack>
        get transmitterNetwork(): Internal.InventoryNetwork
        get cost(): number
        get tilePos(): BlockPos
        get valid(): boolean
        get tileCoord(): Internal.Coord4D
        get newOrphanValidator(): Internal.CompatibleTransmitterValidator<Internal.IItemHandler, Internal.InventoryNetwork, Internal.LogisticalTransporterBase>
        get acceptorCache(): Internal.AbstractAcceptorCache<any, any>
        set orphan(nowOrphaned: boolean)
        get transmitterTile(): Internal.TileEntityTransmitter
        get class(): typeof any
        set connectionTypesRaw(connectionTypes: mekanism.common.lib.transmitter.ConnectionType_[])
        get possibleAcceptorConnections(): number
        get supportedTransmissionTypes(): Internal.Set<Internal.TransmissionType>
        get allCurrentConnections(): number
        get remote(): boolean
        get connectionTypesRaw(): mekanism.common.lib.transmitter.ConnectionType[]
        get orphan(): boolean
        get tileChunk(): Internal.Chunk3D
        get color(): Internal.EnumColor
        set transmitterNetwork(network: Internal.InventoryNetwork_)
        get tileWorld(): Internal.Level
        get redstoneActivated(): boolean
        get upgrading(): boolean
        get possibleTransmitterConnections(): number
        readonly tier: Internal.TransporterTier;
    }
    type LogisticalTransporterBase_ = LogisticalTransporterBase;
    interface JukeboxDancer {
        abstract isDancing(): boolean;
        abstract getJukeboxPos(): BlockPos;
        abstract setDancing(arg0: boolean): void;
        get dancing(): boolean
        get jukeboxPos(): BlockPos
        set dancing(arg0: boolean)
    }
    type JukeboxDancer_ = JukeboxDancer;
    interface ServerTickingBlockEntity {
        abstract serverTick(): void;
        (): void;
    }
    type ServerTickingBlockEntity_ = (()=> void) | ServerTickingBlockEntity;
    interface ICraftingGridHelper {
        abstract createAndSetInputs<T>(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<Internal.List<T>>, arg3: number, arg4: number): Internal.List<Internal.IRecipeSlotBuilder>;
        abstract createAndSetOutputs<T>(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<T>): Internal.IRecipeSlotBuilder;
        createAndSetOutputs(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.List_<Internal.ItemStack>): Internal.IRecipeSlotBuilder;
        abstract setInputs<T>(arg0: Internal.List_<Internal.IRecipeSlotBuilder>, arg1: Internal.IIngredientType_<T>, arg2: Internal.List_<Internal.List<T>>, arg3: number, arg4: number): void;
        createAndSetInputs(arg0: Internal.IRecipeLayoutBuilder_, arg1: Internal.List_<Internal.List<Internal.ItemStack>>, arg2: number, arg3: number): Internal.List<Internal.IRecipeSlotBuilder>;
    }
    type ICraftingGridHelper_ = ICraftingGridHelper;
    class BrainDebugRenderer$BrainDump {
        constructor(arg0: Internal.UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: Internal.Position_, arg8: string, arg9: net.minecraft.world.level.pathfinder.Path_, arg10: boolean, arg11: number)
        getClass(): typeof any;
        hashCode(): number;
        hasPotentialPoi(arg0: BlockPos_): boolean;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getUuid(): Internal.UUID;
        hasPoi(arg0: BlockPos_): boolean;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get uuid(): Internal.UUID
        readonly name: string;
        readonly path: net.minecraft.world.level.pathfinder.Path;
        readonly angerLevel: number;
        readonly pos: Internal.Position;
        readonly maxHealth: number;
        readonly memories: Internal.List<string>;
        readonly potentialPois: Internal.Set<BlockPos>;
        readonly wantsGolem: boolean;
        readonly activities: Internal.List<string>;
        readonly profession: string;
        readonly xp: number;
        readonly pois: Internal.Set<BlockPos>;
        readonly uuid: Internal.UUID;
        readonly id: number;
        readonly inventory: string;
        readonly health: number;
        readonly behaviors: Internal.List<string>;
        readonly gossips: Internal.List<string>;
    }
    type BrainDebugRenderer$BrainDump_ = BrainDebugRenderer$BrainDump;
    class FactoryType extends Internal.Enum<Internal.FactoryType> implements Internal.IHasTranslationKey {
        getClass(): typeof any;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getRegistryNameComponentCapitalized(): string;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getBaseBlock(): Internal.BlockRegistryObject<any, any>;
        toString(): string;
        compareTo(arg0: Internal.FactoryType_): number;
        notifyAll(): void;
        getTranslationKey(): string;
        getBaseMachine(): Internal.Machine$FactoryMachine<any>;
        getRegistryNameComponent(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FactoryType>>;
        "compareTo(mekanism.common.content.blocktype.FactoryType)"(arg0: Internal.FactoryType_): number;
        name(): string;
        hashCode(): number;
        static valueOf(name: string): Internal.FactoryType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.FactoryType;
        static values(): Internal.FactoryType[];
        get class(): typeof any
        get registryNameComponentCapitalized(): string
        get baseBlock(): Internal.BlockRegistryObject<any, any>
        get translationKey(): string
        get baseMachine(): Internal.Machine$FactoryMachine<any>
        get registryNameComponent(): string
        get declaringClass(): typeof Internal.FactoryType
        static readonly PURIFYING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly ENRICHING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly SMELTING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly CRUSHING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly INJECTING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly INFUSING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly COMPRESSING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly COMBINING: (Internal.FactoryType) & (Internal.FactoryType);
        static readonly SAWING: (Internal.FactoryType) & (Internal.FactoryType);
    }
    type FactoryType_ = "infusing" | "smelting" | "compressing" | "purifying" | "crushing" | "enriching" | "combining" | FactoryType | "sawing" | "injecting";
    interface IRecipeSlotDrawable extends Internal.IRecipeSlotView {
        getDisplayedIngredient<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract getSlotName(): Internal.Optional<string>;
        abstract getDisplayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>;
        abstract drawHighlight(arg0: Internal.GuiGraphics_, arg1: number): void;
        abstract getTooltip(arg0: Internal.ITooltipBuilder_): void;
        getItemStacks(): Internal.Stream<Internal.ItemStack>;
        abstract setPosition(arg0: number, arg1: number): void;
        isEmpty(): boolean;
        abstract getAreaIncludingBackground(): Internal.Rect2i;
        abstract draw(arg0: Internal.GuiGraphics_): void;
        abstract createDisplayOverrides(): Internal.IIngredientConsumer;
        abstract clearDisplayOverrides(): void;
        getIngredients<T>(arg0: Internal.IIngredientType_<T>): Internal.Stream<T>;
        abstract getTooltip(): Internal.List<net.minecraft.network.chat.Component>;
        abstract drawHoverOverlays(arg0: Internal.GuiGraphics_): void;
        abstract getAllIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        addTooltipCallback(arg0: Internal.IRecipeSlotTooltipCallback_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getRect(): Internal.Rect2i;
        abstract isMouseOver(arg0: number, arg1: number): boolean;
        getDisplayedItemStack(): Internal.Optional<Internal.ItemStack>;
        abstract getRole(): Internal.RecipeIngredientRole;
        get slotName(): Internal.Optional<string>
        get displayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>
        get itemStacks(): Internal.Stream<Internal.ItemStack>
        get empty(): boolean
        get areaIncludingBackground(): Internal.Rect2i
        get tooltip(): Internal.List<net.minecraft.network.chat.Component>
        get allIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get rect(): Internal.Rect2i
        get displayedItemStack(): Internal.Optional<Internal.ItemStack>
        get role(): Internal.RecipeIngredientRole
    }
    type IRecipeSlotDrawable_ = IRecipeSlotDrawable;
    class MeltingNetherrack extends Internal.Block {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type MeltingNetherrack_ = MeltingNetherrack;
    class BiomeModifier$Phase extends Internal.Enum<Internal.BiomeModifier$Phase> {
        compareTo(arg0: Internal.BiomeModifier$Phase_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.BiomeModifier$Phase[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.BiomeModifier$Phase;
        name(): string;
        "compareTo(net.minecraftforge.common.world.BiomeModifier$Phase)"(arg0: Internal.BiomeModifier$Phase_): number;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BiomeModifier$Phase>>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.BiomeModifier$Phase;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.BiomeModifier$Phase
        static readonly ADD: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly AFTER_EVERYTHING: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly BEFORE_EVERYTHING: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly MODIFY: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
        static readonly REMOVE: (Internal.BiomeModifier$Phase) & (Internal.BiomeModifier$Phase);
    }
    type BiomeModifier$Phase_ = "remove" | BiomeModifier$Phase | "before_everything" | "modify" | "after_everything" | "add";
    class ManaSplitterBlock extends Internal.BotaniaWaterloggedBlock implements Internal.EntityBlock {
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
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
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
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
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
    type ManaSplitterBlock_ = ManaSplitterBlock;
    class QIOFrequency extends Internal.Frequency implements Internal.IQIOFrequency, Internal.IColorableFrequency {
        constructor()
        constructor(n: string, uuid: Internal.UUID_)
        removeItem(amount: number): Internal.ItemStack;
        areIdentitiesEqual(other: Internal.Frequency_): boolean;
        getKey(): any;
        getType(): Internal.FrequencyType<any>;
        getStacksByModIDWildcard(wildcard: string): Internal.Object2LongMap<Internal.HashedItem>;
        openItemViewer(player: Internal.ServerPlayer_): void;
        getItemDataMap(): Internal.Map<Internal.HashedItem, Internal.QIOFrequency$QIOItemTypeData>;
        setPublic(isPublic: boolean): Internal.Frequency;
        notify(): void;
        removeByType(itemType: Internal.HashedItem_, amount: number): Internal.ItemStack;
        getStacksByItem(item: Internal.Item_): Internal.Object2LongMap<Internal.HashedItem>;
        static readFromPacket<FREQ extends Internal.Frequency>(dataStream: Internal.FriendlyByteBuf_): FREQ;
        saveAll(): void;
        getSecurity(): Internal.SecurityMode;
        getStacksByTagWildcard(wildcard: string): Internal.Object2LongMap<Internal.HashedItem>;
        isRemoved(): boolean;
        "write(net.minecraft.nbt.CompoundTag)"(nbtTags: Internal.CompoundTag_): void;
        isPublic(): boolean;
        isStoring(itemType: Internal.HashedItem_): boolean;
        update(tile: Internal.BlockEntity_): boolean;
        forAllStored(consumer: Internal.ObjLongConsumer_<Internal.ItemStack>): void;
        getTotalItemCountCapacity(): number;
        read(buf: Internal.FriendlyByteBuf_): void;
        "getStored(net.minecraft.world.item.ItemStack)"(type: Internal.ItemStack_): number;
        write(buf: Internal.FriendlyByteBuf_): void;
        isValid(): boolean;
        getStored(itemType: Internal.HashedItem_): number;
        serializeIdentityWithOwner(): Internal.CompoundTag;
        getDriveData(key: Internal.QIODriveData$QIODriveKey_): Internal.QIODriveData;
        "getStored(mekanism.common.lib.inventory.HashedItem)"(itemType: Internal.HashedItem_): number;
        getAllDrives(): Internal.Collection<Internal.QIODriveData>;
        wait(): void;
        ownerMatches(toCheck: Internal.UUID_): boolean;
        setValid(valid: boolean): void;
        getIdentity(): Internal.Frequency$FrequencyIdentity;
        getTypesForItem(item: Internal.Item_): Internal.Set<Internal.HashedItem>;
        getClientOwner(): string;
        getStacksByModID(modID: string): Internal.Object2LongMap<Internal.HashedItem>;
        writeComponentData(nbtTags: Internal.CompoundTag_): void;
        getTotalItemTypes(remote: boolean): number;
        massInsert(stack: Internal.ItemStack_, amount: number, action: mekanism.api.Action_): number;
        getTotalItemTypeCapacity(): number;
        getClass(): typeof any;
        getSyncHash(): number;
        removeDrive(key: Internal.QIODriveData$QIODriveKey_, updateItemMap: boolean): void;
        write(nbtTags: Internal.CompoundTag_): void;
        "write(net.minecraft.network.FriendlyByteBuf)"(buf: Internal.FriendlyByteBuf_): void;
        forAllHashedStored(consumer: Internal.ObjLongConsumer_<Internal.IHashedItem>): void;
        wait(arg0: number, arg1: number): void;
        addItem(stack: Internal.ItemStack_): Internal.ItemStack;
        addDrive(key: Internal.QIODriveData$QIODriveKey_): void;
        getStored(type: Internal.ItemStack_): number;
        getName(): string;
        getColor(): Internal.EnumColor;
        toString(): string;
        setColor(color: Internal.EnumColor_): void;
        tick(): boolean;
        notifyAll(): void;
        getOwner(): Internal.UUID;
        getTotalItemCount(): number;
        serializeIdentity(): Internal.CompoundTag;
        getStacksByTag(tag: string): Internal.Object2LongMap<Internal.HashedItem>;
        closeItemViewer(player: Internal.ServerPlayer_): void;
        hashCode(): number;
        onRemove(): void;
        wait(arg0: number): void;
        massExtract(stack: Internal.ItemStack_, amount: number, action: mekanism.api.Action_): number;
        equals(obj: any): boolean;
        removeItem(stack: Internal.ItemStack_, amount: number): Internal.ItemStack;
        onDeactivate(tile: Internal.BlockEntity_): boolean;
        get key(): any
        get type(): Internal.FrequencyType<any>
        get itemDataMap(): Internal.Map<Internal.HashedItem, Internal.QIOFrequency$QIOItemTypeData>
        set "public"(isPublic: boolean)
        get security(): Internal.SecurityMode
        get removed(): boolean
        get "public"(): boolean
        get totalItemCountCapacity(): number
        get valid(): boolean
        get allDrives(): Internal.Collection<Internal.QIODriveData>
        set valid(valid: boolean)
        get identity(): Internal.Frequency$FrequencyIdentity
        get clientOwner(): string
        get totalItemTypeCapacity(): number
        get class(): typeof any
        get syncHash(): number
        get name(): string
        get color(): Internal.EnumColor
        set color(color: Internal.EnumColor_)
        get owner(): Internal.UUID
        get totalItemCount(): number
    }
    type QIOFrequency_ = QIOFrequency;
    abstract class Fluid implements Internal.FluidVariantCache, Internal.FluidInvokerMixin, Internal.IForgeFluid, Internal.InjectedFluidExtension {
        constructor()
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        abstract getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        abstract getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        abstract getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        isRandomlyTicking(): boolean;
        getDripParticle(): Internal.ParticleOptions;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        abstract getExplosionResistance(): number;
        abstract getBucket(): Internal.Item;
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
        abstract getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        abstract canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        isEmpty(): boolean;
        callAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        abstract getTickDelay(arg0: Internal.LevelReader_): number;
        handler$dpp000$fabric_transfer_api_v1$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$registryName(): ResourceLocation;
        registerDefaultState(arg0: Internal.FluidState_): void;
        abstract getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        hashCode(): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        createFluidStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Fluid, Internal.FluidState>): void;
        abstract createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
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
        readonly stateDefinition: Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        static readonly FLUID_STATE_REGISTRY: Internal.IdMapper<Internal.FluidState>;
    }
    type Fluid_ = Special.Fluid | Fluid;
    class LongSummaryStatistics implements Internal.LongConsumer, Internal.IntConsumer {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        getClass(): typeof any;
        "andThen(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        toString(): string;
        getCount(): number;
        combine(arg0: Internal.LongSummaryStatistics_): void;
        notifyAll(): void;
        "andThen(java.util.function.LongConsumer)"(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        notify(): void;
        accept(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        "accept(int)"(arg0: number): void;
        getSum(): number;
        hashCode(): number;
        andThen(arg0: Internal.LongConsumer_): Internal.LongConsumer;
        getAverage(): number;
        wait(): void;
        getMin(): number;
        wait(arg0: number): void;
        accept(arg0: number): void;
        getMax(): number;
        equals(arg0: any): boolean;
        "accept(long)"(arg0: number): void;
        get class(): typeof any
        get count(): number
        get sum(): number
        get average(): number
        get min(): number
        get max(): number
    }
    type LongSummaryStatistics_ = LongSummaryStatistics;
    class SimpleColor implements dev.latvian.mods.rhino.mod.util.color.Color {
        constructor(v: number)
        getClass(): typeof any;
        toString(): string;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        notifyAll(): void;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        getRgbJS(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSerializeJS(): string;
        hashCode(): number;
        wait(): void;
        createTextColorJS(): Internal.TextColor;
        wait(arg0: number): void;
        getHexJS(): string;
        getFireworkColorJS(): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get argbJS(): number
        get rgbJS(): number
        get serializeJS(): string
        get hexJS(): string
        get fireworkColorJS(): number
        static readonly BLACK: (Internal.SimpleColor) & (Internal.SimpleColor);
        static readonly WHITE: (Internal.SimpleColor) & (Internal.SimpleColor);
    }
    type SimpleColor_ = SimpleColor;
    class BirchBenchBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock, Internal.EntityBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        handler$ipm000$quark$tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.CallbackInfo_): void;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(arg0: Internal.ResourceKey_<any>, arg1: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
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
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        handler$ffc000$vanillabackport$vb$onAnimateTick(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_): void;
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
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
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
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
        static readonly BLOCKSTATE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type BirchBenchBlock_ = BirchBenchBlock;
    interface Targeting {
        abstract getTarget(): Internal.LivingEntity;
        get target(): Internal.LivingEntity
        (): Internal.LivingEntity_;
    }
    type Targeting_ = Targeting | (()=> Internal.LivingEntity_);
    class IdParser <T extends ResourceLocation> extends Internal.Record implements Internal.StringLoadable<T> {
        constructor(constructor_: Internal.Function_<string, T>, name: string)
        static decompose(arg0: string, arg1: string): string[];
        list(arg0: number): Internal.Loadable<Internal.List<T>>;
        mapWithValues<V>(arg0: Internal.Loadable_<V>): Internal.Loadable<Internal.Map<T, V>>;
        mapWithValues<V>(arg0: number, arg1: Internal.Function_<T, V>): Internal.Loadable<Internal.Map<T, V>>;
        notify(): void;
        "getString(java.lang.Object)"(arg0: any): string;
        getString(arg0: T): string;
        requiredField<P>(arg0: string, arg1: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        parseString(arg0: string, arg1: string): T;
        mapWithValues<V>(arg0: Internal.Loadable_<V>, arg1: number): Internal.Loadable<Internal.Map<T, V>>;
        array(arg0: Internal.IntFunction_<T[]>, arg1: boolean, arg2: number): Internal.ArrayLoadable<T[]>;
        defaultField<P>(arg0: string, arg1: T, arg2: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        mapWithKeys<K>(arg0: number, arg1: Internal.Function_<T, K>): Internal.Loadable<Internal.Map<K, T>>;
        decode(arg0: Internal.FriendlyByteBuf_, arg1: Internal.TypedMap_): any;
        defaultField<P>(arg0: string, arg1: T, arg2: boolean, arg3: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        tryParse(arg0: string): T;
        static read(arg0: string, arg1: Internal.StringReader_): ResourceLocation;
        "encode(net.minecraft.network.FriendlyByteBuf,net.minecraft.resources.ResourceLocation)"(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        serialize(arg0: T, arg1: Internal.Type_, arg2: Internal.JsonSerializationContext_): com.google.gson.JsonElement;
        list(): Internal.Loadable<Internal.List<T>>;
        name(): string;
        set(): Internal.Loadable<Internal.Set<T>>;
        static decompose(arg0: string, arg1: string, arg2: string): string[];
        wait(): void;
        serialize(arg0: T): com.google.gson.JsonElement;
        "constructor"(): Internal.Function<string, T>;
        convert(arg0: com.google.gson.JsonElement_, arg1: string): T;
        xmap<M>(arg0: Internal.BiFunction_<T, Internal.ErrorFactory, M>, arg1: Internal.BiFunction_<M, Internal.ErrorFactory, T>): Internal.StringLoadable<M>;
        getClass(): typeof any;
        encode(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        static maxLength(arg0: number): Internal.StringLoadable<string>;
        getOrDefault(arg0: com.google.gson.JsonObject_, arg1: string, arg2: T): T;
        "getString(net.minecraft.resources.ResourceLocation)"(arg0: T): string;
        getIfPresent(arg0: com.google.gson.JsonObject_, arg1: string, arg2: Internal.TypedMap_): T;
        "encode(net.minecraft.network.FriendlyByteBuf,java.lang.Object)"(arg0: Internal.FriendlyByteBuf_, arg1: any): void;
        wait(arg0: number, arg1: number): void;
        "mapWithValues(slimeknights.mantle.data.loadable.Loadable,int)"<V>(arg0: Internal.Loadable_<V>, arg1: number): Internal.Loadable<Internal.Map<T, V>>;
        getOrDefault(arg0: com.google.gson.JsonObject_, arg1: string, arg2: T, arg3: Internal.TypedMap_): T;
        array(arg0: Internal.IntFunction_<T[]>, arg1: boolean, arg2: number, arg3: number): Internal.ArrayLoadable<T[]>;
        flatXmap(arg0: Internal.Function_<any, any>, arg1: Internal.Function_<any, any>): Internal.Loadable<any>;
        toString(): string;
        validate(arg0: Internal.BiFunction_<T, Internal.ErrorFactory, T>): Internal.StringLoadable<T>;
        getString(arg0: any): string;
        notifyAll(): void;
        encode(arg0: Internal.FriendlyByteBuf_, arg1: any): void;
        nullableField<P>(arg0: string, arg1: Internal.Function_<P, T>): Internal.LoadableField<T, P>;
        "mapWithValues(int,java.util.function.Function)"<V>(arg0: number, arg1: Internal.Function_<T, V>): Internal.Loadable<Internal.Map<T, V>>;
        deserialize(arg0: com.google.gson.JsonElement_, arg1: Internal.Type_, arg2: Internal.JsonDeserializationContext_): T;
        comapFlatMap<M>(arg0: Internal.BiFunction_<T, Internal.ErrorFactory, M>, arg1: Internal.Function_<M, T>): Internal.StringLoadable<M>;
        flatComap(arg0: Internal.Function_<any, any>, arg1: Internal.BiFunction_<any, any, any>): Internal.Loadable<any>;
        tryDirectField<P>(arg0: string, arg1: Internal.Function_<P, T>, ...arg2: string[]): Internal.LoadableField<T, P>;
        hashCode(): number;
        decode(arg0: Internal.FriendlyByteBuf_): T;
        parseString(arg0: string, arg1: string, arg2: Internal.TypedMap_): T;
        convert(arg0: com.google.gson.JsonElement_, arg1: string, arg2: Internal.TypedMap_): T;
        getIfPresent(arg0: com.google.gson.JsonObject_, arg1: string): T;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        set(arg0: number): Internal.Loadable<Internal.Set<T>>;
        get class(): typeof any
    }
    type IdParser_<T extends ResourceLocation> = IdParser<T>;
    class TeamPropertyArgument implements Internal.ArgumentType<Internal.TeamProperty<any>> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static create(): Internal.TeamPropertyArgument;
        listSuggestions<S>(context: Internal.CommandContext_<S>, builder: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getExamples(): Internal.Collection<string>;
        hashCode(): number;
        wait(): void;
        static get(context: Internal.CommandContext_<Internal.CommandSourceStack>, name: string): Internal.TeamProperty<any>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        parse(arg0: Internal.StringReader_): any;
        get class(): typeof any
        get examples(): Internal.Collection<string>
    }
    type TeamPropertyArgument_ = TeamPropertyArgument;
    interface Keyable {
        abstract keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): this;
        (arg0: Internal.DynamicOps<T>): Internal.Stream_<T>;
    }
    type Keyable_ = ((arg0: Internal.DynamicOps<T>)=> Internal.Stream_<T>) | Keyable;
    class MobEffectEvent$Remove extends Internal.MobEffectEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffectInstance_)
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_)
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
        getEffect(): Internal.MobEffect;
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
        get effect(): Internal.MobEffect
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get effectInstance(): Internal.MobEffectInstance
    }
    type MobEffectEvent$Remove_ = MobEffectEvent$Remove;
}
