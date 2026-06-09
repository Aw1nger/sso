import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model FirstRegister
 *
 */
export type FirstRegisterModel = runtime.Types.Result.DefaultSelection<Prisma.$FirstRegisterPayload>;
export type AggregateFirstRegister = {
    _count: FirstRegisterCountAggregateOutputType | null;
    _avg: FirstRegisterAvgAggregateOutputType | null;
    _sum: FirstRegisterSumAggregateOutputType | null;
    _min: FirstRegisterMinAggregateOutputType | null;
    _max: FirstRegisterMaxAggregateOutputType | null;
};
export type FirstRegisterAvgAggregateOutputType = {
    id: number | null;
};
export type FirstRegisterSumAggregateOutputType = {
    id: number | null;
};
export type FirstRegisterMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    username: string | null;
    code: string | null;
    expiresAt: Date | null;
};
export type FirstRegisterMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    username: string | null;
    code: string | null;
    expiresAt: Date | null;
};
export type FirstRegisterCountAggregateOutputType = {
    id: number;
    email: number;
    username: number;
    code: number;
    expiresAt: number;
    _all: number;
};
export type FirstRegisterAvgAggregateInputType = {
    id?: true;
};
export type FirstRegisterSumAggregateInputType = {
    id?: true;
};
export type FirstRegisterMinAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    code?: true;
    expiresAt?: true;
};
export type FirstRegisterMaxAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    code?: true;
    expiresAt?: true;
};
export type FirstRegisterCountAggregateInputType = {
    id?: true;
    email?: true;
    username?: true;
    code?: true;
    expiresAt?: true;
    _all?: true;
};
export type FirstRegisterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FirstRegister to aggregate.
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirstRegisters to fetch.
     */
    orderBy?: Prisma.FirstRegisterOrderByWithRelationInput | Prisma.FirstRegisterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FirstRegisterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirstRegisters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirstRegisters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FirstRegisters
    **/
    _count?: true | FirstRegisterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FirstRegisterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FirstRegisterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FirstRegisterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FirstRegisterMaxAggregateInputType;
};
export type GetFirstRegisterAggregateType<T extends FirstRegisterAggregateArgs> = {
    [P in keyof T & keyof AggregateFirstRegister]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFirstRegister[P]> : Prisma.GetScalarType<T[P], AggregateFirstRegister[P]>;
};
export type FirstRegisterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FirstRegisterWhereInput;
    orderBy?: Prisma.FirstRegisterOrderByWithAggregationInput | Prisma.FirstRegisterOrderByWithAggregationInput[];
    by: Prisma.FirstRegisterScalarFieldEnum[] | Prisma.FirstRegisterScalarFieldEnum;
    having?: Prisma.FirstRegisterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FirstRegisterCountAggregateInputType | true;
    _avg?: FirstRegisterAvgAggregateInputType;
    _sum?: FirstRegisterSumAggregateInputType;
    _min?: FirstRegisterMinAggregateInputType;
    _max?: FirstRegisterMaxAggregateInputType;
};
export type FirstRegisterGroupByOutputType = {
    id: number;
    email: string;
    username: string;
    code: string;
    expiresAt: Date;
    _count: FirstRegisterCountAggregateOutputType | null;
    _avg: FirstRegisterAvgAggregateOutputType | null;
    _sum: FirstRegisterSumAggregateOutputType | null;
    _min: FirstRegisterMinAggregateOutputType | null;
    _max: FirstRegisterMaxAggregateOutputType | null;
};
export type GetFirstRegisterGroupByPayload<T extends FirstRegisterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FirstRegisterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FirstRegisterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FirstRegisterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FirstRegisterGroupByOutputType[P]>;
}>>;
export type FirstRegisterWhereInput = {
    AND?: Prisma.FirstRegisterWhereInput | Prisma.FirstRegisterWhereInput[];
    OR?: Prisma.FirstRegisterWhereInput[];
    NOT?: Prisma.FirstRegisterWhereInput | Prisma.FirstRegisterWhereInput[];
    id?: Prisma.IntFilter<"FirstRegister"> | number;
    email?: Prisma.StringFilter<"FirstRegister"> | string;
    username?: Prisma.StringFilter<"FirstRegister"> | string;
    code?: Prisma.StringFilter<"FirstRegister"> | string;
    expiresAt?: Prisma.DateTimeFilter<"FirstRegister"> | Date | string;
};
export type FirstRegisterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type FirstRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FirstRegisterWhereInput | Prisma.FirstRegisterWhereInput[];
    OR?: Prisma.FirstRegisterWhereInput[];
    NOT?: Prisma.FirstRegisterWhereInput | Prisma.FirstRegisterWhereInput[];
    email?: Prisma.StringFilter<"FirstRegister"> | string;
    username?: Prisma.StringFilter<"FirstRegister"> | string;
    code?: Prisma.StringFilter<"FirstRegister"> | string;
    expiresAt?: Prisma.DateTimeFilter<"FirstRegister"> | Date | string;
}, "id">;
export type FirstRegisterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    _count?: Prisma.FirstRegisterCountOrderByAggregateInput;
    _avg?: Prisma.FirstRegisterAvgOrderByAggregateInput;
    _max?: Prisma.FirstRegisterMaxOrderByAggregateInput;
    _min?: Prisma.FirstRegisterMinOrderByAggregateInput;
    _sum?: Prisma.FirstRegisterSumOrderByAggregateInput;
};
export type FirstRegisterScalarWhereWithAggregatesInput = {
    AND?: Prisma.FirstRegisterScalarWhereWithAggregatesInput | Prisma.FirstRegisterScalarWhereWithAggregatesInput[];
    OR?: Prisma.FirstRegisterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FirstRegisterScalarWhereWithAggregatesInput | Prisma.FirstRegisterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FirstRegister"> | number;
    email?: Prisma.StringWithAggregatesFilter<"FirstRegister"> | string;
    username?: Prisma.StringWithAggregatesFilter<"FirstRegister"> | string;
    code?: Prisma.StringWithAggregatesFilter<"FirstRegister"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"FirstRegister"> | Date | string;
};
export type FirstRegisterCreateInput = {
    email: string;
    username: string;
    code: string;
    expiresAt: Date | string;
};
export type FirstRegisterUncheckedCreateInput = {
    id?: number;
    email: string;
    username: string;
    code: string;
    expiresAt: Date | string;
};
export type FirstRegisterUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FirstRegisterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FirstRegisterCreateManyInput = {
    id?: number;
    email: string;
    username: string;
    code: string;
    expiresAt: Date | string;
};
export type FirstRegisterUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FirstRegisterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FirstRegisterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type FirstRegisterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FirstRegisterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type FirstRegisterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type FirstRegisterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FirstRegisterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    code?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["firstRegister"]>;
export type FirstRegisterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    code?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["firstRegister"]>;
export type FirstRegisterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    username?: boolean;
    code?: boolean;
    expiresAt?: boolean;
}, ExtArgs["result"]["firstRegister"]>;
export type FirstRegisterSelectScalar = {
    id?: boolean;
    email?: boolean;
    username?: boolean;
    code?: boolean;
    expiresAt?: boolean;
};
export type FirstRegisterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "username" | "code" | "expiresAt", ExtArgs["result"]["firstRegister"]>;
export type $FirstRegisterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FirstRegister";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        username: string;
        code: string;
        expiresAt: Date;
    }, ExtArgs["result"]["firstRegister"]>;
    composites: {};
};
export type FirstRegisterGetPayload<S extends boolean | null | undefined | FirstRegisterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload, S>;
export type FirstRegisterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FirstRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FirstRegisterCountAggregateInputType | true;
};
export interface FirstRegisterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FirstRegister'];
        meta: {
            name: 'FirstRegister';
        };
    };
    /**
     * Find zero or one FirstRegister that matches the filter.
     * @param {FirstRegisterFindUniqueArgs} args - Arguments to find a FirstRegister
     * @example
     * // Get one FirstRegister
     * const firstRegister = await prisma.firstRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FirstRegisterFindUniqueArgs>(args: Prisma.SelectSubset<T, FirstRegisterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FirstRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FirstRegisterFindUniqueOrThrowArgs} args - Arguments to find a FirstRegister
     * @example
     * // Get one FirstRegister
     * const firstRegister = await prisma.firstRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FirstRegisterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FirstRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FirstRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterFindFirstArgs} args - Arguments to find a FirstRegister
     * @example
     * // Get one FirstRegister
     * const firstRegister = await prisma.firstRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FirstRegisterFindFirstArgs>(args?: Prisma.SelectSubset<T, FirstRegisterFindFirstArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FirstRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterFindFirstOrThrowArgs} args - Arguments to find a FirstRegister
     * @example
     * // Get one FirstRegister
     * const firstRegister = await prisma.firstRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FirstRegisterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FirstRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FirstRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FirstRegisters
     * const firstRegisters = await prisma.firstRegister.findMany()
     *
     * // Get first 10 FirstRegisters
     * const firstRegisters = await prisma.firstRegister.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const firstRegisterWithIdOnly = await prisma.firstRegister.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FirstRegisterFindManyArgs>(args?: Prisma.SelectSubset<T, FirstRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FirstRegister.
     * @param {FirstRegisterCreateArgs} args - Arguments to create a FirstRegister.
     * @example
     * // Create one FirstRegister
     * const FirstRegister = await prisma.firstRegister.create({
     *   data: {
     *     // ... data to create a FirstRegister
     *   }
     * })
     *
     */
    create<T extends FirstRegisterCreateArgs>(args: Prisma.SelectSubset<T, FirstRegisterCreateArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FirstRegisters.
     * @param {FirstRegisterCreateManyArgs} args - Arguments to create many FirstRegisters.
     * @example
     * // Create many FirstRegisters
     * const firstRegister = await prisma.firstRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FirstRegisterCreateManyArgs>(args?: Prisma.SelectSubset<T, FirstRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FirstRegisters and returns the data saved in the database.
     * @param {FirstRegisterCreateManyAndReturnArgs} args - Arguments to create many FirstRegisters.
     * @example
     * // Create many FirstRegisters
     * const firstRegister = await prisma.firstRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FirstRegisters and only return the `id`
     * const firstRegisterWithIdOnly = await prisma.firstRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FirstRegisterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FirstRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FirstRegister.
     * @param {FirstRegisterDeleteArgs} args - Arguments to delete one FirstRegister.
     * @example
     * // Delete one FirstRegister
     * const FirstRegister = await prisma.firstRegister.delete({
     *   where: {
     *     // ... filter to delete one FirstRegister
     *   }
     * })
     *
     */
    delete<T extends FirstRegisterDeleteArgs>(args: Prisma.SelectSubset<T, FirstRegisterDeleteArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FirstRegister.
     * @param {FirstRegisterUpdateArgs} args - Arguments to update one FirstRegister.
     * @example
     * // Update one FirstRegister
     * const firstRegister = await prisma.firstRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FirstRegisterUpdateArgs>(args: Prisma.SelectSubset<T, FirstRegisterUpdateArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FirstRegisters.
     * @param {FirstRegisterDeleteManyArgs} args - Arguments to filter FirstRegisters to delete.
     * @example
     * // Delete a few FirstRegisters
     * const { count } = await prisma.firstRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FirstRegisterDeleteManyArgs>(args?: Prisma.SelectSubset<T, FirstRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FirstRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FirstRegisters
     * const firstRegister = await prisma.firstRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FirstRegisterUpdateManyArgs>(args: Prisma.SelectSubset<T, FirstRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FirstRegisters and returns the data updated in the database.
     * @param {FirstRegisterUpdateManyAndReturnArgs} args - Arguments to update many FirstRegisters.
     * @example
     * // Update many FirstRegisters
     * const firstRegister = await prisma.firstRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FirstRegisters and only return the `id`
     * const firstRegisterWithIdOnly = await prisma.firstRegister.updateManyAndReturn({
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
    updateManyAndReturn<T extends FirstRegisterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FirstRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FirstRegister.
     * @param {FirstRegisterUpsertArgs} args - Arguments to update or create a FirstRegister.
     * @example
     * // Update or create a FirstRegister
     * const firstRegister = await prisma.firstRegister.upsert({
     *   create: {
     *     // ... data to create a FirstRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FirstRegister we want to update
     *   }
     * })
     */
    upsert<T extends FirstRegisterUpsertArgs>(args: Prisma.SelectSubset<T, FirstRegisterUpsertArgs<ExtArgs>>): Prisma.Prisma__FirstRegisterClient<runtime.Types.Result.GetResult<Prisma.$FirstRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FirstRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterCountArgs} args - Arguments to filter FirstRegisters to count.
     * @example
     * // Count the number of FirstRegisters
     * const count = await prisma.firstRegister.count({
     *   where: {
     *     // ... the filter for the FirstRegisters we want to count
     *   }
     * })
    **/
    count<T extends FirstRegisterCountArgs>(args?: Prisma.Subset<T, FirstRegisterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FirstRegisterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FirstRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FirstRegisterAggregateArgs>(args: Prisma.Subset<T, FirstRegisterAggregateArgs>): Prisma.PrismaPromise<GetFirstRegisterAggregateType<T>>;
    /**
     * Group by FirstRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FirstRegisterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FirstRegisterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FirstRegisterGroupByArgs['orderBy'];
    } : {
        orderBy?: FirstRegisterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FirstRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirstRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FirstRegister model
     */
    readonly fields: FirstRegisterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FirstRegister.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FirstRegisterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the FirstRegister model
 */
export interface FirstRegisterFieldRefs {
    readonly id: Prisma.FieldRef<"FirstRegister", 'Int'>;
    readonly email: Prisma.FieldRef<"FirstRegister", 'String'>;
    readonly username: Prisma.FieldRef<"FirstRegister", 'String'>;
    readonly code: Prisma.FieldRef<"FirstRegister", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"FirstRegister", 'DateTime'>;
}
/**
 * FirstRegister findUnique
 */
export type FirstRegisterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter, which FirstRegister to fetch.
     */
    where: Prisma.FirstRegisterWhereUniqueInput;
};
/**
 * FirstRegister findUniqueOrThrow
 */
export type FirstRegisterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter, which FirstRegister to fetch.
     */
    where: Prisma.FirstRegisterWhereUniqueInput;
};
/**
 * FirstRegister findFirst
 */
export type FirstRegisterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter, which FirstRegister to fetch.
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirstRegisters to fetch.
     */
    orderBy?: Prisma.FirstRegisterOrderByWithRelationInput | Prisma.FirstRegisterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FirstRegisters.
     */
    cursor?: Prisma.FirstRegisterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirstRegisters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirstRegisters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirstRegisters.
     */
    distinct?: Prisma.FirstRegisterScalarFieldEnum | Prisma.FirstRegisterScalarFieldEnum[];
};
/**
 * FirstRegister findFirstOrThrow
 */
export type FirstRegisterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter, which FirstRegister to fetch.
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirstRegisters to fetch.
     */
    orderBy?: Prisma.FirstRegisterOrderByWithRelationInput | Prisma.FirstRegisterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FirstRegisters.
     */
    cursor?: Prisma.FirstRegisterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirstRegisters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirstRegisters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirstRegisters.
     */
    distinct?: Prisma.FirstRegisterScalarFieldEnum | Prisma.FirstRegisterScalarFieldEnum[];
};
/**
 * FirstRegister findMany
 */
export type FirstRegisterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter, which FirstRegisters to fetch.
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FirstRegisters to fetch.
     */
    orderBy?: Prisma.FirstRegisterOrderByWithRelationInput | Prisma.FirstRegisterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FirstRegisters.
     */
    cursor?: Prisma.FirstRegisterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FirstRegisters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FirstRegisters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FirstRegisters.
     */
    distinct?: Prisma.FirstRegisterScalarFieldEnum | Prisma.FirstRegisterScalarFieldEnum[];
};
/**
 * FirstRegister create
 */
export type FirstRegisterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * The data needed to create a FirstRegister.
     */
    data: Prisma.XOR<Prisma.FirstRegisterCreateInput, Prisma.FirstRegisterUncheckedCreateInput>;
};
/**
 * FirstRegister createMany
 */
export type FirstRegisterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FirstRegisters.
     */
    data: Prisma.FirstRegisterCreateManyInput | Prisma.FirstRegisterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FirstRegister createManyAndReturn
 */
export type FirstRegisterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * The data used to create many FirstRegisters.
     */
    data: Prisma.FirstRegisterCreateManyInput | Prisma.FirstRegisterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FirstRegister update
 */
export type FirstRegisterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * The data needed to update a FirstRegister.
     */
    data: Prisma.XOR<Prisma.FirstRegisterUpdateInput, Prisma.FirstRegisterUncheckedUpdateInput>;
    /**
     * Choose, which FirstRegister to update.
     */
    where: Prisma.FirstRegisterWhereUniqueInput;
};
/**
 * FirstRegister updateMany
 */
export type FirstRegisterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FirstRegisters.
     */
    data: Prisma.XOR<Prisma.FirstRegisterUpdateManyMutationInput, Prisma.FirstRegisterUncheckedUpdateManyInput>;
    /**
     * Filter which FirstRegisters to update
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * Limit how many FirstRegisters to update.
     */
    limit?: number;
};
/**
 * FirstRegister updateManyAndReturn
 */
export type FirstRegisterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * The data used to update FirstRegisters.
     */
    data: Prisma.XOR<Prisma.FirstRegisterUpdateManyMutationInput, Prisma.FirstRegisterUncheckedUpdateManyInput>;
    /**
     * Filter which FirstRegisters to update
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * Limit how many FirstRegisters to update.
     */
    limit?: number;
};
/**
 * FirstRegister upsert
 */
export type FirstRegisterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * The filter to search for the FirstRegister to update in case it exists.
     */
    where: Prisma.FirstRegisterWhereUniqueInput;
    /**
     * In case the FirstRegister found by the `where` argument doesn't exist, create a new FirstRegister with this data.
     */
    create: Prisma.XOR<Prisma.FirstRegisterCreateInput, Prisma.FirstRegisterUncheckedCreateInput>;
    /**
     * In case the FirstRegister was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FirstRegisterUpdateInput, Prisma.FirstRegisterUncheckedUpdateInput>;
};
/**
 * FirstRegister delete
 */
export type FirstRegisterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
    /**
     * Filter which FirstRegister to delete.
     */
    where: Prisma.FirstRegisterWhereUniqueInput;
};
/**
 * FirstRegister deleteMany
 */
export type FirstRegisterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FirstRegisters to delete
     */
    where?: Prisma.FirstRegisterWhereInput;
    /**
     * Limit how many FirstRegisters to delete.
     */
    limit?: number;
};
/**
 * FirstRegister without action
 */
export type FirstRegisterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FirstRegister
     */
    select?: Prisma.FirstRegisterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FirstRegister
     */
    omit?: Prisma.FirstRegisterOmit<ExtArgs> | null;
};
