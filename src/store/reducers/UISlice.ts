
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UIState {
    visible: boolean,
    tab: string
}

const initialState: UIState = {
    visible: true,
    tab: 'effect'
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setVisible(state, action: PayloadAction<boolean>) {
            state.visible = action.payload
        },
        setTab(state, action: PayloadAction<string>) {
            state.tab = action.payload
        }
    }
}) 

export const {setVisible, setTab} = uiSlice.actions;
export default uiSlice.reducer