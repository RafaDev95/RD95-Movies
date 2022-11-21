import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SidebarState = {
  isActive: boolean
}

const initialState: SidebarState = {
  isActive: false
}

export const SidebarSlice = createSlice({
  name: 'sidebarSlice',

  initialState,
  reducers: {
    toggleSidebar: (
      state,
      { payload: { isActive } }: PayloadAction<SidebarState>
    ) => {
      state.isActive = isActive
    }
  }
})

export const { toggleSidebar } = SidebarSlice.actions

export default SidebarSlice.reducer
