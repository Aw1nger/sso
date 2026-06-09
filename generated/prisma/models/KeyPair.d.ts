import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model KeyPair
 *
 */
export type KeyPairModel = runtime.Types.Result.DefaultSelection<Prisma.$KeyPairPayload>;
export type AggregateKeyPair = {
    _count: KeyPairCountAggregateOutputType | null;
    _avg: KeyPairAvgAggregateOutputType | null;
    _sum: KeyPairSumAggregateOutputType | null;
    _min: KeyPairMinAggregateOutputType | null;
    _max: KeyPairMaxAggregateOutputType | null;
};
export type KeyPairAvgAggregateOutputType = {
    id: number | null;
};
export type KeyPairSumAggregateOutputType = {
    id: number | null;
};
export type KeyPairMinAggregateOutputType = {
    id: number | null;
    publicKey: string | null;
    privateKey: string | null;
    createdAt: Date | null;
    alghoritm: string | null;
    status: $Enums.KeyPairStatus | null;
};
export type KeyPairMaxAggregateOutputType = {
    id: number | null;
    publicKey: string | null;
    privateKey: string | null;
    createdAt: Date | null;
    alghoritm: string | null;
    status: $Enums.KeyPairStatus | null;
};
export type KeyPairCountAggregateOutputType = {
    id: number;
    publicKey: number;
    privateKey: number;
    createdAt: number;
    alghoritm: number;
    status: number;
    _all: number;
};
export type KeyPairAvgAggregateInputType = {
    id?: true;
};
export type KeyPairSumAggregateInputType = {
    id?: true;
};
export type KeyPairMinAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
    alghoritm?: true;
    status?: true;
};
export type KeyPairMaxAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
    alghoritm?: true;
    status?: true;
};
export type KeyPairCountAggregateInputType = {
    id?: true;
    publicKey?: true;
    privateKey?: true;
    createdAt?: true;
    alghoritm?: true;
    status?: true;
    _all?: true;
};
export type KeyPairAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which KeyPair to aggregate.
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KeyPairs to fetch.
     */
    orderBy?: Prisma.KeyPairOrderByWithRelationInput | Prisma.KeyPairOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.KeyPairWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KeyPairs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KeyPairs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned KeyPairs
    **/
    _count?: true | KeyPairCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: KeyPairAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: KeyPairSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: KeyPairMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: KeyPairMaxAggregateInputType;
};
export type GetKeyPairAggregateType<T extends KeyPairAggregateArgs> = {
    [P in keyof T & keyof AggregateKeyPair]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKeyPair[P]> : Prisma.GetScalarType<T[P], AggregateKeyPair[P]>;
};
export type KeyPairGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KeyPairWhereInput;
    orderBy?: Prisma.KeyPairOrderByWithAggregationInput | Prisma.KeyPairOrderByWithAggregationInput[];
    by: Prisma.KeyPairScalarFieldEnum[] | Prisma.KeyPairScalarFieldEnum;
    having?: Prisma.KeyPairScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KeyPairCountAggregateInputType | true;
    _avg?: KeyPairAvgAggregateInputType;
    _sum?: KeyPairSumAggregateInputType;
    _min?: KeyPairMinAggregateInputType;
    _max?: KeyPairMaxAggregateInputType;
};
export type KeyPairGroupByOutputType = {
    id: number;
    publicKey: string;
    privateKey: string;
    createdAt: Date;
    alghoritm: string;
    status: $Enums.KeyPairStatus;
    _count: KeyPairCountAggregateOutputType | null;
    _avg: KeyPairAvgAggregateOutputType | null;
    _sum: KeyPairSumAggregateOutputType | null;
    _min: KeyPairMinAggregateOutputType | null;
    _max: KeyPairMaxAggregateOutputType | null;
};
export type GetKeyPairGroupByPayload<T extends KeyPairGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KeyPairGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KeyPairGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KeyPairGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KeyPairGroupByOutputType[P]>;
}>>;
export type KeyPairWhereInput = {
    AND?: Prisma.KeyPairWhereInput | Prisma.KeyPairWhereInput[];
    OR?: Prisma.KeyPairWhereInput[];
    NOT?: Prisma.KeyPairWhereInput | Prisma.KeyPairWhereInput[];
    id?: Prisma.IntFilter<"KeyPair"> | number;
    publicKey?: Prisma.StringFilter<"KeyPair"> | string;
    privateKey?: Prisma.StringFilter<"KeyPair"> | string;
    createdAt?: Prisma.DateTimeFilter<"KeyPair"> | Date | string;
    alghoritm?: Prisma.StringFilter<"KeyPair"> | string;
    status?: Prisma.EnumKeyPairStatusFilter<"KeyPair"> | $Enums.KeyPairStatus;
};
export type KeyPairOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alghoritm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KeyPairWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.KeyPairWhereInput | Prisma.KeyPairWhereInput[];
    OR?: Prisma.KeyPairWhereInput[];
    NOT?: Prisma.KeyPairWhereInput | Prisma.KeyPairWhereInput[];
    publicKey?: Prisma.StringFilter<"KeyPair"> | string;
    privateKey?: Prisma.StringFilter<"KeyPair"> | string;
    createdAt?: Prisma.DateTimeFilter<"KeyPair"> | Date | string;
    alghoritm?: Prisma.StringFilter<"KeyPair"> | string;
    status?: Prisma.EnumKeyPairStatusFilter<"KeyPair"> | $Enums.KeyPairStatus;
}, "id">;
export type KeyPairOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alghoritm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.KeyPairCountOrderByAggregateInput;
    _avg?: Prisma.KeyPairAvgOrderByAggregateInput;
    _max?: Prisma.KeyPairMaxOrderByAggregateInput;
    _min?: Prisma.KeyPairMinOrderByAggregateInput;
    _sum?: Prisma.KeyPairSumOrderByAggregateInput;
};
export type KeyPairScalarWhereWithAggregatesInput = {
    AND?: Prisma.KeyPairScalarWhereWithAggregatesInput | Prisma.KeyPairScalarWhereWithAggregatesInput[];
    OR?: Prisma.KeyPairScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KeyPairScalarWhereWithAggregatesInput | Prisma.KeyPairScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"KeyPair"> | number;
    publicKey?: Prisma.StringWithAggregatesFilter<"KeyPair"> | string;
    privateKey?: Prisma.StringWithAggregatesFilter<"KeyPair"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KeyPair"> | Date | string;
    alghoritm?: Prisma.StringWithAggregatesFilter<"KeyPair"> | string;
    status?: Prisma.EnumKeyPairStatusWithAggregatesFilter<"KeyPair"> | $Enums.KeyPairStatus;
};
export type KeyPairCreateInput = {
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
    alghoritm?: string;
    status?: $Enums.KeyPairStatus;
};
export type KeyPairUncheckedCreateInput = {
    id?: number;
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
    alghoritm?: string;
    status?: $Enums.KeyPairStatus;
};
export type KeyPairUpdateInput = {
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alghoritm?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumKeyPairStatusFieldUpdateOperationsInput | $Enums.KeyPairStatus;
};
export type KeyPairUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alghoritm?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumKeyPairStatusFieldUpdateOperationsInput | $Enums.KeyPairStatus;
};
export type KeyPairCreateManyInput = {
    id?: number;
    publicKey: string;
    privateKey: string;
    createdAt?: Date | string;
    alghoritm?: string;
    status?: $Enums.KeyPairStatus;
};
export type KeyPairUpdateManyMutationInput = {
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alghoritm?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumKeyPairStatusFieldUpdateOperationsInput | $Enums.KeyPairStatus;
};
export type KeyPairUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    privateKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alghoritm?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumKeyPairStatusFieldUpdateOperationsInput | $Enums.KeyPairStatus;
};
export type KeyPairCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alghoritm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KeyPairAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type KeyPairMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alghoritm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KeyPairMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    privateKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alghoritm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type KeyPairSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EnumKeyPairStatusFieldUpdateOperationsInput = {
    set?: $Enums.KeyPairStatus;
};
export type KeyPairSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
    alghoritm?: boolean;
    status?: boolean;
}, ExtArgs["result"]["keyPair"]>;
export type KeyPairSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
    alghoritm?: boolean;
    status?: boolean;
}, ExtArgs["result"]["keyPair"]>;
export type KeyPairSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
    alghoritm?: boolean;
    status?: boolean;
}, ExtArgs["result"]["keyPair"]>;
export type KeyPairSelectScalar = {
    id?: boolean;
    publicKey?: boolean;
    privateKey?: boolean;
    createdAt?: boolean;
    alghoritm?: boolean;
    status?: boolean;
};
export type KeyPairOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "createdAt" | "alghoritm" | "status", ExtArgs["result"]["keyPair"]>;
export type $KeyPairPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KeyPair";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        publicKey: string;
        privateKey: string;
        createdAt: Date;
        alghoritm: string;
        status: $Enums.KeyPairStatus;
    }, ExtArgs["result"]["keyPair"]>;
    composites: {};
};
export type KeyPairGetPayload<S extends boolean | null | undefined | KeyPairDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KeyPairPayload, S>;
export type KeyPairCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KeyPairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KeyPairCountAggregateInputType | true;
};
export interface KeyPairDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KeyPair'];
        meta: {
            name: 'KeyPair';
        };
    };
    /**
     * Find zero or one KeyPair that matches the filter.
     * @param {KeyPairFindUniqueArgs} args - Arguments to find a KeyPair
     * @example
     * // Get one KeyPair
     * const keyPair = await prisma.keyPair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyPairFindUniqueArgs>(args: Prisma.SelectSubset<T, KeyPairFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one KeyPair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyPairFindUniqueOrThrowArgs} args - Arguments to find a KeyPair
     * @example
     * // Get one KeyPair
     * const keyPair = await prisma.keyPair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyPairFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KeyPairFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first KeyPair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairFindFirstArgs} args - Arguments to find a KeyPair
     * @example
     * // Get one KeyPair
     * const keyPair = await prisma.keyPair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyPairFindFirstArgs>(args?: Prisma.SelectSubset<T, KeyPairFindFirstArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first KeyPair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairFindFirstOrThrowArgs} args - Arguments to find a KeyPair
     * @example
     * // Get one KeyPair
     * const keyPair = await prisma.keyPair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyPairFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KeyPairFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more KeyPairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyPairs
     * const keyPairs = await prisma.keyPair.findMany()
     *
     * // Get first 10 KeyPairs
     * const keyPairs = await prisma.keyPair.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const keyPairWithIdOnly = await prisma.keyPair.findMany({ select: { id: true } })
     *
     */
    findMany<T extends KeyPairFindManyArgs>(args?: Prisma.SelectSubset<T, KeyPairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a KeyPair.
     * @param {KeyPairCreateArgs} args - Arguments to create a KeyPair.
     * @example
     * // Create one KeyPair
     * const KeyPair = await prisma.keyPair.create({
     *   data: {
     *     // ... data to create a KeyPair
     *   }
     * })
     *
     */
    create<T extends KeyPairCreateArgs>(args: Prisma.SelectSubset<T, KeyPairCreateArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many KeyPairs.
     * @param {KeyPairCreateManyArgs} args - Arguments to create many KeyPairs.
     * @example
     * // Create many KeyPairs
     * const keyPair = await prisma.keyPair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends KeyPairCreateManyArgs>(args?: Prisma.SelectSubset<T, KeyPairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many KeyPairs and returns the data saved in the database.
     * @param {KeyPairCreateManyAndReturnArgs} args - Arguments to create many KeyPairs.
     * @example
     * // Create many KeyPairs
     * const keyPair = await prisma.keyPair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many KeyPairs and only return the `id`
     * const keyPairWithIdOnly = await prisma.keyPair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends KeyPairCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KeyPairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a KeyPair.
     * @param {KeyPairDeleteArgs} args - Arguments to delete one KeyPair.
     * @example
     * // Delete one KeyPair
     * const KeyPair = await prisma.keyPair.delete({
     *   where: {
     *     // ... filter to delete one KeyPair
     *   }
     * })
     *
     */
    delete<T extends KeyPairDeleteArgs>(args: Prisma.SelectSubset<T, KeyPairDeleteArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one KeyPair.
     * @param {KeyPairUpdateArgs} args - Arguments to update one KeyPair.
     * @example
     * // Update one KeyPair
     * const keyPair = await prisma.keyPair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends KeyPairUpdateArgs>(args: Prisma.SelectSubset<T, KeyPairUpdateArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more KeyPairs.
     * @param {KeyPairDeleteManyArgs} args - Arguments to filter KeyPairs to delete.
     * @example
     * // Delete a few KeyPairs
     * const { count } = await prisma.keyPair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends KeyPairDeleteManyArgs>(args?: Prisma.SelectSubset<T, KeyPairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more KeyPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyPairs
     * const keyPair = await prisma.keyPair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends KeyPairUpdateManyArgs>(args: Prisma.SelectSubset<T, KeyPairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more KeyPairs and returns the data updated in the database.
     * @param {KeyPairUpdateManyAndReturnArgs} args - Arguments to update many KeyPairs.
     * @example
     * // Update many KeyPairs
     * const keyPair = await prisma.keyPair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more KeyPairs and only return the `id`
     * const keyPairWithIdOnly = await prisma.keyPair.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends KeyPairUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KeyPairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one KeyPair.
     * @param {KeyPairUpsertArgs} args - Arguments to update or create a KeyPair.
     * @example
     * // Update or create a KeyPair
     * const keyPair = await prisma.keyPair.upsert({
     *   create: {
     *     // ... data to create a KeyPair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyPair we want to update
     *   }
     * })
     */
    upsert<T extends KeyPairUpsertArgs>(args: Prisma.SelectSubset<T, KeyPairUpsertArgs<ExtArgs>>): Prisma.Prisma__KeyPairClient<runtime.Types.Result.GetResult<Prisma.$KeyPairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of KeyPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairCountArgs} args - Arguments to filter KeyPairs to count.
     * @example
     * // Count the number of KeyPairs
     * const count = await prisma.keyPair.count({
     *   where: {
     *     // ... the filter for the KeyPairs we want to count
     *   }
     * })
    **/
    count<T extends KeyPairCountArgs>(args?: Prisma.Subset<T, KeyPairCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KeyPairCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a KeyPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyPairAggregateArgs>(args: Prisma.Subset<T, KeyPairAggregateArgs>): Prisma.PrismaPromise<GetKeyPairAggregateType<T>>;
    /**
     * Group by KeyPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyPairGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends KeyPairGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KeyPairGroupByArgs['orderBy'];
    } : {
        orderBy?: KeyPairGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KeyPairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the KeyPair model
     */
    readonly fields: KeyPairFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for KeyPair.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__KeyPairClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the KeyPair model
 */
export interface KeyPairFieldRefs {
    readonly id: Prisma.FieldRef<"KeyPair", 'Int'>;
    readonly publicKey: Prisma.FieldRef<"KeyPair", 'String'>;
    readonly privateKey: Prisma.FieldRef<"KeyPair", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KeyPair", 'DateTime'>;
    readonly alghoritm: Prisma.FieldRef<"KeyPair", 'String'>;
    readonly status: Prisma.FieldRef<"KeyPair", 'KeyPairStatus'>;
}
/**
 * KeyPair findUnique
 */
export type KeyPairFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter, which KeyPair to fetch.
     */
    where: Prisma.KeyPairWhereUniqueInput;
};
/**
 * KeyPair findUniqueOrThrow
 */
export type KeyPairFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter, which KeyPair to fetch.
     */
    where: Prisma.KeyPairWhereUniqueInput;
};
/**
 * KeyPair findFirst
 */
export type KeyPairFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter, which KeyPair to fetch.
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KeyPairs to fetch.
     */
    orderBy?: Prisma.KeyPairOrderByWithRelationInput | Prisma.KeyPairOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for KeyPairs.
     */
    cursor?: Prisma.KeyPairWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KeyPairs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KeyPairs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KeyPairs.
     */
    distinct?: Prisma.KeyPairScalarFieldEnum | Prisma.KeyPairScalarFieldEnum[];
};
/**
 * KeyPair findFirstOrThrow
 */
export type KeyPairFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter, which KeyPair to fetch.
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KeyPairs to fetch.
     */
    orderBy?: Prisma.KeyPairOrderByWithRelationInput | Prisma.KeyPairOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for KeyPairs.
     */
    cursor?: Prisma.KeyPairWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KeyPairs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KeyPairs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KeyPairs.
     */
    distinct?: Prisma.KeyPairScalarFieldEnum | Prisma.KeyPairScalarFieldEnum[];
};
/**
 * KeyPair findMany
 */
export type KeyPairFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter, which KeyPairs to fetch.
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of KeyPairs to fetch.
     */
    orderBy?: Prisma.KeyPairOrderByWithRelationInput | Prisma.KeyPairOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing KeyPairs.
     */
    cursor?: Prisma.KeyPairWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` KeyPairs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` KeyPairs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of KeyPairs.
     */
    distinct?: Prisma.KeyPairScalarFieldEnum | Prisma.KeyPairScalarFieldEnum[];
};
/**
 * KeyPair create
 */
export type KeyPairCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * The data needed to create a KeyPair.
     */
    data: Prisma.XOR<Prisma.KeyPairCreateInput, Prisma.KeyPairUncheckedCreateInput>;
};
/**
 * KeyPair createMany
 */
export type KeyPairCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyPairs.
     */
    data: Prisma.KeyPairCreateManyInput | Prisma.KeyPairCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * KeyPair createManyAndReturn
 */
export type KeyPairCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * The data used to create many KeyPairs.
     */
    data: Prisma.KeyPairCreateManyInput | Prisma.KeyPairCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * KeyPair update
 */
export type KeyPairUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * The data needed to update a KeyPair.
     */
    data: Prisma.XOR<Prisma.KeyPairUpdateInput, Prisma.KeyPairUncheckedUpdateInput>;
    /**
     * Choose, which KeyPair to update.
     */
    where: Prisma.KeyPairWhereUniqueInput;
};
/**
 * KeyPair updateMany
 */
export type KeyPairUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyPairs.
     */
    data: Prisma.XOR<Prisma.KeyPairUpdateManyMutationInput, Prisma.KeyPairUncheckedUpdateManyInput>;
    /**
     * Filter which KeyPairs to update
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * Limit how many KeyPairs to update.
     */
    limit?: number;
};
/**
 * KeyPair updateManyAndReturn
 */
export type KeyPairUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * The data used to update KeyPairs.
     */
    data: Prisma.XOR<Prisma.KeyPairUpdateManyMutationInput, Prisma.KeyPairUncheckedUpdateManyInput>;
    /**
     * Filter which KeyPairs to update
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * Limit how many KeyPairs to update.
     */
    limit?: number;
};
/**
 * KeyPair upsert
 */
export type KeyPairUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * The filter to search for the KeyPair to update in case it exists.
     */
    where: Prisma.KeyPairWhereUniqueInput;
    /**
     * In case the KeyPair found by the `where` argument doesn't exist, create a new KeyPair with this data.
     */
    create: Prisma.XOR<Prisma.KeyPairCreateInput, Prisma.KeyPairUncheckedCreateInput>;
    /**
     * In case the KeyPair was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.KeyPairUpdateInput, Prisma.KeyPairUncheckedUpdateInput>;
};
/**
 * KeyPair delete
 */
export type KeyPairDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
    /**
     * Filter which KeyPair to delete.
     */
    where: Prisma.KeyPairWhereUniqueInput;
};
/**
 * KeyPair deleteMany
 */
export type KeyPairDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which KeyPairs to delete
     */
    where?: Prisma.KeyPairWhereInput;
    /**
     * Limit how many KeyPairs to delete.
     */
    limit?: number;
};
/**
 * KeyPair without action
 */
export type KeyPairDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyPair
     */
    select?: Prisma.KeyPairSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the KeyPair
     */
    omit?: Prisma.KeyPairOmit<ExtArgs> | null;
};
