/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * This is the external face of extension.bundle.js, the main webpack bundle for the extension.
 * Anything needing to be exposed outside of the extension sources must be exported from here, because
 * everything else will be in private modules in extension.bundle.js.
 */

// Exports for tests
// The tests are not packaged with the webpack bundle and therefore only have access to code exported from this file.
//
// The tests should import '../extension.bundle'. At design-time they live in tests/ and so will pick up this file (extension.bundle.ts).
// At runtime the tests live in dist/tests and will therefore pick up the main webpack bundle at dist/extension.bundle.js.
export * from '@microsoft/vscode-azext-utils';
export * from './api/src/AzExtResourceType';
// export * from './api/src';
export * from './api/src/extensionApi';
export * from './api/src/resources/azure';
export * from './api/src/resources/base';
export * from './api/src/resources/workspace';
export * from './api/src/utils/getApi';
export * from './api/src/utils/wrapper';
export { convertV1TreeItemId } from './src/api/compatibility/CompatibleAzExtTreeDataProvider';
export * from './src/api/DefaultAzureResourceProvider';
export * from './src/services/AzureResourcesService';
export * from './src/commands/openInPortal';
export * from './src/commands/tags/getTagDiagnostics';
export * from './src/commands/viewProperties';
// Export activate/deactivate for main.js
export { activate, deactivate } from './src/extension';
export * from './src/extensionVariables';
export * from './src/services/SubscriptionProvider';
export * from './src/tree/azure/AzureResourceItem';
export * from './src/tree/azure/GroupingItem';
export * from './src/tree/azure/SubscriptionItem';
export { createSubscriptionContext as createSubscriptionContext2 } from './src/tree/azure/VSCodeAuthentication';
export * from './src/tree/BranchDataItemWrapper';
export * from './src/tree/InvalidItem';
export * from './src/utils/wrapFunctionsInTelemetry';

// NOTE: The auto-fix action "source.organizeImports" does weird things with this file, but there doesn't seem to be a way to disable it on a per-file basis so we'll just let it happen
