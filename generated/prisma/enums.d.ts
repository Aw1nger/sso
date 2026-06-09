export declare const KeyPairStatus: {
    readonly expired: "expired";
    readonly writeoff: "writeoff";
    readonly active: "active";
};
export type KeyPairStatus = (typeof KeyPairStatus)[keyof typeof KeyPairStatus];
