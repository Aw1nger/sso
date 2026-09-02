export declare const KeyPairStatus: {
    readonly expired: "expired";
    readonly writeoff: "writeoff";
    readonly active: "active";
};
export type KeyPairStatus = (typeof KeyPairStatus)[keyof typeof KeyPairStatus];
export declare const UserStatus: {
    readonly pending: "pending";
    readonly active: "active";
    readonly rejected: "rejected";
    readonly blocked: "blocked";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Role: {
    readonly admin: "admin";
    readonly user: "user";
};
export type Role = (typeof Role)[keyof typeof Role];
