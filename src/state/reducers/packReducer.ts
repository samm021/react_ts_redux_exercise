import { PackState } from '../../interface/PackState';
import { PackAction } from '../../interface/PackAction';
import { PackActionType } from '../../enum/PackSearchEnum';

export const packReducer = (state: PackState, action: PackAction): PackState => {
  switch (action.type) {
    case PackActionType.loading:
      return { loading: true, error: null, data: [] };
    case PackActionType.success:
      return { loading: false, error: null, data: action.payload };
    case PackActionType.error:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}