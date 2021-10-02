export interface FetchableType<E extends string> {
    readonly name: E;
    readonly category: FetchableTypeCategory;
    readonly superTypes: readonly FetchableType<string>[];
    readonly declaredFields: ReadonlyMap<string, FetchableField>;
    readonly fields: ReadonlyMap<string, FetchableField>;
}
export interface FetchableField {
    readonly name: string;
    readonly category: FetchableFieldCategory;
    readonly argGraphQLTypeMap: ReadonlyMap<string, string>;
    readonly isPlural: boolean;
    readonly isAssociation: boolean;
    readonly isFunction: boolean;
}
export declare type FetchableTypeCategory = "OBJECT" | "CONNECTION" | "EDGE";
export declare type FetchableFieldCategory = "ID" | "SCALAR" | "REFERENCE" | "LIST" | "CONNECTION";
export declare function createFetchableType<E extends string>(name: E, category: FetchableTypeCategory, superTypes: readonly FetchableType<string>[], declaredFields: ReadonlyArray<string | {
    readonly name: string;
    readonly category: FetchableFieldCategory;
    readonly argGraphQLTypeMap?: {
        readonly [key: string]: string;
    };
}>): FetchableType<E>;
