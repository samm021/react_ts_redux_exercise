import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from '../state/reducers/mainReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;