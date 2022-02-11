import { PackSearchEnum } from '../enum/PackSearchEnum';

export interface PackActionLoading {
  type: PackSearchEnum.loading
}

export interface PackActionSuccess { type: PackSearchEnum.success, payload: string[] }

export interface PackActionError { type: PackSearchEnum.error, payload: string }

export type PackAction = PackActionLoading | PackActionSuccess | PackActionError;