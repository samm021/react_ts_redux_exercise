import axios from 'axios';
import { Dispatch } from 'redux';
import { PackAction } from '../../interface/PackAction';
import { PackActionType } from '../../enum/PackActionType';
import { toPackList } from '../../interface/Pack';

const baseUrl = 'https://registry.npmjs.org/-/v1/search';

export const searchPack = (searchTerm: string) => {
  return async (dispatch: Dispatch<PackAction>) => {
    dispatch({
      type: PackActionType.loading,
    })
    try {
      const { data } = await axios.get(baseUrl, { params: { text: searchTerm } });
      dispatch({ type: PackActionType.success, payload: toPackList(data) });
    } catch (error) {
      dispatch({ type: PackActionType.error, payload: error.message });
    }
  }
};