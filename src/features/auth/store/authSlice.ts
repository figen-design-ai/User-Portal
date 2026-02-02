import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, AuthModalType } from '../types'

const initialState: AuthState = {
  isModalOpen: false,
  modalType: 'login',
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<AuthModalType>) => {
      state.isModalOpen = true
      state.modalType = action.payload
    },
    closeModal: state => {
      state.isModalOpen = false
    },
    setModalType: (state, action: PayloadAction<AuthModalType>) => {
      state.modalType = action.payload
    },
    login: (state, action: PayloadAction<{ email: string; name?: string }>) => {
      state.isAuthenticated = true
      state.user = {
        email: action.payload.email,
        name: action.payload.name,
      }
      state.isModalOpen = false
    },
    logout: state => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { openModal, closeModal, setModalType, login, logout } = authSlice.actions
export default authSlice.reducer
