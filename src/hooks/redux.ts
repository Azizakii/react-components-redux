import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {AppDispatch} from '../store/store'
import { useDispatch } from "react-redux";
import { RootState } from '../store/store';




//типизированные диспатч и селектор
export const useAppDispatch =() => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;