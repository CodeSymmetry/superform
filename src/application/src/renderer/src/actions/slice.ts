import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ActionType } from '.'

export interface ActionsState {
  actions: Partial<Record<ActionType, boolean>>
}

// Define the initial state using that type
const initialState: ActionsState = {
  actions: {
    [ActionType.CreateDomain]: false
  }
}

export const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    toggleAction: (state, action: PayloadAction<ActionType>) => {
      state.actions[action.payload] = !state.actions[action.payload]
    }
  }
})

export const { toggleAction } = actionsSlice.actions

export default actionsSlice.reducer
