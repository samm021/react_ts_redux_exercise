import { PackActionType } from '../enum/PackActionType';
import { Pack } from './Pack';

export interface PackActionLoading {
  type: PackActionType.loading
}

export interface PackActionSuccess { type: PackActionType.success, payload: Pack[] }

export interface PackActionError { type: PackActionType.error, payload: string }

export type PackAction = PackActionLoading | PackActionSuccess | PackActionError;