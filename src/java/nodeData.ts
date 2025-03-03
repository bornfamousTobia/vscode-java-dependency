// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export enum NodeKind {
    Workspace = 1,
    Project = 2,
    PackageRoot = 3,
    Package = 4,
    PrimaryType = 5,
    Container = 6,
    Folder = 7,
    File = 8,
}

export enum TypeKind {
    Class = 1,
    Interface = 2,
    Enum = 3,
}

export interface INodeData {
    displayName?: string;
    name: string;
    moduleName?: string;
    path?: string;
    /**
     * returned from Java side using `IJavaElement.getHandlerIdentifier();`
     */
    handlerIdentifier?: string;
    uri?: string;
    kind: NodeKind;
    children?: any[];
    metaData?: { [id: string]: any };
}
