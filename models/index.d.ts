import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerScanRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScanRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly timestamp?: string | null;
  readonly memo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScanRecord = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScanRecord, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly timestamp?: string | null;
  readonly memo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScanRecord = LazyLoading extends LazyLoadingDisabled ? EagerScanRecord : LazyScanRecord

export declare const ScanRecord: (new (init: ModelInit<ScanRecord>) => ScanRecord) & {
  copyOf(source: ScanRecord, mutator: (draft: MutableModel<ScanRecord>) => MutableModel<ScanRecord> | void): ScanRecord;
}