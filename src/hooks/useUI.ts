import { useAppDispatch, useAppSelector } from './redux'
import { setTab, setVisible } from '../store/reducers/UISlice'

export const useUI = () => {
  const dispatch = useAppDispatch()
  const tab = useAppSelector((state) => state.ui.tab)
  const visible = useAppSelector((state) => state.ui.visible)

  const changeTab = (value: string) => dispatch(setTab(value)) 
  const changeVisible = (value: boolean) => dispatch(setVisible(value))
  
  return {dispatch, tab, visible, changeTab, changeVisible}
}