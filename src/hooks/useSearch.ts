import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchPack} from '../state/events/PackEvents';

export const useSearch = () => {
  const dispatch = useDispatch();

  return bindActionCreators(searchPack, dispatch);
}